__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 545,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 557,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 566,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 596,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "arr3Tuple",
    "start": 600,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 612,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 634,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "arr4Tuple",
    "start": 668,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 698,
    "end": 699
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 702,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "arrEmpty",
    "start": 753,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "arr5Tuple",
    "start": 772,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 792,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 819,
    "end": 820
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 820,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 827,
    "end": 828
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 829,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 833,
    "end": 834
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 835,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "\" hello\"",
    "start": 842,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 850,
    "end": 851
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 852,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 856,
    "end": 857
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "\"any\"",
    "start": 862,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 879,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 901,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 924,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 932,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 957,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 965,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 977,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 990,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1018,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "arr6",
    "start": 1022,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1051,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "arr7",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "arr8",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1112,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "arr9",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  }
]
```
