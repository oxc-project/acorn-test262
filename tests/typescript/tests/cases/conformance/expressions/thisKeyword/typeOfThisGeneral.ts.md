__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 6,
    "end": 17,
    "range": [
      6,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 24,
    "end": 31,
    "range": [
      24,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 59,
    "end": 71,
    "range": [
      59,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 86,
    "end": 97,
    "range": [
      86,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 182,
    "end": 185,
    "range": [
      182,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 190,
    "end": 194,
    "range": [
      190,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 234,
    "end": 238,
    "range": [
      234,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "memberFunc",
    "start": 340,
    "end": 350,
    "range": [
      340,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 355,
    "end": 359,
    "range": [
      355,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 371,
    "end": 374,
    "range": [
      371,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 378,
    "end": 389,
    "range": [
      378,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 476,
    "end": 479,
    "range": [
      476,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 484,
    "end": 488,
    "range": [
      484,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501,
    "range": [
      498,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 505,
    "end": 516,
    "range": [
      505,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 614,
    "end": 617,
    "range": [
      614,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 618,
    "end": 622,
    "range": [
      618,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 635,
    "end": 638,
    "range": [
      635,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 643,
    "end": 647,
    "range": [
      643,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 664,
    "end": 675,
    "range": [
      664,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 685,
    "end": 691,
    "range": [
      685,
      691
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 692,
    "end": 696,
    "range": [
      692,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 708,
    "end": 711,
    "range": [
      708,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 712,
    "end": 716,
    "range": [
      712,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 730,
    "end": 733,
    "range": [
      730,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 738,
    "end": 742,
    "range": [
      738,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 752,
    "end": 755,
    "range": [
      752,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 759,
    "end": 770,
    "range": [
      759,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "someFunc",
    "start": 813,
    "end": 821,
    "range": [
      813,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 827,
    "end": 829,
    "range": [
      827,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 923,
    "end": 926,
    "range": [
      923,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 931,
    "end": 935,
    "range": [
      931,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 945,
    "end": 948,
    "range": [
      945,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 952,
    "end": 963,
    "range": [
      952,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1057,
    "end": 1063,
    "range": [
      1057,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "staticFn",
    "start": 1064,
    "end": 1072,
    "range": [
      1064,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1077,
    "end": 1081,
    "range": [
      1077,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1093,
    "end": 1096,
    "range": [
      1093,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1100,
    "end": 1106,
    "range": [
      1100,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1107,
    "end": 1118,
    "range": [
      1107,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1128,
    "end": 1131,
    "range": [
      1128,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1136,
    "end": 1147,
    "range": [
      1136,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1159,
    "end": 1171,
    "range": [
      1159,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1260,
    "end": 1263,
    "range": [
      1260,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1268,
    "end": 1272,
    "range": [
      1268,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1282,
    "end": 1285,
    "range": [
      1282,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1289,
    "end": 1295,
    "range": [
      1289,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1296,
    "end": 1307,
    "range": [
      1296,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1317,
    "end": 1320,
    "range": [
      1317,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1325,
    "end": 1336,
    "range": [
      1325,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1348,
    "end": 1360,
    "range": [
      1348,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1373,
    "end": 1379,
    "range": [
      1373,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1380,
    "end": 1383,
    "range": [
      1380,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 1384,
    "end": 1394,
    "range": [
      1384,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1485,
    "end": 1488,
    "range": [
      1485,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1493,
    "end": 1497,
    "range": [
      1493,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1507,
    "end": 1510,
    "range": [
      1507,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1514,
    "end": 1520,
    "range": [
      1514,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1521,
    "end": 1532,
    "range": [
      1521,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1542,
    "end": 1545,
    "range": [
      1542,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1550,
    "end": 1561,
    "range": [
      1550,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1573,
    "end": 1585,
    "range": [
      1573,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1595,
    "end": 1601,
    "range": [
      1595,
      1601
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1602,
    "end": 1606,
    "range": [
      1602,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1618,
    "end": 1624,
    "range": [
      1618,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1625,
    "end": 1628,
    "range": [
      1625,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 1629,
    "end": 1639,
    "range": [
      1629,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1643,
    "end": 1649,
    "range": [
      1643,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1650,
    "end": 1661,
    "range": [
      1650,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1751,
    "end": 1754,
    "range": [
      1751,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1759,
    "end": 1763,
    "range": [
      1759,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1773,
    "end": 1776,
    "range": [
      1773,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1780,
    "end": 1786,
    "range": [
      1780,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1787,
    "end": 1798,
    "range": [
      1787,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1808,
    "end": 1811,
    "range": [
      1808,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1816,
    "end": 1827,
    "range": [
      1816,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1839,
    "end": 1851,
    "range": [
      1839,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1862,
    "end": 1867,
    "range": [
      1862,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 1868,
    "end": 1886,
    "range": [
      1868,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1899,
    "end": 1906,
    "range": [
      1899,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 1907,
    "end": 1913,
    "range": [
      1907,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1915,
    "end": 1921,
    "range": [
      1915,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1927,
    "end": 1933,
    "range": [
      1927,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1934,
    "end": 1946,
    "range": [
      1934,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1948,
    "end": 1954,
    "range": [
      1948,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1961,
    "end": 1972,
    "range": [
      1961,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2057,
    "end": 2060,
    "range": [
      2057,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2065,
    "end": 2069,
    "range": [
      2065,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 2070,
    "end": 2076,
    "range": [
      2070,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2086,
    "end": 2089,
    "range": [
      2086,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2093,
    "end": 2099,
    "range": [
      2093,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2109,
    "end": 2113,
    "range": [
      2109,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 2114,
    "end": 2120,
    "range": [
      2114,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "memberFunc",
    "start": 2215,
    "end": 2225,
    "range": [
      2215,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2230,
    "end": 2234,
    "range": [
      2230,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2246,
    "end": 2249,
    "range": [
      2246,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2253,
    "end": 2271,
    "range": [
      2253,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2364,
    "end": 2367,
    "range": [
      2364,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2372,
    "end": 2376,
    "range": [
      2372,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2386,
    "end": 2389,
    "range": [
      2386,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2393,
    "end": 2411,
    "range": [
      2393,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2515,
    "end": 2518,
    "range": [
      2515,
      2518
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2519,
    "end": 2523,
    "range": [
      2519,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2536,
    "end": 2539,
    "range": [
      2536,
      2539
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2542,
    "end": 2543,
    "range": [
      2542,
      2543
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2544,
    "end": 2548,
    "range": [
      2544,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2558,
    "end": 2561,
    "range": [
      2558,
      2561
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2565,
    "end": 2583,
    "range": [
      2565,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2599,
    "end": 2605,
    "range": [
      2599,
      2605
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2606,
    "end": 2610,
    "range": [
      2606,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2622,
    "end": 2625,
    "range": [
      2622,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2626,
    "end": 2630,
    "range": [
      2626,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2644,
    "end": 2647,
    "range": [
      2644,
      2647
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2652,
    "end": 2656,
    "range": [
      2652,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2666,
    "end": 2669,
    "range": [
      2666,
      2669
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2673,
    "end": 2691,
    "range": [
      2673,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2692,
    "end": 2693,
    "range": [
      2692,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "someFunc",
    "start": 2740,
    "end": 2748,
    "range": [
      2740,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2754,
    "end": 2756,
    "range": [
      2754,
      2756
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2850,
    "end": 2853,
    "range": [
      2850,
      2853
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2858,
    "end": 2862,
    "range": [
      2858,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2872,
    "end": 2875,
    "range": [
      2872,
      2875
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2879,
    "end": 2897,
    "range": [
      2879,
      2897
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2997,
    "end": 3003,
    "range": [
      2997,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "staticFn",
    "start": 3004,
    "end": 3012,
    "range": [
      3004,
      3012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3017,
    "end": 3021,
    "range": [
      3017,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3033,
    "end": 3036,
    "range": [
      3033,
      3036
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3040,
    "end": 3046,
    "range": [
      3040,
      3046
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3047,
    "end": 3065,
    "range": [
      3047,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3075,
    "end": 3078,
    "range": [
      3075,
      3078
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3083,
    "end": 3101,
    "range": [
      3083,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3111,
    "end": 3112,
    "range": [
      3111,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3113,
    "end": 3125,
    "range": [
      3113,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3214,
    "end": 3217,
    "range": [
      3214,
      3217
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3222,
    "end": 3226,
    "range": [
      3222,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3236,
    "end": 3239,
    "range": [
      3236,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3243,
    "end": 3249,
    "range": [
      3243,
      3249
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3250,
    "end": 3268,
    "range": [
      3250,
      3268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3268,
    "end": 3269,
    "range": [
      3268,
      3269
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3278,
    "end": 3281,
    "range": [
      3278,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3286,
    "end": 3304,
    "range": [
      3286,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3316,
    "end": 3328,
    "range": [
      3316,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3341,
    "end": 3347,
    "range": [
      3341,
      3347
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3348,
    "end": 3351,
    "range": [
      3348,
      3351
    ]
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 3352,
    "end": 3362,
    "range": [
      3352,
      3362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3363,
    "end": 3364,
    "range": [
      3363,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3453,
    "end": 3456,
    "range": [
      3453,
      3456
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3457,
    "end": 3458,
    "range": [
      3457,
      3458
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3461,
    "end": 3465,
    "range": [
      3461,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3475,
    "end": 3478,
    "range": [
      3475,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3479,
    "end": 3480,
    "range": [
      3479,
      3480
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3482,
    "end": 3488,
    "range": [
      3482,
      3488
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3489,
    "end": 3507,
    "range": [
      3489,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3517,
    "end": 3520,
    "range": [
      3517,
      3520
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3525,
    "end": 3543,
    "range": [
      3525,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3543,
    "end": 3544,
    "range": [
      3543,
      3544
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3555,
    "end": 3567,
    "range": [
      3555,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3577,
    "end": 3583,
    "range": [
      3577,
      3583
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3584,
    "end": 3588,
    "range": [
      3584,
      3588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589,
    "range": [
      3588,
      3589
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3600,
    "end": 3606,
    "range": [
      3600,
      3606
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3607,
    "end": 3610,
    "range": [
      3607,
      3610
    ]
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 3611,
    "end": 3621,
    "range": [
      3611,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3625,
    "end": 3631,
    "range": [
      3625,
      3631
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3632,
    "end": 3650,
    "range": [
      3632,
      3650
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3652,
    "end": 3653,
    "range": [
      3652,
      3653
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3740,
    "end": 3743,
    "range": [
      3740,
      3743
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3744,
    "end": 3745,
    "range": [
      3744,
      3745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3746,
    "end": 3747,
    "range": [
      3746,
      3747
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3748,
    "end": 3752,
    "range": [
      3748,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3762,
    "end": 3765,
    "range": [
      3762,
      3765
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3767,
    "end": 3768,
    "range": [
      3767,
      3768
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3769,
    "end": 3775,
    "range": [
      3769,
      3775
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3776,
    "end": 3794,
    "range": [
      3776,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3804,
    "end": 3807,
    "range": [
      3804,
      3807
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3812,
    "end": 3830,
    "range": [
      3812,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3830,
    "end": 3831,
    "range": [
      3830,
      3831
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3840,
    "end": 3841,
    "range": [
      3840,
      3841
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3842,
    "end": 3854,
    "range": [
      3842,
      3854
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3926,
    "end": 3934,
    "range": [
      3926,
      3934
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3935,
    "end": 3937,
    "range": [
      3935,
      3937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3937,
    "end": 3938,
    "range": [
      3937,
      3938
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3940,
    "end": 3941,
    "range": [
      3940,
      3941
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3942,
    "end": 3946,
    "range": [
      3942,
      3946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3948,
    "end": 3949,
    "range": [
      3948,
      3949
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3954,
    "end": 3957,
    "range": [
      3954,
      3957
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3961,
    "end": 3964,
    "range": [
      3961,
      3964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3971,
    "end": 3972,
    "range": [
      3971,
      3972
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaaaace",
    "start": 3972,
    "end": 3983,
    "range": [
      3972,
      3983
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3984,
    "end": 3985,
    "range": [
      3984,
      3985
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4053,
    "end": 4056,
    "range": [
      4053,
      4056
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4057,
    "end": 4058,
    "range": [
      4057,
      4058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4058,
    "end": 4059,
    "range": [
      4058,
      4059
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4060,
    "end": 4063,
    "range": [
      4060,
      4063
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4063,
    "end": 4064,
    "range": [
      4063,
      4064
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4069,
    "end": 4072,
    "range": [
      4069,
      4072
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4073,
    "end": 4074,
    "range": [
      4073,
      4074
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4075,
    "end": 4076,
    "range": [
      4075,
      4076
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4077,
    "end": 4081,
    "range": [
      4077,
      4081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4081,
    "end": 4082,
    "range": [
      4081,
      4082
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4087,
    "end": 4091,
    "range": [
      4087,
      4091
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4092,
    "end": 4101,
    "range": [
      4092,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4102,
    "end": 4103,
    "range": [
      4102,
      4103
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4104,
    "end": 4105,
    "range": [
      4104,
      4105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4107,
    "end": 4108,
    "range": [
      4107,
      4108
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4175,
    "end": 4178,
    "range": [
      4175,
      4178
    ]
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 4179,
    "end": 4181,
    "range": [
      4179,
      4181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4182,
    "end": 4183,
    "range": [
      4182,
      4183
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4184,
    "end": 4192,
    "range": [
      4184,
      4192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4196,
    "end": 4197,
    "range": [
      4196,
      4197
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4198,
    "end": 4202,
    "range": [
      4198,
      4202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4202,
    "end": 4203,
    "range": [
      4202,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4210,
    "end": 4213,
    "range": [
      4210,
      4213
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4214,
    "end": 4215,
    "range": [
      4214,
      4215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4215,
    "end": 4216,
    "range": [
      4215,
      4216
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4217,
    "end": 4220,
    "range": [
      4217,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaaaace",
    "start": 4228,
    "end": 4239,
    "range": [
      4228,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4240,
    "end": 4241,
    "range": [
      4240,
      4241
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4242,
    "end": 4243,
    "range": [
      4242,
      4243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4308,
    "end": 4311,
    "range": [
      4308,
      4311
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4312,
    "end": 4313,
    "range": [
      4312,
      4313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4315,
    "end": 4318,
    "range": [
      4315,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4324,
    "end": 4327,
    "range": [
      4324,
      4327
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4330,
    "end": 4331,
    "range": [
      4330,
      4331
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4332,
    "end": 4336,
    "range": [
      4332,
      4336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4336,
    "end": 4337,
    "range": [
      4336,
      4337
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4342,
    "end": 4346,
    "range": [
      4342,
      4346
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4346,
    "end": 4347,
    "range": [
      4346,
      4347
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4347,
    "end": 4356,
    "range": [
      4347,
      4356
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4359,
    "end": 4360,
    "range": [
      4359,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4360,
    "end": 4361,
    "range": [
      4360,
      4361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4362,
    "end": 4363,
    "range": [
      4362,
      4363
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4440,
    "end": 4443,
    "range": [
      4440,
      4443
    ]
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 4444,
    "end": 4446,
    "range": [
      4444,
      4446
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4447,
    "end": 4448,
    "range": [
      4447,
      4448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4449,
    "end": 4450,
    "range": [
      4449,
      4450
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4450,
    "end": 4451,
    "range": [
      4450,
      4451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4454,
    "end": 4458,
    "range": [
      4454,
      4458
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4458,
    "end": 4459,
    "range": [
      4458,
      4459
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4460,
    "end": 4462,
    "range": [
      4460,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4463,
    "end": 4464,
    "range": [
      4463,
      4464
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4469,
    "end": 4472,
    "range": [
      4469,
      4472
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4473,
    "end": 4474,
    "range": [
      4473,
      4474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4474,
    "end": 4475,
    "range": [
      4474,
      4475
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4476,
    "end": 4482,
    "range": [
      4476,
      4482
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 4483,
    "end": 4493,
    "range": [
      4483,
      4493
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4493,
    "end": 4494,
    "range": [
      4493,
      4494
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4499,
    "end": 4500,
    "range": [
      4499,
      4500
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaaaace",
    "start": 4501,
    "end": 4512,
    "range": [
      4501,
      4512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4513,
    "end": 4514,
    "range": [
      4513,
      4514
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4515,
    "end": 4516,
    "range": [
      4515,
      4516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4516,
    "end": 4517,
    "range": [
      4516,
      4517
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4596,
    "end": 4599,
    "range": [
      4596,
      4599
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4600,
    "end": 4601,
    "range": [
      4600,
      4601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4601,
    "end": 4602,
    "range": [
      4601,
      4602
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4603,
    "end": 4609,
    "range": [
      4603,
      4609
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 4610,
    "end": 4620,
    "range": [
      4610,
      4620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4626,
    "end": 4629,
    "range": [
      4626,
      4629
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4634,
    "end": 4638,
    "range": [
      4634,
      4638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4638,
    "end": 4639,
    "range": [
      4638,
      4639
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4644,
    "end": 4648,
    "range": [
      4644,
      4648
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4648,
    "end": 4649,
    "range": [
      4648,
      4649
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4649,
    "end": 4658,
    "range": [
      4649,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4664,
    "end": 4665,
    "range": [
      4664,
      4665
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4715,
    "end": 4718,
    "range": [
      4715,
      4718
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4719,
    "end": 4720,
    "range": [
      4719,
      4720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4722,
    "end": 4728,
    "range": [
      4722,
      4728
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 4729,
    "end": 4739,
    "range": [
      4729,
      4739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4739,
    "end": 4740,
    "range": [
      4739,
      4740
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4741,
    "end": 4744,
    "range": [
      4741,
      4744
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4745,
    "end": 4746,
    "range": [
      4745,
      4746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4747,
    "end": 4748,
    "range": [
      4747,
      4748
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4749,
    "end": 4753,
    "range": [
      4749,
      4753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4753,
    "end": 4754,
    "range": [
      4753,
      4754
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4755,
    "end": 4759,
    "range": [
      4755,
      4759
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4759,
    "end": 4760,
    "range": [
      4759,
      4760
    ]
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4760,
    "end": 4769,
    "range": [
      4760,
      4769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4770,
    "end": 4771,
    "range": [
      4770,
      4771
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4772,
    "end": 4773,
    "range": [
      4772,
      4773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4773,
    "end": 4774,
    "range": [
      4773,
      4774
    ]
  }
]
```
