__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 522
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 526,
                "end": 527
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 529,
                "end": 530
              }
            ],
            "start": 525,
            "end": 531
          },
          "definite": false,
          "start": 518,
          "end": 531
        }
      ],
      "declare": false,
      "start": 514,
      "end": 532
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
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 553
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 557,
                "end": 564
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 566,
                "end": 570
              }
            ],
            "start": 556,
            "end": 571
          },
          "definite": false,
          "start": 549,
          "end": 571
        }
      ],
      "declare": false,
      "start": 545,
      "end": 572
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
            "name": "arr3Tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 612,
                    "end": 618
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 620,
                    "end": 626
                  }
                ],
                "start": 611,
                "end": 627
              },
              "start": 609,
              "end": 627
            },
            "start": 600,
            "end": 627
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 631,
                "end": 632
              },
              {
                "type": "Literal",
                "value": "three",
                "raw": "\"three\"",
                "start": 634,
                "end": 641
              }
            ],
            "start": 630,
            "end": 642
          },
          "definite": false,
          "start": 600,
          "end": 642
        }
      ],
      "declare": false,
      "start": 596,
      "end": 643
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
            "name": "arr4Tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 680,
                    "end": 686
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 688,
                    "end": 694
                  }
                ],
                "start": 679,
                "end": 695
              },
              "start": 677,
              "end": 695
            },
            "start": 668,
            "end": 695
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 699,
                "end": 700
              },
              {
                "type": "Literal",
                "value": "three",
                "raw": "\"three\"",
                "start": 702,
                "end": 709
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 711,
                "end": 718
              }
            ],
            "start": 698,
            "end": 719
          },
          "definite": false,
          "start": 668,
          "end": 719
        }
      ],
      "declare": false,
      "start": 664,
      "end": 720
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
            "name": "arrEmpty",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 761
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 764,
            "end": 766
          },
          "definite": false,
          "start": 753,
          "end": 766
        }
      ],
      "declare": false,
      "start": 749,
      "end": 767
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
            "name": "arr5Tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 789,
                      "end": 790
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 792,
                        "end": 798
                      },
                      "start": 790,
                      "end": 798
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 789,
                    "end": 799
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 804,
                      "end": 805
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 807,
                        "end": 813
                      },
                      "start": 805,
                      "end": 813
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 804,
                    "end": 814
                  }
                ],
                "start": 783,
                "end": 816
              },
              "start": 781,
              "end": 816
            },
            "start": 772,
            "end": 816
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 820,
                "end": 827
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 829,
                "end": 833
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 835,
                "end": 840
              },
              {
                "type": "Literal",
                "value": " hello",
                "raw": "\" hello\"",
                "start": 842,
                "end": 850
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 852,
                "end": 856
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 858,
                "end": 860
              },
              {
                "type": "Literal",
                "value": "any",
                "raw": "\"any\"",
                "start": 862,
                "end": 867
              }
            ],
            "start": 819,
            "end": 868
          },
          "definite": false,
          "start": 772,
          "end": 868
        }
      ],
      "declare": false,
      "start": 768,
      "end": 869
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 886
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 892
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 895,
                "end": 898
              },
              "expression": false,
              "start": 892,
              "end": 898
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 889,
            "end": 898
          }
        ],
        "start": 887,
        "end": 900
      },
      "abstract": false,
      "declare": false,
      "start": 879,
      "end": 900
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 907,
        "end": 908
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
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 915
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 918,
                "end": 921
              },
              "expression": false,
              "start": 915,
              "end": 921
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 911,
            "end": 921
          }
        ],
        "start": 909,
        "end": 923
      },
      "abstract": false,
      "declare": false,
      "start": 901,
      "end": 923
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 930,
        "end": 931
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 941
      },
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
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 948
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 951,
                "end": 954
              },
              "expression": false,
              "start": 948,
              "end": 954
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 944,
            "end": 954
          }
        ],
        "start": 942,
        "end": 956
      },
      "abstract": false,
      "declare": false,
      "start": 924,
      "end": 956
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 963,
        "end": 964
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 974
      },
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
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 981
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 984,
                "end": 987
              },
              "expression": false,
              "start": 981,
              "end": 987
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 977,
            "end": 987
          }
        ],
        "start": 975,
        "end": 989
      },
      "abstract": false,
      "declare": false,
      "start": 957,
      "end": 989
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 997,
                  "end": 998
                },
                "typeArguments": null,
                "start": 997,
                "end": 998
              },
              "start": 995,
              "end": 998
            },
            "start": 994,
            "end": 998
          },
          "init": null,
          "definite": false,
          "start": 994,
          "end": 998
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1003,
                  "end": 1004
                },
                "typeArguments": null,
                "start": 1003,
                "end": 1004
              },
              "start": 1001,
              "end": 1004
            },
            "start": 1000,
            "end": 1004
          },
          "init": null,
          "definite": false,
          "start": 1000,
          "end": 1004
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1010
                },
                "typeArguments": null,
                "start": 1009,
                "end": 1010
              },
              "start": 1007,
              "end": 1010
            },
            "start": 1006,
            "end": 1010
          },
          "init": null,
          "definite": false,
          "start": 1006,
          "end": 1010
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1015,
                  "end": 1016
                },
                "typeArguments": null,
                "start": 1015,
                "end": 1016
              },
              "start": 1013,
              "end": 1016
            },
            "start": 1012,
            "end": 1016
          },
          "init": null,
          "definite": false,
          "start": 1012,
          "end": 1016
        }
      ],
      "declare": false,
      "start": 990,
      "end": 1017
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
            "name": "arr6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1026
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1031
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              }
            ],
            "start": 1029,
            "end": 1035
          },
          "definite": false,
          "start": 1022,
          "end": 1035
        }
      ],
      "declare": false,
      "start": 1018,
      "end": 1036
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
            "name": "arr7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1059
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1064
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1066,
                "end": 1067
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1069,
                "end": 1070
              }
            ],
            "start": 1062,
            "end": 1071
          },
          "definite": false,
          "start": 1055,
          "end": 1071
        }
      ],
      "declare": false,
      "start": 1051,
      "end": 1072
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
            "name": "arr8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1090,
            "end": 1094
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1099
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1101,
                "end": 1102
              }
            ],
            "start": 1097,
            "end": 1103
          },
          "definite": false,
          "start": 1090,
          "end": 1103
        }
      ],
      "declare": false,
      "start": 1086,
      "end": 1104
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
            "name": "arr9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1116,
            "end": 1120
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1125
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1127,
                "end": 1128
              }
            ],
            "start": 1123,
            "end": 1129
          },
          "definite": false,
          "start": 1116,
          "end": 1129
        }
      ],
      "declare": false,
      "start": 1112,
      "end": 1130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 514,
  "end": 1141
}
```
