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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 162
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_c3_c1",
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
                                "start": 174,
                                "end": 183
                              },
                              "typeArguments": null,
                              "start": 174,
                              "end": 183
                            },
                            "start": 172,
                            "end": 183
                          },
                          "start": 164,
                          "end": 183
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 163,
                      "end": 185
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 151,
                    "end": 185
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
                      "start": 194,
                      "end": 205
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_c3_c2",
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
                                "start": 217,
                                "end": 227
                              },
                              "typeArguments": null,
                              "start": 217,
                              "end": 227
                            },
                            "start": 215,
                            "end": 227
                          },
                          "start": 207,
                          "end": 227
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 206,
                      "end": 229
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 194,
                    "end": 229
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
                      "start": 246,
                      "end": 257
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
                          "name": "m1_c3_c1_2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 271,
                              "end": 274
                            },
                            "start": 269,
                            "end": 274
                          },
                          "start": 259,
                          "end": 274
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 276,
                        "end": 287
                      },
                      "expression": false,
                      "start": 258,
                      "end": 287
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 246,
                    "end": 287
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 315
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
                          "name": "m1_c3_f1_arg",
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
                                "start": 330,
                                "end": 339
                              },
                              "typeArguments": null,
                              "start": 330,
                              "end": 339
                            },
                            "start": 328,
                            "end": 339
                          },
                          "start": 316,
                          "end": 339
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 341,
                        "end": 352
                      },
                      "expression": false,
                      "start": 315,
                      "end": 352
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 297,
                    "end": 352
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 378
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
                          "name": "m1_c3_f2_arg",
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
                                "start": 393,
                                "end": 402
                              },
                              "typeArguments": null,
                              "start": 393,
                              "end": 402
                            },
                            "start": 391,
                            "end": 402
                          },
                          "start": 379,
                          "end": 402
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 404,
                        "end": 415
                      },
                      "expression": false,
                      "start": 378,
                      "end": 415
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 362,
                    "end": 415
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 443
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
                          "name": "m1_c3_f3_arg",
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
                                "start": 458,
                                "end": 468
                              },
                              "typeArguments": null,
                              "start": 458,
                              "end": 468
                            },
                            "start": 456,
                            "end": 468
                          },
                          "start": 444,
                          "end": 468
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 470,
                        "end": 481
                      },
                      "expression": false,
                      "start": 443,
                      "end": 481
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 425,
                    "end": 481
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 507
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
                          "name": "m1_c3_f4_arg",
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
                                "start": 522,
                                "end": 532
                              },
                              "typeArguments": null,
                              "start": 522,
                              "end": 532
                            },
                            "start": 520,
                            "end": 532
                          },
                          "start": 508,
                          "end": 532
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 534,
                        "end": 554
                      },
                      "expression": false,
                      "start": 507,
                      "end": 554
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 491,
                    "end": 554
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f5_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 582
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
                                "start": 610,
                                "end": 619
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 606,
                              "end": 621
                            },
                            "start": 599,
                            "end": 622
                          }
                        ],
                        "start": 585,
                        "end": 632
                      },
                      "expression": false,
                      "start": 582,
                      "end": 632
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 564,
                    "end": 632
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f6_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 658
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
                                "start": 686,
                                "end": 695
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 682,
                              "end": 697
                            },
                            "start": 675,
                            "end": 698
                          }
                        ],
                        "start": 661,
                        "end": 708
                      },
                      "expression": false,
                      "start": 658,
                      "end": 708
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 642,
                    "end": 708
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f7_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 726,
                      "end": 736
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
                                "start": 764,
                                "end": 774
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 760,
                              "end": 776
                            },
                            "start": 753,
                            "end": 777
                          }
                        ],
                        "start": 739,
                        "end": 787
                      },
                      "expression": false,
                      "start": 736,
                      "end": 787
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 718,
                    "end": 787
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f8_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 813
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
                                "start": 841,
                                "end": 851
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 837,
                              "end": 853
                            },
                            "start": 830,
                            "end": 854
                          }
                        ],
                        "start": 816,
                        "end": 874
                      },
                      "expression": false,
                      "start": 813,
                      "end": 874
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 797,
                    "end": 874
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f9_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 892,
                      "end": 902
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
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 906,
                            "end": 915
                          },
                          "typeArguments": null,
                          "start": 906,
                          "end": 915
                        },
                        "start": 904,
                        "end": 915
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
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 941,
                                "end": 950
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 937,
                              "end": 952
                            },
                            "start": 930,
                            "end": 953
                          }
                        ],
                        "start": 916,
                        "end": 963
                      },
                      "expression": false,
                      "start": 902,
                      "end": 963
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 884,
                    "end": 963
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f10_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 980,
                      "end": 990
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
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 994,
                            "end": 1003
                          },
                          "typeArguments": null,
                          "start": 994,
                          "end": 1003
                        },
                        "start": 992,
                        "end": 1003
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
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1029,
                                "end": 1038
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1025,
                              "end": 1040
                            },
                            "start": 1018,
                            "end": 1041
                          }
                        ],
                        "start": 1004,
                        "end": 1051
                      },
                      "expression": false,
                      "start": 990,
                      "end": 1051
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 973,
                    "end": 1051
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f11_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1080
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
                            "start": 1084,
                            "end": 1094
                          },
                          "typeArguments": null,
                          "start": 1084,
                          "end": 1094
                        },
                        "start": 1082,
                        "end": 1094
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
                                "start": 1120,
                                "end": 1130
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1116,
                              "end": 1132
                            },
                            "start": 1109,
                            "end": 1133
                          }
                        ],
                        "start": 1095,
                        "end": 1143
                      },
                      "expression": false,
                      "start": 1080,
                      "end": 1143
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1061,
                    "end": 1143
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f12_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1160,
                      "end": 1170
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
                            "start": 1174,
                            "end": 1184
                          },
                          "typeArguments": null,
                          "start": 1174,
                          "end": 1184
                        },
                        "start": 1172,
                        "end": 1184
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
                                "start": 1219,
                                "end": 1229
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1215,
                              "end": 1231
                            },
                            "start": 1208,
                            "end": 1232
                          }
                        ],
                        "start": 1185,
                        "end": 1250
                      },
                      "expression": false,
                      "start": 1170,
                      "end": 1250
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1153,
                    "end": 1250
                  }
                ],
                "start": 141,
                "end": 1256
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 1256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 1256
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
              "start": 1268,
              "end": 1278
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1300
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_c4_c1",
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
                              "start": 1312,
                              "end": 1321
                            },
                            "typeArguments": null,
                            "start": 1312,
                            "end": 1321
                          },
                          "start": 1310,
                          "end": 1321
                        },
                        "start": 1302,
                        "end": 1321
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1301,
                    "end": 1323
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1289,
                  "end": 1323
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
                    "start": 1332,
                    "end": 1343
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_c4_c2",
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
                              "start": 1355,
                              "end": 1365
                            },
                            "typeArguments": null,
                            "start": 1355,
                            "end": 1365
                          },
                          "start": 1353,
                          "end": 1365
                        },
                        "start": 1345,
                        "end": 1365
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1344,
                    "end": 1367
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1332,
                  "end": 1367
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
                    "start": 1376,
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
                        "name": "m1_c4_c1_2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1401,
                            "end": 1404
                          },
                          "start": 1399,
                          "end": 1404
                        },
                        "start": 1389,
                        "end": 1404
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1406,
                      "end": 1417
                    },
                    "expression": false,
                    "start": 1388,
                    "end": 1417
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1376,
                  "end": 1417
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1434,
                    "end": 1444
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
                        "name": "m1_c4_f1_arg",
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
                              "start": 1459,
                              "end": 1468
                            },
                            "typeArguments": null,
                            "start": 1459,
                            "end": 1468
                          },
                          "start": 1457,
                          "end": 1468
                        },
                        "start": 1445,
                        "end": 1468
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1470,
                      "end": 1481
                    },
                    "expression": false,
                    "start": 1444,
                    "end": 1481
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1426,
                  "end": 1481
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1507
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
                        "name": "m1_c4_f2_arg",
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
                              "start": 1522,
                              "end": 1531
                            },
                            "typeArguments": null,
                            "start": 1522,
                            "end": 1531
                          },
                          "start": 1520,
                          "end": 1531
                        },
                        "start": 1508,
                        "end": 1531
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1533,
                      "end": 1544
                    },
                    "expression": false,
                    "start": 1507,
                    "end": 1544
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1491,
                  "end": 1544
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1562,
                    "end": 1572
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
                        "name": "m1_c4_f3_arg",
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
                              "start": 1587,
                              "end": 1597
                            },
                            "typeArguments": null,
                            "start": 1587,
                            "end": 1597
                          },
                          "start": 1585,
                          "end": 1597
                        },
                        "start": 1573,
                        "end": 1597
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1599,
                      "end": 1610
                    },
                    "expression": false,
                    "start": 1572,
                    "end": 1610
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1554,
                  "end": 1610
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1627,
                    "end": 1636
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
                        "name": "m1_c4_f4_arg",
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
                              "start": 1651,
                              "end": 1661
                            },
                            "typeArguments": null,
                            "start": 1651,
                            "end": 1661
                          },
                          "start": 1649,
                          "end": 1661
                        },
                        "start": 1637,
                        "end": 1661
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1663,
                      "end": 1674
                    },
                    "expression": false,
                    "start": 1636,
                    "end": 1674
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1620,
                  "end": 1674
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f5_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1693,
                    "end": 1703
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
                              "start": 1731,
                              "end": 1740
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1727,
                            "end": 1742
                          },
                          "start": 1720,
                          "end": 1743
                        }
                      ],
                      "start": 1706,
                      "end": 1753
                    },
                    "expression": false,
                    "start": 1703,
                    "end": 1753
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1685,
                  "end": 1753
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f6_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1779
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
                              "start": 1807,
                              "end": 1816
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1803,
                            "end": 1818
                          },
                          "start": 1796,
                          "end": 1819
                        }
                      ],
                      "start": 1782,
                      "end": 1829
                    },
                    "expression": false,
                    "start": 1779,
                    "end": 1829
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1763,
                  "end": 1829
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f7_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1847,
                    "end": 1857
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
                              "start": 1885,
                              "end": 1895
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1881,
                            "end": 1897
                          },
                          "start": 1874,
                          "end": 1898
                        }
                      ],
                      "start": 1860,
                      "end": 1908
                    },
                    "expression": false,
                    "start": 1857,
                    "end": 1908
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1839,
                  "end": 1908
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f8_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1925,
                    "end": 1934
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
                              "start": 1962,
                              "end": 1972
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1958,
                            "end": 1974
                          },
                          "start": 1951,
                          "end": 1975
                        }
                      ],
                      "start": 1937,
                      "end": 1985
                    },
                    "expression": false,
                    "start": 1934,
                    "end": 1985
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1918,
                  "end": 1985
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f9_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2004,
                    "end": 2014
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
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2018,
                          "end": 2027
                        },
                        "typeArguments": null,
                        "start": 2018,
                        "end": 2027
                      },
                      "start": 2016,
                      "end": 2027
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
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2053,
                              "end": 2062
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2049,
                            "end": 2064
                          },
                          "start": 2042,
                          "end": 2065
                        }
                      ],
                      "start": 2028,
                      "end": 2075
                    },
                    "expression": false,
                    "start": 2014,
                    "end": 2075
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1996,
                  "end": 2075
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2092,
                    "end": 2102
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
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2106,
                          "end": 2115
                        },
                        "typeArguments": null,
                        "start": 2106,
                        "end": 2115
                      },
                      "start": 2104,
                      "end": 2115
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
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2141,
                              "end": 2150
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2137,
                            "end": 2152
                          },
                          "start": 2130,
                          "end": 2153
                        }
                      ],
                      "start": 2116,
                      "end": 2163
                    },
                    "expression": false,
                    "start": 2102,
                    "end": 2163
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2085,
                  "end": 2163
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2181,
                    "end": 2192
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
                          "start": 2196,
                          "end": 2206
                        },
                        "typeArguments": null,
                        "start": 2196,
                        "end": 2206
                      },
                      "start": 2194,
                      "end": 2206
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
                              "start": 2232,
                              "end": 2242
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2228,
                            "end": 2244
                          },
                          "start": 2221,
                          "end": 2245
                        }
                      ],
                      "start": 2207,
                      "end": 2255
                    },
                    "expression": false,
                    "start": 2192,
                    "end": 2255
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2173,
                  "end": 2255
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2272,
                    "end": 2282
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
                          "start": 2286,
                          "end": 2296
                        },
                        "typeArguments": null,
                        "start": 2286,
                        "end": 2296
                      },
                      "start": 2284,
                      "end": 2296
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
                              "start": 2322,
                              "end": 2332
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2318,
                            "end": 2334
                          },
                          "start": 2311,
                          "end": 2335
                        }
                      ],
                      "start": 2297,
                      "end": 2345
                    },
                    "expression": false,
                    "start": 2282,
                    "end": 2345
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2265,
                  "end": 2345
                }
              ],
              "start": 1279,
              "end": 2351
            },
            "abstract": false,
            "declare": false,
            "start": 1262,
            "end": 2351
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2370,
                "end": 2379
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2401
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
                          "name": "m1_c5_c",
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
                                "start": 2412,
                                "end": 2421
                              },
                              "typeArguments": null,
                              "start": 2412,
                              "end": 2421
                            },
                            "start": 2410,
                            "end": 2421
                          },
                          "start": 2403,
                          "end": 2421
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2423,
                        "end": 2434
                      },
                      "expression": false,
                      "start": 2402,
                      "end": 2434
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2390,
                    "end": 2434
                  }
                ],
                "start": 2380,
                "end": 2440
              },
              "abstract": false,
              "declare": false,
              "start": 2364,
              "end": 2440
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2357,
            "end": 2440
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C6_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2456,
              "end": 2466
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2477,
                    "end": 2488
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
                        "name": "m1_c6_c",
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
                              "start": 2499,
                              "end": 2508
                            },
                            "typeArguments": null,
                            "start": 2499,
                            "end": 2508
                          },
                          "start": 2497,
                          "end": 2508
                        },
                        "start": 2490,
                        "end": 2508
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2510,
                      "end": 2521
                    },
                    "expression": false,
                    "start": 2489,
                    "end": 2521
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2477,
                  "end": 2521
                }
              ],
              "start": 2467,
              "end": 2527
            },
            "abstract": false,
            "declare": false,
            "start": 2450,
            "end": 2527
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2545,
                "end": 2554
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2565,
                      "end": 2576
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
                          "name": "m1_c7_c",
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
                                "start": 2587,
                                "end": 2597
                              },
                              "typeArguments": null,
                              "start": 2587,
                              "end": 2597
                            },
                            "start": 2585,
                            "end": 2597
                          },
                          "start": 2578,
                          "end": 2597
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2599,
                        "end": 2619
                      },
                      "expression": false,
                      "start": 2577,
                      "end": 2619
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2565,
                    "end": 2619
                  }
                ],
                "start": 2555,
                "end": 2625
              },
              "abstract": false,
              "declare": false,
              "start": 2539,
              "end": 2625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2532,
            "end": 2625
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C8_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2641,
              "end": 2651
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2662,
                    "end": 2673
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
                        "name": "m1_c8_c",
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
                              "start": 2684,
                              "end": 2694
                            },
                            "typeArguments": null,
                            "start": 2684,
                            "end": 2694
                          },
                          "start": 2682,
                          "end": 2694
                        },
                        "start": 2675,
                        "end": 2694
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2696,
                      "end": 2707
                    },
                    "expression": false,
                    "start": 2674,
                    "end": 2707
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2662,
                  "end": 2707
                }
              ],
              "start": 2652,
              "end": 2713
            },
            "abstract": false,
            "declare": false,
            "start": 2635,
            "end": 2713
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2728,
              "end": 2737
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_f1_arg",
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
                      "start": 2749,
                      "end": 2758
                    },
                    "typeArguments": null,
                    "start": 2749,
                    "end": 2758
                  },
                  "start": 2747,
                  "end": 2758
                },
                "start": 2738,
                "end": 2758
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2760,
              "end": 2767
            },
            "expression": false,
            "start": 2719,
            "end": 2767
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2789,
                "end": 2798
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_f2_arg",
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
                        "start": 2810,
                        "end": 2819
                      },
                      "typeArguments": null,
                      "start": 2810,
                      "end": 2819
                    },
                    "start": 2808,
                    "end": 2819
                  },
                  "start": 2799,
                  "end": 2819
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2821,
                "end": 2828
              },
              "expression": false,
              "start": 2780,
              "end": 2828
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2773,
            "end": 2828
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2843,
              "end": 2852
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_f3_arg",
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
                      "start": 2864,
                      "end": 2874
                    },
                    "typeArguments": null,
                    "start": 2864,
                    "end": 2874
                  },
                  "start": 2862,
                  "end": 2874
                },
                "start": 2853,
                "end": 2874
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2876,
              "end": 2883
            },
            "expression": false,
            "start": 2834,
            "end": 2883
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2905,
                "end": 2914
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_f4_arg",
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
                        "start": 2926,
                        "end": 2936
                      },
                      "typeArguments": null,
                      "start": 2926,
                      "end": 2936
                    },
                    "start": 2924,
                    "end": 2936
                  },
                  "start": 2915,
                  "end": 2936
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2938,
                "end": 2954
              },
              "expression": false,
              "start": 2896,
              "end": 2954
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2889,
            "end": 2954
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2970,
              "end": 2979
            },
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
                      "start": 3003,
                      "end": 3012
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2999,
                    "end": 3014
                  },
                  "start": 2992,
                  "end": 3015
                }
              ],
              "start": 2982,
              "end": 3021
            },
            "expression": false,
            "start": 2961,
            "end": 3021
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3043,
                "end": 3052
              },
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
                        "start": 3076,
                        "end": 3085
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3072,
                      "end": 3087
                    },
                    "start": 3065,
                    "end": 3088
                  }
                ],
                "start": 3055,
                "end": 3094
              },
              "expression": false,
              "start": 3034,
              "end": 3094
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3027,
            "end": 3094
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f7_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3109,
              "end": 3118
            },
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
                      "start": 3142,
                      "end": 3152
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3138,
                    "end": 3154
                  },
                  "start": 3131,
                  "end": 3155
                }
              ],
              "start": 3121,
              "end": 3161
            },
            "expression": false,
            "start": 3100,
            "end": 3161
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f8_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3183,
                "end": 3192
              },
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
                        "start": 3216,
                        "end": 3226
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3212,
                      "end": 3228
                    },
                    "start": 3205,
                    "end": 3229
                  }
                ],
                "start": 3195,
                "end": 3245
              },
              "expression": false,
              "start": 3174,
              "end": 3245
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3167,
            "end": 3245
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3261,
              "end": 3271
            },
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
                  "name": "C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3275,
                  "end": 3284
                },
                "typeArguments": null,
                "start": 3275,
                "end": 3284
              },
              "start": 3273,
              "end": 3284
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
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3306,
                      "end": 3315
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3302,
                    "end": 3317
                  },
                  "start": 3295,
                  "end": 3318
                }
              ],
              "start": 3285,
              "end": 3324
            },
            "expression": false,
            "start": 3252,
            "end": 3324
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f10_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3346,
                "end": 3356
              },
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
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3360,
                    "end": 3369
                  },
                  "typeArguments": null,
                  "start": 3360,
                  "end": 3369
                },
                "start": 3358,
                "end": 3369
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
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3391,
                        "end": 3400
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3387,
                      "end": 3402
                    },
                    "start": 3380,
                    "end": 3403
                  }
                ],
                "start": 3370,
                "end": 3409
              },
              "expression": false,
              "start": 3337,
              "end": 3409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3330,
            "end": 3409
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3435
            },
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
                  "start": 3439,
                  "end": 3449
                },
                "typeArguments": null,
                "start": 3439,
                "end": 3449
              },
              "start": 3437,
              "end": 3449
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
                      "start": 3471,
                      "end": 3481
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3467,
                    "end": 3483
                  },
                  "start": 3460,
                  "end": 3484
                }
              ],
              "start": 3450,
              "end": 3490
            },
            "expression": false,
            "start": 3415,
            "end": 3490
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f12_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3512,
                "end": 3522
              },
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
                    "start": 3526,
                    "end": 3536
                  },
                  "typeArguments": null,
                  "start": 3526,
                  "end": 3536
                },
                "start": 3524,
                "end": 3536
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
                        "start": 3567,
                        "end": 3577
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3563,
                      "end": 3579
                    },
                    "start": 3556,
                    "end": 3580
                  }
                ],
                "start": 3537,
                "end": 3594
              },
              "expression": false,
              "start": 3503,
              "end": 3594
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3496,
            "end": 3594
          }
        ],
        "start": 13,
        "end": 3596
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3596
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
        "start": 3604,
        "end": 3613
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 3614,
        "end": 3617
      },
      "abstract": false,
      "declare": false,
      "start": 3598,
      "end": 3617
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
        "start": 3625,
        "end": 3634
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3641,
              "end": 3652
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c7_c2",
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
                        "start": 3661,
                        "end": 3670
                      },
                      "typeArguments": null,
                      "start": 3661,
                      "end": 3670
                    },
                    "start": 3659,
                    "end": 3670
                  },
                  "start": 3654,
                  "end": 3670
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3653,
              "end": 3672
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3641,
            "end": 3672
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
              "start": 3677,
              "end": 3688
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
                  "name": "c7_c1_2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3699,
                      "end": 3702
                    },
                    "start": 3697,
                    "end": 3702
                  },
                  "start": 3690,
                  "end": 3702
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3704,
                "end": 3711
              },
              "expression": false,
              "start": 3689,
              "end": 3711
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3677,
            "end": 3711
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3724,
              "end": 3734
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
                  "name": "c7_f1_arg",
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
                        "start": 3746,
                        "end": 3755
                      },
                      "typeArguments": null,
                      "start": 3746,
                      "end": 3755
                    },
                    "start": 3744,
                    "end": 3755
                  },
                  "start": 3735,
                  "end": 3755
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3757,
                "end": 3764
              },
              "expression": false,
              "start": 3734,
              "end": 3764
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3716,
            "end": 3764
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3777,
              "end": 3786
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
                  "name": "c7_f2_arg",
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
                        "start": 3798,
                        "end": 3807
                      },
                      "typeArguments": null,
                      "start": 3798,
                      "end": 3807
                    },
                    "start": 3796,
                    "end": 3807
                  },
                  "start": 3787,
                  "end": 3807
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3809,
                "end": 3816
              },
              "expression": false,
              "start": 3786,
              "end": 3816
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3770,
            "end": 3816
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3830,
              "end": 3840
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
                        "start": 3864,
                        "end": 3873
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3860,
                      "end": 3875
                    },
                    "start": 3853,
                    "end": 3876
                  }
                ],
                "start": 3843,
                "end": 3882
              },
              "expression": false,
              "start": 3840,
              "end": 3882
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3822,
            "end": 3882
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3895,
              "end": 3904
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
                        "start": 3928,
                        "end": 3937
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3924,
                      "end": 3939
                    },
                    "start": 3917,
                    "end": 3940
                  }
                ],
                "start": 3907,
                "end": 3946
              },
              "expression": false,
              "start": 3904,
              "end": 3946
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3888,
            "end": 3946
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3960,
              "end": 3970
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
                    "name": "C6_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3974,
                    "end": 3983
                  },
                  "typeArguments": null,
                  "start": 3974,
                  "end": 3983
                },
                "start": 3972,
                "end": 3983
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
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4005,
                        "end": 4014
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4001,
                      "end": 4016
                    },
                    "start": 3994,
                    "end": 4017
                  }
                ],
                "start": 3984,
                "end": 4023
              },
              "expression": false,
              "start": 3970,
              "end": 4023
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3952,
            "end": 4023
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4036,
              "end": 4046
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
                    "name": "C6_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4050,
                    "end": 4059
                  },
                  "typeArguments": null,
                  "start": 4050,
                  "end": 4059
                },
                "start": 4048,
                "end": 4059
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
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4081,
                        "end": 4090
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4077,
                      "end": 4092
                    },
                    "start": 4070,
                    "end": 4093
                  }
                ],
                "start": 4060,
                "end": 4099
              },
              "expression": false,
              "start": 4046,
              "end": 4099
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4029,
            "end": 4099
          }
        ],
        "start": 3635,
        "end": 4101
      },
      "abstract": false,
      "declare": false,
      "start": 3619,
      "end": 4101
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C9_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4109,
        "end": 4118
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4125,
              "end": 4136
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
                  "name": "c9_c",
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
                        "start": 4144,
                        "end": 4153
                      },
                      "typeArguments": null,
                      "start": 4144,
                      "end": 4153
                    },
                    "start": 4142,
                    "end": 4153
                  },
                  "start": 4138,
                  "end": 4153
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4155,
                "end": 4162
              },
              "expression": false,
              "start": 4137,
              "end": 4162
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4125,
            "end": 4162
          }
        ],
        "start": 4119,
        "end": 4164
      },
      "abstract": false,
      "declare": false,
      "start": 4103,
      "end": 4164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4178,
        "end": 4187
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f4_arg",
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
                "start": 4196,
                "end": 4205
              },
              "typeArguments": null,
              "start": 4196,
              "end": 4205
            },
            "start": 4194,
            "end": 4205
          },
          "start": 4188,
          "end": 4205
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4207,
        "end": 4210
      },
      "expression": false,
      "start": 4169,
      "end": 4210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4232
      },
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
                "start": 4252,
                "end": 4261
              },
              "typeArguments": null,
              "arguments": [],
              "start": 4248,
              "end": 4263
            },
            "start": 4241,
            "end": 4264
          }
        ],
        "start": 4235,
        "end": 4266
      },
      "expression": false,
      "start": 4214,
      "end": 4266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4278,
        "end": 4288
      },
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
            "name": "C6_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 4292,
            "end": 4301
          },
          "typeArguments": null,
          "start": 4292,
          "end": 4301
        },
        "start": 4290,
        "end": 4301
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
                "name": "C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4319,
                "end": 4328
              },
              "typeArguments": null,
              "arguments": [],
              "start": 4315,
              "end": 4330
            },
            "start": 4308,
            "end": 4331
          }
        ],
        "start": 4302,
        "end": 4333
      },
      "expression": false,
      "start": 4269,
      "end": 4333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4333
}
```
