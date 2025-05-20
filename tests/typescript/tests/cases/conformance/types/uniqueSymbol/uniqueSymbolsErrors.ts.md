__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 3820,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 62,
            "decorators": [],
            "name": "invalidUniqueType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 49,
                "end": 62,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 56,
                  "end": 62
                }
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
      "type": "VariableDeclaration",
      "start": 64,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 95,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 78,
            "end": 95,
            "decorators": [],
            "optional": false,
            "properties": [],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 82,
                "end": 95,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 89,
                  "end": 95
                }
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
      "type": "VariableDeclaration",
      "start": 97,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 138,
            "decorators": [],
            "name": "invalidLetType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 125,
                "end": 138,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 132,
                  "end": 138
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 181,
            "decorators": [],
            "name": "invalidVarType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 168,
                "end": 181,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 175,
                  "end": 181
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 223,
      "end": 281,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 254,
        "decorators": [],
        "name": "invalidArgType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 255,
          "end": 273,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 273,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 260,
              "end": 273,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 267,
                "end": 273
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 274,
        "end": 280,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 276,
          "end": 280
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 282,
      "end": 351,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 317,
        "decorators": [],
        "name": "invalidRestArgType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 318,
          "end": 343,
          "argument": {
            "type": "Identifier",
            "start": 321,
            "end": 324,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 324,
            "end": 343,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 326,
              "end": 343,
              "elementType": {
                "type": "TSTypeOperator",
                "start": 327,
                "end": 340,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 334,
                  "end": 340
                }
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 344,
        "end": 350,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 346,
          "end": 350
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 352,
      "end": 404,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 386,
        "decorators": [],
        "name": "invalidReturnType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 388,
        "end": 403,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 390,
          "end": 403,
          "operator": "unique",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 397,
            "end": 403
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 405,
      "end": 465,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 437,
        "decorators": [],
        "name": "invalidThisType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 438,
          "end": 457,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 442,
            "end": 457,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 444,
              "end": 457,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 451,
                "end": 457
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 458,
        "end": 464,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 460,
          "end": 464
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 466,
      "end": 532,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 503,
        "decorators": [],
        "name": "invalidTypePredicate",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 504,
          "end": 510,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 510,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 507,
              "end": 510
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 511,
        "end": 531,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 513,
          "end": 531,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 513,
            "end": 514,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 518,
            "end": 531,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 518,
              "end": 531,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 525,
                "end": 531
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 533,
      "end": 614,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 580,
        "decorators": [],
        "name": "invalidTypeParameterConstraint",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 607,
        "end": 613,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 609,
          "end": 613
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 580,
        "end": 605,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 581,
            "end": 604,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 591,
              "end": 604,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 598,
                "end": 604
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
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
      "type": "TSDeclareFunction",
      "start": 615,
      "end": 687,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 659,
        "decorators": [],
        "name": "invalidTypeParameterDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 680,
        "end": 686,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 682,
          "end": 686
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 659,
        "end": 678,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 660,
            "end": 677,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeOperator",
              "start": 664,
              "end": 677,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 671,
                "end": 677
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
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
      "type": "ClassDeclaration",
      "start": 700,
      "end": 2166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 719,
        "end": 2166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 725,
            "end": 781,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 736,
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
              "start": 736,
              "end": 781,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 779,
                "end": 781,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 737,
                  "end": 777,
                  "decorators": [],
                  "name": "invalidConstructorArgType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 762,
                    "end": 777,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 764,
                      "end": 777,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 771,
                        "end": 777
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 787,
            "end": 839,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 796,
              "end": 823,
              "decorators": [],
              "name": "invalidReadonlyPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 823,
              "end": 838,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 825,
                "end": 838,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 832,
                  "end": 838
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 844,
            "end": 879,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 844,
              "end": 863,
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 878,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 865,
                "end": 878,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 872,
                  "end": 878
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 884,
            "end": 936,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 898,
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 898,
              "end": 936,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 925,
                "end": 936,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 927,
                    "end": 934,
                    "argument": null
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
                  "start": 899,
                  "end": 917,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 902,
                    "end": 917,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 904,
                      "end": 917,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 911,
                        "end": 917
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 918,
                "end": 924,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 920,
                  "end": 924
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 941,
            "end": 1005,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 941,
              "end": 959,
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 959,
              "end": 1005,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 994,
                "end": 1005,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 996,
                    "end": 1003,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 960,
                  "end": 986,
                  "argument": {
                    "type": "Identifier",
                    "start": 963,
                    "end": 967,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 967,
                    "end": 986,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 969,
                      "end": 986,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 970,
                        "end": 983,
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 977,
                          "end": 983
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 987,
                "end": 993,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 989,
                  "end": 993
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1010,
            "end": 1056,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1010,
              "end": 1027,
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1027,
              "end": 1056,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1045,
                "end": 1056,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1047,
                    "end": 1054,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1029,
                "end": 1044,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 1031,
                  "end": 1044,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1038,
                    "end": 1044
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1061,
            "end": 1115,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1061,
              "end": 1076,
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1076,
              "end": 1115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1104,
                "end": 1115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1106,
                    "end": 1113,
                    "argument": null
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
                  "start": 1077,
                  "end": 1096,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1081,
                    "end": 1096,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 1083,
                      "end": 1096,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1090,
                        "end": 1096
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1097,
                "end": 1103,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1099,
                  "end": 1103
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1120,
            "end": 1180,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1120,
              "end": 1140,
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1140,
              "end": 1180,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1169,
                "end": 1180,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1171,
                    "end": 1178,
                    "argument": null
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
                  "start": 1141,
                  "end": 1147,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1142,
                    "end": 1147,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1144,
                      "end": 1147
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1148,
                "end": 1168,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1150,
                  "end": 1168,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1155,
                    "end": 1168,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 1155,
                      "end": 1168,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1162,
                        "end": 1168
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1185,
            "end": 1260,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1185,
              "end": 1215,
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1215,
              "end": 1260,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1249,
                "end": 1260,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1251,
                    "end": 1258,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1242,
                "end": 1248,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1244,
                  "end": 1248
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1215,
                "end": 1240,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1216,
                    "end": 1239,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 1226,
                      "end": 1239,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1233,
                        "end": 1239
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1216,
                      "end": 1217,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1265,
            "end": 1331,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1265,
              "end": 1292,
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1292,
              "end": 1331,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1320,
                "end": 1331,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1322,
                    "end": 1329,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1313,
                "end": 1319,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1315,
                  "end": 1319
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1292,
                "end": 1311,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1293,
                    "end": 1310,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSTypeOperator",
                      "start": 1297,
                      "end": 1310,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1304,
                        "end": 1310
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1293,
                      "end": 1294,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1336,
            "end": 1382,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1340,
              "end": 1353,
              "decorators": [],
              "name": "invalidGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1353,
              "end": 1382,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1371,
                "end": 1382,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1373,
                    "end": 1380,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1355,
                "end": 1370,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 1357,
                  "end": 1370,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1364,
                    "end": 1370
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1387,
            "end": 1436,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1391,
              "end": 1404,
              "decorators": [],
              "name": "invalidSetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1404,
              "end": 1436,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1425,
                "end": 1436,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1427,
                    "end": 1434,
                    "argument": null
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
                  "start": 1405,
                  "end": 1423,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1408,
                    "end": 1423,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 1410,
                      "end": 1423,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1417,
                        "end": 1423
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1442,
            "end": 1490,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1449,
              "end": 1474,
              "decorators": [],
              "name": "invalidStaticPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1474,
              "end": 1489,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1476,
                "end": 1489,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1483,
                  "end": 1489
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1495,
            "end": 1560,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1502,
              "end": 1522,
              "decorators": [],
              "name": "invalidStaticArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1522,
              "end": 1560,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1549,
                "end": 1560,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1551,
                    "end": 1558,
                    "argument": null
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
                  "start": 1523,
                  "end": 1541,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1526,
                    "end": 1541,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 1528,
                      "end": 1541,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1535,
                        "end": 1541
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1542,
                "end": 1548,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1544,
                  "end": 1548
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1565,
            "end": 1642,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1572,
              "end": 1596,
              "decorators": [],
              "name": "invalidStaticRestArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1596,
              "end": 1642,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1631,
                "end": 1642,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1633,
                    "end": 1640,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1597,
                  "end": 1623,
                  "argument": {
                    "type": "Identifier",
                    "start": 1600,
                    "end": 1604,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1604,
                    "end": 1623,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1606,
                      "end": 1623,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 1607,
                        "end": 1620,
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 1614,
                          "end": 1620
                        }
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1624,
                "end": 1630,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1626,
                  "end": 1630
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1647,
            "end": 1706,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1654,
              "end": 1677,
              "decorators": [],
              "name": "invalidStaticReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1677,
              "end": 1706,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1695,
                "end": 1706,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1697,
                    "end": 1704,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1679,
                "end": 1694,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 1681,
                  "end": 1694,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1688,
                    "end": 1694
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1711,
            "end": 1778,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1718,
              "end": 1739,
              "decorators": [],
              "name": "invalidStaticThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1739,
              "end": 1778,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1767,
                "end": 1778,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1769,
                    "end": 1776,
                    "argument": null
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
                  "start": 1740,
                  "end": 1759,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1744,
                    "end": 1759,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 1746,
                      "end": 1759,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1753,
                        "end": 1759
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1760,
                "end": 1766,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1762,
                  "end": 1766
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1783,
            "end": 1856,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1790,
              "end": 1816,
              "decorators": [],
              "name": "invalidStaticTypePredicate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1816,
              "end": 1856,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1845,
                "end": 1856,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1847,
                    "end": 1854,
                    "argument": null
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
                  "start": 1817,
                  "end": 1823,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1818,
                    "end": 1823,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1820,
                      "end": 1823
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1824,
                "end": 1844,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1826,
                  "end": 1844,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1826,
                    "end": 1827,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1831,
                    "end": 1844,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 1831,
                      "end": 1844,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1838,
                        "end": 1844
                      }
                    }
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1861,
            "end": 1949,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1868,
              "end": 1904,
              "decorators": [],
              "name": "invalidStaticTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1904,
              "end": 1949,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1938,
                "end": 1949,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1940,
                    "end": 1947,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1931,
                "end": 1937,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1933,
                  "end": 1937
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1904,
                "end": 1929,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1905,
                    "end": 1928,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 1915,
                      "end": 1928,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1922,
                        "end": 1928
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1905,
                      "end": 1906,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1954,
            "end": 2033,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1994,
              "decorators": [],
              "name": "invalidStaticTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1994,
              "end": 2033,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2022,
                "end": 2033,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2024,
                    "end": 2031,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2015,
                "end": 2021,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2017,
                  "end": 2021
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1994,
                "end": 2013,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1995,
                    "end": 2012,
                    "const": false,
                    "constraint": null,
                    "default": {
                      "type": "TSTypeOperator",
                      "start": 1999,
                      "end": 2012,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2006,
                        "end": 2012
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1995,
                      "end": 1996,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2038,
            "end": 2097,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2049,
              "end": 2068,
              "decorators": [],
              "name": "invalidStaticGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2068,
              "end": 2097,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2086,
                "end": 2097,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2088,
                    "end": 2095,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2070,
                "end": 2085,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 2072,
                  "end": 2085,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2079,
                    "end": 2085
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2102,
            "end": 2164,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2113,
              "end": 2132,
              "decorators": [],
              "name": "invalidStaticSetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 2132,
              "end": 2164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2153,
                "end": 2164,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2155,
                    "end": 2162,
                    "argument": null
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
                  "start": 2133,
                  "end": 2151,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2136,
                    "end": 2151,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 2138,
                      "end": 2151,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2145,
                        "end": 2151
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
        "start": 706,
        "end": 718,
        "decorators": [],
        "name": "InvalidClass",
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
      "start": 2182,
      "end": 2620,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2209,
        "end": 2620,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2215,
            "end": 2250,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2215,
              "end": 2234,
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2234,
              "end": 2249,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2236,
                "end": 2249,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2243,
                  "end": 2249
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2255,
            "end": 2296,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2255,
              "end": 2269,
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2270,
                "end": 2288,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2273,
                  "end": 2288,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 2275,
                    "end": 2288,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2282,
                      "end": 2288
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2289,
              "end": 2295,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2291,
                "end": 2295
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2301,
            "end": 2354,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2301,
              "end": 2319,
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 2320,
                "end": 2346,
                "argument": {
                  "type": "Identifier",
                  "start": 2323,
                  "end": 2327,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2327,
                  "end": 2346,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2329,
                    "end": 2346,
                    "elementType": {
                      "type": "TSTypeOperator",
                      "start": 2330,
                      "end": 2343,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2337,
                        "end": 2343
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2347,
              "end": 2353,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2349,
                "end": 2353
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2359,
            "end": 2394,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2359,
              "end": 2376,
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2378,
              "end": 2393,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2380,
                "end": 2393,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2387,
                  "end": 2393
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2399,
            "end": 2436,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2399,
              "end": 2414,
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2415,
                "end": 2434,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2419,
                  "end": 2434,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 2421,
                    "end": 2434,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2428,
                      "end": 2434
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2441,
            "end": 2489,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2441,
              "end": 2461,
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2462,
                "end": 2468,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2463,
                  "end": 2468,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2465,
                    "end": 2468
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2469,
              "end": 2489,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 2471,
                "end": 2489,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 2471,
                  "end": 2472,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2476,
                  "end": 2489,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 2476,
                    "end": 2489,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2483,
                      "end": 2489
                    }
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2494,
            "end": 2558,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2494,
              "end": 2524,
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2551,
              "end": 2557,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2553,
                "end": 2557
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2524,
              "end": 2549,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2525,
                  "end": 2548,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 2535,
                    "end": 2548,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2542,
                      "end": 2548
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2525,
                    "end": 2526,
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
            "type": "TSMethodSignature",
            "start": 2563,
            "end": 2618,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2563,
              "end": 2590,
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2611,
              "end": 2617,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2613,
                "end": 2617
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2590,
              "end": 2609,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2591,
                  "end": 2608,
                  "const": false,
                  "constraint": null,
                  "default": {
                    "type": "TSTypeOperator",
                    "start": 2595,
                    "end": 2608,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2602,
                      "end": 2608
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2591,
                    "end": 2592,
                    "decorators": [],
                    "name": "T",
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
        "start": 2192,
        "end": 2208,
        "decorators": [],
        "name": "InvalidInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2639,
      "end": 3077,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2644,
        "end": 2662,
        "decorators": [],
        "name": "InvalidTypeLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2665,
        "end": 3076,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2671,
            "end": 2706,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2671,
              "end": 2690,
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2690,
              "end": 2705,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2692,
                "end": 2705,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2699,
                  "end": 2705
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 2711,
            "end": 2752,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2711,
              "end": 2725,
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2726,
                "end": 2744,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2729,
                  "end": 2744,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 2731,
                    "end": 2744,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2738,
                      "end": 2744
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2745,
              "end": 2751,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2747,
                "end": 2751
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2757,
            "end": 2810,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2757,
              "end": 2775,
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 2776,
                "end": 2802,
                "argument": {
                  "type": "Identifier",
                  "start": 2779,
                  "end": 2783,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2783,
                  "end": 2802,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2785,
                    "end": 2802,
                    "elementType": {
                      "type": "TSTypeOperator",
                      "start": 2786,
                      "end": 2799,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2793,
                        "end": 2799
                      }
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2803,
              "end": 2809,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2805,
                "end": 2809
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2815,
            "end": 2850,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2815,
              "end": 2832,
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2834,
              "end": 2849,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2836,
                "end": 2849,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2843,
                  "end": 2849
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2855,
            "end": 2892,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2855,
              "end": 2870,
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2871,
                "end": 2890,
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2875,
                  "end": 2890,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 2877,
                    "end": 2890,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2884,
                      "end": 2890
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2897,
            "end": 2945,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2897,
              "end": 2917,
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2918,
                "end": 2924,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2919,
                  "end": 2924,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2921,
                    "end": 2924
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2925,
              "end": 2945,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 2927,
                "end": 2945,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 2927,
                  "end": 2928,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2932,
                  "end": 2945,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 2932,
                    "end": 2945,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2939,
                      "end": 2945
                    }
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 2950,
            "end": 3014,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2950,
              "end": 2980,
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3007,
              "end": 3013,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3009,
                "end": 3013
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2980,
              "end": 3005,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2981,
                  "end": 3004,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 2991,
                    "end": 3004,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2998,
                      "end": 3004
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 2981,
                    "end": 2982,
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
            "type": "TSMethodSignature",
            "start": 3019,
            "end": 3074,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3019,
              "end": 3046,
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3067,
              "end": 3073,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3069,
                "end": 3073
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3046,
              "end": 3065,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3047,
                  "end": 3064,
                  "const": false,
                  "constraint": null,
                  "default": {
                    "type": "TSTypeOperator",
                    "start": 3051,
                    "end": 3064,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3058,
                      "end": 3064
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3047,
                    "end": 3048,
                    "decorators": [],
                    "name": "T",
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
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3093,
      "end": 3127,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3098,
        "end": 3110,
        "decorators": [],
        "name": "InvalidAlias",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3113,
        "end": 3126,
        "operator": "unique",
        "typeAnnotation": {
          "type": "TSSymbolKeyword",
          "start": 3120,
          "end": 3126
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3128,
      "end": 3202,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3133,
        "end": 3168,
        "decorators": [],
        "name": "InvalidAliasTypeParameterConstraint",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3196,
        "end": 3201
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3168,
        "end": 3193,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3169,
            "end": 3192,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3179,
              "end": 3192,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 3186,
                "end": 3192
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3169,
              "end": 3170,
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
      "type": "TSTypeAliasDeclaration",
      "start": 3203,
      "end": 3274,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3208,
        "end": 3240,
        "decorators": [],
        "name": "InvalidAliasTypeParameterDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3268,
        "end": 3273
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3240,
        "end": 3265,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3241,
            "end": 3264,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3251,
              "end": 3264,
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 3258,
                "end": 3264
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3241,
              "end": 3242,
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
      "type": "VariableDeclaration",
      "start": 3295,
      "end": 3353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3309,
          "end": 3352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3309,
            "end": 3352,
            "decorators": [],
            "name": "invalidTypeArgument",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3328,
              "end": 3352,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3330,
                "end": 3352,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3337,
                  "end": 3352,
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "start": 3338,
                      "end": 3351,
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 3345,
                        "end": 3351
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3330,
                  "end": 3337,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "VariableDeclaration",
      "start": 3354,
      "end": 3404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3368,
          "end": 3403,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3368,
            "end": 3403,
            "decorators": [],
            "name": "invalidArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3384,
              "end": 3403,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3386,
                "end": 3403,
                "elementType": {
                  "type": "TSTypeOperator",
                  "start": 3387,
                  "end": 3400,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 3394,
                    "end": 3400
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3405,
      "end": 3453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3419,
          "end": 3452,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3419,
            "end": 3452,
            "decorators": [],
            "name": "invalidTupleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3435,
              "end": 3452,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 3437,
                "end": 3452,
                "elementTypes": [
                  {
                    "type": "TSTypeOperator",
                    "start": 3438,
                    "end": 3451,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3445,
                      "end": 3451
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
      "type": "VariableDeclaration",
      "start": 3471,
      "end": 3537,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3485,
          "end": 3536,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3485,
            "end": 3536,
            "decorators": [],
            "name": "invalidMappedType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3502,
              "end": 3536,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 3504,
                "end": 3536,
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 3512,
                  "end": 3518
                },
                "key": {
                  "type": "Identifier",
                  "start": 3507,
                  "end": 3508,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": false,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 3521,
                  "end": 3534,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 3528,
                    "end": 3534
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3562,
      "end": 3620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3576,
          "end": 3619,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3576,
            "end": 3619,
            "decorators": [],
            "name": "invalidUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3588,
              "end": 3619,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3590,
                "end": 3619,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 3590,
                    "end": 3603,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3597,
                      "end": 3603
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 3606,
                    "end": 3619,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3613,
                      "end": 3619
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
      "type": "VariableDeclaration",
      "start": 3621,
      "end": 3686,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3635,
          "end": 3685,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3635,
            "end": 3685,
            "decorators": [],
            "name": "invalidIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3654,
              "end": 3685,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3656,
                "end": 3685,
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "start": 3656,
                    "end": 3669,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3663,
                      "end": 3669
                    }
                  },
                  {
                    "type": "TSTypeOperator",
                    "start": 3672,
                    "end": 3685,
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3679,
                      "end": 3685
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
      "type": "VariableDeclaration",
      "start": 3773,
      "end": 3820,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3779,
          "end": 3819,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3779,
            "end": 3808,
            "decorators": [],
            "name": "shouldNotBeAssignable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3800,
              "end": 3808,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3802,
                "end": 3808
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 3811,
            "end": 3819,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 3811,
              "end": 3817,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
