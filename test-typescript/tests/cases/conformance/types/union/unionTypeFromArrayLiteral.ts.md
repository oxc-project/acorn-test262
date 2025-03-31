__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 515,
  "end": 1142,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 515,
      "end": 533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 532,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 523,
            "name": "arr1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 526,
            "end": 532,
            "elements": [
              {
                "type": "Literal",
                "start": 527,
                "end": 528,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 530,
                "end": 531,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 572,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 554,
            "name": "arr2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 557,
            "end": 572,
            "elements": [
              {
                "type": "Literal",
                "start": 558,
                "end": 565,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 567,
                "end": 571,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 597,
      "end": 644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 643,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 628,
            "name": "arr3Tuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 628,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 612,
                "end": 628,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 613,
                    "end": 619
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 621,
                    "end": 627
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 631,
            "end": 643,
            "elements": [
              {
                "type": "Literal",
                "start": 632,
                "end": 633,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 635,
                "end": 642,
                "value": "three",
                "raw": "\"three\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 665,
      "end": 721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 720,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 696,
            "name": "arr4Tuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 678,
              "end": 696,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 680,
                "end": 696,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 681,
                    "end": 687
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 689,
                    "end": 695
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 699,
            "end": 720,
            "elements": [
              {
                "type": "Literal",
                "start": 700,
                "end": 701,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 703,
                "end": 710,
                "value": "three",
                "raw": "\"three\""
              },
              {
                "type": "Literal",
                "start": 712,
                "end": 719,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 750,
      "end": 768,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 754,
          "end": 767,
          "id": {
            "type": "Identifier",
            "start": 754,
            "end": 762,
            "name": "arrEmpty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 765,
            "end": 767,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 769,
      "end": 870,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 869,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 817,
            "name": "arr5Tuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 782,
              "end": 817,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 784,
                "end": 817,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 790,
                    "end": 800,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 790,
                      "end": 791,
                      "value": 0,
                      "raw": "0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 791,
                      "end": 799,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 793,
                        "end": 799
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 805,
                    "end": 815,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 805,
                      "end": 806,
                      "value": 5,
                      "raw": "5"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 806,
                      "end": 814,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 808,
                        "end": 814
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
          "init": {
            "type": "ArrayExpression",
            "start": 820,
            "end": 869,
            "elements": [
              {
                "type": "Literal",
                "start": 821,
                "end": 828,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 830,
                "end": 834,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 836,
                "end": 841,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 843,
                "end": 851,
                "value": " hello",
                "raw": "\" hello\""
              },
              {
                "type": "Literal",
                "start": 853,
                "end": 857,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 859,
                "end": 861,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 863,
                "end": 868,
                "value": "any",
                "raw": "\"any\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 880,
      "end": 901,
      "id": {
        "type": "Identifier",
        "start": 886,
        "end": 887,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 888,
        "end": 901,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 890,
            "end": 899,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 890,
              "end": 893,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 893,
              "end": 899,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 896,
                "end": 899,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 902,
      "end": 924,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 909,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 910,
        "end": 924,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 912,
            "end": 922,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 912,
              "end": 916,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 916,
              "end": 922,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 919,
                "end": 922,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 925,
      "end": 957,
      "id": {
        "type": "Identifier",
        "start": 931,
        "end": 932,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 941,
        "end": 942,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 943,
        "end": 957,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 945,
            "end": 955,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 945,
              "end": 949,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 949,
              "end": 955,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 952,
                "end": 955,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 958,
      "end": 990,
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 965,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 974,
        "end": 975,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 976,
        "end": 990,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 978,
            "end": 988,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 982,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 982,
              "end": 988,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 985,
                "end": 988,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 991,
      "end": 1018,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 995,
          "end": 999,
          "id": {
            "type": "Identifier",
            "start": 995,
            "end": 999,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 996,
              "end": 999,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 998,
                "end": 999,
                "typeName": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 999,
                  "name": "C",
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1001,
          "end": 1005,
          "id": {
            "type": "Identifier",
            "start": 1001,
            "end": 1005,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1005,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1004,
                "end": 1005,
                "typeName": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1005,
                  "name": "D",
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1007,
          "end": 1011,
          "id": {
            "type": "Identifier",
            "start": 1007,
            "end": 1011,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1008,
              "end": 1011,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1010,
                "end": 1011,
                "typeName": {
                  "type": "Identifier",
                  "start": 1010,
                  "end": 1011,
                  "name": "E",
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1013,
          "end": 1017,
          "id": {
            "type": "Identifier",
            "start": 1013,
            "end": 1017,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1014,
              "end": 1017,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1016,
                "end": 1017,
                "typeName": {
                  "type": "Identifier",
                  "start": 1016,
                  "end": 1017,
                  "name": "F",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1019,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1036,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1027,
            "name": "arr6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1030,
            "end": 1036,
            "elements": [
              {
                "type": "Identifier",
                "start": 1031,
                "end": 1032,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1035,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1052,
      "end": 1073,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1056,
          "end": 1072,
          "id": {
            "type": "Identifier",
            "start": 1056,
            "end": 1060,
            "name": "arr7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1063,
            "end": 1072,
            "elements": [
              {
                "type": "Identifier",
                "start": 1064,
                "end": 1065,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1067,
                "end": 1068,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1070,
                "end": 1071,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1087,
      "end": 1105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1091,
          "end": 1104,
          "id": {
            "type": "Identifier",
            "start": 1091,
            "end": 1095,
            "name": "arr8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1098,
            "end": 1104,
            "elements": [
              {
                "type": "Identifier",
                "start": 1099,
                "end": 1100,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1102,
                "end": 1103,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1113,
      "end": 1131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1117,
          "end": 1130,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1121,
            "name": "arr9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1124,
            "end": 1130,
            "elements": [
              {
                "type": "Identifier",
                "start": 1125,
                "end": 1126,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1128,
                "end": 1129,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
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
