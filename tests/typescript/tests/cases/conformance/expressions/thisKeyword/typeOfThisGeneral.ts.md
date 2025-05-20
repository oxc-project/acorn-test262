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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 1860,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 24,
            "end": 47,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "decorators": [],
              "name": "canary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 80,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 71,
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 256,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 256,
              "async": false,
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
                        "definite": false,
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
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 190,
                            "end": 194
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 201,
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 250,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 234,
                      "end": 249,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 245,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 234,
                          "end": 238
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 245,
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 248,
                        "end": 249,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 523,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 523,
              "async": false,
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
                        "definite": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 378,
                                "end": 389,
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null
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
                    "start": 476,
                    "end": 489,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 480,
                        "end": 488,
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 505,
                                "end": 516,
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 355,
                    "end": 359
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 614,
            "end": 703,
            "accessibility": null,
            "computed": false,
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 622,
              "end": 703,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 664,
                                "end": 675,
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 708,
            "end": 807,
            "accessibility": null,
            "computed": false,
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 716,
              "end": 807,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 759,
                                "end": 770,
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null
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
                    "type": "ExpressionStatement",
                    "start": 780,
                    "end": 786,
                    "directive": null,
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
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 795,
                    "end": 801,
                    "directive": null,
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
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 813,
            "end": 971,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 813,
              "end": 821,
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 824,
              "end": 970,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 952,
                                "end": 963,
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1057,
            "end": 1367,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1072,
              "end": 1367,
              "async": false,
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1157,
                    "end": 1172,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1157,
                      "end": 1171,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1157,
                        "end": 1158,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1159,
                        "end": 1171,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1346,
                    "end": 1361,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1346,
                      "end": 1360,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1346,
                        "end": 1347,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1348,
                        "end": 1360,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 1077,
                    "end": 1081
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1373,
            "end": 1613,
            "accessibility": null,
            "computed": false,
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1394,
              "end": 1613,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1571,
                    "end": 1586,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1571,
                      "end": 1585,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1571,
                        "end": 1572,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1573,
                        "end": 1585,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1618,
            "end": 1858,
            "accessibility": null,
            "computed": false,
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 1639,
              "end": 1858,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1837,
                    "end": 1852,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1837,
                      "end": 1851,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1837,
                        "end": 1838,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1839,
                        "end": 1851,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1862,
      "end": 3863,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1893,
        "end": 3863,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1899,
            "end": 1922,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1907,
              "end": 1913,
              "decorators": [],
              "name": "canary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1927,
            "end": 1955,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1934,
              "end": 1946,
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1961,
            "end": 2131,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1972,
              "end": 2131,
              "async": false,
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
                        "definite": false,
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
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2065,
                            "end": 2069
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2070,
                            "end": 2076,
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2109,
                    "end": 2125,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2109,
                      "end": 2124,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2109,
                        "end": 2120,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 2109,
                          "end": 2113
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2114,
                          "end": 2120,
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2123,
                        "end": 2124,
                        "raw": "3",
                        "value": 3
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2215,
            "end": 2424,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2225,
              "end": 2424,
              "async": false,
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
                        "definite": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2271,
                                "end": 2277,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2272,
                                    "end": 2273,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2272,
                                      "end": 2273,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2275,
                                    "end": 2276,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2275,
                                      "end": 2276,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2253,
                                "end": 2271,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
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
                    "start": 2364,
                    "end": 2377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2368,
                        "end": 2376,
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2411,
                                "end": 2417,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2412,
                                    "end": 2413,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2412,
                                      "end": 2413,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2415,
                                    "end": 2416,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2415,
                                      "end": 2416,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2393,
                                "end": 2411,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 2230,
                    "end": 2234
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2515,
            "end": 2617,
            "accessibility": null,
            "computed": false,
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2523,
              "end": 2617,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2583,
                                "end": 2589,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2584,
                                    "end": 2585,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2584,
                                      "end": 2585,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2587,
                                    "end": 2588,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2587,
                                      "end": 2588,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2565,
                                "end": 2583,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2622,
            "end": 2734,
            "accessibility": null,
            "computed": false,
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2630,
              "end": 2734,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2691,
                                "end": 2697,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2692,
                                    "end": 2693,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2692,
                                      "end": 2693,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2695,
                                    "end": 2696,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2695,
                                      "end": 2696,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2673,
                                "end": 2691,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
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
                    "type": "ExpressionStatement",
                    "start": 2707,
                    "end": 2713,
                    "directive": null,
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
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2722,
                    "end": 2728,
                    "directive": null,
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
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2740,
            "end": 2911,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2740,
              "end": 2748,
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 2751,
              "end": 2910,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2897,
                                "end": 2903,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2898,
                                    "end": 2899,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2898,
                                      "end": 2899,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2901,
                                    "end": 2902,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2901,
                                      "end": 2902,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2879,
                                "end": 2897,
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2997,
            "end": 3335,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3012,
              "end": 3335,
              "async": false,
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3111,
                    "end": 3126,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3111,
                      "end": 3125,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3111,
                        "end": 3112,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3113,
                        "end": 3125,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3314,
                    "end": 3329,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3314,
                      "end": 3328,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3314,
                        "end": 3315,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3316,
                        "end": 3328,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 3017,
                    "end": 3021
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3341,
            "end": 3595,
            "accessibility": null,
            "computed": false,
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3362,
              "end": 3595,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3553,
                    "end": 3568,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3553,
                      "end": 3567,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3553,
                        "end": 3554,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3555,
                        "end": 3567,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
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
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3600,
            "end": 3861,
            "accessibility": null,
            "computed": false,
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 3621,
              "end": 3861,
              "async": false,
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3840,
                    "end": 3855,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3840,
                      "end": 3854,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3840,
                        "end": 3841,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3842,
                        "end": 3854,
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1886,
        "end": 1892,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1887,
            "end": 1888,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1887,
              "end": 1888,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1890,
            "end": 1891,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1890,
              "end": 1891,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3926,
      "end": 4108,
      "async": false,
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 3970,
            "end": 3988,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3970,
              "end": 3987,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 3970,
                "end": 3983,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3970,
                  "end": 3971,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3972,
                  "end": 3983,
                  "decorators": [],
                  "name": "spaaaaaaace",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 3986,
                "end": 3987,
                "raw": "4",
                "value": 4
              }
            }
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 4087,
            "end": 4106,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 4087,
              "end": 4105,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 4087,
                "end": 4101,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 4087,
                  "end": 4091
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 4092,
                  "end": 4101,
                  "decorators": [],
                  "name": "spaaaaace",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 4104,
                "end": 4105,
                "raw": "4",
                "value": 4
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3935,
        "end": 3937,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
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
          "optional": false,
          "right": {
            "type": "ThisExpression",
            "start": 3942,
            "end": 3946
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
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
            "async": false,
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
                      "definite": false,
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
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4226,
                  "end": 4244,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4226,
                    "end": 4243,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4226,
                      "end": 4239,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4226,
                        "end": 4227,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4228,
                        "end": 4239,
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4242,
                      "end": 4243,
                      "raw": "4",
                      "value": 4
                    }
                  }
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
                      "definite": false,
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
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4342,
                  "end": 4361,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4342,
                    "end": 4360,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4342,
                      "end": 4356,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4342,
                        "end": 4346
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4347,
                        "end": 4356,
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4359,
                      "end": 4360,
                      "raw": "4",
                      "value": 4
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
                "optional": false,
                "right": {
                  "type": "ThisExpression",
                  "start": 4198,
                  "end": 4202
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "async": false,
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
                      "definite": false,
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
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4499,
                  "end": 4517,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4499,
                    "end": 4516,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4499,
                      "end": 4512,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4499,
                        "end": 4500,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4501,
                        "end": 4512,
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4515,
                      "end": 4516,
                      "raw": "4",
                      "value": 4
                    }
                  }
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
                      "definite": false,
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
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
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
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4644,
                  "end": 4663,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4644,
                    "end": 4662,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4644,
                      "end": 4658,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 4644,
                        "end": 4648
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4649,
                        "end": 4658,
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4661,
                      "end": 4662,
                      "raw": "4",
                      "value": 4
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
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
                "optional": false,
                "right": {
                  "type": "ThisExpression",
                  "start": 4454,
                  "end": 4458
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 4755,
      "end": 4774,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4755,
        "end": 4773,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4755,
          "end": 4769,
          "computed": false,
          "object": {
            "type": "ThisExpression",
            "start": 4755,
            "end": 4759
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4760,
            "end": 4769,
            "decorators": [],
            "name": "spaaaaace",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 4772,
          "end": 4773,
          "raw": "4",
          "value": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
