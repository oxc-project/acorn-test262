__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 502
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
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 520
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 540,
                      "end": 542
                    },
                    "start": 533,
                    "end": 543
                  }
                ],
                "start": 523,
                "end": 549
              },
              "expression": false,
              "start": 520,
              "end": 549
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 509,
            "end": 549
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 566
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 586,
                      "end": 587
                    },
                    "start": 579,
                    "end": 588
                  }
                ],
                "start": 569,
                "end": 594
              },
              "expression": false,
              "start": 566,
              "end": 594
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 555,
            "end": 594
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 610
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 630,
                      "end": 634
                    },
                    "start": 623,
                    "end": 635
                  }
                ],
                "start": 613,
                "end": 641
              },
              "expression": false,
              "start": 610,
              "end": 641
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 600,
            "end": 641
          }
        ],
        "start": 503,
        "end": 643
      },
      "abstract": false,
      "declare": false,
      "start": 483,
      "end": 643
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerivedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 667
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 689
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 707
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 720,
                        "end": 725
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 720,
                      "end": 727
                    },
                    "directive": null,
                    "start": 720,
                    "end": 728
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 741,
                          "end": 742
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 745,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 755
                            },
                            "optional": false,
                            "computed": false,
                            "start": 745,
                            "end": 755
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 745,
                          "end": 757
                        },
                        "definite": false,
                        "start": 741,
                        "end": 757
                      }
                    ],
                    "declare": false,
                    "start": 737,
                    "end": 758
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 774,
                              "end": 780
                            },
                            "start": 772,
                            "end": 780
                          },
                          "start": 771,
                          "end": 780
                        },
                        "init": null,
                        "definite": false,
                        "start": 771,
                        "end": 780
                      }
                    ],
                    "declare": false,
                    "start": 767,
                    "end": 781
                  }
                ],
                "start": 710,
                "end": 787
              },
              "expression": false,
              "start": 707,
              "end": 787
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 696,
            "end": 787
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 795
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 812,
                          "end": 813
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 816,
                              "end": 821
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 822,
                              "end": 826
                            },
                            "optional": false,
                            "computed": false,
                            "start": 816,
                            "end": 826
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 816,
                          "end": 828
                        },
                        "definite": false,
                        "start": 812,
                        "end": 828
                      }
                    ],
                    "declare": false,
                    "start": 808,
                    "end": 829
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 845,
                              "end": 851
                            },
                            "start": 843,
                            "end": 851
                          },
                          "start": 842,
                          "end": 851
                        },
                        "init": null,
                        "definite": false,
                        "start": 842,
                        "end": 851
                      }
                    ],
                    "declare": false,
                    "start": 838,
                    "end": 852
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 865,
                          "end": 866
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 875,
                                "end": 880
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 881,
                                "end": 885
                              },
                              "optional": false,
                              "computed": false,
                              "start": 875,
                              "end": 885
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 875,
                            "end": 887
                          },
                          "id": null,
                          "generator": false,
                          "start": 869,
                          "end": 887
                        },
                        "definite": false,
                        "start": 865,
                        "end": 887
                      }
                    ],
                    "declare": false,
                    "start": 861,
                    "end": 888
                  }
                ],
                "start": 798,
                "end": 894
              },
              "expression": false,
              "start": 795,
              "end": 894
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 793,
            "end": 894
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 905
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 922,
                          "end": 923
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 926,
                              "end": 931
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 932,
                              "end": 936
                            },
                            "optional": false,
                            "computed": false,
                            "start": 926,
                            "end": 936
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 926,
                          "end": 938
                        },
                        "definite": false,
                        "start": 922,
                        "end": 938
                      }
                    ],
                    "declare": false,
                    "start": 918,
                    "end": 939
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 955,
                              "end": 961
                            },
                            "start": 953,
                            "end": 961
                          },
                          "start": 952,
                          "end": 961
                        },
                        "init": null,
                        "definite": false,
                        "start": 952,
                        "end": 961
                      }
                    ],
                    "declare": false,
                    "start": 948,
                    "end": 962
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 978,
                      "end": 982
                    },
                    "start": 971,
                    "end": 983
                  }
                ],
                "start": 908,
                "end": 989
              },
              "expression": false,
              "start": 905,
              "end": 989
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 900,
            "end": 989
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1000
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
                  "typeAnnotation": null,
                  "start": 1001,
                  "end": 1002
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1018,
                          "end": 1019
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1022,
                              "end": 1027
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1028,
                              "end": 1032
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1022,
                            "end": 1032
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1022,
                          "end": 1034
                        },
                        "definite": false,
                        "start": 1018,
                        "end": 1034
                      }
                    ],
                    "declare": false,
                    "start": 1014,
                    "end": 1035
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1051,
                              "end": 1057
                            },
                            "start": 1049,
                            "end": 1057
                          },
                          "start": 1048,
                          "end": 1057
                        },
                        "init": null,
                        "definite": false,
                        "start": 1048,
                        "end": 1057
                      }
                    ],
                    "declare": false,
                    "start": 1044,
                    "end": 1058
                  }
                ],
                "start": 1004,
                "end": 1064
              },
              "expression": false,
              "start": 1000,
              "end": 1064
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 995,
            "end": 1064
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1077,
              "end": 1079
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1096,
                          "end": 1097
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1100,
                              "end": 1105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1106,
                              "end": 1110
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1100,
                            "end": 1110
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1100,
                          "end": 1112
                        },
                        "definite": false,
                        "start": 1096,
                        "end": 1112
                      }
                    ],
                    "declare": false,
                    "start": 1092,
                    "end": 1113
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1129,
                              "end": 1135
                            },
                            "start": 1127,
                            "end": 1135
                          },
                          "start": 1126,
                          "end": 1135
                        },
                        "init": null,
                        "definite": false,
                        "start": 1126,
                        "end": 1135
                      }
                    ],
                    "declare": false,
                    "start": 1122,
                    "end": 1136
                  }
                ],
                "start": 1082,
                "end": 1142
              },
              "expression": false,
              "start": 1079,
              "end": 1142
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1070,
            "end": 1142
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1159,
              "end": 1160
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1177,
                          "end": 1178
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1181,
                              "end": 1186
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1187,
                              "end": 1191
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1181,
                            "end": 1191
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1181,
                          "end": 1193
                        },
                        "definite": false,
                        "start": 1177,
                        "end": 1193
                      }
                    ],
                    "declare": false,
                    "start": 1173,
                    "end": 1194
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1210,
                              "end": 1216
                            },
                            "start": 1208,
                            "end": 1216
                          },
                          "start": 1207,
                          "end": 1216
                        },
                        "init": null,
                        "definite": false,
                        "start": 1207,
                        "end": 1216
                      }
                    ],
                    "declare": false,
                    "start": 1203,
                    "end": 1217
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1233,
                      "end": 1237
                    },
                    "start": 1226,
                    "end": 1238
                  }
                ],
                "start": 1163,
                "end": 1244
              },
              "expression": false,
              "start": 1160,
              "end": 1244
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1148,
            "end": 1244
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1261,
              "end": 1262
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
                  "typeAnnotation": null,
                  "start": 1263,
                  "end": 1264
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1280,
                          "end": 1281
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1284,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1294
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1284,
                            "end": 1294
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1284,
                          "end": 1296
                        },
                        "definite": false,
                        "start": 1280,
                        "end": 1296
                      }
                    ],
                    "declare": false,
                    "start": 1276,
                    "end": 1297
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1313,
                              "end": 1319
                            },
                            "start": 1311,
                            "end": 1319
                          },
                          "start": 1310,
                          "end": 1319
                        },
                        "init": null,
                        "definite": false,
                        "start": 1310,
                        "end": 1319
                      }
                    ],
                    "declare": false,
                    "start": 1306,
                    "end": 1320
                  }
                ],
                "start": 1266,
                "end": 1326
              },
              "expression": false,
              "start": 1262,
              "end": 1326
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1250,
            "end": 1326
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 1332,
              "end": 1342
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1362,
                          "end": 1367
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "returnThis",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1368,
                          "end": 1378
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1362,
                        "end": 1378
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1362,
                      "end": 1380
                    },
                    "start": 1355,
                    "end": 1381
                  }
                ],
                "start": 1345,
                "end": 1387
              },
              "expression": false,
              "start": 1342,
              "end": 1387
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1332,
            "end": 1387
          }
        ],
        "start": 690,
        "end": 1389
      },
      "abstract": false,
      "declare": false,
      "start": 645,
      "end": 1389
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
            "name": "instance",
            "optional": false,
            "typeAnnotation": null,
            "start": 1395,
            "end": 1403
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeDerivedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1410,
              "end": 1426
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1406,
            "end": 1428
          },
          "definite": false,
          "start": 1395,
          "end": 1428
        }
      ],
      "declare": false,
      "start": 1391,
      "end": 1429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1438
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "returnThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1449
              },
              "optional": false,
              "computed": false,
              "start": 1430,
              "end": 1449
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1430,
            "end": 1451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1452,
            "end": 1454
          },
          "optional": false,
          "computed": false,
          "start": 1430,
          "end": 1454
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1430,
        "end": 1456
      },
      "directive": null,
      "start": 1430,
      "end": 1457
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 483,
  "end": 1457
}
```
