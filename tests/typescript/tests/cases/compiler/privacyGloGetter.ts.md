__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 38
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 59
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
                        "body": [],
                        "start": 62,
                        "end": 73
                      },
                      "expression": false,
                      "start": 59,
                      "end": 73
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 49,
                    "end": 73
                  }
                ],
                "start": 39,
                "end": 79
              },
              "abstract": false,
              "declare": false,
              "start": 23,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 16,
            "end": 79
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 101
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 102,
              "end": 109
            },
            "abstract": false,
            "declare": false,
            "start": 85,
            "end": 109
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 137
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
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 170
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 198,
                                "end": 207
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 194,
                              "end": 209
                            },
                            "start": 187,
                            "end": 210
                          }
                        ],
                        "start": 173,
                        "end": 220
                      },
                      "expression": false,
                      "start": 170,
                      "end": 220
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 148,
                    "end": 220
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 252
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
                          "name": "m1_c3_p1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 267,
                                "end": 276
                              },
                              "typeArguments": null,
                              "start": 267,
                              "end": 276
                            },
                            "start": 265,
                            "end": 276
                          },
                          "start": 253,
                          "end": 276
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 278,
                        "end": 289
                      },
                      "expression": false,
                      "start": 252,
                      "end": 289
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 230,
                    "end": 289
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 321
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 349,
                                "end": 358
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 345,
                              "end": 360
                            },
                            "start": 338,
                            "end": 361
                          }
                        ],
                        "start": 324,
                        "end": 371
                      },
                      "expression": false,
                      "start": 321,
                      "end": 371
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 299,
                    "end": 371
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 403
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
                          "name": "m1_c3_p2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 418,
                                "end": 427
                              },
                              "typeArguments": null,
                              "start": 418,
                              "end": 427
                            },
                            "start": 416,
                            "end": 427
                          },
                          "start": 404,
                          "end": 427
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 429,
                        "end": 440
                      },
                      "expression": false,
                      "start": 403,
                      "end": 440
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 381,
                    "end": 440
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 472
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 500,
                                "end": 510
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 496,
                              "end": 512
                            },
                            "start": 489,
                            "end": 513
                          }
                        ],
                        "start": 475,
                        "end": 523
                      },
                      "expression": false,
                      "start": 472,
                      "end": 523
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 450,
                    "end": 523
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 555
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
                          "name": "m1_c3_p3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 570,
                                "end": 580
                              },
                              "typeArguments": null,
                              "start": 570,
                              "end": 580
                            },
                            "start": 568,
                            "end": 580
                          },
                          "start": 556,
                          "end": 580
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 582,
                        "end": 593
                      },
                      "expression": false,
                      "start": 555,
                      "end": 593
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 533,
                    "end": 593
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 623
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 627,
                            "end": 637
                          },
                          "typeArguments": null,
                          "start": 627,
                          "end": 637
                        },
                        "start": 625,
                        "end": 637
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 672,
                                "end": 682
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 668,
                              "end": 684
                            },
                            "start": 661,
                            "end": 685
                          }
                        ],
                        "start": 638,
                        "end": 703
                      },
                      "expression": false,
                      "start": 623,
                      "end": 703
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 603,
                    "end": 703
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 724,
                      "end": 733
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
                          "name": "m1_c3_p4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 748,
                                "end": 758
                              },
                              "typeArguments": null,
                              "start": 748,
                              "end": 758
                            },
                            "start": 746,
                            "end": 758
                          },
                          "start": 734,
                          "end": 758
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 760,
                        "end": 780
                      },
                      "expression": false,
                      "start": 733,
                      "end": 780
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 713,
                    "end": 780
                  }
                ],
                "start": 138,
                "end": 786
              },
              "abstract": false,
              "declare": false,
              "start": 122,
              "end": 786
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 115,
            "end": 786
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 808
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
                    "name": "p1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 831,
                    "end": 841
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
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 869,
                              "end": 878
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 865,
                            "end": 880
                          },
                          "start": 858,
                          "end": 881
                        }
                      ],
                      "start": 844,
                      "end": 891
                    },
                    "expression": false,
                    "start": 841,
                    "end": 891
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 819,
                  "end": 891
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 923
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
                        "name": "m1_c3_p1_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 938,
                              "end": 947
                            },
                            "typeArguments": null,
                            "start": 938,
                            "end": 947
                          },
                          "start": 936,
                          "end": 947
                        },
                        "start": 924,
                        "end": 947
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 949,
                      "end": 960
                    },
                    "expression": false,
                    "start": 923,
                    "end": 960
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 901,
                  "end": 960
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 992
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
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1020,
                              "end": 1029
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1016,
                            "end": 1031
                          },
                          "start": 1009,
                          "end": 1032
                        }
                      ],
                      "start": 995,
                      "end": 1042
                    },
                    "expression": false,
                    "start": 992,
                    "end": 1042
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 970,
                  "end": 1042
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1064,
                    "end": 1074
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
                        "name": "m1_c3_p2_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1089,
                              "end": 1098
                            },
                            "typeArguments": null,
                            "start": 1089,
                            "end": 1098
                          },
                          "start": 1087,
                          "end": 1098
                        },
                        "start": 1075,
                        "end": 1098
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1100,
                      "end": 1111
                    },
                    "expression": false,
                    "start": 1074,
                    "end": 1111
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1052,
                  "end": 1111
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1133,
                    "end": 1143
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
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1171,
                              "end": 1181
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1167,
                            "end": 1183
                          },
                          "start": 1160,
                          "end": 1184
                        }
                      ],
                      "start": 1146,
                      "end": 1194
                    },
                    "expression": false,
                    "start": 1143,
                    "end": 1194
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1121,
                  "end": 1194
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1216,
                    "end": 1226
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
                        "name": "m1_c3_p3_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1241,
                              "end": 1251
                            },
                            "typeArguments": null,
                            "start": 1241,
                            "end": 1251
                          },
                          "start": 1239,
                          "end": 1251
                        },
                        "start": 1227,
                        "end": 1251
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1253,
                      "end": 1264
                    },
                    "expression": false,
                    "start": 1226,
                    "end": 1264
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1204,
                  "end": 1264
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1285,
                    "end": 1294
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1298,
                          "end": 1308
                        },
                        "typeArguments": null,
                        "start": 1298,
                        "end": 1308
                      },
                      "start": 1296,
                      "end": 1308
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1334,
                              "end": 1344
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1330,
                            "end": 1346
                          },
                          "start": 1323,
                          "end": 1347
                        }
                      ],
                      "start": 1309,
                      "end": 1357
                    },
                    "expression": false,
                    "start": 1294,
                    "end": 1357
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1274,
                  "end": 1357
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1387
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
                        "name": "m1_c3_p4_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1412
                            },
                            "typeArguments": null,
                            "start": 1402,
                            "end": 1412
                          },
                          "start": 1400,
                          "end": 1412
                        },
                        "start": 1388,
                        "end": 1412
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1414,
                      "end": 1425
                    },
                    "expression": false,
                    "start": 1387,
                    "end": 1425
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1367,
                  "end": 1425
                }
              ],
              "start": 809,
              "end": 1431
            },
            "abstract": false,
            "declare": false,
            "start": 792,
            "end": 1431
          }
        ],
        "start": 10,
        "end": 1433
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1433
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1441,
        "end": 1450
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1451,
        "end": 1454
      },
      "abstract": false,
      "declare": false,
      "start": 1435,
      "end": 1454
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1462,
        "end": 1471
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
              "name": "p1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1490,
              "end": 1500
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1524,
                        "end": 1533
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1520,
                      "end": 1535
                    },
                    "start": 1513,
                    "end": 1536
                  }
                ],
                "start": 1503,
                "end": 1542
              },
              "expression": false,
              "start": 1500,
              "end": 1542
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1478,
            "end": 1542
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1570
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
                  "name": "m1_c3_p1_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1585,
                        "end": 1594
                      },
                      "typeArguments": null,
                      "start": 1585,
                      "end": 1594
                    },
                    "start": 1583,
                    "end": 1594
                  },
                  "start": 1571,
                  "end": 1594
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1596,
                "end": 1603
              },
              "expression": false,
              "start": 1570,
              "end": 1603
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1548,
            "end": 1603
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1621,
              "end": 1631
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1655,
                        "end": 1664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1651,
                      "end": 1666
                    },
                    "start": 1644,
                    "end": 1667
                  }
                ],
                "start": 1634,
                "end": 1673
              },
              "expression": false,
              "start": 1631,
              "end": 1673
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1609,
            "end": 1673
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1701
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
                  "name": "m1_c3_p2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1716,
                        "end": 1725
                      },
                      "typeArguments": null,
                      "start": 1716,
                      "end": 1725
                    },
                    "start": 1714,
                    "end": 1725
                  },
                  "start": 1702,
                  "end": 1725
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1727,
                "end": 1734
              },
              "expression": false,
              "start": 1701,
              "end": 1734
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1679,
            "end": 1734
          }
        ],
        "start": 1472,
        "end": 1736
      },
      "abstract": false,
      "declare": false,
      "start": 1456,
      "end": 1736
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1736
}
```
