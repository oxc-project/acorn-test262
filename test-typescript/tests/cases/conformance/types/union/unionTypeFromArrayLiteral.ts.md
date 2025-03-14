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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 523,
            "decorators": [],
            "name": "arr1",
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 530,
                "end": 531,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 554,
            "decorators": [],
            "name": "arr2",
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
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 567,
                "end": 571,
                "raw": "true",
                "value": true
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 628,
            "decorators": [],
            "name": "arr3Tuple",
            "optional": false,
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
            }
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
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 635,
                "end": 642,
                "raw": "\"three\"",
                "value": "three"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 696,
            "decorators": [],
            "name": "arr4Tuple",
            "optional": false,
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
            }
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
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 703,
                "end": 710,
                "raw": "\"three\"",
                "value": "three"
              },
              {
                "type": "Literal",
                "start": 712,
                "end": 719,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 754,
            "end": 762,
            "decorators": [],
            "name": "arrEmpty",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 765,
            "end": 767,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 817,
            "decorators": [],
            "name": "arr5Tuple",
            "optional": false,
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
                    "key": {
                      "type": "Literal",
                      "start": 790,
                      "end": 791,
                      "raw": "0",
                      "value": 0
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 791,
                      "end": 799,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 793,
                        "end": 799
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 805,
                    "end": 815,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 805,
                      "end": 806,
                      "raw": "5",
                      "value": 5
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 806,
                      "end": 814,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 808,
                        "end": 814
                      }
                    }
                  }
                ]
              }
            }
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
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 830,
                "end": 834,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 836,
                "end": 841,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 843,
                "end": 851,
                "raw": "\" hello\"",
                "value": " hello"
              },
              {
                "type": "Literal",
                "start": 853,
                "end": 857,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 859,
                "end": 861,
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 863,
                "end": 868,
                "raw": "\"any\"",
                "value": "any"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 880,
      "end": 901,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 888,
        "end": 901,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 890,
            "end": 899,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 890,
              "end": 893,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 893,
              "end": 899,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 896,
                "end": 899,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 886,
        "end": 887,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 902,
      "end": 924,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 910,
        "end": 924,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 912,
            "end": 922,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 912,
              "end": 916,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 916,
              "end": 922,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 919,
                "end": 922,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 909,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 925,
      "end": 957,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 943,
        "end": 957,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 945,
            "end": 955,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 945,
              "end": 949,
              "decorators": [],
              "name": "foo3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 949,
              "end": 955,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 952,
                "end": 955,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 931,
        "end": 932,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 941,
        "end": 942,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 958,
      "end": 990,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 976,
        "end": 990,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 978,
            "end": 988,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 982,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 982,
              "end": 988,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 985,
                "end": 988,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 964,
        "end": 965,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 974,
        "end": 975,
        "decorators": [],
        "name": "C",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 995,
            "end": 999,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 1001,
          "end": 1005,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1001,
            "end": 1005,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 1007,
          "end": 1011,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1007,
            "end": 1011,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 1013,
          "end": 1017,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1013,
            "end": 1017,
            "decorators": [],
            "name": "f",
            "optional": false,
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
                  "decorators": [],
                  "name": "F",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1027,
            "decorators": [],
            "name": "arr6",
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
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1035,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1056,
            "end": 1060,
            "decorators": [],
            "name": "arr7",
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
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1067,
                "end": 1068,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1070,
                "end": 1071,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1091,
            "end": 1095,
            "decorators": [],
            "name": "arr8",
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
                "decorators": [],
                "name": "c",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1102,
                "end": 1103,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1121,
            "decorators": [],
            "name": "arr9",
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
                "decorators": [],
                "name": "e",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1128,
                "end": 1129,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
