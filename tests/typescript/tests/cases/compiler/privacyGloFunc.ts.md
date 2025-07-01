__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 16
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
                  "start": 36,
                  "end": 45
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
                        "start": 64,
                        "end": 66
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
                          "start": 69,
                          "end": 80
                        },
                        "expression": false,
                        "start": 66,
                        "end": 80
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 56,
                      "end": 80
                    }
                  ],
                  "start": 46,
                  "end": 86
                },
                "abstract": false,
                "declare": false,
                "start": 30,
                "end": 86
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 86
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
                "start": 98,
                "end": 108
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 109,
                "end": 116
              },
              "abstract": false,
              "declare": false,
              "start": 92,
              "end": 116
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
                  "start": 135,
                  "end": 144
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
                        "start": 155,
                        "end": 166
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
                                  "start": 178,
                                  "end": 187
                                },
                                "typeArguments": null,
                                "start": 178,
                                "end": 187
                              },
                              "start": 176,
                              "end": 187
                            },
                            "start": 168,
                            "end": 187
                          }
                        ],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 167,
                        "end": 189
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 155,
                      "end": 189
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
                        "start": 198,
                        "end": 209
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
                                  "start": 221,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "start": 221,
                                "end": 231
                              },
                              "start": 219,
                              "end": 231
                            },
                            "start": 211,
                            "end": 231
                          }
                        ],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 210,
                        "end": 233
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 198,
                      "end": 233
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
                        "start": 250,
                        "end": 261
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
                                "start": 275,
                                "end": 278
                              },
                              "start": 273,
                              "end": 278
                            },
                            "start": 263,
                            "end": 278
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 280,
                          "end": 291
                        },
                        "expression": false,
                        "start": 262,
                        "end": 291
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 250,
                      "end": 291
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
                        "start": 309,
                        "end": 319
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
                                  "start": 334,
                                  "end": 343
                                },
                                "typeArguments": null,
                                "start": 334,
                                "end": 343
                              },
                              "start": 332,
                              "end": 343
                            },
                            "start": 320,
                            "end": 343
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 345,
                          "end": 356
                        },
                        "expression": false,
                        "start": 319,
                        "end": 356
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 301,
                      "end": 356
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
                        "start": 373,
                        "end": 382
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
                                  "start": 397,
                                  "end": 406
                                },
                                "typeArguments": null,
                                "start": 397,
                                "end": 406
                              },
                              "start": 395,
                              "end": 406
                            },
                            "start": 383,
                            "end": 406
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 408,
                          "end": 419
                        },
                        "expression": false,
                        "start": 382,
                        "end": 419
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 366,
                      "end": 419
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
                        "start": 437,
                        "end": 447
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
                                  "start": 462,
                                  "end": 472
                                },
                                "typeArguments": null,
                                "start": 462,
                                "end": 472
                              },
                              "start": 460,
                              "end": 472
                            },
                            "start": 448,
                            "end": 472
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 474,
                          "end": 485
                        },
                        "expression": false,
                        "start": 447,
                        "end": 485
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 429,
                      "end": 485
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
                        "start": 502,
                        "end": 511
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
                                  "start": 526,
                                  "end": 536
                                },
                                "typeArguments": null,
                                "start": 526,
                                "end": 536
                              },
                              "start": 524,
                              "end": 536
                            },
                            "start": 512,
                            "end": 536
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 538,
                          "end": 558
                        },
                        "expression": false,
                        "start": 511,
                        "end": 558
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 495,
                      "end": 558
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
                        "start": 576,
                        "end": 586
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
                                  "start": 614,
                                  "end": 623
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 610,
                                "end": 625
                              },
                              "start": 603,
                              "end": 626
                            }
                          ],
                          "start": 589,
                          "end": 636
                        },
                        "expression": false,
                        "start": 586,
                        "end": 636
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 568,
                      "end": 636
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
                        "start": 653,
                        "end": 662
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
                                  "start": 690,
                                  "end": 699
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 686,
                                "end": 701
                              },
                              "start": 679,
                              "end": 702
                            }
                          ],
                          "start": 665,
                          "end": 712
                        },
                        "expression": false,
                        "start": 662,
                        "end": 712
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 646,
                      "end": 712
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
                        "start": 730,
                        "end": 740
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
                                  "start": 768,
                                  "end": 778
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 764,
                                "end": 780
                              },
                              "start": 757,
                              "end": 781
                            }
                          ],
                          "start": 743,
                          "end": 791
                        },
                        "expression": false,
                        "start": 740,
                        "end": 791
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 722,
                      "end": 791
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
                        "start": 808,
                        "end": 817
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
                                  "start": 845,
                                  "end": 855
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 841,
                                "end": 857
                              },
                              "start": 834,
                              "end": 858
                            }
                          ],
                          "start": 820,
                          "end": 878
                        },
                        "expression": false,
                        "start": 817,
                        "end": 878
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 801,
                      "end": 878
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
                        "start": 896,
                        "end": 906
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
                              "start": 910,
                              "end": 919
                            },
                            "typeArguments": null,
                            "start": 910,
                            "end": 919
                          },
                          "start": 908,
                          "end": 919
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
                                  "start": 945,
                                  "end": 954
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 941,
                                "end": 956
                              },
                              "start": 934,
                              "end": 957
                            }
                          ],
                          "start": 920,
                          "end": 967
                        },
                        "expression": false,
                        "start": 906,
                        "end": 967
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 888,
                      "end": 967
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
                        "start": 984,
                        "end": 994
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
                              "start": 998,
                              "end": 1007
                            },
                            "typeArguments": null,
                            "start": 998,
                            "end": 1007
                          },
                          "start": 996,
                          "end": 1007
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
                                  "start": 1033,
                                  "end": 1042
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1029,
                                "end": 1044
                              },
                              "start": 1022,
                              "end": 1045
                            }
                          ],
                          "start": 1008,
                          "end": 1055
                        },
                        "expression": false,
                        "start": 994,
                        "end": 1055
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 977,
                      "end": 1055
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
                        "start": 1073,
                        "end": 1084
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
                              "start": 1088,
                              "end": 1098
                            },
                            "typeArguments": null,
                            "start": 1088,
                            "end": 1098
                          },
                          "start": 1086,
                          "end": 1098
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
                                  "start": 1124,
                                  "end": 1134
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1120,
                                "end": 1136
                              },
                              "start": 1113,
                              "end": 1137
                            }
                          ],
                          "start": 1099,
                          "end": 1147
                        },
                        "expression": false,
                        "start": 1084,
                        "end": 1147
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 1065,
                      "end": 1147
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
                        "start": 1164,
                        "end": 1174
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
                              "start": 1178,
                              "end": 1188
                            },
                            "typeArguments": null,
                            "start": 1178,
                            "end": 1188
                          },
                          "start": 1176,
                          "end": 1188
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
                                  "start": 1223,
                                  "end": 1233
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1219,
                                "end": 1235
                              },
                              "start": 1212,
                              "end": 1236
                            }
                          ],
                          "start": 1189,
                          "end": 1254
                        },
                        "expression": false,
                        "start": 1174,
                        "end": 1254
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 1157,
                      "end": 1254
                    }
                  ],
                  "start": 145,
                  "end": 1260
                },
                "abstract": false,
                "declare": false,
                "start": 129,
                "end": 1260
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 122,
              "end": 1260
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
                "start": 1272,
                "end": 1282
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
                      "start": 1293,
                      "end": 1304
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
                                "start": 1316,
                                "end": 1325
                              },
                              "typeArguments": null,
                              "start": 1316,
                              "end": 1325
                            },
                            "start": 1314,
                            "end": 1325
                          },
                          "start": 1306,
                          "end": 1325
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1305,
                      "end": 1327
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1293,
                    "end": 1327
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
                      "start": 1336,
                      "end": 1347
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
                                "start": 1359,
                                "end": 1369
                              },
                              "typeArguments": null,
                              "start": 1359,
                              "end": 1369
                            },
                            "start": 1357,
                            "end": 1369
                          },
                          "start": 1349,
                          "end": 1369
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1348,
                      "end": 1371
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1336,
                    "end": 1371
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
                      "start": 1380,
                      "end": 1391
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
                              "start": 1405,
                              "end": 1408
                            },
                            "start": 1403,
                            "end": 1408
                          },
                          "start": 1393,
                          "end": 1408
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1410,
                        "end": 1421
                      },
                      "expression": false,
                      "start": 1392,
                      "end": 1421
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1380,
                    "end": 1421
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
                      "start": 1438,
                      "end": 1448
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
                                "start": 1463,
                                "end": 1472
                              },
                              "typeArguments": null,
                              "start": 1463,
                              "end": 1472
                            },
                            "start": 1461,
                            "end": 1472
                          },
                          "start": 1449,
                          "end": 1472
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1474,
                        "end": 1485
                      },
                      "expression": false,
                      "start": 1448,
                      "end": 1485
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1430,
                    "end": 1485
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
                      "start": 1502,
                      "end": 1511
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
                                "start": 1526,
                                "end": 1535
                              },
                              "typeArguments": null,
                              "start": 1526,
                              "end": 1535
                            },
                            "start": 1524,
                            "end": 1535
                          },
                          "start": 1512,
                          "end": 1535
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1537,
                        "end": 1548
                      },
                      "expression": false,
                      "start": 1511,
                      "end": 1548
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1495,
                    "end": 1548
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
                      "start": 1566,
                      "end": 1576
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
                                "start": 1591,
                                "end": 1601
                              },
                              "typeArguments": null,
                              "start": 1591,
                              "end": 1601
                            },
                            "start": 1589,
                            "end": 1601
                          },
                          "start": 1577,
                          "end": 1601
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1603,
                        "end": 1614
                      },
                      "expression": false,
                      "start": 1576,
                      "end": 1614
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1558,
                    "end": 1614
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
                      "start": 1631,
                      "end": 1640
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
                                "start": 1655,
                                "end": 1665
                              },
                              "typeArguments": null,
                              "start": 1655,
                              "end": 1665
                            },
                            "start": 1653,
                            "end": 1665
                          },
                          "start": 1641,
                          "end": 1665
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1667,
                        "end": 1678
                      },
                      "expression": false,
                      "start": 1640,
                      "end": 1678
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1624,
                    "end": 1678
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
                      "start": 1697,
                      "end": 1707
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
                                "start": 1735,
                                "end": 1744
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1731,
                              "end": 1746
                            },
                            "start": 1724,
                            "end": 1747
                          }
                        ],
                        "start": 1710,
                        "end": 1757
                      },
                      "expression": false,
                      "start": 1707,
                      "end": 1757
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1689,
                    "end": 1757
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
                      "start": 1774,
                      "end": 1783
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
                                "start": 1811,
                                "end": 1820
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1807,
                              "end": 1822
                            },
                            "start": 1800,
                            "end": 1823
                          }
                        ],
                        "start": 1786,
                        "end": 1833
                      },
                      "expression": false,
                      "start": 1783,
                      "end": 1833
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1767,
                    "end": 1833
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
                      "start": 1851,
                      "end": 1861
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
                                "start": 1889,
                                "end": 1899
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1885,
                              "end": 1901
                            },
                            "start": 1878,
                            "end": 1902
                          }
                        ],
                        "start": 1864,
                        "end": 1912
                      },
                      "expression": false,
                      "start": 1861,
                      "end": 1912
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1843,
                    "end": 1912
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
                      "start": 1929,
                      "end": 1938
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
                                "start": 1966,
                                "end": 1976
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1962,
                              "end": 1978
                            },
                            "start": 1955,
                            "end": 1979
                          }
                        ],
                        "start": 1941,
                        "end": 1989
                      },
                      "expression": false,
                      "start": 1938,
                      "end": 1989
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1922,
                    "end": 1989
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
                      "start": 2008,
                      "end": 2018
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
                            "start": 2022,
                            "end": 2031
                          },
                          "typeArguments": null,
                          "start": 2022,
                          "end": 2031
                        },
                        "start": 2020,
                        "end": 2031
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
                                "start": 2057,
                                "end": 2066
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2053,
                              "end": 2068
                            },
                            "start": 2046,
                            "end": 2069
                          }
                        ],
                        "start": 2032,
                        "end": 2079
                      },
                      "expression": false,
                      "start": 2018,
                      "end": 2079
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2000,
                    "end": 2079
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
                      "start": 2096,
                      "end": 2106
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
                            "start": 2110,
                            "end": 2119
                          },
                          "typeArguments": null,
                          "start": 2110,
                          "end": 2119
                        },
                        "start": 2108,
                        "end": 2119
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
                                "start": 2145,
                                "end": 2154
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2141,
                              "end": 2156
                            },
                            "start": 2134,
                            "end": 2157
                          }
                        ],
                        "start": 2120,
                        "end": 2167
                      },
                      "expression": false,
                      "start": 2106,
                      "end": 2167
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2089,
                    "end": 2167
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
                      "start": 2185,
                      "end": 2196
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
                            "start": 2200,
                            "end": 2210
                          },
                          "typeArguments": null,
                          "start": 2200,
                          "end": 2210
                        },
                        "start": 2198,
                        "end": 2210
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
                                "start": 2236,
                                "end": 2246
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2232,
                              "end": 2248
                            },
                            "start": 2225,
                            "end": 2249
                          }
                        ],
                        "start": 2211,
                        "end": 2259
                      },
                      "expression": false,
                      "start": 2196,
                      "end": 2259
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2177,
                    "end": 2259
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
                      "start": 2276,
                      "end": 2286
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
                            "start": 2290,
                            "end": 2300
                          },
                          "typeArguments": null,
                          "start": 2290,
                          "end": 2300
                        },
                        "start": 2288,
                        "end": 2300
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
                                "start": 2326,
                                "end": 2336
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2322,
                              "end": 2338
                            },
                            "start": 2315,
                            "end": 2339
                          }
                        ],
                        "start": 2301,
                        "end": 2349
                      },
                      "expression": false,
                      "start": 2286,
                      "end": 2349
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2269,
                    "end": 2349
                  }
                ],
                "start": 1283,
                "end": 2355
              },
              "abstract": false,
              "declare": false,
              "start": 1266,
              "end": 2355
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
                  "start": 2374,
                  "end": 2383
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
                        "start": 2394,
                        "end": 2405
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
                                  "start": 2416,
                                  "end": 2425
                                },
                                "typeArguments": null,
                                "start": 2416,
                                "end": 2425
                              },
                              "start": 2414,
                              "end": 2425
                            },
                            "start": 2407,
                            "end": 2425
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2427,
                          "end": 2438
                        },
                        "expression": false,
                        "start": 2406,
                        "end": 2438
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2394,
                      "end": 2438
                    }
                  ],
                  "start": 2384,
                  "end": 2444
                },
                "abstract": false,
                "declare": false,
                "start": 2368,
                "end": 2444
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2361,
              "end": 2444
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
                "start": 2460,
                "end": 2470
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
                      "start": 2481,
                      "end": 2492
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
                                "start": 2503,
                                "end": 2512
                              },
                              "typeArguments": null,
                              "start": 2503,
                              "end": 2512
                            },
                            "start": 2501,
                            "end": 2512
                          },
                          "start": 2494,
                          "end": 2512
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2514,
                        "end": 2525
                      },
                      "expression": false,
                      "start": 2493,
                      "end": 2525
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2481,
                    "end": 2525
                  }
                ],
                "start": 2471,
                "end": 2531
              },
              "abstract": false,
              "declare": false,
              "start": 2454,
              "end": 2531
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
                  "start": 2549,
                  "end": 2558
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
                        "start": 2569,
                        "end": 2580
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
                                  "start": 2591,
                                  "end": 2601
                                },
                                "typeArguments": null,
                                "start": 2591,
                                "end": 2601
                              },
                              "start": 2589,
                              "end": 2601
                            },
                            "start": 2582,
                            "end": 2601
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2603,
                          "end": 2623
                        },
                        "expression": false,
                        "start": 2581,
                        "end": 2623
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2569,
                      "end": 2623
                    }
                  ],
                  "start": 2559,
                  "end": 2629
                },
                "abstract": false,
                "declare": false,
                "start": 2543,
                "end": 2629
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2536,
              "end": 2629
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
                "start": 2645,
                "end": 2655
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
                      "start": 2666,
                      "end": 2677
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
                                "start": 2688,
                                "end": 2698
                              },
                              "typeArguments": null,
                              "start": 2688,
                              "end": 2698
                            },
                            "start": 2686,
                            "end": 2698
                          },
                          "start": 2679,
                          "end": 2698
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2700,
                        "end": 2711
                      },
                      "expression": false,
                      "start": 2678,
                      "end": 2711
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2666,
                    "end": 2711
                  }
                ],
                "start": 2656,
                "end": 2717
              },
              "abstract": false,
              "declare": false,
              "start": 2639,
              "end": 2717
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2732,
                "end": 2741
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
                        "start": 2753,
                        "end": 2762
                      },
                      "typeArguments": null,
                      "start": 2753,
                      "end": 2762
                    },
                    "start": 2751,
                    "end": 2762
                  },
                  "start": 2742,
                  "end": 2762
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2764,
                "end": 2771
              },
              "expression": false,
              "start": 2723,
              "end": 2771
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
                  "start": 2793,
                  "end": 2802
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
                          "start": 2814,
                          "end": 2823
                        },
                        "typeArguments": null,
                        "start": 2814,
                        "end": 2823
                      },
                      "start": 2812,
                      "end": 2823
                    },
                    "start": 2803,
                    "end": 2823
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2825,
                  "end": 2832
                },
                "expression": false,
                "start": 2784,
                "end": 2832
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2777,
              "end": 2832
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2847,
                "end": 2856
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
                        "start": 2868,
                        "end": 2878
                      },
                      "typeArguments": null,
                      "start": 2868,
                      "end": 2878
                    },
                    "start": 2866,
                    "end": 2878
                  },
                  "start": 2857,
                  "end": 2878
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2880,
                "end": 2887
              },
              "expression": false,
              "start": 2838,
              "end": 2887
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
                  "start": 2909,
                  "end": 2918
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
                          "start": 2930,
                          "end": 2940
                        },
                        "typeArguments": null,
                        "start": 2930,
                        "end": 2940
                      },
                      "start": 2928,
                      "end": 2940
                    },
                    "start": 2919,
                    "end": 2940
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2942,
                  "end": 2958
                },
                "expression": false,
                "start": 2900,
                "end": 2958
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2893,
              "end": 2958
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2974,
                "end": 2983
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
                        "start": 3007,
                        "end": 3016
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3003,
                      "end": 3018
                    },
                    "start": 2996,
                    "end": 3019
                  }
                ],
                "start": 2986,
                "end": 3025
              },
              "expression": false,
              "start": 2965,
              "end": 3025
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
                  "start": 3047,
                  "end": 3056
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
                          "start": 3080,
                          "end": 3089
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3076,
                        "end": 3091
                      },
                      "start": 3069,
                      "end": 3092
                    }
                  ],
                  "start": 3059,
                  "end": 3098
                },
                "expression": false,
                "start": 3038,
                "end": 3098
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3031,
              "end": 3098
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3113,
                "end": 3122
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
                        "start": 3146,
                        "end": 3156
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3142,
                      "end": 3158
                    },
                    "start": 3135,
                    "end": 3159
                  }
                ],
                "start": 3125,
                "end": 3165
              },
              "expression": false,
              "start": 3104,
              "end": 3165
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
                  "start": 3187,
                  "end": 3196
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
                          "start": 3220,
                          "end": 3230
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3216,
                        "end": 3232
                      },
                      "start": 3209,
                      "end": 3233
                    }
                  ],
                  "start": 3199,
                  "end": 3249
                },
                "expression": false,
                "start": 3178,
                "end": 3249
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3171,
              "end": 3249
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f9_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3265,
                "end": 3275
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
                    "start": 3279,
                    "end": 3288
                  },
                  "typeArguments": null,
                  "start": 3279,
                  "end": 3288
                },
                "start": 3277,
                "end": 3288
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
                        "start": 3310,
                        "end": 3319
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3306,
                      "end": 3321
                    },
                    "start": 3299,
                    "end": 3322
                  }
                ],
                "start": 3289,
                "end": 3328
              },
              "expression": false,
              "start": 3256,
              "end": 3328
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
                  "start": 3350,
                  "end": 3360
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
                      "start": 3364,
                      "end": 3373
                    },
                    "typeArguments": null,
                    "start": 3364,
                    "end": 3373
                  },
                  "start": 3362,
                  "end": 3373
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
                          "start": 3395,
                          "end": 3404
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3391,
                        "end": 3406
                      },
                      "start": 3384,
                      "end": 3407
                    }
                  ],
                  "start": 3374,
                  "end": 3413
                },
                "expression": false,
                "start": 3341,
                "end": 3413
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3334,
              "end": 3413
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f11_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3428,
                "end": 3439
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
                    "start": 3443,
                    "end": 3453
                  },
                  "typeArguments": null,
                  "start": 3443,
                  "end": 3453
                },
                "start": 3441,
                "end": 3453
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
                        "start": 3475,
                        "end": 3485
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3471,
                      "end": 3487
                    },
                    "start": 3464,
                    "end": 3488
                  }
                ],
                "start": 3454,
                "end": 3494
              },
              "expression": false,
              "start": 3419,
              "end": 3494
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
                  "start": 3516,
                  "end": 3526
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
                      "start": 3530,
                      "end": 3540
                    },
                    "typeArguments": null,
                    "start": 3530,
                    "end": 3540
                  },
                  "start": 3528,
                  "end": 3540
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
                          "start": 3571,
                          "end": 3581
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3567,
                        "end": 3583
                      },
                      "start": 3560,
                      "end": 3584
                    }
                  ],
                  "start": 3541,
                  "end": 3598
                },
                "expression": false,
                "start": 3507,
                "end": 3598
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3500,
              "end": 3598
            }
          ],
          "start": 17,
          "end": 3600
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3600
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3600
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3609,
        "end": 3611
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
                "name": "m2_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3631,
                "end": 3643
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
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3662,
                      "end": 3663
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
                        "start": 3666,
                        "end": 3677
                      },
                      "expression": false,
                      "start": 3663,
                      "end": 3677
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 3654,
                    "end": 3677
                  }
                ],
                "start": 3644,
                "end": 3683
              },
              "abstract": false,
              "declare": false,
              "start": 3625,
              "end": 3683
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3618,
            "end": 3683
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3695,
              "end": 3708
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 3709,
              "end": 3716
            },
            "abstract": false,
            "declare": false,
            "start": 3689,
            "end": 3716
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3735,
                "end": 3747
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
                      "start": 3758,
                      "end": 3769
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
                          "name": "m2_c3_c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3781,
                                "end": 3793
                              },
                              "typeArguments": null,
                              "start": 3781,
                              "end": 3793
                            },
                            "start": 3779,
                            "end": 3793
                          },
                          "start": 3771,
                          "end": 3793
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3770,
                      "end": 3795
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3758,
                    "end": 3795
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
                      "start": 3804,
                      "end": 3815
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
                          "name": "m2_c3_c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3827,
                                "end": 3840
                              },
                              "typeArguments": null,
                              "start": 3827,
                              "end": 3840
                            },
                            "start": 3825,
                            "end": 3840
                          },
                          "start": 3817,
                          "end": 3840
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3816,
                      "end": 3842
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3804,
                    "end": 3842
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
                      "start": 3851,
                      "end": 3862
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
                          "name": "m2_c3_c1_2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 3876,
                              "end": 3879
                            },
                            "start": 3874,
                            "end": 3879
                          },
                          "start": 3864,
                          "end": 3879
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3881,
                        "end": 3892
                      },
                      "expression": false,
                      "start": 3863,
                      "end": 3892
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3851,
                    "end": 3892
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
                      "start": 3910,
                      "end": 3920
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
                          "name": "m2_c3_f1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3935,
                                "end": 3947
                              },
                              "typeArguments": null,
                              "start": 3935,
                              "end": 3947
                            },
                            "start": 3933,
                            "end": 3947
                          },
                          "start": 3921,
                          "end": 3947
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3949,
                        "end": 3960
                      },
                      "expression": false,
                      "start": 3920,
                      "end": 3960
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 3902,
                    "end": 3960
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
                      "start": 3977,
                      "end": 3986
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
                          "name": "m2_c3_f2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4001,
                                "end": 4013
                              },
                              "typeArguments": null,
                              "start": 4001,
                              "end": 4013
                            },
                            "start": 3999,
                            "end": 4013
                          },
                          "start": 3987,
                          "end": 4013
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4015,
                        "end": 4026
                      },
                      "expression": false,
                      "start": 3986,
                      "end": 4026
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3970,
                    "end": 4026
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
                      "start": 4044,
                      "end": 4054
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
                          "name": "m2_c3_f3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4069,
                                "end": 4082
                              },
                              "typeArguments": null,
                              "start": 4069,
                              "end": 4082
                            },
                            "start": 4067,
                            "end": 4082
                          },
                          "start": 4055,
                          "end": 4082
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4084,
                        "end": 4095
                      },
                      "expression": false,
                      "start": 4054,
                      "end": 4095
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4036,
                    "end": 4095
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
                      "start": 4112,
                      "end": 4121
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
                          "name": "m2_c3_f4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4136,
                                "end": 4149
                              },
                              "typeArguments": null,
                              "start": 4136,
                              "end": 4149
                            },
                            "start": 4134,
                            "end": 4149
                          },
                          "start": 4122,
                          "end": 4149
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4151,
                        "end": 4162
                      },
                      "expression": false,
                      "start": 4121,
                      "end": 4162
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4105,
                    "end": 4162
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
                      "start": 4180,
                      "end": 4190
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4218,
                                "end": 4230
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4214,
                              "end": 4232
                            },
                            "start": 4207,
                            "end": 4233
                          }
                        ],
                        "start": 4193,
                        "end": 4243
                      },
                      "expression": false,
                      "start": 4190,
                      "end": 4243
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4172,
                    "end": 4243
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
                      "start": 4260,
                      "end": 4269
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4297,
                                "end": 4309
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4293,
                              "end": 4311
                            },
                            "start": 4286,
                            "end": 4312
                          }
                        ],
                        "start": 4272,
                        "end": 4322
                      },
                      "expression": false,
                      "start": 4269,
                      "end": 4322
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4253,
                    "end": 4322
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
                      "start": 4340,
                      "end": 4350
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4378,
                                "end": 4391
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4374,
                              "end": 4393
                            },
                            "start": 4367,
                            "end": 4394
                          }
                        ],
                        "start": 4353,
                        "end": 4404
                      },
                      "expression": false,
                      "start": 4350,
                      "end": 4404
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4332,
                    "end": 4404
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
                      "start": 4421,
                      "end": 4430
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4458,
                                "end": 4471
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4454,
                              "end": 4473
                            },
                            "start": 4447,
                            "end": 4474
                          }
                        ],
                        "start": 4433,
                        "end": 4484
                      },
                      "expression": false,
                      "start": 4430,
                      "end": 4484
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4414,
                    "end": 4484
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
                      "start": 4502,
                      "end": 4512
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
                            "name": "m2_C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4516,
                            "end": 4528
                          },
                          "typeArguments": null,
                          "start": 4516,
                          "end": 4528
                        },
                        "start": 4514,
                        "end": 4528
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4554,
                                "end": 4566
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4550,
                              "end": 4568
                            },
                            "start": 4543,
                            "end": 4569
                          }
                        ],
                        "start": 4529,
                        "end": 4579
                      },
                      "expression": false,
                      "start": 4512,
                      "end": 4579
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4494,
                    "end": 4579
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
                      "start": 4596,
                      "end": 4606
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
                            "name": "m2_C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4610,
                            "end": 4622
                          },
                          "typeArguments": null,
                          "start": 4610,
                          "end": 4622
                        },
                        "start": 4608,
                        "end": 4622
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4648,
                                "end": 4660
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4644,
                              "end": 4662
                            },
                            "start": 4637,
                            "end": 4663
                          }
                        ],
                        "start": 4623,
                        "end": 4673
                      },
                      "expression": false,
                      "start": 4606,
                      "end": 4673
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4589,
                    "end": 4673
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
                      "start": 4691,
                      "end": 4702
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
                            "name": "m2_C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4706,
                            "end": 4719
                          },
                          "typeArguments": null,
                          "start": 4706,
                          "end": 4719
                        },
                        "start": 4704,
                        "end": 4719
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4745,
                                "end": 4758
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4741,
                              "end": 4760
                            },
                            "start": 4734,
                            "end": 4761
                          }
                        ],
                        "start": 4720,
                        "end": 4771
                      },
                      "expression": false,
                      "start": 4702,
                      "end": 4771
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4683,
                    "end": 4771
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
                      "start": 4788,
                      "end": 4798
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
                            "name": "m2_C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4802,
                            "end": 4815
                          },
                          "typeArguments": null,
                          "start": 4802,
                          "end": 4815
                        },
                        "start": 4800,
                        "end": 4815
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4841,
                                "end": 4854
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4837,
                              "end": 4856
                            },
                            "start": 4830,
                            "end": 4857
                          }
                        ],
                        "start": 4816,
                        "end": 4867
                      },
                      "expression": false,
                      "start": 4798,
                      "end": 4867
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4781,
                    "end": 4867
                  }
                ],
                "start": 3748,
                "end": 4873
              },
              "abstract": false,
              "declare": false,
              "start": 3729,
              "end": 4873
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3722,
            "end": 4873
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4885,
              "end": 4898
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
                    "start": 4909,
                    "end": 4920
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
                        "name": "m2_c4_c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4932,
                              "end": 4944
                            },
                            "typeArguments": null,
                            "start": 4932,
                            "end": 4944
                          },
                          "start": 4930,
                          "end": 4944
                        },
                        "start": 4922,
                        "end": 4944
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 4921,
                    "end": 4946
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4909,
                  "end": 4946
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
                    "start": 4955,
                    "end": 4966
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
                        "name": "m2_c4_c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4978,
                              "end": 4991
                            },
                            "typeArguments": null,
                            "start": 4978,
                            "end": 4991
                          },
                          "start": 4976,
                          "end": 4991
                        },
                        "start": 4968,
                        "end": 4991
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 4967,
                    "end": 4993
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4955,
                  "end": 4993
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
                    "start": 5002,
                    "end": 5013
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
                        "name": "m2_c4_c1_2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 5027,
                            "end": 5030
                          },
                          "start": 5025,
                          "end": 5030
                        },
                        "start": 5015,
                        "end": 5030
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5032,
                      "end": 5043
                    },
                    "expression": false,
                    "start": 5014,
                    "end": 5043
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5002,
                  "end": 5043
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
                    "start": 5061,
                    "end": 5071
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
                        "name": "m2_c4_f1_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5086,
                              "end": 5098
                            },
                            "typeArguments": null,
                            "start": 5086,
                            "end": 5098
                          },
                          "start": 5084,
                          "end": 5098
                        },
                        "start": 5072,
                        "end": 5098
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5100,
                      "end": 5111
                    },
                    "expression": false,
                    "start": 5071,
                    "end": 5111
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5053,
                  "end": 5111
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
                    "start": 5128,
                    "end": 5137
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
                        "name": "m2_c4_f2_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5152,
                              "end": 5164
                            },
                            "typeArguments": null,
                            "start": 5152,
                            "end": 5164
                          },
                          "start": 5150,
                          "end": 5164
                        },
                        "start": 5138,
                        "end": 5164
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5166,
                      "end": 5177
                    },
                    "expression": false,
                    "start": 5137,
                    "end": 5177
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5121,
                  "end": 5177
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
                    "start": 5195,
                    "end": 5205
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
                        "name": "m2_c4_f3_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5220,
                              "end": 5233
                            },
                            "typeArguments": null,
                            "start": 5220,
                            "end": 5233
                          },
                          "start": 5218,
                          "end": 5233
                        },
                        "start": 5206,
                        "end": 5233
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5235,
                      "end": 5246
                    },
                    "expression": false,
                    "start": 5205,
                    "end": 5246
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5187,
                  "end": 5246
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
                    "start": 5263,
                    "end": 5272
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
                        "name": "m2_c4_f4_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5287,
                              "end": 5300
                            },
                            "typeArguments": null,
                            "start": 5287,
                            "end": 5300
                          },
                          "start": 5285,
                          "end": 5300
                        },
                        "start": 5273,
                        "end": 5300
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5302,
                      "end": 5313
                    },
                    "expression": false,
                    "start": 5272,
                    "end": 5313
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5256,
                  "end": 5313
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
                    "start": 5332,
                    "end": 5342
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5370,
                              "end": 5382
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5366,
                            "end": 5384
                          },
                          "start": 5359,
                          "end": 5385
                        }
                      ],
                      "start": 5345,
                      "end": 5395
                    },
                    "expression": false,
                    "start": 5342,
                    "end": 5395
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5324,
                  "end": 5395
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
                    "start": 5412,
                    "end": 5421
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5449,
                              "end": 5461
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5445,
                            "end": 5463
                          },
                          "start": 5438,
                          "end": 5464
                        }
                      ],
                      "start": 5424,
                      "end": 5474
                    },
                    "expression": false,
                    "start": 5421,
                    "end": 5474
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5405,
                  "end": 5474
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
                    "start": 5492,
                    "end": 5502
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5530,
                              "end": 5543
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5526,
                            "end": 5545
                          },
                          "start": 5519,
                          "end": 5546
                        }
                      ],
                      "start": 5505,
                      "end": 5556
                    },
                    "expression": false,
                    "start": 5502,
                    "end": 5556
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5484,
                  "end": 5556
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
                    "start": 5573,
                    "end": 5582
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5610,
                              "end": 5623
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5606,
                            "end": 5625
                          },
                          "start": 5599,
                          "end": 5626
                        }
                      ],
                      "start": 5585,
                      "end": 5636
                    },
                    "expression": false,
                    "start": 5582,
                    "end": 5636
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5566,
                  "end": 5636
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
                    "start": 5655,
                    "end": 5665
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
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5669,
                          "end": 5681
                        },
                        "typeArguments": null,
                        "start": 5669,
                        "end": 5681
                      },
                      "start": 5667,
                      "end": 5681
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5707,
                              "end": 5719
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5703,
                            "end": 5721
                          },
                          "start": 5696,
                          "end": 5722
                        }
                      ],
                      "start": 5682,
                      "end": 5732
                    },
                    "expression": false,
                    "start": 5665,
                    "end": 5732
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5647,
                  "end": 5732
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
                    "start": 5749,
                    "end": 5759
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
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5763,
                          "end": 5775
                        },
                        "typeArguments": null,
                        "start": 5763,
                        "end": 5775
                      },
                      "start": 5761,
                      "end": 5775
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5801,
                              "end": 5813
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5797,
                            "end": 5815
                          },
                          "start": 5790,
                          "end": 5816
                        }
                      ],
                      "start": 5776,
                      "end": 5826
                    },
                    "expression": false,
                    "start": 5759,
                    "end": 5826
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5742,
                  "end": 5826
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
                    "start": 5844,
                    "end": 5855
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
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5859,
                          "end": 5872
                        },
                        "typeArguments": null,
                        "start": 5859,
                        "end": 5872
                      },
                      "start": 5857,
                      "end": 5872
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5898,
                              "end": 5911
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5894,
                            "end": 5913
                          },
                          "start": 5887,
                          "end": 5914
                        }
                      ],
                      "start": 5873,
                      "end": 5924
                    },
                    "expression": false,
                    "start": 5855,
                    "end": 5924
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5836,
                  "end": 5924
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
                    "start": 5941,
                    "end": 5951
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
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5955,
                          "end": 5968
                        },
                        "typeArguments": null,
                        "start": 5955,
                        "end": 5968
                      },
                      "start": 5953,
                      "end": 5968
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5994,
                              "end": 6007
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5990,
                            "end": 6009
                          },
                          "start": 5983,
                          "end": 6010
                        }
                      ],
                      "start": 5969,
                      "end": 6020
                    },
                    "expression": false,
                    "start": 5951,
                    "end": 6020
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5934,
                  "end": 6020
                }
              ],
              "start": 4899,
              "end": 6026
            },
            "abstract": false,
            "declare": false,
            "start": 4879,
            "end": 6026
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6045,
                "end": 6057
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
                      "start": 6068,
                      "end": 6079
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
                          "name": "m2_c5_c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6090,
                                "end": 6102
                              },
                              "typeArguments": null,
                              "start": 6090,
                              "end": 6102
                            },
                            "start": 6088,
                            "end": 6102
                          },
                          "start": 6081,
                          "end": 6102
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6104,
                        "end": 6115
                      },
                      "expression": false,
                      "start": 6080,
                      "end": 6115
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6068,
                    "end": 6115
                  }
                ],
                "start": 6058,
                "end": 6121
              },
              "abstract": false,
              "declare": false,
              "start": 6039,
              "end": 6121
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6032,
            "end": 6121
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C6_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6137,
              "end": 6150
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
                    "start": 6161,
                    "end": 6172
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
                        "name": "m2_c6_c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6183,
                              "end": 6195
                            },
                            "typeArguments": null,
                            "start": 6183,
                            "end": 6195
                          },
                          "start": 6181,
                          "end": 6195
                        },
                        "start": 6174,
                        "end": 6195
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6197,
                      "end": 6208
                    },
                    "expression": false,
                    "start": 6173,
                    "end": 6208
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6161,
                  "end": 6208
                }
              ],
              "start": 6151,
              "end": 6214
            },
            "abstract": false,
            "declare": false,
            "start": 6131,
            "end": 6214
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6232,
                "end": 6244
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
                      "start": 6255,
                      "end": 6266
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
                          "name": "m2_c7_c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6277,
                                "end": 6290
                              },
                              "typeArguments": null,
                              "start": 6277,
                              "end": 6290
                            },
                            "start": 6275,
                            "end": 6290
                          },
                          "start": 6268,
                          "end": 6290
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6292,
                        "end": 6304
                      },
                      "expression": false,
                      "start": 6267,
                      "end": 6304
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6255,
                    "end": 6304
                  }
                ],
                "start": 6245,
                "end": 6310
              },
              "abstract": false,
              "declare": false,
              "start": 6226,
              "end": 6310
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6219,
            "end": 6310
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C8_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6326,
              "end": 6339
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
                    "start": 6350,
                    "end": 6361
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
                        "name": "m2_c8_c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6372,
                              "end": 6385
                            },
                            "typeArguments": null,
                            "start": 6372,
                            "end": 6385
                          },
                          "start": 6370,
                          "end": 6385
                        },
                        "start": 6363,
                        "end": 6385
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6387,
                      "end": 6398
                    },
                    "expression": false,
                    "start": 6362,
                    "end": 6398
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6350,
                  "end": 6398
                }
              ],
              "start": 6340,
              "end": 6404
            },
            "abstract": false,
            "declare": false,
            "start": 6320,
            "end": 6404
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6419,
              "end": 6428
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_f1_arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6440,
                      "end": 6452
                    },
                    "typeArguments": null,
                    "start": 6440,
                    "end": 6452
                  },
                  "start": 6438,
                  "end": 6452
                },
                "start": 6429,
                "end": 6452
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6454,
              "end": 6461
            },
            "expression": false,
            "start": 6410,
            "end": 6461
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
                "start": 6483,
                "end": 6492
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_f2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6504,
                        "end": 6516
                      },
                      "typeArguments": null,
                      "start": 6504,
                      "end": 6516
                    },
                    "start": 6502,
                    "end": 6516
                  },
                  "start": 6493,
                  "end": 6516
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 6518,
                "end": 6525
              },
              "expression": false,
              "start": 6474,
              "end": 6525
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6467,
            "end": 6525
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6540,
              "end": 6549
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_f3_arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6561,
                      "end": 6574
                    },
                    "typeArguments": null,
                    "start": 6561,
                    "end": 6574
                  },
                  "start": 6559,
                  "end": 6574
                },
                "start": 6550,
                "end": 6574
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6576,
              "end": 6583
            },
            "expression": false,
            "start": 6531,
            "end": 6583
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
                "start": 6605,
                "end": 6614
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_f4_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6626,
                        "end": 6639
                      },
                      "typeArguments": null,
                      "start": 6626,
                      "end": 6639
                    },
                    "start": 6624,
                    "end": 6639
                  },
                  "start": 6615,
                  "end": 6639
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 6641,
                "end": 6648
              },
              "expression": false,
              "start": 6596,
              "end": 6648
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6589,
            "end": 6648
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6664,
              "end": 6673
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
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6697,
                      "end": 6709
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6693,
                    "end": 6711
                  },
                  "start": 6686,
                  "end": 6712
                }
              ],
              "start": 6676,
              "end": 6718
            },
            "expression": false,
            "start": 6655,
            "end": 6718
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
                "start": 6740,
                "end": 6749
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
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6773,
                        "end": 6785
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 6769,
                      "end": 6787
                    },
                    "start": 6762,
                    "end": 6788
                  }
                ],
                "start": 6752,
                "end": 6794
              },
              "expression": false,
              "start": 6731,
              "end": 6794
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6724,
            "end": 6794
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f7_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6809,
              "end": 6818
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
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6842,
                      "end": 6855
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6838,
                    "end": 6857
                  },
                  "start": 6831,
                  "end": 6858
                }
              ],
              "start": 6821,
              "end": 6864
            },
            "expression": false,
            "start": 6800,
            "end": 6864
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
                "start": 6886,
                "end": 6895
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
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6919,
                        "end": 6932
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 6915,
                      "end": 6934
                    },
                    "start": 6908,
                    "end": 6935
                  }
                ],
                "start": 6898,
                "end": 6941
              },
              "expression": false,
              "start": 6877,
              "end": 6941
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6870,
            "end": 6941
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6957,
              "end": 6967
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
                  "name": "m2_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6971,
                  "end": 6983
                },
                "typeArguments": null,
                "start": 6971,
                "end": 6983
              },
              "start": 6969,
              "end": 6983
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
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7005,
                      "end": 7017
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 7001,
                    "end": 7019
                  },
                  "start": 6994,
                  "end": 7020
                }
              ],
              "start": 6984,
              "end": 7026
            },
            "expression": false,
            "start": 6948,
            "end": 7026
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
                "start": 7048,
                "end": 7058
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
                    "name": "m2_C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7062,
                    "end": 7074
                  },
                  "typeArguments": null,
                  "start": 7062,
                  "end": 7074
                },
                "start": 7060,
                "end": 7074
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
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7096,
                        "end": 7108
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 7092,
                      "end": 7110
                    },
                    "start": 7085,
                    "end": 7111
                  }
                ],
                "start": 7075,
                "end": 7117
              },
              "expression": false,
              "start": 7039,
              "end": 7117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7032,
            "end": 7117
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7132,
              "end": 7143
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
                  "name": "m2_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7147,
                  "end": 7160
                },
                "typeArguments": null,
                "start": 7147,
                "end": 7160
              },
              "start": 7145,
              "end": 7160
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
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7182,
                      "end": 7195
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 7178,
                    "end": 7197
                  },
                  "start": 7171,
                  "end": 7198
                }
              ],
              "start": 7161,
              "end": 7204
            },
            "expression": false,
            "start": 7123,
            "end": 7204
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
                "start": 7226,
                "end": 7236
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
                    "name": "m2_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7240,
                    "end": 7253
                  },
                  "typeArguments": null,
                  "start": 7240,
                  "end": 7253
                },
                "start": 7238,
                "end": 7253
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
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7275,
                        "end": 7288
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 7271,
                      "end": 7290
                    },
                    "start": 7264,
                    "end": 7291
                  }
                ],
                "start": 7254,
                "end": 7297
              },
              "expression": false,
              "start": 7217,
              "end": 7297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7210,
            "end": 7297
          }
        ],
        "start": 3612,
        "end": 7299
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3602,
      "end": 7299
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7307,
        "end": 7317
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 7332,
              "end": 7333
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
                "start": 7336,
                "end": 7343
              },
              "expression": false,
              "start": 7333,
              "end": 7343
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 7324,
            "end": 7343
          }
        ],
        "start": 7318,
        "end": 7345
      },
      "abstract": false,
      "declare": false,
      "start": 7301,
      "end": 7345
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 7360,
          "end": 7369
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 7370,
          "end": 7373
        },
        "abstract": false,
        "declare": false,
        "start": 7354,
        "end": 7373
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7347,
      "end": 7373
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
          "start": 7388,
          "end": 7397
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
                "start": 7404,
                "end": 7415
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
                    "name": "c7_c1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7424,
                          "end": 7434
                        },
                        "typeArguments": null,
                        "start": 7424,
                        "end": 7434
                      },
                      "start": 7422,
                      "end": 7434
                    },
                    "start": 7417,
                    "end": 7434
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 7416,
                "end": 7436
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7404,
              "end": 7436
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
                "start": 7450,
                "end": 7461
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
                          "start": 7470,
                          "end": 7479
                        },
                        "typeArguments": null,
                        "start": 7470,
                        "end": 7479
                      },
                      "start": 7468,
                      "end": 7479
                    },
                    "start": 7463,
                    "end": 7479
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 7462,
                "end": 7481
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7450,
              "end": 7481
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
                "start": 7486,
                "end": 7497
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
                        "start": 7508,
                        "end": 7511
                      },
                      "start": 7506,
                      "end": 7511
                    },
                    "start": 7499,
                    "end": 7511
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7513,
                  "end": 7520
                },
                "expression": false,
                "start": 7498,
                "end": 7520
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7486,
              "end": 7520
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
                "start": 7533,
                "end": 7543
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
                          "start": 7555,
                          "end": 7564
                        },
                        "typeArguments": null,
                        "start": 7555,
                        "end": 7564
                      },
                      "start": 7553,
                      "end": 7564
                    },
                    "start": 7544,
                    "end": 7564
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7566,
                  "end": 7573
                },
                "expression": false,
                "start": 7543,
                "end": 7573
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7525,
              "end": 7573
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
                "start": 7586,
                "end": 7595
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
                          "start": 7607,
                          "end": 7616
                        },
                        "typeArguments": null,
                        "start": 7607,
                        "end": 7616
                      },
                      "start": 7605,
                      "end": 7616
                    },
                    "start": 7596,
                    "end": 7616
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7618,
                  "end": 7625
                },
                "expression": false,
                "start": 7595,
                "end": 7625
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7579,
              "end": 7625
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
                "start": 7639,
                "end": 7649
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
                    "name": "c7_f3_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7661,
                          "end": 7671
                        },
                        "typeArguments": null,
                        "start": 7661,
                        "end": 7671
                      },
                      "start": 7659,
                      "end": 7671
                    },
                    "start": 7650,
                    "end": 7671
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7673,
                  "end": 7680
                },
                "expression": false,
                "start": 7649,
                "end": 7680
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7631,
              "end": 7680
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
                "start": 7693,
                "end": 7702
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
                    "name": "c7_f4_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7714,
                          "end": 7724
                        },
                        "typeArguments": null,
                        "start": 7714,
                        "end": 7724
                      },
                      "start": 7712,
                      "end": 7724
                    },
                    "start": 7703,
                    "end": 7724
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7726,
                  "end": 7741
                },
                "expression": false,
                "start": 7702,
                "end": 7741
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7686,
              "end": 7741
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
                "start": 7755,
                "end": 7765
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
                          "start": 7789,
                          "end": 7798
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7785,
                        "end": 7800
                      },
                      "start": 7778,
                      "end": 7801
                    }
                  ],
                  "start": 7768,
                  "end": 7807
                },
                "expression": false,
                "start": 7765,
                "end": 7807
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7747,
              "end": 7807
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
                "start": 7820,
                "end": 7829
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
                          "start": 7853,
                          "end": 7862
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7849,
                        "end": 7864
                      },
                      "start": 7842,
                      "end": 7865
                    }
                  ],
                  "start": 7832,
                  "end": 7871
                },
                "expression": false,
                "start": 7829,
                "end": 7871
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7813,
              "end": 7871
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
                "start": 7885,
                "end": 7895
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7919,
                          "end": 7929
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7915,
                        "end": 7931
                      },
                      "start": 7908,
                      "end": 7932
                    }
                  ],
                  "start": 7898,
                  "end": 7938
                },
                "expression": false,
                "start": 7895,
                "end": 7938
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7877,
              "end": 7938
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
                "start": 7951,
                "end": 7960
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7984,
                          "end": 7994
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7980,
                        "end": 7996
                      },
                      "start": 7973,
                      "end": 7997
                    }
                  ],
                  "start": 7963,
                  "end": 8011
                },
                "expression": false,
                "start": 7960,
                "end": 8011
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7944,
              "end": 8011
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
                "start": 8025,
                "end": 8035
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
                      "start": 8039,
                      "end": 8048
                    },
                    "typeArguments": null,
                    "start": 8039,
                    "end": 8048
                  },
                  "start": 8037,
                  "end": 8048
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
                          "start": 8070,
                          "end": 8079
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8066,
                        "end": 8081
                      },
                      "start": 8059,
                      "end": 8082
                    }
                  ],
                  "start": 8049,
                  "end": 8088
                },
                "expression": false,
                "start": 8035,
                "end": 8088
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 8017,
              "end": 8088
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
                "start": 8101,
                "end": 8111
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
                      "start": 8115,
                      "end": 8124
                    },
                    "typeArguments": null,
                    "start": 8115,
                    "end": 8124
                  },
                  "start": 8113,
                  "end": 8124
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
                          "start": 8146,
                          "end": 8155
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8142,
                        "end": 8157
                      },
                      "start": 8135,
                      "end": 8158
                    }
                  ],
                  "start": 8125,
                  "end": 8164
                },
                "expression": false,
                "start": 8111,
                "end": 8164
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 8094,
              "end": 8164
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
                "start": 8178,
                "end": 8189
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
                      "name": "C5_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8193,
                      "end": 8203
                    },
                    "typeArguments": null,
                    "start": 8193,
                    "end": 8203
                  },
                  "start": 8191,
                  "end": 8203
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8225,
                          "end": 8235
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8221,
                        "end": 8237
                      },
                      "start": 8214,
                      "end": 8238
                    }
                  ],
                  "start": 8204,
                  "end": 8244
                },
                "expression": false,
                "start": 8189,
                "end": 8244
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 8170,
              "end": 8244
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
                "start": 8257,
                "end": 8267
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
                      "name": "C5_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8271,
                      "end": 8281
                    },
                    "typeArguments": null,
                    "start": 8271,
                    "end": 8281
                  },
                  "start": 8269,
                  "end": 8281
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8311,
                          "end": 8321
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8307,
                        "end": 8323
                      },
                      "start": 8300,
                      "end": 8324
                    }
                  ],
                  "start": 8282,
                  "end": 8338
                },
                "expression": false,
                "start": 8267,
                "end": 8338
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 8250,
              "end": 8338
            }
          ],
          "start": 7398,
          "end": 8340
        },
        "abstract": false,
        "declare": false,
        "start": 7382,
        "end": 8340
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7375,
      "end": 8340
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
        "start": 8348,
        "end": 8358
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
              "start": 8365,
              "end": 8376
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
                  "name": "c8_c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8385,
                        "end": 8395
                      },
                      "typeArguments": null,
                      "start": 8385,
                      "end": 8395
                    },
                    "start": 8383,
                    "end": 8395
                  },
                  "start": 8378,
                  "end": 8395
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 8377,
              "end": 8397
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8365,
            "end": 8397
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
              "start": 8402,
              "end": 8413
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
                  "name": "c8_c2",
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
                        "start": 8422,
                        "end": 8431
                      },
                      "typeArguments": null,
                      "start": 8422,
                      "end": 8431
                    },
                    "start": 8420,
                    "end": 8431
                  },
                  "start": 8415,
                  "end": 8431
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 8414,
              "end": 8433
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8402,
            "end": 8433
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
              "start": 8438,
              "end": 8449
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
                  "name": "c8_c1_2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 8460,
                      "end": 8463
                    },
                    "start": 8458,
                    "end": 8463
                  },
                  "start": 8451,
                  "end": 8463
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8465,
                "end": 8472
              },
              "expression": false,
              "start": 8450,
              "end": 8472
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8438,
            "end": 8472
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
              "start": 8494,
              "end": 8504
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
                  "name": "c8_f1_arg",
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
                        "start": 8516,
                        "end": 8525
                      },
                      "typeArguments": null,
                      "start": 8516,
                      "end": 8525
                    },
                    "start": 8514,
                    "end": 8525
                  },
                  "start": 8505,
                  "end": 8525
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8527,
                "end": 8534
              },
              "expression": false,
              "start": 8504,
              "end": 8534
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8486,
            "end": 8534
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
              "start": 8547,
              "end": 8556
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
                  "name": "c8_f2_arg",
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
                        "start": 8568,
                        "end": 8577
                      },
                      "typeArguments": null,
                      "start": 8568,
                      "end": 8577
                    },
                    "start": 8566,
                    "end": 8577
                  },
                  "start": 8557,
                  "end": 8577
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8579,
                "end": 8586
              },
              "expression": false,
              "start": 8556,
              "end": 8586
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8540,
            "end": 8586
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
              "start": 8600,
              "end": 8610
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
                  "name": "c8_f3_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8622,
                        "end": 8632
                      },
                      "typeArguments": null,
                      "start": 8622,
                      "end": 8632
                    },
                    "start": 8620,
                    "end": 8632
                  },
                  "start": 8611,
                  "end": 8632
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8634,
                "end": 8641
              },
              "expression": false,
              "start": 8610,
              "end": 8641
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8592,
            "end": 8641
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
              "start": 8654,
              "end": 8663
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
                  "name": "c8_f4_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8675,
                        "end": 8685
                      },
                      "typeArguments": null,
                      "start": 8675,
                      "end": 8685
                    },
                    "start": 8673,
                    "end": 8685
                  },
                  "start": 8664,
                  "end": 8685
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8687,
                "end": 8694
              },
              "expression": false,
              "start": 8663,
              "end": 8694
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8647,
            "end": 8694
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
              "start": 8708,
              "end": 8718
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
                        "start": 8742,
                        "end": 8751
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8738,
                      "end": 8753
                    },
                    "start": 8731,
                    "end": 8754
                  }
                ],
                "start": 8721,
                "end": 8760
              },
              "expression": false,
              "start": 8718,
              "end": 8760
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8700,
            "end": 8760
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
              "start": 8773,
              "end": 8782
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
                        "start": 8806,
                        "end": 8815
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8802,
                      "end": 8817
                    },
                    "start": 8795,
                    "end": 8818
                  }
                ],
                "start": 8785,
                "end": 8824
              },
              "expression": false,
              "start": 8782,
              "end": 8824
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8766,
            "end": 8824
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
              "start": 8838,
              "end": 8848
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8872,
                        "end": 8882
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8868,
                      "end": 8884
                    },
                    "start": 8861,
                    "end": 8885
                  }
                ],
                "start": 8851,
                "end": 8891
              },
              "expression": false,
              "start": 8848,
              "end": 8891
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8830,
            "end": 8891
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
              "start": 8904,
              "end": 8913
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8937,
                        "end": 8947
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8933,
                      "end": 8949
                    },
                    "start": 8926,
                    "end": 8950
                  }
                ],
                "start": 8916,
                "end": 8956
              },
              "expression": false,
              "start": 8913,
              "end": 8956
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8897,
            "end": 8956
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
              "start": 8970,
              "end": 8980
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
                    "start": 8984,
                    "end": 8993
                  },
                  "typeArguments": null,
                  "start": 8984,
                  "end": 8993
                },
                "start": 8982,
                "end": 8993
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
                        "start": 9015,
                        "end": 9024
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9011,
                      "end": 9026
                    },
                    "start": 9004,
                    "end": 9027
                  }
                ],
                "start": 8994,
                "end": 9033
              },
              "expression": false,
              "start": 8980,
              "end": 9033
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8962,
            "end": 9033
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
              "start": 9046,
              "end": 9056
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
                    "start": 9060,
                    "end": 9069
                  },
                  "typeArguments": null,
                  "start": 9060,
                  "end": 9069
                },
                "start": 9058,
                "end": 9069
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
                        "start": 9091,
                        "end": 9100
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9087,
                      "end": 9102
                    },
                    "start": 9080,
                    "end": 9103
                  }
                ],
                "start": 9070,
                "end": 9109
              },
              "expression": false,
              "start": 9056,
              "end": 9109
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 9039,
            "end": 9109
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
              "start": 9123,
              "end": 9134
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
                    "name": "C5_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9138,
                    "end": 9148
                  },
                  "typeArguments": null,
                  "start": 9138,
                  "end": 9148
                },
                "start": 9136,
                "end": 9148
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9170,
                        "end": 9180
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9166,
                      "end": 9182
                    },
                    "start": 9159,
                    "end": 9183
                  }
                ],
                "start": 9149,
                "end": 9189
              },
              "expression": false,
              "start": 9134,
              "end": 9189
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 9115,
            "end": 9189
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
              "start": 9202,
              "end": 9212
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
                    "name": "C5_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9216,
                    "end": 9226
                  },
                  "typeArguments": null,
                  "start": 9216,
                  "end": 9226
                },
                "start": 9214,
                "end": 9226
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9248,
                        "end": 9258
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9244,
                      "end": 9260
                    },
                    "start": 9237,
                    "end": 9261
                  }
                ],
                "start": 9227,
                "end": 9267
              },
              "expression": false,
              "start": 9212,
              "end": 9267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 9195,
            "end": 9267
          }
        ],
        "start": 8359,
        "end": 9269
      },
      "abstract": false,
      "declare": false,
      "start": 8342,
      "end": 9269
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C9_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9285,
          "end": 9294
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
                "start": 9301,
                "end": 9312
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
                          "start": 9320,
                          "end": 9329
                        },
                        "typeArguments": null,
                        "start": 9320,
                        "end": 9329
                      },
                      "start": 9318,
                      "end": 9329
                    },
                    "start": 9314,
                    "end": 9329
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9331,
                  "end": 9338
                },
                "expression": false,
                "start": 9313,
                "end": 9338
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9301,
              "end": 9338
            }
          ],
          "start": 9295,
          "end": 9340
        },
        "abstract": false,
        "declare": false,
        "start": 9279,
        "end": 9340
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9272,
      "end": 9340
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C10_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9352,
        "end": 9363
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
              "start": 9370,
              "end": 9381
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
                  "name": "c10_c",
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
                        "start": 9390,
                        "end": 9399
                      },
                      "typeArguments": null,
                      "start": 9390,
                      "end": 9399
                    },
                    "start": 9388,
                    "end": 9399
                  },
                  "start": 9383,
                  "end": 9399
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9401,
                "end": 9408
              },
              "expression": false,
              "start": 9382,
              "end": 9408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 9370,
            "end": 9408
          }
        ],
        "start": 9364,
        "end": 9410
      },
      "abstract": false,
      "declare": false,
      "start": 9346,
      "end": 9410
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C11_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9424,
          "end": 9434
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
                "start": 9441,
                "end": 9452
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
                    "name": "c11_c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9461,
                          "end": 9471
                        },
                        "typeArguments": null,
                        "start": 9461,
                        "end": 9471
                      },
                      "start": 9459,
                      "end": 9471
                    },
                    "start": 9454,
                    "end": 9471
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9473,
                  "end": 9489
                },
                "expression": false,
                "start": 9453,
                "end": 9489
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9441,
              "end": 9489
            }
          ],
          "start": 9435,
          "end": 9491
        },
        "abstract": false,
        "declare": false,
        "start": 9418,
        "end": 9491
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9411,
      "end": 9491
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C12_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9503,
        "end": 9514
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
              "start": 9521,
              "end": 9532
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
                  "name": "c12_c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9541,
                        "end": 9551
                      },
                      "typeArguments": null,
                      "start": 9541,
                      "end": 9551
                    },
                    "start": 9539,
                    "end": 9551
                  },
                  "start": 9534,
                  "end": 9551
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9553,
                "end": 9560
              },
              "expression": false,
              "start": 9533,
              "end": 9560
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 9521,
            "end": 9560
          }
        ],
        "start": 9515,
        "end": 9562
      },
      "abstract": false,
      "declare": false,
      "start": 9497,
      "end": 9562
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9573,
        "end": 9583
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1_arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 9592,
                "end": 9602
              },
              "typeArguments": null,
              "start": 9592,
              "end": 9602
            },
            "start": 9590,
            "end": 9602
          },
          "start": 9584,
          "end": 9602
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 9604,
        "end": 9607
      },
      "expression": false,
      "start": 9564,
      "end": 9607
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
          "start": 9625,
          "end": 9634
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2_arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9643,
                  "end": 9653
                },
                "typeArguments": null,
                "start": 9643,
                "end": 9653
              },
              "start": 9641,
              "end": 9653
            },
            "start": 9635,
            "end": 9653
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 9655,
          "end": 9667
        },
        "expression": false,
        "start": 9616,
        "end": 9667
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9609,
      "end": 9667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9678,
        "end": 9688
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f3_arg",
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
                "start": 9697,
                "end": 9706
              },
              "typeArguments": null,
              "start": 9697,
              "end": 9706
            },
            "start": 9695,
            "end": 9706
          },
          "start": 9689,
          "end": 9706
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 9708,
        "end": 9711
      },
      "expression": false,
      "start": 9669,
      "end": 9711
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
          "start": 9729,
          "end": 9738
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
                  "start": 9747,
                  "end": 9756
                },
                "typeArguments": null,
                "start": 9747,
                "end": 9756
              },
              "start": 9745,
              "end": 9756
            },
            "start": 9739,
            "end": 9756
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 9758,
          "end": 9761
        },
        "expression": false,
        "start": 9720,
        "end": 9761
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9713,
      "end": 9761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9772,
        "end": 9782
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
                "start": 9802,
                "end": 9811
              },
              "typeArguments": null,
              "arguments": [],
              "start": 9798,
              "end": 9813
            },
            "start": 9791,
            "end": 9814
          }
        ],
        "start": 9785,
        "end": 9816
      },
      "expression": false,
      "start": 9763,
      "end": 9816
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
          "start": 9834,
          "end": 9843
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
                  "start": 9863,
                  "end": 9872
                },
                "typeArguments": null,
                "arguments": [],
                "start": 9859,
                "end": 9874
              },
              "start": 9852,
              "end": 9875
            }
          ],
          "start": 9846,
          "end": 9877
        },
        "expression": false,
        "start": 9825,
        "end": 9877
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9818,
      "end": 9877
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9888,
        "end": 9898
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
                "name": "C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 9918,
                "end": 9928
              },
              "typeArguments": null,
              "arguments": [],
              "start": 9914,
              "end": 9930
            },
            "start": 9907,
            "end": 9931
          }
        ],
        "start": 9901,
        "end": 9933
      },
      "expression": false,
      "start": 9879,
      "end": 9933
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
          "start": 9951,
          "end": 9960
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
                  "name": "C5_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9980,
                  "end": 9990
                },
                "typeArguments": null,
                "arguments": [],
                "start": 9976,
                "end": 9992
              },
              "start": 9969,
              "end": 9993
            }
          ],
          "start": 9963,
          "end": 10003
        },
        "expression": false,
        "start": 9942,
        "end": 10003
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9935,
      "end": 10003
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 10014,
        "end": 10024
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
            "start": 10028,
            "end": 10037
          },
          "typeArguments": null,
          "start": 10028,
          "end": 10037
        },
        "start": 10026,
        "end": 10037
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
                "start": 10055,
                "end": 10064
              },
              "typeArguments": null,
              "arguments": [],
              "start": 10051,
              "end": 10066
            },
            "start": 10044,
            "end": 10067
          }
        ],
        "start": 10038,
        "end": 10069
      },
      "expression": false,
      "start": 10005,
      "end": 10069
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
          "start": 10087,
          "end": 10097
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
              "start": 10101,
              "end": 10110
            },
            "typeArguments": null,
            "start": 10101,
            "end": 10110
          },
          "start": 10099,
          "end": 10110
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
                  "start": 10128,
                  "end": 10137
                },
                "typeArguments": null,
                "arguments": [],
                "start": 10124,
                "end": 10139
              },
              "start": 10117,
              "end": 10140
            }
          ],
          "start": 10111,
          "end": 10142
        },
        "expression": false,
        "start": 10078,
        "end": 10142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10071,
      "end": 10142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 10153,
        "end": 10164
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
            "name": "C5_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 10168,
            "end": 10178
          },
          "typeArguments": null,
          "start": 10168,
          "end": 10178
        },
        "start": 10166,
        "end": 10178
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
                "name": "C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 10196,
                "end": 10206
              },
              "typeArguments": null,
              "arguments": [],
              "start": 10192,
              "end": 10208
            },
            "start": 10185,
            "end": 10209
          }
        ],
        "start": 10179,
        "end": 10211
      },
      "expression": false,
      "start": 10144,
      "end": 10211
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
          "start": 10229,
          "end": 10239
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
              "name": "C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10243,
              "end": 10253
            },
            "typeArguments": null,
            "start": 10243,
            "end": 10253
          },
          "start": 10241,
          "end": 10253
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
                  "name": "C5_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10280,
                  "end": 10290
                },
                "typeArguments": null,
                "arguments": [],
                "start": 10276,
                "end": 10292
              },
              "start": 10269,
              "end": 10293
            }
          ],
          "start": 10254,
          "end": 10303
        },
        "expression": false,
        "start": 10220,
        "end": 10303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10213,
      "end": 10303
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10303
}
```
