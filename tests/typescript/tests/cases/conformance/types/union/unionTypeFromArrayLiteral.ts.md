__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 514,
  "end": 1141,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 514,
      "end": 532,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 518,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 518,
            "end": 522,
            "decorators": [],
            "name": "arr1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 525,
            "end": 531,
            "elements": [
              {
                "type": "Literal",
                "start": 526,
                "end": 527,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 529,
                "end": 530,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 545,
      "end": 572,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 571,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 553,
            "decorators": [],
            "name": "arr2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 556,
            "end": 571,
            "elements": [
              {
                "type": "Literal",
                "start": 557,
                "end": 564,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 566,
                "end": 570,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 596,
      "end": 643,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 627,
            "decorators": [],
            "name": "arr3Tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 609,
              "end": 627,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 611,
                "end": 627,
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
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 630,
            "end": 642,
            "elements": [
              {
                "type": "Literal",
                "start": 631,
                "end": 632,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 634,
                "end": 641,
                "value": "three",
                "raw": "\"three\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 664,
      "end": 720,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 668,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 668,
            "end": 695,
            "decorators": [],
            "name": "arr4Tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 695,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 679,
                "end": 695,
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
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 698,
            "end": 719,
            "elements": [
              {
                "type": "Literal",
                "start": 699,
                "end": 700,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 702,
                "end": 709,
                "value": "three",
                "raw": "\"three\""
              },
              {
                "type": "Literal",
                "start": 711,
                "end": 718,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 749,
      "end": 767,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 761,
            "decorators": [],
            "name": "arrEmpty",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 764,
            "end": 766,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 869,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 816,
            "decorators": [],
            "name": "arr5Tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 781,
              "end": 816,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 783,
                "end": 816,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 789,
                    "end": 799,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 789,
                      "end": 790,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 790,
                      "end": 798,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 792,
                        "end": 798
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 804,
                    "end": 814,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 804,
                      "end": 805,
                      "value": 5,
                      "raw": "5"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 805,
                      "end": 813,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 807,
                        "end": 813
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 819,
            "end": 868,
            "elements": [
              {
                "type": "Literal",
                "start": 820,
                "end": 827,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 829,
                "end": 833,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 835,
                "end": 840,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 842,
                "end": 850,
                "value": " hello",
                "raw": "\" hello\""
              },
              {
                "type": "Literal",
                "start": 852,
                "end": 856,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 858,
                "end": 860,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 862,
                "end": 867,
                "value": "any",
                "raw": "\"any\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 879,
      "end": 900,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 885,
        "end": 886,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 887,
        "end": 900,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 889,
            "end": 898,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 889,
              "end": 892,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 892,
              "end": 898,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 895,
                "end": 898,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 901,
      "end": 923,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 907,
        "end": 908,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 909,
        "end": 923,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 911,
            "end": 921,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 911,
              "end": 915,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 915,
              "end": 921,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 918,
                "end": 921,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 924,
      "end": 956,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 931,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 940,
        "end": 941,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 942,
        "end": 956,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 944,
            "end": 954,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 944,
              "end": 948,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 948,
              "end": 954,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 951,
                "end": 954,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 957,
      "end": 989,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 963,
        "end": 964,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 973,
        "end": 974,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 975,
        "end": 989,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 977,
            "end": 987,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 977,
              "end": 981,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 981,
              "end": 987,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 984,
                "end": 987,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 990,
      "end": 1017,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 994,
          "end": 998,
          "id": {
            "type": "Identifier",
            "start": 994,
            "end": 998,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 995,
              "end": 998,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 997,
                "end": 998,
                "typeName": {
                  "type": "Identifier",
                  "start": 997,
                  "end": 998,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1000,
          "end": 1004,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1004,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1001,
              "end": 1004,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1003,
                "end": 1004,
                "typeName": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1004,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1006,
          "end": 1010,
          "id": {
            "type": "Identifier",
            "start": 1006,
            "end": 1010,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1007,
              "end": 1010,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1009,
                "end": 1010,
                "typeName": {
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1010,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1012,
          "end": 1016,
          "id": {
            "type": "Identifier",
            "start": 1012,
            "end": 1016,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1013,
              "end": 1016,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1015,
                "end": 1016,
                "typeName": {
                  "type": "Identifier",
                  "start": 1015,
                  "end": 1016,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1018,
      "end": 1036,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1022,
          "end": 1035,
          "id": {
            "type": "Identifier",
            "start": 1022,
            "end": 1026,
            "decorators": [],
            "name": "arr6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1029,
            "end": 1035,
            "elements": [
              {
                "type": "Identifier",
                "start": 1030,
                "end": 1031,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1033,
                "end": 1034,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1051,
      "end": 1072,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1055,
          "end": 1071,
          "id": {
            "type": "Identifier",
            "start": 1055,
            "end": 1059,
            "decorators": [],
            "name": "arr7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1062,
            "end": 1071,
            "elements": [
              {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1066,
                "end": 1067,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1069,
                "end": 1070,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1086,
      "end": 1104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1090,
          "end": 1103,
          "id": {
            "type": "Identifier",
            "start": 1090,
            "end": 1094,
            "decorators": [],
            "name": "arr8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1097,
            "end": 1103,
            "elements": [
              {
                "type": "Identifier",
                "start": 1098,
                "end": 1099,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1101,
                "end": 1102,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1112,
      "end": 1130,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1116,
          "end": 1129,
          "id": {
            "type": "Identifier",
            "start": 1116,
            "end": 1120,
            "decorators": [],
            "name": "arr9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1123,
            "end": 1129,
            "elements": [
              {
                "type": "Identifier",
                "start": 1124,
                "end": 1125,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1127,
                "end": 1128,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
