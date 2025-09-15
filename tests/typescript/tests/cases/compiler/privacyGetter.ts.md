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
          "start": 17,
          "end": 19
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
                  "start": 39,
                  "end": 48
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
                        "start": 67,
                        "end": 69
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
                          "start": 72,
                          "end": 83
                        },
                        "expression": false,
                        "start": 69,
                        "end": 83
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 59,
                      "end": 83
                    }
                  ],
                  "start": 49,
                  "end": 89
                },
                "abstract": false,
                "declare": false,
                "start": 33,
                "end": 89
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 89
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
                "start": 101,
                "end": 111
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 112,
                "end": 119
              },
              "abstract": false,
              "declare": false,
              "start": 95,
              "end": 119
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
                  "start": 138,
                  "end": 147
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
                        "start": 170,
                        "end": 180
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
                                  "start": 208,
                                  "end": 217
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 204,
                                "end": 219
                              },
                              "start": 197,
                              "end": 220
                            }
                          ],
                          "start": 183,
                          "end": 230
                        },
                        "expression": false,
                        "start": 180,
                        "end": 230
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 158,
                      "end": 230
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
                        "start": 252,
                        "end": 262
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
                                  "start": 277,
                                  "end": 286
                                },
                                "typeArguments": null,
                                "start": 277,
                                "end": 286
                              },
                              "start": 275,
                              "end": 286
                            },
                            "start": 263,
                            "end": 286
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 288,
                          "end": 299
                        },
                        "expression": false,
                        "start": 262,
                        "end": 299
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 240,
                      "end": 299
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
                        "start": 321,
                        "end": 331
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
                                  "start": 359,
                                  "end": 368
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 355,
                                "end": 370
                              },
                              "start": 348,
                              "end": 371
                            }
                          ],
                          "start": 334,
                          "end": 381
                        },
                        "expression": false,
                        "start": 331,
                        "end": 381
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 309,
                      "end": 381
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
                        "start": 403,
                        "end": 413
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
                                  "start": 428,
                                  "end": 437
                                },
                                "typeArguments": null,
                                "start": 428,
                                "end": 437
                              },
                              "start": 426,
                              "end": 437
                            },
                            "start": 414,
                            "end": 437
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 439,
                          "end": 450
                        },
                        "expression": false,
                        "start": 413,
                        "end": 450
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 391,
                      "end": 450
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
                        "start": 472,
                        "end": 482
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
                                  "start": 510,
                                  "end": 520
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 506,
                                "end": 522
                              },
                              "start": 499,
                              "end": 523
                            }
                          ],
                          "start": 485,
                          "end": 533
                        },
                        "expression": false,
                        "start": 482,
                        "end": 533
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 460,
                      "end": 533
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
                        "start": 555,
                        "end": 565
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
                                  "start": 580,
                                  "end": 590
                                },
                                "typeArguments": null,
                                "start": 580,
                                "end": 590
                              },
                              "start": 578,
                              "end": 590
                            },
                            "start": 566,
                            "end": 590
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 592,
                          "end": 603
                        },
                        "expression": false,
                        "start": 565,
                        "end": 603
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 543,
                      "end": 603
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
                        "start": 624,
                        "end": 633
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
                              "start": 637,
                              "end": 647
                            },
                            "typeArguments": null,
                            "start": 637,
                            "end": 647
                          },
                          "start": 635,
                          "end": 647
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
                                  "start": 682,
                                  "end": 692
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 678,
                                "end": 694
                              },
                              "start": 671,
                              "end": 695
                            }
                          ],
                          "start": 648,
                          "end": 713
                        },
                        "expression": false,
                        "start": 633,
                        "end": 713
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 613,
                      "end": 713
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
                        "start": 734,
                        "end": 743
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
                                  "start": 758,
                                  "end": 768
                                },
                                "typeArguments": null,
                                "start": 758,
                                "end": 768
                              },
                              "start": 756,
                              "end": 768
                            },
                            "start": 744,
                            "end": 768
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 770,
                          "end": 790
                        },
                        "expression": false,
                        "start": 743,
                        "end": 790
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 723,
                      "end": 790
                    }
                  ],
                  "start": 148,
                  "end": 796
                },
                "abstract": false,
                "declare": false,
                "start": 132,
                "end": 796
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 125,
              "end": 796
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
                "start": 808,
                "end": 818
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
                      "start": 841,
                      "end": 851
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
                                "start": 879,
                                "end": 888
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 875,
                              "end": 890
                            },
                            "start": 868,
                            "end": 891
                          }
                        ],
                        "start": 854,
                        "end": 901
                      },
                      "expression": false,
                      "start": 851,
                      "end": 901
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 829,
                    "end": 901
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
                      "start": 923,
                      "end": 933
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
                                "start": 948,
                                "end": 957
                              },
                              "typeArguments": null,
                              "start": 948,
                              "end": 957
                            },
                            "start": 946,
                            "end": 957
                          },
                          "start": 934,
                          "end": 957
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 959,
                        "end": 970
                      },
                      "expression": false,
                      "start": 933,
                      "end": 970
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 911,
                    "end": 970
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
                      "start": 992,
                      "end": 1002
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
                                "start": 1030,
                                "end": 1039
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1026,
                              "end": 1041
                            },
                            "start": 1019,
                            "end": 1042
                          }
                        ],
                        "start": 1005,
                        "end": 1052
                      },
                      "expression": false,
                      "start": 1002,
                      "end": 1052
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 980,
                    "end": 1052
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
                      "start": 1074,
                      "end": 1084
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
                                "start": 1099,
                                "end": 1108
                              },
                              "typeArguments": null,
                              "start": 1099,
                              "end": 1108
                            },
                            "start": 1097,
                            "end": 1108
                          },
                          "start": 1085,
                          "end": 1108
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1110,
                        "end": 1121
                      },
                      "expression": false,
                      "start": 1084,
                      "end": 1121
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1062,
                    "end": 1121
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
                      "start": 1143,
                      "end": 1153
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
                                "start": 1181,
                                "end": 1191
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1177,
                              "end": 1193
                            },
                            "start": 1170,
                            "end": 1194
                          }
                        ],
                        "start": 1156,
                        "end": 1204
                      },
                      "expression": false,
                      "start": 1153,
                      "end": 1204
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1131,
                    "end": 1204
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
                      "start": 1226,
                      "end": 1236
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
                                "start": 1251,
                                "end": 1261
                              },
                              "typeArguments": null,
                              "start": 1251,
                              "end": 1261
                            },
                            "start": 1249,
                            "end": 1261
                          },
                          "start": 1237,
                          "end": 1261
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1263,
                        "end": 1274
                      },
                      "expression": false,
                      "start": 1236,
                      "end": 1274
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1214,
                    "end": 1274
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
                      "start": 1295,
                      "end": 1304
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
                            "start": 1308,
                            "end": 1318
                          },
                          "typeArguments": null,
                          "start": 1308,
                          "end": 1318
                        },
                        "start": 1306,
                        "end": 1318
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
                                "start": 1344,
                                "end": 1354
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1340,
                              "end": 1356
                            },
                            "start": 1333,
                            "end": 1357
                          }
                        ],
                        "start": 1319,
                        "end": 1367
                      },
                      "expression": false,
                      "start": 1304,
                      "end": 1367
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1284,
                    "end": 1367
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
                      "start": 1388,
                      "end": 1397
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
                                "start": 1412,
                                "end": 1422
                              },
                              "typeArguments": null,
                              "start": 1412,
                              "end": 1422
                            },
                            "start": 1410,
                            "end": 1422
                          },
                          "start": 1398,
                          "end": 1422
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1424,
                        "end": 1435
                      },
                      "expression": false,
                      "start": 1397,
                      "end": 1435
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1377,
                    "end": 1435
                  }
                ],
                "start": 819,
                "end": 1441
              },
              "abstract": false,
              "declare": false,
              "start": 802,
              "end": 1441
            }
          ],
          "start": 20,
          "end": 1443
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1443
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1443
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1455,
        "end": 1457
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
                "start": 1477,
                "end": 1489
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
                      "start": 1508,
                      "end": 1510
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
                        "start": 1513,
                        "end": 1524
                      },
                      "expression": false,
                      "start": 1510,
                      "end": 1524
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1500,
                    "end": 1524
                  }
                ],
                "start": 1490,
                "end": 1530
              },
              "abstract": false,
              "declare": false,
              "start": 1471,
              "end": 1530
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1464,
            "end": 1530
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
              "start": 1542,
              "end": 1555
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1556,
              "end": 1563
            },
            "abstract": false,
            "declare": false,
            "start": 1536,
            "end": 1563
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
                "start": 1582,
                "end": 1594
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
                      "start": 1617,
                      "end": 1627
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
                                "start": 1655,
                                "end": 1667
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1651,
                              "end": 1669
                            },
                            "start": 1644,
                            "end": 1670
                          }
                        ],
                        "start": 1630,
                        "end": 1680
                      },
                      "expression": false,
                      "start": 1627,
                      "end": 1680
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1605,
                    "end": 1680
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
                      "start": 1702,
                      "end": 1712
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
                          "name": "m2_c3_p1_arg",
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
                                "start": 1727,
                                "end": 1739
                              },
                              "typeArguments": null,
                              "start": 1727,
                              "end": 1739
                            },
                            "start": 1725,
                            "end": 1739
                          },
                          "start": 1713,
                          "end": 1739
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1741,
                        "end": 1752
                      },
                      "expression": false,
                      "start": 1712,
                      "end": 1752
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1690,
                    "end": 1752
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
                      "start": 1774,
                      "end": 1784
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
                                "start": 1812,
                                "end": 1824
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1808,
                              "end": 1826
                            },
                            "start": 1801,
                            "end": 1827
                          }
                        ],
                        "start": 1787,
                        "end": 1837
                      },
                      "expression": false,
                      "start": 1784,
                      "end": 1837
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1762,
                    "end": 1837
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
                      "start": 1859,
                      "end": 1869
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
                          "name": "m2_c3_p2_arg",
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
                                "start": 1884,
                                "end": 1896
                              },
                              "typeArguments": null,
                              "start": 1884,
                              "end": 1896
                            },
                            "start": 1882,
                            "end": 1896
                          },
                          "start": 1870,
                          "end": 1896
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1898,
                        "end": 1909
                      },
                      "expression": false,
                      "start": 1869,
                      "end": 1909
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1847,
                    "end": 1909
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
                      "start": 1931,
                      "end": 1941
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
                                "start": 1969,
                                "end": 1982
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1965,
                              "end": 1984
                            },
                            "start": 1958,
                            "end": 1985
                          }
                        ],
                        "start": 1944,
                        "end": 1995
                      },
                      "expression": false,
                      "start": 1941,
                      "end": 1995
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1919,
                    "end": 1995
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
                      "start": 2017,
                      "end": 2027
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
                          "name": "m2_c3_p3_arg",
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
                                "start": 2042,
                                "end": 2055
                              },
                              "typeArguments": null,
                              "start": 2042,
                              "end": 2055
                            },
                            "start": 2040,
                            "end": 2055
                          },
                          "start": 2028,
                          "end": 2055
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2057,
                        "end": 2068
                      },
                      "expression": false,
                      "start": 2027,
                      "end": 2068
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2005,
                    "end": 2068
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
                      "start": 2089,
                      "end": 2098
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
                            "start": 2102,
                            "end": 2115
                          },
                          "typeArguments": null,
                          "start": 2102,
                          "end": 2115
                        },
                        "start": 2100,
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2141,
                                "end": 2154
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2137,
                              "end": 2156
                            },
                            "start": 2130,
                            "end": 2157
                          }
                        ],
                        "start": 2116,
                        "end": 2167
                      },
                      "expression": false,
                      "start": 2098,
                      "end": 2167
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2078,
                    "end": 2167
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
                      "start": 2188,
                      "end": 2197
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
                          "name": "m2_c3_p4_arg",
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
                                "start": 2212,
                                "end": 2225
                              },
                              "typeArguments": null,
                              "start": 2212,
                              "end": 2225
                            },
                            "start": 2210,
                            "end": 2225
                          },
                          "start": 2198,
                          "end": 2225
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2227,
                        "end": 2238
                      },
                      "expression": false,
                      "start": 2197,
                      "end": 2238
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2177,
                    "end": 2238
                  }
                ],
                "start": 1595,
                "end": 2244
              },
              "abstract": false,
              "declare": false,
              "start": 1576,
              "end": 2244
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1569,
            "end": 2244
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
              "start": 2256,
              "end": 2269
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
                    "start": 2292,
                    "end": 2302
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
                              "start": 2330,
                              "end": 2342
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2326,
                            "end": 2344
                          },
                          "start": 2319,
                          "end": 2345
                        }
                      ],
                      "start": 2305,
                      "end": 2355
                    },
                    "expression": false,
                    "start": 2302,
                    "end": 2355
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2280,
                  "end": 2355
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
                    "start": 2377,
                    "end": 2387
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
                        "name": "m2_c3_p1_arg",
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
                              "start": 2402,
                              "end": 2414
                            },
                            "typeArguments": null,
                            "start": 2402,
                            "end": 2414
                          },
                          "start": 2400,
                          "end": 2414
                        },
                        "start": 2388,
                        "end": 2414
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2416,
                      "end": 2427
                    },
                    "expression": false,
                    "start": 2387,
                    "end": 2427
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2365,
                  "end": 2427
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
                    "start": 2449,
                    "end": 2459
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
                              "start": 2487,
                              "end": 2499
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2483,
                            "end": 2501
                          },
                          "start": 2476,
                          "end": 2502
                        }
                      ],
                      "start": 2462,
                      "end": 2512
                    },
                    "expression": false,
                    "start": 2459,
                    "end": 2512
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2437,
                  "end": 2512
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
                    "start": 2534,
                    "end": 2544
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
                        "name": "m2_c3_p2_arg",
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
                              "start": 2559,
                              "end": 2571
                            },
                            "typeArguments": null,
                            "start": 2559,
                            "end": 2571
                          },
                          "start": 2557,
                          "end": 2571
                        },
                        "start": 2545,
                        "end": 2571
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2573,
                      "end": 2584
                    },
                    "expression": false,
                    "start": 2544,
                    "end": 2584
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2522,
                  "end": 2584
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
                    "start": 2606,
                    "end": 2616
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
                              "start": 2644,
                              "end": 2657
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2640,
                            "end": 2659
                          },
                          "start": 2633,
                          "end": 2660
                        }
                      ],
                      "start": 2619,
                      "end": 2670
                    },
                    "expression": false,
                    "start": 2616,
                    "end": 2670
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2594,
                  "end": 2670
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
                    "start": 2692,
                    "end": 2702
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
                        "name": "m2_c3_p3_arg",
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
                              "start": 2717,
                              "end": 2730
                            },
                            "typeArguments": null,
                            "start": 2717,
                            "end": 2730
                          },
                          "start": 2715,
                          "end": 2730
                        },
                        "start": 2703,
                        "end": 2730
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2732,
                      "end": 2743
                    },
                    "expression": false,
                    "start": 2702,
                    "end": 2743
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2680,
                  "end": 2743
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
                    "start": 2764,
                    "end": 2773
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
                          "start": 2777,
                          "end": 2790
                        },
                        "typeArguments": null,
                        "start": 2777,
                        "end": 2790
                      },
                      "start": 2775,
                      "end": 2790
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
                              "start": 2816,
                              "end": 2829
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2812,
                            "end": 2831
                          },
                          "start": 2805,
                          "end": 2832
                        }
                      ],
                      "start": 2791,
                      "end": 2842
                    },
                    "expression": false,
                    "start": 2773,
                    "end": 2842
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2753,
                  "end": 2842
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
                    "start": 2863,
                    "end": 2872
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
                        "name": "m2_c3_p4_arg",
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
                              "start": 2887,
                              "end": 2900
                            },
                            "typeArguments": null,
                            "start": 2887,
                            "end": 2900
                          },
                          "start": 2885,
                          "end": 2900
                        },
                        "start": 2873,
                        "end": 2900
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2902,
                      "end": 2913
                    },
                    "expression": false,
                    "start": 2872,
                    "end": 2913
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2852,
                  "end": 2913
                }
              ],
              "start": 2270,
              "end": 2919
            },
            "abstract": false,
            "declare": false,
            "start": 2250,
            "end": 2919
          }
        ],
        "start": 1458,
        "end": 2921
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1445,
      "end": 2921
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
        "start": 2929,
        "end": 2939
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
              "start": 2954,
              "end": 2955
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
                "start": 2958,
                "end": 2965
              },
              "expression": false,
              "start": 2955,
              "end": 2965
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2946,
            "end": 2965
          }
        ],
        "start": 2940,
        "end": 2967
      },
      "abstract": false,
      "declare": false,
      "start": 2923,
      "end": 2967
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
          "start": 2982,
          "end": 2991
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2992,
          "end": 2995
        },
        "abstract": false,
        "declare": false,
        "start": 2976,
        "end": 2995
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2969,
      "end": 2995
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
          "start": 3010,
          "end": 3019
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
                "start": 3038,
                "end": 3048
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
                          "start": 3072,
                          "end": 3081
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3068,
                        "end": 3083
                      },
                      "start": 3061,
                      "end": 3084
                    }
                  ],
                  "start": 3051,
                  "end": 3090
                },
                "expression": false,
                "start": 3048,
                "end": 3090
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3026,
              "end": 3090
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
                "start": 3108,
                "end": 3118
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
                          "start": 3133,
                          "end": 3142
                        },
                        "typeArguments": null,
                        "start": 3133,
                        "end": 3142
                      },
                      "start": 3131,
                      "end": 3142
                    },
                    "start": 3119,
                    "end": 3142
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3144,
                  "end": 3151
                },
                "expression": false,
                "start": 3118,
                "end": 3151
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3096,
              "end": 3151
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
                "start": 3169,
                "end": 3179
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
                          "start": 3203,
                          "end": 3212
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3199,
                        "end": 3214
                      },
                      "start": 3192,
                      "end": 3215
                    }
                  ],
                  "start": 3182,
                  "end": 3221
                },
                "expression": false,
                "start": 3179,
                "end": 3221
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3157,
              "end": 3221
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
                "start": 3239,
                "end": 3249
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
                          "start": 3264,
                          "end": 3273
                        },
                        "typeArguments": null,
                        "start": 3264,
                        "end": 3273
                      },
                      "start": 3262,
                      "end": 3273
                    },
                    "start": 3250,
                    "end": 3273
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3275,
                  "end": 3282
                },
                "expression": false,
                "start": 3249,
                "end": 3282
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3227,
              "end": 3282
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
                "start": 3300,
                "end": 3310
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
                          "start": 3334,
                          "end": 3344
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3330,
                        "end": 3346
                      },
                      "start": 3323,
                      "end": 3347
                    }
                  ],
                  "start": 3313,
                  "end": 3353
                },
                "expression": false,
                "start": 3310,
                "end": 3353
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3288,
              "end": 3353
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
                "start": 3371,
                "end": 3381
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3396,
                          "end": 3406
                        },
                        "typeArguments": null,
                        "start": 3396,
                        "end": 3406
                      },
                      "start": 3394,
                      "end": 3406
                    },
                    "start": 3382,
                    "end": 3406
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3408,
                  "end": 3415
                },
                "expression": false,
                "start": 3381,
                "end": 3415
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3359,
              "end": 3415
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
                "start": 3432,
                "end": 3441
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
                      "start": 3445,
                      "end": 3455
                    },
                    "typeArguments": null,
                    "start": 3445,
                    "end": 3455
                  },
                  "start": 3443,
                  "end": 3455
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
                          "start": 3486,
                          "end": 3496
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3482,
                        "end": 3498
                      },
                      "start": 3475,
                      "end": 3499
                    }
                  ],
                  "start": 3456,
                  "end": 3513
                },
                "expression": false,
                "start": 3441,
                "end": 3513
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 3421,
              "end": 3513
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
                "start": 3530,
                "end": 3539
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3554,
                          "end": 3564
                        },
                        "typeArguments": null,
                        "start": 3554,
                        "end": 3564
                      },
                      "start": 3552,
                      "end": 3564
                    },
                    "start": 3540,
                    "end": 3564
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3566,
                  "end": 3582
                },
                "expression": false,
                "start": 3539,
                "end": 3582
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 3519,
              "end": 3582
            }
          ],
          "start": 3020,
          "end": 3584
        },
        "abstract": false,
        "declare": false,
        "start": 3004,
        "end": 3584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2997,
      "end": 3584
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
        "start": 3592,
        "end": 3602
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
              "start": 3621,
              "end": 3631
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
                        "start": 3655,
                        "end": 3664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3651,
                      "end": 3666
                    },
                    "start": 3644,
                    "end": 3667
                  }
                ],
                "start": 3634,
                "end": 3673
              },
              "expression": false,
              "start": 3631,
              "end": 3673
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3609,
            "end": 3673
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
              "start": 3691,
              "end": 3701
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
                        "start": 3716,
                        "end": 3725
                      },
                      "typeArguments": null,
                      "start": 3716,
                      "end": 3725
                    },
                    "start": 3714,
                    "end": 3725
                  },
                  "start": 3702,
                  "end": 3725
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3727,
                "end": 3734
              },
              "expression": false,
              "start": 3701,
              "end": 3734
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3679,
            "end": 3734
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
              "start": 3752,
              "end": 3762
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
                        "start": 3786,
                        "end": 3795
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3782,
                      "end": 3797
                    },
                    "start": 3775,
                    "end": 3798
                  }
                ],
                "start": 3765,
                "end": 3804
              },
              "expression": false,
              "start": 3762,
              "end": 3804
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3740,
            "end": 3804
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
              "start": 3822,
              "end": 3832
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
                        "start": 3847,
                        "end": 3856
                      },
                      "typeArguments": null,
                      "start": 3847,
                      "end": 3856
                    },
                    "start": 3845,
                    "end": 3856
                  },
                  "start": 3833,
                  "end": 3856
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3858,
                "end": 3865
              },
              "expression": false,
              "start": 3832,
              "end": 3865
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3810,
            "end": 3865
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
              "start": 3883,
              "end": 3893
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
                        "start": 3917,
                        "end": 3927
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3913,
                      "end": 3929
                    },
                    "start": 3906,
                    "end": 3930
                  }
                ],
                "start": 3896,
                "end": 3936
              },
              "expression": false,
              "start": 3893,
              "end": 3936
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3871,
            "end": 3936
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
              "start": 3954,
              "end": 3964
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3979,
                        "end": 3989
                      },
                      "typeArguments": null,
                      "start": 3979,
                      "end": 3989
                    },
                    "start": 3977,
                    "end": 3989
                  },
                  "start": 3965,
                  "end": 3989
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3991,
                "end": 3998
              },
              "expression": false,
              "start": 3964,
              "end": 3998
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3942,
            "end": 3998
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
              "start": 4015,
              "end": 4024
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
                    "start": 4028,
                    "end": 4038
                  },
                  "typeArguments": null,
                  "start": 4028,
                  "end": 4038
                },
                "start": 4026,
                "end": 4038
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
                        "start": 4060,
                        "end": 4070
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4056,
                      "end": 4072
                    },
                    "start": 4049,
                    "end": 4073
                  }
                ],
                "start": 4039,
                "end": 4079
              },
              "expression": false,
              "start": 4024,
              "end": 4079
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4004,
            "end": 4079
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
              "start": 4096,
              "end": 4105
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4120,
                        "end": 4130
                      },
                      "typeArguments": null,
                      "start": 4120,
                      "end": 4130
                    },
                    "start": 4118,
                    "end": 4130
                  },
                  "start": 4106,
                  "end": 4130
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4132,
                "end": 4139
              },
              "expression": false,
              "start": 4105,
              "end": 4139
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4085,
            "end": 4139
          }
        ],
        "start": 3603,
        "end": 4141
      },
      "abstract": false,
      "declare": false,
      "start": 3586,
      "end": 4141
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4141
}
```
