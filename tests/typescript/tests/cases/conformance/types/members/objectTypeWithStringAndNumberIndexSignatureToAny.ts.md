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
        "name": "StringTo",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 575
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
              "start": 576,
              "end": 577
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 576,
            "end": 577
          }
        ],
        "start": 575,
        "end": 578
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 589,
                    "end": 595
                  },
                  "start": 587,
                  "end": 595
                },
                "start": 586,
                "end": 595
              }
            ],
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
                  "start": 598,
                  "end": 599
                },
                "typeArguments": null,
                "start": 598,
                "end": 599
              },
              "start": 596,
              "end": 599
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 585,
            "end": 600
          }
        ],
        "start": 579,
        "end": 602
      },
      "declare": false,
      "start": 557,
      "end": 602
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberTo",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 622
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
              "start": 623,
              "end": 624
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 623,
            "end": 624
          }
        ],
        "start": 622,
        "end": 625
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 636,
                    "end": 642
                  },
                  "start": 634,
                  "end": 642
                },
                "start": 633,
                "end": 642
              }
            ],
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
                  "start": 645,
                  "end": 646
                },
                "typeArguments": null,
                "start": 645,
                "end": 646
              },
              "start": 643,
              "end": 646
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 632,
            "end": 647
          }
        ],
        "start": 626,
        "end": 649
      },
      "declare": false,
      "start": 604,
      "end": 649
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringAndNumberTo",
        "optional": false,
        "typeAnnotation": null,
        "start": 661,
        "end": 678
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
              "start": 679,
              "end": 680
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 679,
            "end": 680
          }
        ],
        "start": 678,
        "end": 681
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringTo",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 698
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                },
                "typeArguments": null,
                "start": 699,
                "end": 700
              }
            ],
            "start": 698,
            "end": 701
          },
          "start": 690,
          "end": 701
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberTo",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 711
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 712,
                  "end": 713
                },
                "typeArguments": null,
                "start": 712,
                "end": 713
              }
            ],
            "start": 711,
            "end": 714
          },
          "start": 703,
          "end": 714
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 715,
        "end": 718
      },
      "declare": false,
      "start": 651,
      "end": 718
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 733
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
              "name": "hello",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 745
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 747,
                "end": 753
              },
              "start": 745,
              "end": 753
            },
            "accessibility": null,
            "static": false,
            "start": 740,
            "end": 754
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "world",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 764
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 766,
                "end": 772
              },
              "start": 764,
              "end": 772
            },
            "accessibility": null,
            "static": false,
            "start": 759,
            "end": 773
          }
        ],
        "start": 734,
        "end": 775
      },
      "declare": false,
      "start": 720,
      "end": 775
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 786,
        "end": 788
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 805
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 806,
                    "end": 809
                  }
                ],
                "start": 805,
                "end": 810
              },
              "start": 797,
              "end": 810
            },
            "start": 795,
            "end": 810
          },
          "start": 789,
          "end": 810
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 828
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 829,
                    "end": 832
                  }
                ],
                "start": 828,
                "end": 833
              },
              "start": 820,
              "end": 833
            },
            "start": 818,
            "end": 833
          },
          "start": 812,
          "end": 833
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bothToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringAndNumberTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 863
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 864,
                    "end": 867
                  }
                ],
                "start": 863,
                "end": 868
              },
              "start": 846,
              "end": 868
            },
            "start": 844,
            "end": 868
          },
          "start": 835,
          "end": 868
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "someObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 882
              },
              "typeArguments": null,
              "start": 879,
              "end": 882
            },
            "start": 877,
            "end": 882
          },
          "start": 870,
          "end": 882
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
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 896
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 899,
                "end": 905
              },
              "start": 890,
              "end": 905
            },
            "directive": null,
            "start": 890,
            "end": 906
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 917
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 920,
                "end": 929
              },
              "start": 911,
              "end": 929
            },
            "directive": null,
            "start": 911,
            "end": 930
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 941
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 951
              },
              "start": 935,
              "end": 951
            },
            "directive": null,
            "start": 935,
            "end": 952
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 964
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 967,
                "end": 973
              },
              "start": 958,
              "end": 973
            },
            "directive": null,
            "start": 958,
            "end": 974
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 985
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 997
              },
              "start": 979,
              "end": 997
            },
            "directive": null,
            "start": 979,
            "end": 998
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1009
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1019
              },
              "start": 1003,
              "end": 1019
            },
            "directive": null,
            "start": 1003,
            "end": 1020
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1035
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1044
              },
              "start": 1026,
              "end": 1044
            },
            "directive": null,
            "start": 1026,
            "end": 1045
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1059
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1068
              },
              "start": 1050,
              "end": 1068
            },
            "directive": null,
            "start": 1050,
            "end": 1069
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1074,
                "end": 1083
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1093
              },
              "start": 1074,
              "end": 1093
            },
            "directive": null,
            "start": 1074,
            "end": 1094
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1107
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1116
              },
              "start": 1100,
              "end": 1116
            },
            "directive": null,
            "start": 1100,
            "end": 1117
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1122,
                "end": 1129
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1132,
                "end": 1138
              },
              "start": 1122,
              "end": 1138
            },
            "directive": null,
            "start": 1122,
            "end": 1139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1144,
                "end": 1151
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1154,
                "end": 1163
              },
              "start": 1144,
              "end": 1163
            },
            "directive": null,
            "start": 1144,
            "end": 1164
          }
        ],
        "start": 884,
        "end": 1166
      },
      "expression": false,
      "start": 777,
      "end": 1166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1177,
        "end": 1179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1188,
                "end": 1196
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1197,
                    "end": 1200
                  }
                ],
                "start": 1196,
                "end": 1201
              },
              "start": 1188,
              "end": 1201
            },
            "start": 1186,
            "end": 1201
          },
          "start": 1180,
          "end": 1201
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1219
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1220,
                    "end": 1223
                  }
                ],
                "start": 1219,
                "end": 1224
              },
              "start": 1211,
              "end": 1224
            },
            "start": 1209,
            "end": 1224
          },
          "start": 1203,
          "end": 1224
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bothToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringTo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1245
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1246,
                        "end": 1249
                      }
                    ],
                    "start": 1245,
                    "end": 1250
                  },
                  "start": 1237,
                  "end": 1250
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberTo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1261
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1262,
                        "end": 1265
                      }
                    ],
                    "start": 1261,
                    "end": 1266
                  },
                  "start": 1253,
                  "end": 1266
                }
              ],
              "start": 1237,
              "end": 1266
            },
            "start": 1235,
            "end": 1266
          },
          "start": 1226,
          "end": 1266
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "someObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1280
              },
              "typeArguments": null,
              "start": 1277,
              "end": 1280
            },
            "start": 1275,
            "end": 1280
          },
          "start": 1268,
          "end": 1280
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
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1294
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1303
              },
              "start": 1288,
              "end": 1303
            },
            "directive": null,
            "start": 1288,
            "end": 1304
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1309,
                "end": 1315
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1318,
                "end": 1327
              },
              "start": 1309,
              "end": 1327
            },
            "directive": null,
            "start": 1309,
            "end": 1328
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1339
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1349
              },
              "start": 1333,
              "end": 1349
            },
            "directive": null,
            "start": 1333,
            "end": 1350
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1356,
                "end": 1362
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1365,
                "end": 1371
              },
              "start": 1356,
              "end": 1371
            },
            "directive": null,
            "start": 1356,
            "end": 1372
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1383
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1386,
                "end": 1395
              },
              "start": 1377,
              "end": 1395
            },
            "directive": null,
            "start": 1377,
            "end": 1396
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1401,
                "end": 1407
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1417
              },
              "start": 1401,
              "end": 1417
            },
            "directive": null,
            "start": 1401,
            "end": 1418
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1433
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1442
              },
              "start": 1424,
              "end": 1442
            },
            "directive": null,
            "start": 1424,
            "end": 1443
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1448,
                "end": 1457
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1460,
                "end": 1466
              },
              "start": 1448,
              "end": 1466
            },
            "directive": null,
            "start": 1448,
            "end": 1467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1481
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1491
              },
              "start": 1472,
              "end": 1491
            },
            "directive": null,
            "start": 1472,
            "end": 1492
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1498,
                "end": 1505
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1508,
                "end": 1514
              },
              "start": 1498,
              "end": 1514
            },
            "directive": null,
            "start": 1498,
            "end": 1515
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1520,
                "end": 1527
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1530,
                "end": 1536
              },
              "start": 1520,
              "end": 1536
            },
            "directive": null,
            "start": 1520,
            "end": 1537
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1542,
                "end": 1549
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1552,
                "end": 1561
              },
              "start": 1542,
              "end": 1561
            },
            "directive": null,
            "start": 1542,
            "end": 1562
          }
        ],
        "start": 1282,
        "end": 1564
      },
      "expression": false,
      "start": 1168,
      "end": 1564
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberToNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 1571,
        "end": 1585
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumberTo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1588,
          "end": 1596
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1597,
              "end": 1603
            }
          ],
          "start": 1596,
          "end": 1604
        },
        "start": 1588,
        "end": 1604
      },
      "declare": false,
      "start": 1566,
      "end": 1605
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringToAnyNumberToNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1642
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringTo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1651,
            "end": 1659
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1660,
                "end": 1663
              }
            ],
            "start": 1659,
            "end": 1664
          },
          "start": 1651,
          "end": 1664
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "NumberToNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1680
          },
          "typeArguments": null,
          "start": 1666,
          "end": 1680
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1681,
        "end": 1684
      },
      "declare": false,
      "start": 1607,
      "end": 1684
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1695,
        "end": 1697
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sToAny",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1706,
                "end": 1714
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1715,
                    "end": 1718
                  }
                ],
                "start": 1714,
                "end": 1719
              },
              "start": 1706,
              "end": 1719
            },
            "start": 1704,
            "end": 1719
          },
          "start": 1698,
          "end": 1719
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nToNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1732,
                "end": 1746
              },
              "typeArguments": null,
              "start": 1732,
              "end": 1746
            },
            "start": 1730,
            "end": 1746
          },
          "start": 1721,
          "end": 1746
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "strToAnyNumToNum",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringToAnyNumberToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1766,
                "end": 1791
              },
              "typeArguments": null,
              "start": 1766,
              "end": 1791
            },
            "start": 1764,
            "end": 1791
          },
          "start": 1748,
          "end": 1791
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "someObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1805
              },
              "typeArguments": null,
              "start": 1802,
              "end": 1805
            },
            "start": 1800,
            "end": 1805
          },
          "start": 1793,
          "end": 1805
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
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1813,
                "end": 1819
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1822,
                "end": 1831
              },
              "start": 1813,
              "end": 1831
            },
            "directive": null,
            "start": 1813,
            "end": 1832
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1837,
                "end": 1843
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strToAnyNumToNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1846,
                "end": 1862
              },
              "start": 1837,
              "end": 1862
            },
            "directive": null,
            "start": 1837,
            "end": 1863
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1868,
                "end": 1874
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1877,
                "end": 1884
              },
              "start": 1868,
              "end": 1884
            },
            "directive": null,
            "start": 1868,
            "end": 1885
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1891,
                "end": 1900
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1903,
                "end": 1909
              },
              "start": 1891,
              "end": 1909
            },
            "directive": null,
            "start": 1891,
            "end": 1910
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1915,
                "end": 1924
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strToAnyNumToNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1943
              },
              "start": 1915,
              "end": 1943
            },
            "directive": null,
            "start": 1915,
            "end": 1944
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 1949,
                "end": 1958
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1961,
                "end": 1968
              },
              "start": 1949,
              "end": 1968
            },
            "directive": null,
            "start": 1949,
            "end": 1969
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strToAnyNumToNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1975,
                "end": 1991
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 1994,
                "end": 2000
              },
              "start": 1975,
              "end": 2000
            },
            "directive": null,
            "start": 1975,
            "end": 2001
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strToAnyNumToNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2006,
                "end": 2022
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 2025,
                "end": 2034
              },
              "start": 2006,
              "end": 2034
            },
            "directive": null,
            "start": 2006,
            "end": 2035
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strToAnyNumToNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2056
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2059,
                "end": 2066
              },
              "start": 2040,
              "end": 2066
            },
            "directive": null,
            "start": 2040,
            "end": 2067
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2073,
                "end": 2080
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "sToAny",
                "optional": false,
                "typeAnnotation": null,
                "start": 2083,
                "end": 2089
              },
              "start": 2073,
              "end": 2089
            },
            "directive": null,
            "start": 2073,
            "end": 2090
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2095,
                "end": 2102
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "nToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2114
              },
              "start": 2095,
              "end": 2114
            },
            "directive": null,
            "start": 2095,
            "end": 2115
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2120,
                "end": 2127
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "someObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2130,
                "end": 2137
              },
              "start": 2120,
              "end": 2137
            },
            "directive": null,
            "start": 2120,
            "end": 2138
          }
        ],
        "start": 1807,
        "end": 2140
      },
      "expression": false,
      "start": 1686,
      "end": 2140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 557,
  "end": 2140
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 557,
    "end": 566,
    "range": [
      557,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTo",
    "start": 567,
    "end": 575,
    "range": [
      567,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595,
    "range": [
      589,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 604,
    "end": 613,
    "range": [
      604,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberTo",
    "start": 614,
    "end": 622,
    "range": [
      614,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 636,
    "end": 642,
    "range": [
      636,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 651,
    "end": 660,
    "range": [
      651,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "StringAndNumberTo",
    "start": 661,
    "end": 678,
    "range": [
      661,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 682,
    "end": 689,
    "range": [
      682,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTo",
    "start": 690,
    "end": 698,
    "range": [
      690,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberTo",
    "start": 703,
    "end": 711,
    "range": [
      703,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 720,
    "end": 729,
    "range": [
      720,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 730,
    "end": 733,
    "range": [
      730,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "hello",
    "start": 740,
    "end": 745,
    "range": [
      740,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "world",
    "start": 759,
    "end": 764,
    "range": [
      759,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 766,
    "end": 772,
    "range": [
      766,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 777,
    "end": 785,
    "range": [
      777,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 786,
    "end": 788,
    "range": [
      786,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 789,
    "end": 795,
    "range": [
      789,
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
    "value": "StringTo",
    "start": 797,
    "end": 805,
    "range": [
      797,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 806,
    "end": 809,
    "range": [
      806,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 812,
    "end": 818,
    "range": [
      812,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberTo",
    "start": 820,
    "end": 828,
    "range": [
      820,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 829,
    "end": 832,
    "range": [
      829,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 835,
    "end": 844,
    "range": [
      835,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "StringAndNumberTo",
    "start": 846,
    "end": 863,
    "range": [
      846,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 864,
    "end": 867,
    "range": [
      864,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 870,
    "end": 877,
    "range": [
      870,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 899,
    "end": 905,
    "range": [
      899,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 911,
    "end": 917,
    "range": [
      911,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 920,
    "end": 929,
    "range": [
      920,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 935,
    "end": 941,
    "range": [
      935,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 944,
    "end": 951,
    "range": [
      944,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 958,
    "end": 964,
    "range": [
      958,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 967,
    "end": 973,
    "range": [
      967,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 979,
    "end": 985,
    "range": [
      979,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 988,
    "end": 997,
    "range": [
      988,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1012,
    "end": 1019,
    "range": [
      1012,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1026,
    "end": 1035,
    "range": [
      1026,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1038,
    "end": 1044,
    "range": [
      1038,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1050,
    "end": 1059,
    "range": [
      1050,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1062,
    "end": 1068,
    "range": [
      1062,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1074,
    "end": 1083,
    "range": [
      1074,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1086,
    "end": 1093,
    "range": [
      1086,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1100,
    "end": 1107,
    "range": [
      1100,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1110,
    "end": 1116,
    "range": [
      1110,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1122,
    "end": 1129,
    "range": [
      1122,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1132,
    "end": 1138,
    "range": [
      1132,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1144,
    "end": 1151,
    "range": [
      1144,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1154,
    "end": 1163,
    "range": [
      1154,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1168,
    "end": 1176,
    "range": [
      1168,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1177,
    "end": 1179,
    "range": [
      1177,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1180,
    "end": 1186,
    "range": [
      1180,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTo",
    "start": 1188,
    "end": 1196,
    "range": [
      1188,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1197,
    "end": 1200,
    "range": [
      1197,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1203,
    "end": 1209,
    "range": [
      1203,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberTo",
    "start": 1211,
    "end": 1219,
    "range": [
      1211,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1220,
    "end": 1223,
    "range": [
      1220,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1226,
    "end": 1235,
    "range": [
      1226,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTo",
    "start": 1237,
    "end": 1245,
    "range": [
      1237,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1246,
    "end": 1249,
    "range": [
      1246,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberTo",
    "start": 1253,
    "end": 1261,
    "range": [
      1253,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1262,
    "end": 1265,
    "range": [
      1262,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "someObj",
    "start": 1268,
    "end": 1275,
    "range": [
      1268,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1277,
    "end": 1280,
    "range": [
      1277,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1288,
    "end": 1294,
    "range": [
      1288,
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
    "value": "nToAny",
    "start": 1297,
    "end": 1303,
    "range": [
      1297,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1309,
    "end": 1315,
    "range": [
      1309,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1318,
    "end": 1327,
    "range": [
      1318,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1333,
    "end": 1339,
    "range": [
      1333,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1342,
    "end": 1349,
    "range": [
      1342,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1356,
    "end": 1362,
    "range": [
      1356,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1365,
    "end": 1371,
    "range": [
      1365,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1377,
    "end": 1383,
    "range": [
      1377,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1386,
    "end": 1395,
    "range": [
      1386,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1401,
    "end": 1407,
    "range": [
      1401,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1410,
    "end": 1417,
    "range": [
      1410,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1424,
    "end": 1433,
    "range": [
      1424,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1436,
    "end": 1442,
    "range": [
      1436,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1448,
    "end": 1457,
    "range": [
      1448,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1460,
    "end": 1466,
    "range": [
      1460,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1472,
    "end": 1481,
    "range": [
      1472,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1484,
    "end": 1491,
    "range": [
      1484,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1498,
    "end": 1505,
    "range": [
      1498,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1508,
    "end": 1514,
    "range": [
      1508,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1520,
    "end": 1527,
    "range": [
      1520,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "nToAny",
    "start": 1530,
    "end": 1536,
    "range": [
      1530,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1542,
    "end": 1549,
    "range": [
      1542,
      1549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "bothToAny",
    "start": 1552,
    "end": 1561,
    "range": [
      1552,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1566,
    "end": 1570,
    "range": [
      1566,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberToNumber",
    "start": 1571,
    "end": 1585,
    "range": [
      1571,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberTo",
    "start": 1588,
    "end": 1596,
    "range": [
      1588,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1597,
    "end": 1603,
    "range": [
      1597,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1607,
    "end": 1616,
    "range": [
      1607,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "StringToAnyNumberToNumber",
    "start": 1617,
    "end": 1642,
    "range": [
      1617,
      1642
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1643,
    "end": 1650,
    "range": [
      1643,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTo",
    "start": 1651,
    "end": 1659,
    "range": [
      1651,
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
    "value": "any",
    "start": 1660,
    "end": 1663,
    "range": [
      1660,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberToNumber",
    "start": 1666,
    "end": 1680,
    "range": [
      1666,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1686,
    "end": 1694,
    "range": [
      1686,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1695,
    "end": 1697,
    "range": [
      1695,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1698,
    "end": 1704,
    "range": [
      1698,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "StringTo",
    "start": 1706,
    "end": 1714,
    "range": [
      1706,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1715,
    "end": 1718,
    "range": [
      1715,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 1721,
    "end": 1730,
    "range": [
      1721,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "NumberToNumber",
    "start": 1732,
    "end": 1746,
    "range": [
      1732,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "strToAnyNumToNum",
    "start": 1748,
    "end": 1764,
    "range": [
      1748,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "StringToAnyNumberToNumber",
    "start": 1766,
    "end": 1791,
    "range": [
      1766,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1793,
    "end": 1800,
    "range": [
      1793,
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
    "value": "Obj",
    "start": 1802,
    "end": 1805,
    "range": [
      1802,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1813,
    "end": 1819,
    "range": [
      1813,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 1822,
    "end": 1831,
    "range": [
      1822,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1837,
    "end": 1843,
    "range": [
      1837,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "strToAnyNumToNum",
    "start": 1846,
    "end": 1862,
    "range": [
      1846,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1868,
    "end": 1874,
    "range": [
      1868,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1877,
    "end": 1884,
    "range": [
      1877,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 1891,
    "end": 1900,
    "range": [
      1891,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1903,
    "end": 1909,
    "range": [
      1903,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 1915,
    "end": 1924,
    "range": [
      1915,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "strToAnyNumToNum",
    "start": 1927,
    "end": 1943,
    "range": [
      1927,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 1949,
    "end": 1958,
    "range": [
      1949,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 1961,
    "end": 1968,
    "range": [
      1961,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "strToAnyNumToNum",
    "start": 1975,
    "end": 1991,
    "range": [
      1975,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 1994,
    "end": 2000,
    "range": [
      1994,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "strToAnyNumToNum",
    "start": 2006,
    "end": 2022,
    "range": [
      2006,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 2025,
    "end": 2034,
    "range": [
      2025,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "strToAnyNumToNum",
    "start": 2040,
    "end": 2056,
    "range": [
      2040,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 2059,
    "end": 2066,
    "range": [
      2059,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 2073,
    "end": 2080,
    "range": [
      2073,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "sToAny",
    "start": 2083,
    "end": 2089,
    "range": [
      2083,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 2095,
    "end": 2102,
    "range": [
      2095,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "nToNumber",
    "start": 2105,
    "end": 2114,
    "range": [
      2105,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 2120,
    "end": 2127,
    "range": [
      2120,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "someObj",
    "start": 2130,
    "end": 2137,
    "range": [
      2130,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  }
]
```
