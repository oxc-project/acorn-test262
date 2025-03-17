__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4776,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1860,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 17,
        "name": "MyTestClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 1860,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 24,
            "end": 47,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "name": "canary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 80,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 71,
              "name": "staticCanary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 256,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 256,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 182,
                    "end": 202,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 186,
                        "end": 201,
                        "id": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "canary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 211,
                    "end": 225,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 215,
                        "end": 224,
                        "id": {
                          "type": "Identifier",
                          "start": 215,
                          "end": 224,
                          "name": "p",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 216,
                            "end": 224,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 218,
                              "end": 224
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
                          "name": "canary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "start": 340,
            "end": 523,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 350,
              "name": "memberFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 523,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 351,
                  "end": 359,
                  "left": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 352,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 355,
                    "end": 359
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 361,
                "end": 523,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 371,
                    "end": 390,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 375,
                        "end": 389,
                        "id": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 389,
                          "name": "t",
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
                                "name": "MyTestClass",
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
                    "start": 476,
                    "end": 489,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 480,
                        "end": 488,
                        "id": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 484,
                          "end": 488
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 498,
                    "end": 517,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 502,
                        "end": 516,
                        "id": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 516,
                          "name": "p",
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
                                "name": "MyTestClass",
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
            "start": 614,
            "end": 703,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 618,
              "end": 622,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 622,
              "end": 703,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 625,
                "end": 703,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 635,
                    "end": 648,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 639,
                        "end": 647,
                        "id": {
                          "type": "Identifier",
                          "start": 639,
                          "end": 640,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 643,
                          "end": 647
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 657,
                    "end": 676,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 661,
                        "end": 675,
                        "id": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 675,
                          "name": "p",
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
                                "name": "MyTestClass",
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
            "start": 708,
            "end": 807,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 716,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 716,
              "end": 807,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 717,
                  "end": 718,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 720,
                "end": 807,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 730,
                    "end": 743,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 734,
                        "end": 742,
                        "id": {
                          "type": "Identifier",
                          "start": 734,
                          "end": 735,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 738,
                          "end": 742
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 752,
                    "end": 771,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 756,
                        "end": 770,
                        "id": {
                          "type": "Identifier",
                          "start": 756,
                          "end": 770,
                          "name": "p",
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
                                "name": "MyTestClass",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 784,
                        "end": 785,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 799,
                        "end": 800,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
            "type": "PropertyDefinition",
            "start": 813,
            "end": 971,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 813,
              "end": 821,
              "name": "someFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 824,
              "end": 970,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 830,
                "end": 970,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 923,
                    "end": 936,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 927,
                        "end": 935,
                        "id": {
                          "type": "Identifier",
                          "start": 927,
                          "end": 928,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 931,
                          "end": 935
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 945,
                    "end": 964,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 949,
                        "end": 963,
                        "id": {
                          "type": "Identifier",
                          "start": 949,
                          "end": 963,
                          "name": "t",
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
                                "name": "MyTestClass",
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
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1057,
            "end": 1367,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1064,
              "end": 1072,
              "name": "staticFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1072,
              "end": 1367,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 1073,
                  "end": 1081,
                  "left": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1074,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 1077,
                    "end": 1081
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1083,
                "end": 1367,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1093,
                    "end": 1119,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1097,
                        "end": 1118,
                        "id": {
                          "type": "Identifier",
                          "start": 1097,
                          "end": 1118,
                          "name": "t",
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
                                "name": "MyTestClass",
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
                    "start": 1128,
                    "end": 1148,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1132,
                        "end": 1147,
                        "id": {
                          "type": "Identifier",
                          "start": 1132,
                          "end": 1133,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1136,
                          "end": 1147,
                          "name": "MyTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1159,
                        "end": 1171,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1260,
                    "end": 1273,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1264,
                        "end": 1272,
                        "id": {
                          "type": "Identifier",
                          "start": 1264,
                          "end": 1265,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1268,
                          "end": 1272
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1282,
                    "end": 1308,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1286,
                        "end": 1307,
                        "id": {
                          "type": "Identifier",
                          "start": 1286,
                          "end": 1307,
                          "name": "p",
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
                                "name": "MyTestClass",
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
                    "start": 1317,
                    "end": 1337,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1321,
                        "end": 1336,
                        "id": {
                          "type": "Identifier",
                          "start": 1321,
                          "end": 1322,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1325,
                          "end": 1336,
                          "name": "MyTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1348,
                        "end": 1360,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
            "start": 1373,
            "end": 1613,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1384,
              "end": 1394,
              "name": "staticProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1394,
              "end": 1613,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1397,
                "end": 1613,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1485,
                    "end": 1498,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1489,
                        "end": 1497,
                        "id": {
                          "type": "Identifier",
                          "start": 1489,
                          "end": 1490,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1493,
                          "end": 1497
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1507,
                    "end": 1533,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1511,
                        "end": 1532,
                        "id": {
                          "type": "Identifier",
                          "start": 1511,
                          "end": 1532,
                          "name": "p",
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
                                "name": "MyTestClass",
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
                    "start": 1542,
                    "end": 1562,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1546,
                        "end": 1561,
                        "id": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1547,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1550,
                          "end": 1561,
                          "name": "MyTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1573,
                        "end": 1585,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "start": 1618,
            "end": 1858,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1629,
              "end": 1639,
              "name": "staticProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1639,
              "end": 1858,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1640,
                  "end": 1661,
                  "name": "v",
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
                        "name": "MyTestClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1663,
                "end": 1858,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1751,
                    "end": 1764,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1755,
                        "end": 1763,
                        "id": {
                          "type": "Identifier",
                          "start": 1755,
                          "end": 1756,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1759,
                          "end": 1763
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1773,
                    "end": 1799,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1777,
                        "end": 1798,
                        "id": {
                          "type": "Identifier",
                          "start": 1777,
                          "end": 1798,
                          "name": "p",
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
                                "name": "MyTestClass",
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
                    "start": 1808,
                    "end": 1828,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1812,
                        "end": 1827,
                        "id": {
                          "type": "Identifier",
                          "start": 1812,
                          "end": 1813,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1816,
                          "end": 1827,
                          "name": "MyTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1839,
                        "end": 1851,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
      "start": 1862,
      "end": 3863,
      "id": {
        "type": "Identifier",
        "start": 1868,
        "end": 1886,
        "name": "MyGenericTestClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1893,
        "end": 3863,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1899,
            "end": 1922,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1907,
              "end": 1913,
              "name": "canary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 1927,
            "end": 1955,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1934,
              "end": 1946,
              "name": "staticCanary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1961,
            "end": 2131,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1972,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1972,
              "end": 2131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1975,
                "end": 2131,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2057,
                    "end": 2077,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2061,
                        "end": 2076,
                        "id": {
                          "type": "Identifier",
                          "start": 2061,
                          "end": 2062,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                            "name": "canary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2086,
                    "end": 2100,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2090,
                        "end": 2099,
                        "id": {
                          "type": "Identifier",
                          "start": 2090,
                          "end": 2099,
                          "name": "p",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2091,
                            "end": 2099,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2093,
                              "end": 2099
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
                          "name": "canary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "start": 2215,
            "end": 2424,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2215,
              "end": 2225,
              "name": "memberFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2225,
              "end": 2424,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 2226,
                  "end": 2234,
                  "left": {
                    "type": "Identifier",
                    "start": 2226,
                    "end": 2227,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 2230,
                    "end": 2234
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2236,
                "end": 2424,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2246,
                    "end": 2278,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2250,
                        "end": 2277,
                        "id": {
                          "type": "Identifier",
                          "start": 2250,
                          "end": 2277,
                          "name": "t",
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
                                "name": "MyGenericTestClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
                    "start": 2364,
                    "end": 2377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2368,
                        "end": 2376,
                        "id": {
                          "type": "Identifier",
                          "start": 2368,
                          "end": 2369,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2372,
                          "end": 2376
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2386,
                    "end": 2418,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2390,
                        "end": 2417,
                        "id": {
                          "type": "Identifier",
                          "start": 2390,
                          "end": 2417,
                          "name": "p",
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
                                "name": "MyGenericTestClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
            "start": 2515,
            "end": 2617,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2519,
              "end": 2523,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 2523,
              "end": 2617,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2526,
                "end": 2617,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2536,
                    "end": 2549,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2540,
                        "end": 2548,
                        "id": {
                          "type": "Identifier",
                          "start": 2540,
                          "end": 2541,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2544,
                          "end": 2548
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2558,
                    "end": 2590,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2562,
                        "end": 2589,
                        "id": {
                          "type": "Identifier",
                          "start": 2562,
                          "end": 2589,
                          "name": "p",
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
                                "name": "MyGenericTestClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
            "start": 2622,
            "end": 2734,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2626,
              "end": 2630,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 2630,
              "end": 2734,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2631,
                  "end": 2632,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2634,
                "end": 2734,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2644,
                    "end": 2657,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2648,
                        "end": 2656,
                        "id": {
                          "type": "Identifier",
                          "start": 2648,
                          "end": 2649,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2652,
                          "end": 2656
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2666,
                    "end": 2698,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2670,
                        "end": 2697,
                        "id": {
                          "type": "Identifier",
                          "start": 2670,
                          "end": 2697,
                          "name": "p",
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
                                "name": "MyGenericTestClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2711,
                        "end": 2712,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2726,
                        "end": 2727,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
            "type": "PropertyDefinition",
            "start": 2740,
            "end": 2911,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2740,
              "end": 2748,
              "name": "someFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 2751,
              "end": 2910,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2757,
                "end": 2910,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2850,
                    "end": 2863,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2854,
                        "end": 2862,
                        "id": {
                          "type": "Identifier",
                          "start": 2854,
                          "end": 2855,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2858,
                          "end": 2862
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 2872,
                    "end": 2904,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2876,
                        "end": 2903,
                        "id": {
                          "type": "Identifier",
                          "start": 2876,
                          "end": 2903,
                          "name": "t",
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
                                "name": "MyGenericTestClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
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
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2997,
            "end": 3335,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3004,
              "end": 3012,
              "name": "staticFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3012,
              "end": 3335,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 3013,
                  "end": 3021,
                  "left": {
                    "type": "Identifier",
                    "start": 3013,
                    "end": 3014,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 3017,
                    "end": 3021
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3023,
                "end": 3335,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3033,
                    "end": 3066,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3037,
                        "end": 3065,
                        "id": {
                          "type": "Identifier",
                          "start": 3037,
                          "end": 3065,
                          "name": "t",
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
                                "name": "MyGenericTestClass",
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
                    "start": 3075,
                    "end": 3102,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3079,
                        "end": 3101,
                        "id": {
                          "type": "Identifier",
                          "start": 3079,
                          "end": 3080,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3083,
                          "end": 3101,
                          "name": "MyGenericTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3113,
                        "end": 3125,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3214,
                    "end": 3227,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3218,
                        "end": 3226,
                        "id": {
                          "type": "Identifier",
                          "start": 3218,
                          "end": 3219,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3222,
                          "end": 3226
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3236,
                    "end": 3269,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3240,
                        "end": 3268,
                        "id": {
                          "type": "Identifier",
                          "start": 3240,
                          "end": 3268,
                          "name": "p",
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
                                "name": "MyGenericTestClass",
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
                    "start": 3278,
                    "end": 3305,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3282,
                        "end": 3304,
                        "id": {
                          "type": "Identifier",
                          "start": 3282,
                          "end": 3283,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3286,
                          "end": 3304,
                          "name": "MyGenericTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3316,
                        "end": 3328,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
            "start": 3341,
            "end": 3595,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3352,
              "end": 3362,
              "name": "staticProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 3362,
              "end": 3595,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3365,
                "end": 3595,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3453,
                    "end": 3466,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3457,
                        "end": 3465,
                        "id": {
                          "type": "Identifier",
                          "start": 3457,
                          "end": 3458,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3461,
                          "end": 3465
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3475,
                    "end": 3508,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3479,
                        "end": 3507,
                        "id": {
                          "type": "Identifier",
                          "start": 3479,
                          "end": 3507,
                          "name": "p",
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
                                "name": "MyGenericTestClass",
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
                    "start": 3517,
                    "end": 3544,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3521,
                        "end": 3543,
                        "id": {
                          "type": "Identifier",
                          "start": 3521,
                          "end": 3522,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3525,
                          "end": 3543,
                          "name": "MyGenericTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3555,
                        "end": 3567,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "start": 3600,
            "end": 3861,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3611,
              "end": 3621,
              "name": "staticProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 3621,
              "end": 3861,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3622,
                  "end": 3650,
                  "name": "v",
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
                        "name": "MyGenericTestClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 3652,
                "end": 3861,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3740,
                    "end": 3753,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3744,
                        "end": 3752,
                        "id": {
                          "type": "Identifier",
                          "start": 3744,
                          "end": 3745,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3748,
                          "end": 3752
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 3762,
                    "end": 3795,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3766,
                        "end": 3794,
                        "id": {
                          "type": "Identifier",
                          "start": 3766,
                          "end": 3794,
                          "name": "p",
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
                                "name": "MyGenericTestClass",
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
                    "start": 3804,
                    "end": 3831,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3808,
                        "end": 3830,
                        "id": {
                          "type": "Identifier",
                          "start": 3808,
                          "end": 3809,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 3812,
                          "end": 3830,
                          "name": "MyGenericTestClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3842,
                        "end": 3854,
                        "name": "staticCanary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3926,
      "end": 4108,
      "id": {
        "type": "Identifier",
        "start": 3935,
        "end": 3937,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 3938,
          "end": 3946,
          "left": {
            "type": "Identifier",
            "start": 3938,
            "end": 3939,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ThisExpression",
            "start": 3942,
            "end": 3946
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3948,
        "end": 4108,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3954,
            "end": 3965,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3958,
                "end": 3964,
                "id": {
                  "type": "Identifier",
                  "start": 3958,
                  "end": 3964,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3959,
                    "end": 3964,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3961,
                      "end": 3964
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
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3972,
                  "end": 3983,
                  "name": "spaaaaaaace",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4057,
                "end": 4063,
                "id": {
                  "type": "Identifier",
                  "start": 4057,
                  "end": 4063,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4058,
                    "end": 4063,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4060,
                      "end": 4063
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
            "start": 4069,
            "end": 4082,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4073,
                "end": 4081,
                "id": {
                  "type": "Identifier",
                  "start": 4073,
                  "end": 4074,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 4077,
                  "end": 4081
                },
                "definite": false
              }
            ],
            "kind": "var",
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
                  "name": "spaaaaace",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4175,
      "end": 4363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4179,
          "end": 4363,
          "id": {
            "type": "Identifier",
            "start": 4179,
            "end": 4181,
            "name": "q1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 4184,
            "end": 4363,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 4194,
                "end": 4202,
                "left": {
                  "type": "Identifier",
                  "start": 4194,
                  "end": 4195,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4198,
                  "end": 4202
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 4204,
              "end": 4363,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4210,
                  "end": 4221,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4214,
                      "end": 4220,
                      "id": {
                        "type": "Identifier",
                        "start": 4214,
                        "end": 4220,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4215,
                          "end": 4220,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4217,
                            "end": 4220
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
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4228,
                        "end": 4239,
                        "name": "spaaaaaaace",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4312,
                      "end": 4318,
                      "id": {
                        "type": "Identifier",
                        "start": 4312,
                        "end": 4318,
                        "name": "t",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4313,
                          "end": 4318,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4315,
                            "end": 4318
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
                  "start": 4324,
                  "end": 4337,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4328,
                      "end": 4336,
                      "id": {
                        "type": "Identifier",
                        "start": 4328,
                        "end": 4329,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4332,
                        "end": 4336
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
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
                        "name": "spaaaaace",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4440,
      "end": 4665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4444,
          "end": 4665,
          "id": {
            "type": "Identifier",
            "start": 4444,
            "end": 4446,
            "name": "q2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4449,
            "end": 4665,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 4450,
                "end": 4458,
                "left": {
                  "type": "Identifier",
                  "start": 4450,
                  "end": 4451,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4454,
                  "end": 4458
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 4463,
              "end": 4665,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 4469,
                  "end": 4494,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4473,
                      "end": 4493,
                      "id": {
                        "type": "Identifier",
                        "start": 4473,
                        "end": 4493,
                        "name": "s",
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
                              "name": "globalThis",
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
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4501,
                        "end": 4512,
                        "name": "spaaaaaaace",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4600,
                      "end": 4620,
                      "id": {
                        "type": "Identifier",
                        "start": 4600,
                        "end": 4620,
                        "name": "t",
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
                              "name": "globalThis",
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
                  "start": 4626,
                  "end": 4639,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 4630,
                      "end": 4638,
                      "id": {
                        "type": "Identifier",
                        "start": 4630,
                        "end": 4631,
                        "name": "t",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4634,
                        "end": 4638
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
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
                        "name": "spaaaaace",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4715,
      "end": 4740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4719,
          "end": 4739,
          "id": {
            "type": "Identifier",
            "start": 4719,
            "end": 4739,
            "name": "t",
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
                  "name": "globalThis",
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
      "start": 4741,
      "end": 4754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4745,
          "end": 4753,
          "id": {
            "type": "Identifier",
            "start": 4745,
            "end": 4746,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ThisExpression",
            "start": 4749,
            "end": 4753
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "spaaaaace",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
