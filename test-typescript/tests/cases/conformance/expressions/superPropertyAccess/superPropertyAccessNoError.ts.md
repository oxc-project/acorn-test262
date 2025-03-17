__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 483,
  "end": 1458,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 483,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 502,
        "name": "SomeBaseClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 503,
        "end": 643,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 509,
            "end": 549,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 516,
              "end": 520,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 520,
              "end": 549,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 523,
                "end": 549,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 533,
                    "end": 543,
                    "argument": {
                      "type": "Literal",
                      "start": 540,
                      "end": 542,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 555,
            "end": 594,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 562,
              "end": 566,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 566,
              "end": 594,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 569,
                "end": 594,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 579,
                    "end": 588,
                    "argument": {
                      "type": "Literal",
                      "start": 586,
                      "end": 587,
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 600,
            "end": 641,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 610,
              "name": "returnThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 610,
              "end": 641,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 613,
                "end": 641,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 623,
                    "end": 635,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 630,
                      "end": 634
                    }
                  }
                ]
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
      "start": 645,
      "end": 1389,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 667,
        "name": "SomeDerivedClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 676,
        "end": 689,
        "name": "SomeBaseClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 690,
        "end": 1389,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 787,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 707,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 707,
              "end": 787,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 787,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 720,
                    "end": 728,
                    "expression": {
                      "type": "CallExpression",
                      "start": 720,
                      "end": 727,
                      "callee": {
                        "type": "Super",
                        "start": 720,
                        "end": 725
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 737,
                    "end": 758,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 741,
                        "end": 757,
                        "id": {
                          "type": "Identifier",
                          "start": 741,
                          "end": 742,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 745,
                          "end": 757,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 745,
                            "end": 755,
                            "object": {
                              "type": "Super",
                              "start": 745,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 751,
                              "end": 755,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 767,
                    "end": 781,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 771,
                        "end": 780,
                        "id": {
                          "type": "Identifier",
                          "start": 771,
                          "end": 780,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 772,
                            "end": 780,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 774,
                              "end": 780
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 793,
            "end": 894,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 793,
              "end": 795,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 795,
              "end": 894,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 798,
                "end": 894,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 808,
                    "end": 829,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 812,
                        "end": 828,
                        "id": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 813,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 816,
                          "end": 828,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 816,
                            "end": 826,
                            "object": {
                              "type": "Super",
                              "start": 816,
                              "end": 821
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 822,
                              "end": 826,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 838,
                    "end": 852,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 842,
                        "end": 851,
                        "id": {
                          "type": "Identifier",
                          "start": 842,
                          "end": 851,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 843,
                            "end": 851,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 845,
                              "end": 851
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
                    "start": 861,
                    "end": 888,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 865,
                        "end": 887,
                        "id": {
                          "type": "Identifier",
                          "start": 865,
                          "end": 866,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 869,
                          "end": 887,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "CallExpression",
                            "start": 875,
                            "end": 887,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 875,
                              "end": 885,
                              "object": {
                                "type": "Super",
                                "start": 875,
                                "end": 880
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 881,
                                "end": 885,
                                "name": "func",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 900,
            "end": 989,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 904,
              "end": 905,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 905,
              "end": 989,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 908,
                "end": 989,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 918,
                    "end": 939,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 922,
                        "end": 938,
                        "id": {
                          "type": "Identifier",
                          "start": 922,
                          "end": 923,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 926,
                          "end": 938,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 926,
                            "end": 936,
                            "object": {
                              "type": "Super",
                              "start": 926,
                              "end": 931
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 932,
                              "end": 936,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 948,
                    "end": 962,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 952,
                        "end": 961,
                        "id": {
                          "type": "Identifier",
                          "start": 952,
                          "end": 961,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 953,
                            "end": 961,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 955,
                              "end": 961
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
                    "type": "ReturnStatement",
                    "start": 971,
                    "end": 983,
                    "argument": {
                      "type": "Literal",
                      "start": 978,
                      "end": 982,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1064,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1000,
              "end": 1064,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1001,
                  "end": 1002,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1004,
                "end": 1064,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1014,
                    "end": 1035,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1018,
                        "end": 1034,
                        "id": {
                          "type": "Identifier",
                          "start": 1018,
                          "end": 1019,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 1022,
                          "end": 1034,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1022,
                            "end": 1032,
                            "object": {
                              "type": "Super",
                              "start": 1022,
                              "end": 1027
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1028,
                              "end": 1032,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1044,
                    "end": 1058,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1048,
                        "end": 1057,
                        "id": {
                          "type": "Identifier",
                          "start": 1048,
                          "end": 1057,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1049,
                            "end": 1057,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1051,
                              "end": 1057
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1070,
            "end": 1142,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1077,
              "end": 1079,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1079,
              "end": 1142,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1082,
                "end": 1142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1092,
                    "end": 1113,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1096,
                        "end": 1112,
                        "id": {
                          "type": "Identifier",
                          "start": 1096,
                          "end": 1097,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 1100,
                          "end": 1112,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1100,
                            "end": 1110,
                            "object": {
                              "type": "Super",
                              "start": 1100,
                              "end": 1105
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1106,
                              "end": 1110,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1122,
                    "end": 1136,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1126,
                        "end": 1135,
                        "id": {
                          "type": "Identifier",
                          "start": 1126,
                          "end": 1135,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1127,
                            "end": 1135,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1129,
                              "end": 1135
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1148,
            "end": 1244,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1159,
              "end": 1160,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1160,
              "end": 1244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1163,
                "end": 1244,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1173,
                    "end": 1194,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1177,
                        "end": 1193,
                        "id": {
                          "type": "Identifier",
                          "start": 1177,
                          "end": 1178,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 1181,
                          "end": 1193,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1181,
                            "end": 1191,
                            "object": {
                              "type": "Super",
                              "start": 1181,
                              "end": 1186
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1187,
                              "end": 1191,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1203,
                    "end": 1217,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1207,
                        "end": 1216,
                        "id": {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1216,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1208,
                            "end": 1216,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1210,
                              "end": 1216
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
                    "type": "ReturnStatement",
                    "start": 1226,
                    "end": 1238,
                    "argument": {
                      "type": "Literal",
                      "start": 1233,
                      "end": 1237,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1250,
            "end": 1326,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1262,
              "end": 1326,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1264,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1266,
                "end": 1326,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1276,
                    "end": 1297,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1280,
                        "end": 1296,
                        "id": {
                          "type": "Identifier",
                          "start": 1280,
                          "end": 1281,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 1284,
                          "end": 1296,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1284,
                            "end": 1294,
                            "object": {
                              "type": "Super",
                              "start": 1284,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1294,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1306,
                    "end": 1320,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1310,
                        "end": 1319,
                        "id": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1319,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1311,
                            "end": 1319,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1313,
                              "end": 1319
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1332,
            "end": 1387,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1332,
              "end": 1342,
              "name": "returnThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1342,
              "end": 1387,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1345,
                "end": 1387,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1355,
                    "end": 1381,
                    "argument": {
                      "type": "CallExpression",
                      "start": 1362,
                      "end": 1380,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1362,
                        "end": 1378,
                        "object": {
                          "type": "Super",
                          "start": 1362,
                          "end": 1367
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1368,
                          "end": 1378,
                          "name": "returnThis",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
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
      "start": 1391,
      "end": 1429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1395,
          "end": 1428,
          "id": {
            "type": "Identifier",
            "start": 1395,
            "end": 1403,
            "name": "instance",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1406,
            "end": 1428,
            "callee": {
              "type": "Identifier",
              "start": 1410,
              "end": 1426,
              "name": "SomeDerivedClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1430,
      "end": 1457,
      "expression": {
        "type": "CallExpression",
        "start": 1430,
        "end": 1456,
        "callee": {
          "type": "MemberExpression",
          "start": 1430,
          "end": 1454,
          "object": {
            "type": "CallExpression",
            "start": 1430,
            "end": 1451,
            "callee": {
              "type": "MemberExpression",
              "start": 1430,
              "end": 1449,
              "object": {
                "type": "Identifier",
                "start": 1430,
                "end": 1438,
                "name": "instance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1439,
                "end": 1449,
                "name": "returnThis",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 1452,
            "end": 1454,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
