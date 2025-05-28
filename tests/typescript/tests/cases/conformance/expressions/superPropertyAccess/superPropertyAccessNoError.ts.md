__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 483,
  "end": 1457,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 483,
      "end": 643,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 502,
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 503,
        "end": 643,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 509,
            "end": 549,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 516,
              "end": 520,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 520,
              "end": 549,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 555,
            "end": 594,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 562,
              "end": 566,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 566,
              "end": 594,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 600,
            "end": 641,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 610,
              "decorators": [],
              "name": "returnThis",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 610,
              "end": 641,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 645,
      "end": 1389,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 667,
        "decorators": [],
        "name": "SomeDerivedClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 676,
        "end": 689,
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 690,
        "end": 1389,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 787,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 707,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 707,
              "end": 787,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 737,
                    "end": 758,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 741,
                        "end": 757,
                        "id": {
                          "type": "Identifier",
                          "start": 741,
                          "end": 742,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 767,
                    "end": 781,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 771,
                        "end": 780,
                        "id": {
                          "type": "Identifier",
                          "start": 771,
                          "end": 780,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 772,
                            "end": 780,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 774,
                              "end": 780
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 793,
            "end": 894,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 793,
              "end": 795,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 795,
              "end": 894,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 798,
                "end": 894,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 808,
                    "end": 829,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 812,
                        "end": 828,
                        "id": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 813,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 838,
                    "end": 852,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 842,
                        "end": 851,
                        "id": {
                          "type": "Identifier",
                          "start": 842,
                          "end": 851,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 843,
                            "end": 851,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 845,
                              "end": 851
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
                    "start": 861,
                    "end": 888,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 865,
                        "end": 887,
                        "id": {
                          "type": "Identifier",
                          "start": 865,
                          "end": 866,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 869,
                          "end": 887,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 900,
            "end": 989,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 904,
              "end": 905,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 905,
              "end": 989,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 908,
                "end": 989,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 918,
                    "end": 939,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 922,
                        "end": 938,
                        "id": {
                          "type": "Identifier",
                          "start": 922,
                          "end": 923,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 948,
                    "end": 962,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 952,
                        "end": 961,
                        "id": {
                          "type": "Identifier",
                          "start": 952,
                          "end": 961,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 953,
                            "end": 961,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 955,
                              "end": 961
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1064,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1000,
              "end": 1064,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1001,
                  "end": 1002,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1004,
                "end": 1064,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1014,
                    "end": 1035,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1018,
                        "end": 1034,
                        "id": {
                          "type": "Identifier",
                          "start": 1018,
                          "end": 1019,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1044,
                    "end": 1058,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1048,
                        "end": 1057,
                        "id": {
                          "type": "Identifier",
                          "start": 1048,
                          "end": 1057,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1049,
                            "end": 1057,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1051,
                              "end": 1057
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1070,
            "end": 1142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1077,
              "end": 1079,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1079,
              "end": 1142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1082,
                "end": 1142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1092,
                    "end": 1113,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1096,
                        "end": 1112,
                        "id": {
                          "type": "Identifier",
                          "start": 1096,
                          "end": 1097,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1122,
                    "end": 1136,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1126,
                        "end": 1135,
                        "id": {
                          "type": "Identifier",
                          "start": 1126,
                          "end": 1135,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1127,
                            "end": 1135,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1129,
                              "end": 1135
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1148,
            "end": 1244,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1159,
              "end": 1160,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1160,
              "end": 1244,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1163,
                "end": 1244,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1173,
                    "end": 1194,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1177,
                        "end": 1193,
                        "id": {
                          "type": "Identifier",
                          "start": 1177,
                          "end": 1178,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1203,
                    "end": 1217,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1207,
                        "end": 1216,
                        "id": {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1216,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1208,
                            "end": 1216,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1210,
                              "end": 1216
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1250,
            "end": 1326,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1262,
              "end": 1326,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1264,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1266,
                "end": 1326,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1276,
                    "end": 1297,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1280,
                        "end": 1296,
                        "id": {
                          "type": "Identifier",
                          "start": 1280,
                          "end": 1281,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1306,
                    "end": 1320,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1310,
                        "end": 1319,
                        "id": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1319,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1311,
                            "end": 1319,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1313,
                              "end": 1319
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1332,
            "end": 1387,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1332,
              "end": 1342,
              "decorators": [],
              "name": "returnThis",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1342,
              "end": 1387,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "returnThis",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
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
      "start": 1391,
      "end": 1429,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1395,
          "end": 1428,
          "id": {
            "type": "Identifier",
            "start": 1395,
            "end": 1403,
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1406,
            "end": 1428,
            "callee": {
              "type": "Identifier",
              "start": 1410,
              "end": 1426,
              "decorators": [],
              "name": "SomeDerivedClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
                "decorators": [],
                "name": "instance",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1439,
                "end": 1449,
                "decorators": [],
                "name": "returnThis",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1452,
            "end": 1454,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
