__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1736,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1433,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 1433,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "name": "C1_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 79,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 73,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 59,
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 59,
                      "end": 73,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 62,
                        "end": 73,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 85,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 101,
              "name": "C2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 102,
              "end": 109,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 786,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 122,
              "end": 786,
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "name": "C3_public",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 786,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 148,
                    "end": 220,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 170,
                      "name": "p1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 170,
                      "end": 220,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 173,
                        "end": 220,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 187,
                            "end": 210,
                            "argument": {
                              "type": "NewExpression",
                              "start": 194,
                              "end": 209,
                              "callee": {
                                "type": "Identifier",
                                "start": 198,
                                "end": 207,
                                "name": "C1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 230,
                    "end": 289,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 252,
                      "name": "p1_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 252,
                      "end": 289,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 253,
                          "end": 276,
                          "name": "m1_c3_p1_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 265,
                            "end": 276,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 267,
                              "end": 276,
                              "typeName": {
                                "type": "Identifier",
                                "start": 267,
                                "end": 276,
                                "name": "C1_public",
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
                        "start": 278,
                        "end": 289,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 299,
                    "end": 371,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 321,
                      "name": "p2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 321,
                      "end": 371,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 324,
                        "end": 371,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 338,
                            "end": 361,
                            "argument": {
                              "type": "NewExpression",
                              "start": 345,
                              "end": 360,
                              "callee": {
                                "type": "Identifier",
                                "start": 349,
                                "end": 358,
                                "name": "C1_public",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 381,
                    "end": 440,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 403,
                      "name": "p2_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 403,
                      "end": 440,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 404,
                          "end": 427,
                          "name": "m1_c3_p2_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 416,
                            "end": 427,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 418,
                              "end": 427,
                              "typeName": {
                                "type": "Identifier",
                                "start": 418,
                                "end": 427,
                                "name": "C1_public",
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
                        "start": 429,
                        "end": 440,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 450,
                    "end": 523,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 472,
                      "name": "p3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 472,
                      "end": 523,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 475,
                        "end": 523,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 489,
                            "end": 513,
                            "argument": {
                              "type": "NewExpression",
                              "start": 496,
                              "end": 512,
                              "callee": {
                                "type": "Identifier",
                                "start": 500,
                                "end": 510,
                                "name": "C2_private",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
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
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 533,
                    "end": 593,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 555,
                      "name": "p3_private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 555,
                      "end": 593,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 556,
                          "end": 580,
                          "name": "m1_c3_p3_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 568,
                            "end": 580,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 570,
                              "end": 580,
                              "typeName": {
                                "type": "Identifier",
                                "start": 570,
                                "end": 580,
                                "name": "C2_private",
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
                        "start": 582,
                        "end": 593,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 603,
                    "end": 703,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 614,
                      "end": 623,
                      "name": "p4_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 623,
                      "end": 703,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 638,
                        "end": 703,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 661,
                            "end": 685,
                            "argument": {
                              "type": "NewExpression",
                              "start": 668,
                              "end": 684,
                              "callee": {
                                "type": "Identifier",
                                "start": 672,
                                "end": 682,
                                "name": "C2_private",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 625,
                        "end": 637,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 627,
                          "end": 637,
                          "typeName": {
                            "type": "Identifier",
                            "start": 627,
                            "end": 637,
                            "name": "C2_private",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 713,
                    "end": 780,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 724,
                      "end": 733,
                      "name": "p4_public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 733,
                      "end": 780,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 734,
                          "end": 758,
                          "name": "m1_c3_p4_arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 746,
                            "end": 758,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 748,
                              "end": 758,
                              "typeName": {
                                "type": "Identifier",
                                "start": 748,
                                "end": 758,
                                "name": "C2_private",
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
                        "start": 760,
                        "end": 780,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 792,
            "end": 1431,
            "id": {
              "type": "Identifier",
              "start": 798,
              "end": 808,
              "name": "C4_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 809,
              "end": 1431,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 819,
                  "end": 891,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 831,
                    "end": 841,
                    "name": "p1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 841,
                    "end": 891,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 844,
                      "end": 891,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 858,
                          "end": 881,
                          "argument": {
                            "type": "NewExpression",
                            "start": 865,
                            "end": 880,
                            "callee": {
                              "type": "Identifier",
                              "start": 869,
                              "end": 878,
                              "name": "C1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 901,
                  "end": 960,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 913,
                    "end": 923,
                    "name": "p1_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 923,
                    "end": 960,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 924,
                        "end": 947,
                        "name": "m1_c3_p1_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 936,
                          "end": 947,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 938,
                            "end": 947,
                            "typeName": {
                              "type": "Identifier",
                              "start": 938,
                              "end": 947,
                              "name": "C1_public",
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
                      "start": 949,
                      "end": 960,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 970,
                  "end": 1042,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 982,
                    "end": 992,
                    "name": "p2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 992,
                    "end": 1042,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 995,
                      "end": 1042,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1009,
                          "end": 1032,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1016,
                            "end": 1031,
                            "callee": {
                              "type": "Identifier",
                              "start": 1020,
                              "end": 1029,
                              "name": "C1_public",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1052,
                  "end": 1111,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1064,
                    "end": 1074,
                    "name": "p2_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1074,
                    "end": 1111,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1075,
                        "end": 1098,
                        "name": "m1_c3_p2_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1087,
                          "end": 1098,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1089,
                            "end": 1098,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1089,
                              "end": 1098,
                              "name": "C1_public",
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
                      "start": 1100,
                      "end": 1111,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1121,
                  "end": 1194,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1133,
                    "end": 1143,
                    "name": "p3_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1143,
                    "end": 1194,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1146,
                      "end": 1194,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1160,
                          "end": 1184,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1167,
                            "end": 1183,
                            "callee": {
                              "type": "Identifier",
                              "start": 1171,
                              "end": 1181,
                              "name": "C2_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
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
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1204,
                  "end": 1264,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1216,
                    "end": 1226,
                    "name": "p3_private",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1226,
                    "end": 1264,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1227,
                        "end": 1251,
                        "name": "m1_c3_p3_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1239,
                          "end": 1251,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1241,
                            "end": 1251,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1241,
                              "end": 1251,
                              "name": "C2_private",
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
                      "start": 1253,
                      "end": 1264,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1274,
                  "end": 1357,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1285,
                    "end": 1294,
                    "name": "p4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1294,
                    "end": 1357,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1309,
                      "end": 1357,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1323,
                          "end": 1347,
                          "argument": {
                            "type": "NewExpression",
                            "start": 1330,
                            "end": 1346,
                            "callee": {
                              "type": "Identifier",
                              "start": 1334,
                              "end": 1344,
                              "name": "C2_private",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1296,
                      "end": 1308,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1298,
                        "end": 1308,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1298,
                          "end": 1308,
                          "name": "C2_private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 1367,
                  "end": 1425,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1378,
                    "end": 1387,
                    "name": "p4_public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1387,
                    "end": 1425,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1388,
                        "end": 1412,
                        "name": "m1_c3_p4_arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1400,
                          "end": 1412,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1402,
                            "end": 1412,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1402,
                              "end": 1412,
                              "name": "C2_private",
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
                      "start": 1414,
                      "end": 1425,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1435,
      "end": 1454,
      "id": {
        "type": "Identifier",
        "start": 1441,
        "end": 1450,
        "name": "C6_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1451,
        "end": 1454,
        "body": []
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
      "start": 1456,
      "end": 1736,
      "id": {
        "type": "Identifier",
        "start": 1462,
        "end": 1471,
        "name": "C7_public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1472,
        "end": 1736,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1478,
            "end": 1542,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1490,
              "end": 1500,
              "name": "p1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1500,
              "end": 1542,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1503,
                "end": 1542,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1513,
                    "end": 1536,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1520,
                      "end": 1535,
                      "callee": {
                        "type": "Identifier",
                        "start": 1524,
                        "end": 1533,
                        "name": "C6_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1548,
            "end": 1603,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1560,
              "end": 1570,
              "name": "p1_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1570,
              "end": 1603,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1594,
                  "name": "m1_c3_p1_arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1583,
                    "end": 1594,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1585,
                      "end": 1594,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1585,
                        "end": 1594,
                        "name": "C6_public",
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
                "start": 1596,
                "end": 1603,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1609,
            "end": 1673,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1621,
              "end": 1631,
              "name": "p2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1631,
              "end": 1673,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1634,
                "end": 1673,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1644,
                    "end": 1667,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1651,
                      "end": 1666,
                      "callee": {
                        "type": "Identifier",
                        "start": 1655,
                        "end": 1664,
                        "name": "C6_public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1679,
            "end": 1734,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1691,
              "end": 1701,
              "name": "p2_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1701,
              "end": 1734,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1702,
                  "end": 1725,
                  "name": "m1_c3_p2_arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1714,
                    "end": 1725,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1716,
                      "end": 1725,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1716,
                        "end": 1725,
                        "name": "C6_public",
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
                "start": 1727,
                "end": 1734,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
