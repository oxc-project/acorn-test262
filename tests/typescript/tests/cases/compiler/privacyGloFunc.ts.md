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
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 169
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
                                  "start": 181,
                                  "end": 190
                                },
                                "typeArguments": null,
                                "start": 181,
                                "end": 190
                              },
                              "start": 179,
                              "end": 190
                            },
                            "start": 171,
                            "end": 190
                          }
                        ],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 170,
                        "end": 192
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 158,
                      "end": 192
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
                        "start": 201,
                        "end": 212
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
                                  "start": 224,
                                  "end": 234
                                },
                                "typeArguments": null,
                                "start": 224,
                                "end": 234
                              },
                              "start": 222,
                              "end": 234
                            },
                            "start": 214,
                            "end": 234
                          }
                        ],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 213,
                        "end": 236
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 201,
                      "end": 236
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
                        "start": 253,
                        "end": 264
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
                                "start": 278,
                                "end": 281
                              },
                              "start": 276,
                              "end": 281
                            },
                            "start": 266,
                            "end": 281
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 283,
                          "end": 294
                        },
                        "expression": false,
                        "start": 265,
                        "end": 294
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 253,
                      "end": 294
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
                        "start": 312,
                        "end": 322
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
                                  "start": 337,
                                  "end": 346
                                },
                                "typeArguments": null,
                                "start": 337,
                                "end": 346
                              },
                              "start": 335,
                              "end": 346
                            },
                            "start": 323,
                            "end": 346
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 348,
                          "end": 359
                        },
                        "expression": false,
                        "start": 322,
                        "end": 359
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 304,
                      "end": 359
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
                        "start": 376,
                        "end": 385
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
                                  "start": 400,
                                  "end": 409
                                },
                                "typeArguments": null,
                                "start": 400,
                                "end": 409
                              },
                              "start": 398,
                              "end": 409
                            },
                            "start": 386,
                            "end": 409
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 411,
                          "end": 422
                        },
                        "expression": false,
                        "start": 385,
                        "end": 422
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 369,
                      "end": 422
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
                        "start": 440,
                        "end": 450
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
                                  "start": 465,
                                  "end": 475
                                },
                                "typeArguments": null,
                                "start": 465,
                                "end": 475
                              },
                              "start": 463,
                              "end": 475
                            },
                            "start": 451,
                            "end": 475
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 477,
                          "end": 488
                        },
                        "expression": false,
                        "start": 450,
                        "end": 488
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 432,
                      "end": 488
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
                        "start": 505,
                        "end": 514
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
                                  "start": 529,
                                  "end": 539
                                },
                                "typeArguments": null,
                                "start": 529,
                                "end": 539
                              },
                              "start": 527,
                              "end": 539
                            },
                            "start": 515,
                            "end": 539
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 541,
                          "end": 561
                        },
                        "expression": false,
                        "start": 514,
                        "end": 561
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 498,
                      "end": 561
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
                        "start": 579,
                        "end": 589
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
                                  "start": 617,
                                  "end": 626
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 613,
                                "end": 628
                              },
                              "start": 606,
                              "end": 629
                            }
                          ],
                          "start": 592,
                          "end": 639
                        },
                        "expression": false,
                        "start": 589,
                        "end": 639
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 571,
                      "end": 639
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
                        "start": 656,
                        "end": 665
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
                                  "start": 693,
                                  "end": 702
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 689,
                                "end": 704
                              },
                              "start": 682,
                              "end": 705
                            }
                          ],
                          "start": 668,
                          "end": 715
                        },
                        "expression": false,
                        "start": 665,
                        "end": 715
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 649,
                      "end": 715
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
                        "start": 733,
                        "end": 743
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
                                  "start": 771,
                                  "end": 781
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 767,
                                "end": 783
                              },
                              "start": 760,
                              "end": 784
                            }
                          ],
                          "start": 746,
                          "end": 794
                        },
                        "expression": false,
                        "start": 743,
                        "end": 794
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 725,
                      "end": 794
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
                        "start": 811,
                        "end": 820
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
                                  "start": 848,
                                  "end": 858
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 844,
                                "end": 860
                              },
                              "start": 837,
                              "end": 861
                            }
                          ],
                          "start": 823,
                          "end": 881
                        },
                        "expression": false,
                        "start": 820,
                        "end": 881
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 804,
                      "end": 881
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
                        "start": 899,
                        "end": 909
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
                              "start": 913,
                              "end": 922
                            },
                            "typeArguments": null,
                            "start": 913,
                            "end": 922
                          },
                          "start": 911,
                          "end": 922
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
                                  "start": 948,
                                  "end": 957
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 944,
                                "end": 959
                              },
                              "start": 937,
                              "end": 960
                            }
                          ],
                          "start": 923,
                          "end": 970
                        },
                        "expression": false,
                        "start": 909,
                        "end": 970
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 891,
                      "end": 970
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
                        "start": 987,
                        "end": 997
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
                              "start": 1001,
                              "end": 1010
                            },
                            "typeArguments": null,
                            "start": 1001,
                            "end": 1010
                          },
                          "start": 999,
                          "end": 1010
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
                                  "start": 1036,
                                  "end": 1045
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1032,
                                "end": 1047
                              },
                              "start": 1025,
                              "end": 1048
                            }
                          ],
                          "start": 1011,
                          "end": 1058
                        },
                        "expression": false,
                        "start": 997,
                        "end": 1058
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 980,
                      "end": 1058
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
                        "start": 1076,
                        "end": 1087
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
                              "start": 1091,
                              "end": 1101
                            },
                            "typeArguments": null,
                            "start": 1091,
                            "end": 1101
                          },
                          "start": 1089,
                          "end": 1101
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
                                  "start": 1127,
                                  "end": 1137
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1123,
                                "end": 1139
                              },
                              "start": 1116,
                              "end": 1140
                            }
                          ],
                          "start": 1102,
                          "end": 1150
                        },
                        "expression": false,
                        "start": 1087,
                        "end": 1150
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 1068,
                      "end": 1150
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
                        "start": 1167,
                        "end": 1177
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
                              "start": 1181,
                              "end": 1191
                            },
                            "typeArguments": null,
                            "start": 1181,
                            "end": 1191
                          },
                          "start": 1179,
                          "end": 1191
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
                                  "start": 1226,
                                  "end": 1236
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1222,
                                "end": 1238
                              },
                              "start": 1215,
                              "end": 1239
                            }
                          ],
                          "start": 1192,
                          "end": 1257
                        },
                        "expression": false,
                        "start": 1177,
                        "end": 1257
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 1160,
                      "end": 1257
                    }
                  ],
                  "start": 148,
                  "end": 1263
                },
                "abstract": false,
                "declare": false,
                "start": 132,
                "end": 1263
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 125,
              "end": 1263
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
                "start": 1275,
                "end": 1285
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
                      "start": 1296,
                      "end": 1307
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
                                "start": 1319,
                                "end": 1328
                              },
                              "typeArguments": null,
                              "start": 1319,
                              "end": 1328
                            },
                            "start": 1317,
                            "end": 1328
                          },
                          "start": 1309,
                          "end": 1328
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1308,
                      "end": 1330
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1296,
                    "end": 1330
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
                      "start": 1339,
                      "end": 1350
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
                                "start": 1362,
                                "end": 1372
                              },
                              "typeArguments": null,
                              "start": 1362,
                              "end": 1372
                            },
                            "start": 1360,
                            "end": 1372
                          },
                          "start": 1352,
                          "end": 1372
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1351,
                      "end": 1374
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1339,
                    "end": 1374
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
                      "start": 1383,
                      "end": 1394
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
                              "start": 1408,
                              "end": 1411
                            },
                            "start": 1406,
                            "end": 1411
                          },
                          "start": 1396,
                          "end": 1411
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1413,
                        "end": 1424
                      },
                      "expression": false,
                      "start": 1395,
                      "end": 1424
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1383,
                    "end": 1424
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
                      "start": 1441,
                      "end": 1451
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
                                "start": 1466,
                                "end": 1475
                              },
                              "typeArguments": null,
                              "start": 1466,
                              "end": 1475
                            },
                            "start": 1464,
                            "end": 1475
                          },
                          "start": 1452,
                          "end": 1475
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1477,
                        "end": 1488
                      },
                      "expression": false,
                      "start": 1451,
                      "end": 1488
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1433,
                    "end": 1488
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
                      "start": 1505,
                      "end": 1514
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
                                "start": 1529,
                                "end": 1538
                              },
                              "typeArguments": null,
                              "start": 1529,
                              "end": 1538
                            },
                            "start": 1527,
                            "end": 1538
                          },
                          "start": 1515,
                          "end": 1538
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1540,
                        "end": 1551
                      },
                      "expression": false,
                      "start": 1514,
                      "end": 1551
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1498,
                    "end": 1551
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
                      "start": 1569,
                      "end": 1579
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
                                "start": 1594,
                                "end": 1604
                              },
                              "typeArguments": null,
                              "start": 1594,
                              "end": 1604
                            },
                            "start": 1592,
                            "end": 1604
                          },
                          "start": 1580,
                          "end": 1604
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1606,
                        "end": 1617
                      },
                      "expression": false,
                      "start": 1579,
                      "end": 1617
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1561,
                    "end": 1617
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
                      "start": 1634,
                      "end": 1643
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
                                "start": 1658,
                                "end": 1668
                              },
                              "typeArguments": null,
                              "start": 1658,
                              "end": 1668
                            },
                            "start": 1656,
                            "end": 1668
                          },
                          "start": 1644,
                          "end": 1668
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1670,
                        "end": 1681
                      },
                      "expression": false,
                      "start": 1643,
                      "end": 1681
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1627,
                    "end": 1681
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
                      "start": 1700,
                      "end": 1710
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
                                "start": 1738,
                                "end": 1747
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1734,
                              "end": 1749
                            },
                            "start": 1727,
                            "end": 1750
                          }
                        ],
                        "start": 1713,
                        "end": 1760
                      },
                      "expression": false,
                      "start": 1710,
                      "end": 1760
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1692,
                    "end": 1760
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
                      "start": 1777,
                      "end": 1786
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
                                "start": 1814,
                                "end": 1823
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1810,
                              "end": 1825
                            },
                            "start": 1803,
                            "end": 1826
                          }
                        ],
                        "start": 1789,
                        "end": 1836
                      },
                      "expression": false,
                      "start": 1786,
                      "end": 1836
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1770,
                    "end": 1836
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
                      "start": 1854,
                      "end": 1864
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
                                "start": 1892,
                                "end": 1902
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1888,
                              "end": 1904
                            },
                            "start": 1881,
                            "end": 1905
                          }
                        ],
                        "start": 1867,
                        "end": 1915
                      },
                      "expression": false,
                      "start": 1864,
                      "end": 1915
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1846,
                    "end": 1915
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
                      "start": 1932,
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
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1969,
                                "end": 1979
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1965,
                              "end": 1981
                            },
                            "start": 1958,
                            "end": 1982
                          }
                        ],
                        "start": 1944,
                        "end": 1992
                      },
                      "expression": false,
                      "start": 1941,
                      "end": 1992
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1925,
                    "end": 1992
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
                      "start": 2011,
                      "end": 2021
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
                            "start": 2025,
                            "end": 2034
                          },
                          "typeArguments": null,
                          "start": 2025,
                          "end": 2034
                        },
                        "start": 2023,
                        "end": 2034
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
                                "start": 2060,
                                "end": 2069
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2056,
                              "end": 2071
                            },
                            "start": 2049,
                            "end": 2072
                          }
                        ],
                        "start": 2035,
                        "end": 2082
                      },
                      "expression": false,
                      "start": 2021,
                      "end": 2082
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2003,
                    "end": 2082
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
                      "start": 2099,
                      "end": 2109
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
                            "start": 2113,
                            "end": 2122
                          },
                          "typeArguments": null,
                          "start": 2113,
                          "end": 2122
                        },
                        "start": 2111,
                        "end": 2122
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
                                "start": 2148,
                                "end": 2157
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2144,
                              "end": 2159
                            },
                            "start": 2137,
                            "end": 2160
                          }
                        ],
                        "start": 2123,
                        "end": 2170
                      },
                      "expression": false,
                      "start": 2109,
                      "end": 2170
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2092,
                    "end": 2170
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
                      "start": 2188,
                      "end": 2199
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
                            "start": 2203,
                            "end": 2213
                          },
                          "typeArguments": null,
                          "start": 2203,
                          "end": 2213
                        },
                        "start": 2201,
                        "end": 2213
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
                                "start": 2239,
                                "end": 2249
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2235,
                              "end": 2251
                            },
                            "start": 2228,
                            "end": 2252
                          }
                        ],
                        "start": 2214,
                        "end": 2262
                      },
                      "expression": false,
                      "start": 2199,
                      "end": 2262
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2180,
                    "end": 2262
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
                      "start": 2279,
                      "end": 2289
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
                            "start": 2293,
                            "end": 2303
                          },
                          "typeArguments": null,
                          "start": 2293,
                          "end": 2303
                        },
                        "start": 2291,
                        "end": 2303
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
                                "start": 2329,
                                "end": 2339
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2325,
                              "end": 2341
                            },
                            "start": 2318,
                            "end": 2342
                          }
                        ],
                        "start": 2304,
                        "end": 2352
                      },
                      "expression": false,
                      "start": 2289,
                      "end": 2352
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2272,
                    "end": 2352
                  }
                ],
                "start": 1286,
                "end": 2358
              },
              "abstract": false,
              "declare": false,
              "start": 1269,
              "end": 2358
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
                  "start": 2377,
                  "end": 2386
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
                        "start": 2397,
                        "end": 2408
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
                                  "start": 2419,
                                  "end": 2428
                                },
                                "typeArguments": null,
                                "start": 2419,
                                "end": 2428
                              },
                              "start": 2417,
                              "end": 2428
                            },
                            "start": 2410,
                            "end": 2428
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2430,
                          "end": 2441
                        },
                        "expression": false,
                        "start": 2409,
                        "end": 2441
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2397,
                      "end": 2441
                    }
                  ],
                  "start": 2387,
                  "end": 2447
                },
                "abstract": false,
                "declare": false,
                "start": 2371,
                "end": 2447
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2364,
              "end": 2447
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
                "start": 2463,
                "end": 2473
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
                      "start": 2484,
                      "end": 2495
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
                                "start": 2506,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2506,
                              "end": 2515
                            },
                            "start": 2504,
                            "end": 2515
                          },
                          "start": 2497,
                          "end": 2515
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2517,
                        "end": 2528
                      },
                      "expression": false,
                      "start": 2496,
                      "end": 2528
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2484,
                    "end": 2528
                  }
                ],
                "start": 2474,
                "end": 2534
              },
              "abstract": false,
              "declare": false,
              "start": 2457,
              "end": 2534
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
                  "start": 2552,
                  "end": 2561
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
                        "start": 2572,
                        "end": 2583
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
                                  "start": 2594,
                                  "end": 2604
                                },
                                "typeArguments": null,
                                "start": 2594,
                                "end": 2604
                              },
                              "start": 2592,
                              "end": 2604
                            },
                            "start": 2585,
                            "end": 2604
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2606,
                          "end": 2626
                        },
                        "expression": false,
                        "start": 2584,
                        "end": 2626
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2572,
                      "end": 2626
                    }
                  ],
                  "start": 2562,
                  "end": 2632
                },
                "abstract": false,
                "declare": false,
                "start": 2546,
                "end": 2632
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2539,
              "end": 2632
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
                "start": 2648,
                "end": 2658
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
                      "start": 2669,
                      "end": 2680
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
                                "start": 2691,
                                "end": 2701
                              },
                              "typeArguments": null,
                              "start": 2691,
                              "end": 2701
                            },
                            "start": 2689,
                            "end": 2701
                          },
                          "start": 2682,
                          "end": 2701
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2703,
                        "end": 2714
                      },
                      "expression": false,
                      "start": 2681,
                      "end": 2714
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2669,
                    "end": 2714
                  }
                ],
                "start": 2659,
                "end": 2720
              },
              "abstract": false,
              "declare": false,
              "start": 2642,
              "end": 2720
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2735,
                "end": 2744
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
                        "start": 2756,
                        "end": 2765
                      },
                      "typeArguments": null,
                      "start": 2756,
                      "end": 2765
                    },
                    "start": 2754,
                    "end": 2765
                  },
                  "start": 2745,
                  "end": 2765
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2767,
                "end": 2774
              },
              "expression": false,
              "start": 2726,
              "end": 2774
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
                  "start": 2796,
                  "end": 2805
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
                          "start": 2817,
                          "end": 2826
                        },
                        "typeArguments": null,
                        "start": 2817,
                        "end": 2826
                      },
                      "start": 2815,
                      "end": 2826
                    },
                    "start": 2806,
                    "end": 2826
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2828,
                  "end": 2835
                },
                "expression": false,
                "start": 2787,
                "end": 2835
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2780,
              "end": 2835
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2850,
                "end": 2859
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
                        "start": 2871,
                        "end": 2881
                      },
                      "typeArguments": null,
                      "start": 2871,
                      "end": 2881
                    },
                    "start": 2869,
                    "end": 2881
                  },
                  "start": 2860,
                  "end": 2881
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2883,
                "end": 2890
              },
              "expression": false,
              "start": 2841,
              "end": 2890
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
                  "start": 2912,
                  "end": 2921
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
                          "start": 2933,
                          "end": 2943
                        },
                        "typeArguments": null,
                        "start": 2933,
                        "end": 2943
                      },
                      "start": 2931,
                      "end": 2943
                    },
                    "start": 2922,
                    "end": 2943
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2945,
                  "end": 2961
                },
                "expression": false,
                "start": 2903,
                "end": 2961
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2896,
              "end": 2961
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2977,
                "end": 2986
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
                        "start": 3010,
                        "end": 3019
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3006,
                      "end": 3021
                    },
                    "start": 2999,
                    "end": 3022
                  }
                ],
                "start": 2989,
                "end": 3028
              },
              "expression": false,
              "start": 2968,
              "end": 3028
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
                  "start": 3050,
                  "end": 3059
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
                          "start": 3083,
                          "end": 3092
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3079,
                        "end": 3094
                      },
                      "start": 3072,
                      "end": 3095
                    }
                  ],
                  "start": 3062,
                  "end": 3101
                },
                "expression": false,
                "start": 3041,
                "end": 3101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3034,
              "end": 3101
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3116,
                "end": 3125
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
                        "start": 3149,
                        "end": 3159
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3145,
                      "end": 3161
                    },
                    "start": 3138,
                    "end": 3162
                  }
                ],
                "start": 3128,
                "end": 3168
              },
              "expression": false,
              "start": 3107,
              "end": 3168
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
                  "start": 3190,
                  "end": 3199
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
                          "start": 3223,
                          "end": 3233
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3219,
                        "end": 3235
                      },
                      "start": 3212,
                      "end": 3236
                    }
                  ],
                  "start": 3202,
                  "end": 3252
                },
                "expression": false,
                "start": 3181,
                "end": 3252
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3174,
              "end": 3252
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f9_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3268,
                "end": 3278
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
                    "start": 3282,
                    "end": 3291
                  },
                  "typeArguments": null,
                  "start": 3282,
                  "end": 3291
                },
                "start": 3280,
                "end": 3291
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
                        "start": 3313,
                        "end": 3322
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3309,
                      "end": 3324
                    },
                    "start": 3302,
                    "end": 3325
                  }
                ],
                "start": 3292,
                "end": 3331
              },
              "expression": false,
              "start": 3259,
              "end": 3331
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
                  "start": 3353,
                  "end": 3363
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
                      "start": 3367,
                      "end": 3376
                    },
                    "typeArguments": null,
                    "start": 3367,
                    "end": 3376
                  },
                  "start": 3365,
                  "end": 3376
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
                          "start": 3398,
                          "end": 3407
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3394,
                        "end": 3409
                      },
                      "start": 3387,
                      "end": 3410
                    }
                  ],
                  "start": 3377,
                  "end": 3416
                },
                "expression": false,
                "start": 3344,
                "end": 3416
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3337,
              "end": 3416
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f11_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3431,
                "end": 3442
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
                    "start": 3446,
                    "end": 3456
                  },
                  "typeArguments": null,
                  "start": 3446,
                  "end": 3456
                },
                "start": 3444,
                "end": 3456
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
                        "start": 3478,
                        "end": 3488
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3474,
                      "end": 3490
                    },
                    "start": 3467,
                    "end": 3491
                  }
                ],
                "start": 3457,
                "end": 3497
              },
              "expression": false,
              "start": 3422,
              "end": 3497
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
                  "start": 3519,
                  "end": 3529
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
                      "start": 3533,
                      "end": 3543
                    },
                    "typeArguments": null,
                    "start": 3533,
                    "end": 3543
                  },
                  "start": 3531,
                  "end": 3543
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
                          "start": 3574,
                          "end": 3584
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3570,
                        "end": 3586
                      },
                      "start": 3563,
                      "end": 3587
                    }
                  ],
                  "start": 3544,
                  "end": 3601
                },
                "expression": false,
                "start": 3510,
                "end": 3601
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3503,
              "end": 3601
            }
          ],
          "start": 20,
          "end": 3603
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3603
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3603
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3615,
        "end": 3617
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
                "start": 3637,
                "end": 3649
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
                      "start": 3668,
                      "end": 3669
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
                        "start": 3672,
                        "end": 3683
                      },
                      "expression": false,
                      "start": 3669,
                      "end": 3683
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 3660,
                    "end": 3683
                  }
                ],
                "start": 3650,
                "end": 3689
              },
              "abstract": false,
              "declare": false,
              "start": 3631,
              "end": 3689
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3624,
            "end": 3689
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
              "start": 3701,
              "end": 3714
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 3715,
              "end": 3722
            },
            "abstract": false,
            "declare": false,
            "start": 3695,
            "end": 3722
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
                "start": 3741,
                "end": 3753
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
                      "start": 3764,
                      "end": 3775
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
                                "start": 3787,
                                "end": 3799
                              },
                              "typeArguments": null,
                              "start": 3787,
                              "end": 3799
                            },
                            "start": 3785,
                            "end": 3799
                          },
                          "start": 3777,
                          "end": 3799
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3776,
                      "end": 3801
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3764,
                    "end": 3801
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
                      "start": 3810,
                      "end": 3821
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
                                "start": 3833,
                                "end": 3846
                              },
                              "typeArguments": null,
                              "start": 3833,
                              "end": 3846
                            },
                            "start": 3831,
                            "end": 3846
                          },
                          "start": 3823,
                          "end": 3846
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3822,
                      "end": 3848
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3810,
                    "end": 3848
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
                      "start": 3857,
                      "end": 3868
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
                              "start": 3882,
                              "end": 3885
                            },
                            "start": 3880,
                            "end": 3885
                          },
                          "start": 3870,
                          "end": 3885
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3887,
                        "end": 3898
                      },
                      "expression": false,
                      "start": 3869,
                      "end": 3898
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3857,
                    "end": 3898
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
                      "start": 3916,
                      "end": 3926
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
                                "start": 3941,
                                "end": 3953
                              },
                              "typeArguments": null,
                              "start": 3941,
                              "end": 3953
                            },
                            "start": 3939,
                            "end": 3953
                          },
                          "start": 3927,
                          "end": 3953
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3955,
                        "end": 3966
                      },
                      "expression": false,
                      "start": 3926,
                      "end": 3966
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 3908,
                    "end": 3966
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
                      "start": 3983,
                      "end": 3992
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
                                "start": 4007,
                                "end": 4019
                              },
                              "typeArguments": null,
                              "start": 4007,
                              "end": 4019
                            },
                            "start": 4005,
                            "end": 4019
                          },
                          "start": 3993,
                          "end": 4019
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4021,
                        "end": 4032
                      },
                      "expression": false,
                      "start": 3992,
                      "end": 4032
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3976,
                    "end": 4032
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
                      "start": 4050,
                      "end": 4060
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
                                "start": 4075,
                                "end": 4088
                              },
                              "typeArguments": null,
                              "start": 4075,
                              "end": 4088
                            },
                            "start": 4073,
                            "end": 4088
                          },
                          "start": 4061,
                          "end": 4088
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4090,
                        "end": 4101
                      },
                      "expression": false,
                      "start": 4060,
                      "end": 4101
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4042,
                    "end": 4101
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
                      "start": 4118,
                      "end": 4127
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
                                "start": 4142,
                                "end": 4155
                              },
                              "typeArguments": null,
                              "start": 4142,
                              "end": 4155
                            },
                            "start": 4140,
                            "end": 4155
                          },
                          "start": 4128,
                          "end": 4155
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4157,
                        "end": 4168
                      },
                      "expression": false,
                      "start": 4127,
                      "end": 4168
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4111,
                    "end": 4168
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
                      "start": 4186,
                      "end": 4196
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
                                "start": 4224,
                                "end": 4236
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4220,
                              "end": 4238
                            },
                            "start": 4213,
                            "end": 4239
                          }
                        ],
                        "start": 4199,
                        "end": 4249
                      },
                      "expression": false,
                      "start": 4196,
                      "end": 4249
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4178,
                    "end": 4249
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
                      "start": 4266,
                      "end": 4275
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
                                "start": 4303,
                                "end": 4315
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4299,
                              "end": 4317
                            },
                            "start": 4292,
                            "end": 4318
                          }
                        ],
                        "start": 4278,
                        "end": 4328
                      },
                      "expression": false,
                      "start": 4275,
                      "end": 4328
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4259,
                    "end": 4328
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
                      "start": 4346,
                      "end": 4356
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
                                "start": 4384,
                                "end": 4397
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4380,
                              "end": 4399
                            },
                            "start": 4373,
                            "end": 4400
                          }
                        ],
                        "start": 4359,
                        "end": 4410
                      },
                      "expression": false,
                      "start": 4356,
                      "end": 4410
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4338,
                    "end": 4410
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
                      "start": 4427,
                      "end": 4436
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
                                "start": 4464,
                                "end": 4477
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4460,
                              "end": 4479
                            },
                            "start": 4453,
                            "end": 4480
                          }
                        ],
                        "start": 4439,
                        "end": 4490
                      },
                      "expression": false,
                      "start": 4436,
                      "end": 4490
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4420,
                    "end": 4490
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
                      "start": 4508,
                      "end": 4518
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
                            "start": 4522,
                            "end": 4534
                          },
                          "typeArguments": null,
                          "start": 4522,
                          "end": 4534
                        },
                        "start": 4520,
                        "end": 4534
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
                                "start": 4560,
                                "end": 4572
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4556,
                              "end": 4574
                            },
                            "start": 4549,
                            "end": 4575
                          }
                        ],
                        "start": 4535,
                        "end": 4585
                      },
                      "expression": false,
                      "start": 4518,
                      "end": 4585
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4500,
                    "end": 4585
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
                      "start": 4602,
                      "end": 4612
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
                            "start": 4616,
                            "end": 4628
                          },
                          "typeArguments": null,
                          "start": 4616,
                          "end": 4628
                        },
                        "start": 4614,
                        "end": 4628
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
                                "start": 4654,
                                "end": 4666
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4650,
                              "end": 4668
                            },
                            "start": 4643,
                            "end": 4669
                          }
                        ],
                        "start": 4629,
                        "end": 4679
                      },
                      "expression": false,
                      "start": 4612,
                      "end": 4679
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4595,
                    "end": 4679
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
                      "start": 4697,
                      "end": 4708
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
                            "start": 4712,
                            "end": 4725
                          },
                          "typeArguments": null,
                          "start": 4712,
                          "end": 4725
                        },
                        "start": 4710,
                        "end": 4725
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
                                "start": 4751,
                                "end": 4764
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4747,
                              "end": 4766
                            },
                            "start": 4740,
                            "end": 4767
                          }
                        ],
                        "start": 4726,
                        "end": 4777
                      },
                      "expression": false,
                      "start": 4708,
                      "end": 4777
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4689,
                    "end": 4777
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
                      "start": 4794,
                      "end": 4804
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
                            "start": 4808,
                            "end": 4821
                          },
                          "typeArguments": null,
                          "start": 4808,
                          "end": 4821
                        },
                        "start": 4806,
                        "end": 4821
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
                                "start": 4847,
                                "end": 4860
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4843,
                              "end": 4862
                            },
                            "start": 4836,
                            "end": 4863
                          }
                        ],
                        "start": 4822,
                        "end": 4873
                      },
                      "expression": false,
                      "start": 4804,
                      "end": 4873
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4787,
                    "end": 4873
                  }
                ],
                "start": 3754,
                "end": 4879
              },
              "abstract": false,
              "declare": false,
              "start": 3735,
              "end": 4879
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3728,
            "end": 4879
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
              "start": 4891,
              "end": 4904
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
                    "start": 4915,
                    "end": 4926
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
                              "start": 4938,
                              "end": 4950
                            },
                            "typeArguments": null,
                            "start": 4938,
                            "end": 4950
                          },
                          "start": 4936,
                          "end": 4950
                        },
                        "start": 4928,
                        "end": 4950
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 4927,
                    "end": 4952
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4915,
                  "end": 4952
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
                    "start": 4961,
                    "end": 4972
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
                              "start": 4984,
                              "end": 4997
                            },
                            "typeArguments": null,
                            "start": 4984,
                            "end": 4997
                          },
                          "start": 4982,
                          "end": 4997
                        },
                        "start": 4974,
                        "end": 4997
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 4973,
                    "end": 4999
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4961,
                  "end": 4999
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
                    "start": 5008,
                    "end": 5019
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
                            "start": 5033,
                            "end": 5036
                          },
                          "start": 5031,
                          "end": 5036
                        },
                        "start": 5021,
                        "end": 5036
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5038,
                      "end": 5049
                    },
                    "expression": false,
                    "start": 5020,
                    "end": 5049
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5008,
                  "end": 5049
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
                    "start": 5067,
                    "end": 5077
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
                              "start": 5092,
                              "end": 5104
                            },
                            "typeArguments": null,
                            "start": 5092,
                            "end": 5104
                          },
                          "start": 5090,
                          "end": 5104
                        },
                        "start": 5078,
                        "end": 5104
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5106,
                      "end": 5117
                    },
                    "expression": false,
                    "start": 5077,
                    "end": 5117
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5059,
                  "end": 5117
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
                    "start": 5134,
                    "end": 5143
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
                              "start": 5158,
                              "end": 5170
                            },
                            "typeArguments": null,
                            "start": 5158,
                            "end": 5170
                          },
                          "start": 5156,
                          "end": 5170
                        },
                        "start": 5144,
                        "end": 5170
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5172,
                      "end": 5183
                    },
                    "expression": false,
                    "start": 5143,
                    "end": 5183
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5127,
                  "end": 5183
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
                    "start": 5201,
                    "end": 5211
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
                              "start": 5226,
                              "end": 5239
                            },
                            "typeArguments": null,
                            "start": 5226,
                            "end": 5239
                          },
                          "start": 5224,
                          "end": 5239
                        },
                        "start": 5212,
                        "end": 5239
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5241,
                      "end": 5252
                    },
                    "expression": false,
                    "start": 5211,
                    "end": 5252
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5193,
                  "end": 5252
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
                    "start": 5269,
                    "end": 5278
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
                              "start": 5293,
                              "end": 5306
                            },
                            "typeArguments": null,
                            "start": 5293,
                            "end": 5306
                          },
                          "start": 5291,
                          "end": 5306
                        },
                        "start": 5279,
                        "end": 5306
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5308,
                      "end": 5319
                    },
                    "expression": false,
                    "start": 5278,
                    "end": 5319
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5262,
                  "end": 5319
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
                    "start": 5338,
                    "end": 5348
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
                              "start": 5376,
                              "end": 5388
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5372,
                            "end": 5390
                          },
                          "start": 5365,
                          "end": 5391
                        }
                      ],
                      "start": 5351,
                      "end": 5401
                    },
                    "expression": false,
                    "start": 5348,
                    "end": 5401
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5330,
                  "end": 5401
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
                    "start": 5418,
                    "end": 5427
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
                              "start": 5455,
                              "end": 5467
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5451,
                            "end": 5469
                          },
                          "start": 5444,
                          "end": 5470
                        }
                      ],
                      "start": 5430,
                      "end": 5480
                    },
                    "expression": false,
                    "start": 5427,
                    "end": 5480
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5411,
                  "end": 5480
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
                    "start": 5498,
                    "end": 5508
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
                              "start": 5536,
                              "end": 5549
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5532,
                            "end": 5551
                          },
                          "start": 5525,
                          "end": 5552
                        }
                      ],
                      "start": 5511,
                      "end": 5562
                    },
                    "expression": false,
                    "start": 5508,
                    "end": 5562
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5490,
                  "end": 5562
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
                    "start": 5579,
                    "end": 5588
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
                              "start": 5616,
                              "end": 5629
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5612,
                            "end": 5631
                          },
                          "start": 5605,
                          "end": 5632
                        }
                      ],
                      "start": 5591,
                      "end": 5642
                    },
                    "expression": false,
                    "start": 5588,
                    "end": 5642
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5572,
                  "end": 5642
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
                    "start": 5661,
                    "end": 5671
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
                          "start": 5675,
                          "end": 5687
                        },
                        "typeArguments": null,
                        "start": 5675,
                        "end": 5687
                      },
                      "start": 5673,
                      "end": 5687
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
                              "start": 5713,
                              "end": 5725
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5709,
                            "end": 5727
                          },
                          "start": 5702,
                          "end": 5728
                        }
                      ],
                      "start": 5688,
                      "end": 5738
                    },
                    "expression": false,
                    "start": 5671,
                    "end": 5738
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5653,
                  "end": 5738
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
                    "start": 5755,
                    "end": 5765
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
                          "start": 5769,
                          "end": 5781
                        },
                        "typeArguments": null,
                        "start": 5769,
                        "end": 5781
                      },
                      "start": 5767,
                      "end": 5781
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
                              "start": 5807,
                              "end": 5819
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5803,
                            "end": 5821
                          },
                          "start": 5796,
                          "end": 5822
                        }
                      ],
                      "start": 5782,
                      "end": 5832
                    },
                    "expression": false,
                    "start": 5765,
                    "end": 5832
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5748,
                  "end": 5832
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
                    "start": 5850,
                    "end": 5861
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
                          "start": 5865,
                          "end": 5878
                        },
                        "typeArguments": null,
                        "start": 5865,
                        "end": 5878
                      },
                      "start": 5863,
                      "end": 5878
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
                              "start": 5904,
                              "end": 5917
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5900,
                            "end": 5919
                          },
                          "start": 5893,
                          "end": 5920
                        }
                      ],
                      "start": 5879,
                      "end": 5930
                    },
                    "expression": false,
                    "start": 5861,
                    "end": 5930
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5842,
                  "end": 5930
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
                    "start": 5947,
                    "end": 5957
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
                          "start": 5961,
                          "end": 5974
                        },
                        "typeArguments": null,
                        "start": 5961,
                        "end": 5974
                      },
                      "start": 5959,
                      "end": 5974
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
                              "start": 6000,
                              "end": 6013
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5996,
                            "end": 6015
                          },
                          "start": 5989,
                          "end": 6016
                        }
                      ],
                      "start": 5975,
                      "end": 6026
                    },
                    "expression": false,
                    "start": 5957,
                    "end": 6026
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5940,
                  "end": 6026
                }
              ],
              "start": 4905,
              "end": 6032
            },
            "abstract": false,
            "declare": false,
            "start": 4885,
            "end": 6032
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
                "start": 6051,
                "end": 6063
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
                      "start": 6074,
                      "end": 6085
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
                                "start": 6096,
                                "end": 6108
                              },
                              "typeArguments": null,
                              "start": 6096,
                              "end": 6108
                            },
                            "start": 6094,
                            "end": 6108
                          },
                          "start": 6087,
                          "end": 6108
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6110,
                        "end": 6121
                      },
                      "expression": false,
                      "start": 6086,
                      "end": 6121
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6074,
                    "end": 6121
                  }
                ],
                "start": 6064,
                "end": 6127
              },
              "abstract": false,
              "declare": false,
              "start": 6045,
              "end": 6127
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6038,
            "end": 6127
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
              "start": 6143,
              "end": 6156
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
                    "start": 6167,
                    "end": 6178
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
                              "start": 6189,
                              "end": 6201
                            },
                            "typeArguments": null,
                            "start": 6189,
                            "end": 6201
                          },
                          "start": 6187,
                          "end": 6201
                        },
                        "start": 6180,
                        "end": 6201
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6203,
                      "end": 6214
                    },
                    "expression": false,
                    "start": 6179,
                    "end": 6214
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6167,
                  "end": 6214
                }
              ],
              "start": 6157,
              "end": 6220
            },
            "abstract": false,
            "declare": false,
            "start": 6137,
            "end": 6220
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
                "start": 6238,
                "end": 6250
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
                      "start": 6261,
                      "end": 6272
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
                                "start": 6283,
                                "end": 6296
                              },
                              "typeArguments": null,
                              "start": 6283,
                              "end": 6296
                            },
                            "start": 6281,
                            "end": 6296
                          },
                          "start": 6274,
                          "end": 6296
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6298,
                        "end": 6310
                      },
                      "expression": false,
                      "start": 6273,
                      "end": 6310
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6261,
                    "end": 6310
                  }
                ],
                "start": 6251,
                "end": 6316
              },
              "abstract": false,
              "declare": false,
              "start": 6232,
              "end": 6316
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6225,
            "end": 6316
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
              "start": 6332,
              "end": 6345
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
                    "start": 6356,
                    "end": 6367
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
                              "start": 6378,
                              "end": 6391
                            },
                            "typeArguments": null,
                            "start": 6378,
                            "end": 6391
                          },
                          "start": 6376,
                          "end": 6391
                        },
                        "start": 6369,
                        "end": 6391
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6393,
                      "end": 6404
                    },
                    "expression": false,
                    "start": 6368,
                    "end": 6404
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6356,
                  "end": 6404
                }
              ],
              "start": 6346,
              "end": 6410
            },
            "abstract": false,
            "declare": false,
            "start": 6326,
            "end": 6410
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6425,
              "end": 6434
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
                      "start": 6446,
                      "end": 6458
                    },
                    "typeArguments": null,
                    "start": 6446,
                    "end": 6458
                  },
                  "start": 6444,
                  "end": 6458
                },
                "start": 6435,
                "end": 6458
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6460,
              "end": 6467
            },
            "expression": false,
            "start": 6416,
            "end": 6467
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
                "start": 6489,
                "end": 6498
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
                        "start": 6510,
                        "end": 6522
                      },
                      "typeArguments": null,
                      "start": 6510,
                      "end": 6522
                    },
                    "start": 6508,
                    "end": 6522
                  },
                  "start": 6499,
                  "end": 6522
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 6524,
                "end": 6531
              },
              "expression": false,
              "start": 6480,
              "end": 6531
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6473,
            "end": 6531
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6546,
              "end": 6555
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
                      "start": 6567,
                      "end": 6580
                    },
                    "typeArguments": null,
                    "start": 6567,
                    "end": 6580
                  },
                  "start": 6565,
                  "end": 6580
                },
                "start": 6556,
                "end": 6580
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6582,
              "end": 6589
            },
            "expression": false,
            "start": 6537,
            "end": 6589
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
                "start": 6611,
                "end": 6620
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
                        "start": 6632,
                        "end": 6645
                      },
                      "typeArguments": null,
                      "start": 6632,
                      "end": 6645
                    },
                    "start": 6630,
                    "end": 6645
                  },
                  "start": 6621,
                  "end": 6645
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 6647,
                "end": 6654
              },
              "expression": false,
              "start": 6602,
              "end": 6654
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6595,
            "end": 6654
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6670,
              "end": 6679
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
                      "start": 6703,
                      "end": 6715
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6699,
                    "end": 6717
                  },
                  "start": 6692,
                  "end": 6718
                }
              ],
              "start": 6682,
              "end": 6724
            },
            "expression": false,
            "start": 6661,
            "end": 6724
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
                "start": 6746,
                "end": 6755
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
                        "start": 6779,
                        "end": 6791
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 6775,
                      "end": 6793
                    },
                    "start": 6768,
                    "end": 6794
                  }
                ],
                "start": 6758,
                "end": 6800
              },
              "expression": false,
              "start": 6737,
              "end": 6800
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6730,
            "end": 6800
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f7_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6815,
              "end": 6824
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
                      "start": 6848,
                      "end": 6861
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6844,
                    "end": 6863
                  },
                  "start": 6837,
                  "end": 6864
                }
              ],
              "start": 6827,
              "end": 6870
            },
            "expression": false,
            "start": 6806,
            "end": 6870
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
                "start": 6892,
                "end": 6901
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
                        "start": 6925,
                        "end": 6938
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 6921,
                      "end": 6940
                    },
                    "start": 6914,
                    "end": 6941
                  }
                ],
                "start": 6904,
                "end": 6947
              },
              "expression": false,
              "start": 6883,
              "end": 6947
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6876,
            "end": 6947
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6963,
              "end": 6973
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
                  "start": 6977,
                  "end": 6989
                },
                "typeArguments": null,
                "start": 6977,
                "end": 6989
              },
              "start": 6975,
              "end": 6989
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
                      "start": 7011,
                      "end": 7023
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 7007,
                    "end": 7025
                  },
                  "start": 7000,
                  "end": 7026
                }
              ],
              "start": 6990,
              "end": 7032
            },
            "expression": false,
            "start": 6954,
            "end": 7032
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
                "start": 7054,
                "end": 7064
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
                    "start": 7068,
                    "end": 7080
                  },
                  "typeArguments": null,
                  "start": 7068,
                  "end": 7080
                },
                "start": 7066,
                "end": 7080
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
                        "start": 7102,
                        "end": 7114
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 7098,
                      "end": 7116
                    },
                    "start": 7091,
                    "end": 7117
                  }
                ],
                "start": 7081,
                "end": 7123
              },
              "expression": false,
              "start": 7045,
              "end": 7123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7038,
            "end": 7123
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7138,
              "end": 7149
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
                  "start": 7153,
                  "end": 7166
                },
                "typeArguments": null,
                "start": 7153,
                "end": 7166
              },
              "start": 7151,
              "end": 7166
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
                      "start": 7188,
                      "end": 7201
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 7184,
                    "end": 7203
                  },
                  "start": 7177,
                  "end": 7204
                }
              ],
              "start": 7167,
              "end": 7210
            },
            "expression": false,
            "start": 7129,
            "end": 7210
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
                "start": 7232,
                "end": 7242
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
                    "start": 7246,
                    "end": 7259
                  },
                  "typeArguments": null,
                  "start": 7246,
                  "end": 7259
                },
                "start": 7244,
                "end": 7259
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
                        "start": 7281,
                        "end": 7294
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 7277,
                      "end": 7296
                    },
                    "start": 7270,
                    "end": 7297
                  }
                ],
                "start": 7260,
                "end": 7303
              },
              "expression": false,
              "start": 7223,
              "end": 7303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7216,
            "end": 7303
          }
        ],
        "start": 3618,
        "end": 7305
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3605,
      "end": 7305
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
        "start": 7313,
        "end": 7323
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
              "start": 7338,
              "end": 7339
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
                "start": 7342,
                "end": 7349
              },
              "expression": false,
              "start": 7339,
              "end": 7349
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 7330,
            "end": 7349
          }
        ],
        "start": 7324,
        "end": 7351
      },
      "abstract": false,
      "declare": false,
      "start": 7307,
      "end": 7351
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
          "start": 7366,
          "end": 7375
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 7376,
          "end": 7379
        },
        "abstract": false,
        "declare": false,
        "start": 7360,
        "end": 7379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7353,
      "end": 7379
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
          "start": 7394,
          "end": 7403
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
                "start": 7410,
                "end": 7421
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
                          "start": 7430,
                          "end": 7440
                        },
                        "typeArguments": null,
                        "start": 7430,
                        "end": 7440
                      },
                      "start": 7428,
                      "end": 7440
                    },
                    "start": 7423,
                    "end": 7440
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 7422,
                "end": 7442
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7410,
              "end": 7442
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
                "start": 7456,
                "end": 7467
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
                          "start": 7476,
                          "end": 7485
                        },
                        "typeArguments": null,
                        "start": 7476,
                        "end": 7485
                      },
                      "start": 7474,
                      "end": 7485
                    },
                    "start": 7469,
                    "end": 7485
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 7468,
                "end": 7487
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7456,
              "end": 7487
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
                "start": 7492,
                "end": 7503
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
                        "start": 7514,
                        "end": 7517
                      },
                      "start": 7512,
                      "end": 7517
                    },
                    "start": 7505,
                    "end": 7517
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7519,
                  "end": 7526
                },
                "expression": false,
                "start": 7504,
                "end": 7526
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7492,
              "end": 7526
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
                "start": 7539,
                "end": 7549
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
                          "start": 7561,
                          "end": 7570
                        },
                        "typeArguments": null,
                        "start": 7561,
                        "end": 7570
                      },
                      "start": 7559,
                      "end": 7570
                    },
                    "start": 7550,
                    "end": 7570
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7572,
                  "end": 7579
                },
                "expression": false,
                "start": 7549,
                "end": 7579
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7531,
              "end": 7579
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
                "start": 7592,
                "end": 7601
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
                          "start": 7613,
                          "end": 7622
                        },
                        "typeArguments": null,
                        "start": 7613,
                        "end": 7622
                      },
                      "start": 7611,
                      "end": 7622
                    },
                    "start": 7602,
                    "end": 7622
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7624,
                  "end": 7631
                },
                "expression": false,
                "start": 7601,
                "end": 7631
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7585,
              "end": 7631
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
                "start": 7645,
                "end": 7655
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
                          "start": 7667,
                          "end": 7677
                        },
                        "typeArguments": null,
                        "start": 7667,
                        "end": 7677
                      },
                      "start": 7665,
                      "end": 7677
                    },
                    "start": 7656,
                    "end": 7677
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7679,
                  "end": 7686
                },
                "expression": false,
                "start": 7655,
                "end": 7686
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7637,
              "end": 7686
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
                "start": 7699,
                "end": 7708
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
                          "start": 7720,
                          "end": 7730
                        },
                        "typeArguments": null,
                        "start": 7720,
                        "end": 7730
                      },
                      "start": 7718,
                      "end": 7730
                    },
                    "start": 7709,
                    "end": 7730
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7732,
                  "end": 7747
                },
                "expression": false,
                "start": 7708,
                "end": 7747
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7692,
              "end": 7747
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
                "start": 7761,
                "end": 7771
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
                          "start": 7795,
                          "end": 7804
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7791,
                        "end": 7806
                      },
                      "start": 7784,
                      "end": 7807
                    }
                  ],
                  "start": 7774,
                  "end": 7813
                },
                "expression": false,
                "start": 7771,
                "end": 7813
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7753,
              "end": 7813
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
                "start": 7826,
                "end": 7835
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
                          "start": 7859,
                          "end": 7868
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7855,
                        "end": 7870
                      },
                      "start": 7848,
                      "end": 7871
                    }
                  ],
                  "start": 7838,
                  "end": 7877
                },
                "expression": false,
                "start": 7835,
                "end": 7877
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7819,
              "end": 7877
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
                "start": 7891,
                "end": 7901
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
                          "start": 7925,
                          "end": 7935
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7921,
                        "end": 7937
                      },
                      "start": 7914,
                      "end": 7938
                    }
                  ],
                  "start": 7904,
                  "end": 7944
                },
                "expression": false,
                "start": 7901,
                "end": 7944
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7883,
              "end": 7944
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
                "start": 7957,
                "end": 7966
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
                          "start": 7990,
                          "end": 8000
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7986,
                        "end": 8002
                      },
                      "start": 7979,
                      "end": 8003
                    }
                  ],
                  "start": 7969,
                  "end": 8017
                },
                "expression": false,
                "start": 7966,
                "end": 8017
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7950,
              "end": 8017
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
                "start": 8031,
                "end": 8041
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
                      "start": 8045,
                      "end": 8054
                    },
                    "typeArguments": null,
                    "start": 8045,
                    "end": 8054
                  },
                  "start": 8043,
                  "end": 8054
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
                          "start": 8076,
                          "end": 8085
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8072,
                        "end": 8087
                      },
                      "start": 8065,
                      "end": 8088
                    }
                  ],
                  "start": 8055,
                  "end": 8094
                },
                "expression": false,
                "start": 8041,
                "end": 8094
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 8023,
              "end": 8094
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
                "start": 8107,
                "end": 8117
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
                      "start": 8121,
                      "end": 8130
                    },
                    "typeArguments": null,
                    "start": 8121,
                    "end": 8130
                  },
                  "start": 8119,
                  "end": 8130
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
                          "start": 8152,
                          "end": 8161
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8148,
                        "end": 8163
                      },
                      "start": 8141,
                      "end": 8164
                    }
                  ],
                  "start": 8131,
                  "end": 8170
                },
                "expression": false,
                "start": 8117,
                "end": 8170
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 8100,
              "end": 8170
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
                "start": 8184,
                "end": 8195
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
                      "start": 8199,
                      "end": 8209
                    },
                    "typeArguments": null,
                    "start": 8199,
                    "end": 8209
                  },
                  "start": 8197,
                  "end": 8209
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
                          "start": 8231,
                          "end": 8241
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8227,
                        "end": 8243
                      },
                      "start": 8220,
                      "end": 8244
                    }
                  ],
                  "start": 8210,
                  "end": 8250
                },
                "expression": false,
                "start": 8195,
                "end": 8250
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 8176,
              "end": 8250
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
                "start": 8263,
                "end": 8273
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
                      "start": 8277,
                      "end": 8287
                    },
                    "typeArguments": null,
                    "start": 8277,
                    "end": 8287
                  },
                  "start": 8275,
                  "end": 8287
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
                          "start": 8317,
                          "end": 8327
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8313,
                        "end": 8329
                      },
                      "start": 8306,
                      "end": 8330
                    }
                  ],
                  "start": 8288,
                  "end": 8344
                },
                "expression": false,
                "start": 8273,
                "end": 8344
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 8256,
              "end": 8344
            }
          ],
          "start": 7404,
          "end": 8346
        },
        "abstract": false,
        "declare": false,
        "start": 7388,
        "end": 8346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7381,
      "end": 8346
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
        "start": 8354,
        "end": 8364
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
              "start": 8371,
              "end": 8382
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
                        "start": 8391,
                        "end": 8401
                      },
                      "typeArguments": null,
                      "start": 8391,
                      "end": 8401
                    },
                    "start": 8389,
                    "end": 8401
                  },
                  "start": 8384,
                  "end": 8401
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 8383,
              "end": 8403
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8371,
            "end": 8403
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
              "start": 8408,
              "end": 8419
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
                        "start": 8428,
                        "end": 8437
                      },
                      "typeArguments": null,
                      "start": 8428,
                      "end": 8437
                    },
                    "start": 8426,
                    "end": 8437
                  },
                  "start": 8421,
                  "end": 8437
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 8420,
              "end": 8439
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8408,
            "end": 8439
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
              "start": 8444,
              "end": 8455
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
                      "start": 8466,
                      "end": 8469
                    },
                    "start": 8464,
                    "end": 8469
                  },
                  "start": 8457,
                  "end": 8469
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8471,
                "end": 8478
              },
              "expression": false,
              "start": 8456,
              "end": 8478
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8444,
            "end": 8478
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
              "start": 8500,
              "end": 8510
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
                        "start": 8522,
                        "end": 8531
                      },
                      "typeArguments": null,
                      "start": 8522,
                      "end": 8531
                    },
                    "start": 8520,
                    "end": 8531
                  },
                  "start": 8511,
                  "end": 8531
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8533,
                "end": 8540
              },
              "expression": false,
              "start": 8510,
              "end": 8540
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8492,
            "end": 8540
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
              "start": 8553,
              "end": 8562
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
                        "start": 8574,
                        "end": 8583
                      },
                      "typeArguments": null,
                      "start": 8574,
                      "end": 8583
                    },
                    "start": 8572,
                    "end": 8583
                  },
                  "start": 8563,
                  "end": 8583
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8585,
                "end": 8592
              },
              "expression": false,
              "start": 8562,
              "end": 8592
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8546,
            "end": 8592
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
              "start": 8606,
              "end": 8616
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
                        "start": 8628,
                        "end": 8638
                      },
                      "typeArguments": null,
                      "start": 8628,
                      "end": 8638
                    },
                    "start": 8626,
                    "end": 8638
                  },
                  "start": 8617,
                  "end": 8638
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8640,
                "end": 8647
              },
              "expression": false,
              "start": 8616,
              "end": 8647
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8598,
            "end": 8647
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
              "start": 8660,
              "end": 8669
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
                        "start": 8681,
                        "end": 8691
                      },
                      "typeArguments": null,
                      "start": 8681,
                      "end": 8691
                    },
                    "start": 8679,
                    "end": 8691
                  },
                  "start": 8670,
                  "end": 8691
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8693,
                "end": 8700
              },
              "expression": false,
              "start": 8669,
              "end": 8700
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8653,
            "end": 8700
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
              "start": 8714,
              "end": 8724
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
                        "start": 8748,
                        "end": 8757
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8744,
                      "end": 8759
                    },
                    "start": 8737,
                    "end": 8760
                  }
                ],
                "start": 8727,
                "end": 8766
              },
              "expression": false,
              "start": 8724,
              "end": 8766
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8706,
            "end": 8766
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
              "start": 8779,
              "end": 8788
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
                        "start": 8812,
                        "end": 8821
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8808,
                      "end": 8823
                    },
                    "start": 8801,
                    "end": 8824
                  }
                ],
                "start": 8791,
                "end": 8830
              },
              "expression": false,
              "start": 8788,
              "end": 8830
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8772,
            "end": 8830
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
              "start": 8844,
              "end": 8854
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
                        "start": 8878,
                        "end": 8888
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8874,
                      "end": 8890
                    },
                    "start": 8867,
                    "end": 8891
                  }
                ],
                "start": 8857,
                "end": 8897
              },
              "expression": false,
              "start": 8854,
              "end": 8897
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8836,
            "end": 8897
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
              "start": 8910,
              "end": 8919
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
                        "start": 8943,
                        "end": 8953
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8939,
                      "end": 8955
                    },
                    "start": 8932,
                    "end": 8956
                  }
                ],
                "start": 8922,
                "end": 8962
              },
              "expression": false,
              "start": 8919,
              "end": 8962
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8903,
            "end": 8962
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
              "start": 8976,
              "end": 8986
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
                    "start": 8990,
                    "end": 8999
                  },
                  "typeArguments": null,
                  "start": 8990,
                  "end": 8999
                },
                "start": 8988,
                "end": 8999
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
                        "start": 9021,
                        "end": 9030
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9017,
                      "end": 9032
                    },
                    "start": 9010,
                    "end": 9033
                  }
                ],
                "start": 9000,
                "end": 9039
              },
              "expression": false,
              "start": 8986,
              "end": 9039
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8968,
            "end": 9039
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
              "start": 9052,
              "end": 9062
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
                    "start": 9066,
                    "end": 9075
                  },
                  "typeArguments": null,
                  "start": 9066,
                  "end": 9075
                },
                "start": 9064,
                "end": 9075
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
                        "start": 9097,
                        "end": 9106
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9093,
                      "end": 9108
                    },
                    "start": 9086,
                    "end": 9109
                  }
                ],
                "start": 9076,
                "end": 9115
              },
              "expression": false,
              "start": 9062,
              "end": 9115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 9045,
            "end": 9115
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
              "start": 9129,
              "end": 9140
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
                    "start": 9144,
                    "end": 9154
                  },
                  "typeArguments": null,
                  "start": 9144,
                  "end": 9154
                },
                "start": 9142,
                "end": 9154
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
                        "start": 9176,
                        "end": 9186
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9172,
                      "end": 9188
                    },
                    "start": 9165,
                    "end": 9189
                  }
                ],
                "start": 9155,
                "end": 9195
              },
              "expression": false,
              "start": 9140,
              "end": 9195
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 9121,
            "end": 9195
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
              "start": 9208,
              "end": 9218
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
                    "start": 9222,
                    "end": 9232
                  },
                  "typeArguments": null,
                  "start": 9222,
                  "end": 9232
                },
                "start": 9220,
                "end": 9232
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
                        "start": 9254,
                        "end": 9264
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9250,
                      "end": 9266
                    },
                    "start": 9243,
                    "end": 9267
                  }
                ],
                "start": 9233,
                "end": 9273
              },
              "expression": false,
              "start": 9218,
              "end": 9273
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 9201,
            "end": 9273
          }
        ],
        "start": 8365,
        "end": 9275
      },
      "abstract": false,
      "declare": false,
      "start": 8348,
      "end": 9275
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
          "start": 9291,
          "end": 9300
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
                "start": 9307,
                "end": 9318
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
                          "start": 9326,
                          "end": 9335
                        },
                        "typeArguments": null,
                        "start": 9326,
                        "end": 9335
                      },
                      "start": 9324,
                      "end": 9335
                    },
                    "start": 9320,
                    "end": 9335
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9337,
                  "end": 9344
                },
                "expression": false,
                "start": 9319,
                "end": 9344
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9307,
              "end": 9344
            }
          ],
          "start": 9301,
          "end": 9346
        },
        "abstract": false,
        "declare": false,
        "start": 9285,
        "end": 9346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9278,
      "end": 9346
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
        "start": 9358,
        "end": 9369
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
              "start": 9376,
              "end": 9387
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
                        "start": 9396,
                        "end": 9405
                      },
                      "typeArguments": null,
                      "start": 9396,
                      "end": 9405
                    },
                    "start": 9394,
                    "end": 9405
                  },
                  "start": 9389,
                  "end": 9405
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9407,
                "end": 9414
              },
              "expression": false,
              "start": 9388,
              "end": 9414
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 9376,
            "end": 9414
          }
        ],
        "start": 9370,
        "end": 9416
      },
      "abstract": false,
      "declare": false,
      "start": 9352,
      "end": 9416
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
          "start": 9430,
          "end": 9440
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
                "start": 9447,
                "end": 9458
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
                          "start": 9467,
                          "end": 9477
                        },
                        "typeArguments": null,
                        "start": 9467,
                        "end": 9477
                      },
                      "start": 9465,
                      "end": 9477
                    },
                    "start": 9460,
                    "end": 9477
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9479,
                  "end": 9495
                },
                "expression": false,
                "start": 9459,
                "end": 9495
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9447,
              "end": 9495
            }
          ],
          "start": 9441,
          "end": 9497
        },
        "abstract": false,
        "declare": false,
        "start": 9424,
        "end": 9497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9417,
      "end": 9497
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
        "start": 9509,
        "end": 9520
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
              "start": 9527,
              "end": 9538
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
                        "start": 9547,
                        "end": 9557
                      },
                      "typeArguments": null,
                      "start": 9547,
                      "end": 9557
                    },
                    "start": 9545,
                    "end": 9557
                  },
                  "start": 9540,
                  "end": 9557
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9559,
                "end": 9566
              },
              "expression": false,
              "start": 9539,
              "end": 9566
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 9527,
            "end": 9566
          }
        ],
        "start": 9521,
        "end": 9568
      },
      "abstract": false,
      "declare": false,
      "start": 9503,
      "end": 9568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9579,
        "end": 9589
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
                "start": 9598,
                "end": 9608
              },
              "typeArguments": null,
              "start": 9598,
              "end": 9608
            },
            "start": 9596,
            "end": 9608
          },
          "start": 9590,
          "end": 9608
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 9610,
        "end": 9613
      },
      "expression": false,
      "start": 9570,
      "end": 9613
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
          "start": 9631,
          "end": 9640
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
                  "start": 9649,
                  "end": 9659
                },
                "typeArguments": null,
                "start": 9649,
                "end": 9659
              },
              "start": 9647,
              "end": 9659
            },
            "start": 9641,
            "end": 9659
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 9661,
          "end": 9673
        },
        "expression": false,
        "start": 9622,
        "end": 9673
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9615,
      "end": 9673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9684,
        "end": 9694
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
                "start": 9703,
                "end": 9712
              },
              "typeArguments": null,
              "start": 9703,
              "end": 9712
            },
            "start": 9701,
            "end": 9712
          },
          "start": 9695,
          "end": 9712
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 9714,
        "end": 9717
      },
      "expression": false,
      "start": 9675,
      "end": 9717
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
          "start": 9735,
          "end": 9744
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
                  "start": 9753,
                  "end": 9762
                },
                "typeArguments": null,
                "start": 9753,
                "end": 9762
              },
              "start": 9751,
              "end": 9762
            },
            "start": 9745,
            "end": 9762
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 9764,
          "end": 9767
        },
        "expression": false,
        "start": 9726,
        "end": 9767
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9719,
      "end": 9767
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9778,
        "end": 9788
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
                "start": 9808,
                "end": 9817
              },
              "typeArguments": null,
              "arguments": [],
              "start": 9804,
              "end": 9819
            },
            "start": 9797,
            "end": 9820
          }
        ],
        "start": 9791,
        "end": 9822
      },
      "expression": false,
      "start": 9769,
      "end": 9822
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
          "start": 9840,
          "end": 9849
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
                  "start": 9869,
                  "end": 9878
                },
                "typeArguments": null,
                "arguments": [],
                "start": 9865,
                "end": 9880
              },
              "start": 9858,
              "end": 9881
            }
          ],
          "start": 9852,
          "end": 9883
        },
        "expression": false,
        "start": 9831,
        "end": 9883
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9824,
      "end": 9883
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9894,
        "end": 9904
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
                "start": 9924,
                "end": 9934
              },
              "typeArguments": null,
              "arguments": [],
              "start": 9920,
              "end": 9936
            },
            "start": 9913,
            "end": 9937
          }
        ],
        "start": 9907,
        "end": 9939
      },
      "expression": false,
      "start": 9885,
      "end": 9939
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
          "start": 9957,
          "end": 9966
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
                  "start": 9986,
                  "end": 9996
                },
                "typeArguments": null,
                "arguments": [],
                "start": 9982,
                "end": 9998
              },
              "start": 9975,
              "end": 9999
            }
          ],
          "start": 9969,
          "end": 10009
        },
        "expression": false,
        "start": 9948,
        "end": 10009
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9941,
      "end": 10009
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 10020,
        "end": 10030
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
            "start": 10034,
            "end": 10043
          },
          "typeArguments": null,
          "start": 10034,
          "end": 10043
        },
        "start": 10032,
        "end": 10043
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
                "start": 10061,
                "end": 10070
              },
              "typeArguments": null,
              "arguments": [],
              "start": 10057,
              "end": 10072
            },
            "start": 10050,
            "end": 10073
          }
        ],
        "start": 10044,
        "end": 10075
      },
      "expression": false,
      "start": 10011,
      "end": 10075
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
          "start": 10093,
          "end": 10103
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
              "start": 10107,
              "end": 10116
            },
            "typeArguments": null,
            "start": 10107,
            "end": 10116
          },
          "start": 10105,
          "end": 10116
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
                  "start": 10134,
                  "end": 10143
                },
                "typeArguments": null,
                "arguments": [],
                "start": 10130,
                "end": 10145
              },
              "start": 10123,
              "end": 10146
            }
          ],
          "start": 10117,
          "end": 10148
        },
        "expression": false,
        "start": 10084,
        "end": 10148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10077,
      "end": 10148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 10159,
        "end": 10170
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
            "start": 10174,
            "end": 10184
          },
          "typeArguments": null,
          "start": 10174,
          "end": 10184
        },
        "start": 10172,
        "end": 10184
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
                "start": 10202,
                "end": 10212
              },
              "typeArguments": null,
              "arguments": [],
              "start": 10198,
              "end": 10214
            },
            "start": 10191,
            "end": 10215
          }
        ],
        "start": 10185,
        "end": 10217
      },
      "expression": false,
      "start": 10150,
      "end": 10217
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
          "start": 10235,
          "end": 10245
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
              "start": 10249,
              "end": 10259
            },
            "typeArguments": null,
            "start": 10249,
            "end": 10259
          },
          "start": 10247,
          "end": 10259
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
                  "start": 10286,
                  "end": 10296
                },
                "typeArguments": null,
                "arguments": [],
                "start": 10282,
                "end": 10298
              },
              "start": 10275,
              "end": 10299
            }
          ],
          "start": 10260,
          "end": 10309
        },
        "expression": false,
        "start": 10226,
        "end": 10309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10219,
      "end": 10309
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10309
}
```
