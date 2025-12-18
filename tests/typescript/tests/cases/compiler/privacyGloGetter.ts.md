__ESTREE_TEST__:AST:
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
        "start": 10,
        "end": 12
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
                "start": 32,
                "end": 41
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
                      "start": 60,
                      "end": 62
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
                        "start": 65,
                        "end": 76
                      },
                      "expression": false,
                      "start": 62,
                      "end": 76
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 52,
                    "end": 76
                  }
                ],
                "start": 42,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 82
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
              "start": 94,
              "end": 104
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 105,
              "end": 112
            },
            "abstract": false,
            "declare": false,
            "start": 88,
            "end": 112
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
                "start": 131,
                "end": 140
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
                      "start": 163,
                      "end": 173
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
                                "start": 201,
                                "end": 210
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 197,
                              "end": 212
                            },
                            "start": 190,
                            "end": 213
                          }
                        ],
                        "start": 176,
                        "end": 223
                      },
                      "expression": false,
                      "start": 173,
                      "end": 223
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 151,
                    "end": 223
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
                      "start": 245,
                      "end": 255
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
                                "start": 270,
                                "end": 279
                              },
                              "typeArguments": null,
                              "start": 270,
                              "end": 279
                            },
                            "start": 268,
                            "end": 279
                          },
                          "start": 256,
                          "end": 279
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 281,
                        "end": 292
                      },
                      "expression": false,
                      "start": 255,
                      "end": 292
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 233,
                    "end": 292
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
                      "start": 314,
                      "end": 324
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
                                "start": 352,
                                "end": 361
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 348,
                              "end": 363
                            },
                            "start": 341,
                            "end": 364
                          }
                        ],
                        "start": 327,
                        "end": 374
                      },
                      "expression": false,
                      "start": 324,
                      "end": 374
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 302,
                    "end": 374
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
                      "start": 396,
                      "end": 406
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
                                "start": 421,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 421,
                              "end": 430
                            },
                            "start": 419,
                            "end": 430
                          },
                          "start": 407,
                          "end": 430
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 432,
                        "end": 443
                      },
                      "expression": false,
                      "start": 406,
                      "end": 443
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 384,
                    "end": 443
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
                      "start": 465,
                      "end": 475
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
                                "start": 503,
                                "end": 513
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 499,
                              "end": 515
                            },
                            "start": 492,
                            "end": 516
                          }
                        ],
                        "start": 478,
                        "end": 526
                      },
                      "expression": false,
                      "start": 475,
                      "end": 526
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 453,
                    "end": 526
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
                      "start": 548,
                      "end": 558
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
                                "start": 573,
                                "end": 583
                              },
                              "typeArguments": null,
                              "start": 573,
                              "end": 583
                            },
                            "start": 571,
                            "end": 583
                          },
                          "start": 559,
                          "end": 583
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 585,
                        "end": 596
                      },
                      "expression": false,
                      "start": 558,
                      "end": 596
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 536,
                    "end": 596
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
                      "start": 617,
                      "end": 626
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
                            "start": 630,
                            "end": 640
                          },
                          "typeArguments": null,
                          "start": 630,
                          "end": 640
                        },
                        "start": 628,
                        "end": 640
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
                                "start": 675,
                                "end": 685
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 671,
                              "end": 687
                            },
                            "start": 664,
                            "end": 688
                          }
                        ],
                        "start": 641,
                        "end": 706
                      },
                      "expression": false,
                      "start": 626,
                      "end": 706
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 606,
                    "end": 706
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
                      "start": 727,
                      "end": 736
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
                                "start": 751,
                                "end": 761
                              },
                              "typeArguments": null,
                              "start": 751,
                              "end": 761
                            },
                            "start": 749,
                            "end": 761
                          },
                          "start": 737,
                          "end": 761
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 763,
                        "end": 783
                      },
                      "expression": false,
                      "start": 736,
                      "end": 783
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 716,
                    "end": 783
                  }
                ],
                "start": 141,
                "end": 789
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 789
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 789
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
              "start": 801,
              "end": 811
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
                    "start": 834,
                    "end": 844
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
                              "start": 872,
                              "end": 881
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 868,
                            "end": 883
                          },
                          "start": 861,
                          "end": 884
                        }
                      ],
                      "start": 847,
                      "end": 894
                    },
                    "expression": false,
                    "start": 844,
                    "end": 894
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 822,
                  "end": 894
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
                    "start": 916,
                    "end": 926
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
                              "start": 941,
                              "end": 950
                            },
                            "typeArguments": null,
                            "start": 941,
                            "end": 950
                          },
                          "start": 939,
                          "end": 950
                        },
                        "start": 927,
                        "end": 950
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 952,
                      "end": 963
                    },
                    "expression": false,
                    "start": 926,
                    "end": 963
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 904,
                  "end": 963
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
                    "start": 985,
                    "end": 995
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
                              "start": 1023,
                              "end": 1032
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1019,
                            "end": 1034
                          },
                          "start": 1012,
                          "end": 1035
                        }
                      ],
                      "start": 998,
                      "end": 1045
                    },
                    "expression": false,
                    "start": 995,
                    "end": 1045
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 973,
                  "end": 1045
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
                    "start": 1067,
                    "end": 1077
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
                              "start": 1092,
                              "end": 1101
                            },
                            "typeArguments": null,
                            "start": 1092,
                            "end": 1101
                          },
                          "start": 1090,
                          "end": 1101
                        },
                        "start": 1078,
                        "end": 1101
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1103,
                      "end": 1114
                    },
                    "expression": false,
                    "start": 1077,
                    "end": 1114
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1055,
                  "end": 1114
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
                    "start": 1136,
                    "end": 1146
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
                              "start": 1174,
                              "end": 1184
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1170,
                            "end": 1186
                          },
                          "start": 1163,
                          "end": 1187
                        }
                      ],
                      "start": 1149,
                      "end": 1197
                    },
                    "expression": false,
                    "start": 1146,
                    "end": 1197
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1124,
                  "end": 1197
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
                    "start": 1219,
                    "end": 1229
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
                              "start": 1244,
                              "end": 1254
                            },
                            "typeArguments": null,
                            "start": 1244,
                            "end": 1254
                          },
                          "start": 1242,
                          "end": 1254
                        },
                        "start": 1230,
                        "end": 1254
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1256,
                      "end": 1267
                    },
                    "expression": false,
                    "start": 1229,
                    "end": 1267
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1207,
                  "end": 1267
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
                    "start": 1288,
                    "end": 1297
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
                          "start": 1301,
                          "end": 1311
                        },
                        "typeArguments": null,
                        "start": 1301,
                        "end": 1311
                      },
                      "start": 1299,
                      "end": 1311
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
                              "start": 1337,
                              "end": 1347
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1333,
                            "end": 1349
                          },
                          "start": 1326,
                          "end": 1350
                        }
                      ],
                      "start": 1312,
                      "end": 1360
                    },
                    "expression": false,
                    "start": 1297,
                    "end": 1360
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1277,
                  "end": 1360
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
                    "start": 1381,
                    "end": 1390
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
                              "start": 1405,
                              "end": 1415
                            },
                            "typeArguments": null,
                            "start": 1405,
                            "end": 1415
                          },
                          "start": 1403,
                          "end": 1415
                        },
                        "start": 1391,
                        "end": 1415
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1417,
                      "end": 1428
                    },
                    "expression": false,
                    "start": 1390,
                    "end": 1428
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1370,
                  "end": 1428
                }
              ],
              "start": 812,
              "end": 1434
            },
            "abstract": false,
            "declare": false,
            "start": 795,
            "end": 1434
          }
        ],
        "start": 13,
        "end": 1436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1436
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
        "start": 1444,
        "end": 1453
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1454,
        "end": 1457
      },
      "abstract": false,
      "declare": false,
      "start": 1438,
      "end": 1457
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
        "start": 1465,
        "end": 1474
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
              "start": 1493,
              "end": 1503
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
                        "start": 1527,
                        "end": 1536
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1523,
                      "end": 1538
                    },
                    "start": 1516,
                    "end": 1539
                  }
                ],
                "start": 1506,
                "end": 1545
              },
              "expression": false,
              "start": 1503,
              "end": 1545
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1481,
            "end": 1545
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
              "start": 1563,
              "end": 1573
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
                        "start": 1588,
                        "end": 1597
                      },
                      "typeArguments": null,
                      "start": 1588,
                      "end": 1597
                    },
                    "start": 1586,
                    "end": 1597
                  },
                  "start": 1574,
                  "end": 1597
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1599,
                "end": 1606
              },
              "expression": false,
              "start": 1573,
              "end": 1606
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1551,
            "end": 1606
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
              "start": 1624,
              "end": 1634
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
                        "start": 1658,
                        "end": 1667
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1654,
                      "end": 1669
                    },
                    "start": 1647,
                    "end": 1670
                  }
                ],
                "start": 1637,
                "end": 1676
              },
              "expression": false,
              "start": 1634,
              "end": 1676
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1612,
            "end": 1676
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
              "start": 1694,
              "end": 1704
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
                        "start": 1719,
                        "end": 1728
                      },
                      "typeArguments": null,
                      "start": 1719,
                      "end": 1728
                    },
                    "start": 1717,
                    "end": 1728
                  },
                  "start": 1705,
                  "end": 1728
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1730,
                "end": 1737
              },
              "expression": false,
              "start": 1704,
              "end": 1737
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1682,
            "end": 1737
          }
        ],
        "start": 1475,
        "end": 1739
      },
      "abstract": false,
      "declare": false,
      "start": 1459,
      "end": 1739
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1739
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 10,
    "end": 12,
    "range": [
      10,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31,
    "range": [
      26,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 32,
    "end": 41,
    "range": [
      32,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 60,
    "end": 62,
    "range": [
      60,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 88,
    "end": 93,
    "range": [
      88,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 94,
    "end": 104,
    "range": [
      94,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 131,
    "end": 140,
    "range": [
      131,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 151,
    "end": 158,
    "range": [
      151,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 163,
    "end": 173,
    "range": [
      163,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196,
    "range": [
      190,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 201,
    "end": 210,
    "range": [
      201,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 245,
    "end": 255,
    "range": [
      245,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 256,
    "end": 268,
    "range": [
      256,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 270,
    "end": 279,
    "range": [
      270,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 302,
    "end": 309,
    "range": [
      302,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 314,
    "end": 324,
    "range": [
      314,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 348,
    "end": 351,
    "range": [
      348,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 352,
    "end": 361,
    "range": [
      352,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 384,
    "end": 391,
    "range": [
      384,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 392,
    "end": 395,
    "range": [
      392,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 396,
    "end": 406,
    "range": [
      396,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 407,
    "end": 419,
    "range": [
      407,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 421,
    "end": 430,
    "range": [
      421,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 453,
    "end": 460,
    "range": [
      453,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 465,
    "end": 475,
    "range": [
      465,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 492,
    "end": 498,
    "range": [
      492,
      498
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 503,
    "end": 513,
    "range": [
      503,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 544,
    "end": 547,
    "range": [
      544,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 548,
    "end": 558,
    "range": [
      548,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 559,
    "end": 571,
    "range": [
      559,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 573,
    "end": 583,
    "range": [
      573,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 606,
    "end": 612,
    "range": [
      606,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 613,
    "end": 616,
    "range": [
      613,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 617,
    "end": 626,
    "range": [
      617,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 630,
    "end": 640,
    "range": [
      630,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 664,
    "end": 670,
    "range": [
      664,
      670
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 675,
    "end": 685,
    "range": [
      675,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 716,
    "end": 722,
    "range": [
      716,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 723,
    "end": 726,
    "range": [
      723,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 727,
    "end": 736,
    "range": [
      727,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 737,
    "end": 749,
    "range": [
      737,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 751,
    "end": 761,
    "range": [
      751,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 795,
    "end": 800,
    "range": [
      795,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 801,
    "end": 811,
    "range": [
      801,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 822,
    "end": 829,
    "range": [
      822,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 830,
    "end": 833,
    "range": [
      830,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 834,
    "end": 844,
    "range": [
      834,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 868,
    "end": 871,
    "range": [
      868,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 872,
    "end": 881,
    "range": [
      872,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 904,
    "end": 911,
    "range": [
      904,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 912,
    "end": 915,
    "range": [
      912,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 916,
    "end": 926,
    "range": [
      916,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 927,
    "end": 939,
    "range": [
      927,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 941,
    "end": 950,
    "range": [
      941,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 973,
    "end": 980,
    "range": [
      973,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 981,
    "end": 984,
    "range": [
      981,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 985,
    "end": 995,
    "range": [
      985,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1012,
    "end": 1018,
    "range": [
      1012,
      1018
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1019,
    "end": 1022,
    "range": [
      1019,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1023,
    "end": 1032,
    "range": [
      1023,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1055,
    "end": 1062,
    "range": [
      1055,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1063,
    "end": 1066,
    "range": [
      1063,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1067,
    "end": 1077,
    "range": [
      1067,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 1078,
    "end": 1090,
    "range": [
      1078,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1092,
    "end": 1101,
    "range": [
      1092,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1124,
    "end": 1131,
    "range": [
      1124,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1132,
    "end": 1135,
    "range": [
      1132,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 1136,
    "end": 1146,
    "range": [
      1136,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1163,
    "end": 1169,
    "range": [
      1163,
      1169
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1170,
    "end": 1173,
    "range": [
      1170,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1174,
    "end": 1184,
    "range": [
      1174,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1207,
    "end": 1214,
    "range": [
      1207,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1215,
    "end": 1218,
    "range": [
      1215,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 1219,
    "end": 1229,
    "range": [
      1219,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 1230,
    "end": 1242,
    "range": [
      1230,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1244,
    "end": 1254,
    "range": [
      1244,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1277,
    "end": 1283,
    "range": [
      1277,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1284,
    "end": 1287,
    "range": [
      1284,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 1288,
    "end": 1297,
    "range": [
      1288,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1301,
    "end": 1311,
    "range": [
      1301,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1326,
    "end": 1332,
    "range": [
      1326,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1333,
    "end": 1336,
    "range": [
      1333,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1337,
    "end": 1347,
    "range": [
      1337,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1370,
    "end": 1376,
    "range": [
      1370,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1377,
    "end": 1380,
    "range": [
      1377,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 1381,
    "end": 1390,
    "range": [
      1381,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 1391,
    "end": 1403,
    "range": [
      1391,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1405,
    "end": 1415,
    "range": [
      1405,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1438,
    "end": 1443,
    "range": [
      1438,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1444,
    "end": 1453,
    "range": [
      1444,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1459,
    "end": 1464,
    "range": [
      1459,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 1465,
    "end": 1474,
    "range": [
      1465,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1481,
    "end": 1488,
    "range": [
      1481,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1489,
    "end": 1492,
    "range": [
      1489,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 1493,
    "end": 1503,
    "range": [
      1493,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1516,
    "end": 1522,
    "range": [
      1516,
      1522
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1523,
    "end": 1526,
    "range": [
      1523,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1527,
    "end": 1536,
    "range": [
      1527,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1551,
    "end": 1558,
    "range": [
      1551,
      1558
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1559,
    "end": 1562,
    "range": [
      1559,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 1563,
    "end": 1573,
    "range": [
      1563,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 1574,
    "end": 1586,
    "range": [
      1574,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1588,
    "end": 1597,
    "range": [
      1588,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1612,
    "end": 1619,
    "range": [
      1612,
      1619
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1620,
    "end": 1623,
    "range": [
      1620,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1624,
    "end": 1634,
    "range": [
      1624,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1647,
    "end": 1653,
    "range": [
      1647,
      1653
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1654,
    "end": 1657,
    "range": [
      1654,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1658,
    "end": 1667,
    "range": [
      1658,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1682,
    "end": 1689,
    "range": [
      1682,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1690,
    "end": 1693,
    "range": [
      1690,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1694,
    "end": 1704,
    "range": [
      1694,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 1705,
    "end": 1717,
    "range": [
      1705,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1719,
    "end": 1728,
    "range": [
      1719,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  }
]
```
