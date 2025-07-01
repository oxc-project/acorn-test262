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
        "name": "MyTestClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 17
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "canary",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 24,
            "end": 47
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 52,
            "end": 80
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 187
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 190,
                            "end": 194
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 195,
                            "end": 201
                          },
                          "optional": false,
                          "computed": false,
                          "start": 190,
                          "end": 201
                        },
                        "definite": false,
                        "start": 186,
                        "end": 201
                      }
                    ],
                    "declare": false,
                    "start": 182,
                    "end": 202
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 218,
                              "end": 224
                            },
                            "start": 216,
                            "end": 224
                          },
                          "start": 215,
                          "end": 224
                        },
                        "init": null,
                        "definite": false,
                        "start": 215,
                        "end": 224
                      }
                    ],
                    "declare": false,
                    "start": 211,
                    "end": 225
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 245
                        },
                        "optional": false,
                        "computed": false,
                        "start": 234,
                        "end": 245
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 248,
                        "end": 249
                      },
                      "start": 234,
                      "end": 249
                    },
                    "directive": null,
                    "start": 234,
                    "end": 250
                  }
                ],
                "start": 100,
                "end": 256
              },
              "expression": false,
              "start": 97,
              "end": 256
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 256
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 350
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 351,
                    "end": 352
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 355,
                    "end": 359
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 359
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 378,
                                "end": 389
                              },
                              "typeArguments": null,
                              "start": 378,
                              "end": 389
                            },
                            "start": 376,
                            "end": 389
                          },
                          "start": 375,
                          "end": 389
                        },
                        "init": null,
                        "definite": false,
                        "start": 375,
                        "end": 389
                      }
                    ],
                    "declare": false,
                    "start": 371,
                    "end": 390
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 480,
                          "end": 481
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 484,
                          "end": 488
                        },
                        "definite": false,
                        "start": 480,
                        "end": 488
                      }
                    ],
                    "declare": false,
                    "start": 476,
                    "end": 489
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 505,
                                "end": 516
                              },
                              "typeArguments": null,
                              "start": 505,
                              "end": 516
                            },
                            "start": 503,
                            "end": 516
                          },
                          "start": 502,
                          "end": 516
                        },
                        "init": null,
                        "definite": false,
                        "start": 502,
                        "end": 516
                      }
                    ],
                    "declare": false,
                    "start": 498,
                    "end": 517
                  }
                ],
                "start": 361,
                "end": 523
              },
              "expression": false,
              "start": 350,
              "end": 523
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 340,
            "end": 523
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 622
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 639,
                          "end": 640
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 643,
                          "end": 647
                        },
                        "definite": false,
                        "start": 639,
                        "end": 647
                      }
                    ],
                    "declare": false,
                    "start": 635,
                    "end": 648
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 664,
                                "end": 675
                              },
                              "typeArguments": null,
                              "start": 664,
                              "end": 675
                            },
                            "start": 662,
                            "end": 675
                          },
                          "start": 661,
                          "end": 675
                        },
                        "init": null,
                        "definite": false,
                        "start": 661,
                        "end": 675
                      }
                    ],
                    "declare": false,
                    "start": 657,
                    "end": 676
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 692,
                      "end": 696
                    },
                    "start": 685,
                    "end": 697
                  }
                ],
                "start": 625,
                "end": 703
              },
              "expression": false,
              "start": 622,
              "end": 703
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 614,
            "end": 703
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 716
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 718
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 734,
                          "end": 735
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 738,
                          "end": 742
                        },
                        "definite": false,
                        "start": 734,
                        "end": 742
                      }
                    ],
                    "declare": false,
                    "start": 730,
                    "end": 743
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 759,
                                "end": 770
                              },
                              "typeArguments": null,
                              "start": 759,
                              "end": 770
                            },
                            "start": 757,
                            "end": 770
                          },
                          "start": 756,
                          "end": 770
                        },
                        "init": null,
                        "definite": false,
                        "start": 756,
                        "end": 770
                      }
                    ],
                    "declare": false,
                    "start": 752,
                    "end": 771
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 780,
                        "end": 781
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 785
                      },
                      "start": 780,
                      "end": 785
                    },
                    "directive": null,
                    "start": 780,
                    "end": 786
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 795,
                        "end": 796
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 799,
                        "end": 800
                      },
                      "start": 795,
                      "end": 800
                    },
                    "directive": null,
                    "start": 795,
                    "end": 801
                  }
                ],
                "start": 720,
                "end": 807
              },
              "expression": false,
              "start": 716,
              "end": 807
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 708,
            "end": 807
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 821
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 927,
                          "end": 928
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 931,
                          "end": 935
                        },
                        "definite": false,
                        "start": 927,
                        "end": 935
                      }
                    ],
                    "declare": false,
                    "start": 923,
                    "end": 936
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 952,
                                "end": 963
                              },
                              "typeArguments": null,
                              "start": 952,
                              "end": 963
                            },
                            "start": 950,
                            "end": 963
                          },
                          "start": 949,
                          "end": 963
                        },
                        "init": null,
                        "definite": false,
                        "start": 949,
                        "end": 963
                      }
                    ],
                    "declare": false,
                    "start": 945,
                    "end": 964
                  }
                ],
                "start": 830,
                "end": 970
              },
              "id": null,
              "generator": false,
              "start": 824,
              "end": 970
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 813,
            "end": 971
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1064,
              "end": 1072
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1073,
                    "end": 1074
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 1077,
                    "end": 1081
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1081
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1107,
                                "end": 1118
                              },
                              "typeArguments": null,
                              "start": 1100,
                              "end": 1118
                            },
                            "start": 1098,
                            "end": 1118
                          },
                          "start": 1097,
                          "end": 1118
                        },
                        "init": null,
                        "definite": false,
                        "start": 1097,
                        "end": 1118
                      }
                    ],
                    "declare": false,
                    "start": 1093,
                    "end": 1119
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1132,
                          "end": 1133
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1136,
                          "end": 1147
                        },
                        "definite": false,
                        "start": 1132,
                        "end": 1147
                      }
                    ],
                    "declare": false,
                    "start": 1128,
                    "end": 1148
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1157,
                        "end": 1158
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1159,
                        "end": 1171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1157,
                      "end": 1171
                    },
                    "directive": null,
                    "start": 1157,
                    "end": 1172
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1264,
                          "end": 1265
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1268,
                          "end": 1272
                        },
                        "definite": false,
                        "start": 1264,
                        "end": 1272
                      }
                    ],
                    "declare": false,
                    "start": 1260,
                    "end": 1273
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1296,
                                "end": 1307
                              },
                              "typeArguments": null,
                              "start": 1289,
                              "end": 1307
                            },
                            "start": 1287,
                            "end": 1307
                          },
                          "start": 1286,
                          "end": 1307
                        },
                        "init": null,
                        "definite": false,
                        "start": 1286,
                        "end": 1307
                      }
                    ],
                    "declare": false,
                    "start": 1282,
                    "end": 1308
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1321,
                          "end": 1322
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1325,
                          "end": 1336
                        },
                        "definite": false,
                        "start": 1321,
                        "end": 1336
                      }
                    ],
                    "declare": false,
                    "start": 1317,
                    "end": 1337
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1346,
                        "end": 1347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1348,
                        "end": 1360
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1346,
                      "end": 1360
                    },
                    "directive": null,
                    "start": 1346,
                    "end": 1361
                  }
                ],
                "start": 1083,
                "end": 1367
              },
              "expression": false,
              "start": 1072,
              "end": 1367
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1057,
            "end": 1367
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1384,
              "end": 1394
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1489,
                          "end": 1490
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1493,
                          "end": 1497
                        },
                        "definite": false,
                        "start": 1489,
                        "end": 1497
                      }
                    ],
                    "declare": false,
                    "start": 1485,
                    "end": 1498
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1521,
                                "end": 1532
                              },
                              "typeArguments": null,
                              "start": 1514,
                              "end": 1532
                            },
                            "start": 1512,
                            "end": 1532
                          },
                          "start": 1511,
                          "end": 1532
                        },
                        "init": null,
                        "definite": false,
                        "start": 1511,
                        "end": 1532
                      }
                    ],
                    "declare": false,
                    "start": 1507,
                    "end": 1533
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1546,
                          "end": 1547
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1550,
                          "end": 1561
                        },
                        "definite": false,
                        "start": 1546,
                        "end": 1561
                      }
                    ],
                    "declare": false,
                    "start": 1542,
                    "end": 1562
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1571,
                        "end": 1572
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1573,
                        "end": 1585
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1571,
                      "end": 1585
                    },
                    "directive": null,
                    "start": 1571,
                    "end": 1586
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 1602,
                      "end": 1606
                    },
                    "start": 1595,
                    "end": 1607
                  }
                ],
                "start": 1397,
                "end": 1613
              },
              "expression": false,
              "start": 1394,
              "end": 1613
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1373,
            "end": 1613
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1639
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyTestClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1650,
                        "end": 1661
                      },
                      "typeArguments": null,
                      "start": 1643,
                      "end": 1661
                    },
                    "start": 1641,
                    "end": 1661
                  },
                  "start": 1640,
                  "end": 1661
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1755,
                          "end": 1756
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1759,
                          "end": 1763
                        },
                        "definite": false,
                        "start": 1755,
                        "end": 1763
                      }
                    ],
                    "declare": false,
                    "start": 1751,
                    "end": 1764
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1787,
                                "end": 1798
                              },
                              "typeArguments": null,
                              "start": 1780,
                              "end": 1798
                            },
                            "start": 1778,
                            "end": 1798
                          },
                          "start": 1777,
                          "end": 1798
                        },
                        "init": null,
                        "definite": false,
                        "start": 1777,
                        "end": 1798
                      }
                    ],
                    "declare": false,
                    "start": 1773,
                    "end": 1799
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1812,
                          "end": 1813
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1816,
                          "end": 1827
                        },
                        "definite": false,
                        "start": 1812,
                        "end": 1827
                      }
                    ],
                    "declare": false,
                    "start": 1808,
                    "end": 1828
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1837,
                        "end": 1838
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1839,
                        "end": 1851
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1837,
                      "end": 1851
                    },
                    "directive": null,
                    "start": 1837,
                    "end": 1852
                  }
                ],
                "start": 1663,
                "end": 1858
              },
              "expression": false,
              "start": 1639,
              "end": 1858
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1618,
            "end": 1858
          }
        ],
        "start": 18,
        "end": 1860
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1860
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyGenericTestClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1868,
        "end": 1886
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
              "start": 1887,
              "end": 1888
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1887,
            "end": 1888
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1890,
              "end": 1891
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1890,
            "end": 1891
          }
        ],
        "start": 1886,
        "end": 1892
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "canary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1907,
              "end": 1913
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1915,
                "end": 1921
              },
              "start": 1913,
              "end": 1921
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1899,
            "end": 1922
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1934,
              "end": 1946
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1948,
                "end": 1954
              },
              "start": 1946,
              "end": 1954
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1927,
            "end": 1955
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1972
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2061,
                          "end": 2062
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2065,
                            "end": 2069
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2070,
                            "end": 2076
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2065,
                          "end": 2076
                        },
                        "definite": false,
                        "start": 2061,
                        "end": 2076
                      }
                    ],
                    "declare": false,
                    "start": 2057,
                    "end": 2077
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2093,
                              "end": 2099
                            },
                            "start": 2091,
                            "end": 2099
                          },
                          "start": 2090,
                          "end": 2099
                        },
                        "init": null,
                        "definite": false,
                        "start": 2090,
                        "end": 2099
                      }
                    ],
                    "declare": false,
                    "start": 2086,
                    "end": 2100
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2109,
                          "end": 2113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2114,
                          "end": 2120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2109,
                        "end": 2120
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2123,
                        "end": 2124
                      },
                      "start": 2109,
                      "end": 2124
                    },
                    "directive": null,
                    "start": 2109,
                    "end": 2125
                  }
                ],
                "start": 1975,
                "end": 2131
              },
              "expression": false,
              "start": 1972,
              "end": 2131
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1961,
            "end": 2131
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 2215,
              "end": 2225
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2226,
                    "end": 2227
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 2230,
                    "end": 2234
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2226,
                  "end": 2234
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2253,
                                "end": 2271
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
                                      "start": 2272,
                                      "end": 2273
                                    },
                                    "typeArguments": null,
                                    "start": 2272,
                                    "end": 2273
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2275,
                                      "end": 2276
                                    },
                                    "typeArguments": null,
                                    "start": 2275,
                                    "end": 2276
                                  }
                                ],
                                "start": 2271,
                                "end": 2277
                              },
                              "start": 2253,
                              "end": 2277
                            },
                            "start": 2251,
                            "end": 2277
                          },
                          "start": 2250,
                          "end": 2277
                        },
                        "init": null,
                        "definite": false,
                        "start": 2250,
                        "end": 2277
                      }
                    ],
                    "declare": false,
                    "start": 2246,
                    "end": 2278
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2368,
                          "end": 2369
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2372,
                          "end": 2376
                        },
                        "definite": false,
                        "start": 2368,
                        "end": 2376
                      }
                    ],
                    "declare": false,
                    "start": 2364,
                    "end": 2377
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2393,
                                "end": 2411
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
                                      "start": 2412,
                                      "end": 2413
                                    },
                                    "typeArguments": null,
                                    "start": 2412,
                                    "end": 2413
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2415,
                                      "end": 2416
                                    },
                                    "typeArguments": null,
                                    "start": 2415,
                                    "end": 2416
                                  }
                                ],
                                "start": 2411,
                                "end": 2417
                              },
                              "start": 2393,
                              "end": 2417
                            },
                            "start": 2391,
                            "end": 2417
                          },
                          "start": 2390,
                          "end": 2417
                        },
                        "init": null,
                        "definite": false,
                        "start": 2390,
                        "end": 2417
                      }
                    ],
                    "declare": false,
                    "start": 2386,
                    "end": 2418
                  }
                ],
                "start": 2236,
                "end": 2424
              },
              "expression": false,
              "start": 2225,
              "end": 2424
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2215,
            "end": 2424
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2519,
              "end": 2523
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2540,
                          "end": 2541
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2544,
                          "end": 2548
                        },
                        "definite": false,
                        "start": 2540,
                        "end": 2548
                      }
                    ],
                    "declare": false,
                    "start": 2536,
                    "end": 2549
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2565,
                                "end": 2583
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
                                      "start": 2584,
                                      "end": 2585
                                    },
                                    "typeArguments": null,
                                    "start": 2584,
                                    "end": 2585
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2587,
                                      "end": 2588
                                    },
                                    "typeArguments": null,
                                    "start": 2587,
                                    "end": 2588
                                  }
                                ],
                                "start": 2583,
                                "end": 2589
                              },
                              "start": 2565,
                              "end": 2589
                            },
                            "start": 2563,
                            "end": 2589
                          },
                          "start": 2562,
                          "end": 2589
                        },
                        "init": null,
                        "definite": false,
                        "start": 2562,
                        "end": 2589
                      }
                    ],
                    "declare": false,
                    "start": 2558,
                    "end": 2590
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 2606,
                      "end": 2610
                    },
                    "start": 2599,
                    "end": 2611
                  }
                ],
                "start": 2526,
                "end": 2617
              },
              "expression": false,
              "start": 2523,
              "end": 2617
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2515,
            "end": 2617
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2626,
              "end": 2630
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2631,
                  "end": 2632
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2648,
                          "end": 2649
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2652,
                          "end": 2656
                        },
                        "definite": false,
                        "start": 2648,
                        "end": 2656
                      }
                    ],
                    "declare": false,
                    "start": 2644,
                    "end": 2657
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2673,
                                "end": 2691
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
                                      "start": 2692,
                                      "end": 2693
                                    },
                                    "typeArguments": null,
                                    "start": 2692,
                                    "end": 2693
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2695,
                                      "end": 2696
                                    },
                                    "typeArguments": null,
                                    "start": 2695,
                                    "end": 2696
                                  }
                                ],
                                "start": 2691,
                                "end": 2697
                              },
                              "start": 2673,
                              "end": 2697
                            },
                            "start": 2671,
                            "end": 2697
                          },
                          "start": 2670,
                          "end": 2697
                        },
                        "init": null,
                        "definite": false,
                        "start": 2670,
                        "end": 2697
                      }
                    ],
                    "declare": false,
                    "start": 2666,
                    "end": 2698
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2707,
                        "end": 2708
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2711,
                        "end": 2712
                      },
                      "start": 2707,
                      "end": 2712
                    },
                    "directive": null,
                    "start": 2707,
                    "end": 2713
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2722,
                        "end": 2723
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2726,
                        "end": 2727
                      },
                      "start": 2722,
                      "end": 2727
                    },
                    "directive": null,
                    "start": 2722,
                    "end": 2728
                  }
                ],
                "start": 2634,
                "end": 2734
              },
              "expression": false,
              "start": 2630,
              "end": 2734
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2622,
            "end": 2734
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 2740,
              "end": 2748
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2854,
                          "end": 2855
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2858,
                          "end": 2862
                        },
                        "definite": false,
                        "start": 2854,
                        "end": 2862
                      }
                    ],
                    "declare": false,
                    "start": 2850,
                    "end": 2863
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2879,
                                "end": 2897
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
                                      "start": 2898,
                                      "end": 2899
                                    },
                                    "typeArguments": null,
                                    "start": 2898,
                                    "end": 2899
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2901,
                                      "end": 2902
                                    },
                                    "typeArguments": null,
                                    "start": 2901,
                                    "end": 2902
                                  }
                                ],
                                "start": 2897,
                                "end": 2903
                              },
                              "start": 2879,
                              "end": 2903
                            },
                            "start": 2877,
                            "end": 2903
                          },
                          "start": 2876,
                          "end": 2903
                        },
                        "init": null,
                        "definite": false,
                        "start": 2876,
                        "end": 2903
                      }
                    ],
                    "declare": false,
                    "start": 2872,
                    "end": 2904
                  }
                ],
                "start": 2757,
                "end": 2910
              },
              "id": null,
              "generator": false,
              "start": 2751,
              "end": 2910
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2740,
            "end": 2911
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 3004,
              "end": 3012
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3013,
                    "end": 3014
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 3017,
                    "end": 3021
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3013,
                  "end": 3021
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3047,
                                "end": 3065
                              },
                              "typeArguments": null,
                              "start": 3040,
                              "end": 3065
                            },
                            "start": 3038,
                            "end": 3065
                          },
                          "start": 3037,
                          "end": 3065
                        },
                        "init": null,
                        "definite": false,
                        "start": 3037,
                        "end": 3065
                      }
                    ],
                    "declare": false,
                    "start": 3033,
                    "end": 3066
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3079,
                          "end": 3080
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3083,
                          "end": 3101
                        },
                        "definite": false,
                        "start": 3079,
                        "end": 3101
                      }
                    ],
                    "declare": false,
                    "start": 3075,
                    "end": 3102
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3111,
                        "end": 3112
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3113,
                        "end": 3125
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3111,
                      "end": 3125
                    },
                    "directive": null,
                    "start": 3111,
                    "end": 3126
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3218,
                          "end": 3219
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3222,
                          "end": 3226
                        },
                        "definite": false,
                        "start": 3218,
                        "end": 3226
                      }
                    ],
                    "declare": false,
                    "start": 3214,
                    "end": 3227
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3250,
                                "end": 3268
                              },
                              "typeArguments": null,
                              "start": 3243,
                              "end": 3268
                            },
                            "start": 3241,
                            "end": 3268
                          },
                          "start": 3240,
                          "end": 3268
                        },
                        "init": null,
                        "definite": false,
                        "start": 3240,
                        "end": 3268
                      }
                    ],
                    "declare": false,
                    "start": 3236,
                    "end": 3269
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3282,
                          "end": 3283
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3286,
                          "end": 3304
                        },
                        "definite": false,
                        "start": 3282,
                        "end": 3304
                      }
                    ],
                    "declare": false,
                    "start": 3278,
                    "end": 3305
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3314,
                        "end": 3315
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3316,
                        "end": 3328
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3314,
                      "end": 3328
                    },
                    "directive": null,
                    "start": 3314,
                    "end": 3329
                  }
                ],
                "start": 3023,
                "end": 3335
              },
              "expression": false,
              "start": 3012,
              "end": 3335
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2997,
            "end": 3335
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3352,
              "end": 3362
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3457,
                          "end": 3458
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3461,
                          "end": 3465
                        },
                        "definite": false,
                        "start": 3457,
                        "end": 3465
                      }
                    ],
                    "declare": false,
                    "start": 3453,
                    "end": 3466
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3489,
                                "end": 3507
                              },
                              "typeArguments": null,
                              "start": 3482,
                              "end": 3507
                            },
                            "start": 3480,
                            "end": 3507
                          },
                          "start": 3479,
                          "end": 3507
                        },
                        "init": null,
                        "definite": false,
                        "start": 3479,
                        "end": 3507
                      }
                    ],
                    "declare": false,
                    "start": 3475,
                    "end": 3508
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3521,
                          "end": 3522
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3525,
                          "end": 3543
                        },
                        "definite": false,
                        "start": 3521,
                        "end": 3543
                      }
                    ],
                    "declare": false,
                    "start": 3517,
                    "end": 3544
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3553,
                        "end": 3554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3555,
                        "end": 3567
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3553,
                      "end": 3567
                    },
                    "directive": null,
                    "start": 3553,
                    "end": 3568
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 3584,
                      "end": 3588
                    },
                    "start": 3577,
                    "end": 3589
                  }
                ],
                "start": 3365,
                "end": 3595
              },
              "expression": false,
              "start": 3362,
              "end": 3595
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3341,
            "end": 3595
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3611,
              "end": 3621
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyGenericTestClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3632,
                        "end": 3650
                      },
                      "typeArguments": null,
                      "start": 3625,
                      "end": 3650
                    },
                    "start": 3623,
                    "end": 3650
                  },
                  "start": 3622,
                  "end": 3650
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3744,
                          "end": 3745
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3748,
                          "end": 3752
                        },
                        "definite": false,
                        "start": 3744,
                        "end": 3752
                      }
                    ],
                    "declare": false,
                    "start": 3740,
                    "end": 3753
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3776,
                                "end": 3794
                              },
                              "typeArguments": null,
                              "start": 3769,
                              "end": 3794
                            },
                            "start": 3767,
                            "end": 3794
                          },
                          "start": 3766,
                          "end": 3794
                        },
                        "init": null,
                        "definite": false,
                        "start": 3766,
                        "end": 3794
                      }
                    ],
                    "declare": false,
                    "start": 3762,
                    "end": 3795
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3808,
                          "end": 3809
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3812,
                          "end": 3830
                        },
                        "definite": false,
                        "start": 3808,
                        "end": 3830
                      }
                    ],
                    "declare": false,
                    "start": 3804,
                    "end": 3831
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3840,
                        "end": 3841
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3842,
                        "end": 3854
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3840,
                      "end": 3854
                    },
                    "directive": null,
                    "start": 3840,
                    "end": 3855
                  }
                ],
                "start": 3652,
                "end": 3861
              },
              "expression": false,
              "start": 3621,
              "end": 3861
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3600,
            "end": 3861
          }
        ],
        "start": 1893,
        "end": 3863
      },
      "abstract": false,
      "declare": false,
      "start": 1862,
      "end": 3863
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 3935,
        "end": 3937
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 3938,
            "end": 3939
          },
          "right": {
            "type": "ThisExpression",
            "start": 3942,
            "end": 3946
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 3938,
          "end": 3946
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3961,
                      "end": 3964
                    },
                    "start": 3959,
                    "end": 3964
                  },
                  "start": 3958,
                  "end": 3964
                },
                "init": null,
                "definite": false,
                "start": 3958,
                "end": 3964
              }
            ],
            "declare": false,
            "start": 3954,
            "end": 3965
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3970,
                  "end": 3971
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spaaaaaaace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3972,
                  "end": 3983
                },
                "optional": false,
                "computed": false,
                "start": 3970,
                "end": 3983
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 3986,
                "end": 3987
              },
              "start": 3970,
              "end": 3987
            },
            "directive": null,
            "start": 3970,
            "end": 3988
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4060,
                      "end": 4063
                    },
                    "start": 4058,
                    "end": 4063
                  },
                  "start": 4057,
                  "end": 4063
                },
                "init": null,
                "definite": false,
                "start": 4057,
                "end": 4063
              }
            ],
            "declare": false,
            "start": 4053,
            "end": 4064
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4073,
                  "end": 4074
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 4077,
                  "end": 4081
                },
                "definite": false,
                "start": 4073,
                "end": 4081
              }
            ],
            "declare": false,
            "start": 4069,
            "end": 4082
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 4087,
                  "end": 4091
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spaaaaace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4092,
                  "end": 4101
                },
                "optional": false,
                "computed": false,
                "start": 4087,
                "end": 4101
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 4104,
                "end": 4105
              },
              "start": 4087,
              "end": 4105
            },
            "directive": null,
            "start": 4087,
            "end": 4106
          }
        ],
        "start": 3948,
        "end": 4108
      },
      "expression": false,
      "start": 3926,
      "end": 4108
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
            "name": "q1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4179,
            "end": 4181
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4194,
                  "end": 4195
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4198,
                  "end": 4202
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 4194,
                "end": 4202
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4217,
                            "end": 4220
                          },
                          "start": 4215,
                          "end": 4220
                        },
                        "start": 4214,
                        "end": 4220
                      },
                      "init": null,
                      "definite": false,
                      "start": 4214,
                      "end": 4220
                    }
                  ],
                  "declare": false,
                  "start": 4210,
                  "end": 4221
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4226,
                        "end": 4227
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4228,
                        "end": 4239
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4226,
                      "end": 4239
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4242,
                      "end": 4243
                    },
                    "start": 4226,
                    "end": 4243
                  },
                  "directive": null,
                  "start": 4226,
                  "end": 4244
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4315,
                            "end": 4318
                          },
                          "start": 4313,
                          "end": 4318
                        },
                        "start": 4312,
                        "end": 4318
                      },
                      "init": null,
                      "definite": false,
                      "start": 4312,
                      "end": 4318
                    }
                  ],
                  "declare": false,
                  "start": 4308,
                  "end": 4319
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4328,
                        "end": 4329
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4332,
                        "end": 4336
                      },
                      "definite": false,
                      "start": 4328,
                      "end": 4336
                    }
                  ],
                  "declare": false,
                  "start": 4324,
                  "end": 4337
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4342,
                        "end": 4346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4347,
                        "end": 4356
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4342,
                      "end": 4356
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4359,
                      "end": 4360
                    },
                    "start": 4342,
                    "end": 4360
                  },
                  "directive": null,
                  "start": 4342,
                  "end": 4361
                }
              ],
              "start": 4204,
              "end": 4363
            },
            "expression": false,
            "start": 4184,
            "end": 4363
          },
          "definite": false,
          "start": 4179,
          "end": 4363
        }
      ],
      "declare": false,
      "start": 4175,
      "end": 4363
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
            "name": "q2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4444,
            "end": 4446
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4450,
                  "end": 4451
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4454,
                  "end": 4458
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 4450,
                "end": 4458
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "globalThis",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4483,
                              "end": 4493
                            },
                            "typeArguments": null,
                            "start": 4476,
                            "end": 4493
                          },
                          "start": 4474,
                          "end": 4493
                        },
                        "start": 4473,
                        "end": 4493
                      },
                      "init": null,
                      "definite": false,
                      "start": 4473,
                      "end": 4493
                    }
                  ],
                  "declare": false,
                  "start": 4469,
                  "end": 4494
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4499,
                        "end": 4500
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4501,
                        "end": 4512
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4499,
                      "end": 4512
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4515,
                      "end": 4516
                    },
                    "start": 4499,
                    "end": 4516
                  },
                  "directive": null,
                  "start": 4499,
                  "end": 4517
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "globalThis",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4610,
                              "end": 4620
                            },
                            "typeArguments": null,
                            "start": 4603,
                            "end": 4620
                          },
                          "start": 4601,
                          "end": 4620
                        },
                        "start": 4600,
                        "end": 4620
                      },
                      "init": null,
                      "definite": false,
                      "start": 4600,
                      "end": 4620
                    }
                  ],
                  "declare": false,
                  "start": 4596,
                  "end": 4621
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4630,
                        "end": 4631
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4634,
                        "end": 4638
                      },
                      "definite": false,
                      "start": 4630,
                      "end": 4638
                    }
                  ],
                  "declare": false,
                  "start": 4626,
                  "end": 4639
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4644,
                        "end": 4648
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4649,
                        "end": 4658
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4644,
                      "end": 4658
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4661,
                      "end": 4662
                    },
                    "start": 4644,
                    "end": 4662
                  },
                  "directive": null,
                  "start": 4644,
                  "end": 4663
                }
              ],
              "start": 4463,
              "end": 4665
            },
            "id": null,
            "generator": false,
            "start": 4449,
            "end": 4665
          },
          "definite": false,
          "start": 4444,
          "end": 4665
        }
      ],
      "declare": false,
      "start": 4440,
      "end": 4665
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4729,
                  "end": 4739
                },
                "typeArguments": null,
                "start": 4722,
                "end": 4739
              },
              "start": 4720,
              "end": 4739
            },
            "start": 4719,
            "end": 4739
          },
          "init": null,
          "definite": false,
          "start": 4719,
          "end": 4739
        }
      ],
      "declare": false,
      "start": 4715,
      "end": 4740
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 4745,
            "end": 4746
          },
          "init": {
            "type": "ThisExpression",
            "start": 4749,
            "end": 4753
          },
          "definite": false,
          "start": 4745,
          "end": 4753
        }
      ],
      "declare": false,
      "start": 4741,
      "end": 4754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "ThisExpression",
            "start": 4755,
            "end": 4759
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "spaaaaace",
            "optional": false,
            "typeAnnotation": null,
            "start": 4760,
            "end": 4769
          },
          "optional": false,
          "computed": false,
          "start": 4755,
          "end": 4769
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 4772,
          "end": 4773
        },
        "start": 4755,
        "end": 4773
      },
      "directive": null,
      "start": 4755,
      "end": 4774
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4775
}
```
