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
