__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4775,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1860,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 17,
        "decorators": [],
        "name": "MyTestClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 1860,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 24,
            "end": 47,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "decorators": [],
              "name": "canary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 80,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 71,
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 73,
                "end": 79
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 256,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 256,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 256,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 182,
                    "end": 202,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 186,
                        "end": 201,
                        "id": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 190,
                          "end": 201,
                          "object": {
                            "type": "ThisExpression",
                            "start": 190,
                            "end": 194
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 201,
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 211,
                    "end": 225,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 215,
                        "end": 224,
                        "id": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 224,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 216,
                            "end": 224,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 218,
                              "end": 224
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
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 250,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 249,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 245,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 245,
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 248,
                        "end": 249,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
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
            "start": 340,
            "end": 523,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 350,
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 523,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 351,
                  "end": 359,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 355,
                    "end": 359
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 361,
                "end": 523,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 371,
                    "end": 390,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 375,
                        "end": 389,
                        "id": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 389,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 376,
                            "end": 389,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 378,
                              "end": 389,
                              "typeName": {
                                "type": "Identifier",
                                "start": 378,
                                "end": 389,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "start": 476,
                    "end": 489,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 480,
                        "end": 488,
                        "id": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 484,
                          "end": 488
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 498,
                    "end": 517,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 502,
                        "end": 516,
                        "id": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 516,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 503,
                            "end": 516,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 505,
                              "end": 516,
                              "typeName": {
                                "type": "Identifier",
                                "start": 505,
                                "end": 516,
                                "decorators": [],
                                "name": "MyTestClass",
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
            "start": 614,
            "end": 703,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 622,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 622,
              "end": 703,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 625,
                "end": 703,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 635,
                    "end": 648,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 639,
                        "end": 647,
                        "id": {
                          "type": "Identifier",
                          "start": 639,
                          "end": 640,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 643,
                          "end": 647
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 657,
                    "end": 676,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 661,
                        "end": 675,
                        "id": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 675,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 662,
                            "end": 675,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 664,
                              "end": 675,
                              "typeName": {
                                "type": "Identifier",
                                "start": 664,
                                "end": 675,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "type": "ReturnStatement",
                    "start": 685,
                    "end": 697,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 692,
                      "end": 696
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
            "start": 708,
            "end": 807,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 716,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 716,
              "end": 807,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 717,
                  "end": 718,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 720,
                "end": 807,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 730,
                    "end": 743,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 734,
                        "end": 742,
                        "id": {
                          "type": "Identifier",
                          "start": 734,
                          "end": 735,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 738,
                          "end": 742
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 752,
                    "end": 771,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 756,
                        "end": 770,
                        "id": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 770,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 757,
                            "end": 770,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 759,
                              "end": 770,
                              "typeName": {
                                "type": "Identifier",
                                "start": 759,
                                "end": 770,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "type": "ExpressionStatement",
                    "start": 780,
                    "end": 786,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 780,
                      "end": 785,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 781,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 795,
                    "end": 801,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 795,
                      "end": 800,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 795,
                        "end": 796,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 799,
                        "end": 800,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
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
            "type": "PropertyDefinition",
            "start": 813,
            "end": 971,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 813,
              "end": 821,
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 824,
              "end": 970,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 830,
                "end": 970,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 923,
                    "end": 936,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 927,
                        "end": 935,
                        "id": {
                          "type": "Identifier",
                          "start": 927,
                          "end": 928,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 931,
                          "end": 935
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 945,
                    "end": 964,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 949,
                        "end": 963,
                        "id": {
                          "type": "Identifier",
                          "start": 949,
                          "end": 963,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 950,
                            "end": 963,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 952,
                              "end": 963,
                              "typeName": {
                                "type": "Identifier",
                                "start": 952,
                                "end": 963,
                                "decorators": [],
                                "name": "MyTestClass",
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
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1057,
            "end": 1367,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1064,
              "end": 1072,
              "decorators": [],
              "name": "staticFn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1072,
              "end": 1367,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 1073,
                  "end": 1081,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1074,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 1077,
                    "end": 1081
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1083,
                "end": 1367,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1093,
                    "end": 1119,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1097,
                        "end": 1118,
                        "id": {
                          "type": "Identifier",
                          "start": 1097,
                          "end": 1118,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1098,
                            "end": 1118,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 1100,
                              "end": 1118,
                              "exprName": {
                                "type": "Identifier",
                                "start": 1107,
                                "end": 1118,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "start": 1128,
                    "end": 1148,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1132,
                        "end": 1147,
                        "id": {
                          "type": "Identifier",
                          "start": 1132,
                          "end": 1133,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1136,
                          "end": 1147,
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1157,
                    "end": 1172,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1157,
                      "end": 1171,
                      "object": {
                        "type": "Identifier",
                        "start": 1157,
                        "end": 1158,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1159,
                        "end": 1171,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1260,
                    "end": 1273,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1264,
                        "end": 1272,
                        "id": {
                          "type": "Identifier",
                          "start": 1264,
                          "end": 1265,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1268,
                          "end": 1272
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1282,
                    "end": 1308,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1286,
                        "end": 1307,
                        "id": {
                          "type": "Identifier",
                          "start": 1286,
                          "end": 1307,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1287,
                            "end": 1307,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 1289,
                              "end": 1307,
                              "exprName": {
                                "type": "Identifier",
                                "start": 1296,
                                "end": 1307,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "start": 1317,
                    "end": 1337,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1321,
                        "end": 1336,
                        "id": {
                          "type": "Identifier",
                          "start": 1321,
                          "end": 1322,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1325,
                          "end": 1336,
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1346,
                    "end": 1361,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1346,
                      "end": 1360,
                      "object": {
                        "type": "Identifier",
                        "start": 1346,
                        "end": 1347,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1348,
                        "end": 1360,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
            "start": 1373,
            "end": 1613,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1384,
              "end": 1394,
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1394,
              "end": 1613,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1397,
                "end": 1613,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1485,
                    "end": 1498,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1489,
                        "end": 1497,
                        "id": {
                          "type": "Identifier",
                          "start": 1489,
                          "end": 1490,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1493,
                          "end": 1497
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1507,
                    "end": 1533,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1511,
                        "end": 1532,
                        "id": {
                          "type": "Identifier",
                          "start": 1511,
                          "end": 1532,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1512,
                            "end": 1532,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 1514,
                              "end": 1532,
                              "exprName": {
                                "type": "Identifier",
                                "start": 1521,
                                "end": 1532,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "start": 1542,
                    "end": 1562,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1546,
                        "end": 1561,
                        "id": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1547,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1550,
                          "end": 1561,
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1571,
                    "end": 1586,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1571,
                      "end": 1585,
                      "object": {
                        "type": "Identifier",
                        "start": 1571,
                        "end": 1572,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1573,
                        "end": 1585,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1595,
                    "end": 1607,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 1602,
                      "end": 1606
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
            "start": 1618,
            "end": 1858,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1629,
              "end": 1639,
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1639,
              "end": 1858,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1661,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1641,
                    "end": 1661,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1643,
                      "end": 1661,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1650,
                        "end": 1661,
                        "decorators": [],
                        "name": "MyTestClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1663,
                "end": 1858,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1751,
                    "end": 1764,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1755,
                        "end": 1763,
                        "id": {
                          "type": "Identifier",
                          "start": 1755,
                          "end": 1756,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1759,
                          "end": 1763
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1773,
                    "end": 1799,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1777,
                        "end": 1798,
                        "id": {
                          "type": "Identifier",
                          "start": 1777,
                          "end": 1798,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1778,
                            "end": 1798,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 1780,
                              "end": 1798,
                              "exprName": {
                                "type": "Identifier",
                                "start": 1787,
                                "end": 1798,
                                "decorators": [],
                                "name": "MyTestClass",
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
                    "start": 1808,
                    "end": 1828,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1812,
                        "end": 1827,
                        "id": {
                          "type": "Identifier",
                          "start": 1812,
                          "end": 1813,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1816,
                          "end": 1827,
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1837,
                    "end": 1852,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1837,
                      "end": 1851,
                      "object": {
                        "type": "Identifier",
                        "start": 1837,
                        "end": 1838,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1839,
                        "end": 1851,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1862,
      "end": 3863,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1868,
        "end": 1886,
        "decorators": [],
        "name": "MyGenericTestClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1886,
        "end": 1892,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1887,
            "end": 1888,
            "name": {
              "type": "Identifier",
              "start": 1887,
              "end": 1888,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1890,
            "end": 1891,
            "name": {
              "type": "Identifier",
              "start": 1890,
              "end": 1891,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1893,
        "end": 3863,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1899,
            "end": 1922,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1907,
              "end": 1913,
              "decorators": [],
              "name": "canary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1913,
              "end": 1921,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1915,
                "end": 1921
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1927,
            "end": 1955,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1934,
              "end": 1946,
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1946,
              "end": 1954,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1948,
                "end": 1954
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1961,
            "end": 2131,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1972,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1972,
              "end": 2131,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1975,
                "end": 2131,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2057,
                    "end": 2077,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2061,
                        "end": 2076,
                        "id": {
                          "type": "Identifier",
                          "start": 2061,
                          "end": 2062,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 2065,
                          "end": 2076,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2065,
                            "end": 2069
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2070,
                            "end": 2076,
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2086,
                    "end": 2100,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2090,
                        "end": 2099,
                        "id": {
                          "type": "Identifier",
                          "start": 2090,
                          "end": 2099,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2091,
                            "end": 2099,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2093,
                              "end": 2099
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
                    "type": "ExpressionStatement",
                    "start": 2109,
                    "end": 2125,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2109,
                      "end": 2124,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2109,
                        "end": 2120,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2109,
                          "end": 2113
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2114,
                          "end": 2120,
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2123,
                        "end": 2124,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
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
            "start": 2215,
            "end": 2424,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2215,
              "end": 2225,
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2225,
              "end": 2424,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 2226,
                  "end": 2234,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 2226,
                    "end": 2227,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 2230,
                    "end": 2234
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2236,
                "end": 2424,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2246,
                    "end": 2278,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2250,
                        "end": 2277,
                        "id": {
                          "type": "Identifier",
                          "start": 2250,
                          "end": 2277,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2251,
                            "end": 2277,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2253,
                              "end": 2277,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2253,
                                "end": 2271,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2271,
                                "end": 2277,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2272,
                                    "end": 2273,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2272,
                                      "end": 2273,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2275,
                                    "end": 2276,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2275,
                                      "end": 2276,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
                    "start": 2364,
                    "end": 2377,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2368,
                        "end": 2376,
                        "id": {
                          "type": "Identifier",
                          "start": 2368,
                          "end": 2369,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2372,
                          "end": 2376
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2386,
                    "end": 2418,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2390,
                        "end": 2417,
                        "id": {
                          "type": "Identifier",
                          "start": 2390,
                          "end": 2417,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2391,
                            "end": 2417,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2393,
                              "end": 2417,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2393,
                                "end": 2411,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2411,
                                "end": 2417,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2412,
                                    "end": 2413,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2412,
                                      "end": 2413,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2415,
                                    "end": 2416,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2415,
                                      "end": 2416,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2515,
            "end": 2617,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2519,
              "end": 2523,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2523,
              "end": 2617,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2526,
                "end": 2617,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2536,
                    "end": 2549,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2540,
                        "end": 2548,
                        "id": {
                          "type": "Identifier",
                          "start": 2540,
                          "end": 2541,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2544,
                          "end": 2548
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2558,
                    "end": 2590,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2562,
                        "end": 2589,
                        "id": {
                          "type": "Identifier",
                          "start": 2562,
                          "end": 2589,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2563,
                            "end": 2589,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2565,
                              "end": 2589,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2565,
                                "end": 2583,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2583,
                                "end": 2589,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2584,
                                    "end": 2585,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2584,
                                      "end": 2585,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2587,
                                    "end": 2588,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2587,
                                      "end": 2588,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
                    "start": 2599,
                    "end": 2611,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 2606,
                      "end": 2610
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
            "start": 2622,
            "end": 2734,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2626,
              "end": 2630,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2630,
              "end": 2734,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2631,
                  "end": 2632,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2634,
                "end": 2734,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2644,
                    "end": 2657,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2648,
                        "end": 2656,
                        "id": {
                          "type": "Identifier",
                          "start": 2648,
                          "end": 2649,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2652,
                          "end": 2656
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2666,
                    "end": 2698,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2670,
                        "end": 2697,
                        "id": {
                          "type": "Identifier",
                          "start": 2670,
                          "end": 2697,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2671,
                            "end": 2697,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2673,
                              "end": 2697,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2673,
                                "end": 2691,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2691,
                                "end": 2697,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2692,
                                    "end": 2693,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2692,
                                      "end": 2693,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2695,
                                    "end": 2696,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2695,
                                      "end": 2696,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
                    "type": "ExpressionStatement",
                    "start": 2707,
                    "end": 2713,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2707,
                      "end": 2712,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2707,
                        "end": 2708,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2711,
                        "end": 2712,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2722,
                    "end": 2728,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2722,
                      "end": 2727,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2722,
                        "end": 2723,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2726,
                        "end": 2727,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
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
            "type": "PropertyDefinition",
            "start": 2740,
            "end": 2911,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2740,
              "end": 2748,
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 2751,
              "end": 2910,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2757,
                "end": 2910,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2850,
                    "end": 2863,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2854,
                        "end": 2862,
                        "id": {
                          "type": "Identifier",
                          "start": 2854,
                          "end": 2855,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2858,
                          "end": 2862
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2872,
                    "end": 2904,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2876,
                        "end": 2903,
                        "id": {
                          "type": "Identifier",
                          "start": 2876,
                          "end": 2903,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2877,
                            "end": 2903,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2879,
                              "end": 2903,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2879,
                                "end": 2897,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2897,
                                "end": 2903,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2898,
                                    "end": 2899,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2898,
                                      "end": 2899,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2901,
                                    "end": 2902,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2901,
                                      "end": 2902,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2997,
            "end": 3335,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3004,
              "end": 3012,
              "decorators": [],
              "name": "staticFn",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3012,
              "end": 3335,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 3013,
                  "end": 3021,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 3013,
                    "end": 3014,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 3017,
                    "end": 3021
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3023,
                "end": 3335,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3033,
                    "end": 3066,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3037,
                        "end": 3065,
                        "id": {
                          "type": "Identifier",
                          "start": 3037,
                          "end": 3065,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3038,
                            "end": 3065,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 3040,
                              "end": 3065,
                              "exprName": {
                                "type": "Identifier",
                                "start": 3047,
                                "end": 3065,
                                "decorators": [],
                                "name": "MyGenericTestClass",
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
                    "start": 3075,
                    "end": 3102,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3079,
                        "end": 3101,
                        "id": {
                          "type": "Identifier",
                          "start": 3079,
                          "end": 3080,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3083,
                          "end": 3101,
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3111,
                    "end": 3126,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3111,
                      "end": 3125,
                      "object": {
                        "type": "Identifier",
                        "start": 3111,
                        "end": 3112,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3113,
                        "end": 3125,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3214,
                    "end": 3227,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3218,
                        "end": 3226,
                        "id": {
                          "type": "Identifier",
                          "start": 3218,
                          "end": 3219,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3222,
                          "end": 3226
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3236,
                    "end": 3269,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3240,
                        "end": 3268,
                        "id": {
                          "type": "Identifier",
                          "start": 3240,
                          "end": 3268,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3241,
                            "end": 3268,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 3243,
                              "end": 3268,
                              "exprName": {
                                "type": "Identifier",
                                "start": 3250,
                                "end": 3268,
                                "decorators": [],
                                "name": "MyGenericTestClass",
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
                    "start": 3278,
                    "end": 3305,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3282,
                        "end": 3304,
                        "id": {
                          "type": "Identifier",
                          "start": 3282,
                          "end": 3283,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3286,
                          "end": 3304,
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3314,
                    "end": 3329,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3314,
                      "end": 3328,
                      "object": {
                        "type": "Identifier",
                        "start": 3314,
                        "end": 3315,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3316,
                        "end": 3328,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
            "start": 3341,
            "end": 3595,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3352,
              "end": 3362,
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3362,
              "end": 3595,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3365,
                "end": 3595,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3453,
                    "end": 3466,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3457,
                        "end": 3465,
                        "id": {
                          "type": "Identifier",
                          "start": 3457,
                          "end": 3458,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3461,
                          "end": 3465
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3475,
                    "end": 3508,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3479,
                        "end": 3507,
                        "id": {
                          "type": "Identifier",
                          "start": 3479,
                          "end": 3507,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3480,
                            "end": 3507,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 3482,
                              "end": 3507,
                              "exprName": {
                                "type": "Identifier",
                                "start": 3489,
                                "end": 3507,
                                "decorators": [],
                                "name": "MyGenericTestClass",
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
                    "start": 3517,
                    "end": 3544,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3521,
                        "end": 3543,
                        "id": {
                          "type": "Identifier",
                          "start": 3521,
                          "end": 3522,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3525,
                          "end": 3543,
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3553,
                    "end": 3568,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3553,
                      "end": 3567,
                      "object": {
                        "type": "Identifier",
                        "start": 3553,
                        "end": 3554,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3555,
                        "end": 3567,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3577,
                    "end": 3589,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 3584,
                      "end": 3588
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
            "start": 3600,
            "end": 3861,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3611,
              "end": 3621,
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3621,
              "end": 3861,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3622,
                  "end": 3650,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3623,
                    "end": 3650,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3625,
                      "end": 3650,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3632,
                        "end": 3650,
                        "decorators": [],
                        "name": "MyGenericTestClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3652,
                "end": 3861,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3740,
                    "end": 3753,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3744,
                        "end": 3752,
                        "id": {
                          "type": "Identifier",
                          "start": 3744,
                          "end": 3745,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3748,
                          "end": 3752
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3762,
                    "end": 3795,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3766,
                        "end": 3794,
                        "id": {
                          "type": "Identifier",
                          "start": 3766,
                          "end": 3794,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3767,
                            "end": 3794,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 3769,
                              "end": 3794,
                              "exprName": {
                                "type": "Identifier",
                                "start": 3776,
                                "end": 3794,
                                "decorators": [],
                                "name": "MyGenericTestClass",
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
                    "start": 3804,
                    "end": 3831,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3808,
                        "end": 3830,
                        "id": {
                          "type": "Identifier",
                          "start": 3808,
                          "end": 3809,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3812,
                          "end": 3830,
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3840,
                    "end": 3855,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3840,
                      "end": 3854,
                      "object": {
                        "type": "Identifier",
                        "start": 3840,
                        "end": 3841,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3842,
                        "end": 3854,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3926,
      "end": 4108,
      "id": {
        "type": "Identifier",
        "start": 3935,
        "end": 3937,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 3938,
          "end": 3946,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 3938,
            "end": 3939,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ThisExpression",
            "start": 3942,
            "end": 3946
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3948,
        "end": 4108,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3954,
            "end": 3965,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3958,
                "end": 3964,
                "id": {
                  "type": "Identifier",
                  "start": 3958,
                  "end": 3964,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3959,
                    "end": 3964,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3961,
                      "end": 3964
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
            "type": "ExpressionStatement",
            "start": 3970,
            "end": 3988,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3970,
              "end": 3987,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 3970,
                "end": 3983,
                "object": {
                  "type": "Identifier",
                  "start": 3970,
                  "end": 3971,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3972,
                  "end": 3983,
                  "decorators": [],
                  "name": "spaaaaaaace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 3986,
                "end": 3987,
                "value": 4,
                "raw": "4"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 4053,
            "end": 4064,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4057,
                "end": 4063,
                "id": {
                  "type": "Identifier",
                  "start": 4057,
                  "end": 4063,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4058,
                    "end": 4063,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4060,
                      "end": 4063
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
            "start": 4069,
            "end": 4082,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4073,
                "end": 4081,
                "id": {
                  "type": "Identifier",
                  "start": 4073,
                  "end": 4074,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 4077,
                  "end": 4081
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 4087,
            "end": 4106,
            "expression": {
              "type": "AssignmentExpression",
              "start": 4087,
              "end": 4105,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 4087,
                "end": 4101,
                "object": {
                  "type": "ThisExpression",
                  "start": 4087,
                  "end": 4091
                },
                "property": {
                  "type": "Identifier",
                  "start": 4092,
                  "end": 4101,
                  "decorators": [],
                  "name": "spaaaaace",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 4104,
                "end": 4105,
                "value": 4,
                "raw": "4"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4175,
      "end": 4363,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4179,
          "end": 4363,
          "id": {
            "type": "Identifier",
            "start": 4179,
            "end": 4181,
            "decorators": [],
            "name": "q1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 4184,
            "end": 4363,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 4194,
                "end": 4202,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 4194,
                  "end": 4195,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4198,
                  "end": 4202
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 4204,
              "end": 4363,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4210,
                  "end": 4221,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4214,
                      "end": 4220,
                      "id": {
                        "type": "Identifier",
                        "start": 4214,
                        "end": 4220,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4215,
                          "end": 4220,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4217,
                            "end": 4220
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
                  "type": "ExpressionStatement",
                  "start": 4226,
                  "end": 4244,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4226,
                    "end": 4243,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4226,
                      "end": 4239,
                      "object": {
                        "type": "Identifier",
                        "start": 4226,
                        "end": 4227,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4228,
                        "end": 4239,
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4242,
                      "end": 4243,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 4308,
                  "end": 4319,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4312,
                      "end": 4318,
                      "id": {
                        "type": "Identifier",
                        "start": 4312,
                        "end": 4318,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4313,
                          "end": 4318,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4315,
                            "end": 4318
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
                  "start": 4324,
                  "end": 4337,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4328,
                      "end": 4336,
                      "id": {
                        "type": "Identifier",
                        "start": 4328,
                        "end": 4329,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4332,
                        "end": 4336
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4342,
                  "end": 4361,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4342,
                    "end": 4360,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4342,
                      "end": 4356,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4342,
                        "end": 4346
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4347,
                        "end": 4356,
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4359,
                      "end": 4360,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4440,
      "end": 4665,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4444,
          "end": 4665,
          "id": {
            "type": "Identifier",
            "start": 4444,
            "end": 4446,
            "decorators": [],
            "name": "q2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4449,
            "end": 4665,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 4450,
                "end": 4458,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 4450,
                  "end": 4451,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4454,
                  "end": 4458
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 4463,
              "end": 4665,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4469,
                  "end": 4494,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4473,
                      "end": 4493,
                      "id": {
                        "type": "Identifier",
                        "start": 4473,
                        "end": 4493,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4474,
                          "end": 4493,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 4476,
                            "end": 4493,
                            "exprName": {
                              "type": "Identifier",
                              "start": 4483,
                              "end": 4493,
                              "decorators": [],
                              "name": "globalThis",
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
                  "type": "ExpressionStatement",
                  "start": 4499,
                  "end": 4517,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4499,
                    "end": 4516,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4499,
                      "end": 4512,
                      "object": {
                        "type": "Identifier",
                        "start": 4499,
                        "end": 4500,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4501,
                        "end": 4512,
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4515,
                      "end": 4516,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 4596,
                  "end": 4621,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4600,
                      "end": 4620,
                      "id": {
                        "type": "Identifier",
                        "start": 4600,
                        "end": 4620,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4601,
                          "end": 4620,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 4603,
                            "end": 4620,
                            "exprName": {
                              "type": "Identifier",
                              "start": 4610,
                              "end": 4620,
                              "decorators": [],
                              "name": "globalThis",
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
                  "start": 4626,
                  "end": 4639,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4630,
                      "end": 4638,
                      "id": {
                        "type": "Identifier",
                        "start": 4630,
                        "end": 4631,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4634,
                        "end": 4638
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4644,
                  "end": 4663,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4644,
                    "end": 4662,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4644,
                      "end": 4658,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4644,
                        "end": 4648
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4649,
                        "end": 4658,
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4661,
                      "end": 4662,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4715,
      "end": 4740,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4719,
          "end": 4739,
          "id": {
            "type": "Identifier",
            "start": 4719,
            "end": 4739,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4720,
              "end": 4739,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 4722,
                "end": 4739,
                "exprName": {
                  "type": "Identifier",
                  "start": 4729,
                  "end": 4739,
                  "decorators": [],
                  "name": "globalThis",
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
      "start": 4741,
      "end": 4754,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4745,
          "end": 4753,
          "id": {
            "type": "Identifier",
            "start": 4745,
            "end": 4746,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ThisExpression",
            "start": 4749,
            "end": 4753
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4755,
      "end": 4774,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4755,
        "end": 4773,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4755,
          "end": 4769,
          "object": {
            "type": "ThisExpression",
            "start": 4755,
            "end": 4759
          },
          "property": {
            "type": "Identifier",
            "start": 4760,
            "end": 4769,
            "decorators": [],
            "name": "spaaaaace",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 4772,
          "end": 4773,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
