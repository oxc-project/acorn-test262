__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 557,
  "end": 2140,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 557,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 575,
        "name": "StringTo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 575,
        "end": 578,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 576,
            "end": 577,
            "name": {
              "type": "Identifier",
              "start": 576,
              "end": 577,
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
        "start": 579,
        "end": 602,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 585,
            "end": 600,
            "parameters": [
              {
                "type": "Identifier",
                "start": 586,
                "end": 595,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 587,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 589,
                    "end": 595
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 598,
                "end": 599,
                "typeName": {
                  "type": "Identifier",
                  "start": 598,
                  "end": 599,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 604,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 614,
        "end": 622,
        "name": "NumberTo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 622,
        "end": 625,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 623,
            "end": 624,
            "name": {
              "type": "Identifier",
              "start": 623,
              "end": 624,
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
        "start": 626,
        "end": 649,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 632,
            "end": 647,
            "parameters": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 642,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 634,
                  "end": 642,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 636,
                    "end": 642
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 646,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 645,
                "end": 646,
                "typeName": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 646,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 651,
      "end": 718,
      "id": {
        "type": "Identifier",
        "start": 661,
        "end": 678,
        "name": "StringAndNumberTo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 690,
          "end": 701,
          "expression": {
            "type": "Identifier",
            "start": 690,
            "end": 698,
            "name": "StringTo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 698,
            "end": 701,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 699,
                "end": 700,
                "typeName": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 700,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 703,
          "end": 714,
          "expression": {
            "type": "Identifier",
            "start": 703,
            "end": 711,
            "name": "NumberTo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 711,
            "end": 714,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 712,
                "end": 713,
                "typeName": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 713,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 678,
        "end": 681,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 679,
            "end": 680,
            "name": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
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
        "start": 715,
        "end": 718,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 720,
      "end": 775,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 733,
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 734,
        "end": 775,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 740,
            "end": 754,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 740,
              "end": 745,
              "name": "hello",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 745,
              "end": 753,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 747,
                "end": 753
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 759,
            "end": 773,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 759,
              "end": 764,
              "name": "world",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 764,
              "end": 772,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 766,
                "end": 772
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
      "type": "FunctionDeclaration",
      "start": 777,
      "end": 1166,
      "id": {
        "type": "Identifier",
        "start": 786,
        "end": 788,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 789,
          "end": 810,
          "name": "sToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 795,
            "end": 810,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 797,
              "end": 810,
              "typeName": {
                "type": "Identifier",
                "start": 797,
                "end": 805,
                "name": "StringTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 805,
                "end": 810,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 806,
                    "end": 809
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 812,
          "end": 833,
          "name": "nToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 818,
            "end": 833,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 820,
              "end": 833,
              "typeName": {
                "type": "Identifier",
                "start": 820,
                "end": 828,
                "name": "NumberTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 828,
                "end": 833,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 829,
                    "end": 832
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 835,
          "end": 868,
          "name": "bothToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 844,
            "end": 868,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 846,
              "end": 868,
              "typeName": {
                "type": "Identifier",
                "start": 846,
                "end": 863,
                "name": "StringAndNumberTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 863,
                "end": 868,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 864,
                    "end": 867
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 870,
          "end": 882,
          "name": "someObj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 877,
            "end": 882,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 879,
              "end": 882,
              "typeName": {
                "type": "Identifier",
                "start": 879,
                "end": 882,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 884,
        "end": 1166,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 890,
            "end": 906,
            "expression": {
              "type": "AssignmentExpression",
              "start": 890,
              "end": 905,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 890,
                "end": 896,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 899,
                "end": 905,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 911,
            "end": 930,
            "expression": {
              "type": "AssignmentExpression",
              "start": 911,
              "end": 929,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 911,
                "end": 917,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 920,
                "end": 929,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 935,
            "end": 952,
            "expression": {
              "type": "AssignmentExpression",
              "start": 935,
              "end": 951,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 935,
                "end": 941,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 944,
                "end": 951,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 958,
            "end": 974,
            "expression": {
              "type": "AssignmentExpression",
              "start": 958,
              "end": 973,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 958,
                "end": 964,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 967,
                "end": 973,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 979,
            "end": 998,
            "expression": {
              "type": "AssignmentExpression",
              "start": 979,
              "end": 997,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 979,
                "end": 985,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 988,
                "end": 997,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1003,
            "end": 1020,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1003,
              "end": 1019,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1003,
                "end": 1009,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1012,
                "end": 1019,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1026,
            "end": 1045,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1026,
              "end": 1044,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1026,
                "end": 1035,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1038,
                "end": 1044,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1050,
            "end": 1069,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1050,
              "end": 1068,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1050,
                "end": 1059,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1062,
                "end": 1068,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1074,
            "end": 1094,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1074,
              "end": 1093,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1074,
                "end": 1083,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1086,
                "end": 1093,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1100,
            "end": 1117,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1100,
              "end": 1116,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1100,
                "end": 1107,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1110,
                "end": 1116,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1122,
            "end": 1139,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1122,
              "end": 1138,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1122,
                "end": 1129,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1132,
                "end": 1138,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1144,
            "end": 1164,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1144,
              "end": 1163,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1144,
                "end": 1151,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1154,
                "end": 1163,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1168,
      "end": 1564,
      "id": {
        "type": "Identifier",
        "start": 1177,
        "end": 1179,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1180,
          "end": 1201,
          "name": "sToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1186,
            "end": 1201,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1188,
              "end": 1201,
              "typeName": {
                "type": "Identifier",
                "start": 1188,
                "end": 1196,
                "name": "StringTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1196,
                "end": 1201,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1197,
                    "end": 1200
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1203,
          "end": 1224,
          "name": "nToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1209,
            "end": 1224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1211,
              "end": 1224,
              "typeName": {
                "type": "Identifier",
                "start": 1211,
                "end": 1219,
                "name": "NumberTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1219,
                "end": 1224,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1220,
                    "end": 1223
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1226,
          "end": 1266,
          "name": "bothToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1235,
            "end": 1266,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1237,
              "end": 1266,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1237,
                  "end": 1250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1245,
                    "name": "StringTo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1245,
                    "end": 1250,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1246,
                        "end": 1249
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1253,
                  "end": 1266,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1261,
                    "name": "NumberTo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1261,
                    "end": 1266,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1262,
                        "end": 1265
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1268,
          "end": 1280,
          "name": "someObj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1275,
            "end": 1280,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1277,
              "end": 1280,
              "typeName": {
                "type": "Identifier",
                "start": 1277,
                "end": 1280,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1282,
        "end": 1564,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1288,
            "end": 1304,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1288,
              "end": 1303,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1288,
                "end": 1294,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1297,
                "end": 1303,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1309,
            "end": 1328,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1309,
              "end": 1327,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1309,
                "end": 1315,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1318,
                "end": 1327,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1333,
            "end": 1350,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1333,
              "end": 1349,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1333,
                "end": 1339,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1342,
                "end": 1349,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1356,
            "end": 1372,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1356,
              "end": 1371,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1356,
                "end": 1362,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1365,
                "end": 1371,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1377,
            "end": 1396,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1377,
              "end": 1395,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1377,
                "end": 1383,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1386,
                "end": 1395,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1401,
            "end": 1418,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1401,
              "end": 1417,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1401,
                "end": 1407,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1410,
                "end": 1417,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1424,
            "end": 1443,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1424,
              "end": 1442,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1424,
                "end": 1433,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1436,
                "end": 1442,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1448,
            "end": 1467,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1448,
              "end": 1466,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1448,
                "end": 1457,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1460,
                "end": 1466,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1472,
            "end": 1492,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1472,
              "end": 1491,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1472,
                "end": 1481,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1484,
                "end": 1491,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1498,
            "end": 1515,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1498,
              "end": 1514,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1498,
                "end": 1505,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1508,
                "end": 1514,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1520,
            "end": 1537,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1520,
              "end": 1536,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1520,
                "end": 1527,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1530,
                "end": 1536,
                "name": "nToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1542,
            "end": 1562,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1542,
              "end": 1561,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1542,
                "end": 1549,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1552,
                "end": 1561,
                "name": "bothToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1566,
      "end": 1605,
      "id": {
        "type": "Identifier",
        "start": 1571,
        "end": 1585,
        "name": "NumberToNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1588,
        "end": 1604,
        "typeName": {
          "type": "Identifier",
          "start": 1588,
          "end": 1596,
          "name": "NumberTo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1596,
          "end": 1604,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1597,
              "end": 1603
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1607,
      "end": 1684,
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1642,
        "name": "StringToAnyNumberToNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1651,
          "end": 1664,
          "expression": {
            "type": "Identifier",
            "start": 1651,
            "end": 1659,
            "name": "StringTo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1659,
            "end": 1664,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 1660,
                "end": 1663
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 1666,
          "end": 1680,
          "expression": {
            "type": "Identifier",
            "start": 1666,
            "end": 1680,
            "name": "NumberToNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1681,
        "end": 1684,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1686,
      "end": 2140,
      "id": {
        "type": "Identifier",
        "start": 1695,
        "end": 1697,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1698,
          "end": 1719,
          "name": "sToAny",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1704,
            "end": 1719,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1706,
              "end": 1719,
              "typeName": {
                "type": "Identifier",
                "start": 1706,
                "end": 1714,
                "name": "StringTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1714,
                "end": 1719,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1715,
                    "end": 1718
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1721,
          "end": 1746,
          "name": "nToNumber",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1730,
            "end": 1746,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1732,
              "end": 1746,
              "typeName": {
                "type": "Identifier",
                "start": 1732,
                "end": 1746,
                "name": "NumberToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1748,
          "end": 1791,
          "name": "strToAnyNumToNum",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1764,
            "end": 1791,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1766,
              "end": 1791,
              "typeName": {
                "type": "Identifier",
                "start": 1766,
                "end": 1791,
                "name": "StringToAnyNumberToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1793,
          "end": 1805,
          "name": "someObj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1800,
            "end": 1805,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1802,
              "end": 1805,
              "typeName": {
                "type": "Identifier",
                "start": 1802,
                "end": 1805,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1807,
        "end": 2140,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1813,
            "end": 1832,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1813,
              "end": 1831,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1813,
                "end": 1819,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1822,
                "end": 1831,
                "name": "nToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1837,
            "end": 1863,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1837,
              "end": 1862,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1837,
                "end": 1843,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1846,
                "end": 1862,
                "name": "strToAnyNumToNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1868,
            "end": 1885,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1868,
              "end": 1884,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1868,
                "end": 1874,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1877,
                "end": 1884,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1891,
            "end": 1910,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1891,
              "end": 1909,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1891,
                "end": 1900,
                "name": "nToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1903,
                "end": 1909,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1915,
            "end": 1944,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1915,
              "end": 1943,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1915,
                "end": 1924,
                "name": "nToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1927,
                "end": 1943,
                "name": "strToAnyNumToNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1949,
            "end": 1969,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1949,
              "end": 1968,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1949,
                "end": 1958,
                "name": "nToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1961,
                "end": 1968,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1975,
            "end": 2001,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1975,
              "end": 2000,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1975,
                "end": 1991,
                "name": "strToAnyNumToNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1994,
                "end": 2000,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2006,
            "end": 2035,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2006,
              "end": 2034,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2006,
                "end": 2022,
                "name": "strToAnyNumToNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2025,
                "end": 2034,
                "name": "nToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2040,
            "end": 2067,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2040,
              "end": 2066,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2040,
                "end": 2056,
                "name": "strToAnyNumToNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2059,
                "end": 2066,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2073,
            "end": 2090,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2073,
              "end": 2089,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2073,
                "end": 2080,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2083,
                "end": 2089,
                "name": "sToAny",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2095,
            "end": 2115,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2095,
              "end": 2114,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2095,
                "end": 2102,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2105,
                "end": 2114,
                "name": "nToNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2120,
            "end": 2138,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2120,
              "end": 2137,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2120,
                "end": 2127,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 2130,
                "end": 2137,
                "name": "someObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
