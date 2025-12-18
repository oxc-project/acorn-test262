__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100,
    "range": [
      95,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 101,
    "end": 111,
    "range": [
      101,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137,
    "range": [
      132,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 138,
    "end": 147,
    "range": [
      138,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 158,
    "end": 169,
    "range": [
      158,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c1",
    "start": 171,
    "end": 179,
    "range": [
      171,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 181,
    "end": 190,
    "range": [
      181,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 201,
    "end": 212,
    "range": [
      201,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c2",
    "start": 214,
    "end": 222,
    "range": [
      214,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 224,
    "end": 234,
    "range": [
      224,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 253,
    "end": 264,
    "range": [
      253,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c1_2",
    "start": 266,
    "end": 276,
    "range": [
      266,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 304,
    "end": 311,
    "range": [
      304,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 312,
    "end": 322,
    "range": [
      312,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f1_arg",
    "start": 323,
    "end": 335,
    "range": [
      323,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 337,
    "end": 346,
    "range": [
      337,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 369,
    "end": 375,
    "range": [
      369,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 376,
    "end": 385,
    "range": [
      376,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f2_arg",
    "start": 386,
    "end": 398,
    "range": [
      386,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 400,
    "end": 409,
    "range": [
      400,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 432,
    "end": 439,
    "range": [
      432,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 440,
    "end": 450,
    "range": [
      440,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f3_arg",
    "start": 451,
    "end": 463,
    "range": [
      451,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 465,
    "end": 475,
    "range": [
      465,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 505,
    "end": 514,
    "range": [
      505,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f4_arg",
    "start": 515,
    "end": 527,
    "range": [
      515,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 529,
    "end": 539,
    "range": [
      529,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 571,
    "end": 578,
    "range": [
      571,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 579,
    "end": 589,
    "range": [
      579,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 606,
    "end": 612,
    "range": [
      606,
      612
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 613,
    "end": 616,
    "range": [
      613,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
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
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 649,
    "end": 655,
    "range": [
      649,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 656,
    "end": 665,
    "range": [
      656,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 682,
    "end": 688,
    "range": [
      682,
      688
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 689,
    "end": 692,
    "range": [
      689,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 693,
    "end": 702,
    "range": [
      693,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 725,
    "end": 732,
    "range": [
      725,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 733,
    "end": 743,
    "range": [
      733,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 760,
    "end": 766,
    "range": [
      760,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 767,
    "end": 770,
    "range": [
      767,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 771,
    "end": 781,
    "range": [
      771,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 804,
    "end": 810,
    "range": [
      804,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 811,
    "end": 820,
    "range": [
      811,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 844,
    "end": 847,
    "range": [
      844,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 848,
    "end": 858,
    "range": [
      848,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 891,
    "end": 898,
    "range": [
      891,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 899,
    "end": 909,
    "range": [
      899,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 913,
    "end": 922,
    "range": [
      913,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 937,
    "end": 943,
    "range": [
      937,
      943
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 944,
    "end": 947,
    "range": [
      944,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 948,
    "end": 957,
    "range": [
      948,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 980,
    "end": 986,
    "range": [
      980,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 987,
    "end": 997,
    "range": [
      987,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1001,
    "end": 1010,
    "range": [
      1001,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1025,
    "end": 1031,
    "range": [
      1025,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1032,
    "end": 1035,
    "range": [
      1032,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1036,
    "end": 1045,
    "range": [
      1036,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1068,
    "end": 1075,
    "range": [
      1068,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 1076,
    "end": 1087,
    "range": [
      1076,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1091,
    "end": 1101,
    "range": [
      1091,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1116,
    "end": 1122,
    "range": [
      1116,
      1122
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1123,
    "end": 1126,
    "range": [
      1123,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1127,
    "end": 1137,
    "range": [
      1127,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1160,
    "end": 1166,
    "range": [
      1160,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 1167,
    "end": 1177,
    "range": [
      1167,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1181,
    "end": 1191,
    "range": [
      1181,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1215,
    "end": 1221,
    "range": [
      1215,
      1221
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225,
    "range": [
      1222,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1226,
    "end": 1236,
    "range": [
      1226,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1269,
    "end": 1274,
    "range": [
      1269,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 1275,
    "end": 1285,
    "range": [
      1275,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1296,
    "end": 1307,
    "range": [
      1296,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c1",
    "start": 1309,
    "end": 1317,
    "range": [
      1309,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1319,
    "end": 1328,
    "range": [
      1319,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1339,
    "end": 1350,
    "range": [
      1339,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c2",
    "start": 1352,
    "end": 1360,
    "range": [
      1352,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1362,
    "end": 1372,
    "range": [
      1362,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1383,
    "end": 1394,
    "range": [
      1383,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c1_2",
    "start": 1396,
    "end": 1406,
    "range": [
      1396,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1433,
    "end": 1440,
    "range": [
      1433,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 1441,
    "end": 1451,
    "range": [
      1441,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f1_arg",
    "start": 1452,
    "end": 1464,
    "range": [
      1452,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1466,
    "end": 1475,
    "range": [
      1466,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1498,
    "end": 1504,
    "range": [
      1498,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 1505,
    "end": 1514,
    "range": [
      1505,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f2_arg",
    "start": 1515,
    "end": 1527,
    "range": [
      1515,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1529,
    "end": 1538,
    "range": [
      1529,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1561,
    "end": 1568,
    "range": [
      1561,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 1569,
    "end": 1579,
    "range": [
      1569,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f3_arg",
    "start": 1580,
    "end": 1592,
    "range": [
      1580,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1594,
    "end": 1604,
    "range": [
      1594,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1627,
    "end": 1633,
    "range": [
      1627,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 1634,
    "end": 1643,
    "range": [
      1634,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f4_arg",
    "start": 1644,
    "end": 1656,
    "range": [
      1644,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1658,
    "end": 1668,
    "range": [
      1658,
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
    "value": "{",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1692,
    "end": 1699,
    "range": [
      1692,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 1700,
    "end": 1710,
    "range": [
      1700,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1727,
    "end": 1733,
    "range": [
      1727,
      1733
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1734,
    "end": 1737,
    "range": [
      1734,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1738,
    "end": 1747,
    "range": [
      1738,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1770,
    "end": 1776,
    "range": [
      1770,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 1777,
    "end": 1786,
    "range": [
      1777,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1803,
    "end": 1809,
    "range": [
      1803,
      1809
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1810,
    "end": 1813,
    "range": [
      1810,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1814,
    "end": 1823,
    "range": [
      1814,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1846,
    "end": 1853,
    "range": [
      1846,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 1854,
    "end": 1864,
    "range": [
      1854,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1881,
    "end": 1887,
    "range": [
      1881,
      1887
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1888,
    "end": 1891,
    "range": [
      1888,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1892,
    "end": 1902,
    "range": [
      1892,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1925,
    "end": 1931,
    "range": [
      1925,
      1931
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 1932,
    "end": 1941,
    "range": [
      1932,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1958,
    "end": 1964,
    "range": [
      1958,
      1964
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1965,
    "end": 1968,
    "range": [
      1965,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1969,
    "end": 1979,
    "range": [
      1969,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2003,
    "end": 2010,
    "range": [
      2003,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 2011,
    "end": 2021,
    "range": [
      2011,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2025,
    "end": 2034,
    "range": [
      2025,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2049,
    "end": 2055,
    "range": [
      2049,
      2055
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2056,
    "end": 2059,
    "range": [
      2056,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2060,
    "end": 2069,
    "range": [
      2060,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2092,
    "end": 2098,
    "range": [
      2092,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 2099,
    "end": 2109,
    "range": [
      2099,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2113,
    "end": 2122,
    "range": [
      2113,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2137,
    "end": 2143,
    "range": [
      2137,
      2143
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2144,
    "end": 2147,
    "range": [
      2144,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2148,
    "end": 2157,
    "range": [
      2148,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2180,
    "end": 2187,
    "range": [
      2180,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 2188,
    "end": 2199,
    "range": [
      2188,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2203,
    "end": 2213,
    "range": [
      2203,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2228,
    "end": 2234,
    "range": [
      2228,
      2234
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2235,
    "end": 2238,
    "range": [
      2235,
      2238
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2239,
    "end": 2249,
    "range": [
      2239,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2272,
    "end": 2278,
    "range": [
      2272,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 2279,
    "end": 2289,
    "range": [
      2279,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2293,
    "end": 2303,
    "range": [
      2293,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2318,
    "end": 2324,
    "range": [
      2318,
      2324
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2325,
    "end": 2328,
    "range": [
      2325,
      2328
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2329,
    "end": 2339,
    "range": [
      2329,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2364,
    "end": 2370,
    "range": [
      2364,
      2370
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2371,
    "end": 2376,
    "range": [
      2371,
      2376
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2377,
    "end": 2386,
    "range": [
      2377,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2397,
    "end": 2408,
    "range": [
      2397,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c5_c",
    "start": 2410,
    "end": 2417,
    "range": [
      2410,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2419,
    "end": 2428,
    "range": [
      2419,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2457,
    "end": 2462,
    "range": [
      2457,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2463,
    "end": 2473,
    "range": [
      2463,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2484,
    "end": 2495,
    "range": [
      2484,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c6_c",
    "start": 2497,
    "end": 2504,
    "range": [
      2497,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2506,
    "end": 2515,
    "range": [
      2506,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2517,
    "end": 2518,
    "range": [
      2517,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2539,
    "end": 2545,
    "range": [
      2539,
      2545
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2546,
    "end": 2551,
    "range": [
      2546,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 2552,
    "end": 2561,
    "range": [
      2552,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2572,
    "end": 2583,
    "range": [
      2572,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c7_c",
    "start": 2585,
    "end": 2592,
    "range": [
      2585,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2594,
    "end": 2604,
    "range": [
      2594,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2642,
    "end": 2647,
    "range": [
      2642,
      2647
    ]
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 2648,
    "end": 2658,
    "range": [
      2648,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2669,
    "end": 2680,
    "range": [
      2669,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_c8_c",
    "start": 2682,
    "end": 2689,
    "range": [
      2682,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2691,
    "end": 2701,
    "range": [
      2691,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2726,
    "end": 2734,
    "range": [
      2726,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_public",
    "start": 2735,
    "end": 2744,
    "range": [
      2735,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_f1_arg",
    "start": 2745,
    "end": 2754,
    "range": [
      2745,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2756,
    "end": 2765,
    "range": [
      2756,
      2765
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2780,
    "end": 2786,
    "range": [
      2780,
      2786
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2787,
    "end": 2795,
    "range": [
      2787,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 2796,
    "end": 2805,
    "range": [
      2796,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_f2_arg",
    "start": 2806,
    "end": 2815,
    "range": [
      2806,
      2815
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2817,
    "end": 2826,
    "range": [
      2817,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2841,
    "end": 2849,
    "range": [
      2841,
      2849
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_public",
    "start": 2850,
    "end": 2859,
    "range": [
      2850,
      2859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_f3_arg",
    "start": 2860,
    "end": 2869,
    "range": [
      2860,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2871,
    "end": 2881,
    "range": [
      2871,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2896,
    "end": 2902,
    "range": [
      2896,
      2902
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2903,
    "end": 2911,
    "range": [
      2903,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 2912,
    "end": 2921,
    "range": [
      2912,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Identifier",
    "value": "m1_f4_arg",
    "start": 2922,
    "end": 2931,
    "range": [
      2922,
      2931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2933,
    "end": 2943,
    "range": [
      2933,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2960,
    "end": 2961,
    "range": [
      2960,
      2961
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2968,
    "end": 2976,
    "range": [
      2968,
      2976
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_public",
    "start": 2977,
    "end": 2986,
    "range": [
      2977,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2989,
    "end": 2990,
    "range": [
      2989,
      2990
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2999,
    "end": 3005,
    "range": [
      2999,
      3005
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3006,
    "end": 3009,
    "range": [
      3006,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3010,
    "end": 3019,
    "range": [
      3010,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3034,
    "end": 3040,
    "range": [
      3034,
      3040
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3041,
    "end": 3049,
    "range": [
      3041,
      3049
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 3050,
    "end": 3059,
    "range": [
      3050,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3072,
    "end": 3078,
    "range": [
      3072,
      3078
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3079,
    "end": 3082,
    "range": [
      3079,
      3082
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3083,
    "end": 3092,
    "range": [
      3083,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3093,
    "end": 3094,
    "range": [
      3093,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3107,
    "end": 3115,
    "range": [
      3107,
      3115
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_public",
    "start": 3116,
    "end": 3125,
    "range": [
      3116,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3138,
    "end": 3144,
    "range": [
      3138,
      3144
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3145,
    "end": 3148,
    "range": [
      3145,
      3148
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3149,
    "end": 3159,
    "range": [
      3149,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3174,
    "end": 3180,
    "range": [
      3174,
      3180
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3181,
    "end": 3189,
    "range": [
      3181,
      3189
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 3190,
    "end": 3199,
    "range": [
      3190,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3200,
    "end": 3201,
    "range": [
      3200,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3212,
    "end": 3218,
    "range": [
      3212,
      3218
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3219,
    "end": 3222,
    "range": [
      3219,
      3222
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3223,
    "end": 3233,
    "range": [
      3223,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3259,
    "end": 3267,
    "range": [
      3259,
      3267
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 3268,
    "end": 3278,
    "range": [
      3268,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3282,
    "end": 3291,
    "range": [
      3282,
      3291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3302,
    "end": 3308,
    "range": [
      3302,
      3308
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3309,
    "end": 3312,
    "range": [
      3309,
      3312
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3313,
    "end": 3322,
    "range": [
      3313,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3337,
    "end": 3343,
    "range": [
      3337,
      3343
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3344,
    "end": 3352,
    "range": [
      3344,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 3353,
    "end": 3363,
    "range": [
      3353,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3363,
    "end": 3364,
    "range": [
      3363,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3367,
    "end": 3376,
    "range": [
      3367,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3387,
    "end": 3393,
    "range": [
      3387,
      3393
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3394,
    "end": 3397,
    "range": [
      3394,
      3397
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3398,
    "end": 3407,
    "range": [
      3398,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3408,
    "end": 3409,
    "range": [
      3408,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3409,
    "end": 3410,
    "range": [
      3409,
      3410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3422,
    "end": 3430,
    "range": [
      3422,
      3430
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 3431,
    "end": 3442,
    "range": [
      3431,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3446,
    "end": 3456,
    "range": [
      3446,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3457,
    "end": 3458,
    "range": [
      3457,
      3458
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3467,
    "end": 3473,
    "range": [
      3467,
      3473
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3474,
    "end": 3477,
    "range": [
      3474,
      3477
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3478,
    "end": 3488,
    "range": [
      3478,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3490,
    "end": 3491,
    "range": [
      3490,
      3491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3503,
    "end": 3509,
    "range": [
      3503,
      3509
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3510,
    "end": 3518,
    "range": [
      3510,
      3518
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 3519,
    "end": 3529,
    "range": [
      3519,
      3529
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3533,
    "end": 3543,
    "range": [
      3533,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3544,
    "end": 3545,
    "range": [
      3544,
      3545
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3563,
    "end": 3569,
    "range": [
      3563,
      3569
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3570,
    "end": 3573,
    "range": [
      3570,
      3573
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3574,
    "end": 3584,
    "range": [
      3574,
      3584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3600,
    "end": 3601,
    "range": [
      3600,
      3601
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603,
    "range": [
      3602,
      3603
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3605,
    "end": 3614,
    "range": [
      3605,
      3614
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 3615,
    "end": 3617,
    "range": [
      3615,
      3617
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3618,
    "end": 3619,
    "range": [
      3618,
      3619
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3624,
    "end": 3630,
    "range": [
      3624,
      3630
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3631,
    "end": 3636,
    "range": [
      3631,
      3636
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3637,
    "end": 3649,
    "range": [
      3637,
      3649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3660,
    "end": 3667,
    "range": [
      3660,
      3667
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3672,
    "end": 3673,
    "range": [
      3672,
      3673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3695,
    "end": 3700,
    "range": [
      3695,
      3700
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3701,
    "end": 3714,
    "range": [
      3701,
      3714
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3715,
    "end": 3716,
    "range": [
      3715,
      3716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3728,
    "end": 3734,
    "range": [
      3728,
      3734
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3735,
    "end": 3740,
    "range": [
      3735,
      3740
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C3_public",
    "start": 3741,
    "end": 3753,
    "range": [
      3741,
      3753
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3754,
    "end": 3755,
    "range": [
      3754,
      3755
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3764,
    "end": 3775,
    "range": [
      3764,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_c1",
    "start": 3777,
    "end": 3785,
    "range": [
      3777,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3787,
    "end": 3799,
    "range": [
      3787,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3800,
    "end": 3801,
    "range": [
      3800,
      3801
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3810,
    "end": 3821,
    "range": [
      3810,
      3821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3822,
    "end": 3823,
    "range": [
      3822,
      3823
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_c2",
    "start": 3823,
    "end": 3831,
    "range": [
      3823,
      3831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3833,
    "end": 3846,
    "range": [
      3833,
      3846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3846,
    "end": 3847,
    "range": [
      3846,
      3847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3847,
    "end": 3848,
    "range": [
      3847,
      3848
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3857,
    "end": 3868,
    "range": [
      3857,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_c1_2",
    "start": 3870,
    "end": 3880,
    "range": [
      3870,
      3880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3880,
    "end": 3881,
    "range": [
      3880,
      3881
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3882,
    "end": 3885,
    "range": [
      3882,
      3885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3897,
    "end": 3898,
    "range": [
      3897,
      3898
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3908,
    "end": 3915,
    "range": [
      3908,
      3915
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 3916,
    "end": 3926,
    "range": [
      3916,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f1_arg",
    "start": 3927,
    "end": 3939,
    "range": [
      3927,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3939,
    "end": 3940,
    "range": [
      3939,
      3940
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3941,
    "end": 3953,
    "range": [
      3941,
      3953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3953,
    "end": 3954,
    "range": [
      3953,
      3954
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3976,
    "end": 3982,
    "range": [
      3976,
      3982
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 3983,
    "end": 3992,
    "range": [
      3983,
      3992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f2_arg",
    "start": 3993,
    "end": 4005,
    "range": [
      3993,
      4005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4005,
    "end": 4006,
    "range": [
      4005,
      4006
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4007,
    "end": 4019,
    "range": [
      4007,
      4019
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4019,
    "end": 4020,
    "range": [
      4019,
      4020
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4021,
    "end": 4022,
    "range": [
      4021,
      4022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4042,
    "end": 4049,
    "range": [
      4042,
      4049
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 4050,
    "end": 4060,
    "range": [
      4050,
      4060
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f3_arg",
    "start": 4061,
    "end": 4073,
    "range": [
      4061,
      4073
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4073,
    "end": 4074,
    "range": [
      4073,
      4074
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4075,
    "end": 4088,
    "range": [
      4075,
      4088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4088,
    "end": 4089,
    "range": [
      4088,
      4089
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4090,
    "end": 4091,
    "range": [
      4090,
      4091
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4100,
    "end": 4101,
    "range": [
      4100,
      4101
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4111,
    "end": 4117,
    "range": [
      4111,
      4117
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 4118,
    "end": 4127,
    "range": [
      4118,
      4127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f4_arg",
    "start": 4128,
    "end": 4140,
    "range": [
      4128,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4140,
    "end": 4141,
    "range": [
      4140,
      4141
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4142,
    "end": 4155,
    "range": [
      4142,
      4155
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4155,
    "end": 4156,
    "range": [
      4155,
      4156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4157,
    "end": 4158,
    "range": [
      4157,
      4158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4167,
    "end": 4168,
    "range": [
      4167,
      4168
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4178,
    "end": 4185,
    "range": [
      4178,
      4185
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 4186,
    "end": 4196,
    "range": [
      4186,
      4196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4196,
    "end": 4197,
    "range": [
      4196,
      4197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4197,
    "end": 4198,
    "range": [
      4197,
      4198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4199,
    "end": 4200,
    "range": [
      4199,
      4200
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4213,
    "end": 4219,
    "range": [
      4213,
      4219
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4220,
    "end": 4223,
    "range": [
      4220,
      4223
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4224,
    "end": 4236,
    "range": [
      4224,
      4236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4237,
    "end": 4238,
    "range": [
      4237,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4248,
    "end": 4249,
    "range": [
      4248,
      4249
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4259,
    "end": 4265,
    "range": [
      4259,
      4265
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 4266,
    "end": 4275,
    "range": [
      4266,
      4275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276,
    "range": [
      4275,
      4276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4276,
    "end": 4277,
    "range": [
      4276,
      4277
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4278,
    "end": 4279,
    "range": [
      4278,
      4279
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4292,
    "end": 4298,
    "range": [
      4292,
      4298
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4299,
    "end": 4302,
    "range": [
      4299,
      4302
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4303,
    "end": 4315,
    "range": [
      4303,
      4315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4315,
    "end": 4316,
    "range": [
      4315,
      4316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4316,
    "end": 4317,
    "range": [
      4316,
      4317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4317,
    "end": 4318,
    "range": [
      4317,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4327,
    "end": 4328,
    "range": [
      4327,
      4328
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4338,
    "end": 4345,
    "range": [
      4338,
      4345
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 4346,
    "end": 4356,
    "range": [
      4346,
      4356
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4356,
    "end": 4357,
    "range": [
      4356,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4359,
    "end": 4360,
    "range": [
      4359,
      4360
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4373,
    "end": 4379,
    "range": [
      4373,
      4379
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4380,
    "end": 4383,
    "range": [
      4380,
      4383
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4384,
    "end": 4397,
    "range": [
      4384,
      4397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4397,
    "end": 4398,
    "range": [
      4397,
      4398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4398,
    "end": 4399,
    "range": [
      4398,
      4399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4399,
    "end": 4400,
    "range": [
      4399,
      4400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4409,
    "end": 4410,
    "range": [
      4409,
      4410
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4420,
    "end": 4426,
    "range": [
      4420,
      4426
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 4427,
    "end": 4436,
    "range": [
      4427,
      4436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4436,
    "end": 4437,
    "range": [
      4436,
      4437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4437,
    "end": 4438,
    "range": [
      4437,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4453,
    "end": 4459,
    "range": [
      4453,
      4459
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4460,
    "end": 4463,
    "range": [
      4460,
      4463
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4464,
    "end": 4477,
    "range": [
      4464,
      4477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4477,
    "end": 4478,
    "range": [
      4477,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4479,
    "end": 4480,
    "range": [
      4479,
      4480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4500,
    "end": 4507,
    "range": [
      4500,
      4507
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 4508,
    "end": 4518,
    "range": [
      4508,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4518,
    "end": 4519,
    "range": [
      4518,
      4519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4519,
    "end": 4520,
    "range": [
      4519,
      4520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4520,
    "end": 4521,
    "range": [
      4520,
      4521
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4522,
    "end": 4534,
    "range": [
      4522,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4549,
    "end": 4555,
    "range": [
      4549,
      4555
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4556,
    "end": 4559,
    "range": [
      4556,
      4559
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4560,
    "end": 4572,
    "range": [
      4560,
      4572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4572,
    "end": 4573,
    "range": [
      4572,
      4573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4573,
    "end": 4574,
    "range": [
      4573,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4574,
    "end": 4575,
    "range": [
      4574,
      4575
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4595,
    "end": 4601,
    "range": [
      4595,
      4601
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 4602,
    "end": 4612,
    "range": [
      4602,
      4612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4612,
    "end": 4613,
    "range": [
      4612,
      4613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4613,
    "end": 4614,
    "range": [
      4613,
      4614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4616,
    "end": 4628,
    "range": [
      4616,
      4628
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4629,
    "end": 4630,
    "range": [
      4629,
      4630
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4643,
    "end": 4649,
    "range": [
      4643,
      4649
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4650,
    "end": 4653,
    "range": [
      4650,
      4653
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4654,
    "end": 4666,
    "range": [
      4654,
      4666
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4667,
    "end": 4668,
    "range": [
      4667,
      4668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4668,
    "end": 4669,
    "range": [
      4668,
      4669
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4678,
    "end": 4679,
    "range": [
      4678,
      4679
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4689,
    "end": 4696,
    "range": [
      4689,
      4696
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 4697,
    "end": 4708,
    "range": [
      4697,
      4708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4709,
    "end": 4710,
    "range": [
      4709,
      4710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4710,
    "end": 4711,
    "range": [
      4710,
      4711
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4712,
    "end": 4725,
    "range": [
      4712,
      4725
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4726,
    "end": 4727,
    "range": [
      4726,
      4727
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4740,
    "end": 4746,
    "range": [
      4740,
      4746
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4747,
    "end": 4750,
    "range": [
      4747,
      4750
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4751,
    "end": 4764,
    "range": [
      4751,
      4764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4764,
    "end": 4765,
    "range": [
      4764,
      4765
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4765,
    "end": 4766,
    "range": [
      4765,
      4766
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4766,
    "end": 4767,
    "range": [
      4766,
      4767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4776,
    "end": 4777,
    "range": [
      4776,
      4777
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4787,
    "end": 4793,
    "range": [
      4787,
      4793
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 4794,
    "end": 4804,
    "range": [
      4794,
      4804
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4804,
    "end": 4805,
    "range": [
      4804,
      4805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4805,
    "end": 4806,
    "range": [
      4805,
      4806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4806,
    "end": 4807,
    "range": [
      4806,
      4807
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4808,
    "end": 4821,
    "range": [
      4808,
      4821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4822,
    "end": 4823,
    "range": [
      4822,
      4823
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4836,
    "end": 4842,
    "range": [
      4836,
      4842
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4843,
    "end": 4846,
    "range": [
      4843,
      4846
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4847,
    "end": 4860,
    "range": [
      4847,
      4860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4860,
    "end": 4861,
    "range": [
      4860,
      4861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4861,
    "end": 4862,
    "range": [
      4861,
      4862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4862,
    "end": 4863,
    "range": [
      4862,
      4863
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4872,
    "end": 4873,
    "range": [
      4872,
      4873
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4878,
    "end": 4879,
    "range": [
      4878,
      4879
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4885,
    "end": 4890,
    "range": [
      4885,
      4890
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C4_private",
    "start": 4891,
    "end": 4904,
    "range": [
      4891,
      4904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4905,
    "end": 4906,
    "range": [
      4905,
      4906
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4915,
    "end": 4926,
    "range": [
      4915,
      4926
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4927,
    "end": 4928,
    "range": [
      4927,
      4928
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_c1",
    "start": 4928,
    "end": 4936,
    "range": [
      4928,
      4936
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4936,
    "end": 4937,
    "range": [
      4936,
      4937
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4938,
    "end": 4950,
    "range": [
      4938,
      4950
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4950,
    "end": 4951,
    "range": [
      4950,
      4951
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4951,
    "end": 4952,
    "range": [
      4951,
      4952
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4961,
    "end": 4972,
    "range": [
      4961,
      4972
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4973,
    "end": 4974,
    "range": [
      4973,
      4974
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_c2",
    "start": 4974,
    "end": 4982,
    "range": [
      4974,
      4982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4982,
    "end": 4983,
    "range": [
      4982,
      4983
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4984,
    "end": 4997,
    "range": [
      4984,
      4997
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4997,
    "end": 4998,
    "range": [
      4997,
      4998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999,
    "range": [
      4998,
      4999
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5008,
    "end": 5019,
    "range": [
      5008,
      5019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5020,
    "end": 5021,
    "range": [
      5020,
      5021
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_c1_2",
    "start": 5021,
    "end": 5031,
    "range": [
      5021,
      5031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5031,
    "end": 5032,
    "range": [
      5031,
      5032
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5033,
    "end": 5036,
    "range": [
      5033,
      5036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5036,
    "end": 5037,
    "range": [
      5036,
      5037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5038,
    "end": 5039,
    "range": [
      5038,
      5039
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5048,
    "end": 5049,
    "range": [
      5048,
      5049
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5059,
    "end": 5066,
    "range": [
      5059,
      5066
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 5067,
    "end": 5077,
    "range": [
      5067,
      5077
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5077,
    "end": 5078,
    "range": [
      5077,
      5078
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f1_arg",
    "start": 5078,
    "end": 5090,
    "range": [
      5078,
      5090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5090,
    "end": 5091,
    "range": [
      5090,
      5091
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5092,
    "end": 5104,
    "range": [
      5092,
      5104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5106,
    "end": 5107,
    "range": [
      5106,
      5107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5116,
    "end": 5117,
    "range": [
      5116,
      5117
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5127,
    "end": 5133,
    "range": [
      5127,
      5133
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 5134,
    "end": 5143,
    "range": [
      5134,
      5143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5143,
    "end": 5144,
    "range": [
      5143,
      5144
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f2_arg",
    "start": 5144,
    "end": 5156,
    "range": [
      5144,
      5156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5158,
    "end": 5170,
    "range": [
      5158,
      5170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5170,
    "end": 5171,
    "range": [
      5170,
      5171
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5172,
    "end": 5173,
    "range": [
      5172,
      5173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5182,
    "end": 5183,
    "range": [
      5182,
      5183
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5193,
    "end": 5200,
    "range": [
      5193,
      5200
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 5201,
    "end": 5211,
    "range": [
      5201,
      5211
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5211,
    "end": 5212,
    "range": [
      5211,
      5212
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f3_arg",
    "start": 5212,
    "end": 5224,
    "range": [
      5212,
      5224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5224,
    "end": 5225,
    "range": [
      5224,
      5225
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5226,
    "end": 5239,
    "range": [
      5226,
      5239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5239,
    "end": 5240,
    "range": [
      5239,
      5240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5241,
    "end": 5242,
    "range": [
      5241,
      5242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5251,
    "end": 5252,
    "range": [
      5251,
      5252
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5262,
    "end": 5268,
    "range": [
      5262,
      5268
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 5269,
    "end": 5278,
    "range": [
      5269,
      5278
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5278,
    "end": 5279,
    "range": [
      5278,
      5279
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f4_arg",
    "start": 5279,
    "end": 5291,
    "range": [
      5279,
      5291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5291,
    "end": 5292,
    "range": [
      5291,
      5292
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5293,
    "end": 5306,
    "range": [
      5293,
      5306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5306,
    "end": 5307,
    "range": [
      5306,
      5307
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5308,
    "end": 5309,
    "range": [
      5308,
      5309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5318,
    "end": 5319,
    "range": [
      5318,
      5319
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5330,
    "end": 5337,
    "range": [
      5330,
      5337
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 5338,
    "end": 5348,
    "range": [
      5338,
      5348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5348,
    "end": 5349,
    "range": [
      5348,
      5349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5349,
    "end": 5350,
    "range": [
      5349,
      5350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5351,
    "end": 5352,
    "range": [
      5351,
      5352
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5365,
    "end": 5371,
    "range": [
      5365,
      5371
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5372,
    "end": 5375,
    "range": [
      5372,
      5375
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5376,
    "end": 5388,
    "range": [
      5376,
      5388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5388,
    "end": 5389,
    "range": [
      5388,
      5389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5389,
    "end": 5390,
    "range": [
      5389,
      5390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5390,
    "end": 5391,
    "range": [
      5390,
      5391
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5400,
    "end": 5401,
    "range": [
      5400,
      5401
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5411,
    "end": 5417,
    "range": [
      5411,
      5417
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 5418,
    "end": 5427,
    "range": [
      5418,
      5427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5427,
    "end": 5428,
    "range": [
      5427,
      5428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5428,
    "end": 5429,
    "range": [
      5428,
      5429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5430,
    "end": 5431,
    "range": [
      5430,
      5431
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5444,
    "end": 5450,
    "range": [
      5444,
      5450
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5451,
    "end": 5454,
    "range": [
      5451,
      5454
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5455,
    "end": 5467,
    "range": [
      5455,
      5467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5467,
    "end": 5468,
    "range": [
      5467,
      5468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5468,
    "end": 5469,
    "range": [
      5468,
      5469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5469,
    "end": 5470,
    "range": [
      5469,
      5470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5479,
    "end": 5480,
    "range": [
      5479,
      5480
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5490,
    "end": 5497,
    "range": [
      5490,
      5497
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 5498,
    "end": 5508,
    "range": [
      5498,
      5508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5508,
    "end": 5509,
    "range": [
      5508,
      5509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5509,
    "end": 5510,
    "range": [
      5509,
      5510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5511,
    "end": 5512,
    "range": [
      5511,
      5512
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5525,
    "end": 5531,
    "range": [
      5525,
      5531
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5532,
    "end": 5535,
    "range": [
      5532,
      5535
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5536,
    "end": 5549,
    "range": [
      5536,
      5549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5549,
    "end": 5550,
    "range": [
      5549,
      5550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5550,
    "end": 5551,
    "range": [
      5550,
      5551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5551,
    "end": 5552,
    "range": [
      5551,
      5552
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5561,
    "end": 5562,
    "range": [
      5561,
      5562
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5572,
    "end": 5578,
    "range": [
      5572,
      5578
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 5579,
    "end": 5588,
    "range": [
      5579,
      5588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5588,
    "end": 5589,
    "range": [
      5588,
      5589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5589,
    "end": 5590,
    "range": [
      5589,
      5590
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5591,
    "end": 5592,
    "range": [
      5591,
      5592
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5605,
    "end": 5611,
    "range": [
      5605,
      5611
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5612,
    "end": 5615,
    "range": [
      5612,
      5615
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5616,
    "end": 5629,
    "range": [
      5616,
      5629
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5629,
    "end": 5630,
    "range": [
      5629,
      5630
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5630,
    "end": 5631,
    "range": [
      5630,
      5631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5631,
    "end": 5632,
    "range": [
      5631,
      5632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5641,
    "end": 5642,
    "range": [
      5641,
      5642
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5653,
    "end": 5660,
    "range": [
      5653,
      5660
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 5661,
    "end": 5671,
    "range": [
      5661,
      5671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5671,
    "end": 5672,
    "range": [
      5671,
      5672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5672,
    "end": 5673,
    "range": [
      5672,
      5673
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5673,
    "end": 5674,
    "range": [
      5673,
      5674
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5675,
    "end": 5687,
    "range": [
      5675,
      5687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5688,
    "end": 5689,
    "range": [
      5688,
      5689
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5702,
    "end": 5708,
    "range": [
      5702,
      5708
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5709,
    "end": 5712,
    "range": [
      5709,
      5712
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5713,
    "end": 5725,
    "range": [
      5713,
      5725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5725,
    "end": 5726,
    "range": [
      5725,
      5726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5726,
    "end": 5727,
    "range": [
      5726,
      5727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5727,
    "end": 5728,
    "range": [
      5727,
      5728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5737,
    "end": 5738,
    "range": [
      5737,
      5738
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5748,
    "end": 5754,
    "range": [
      5748,
      5754
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 5755,
    "end": 5765,
    "range": [
      5755,
      5765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5765,
    "end": 5766,
    "range": [
      5765,
      5766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5766,
    "end": 5767,
    "range": [
      5766,
      5767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5767,
    "end": 5768,
    "range": [
      5767,
      5768
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5769,
    "end": 5781,
    "range": [
      5769,
      5781
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5782,
    "end": 5783,
    "range": [
      5782,
      5783
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5796,
    "end": 5802,
    "range": [
      5796,
      5802
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5803,
    "end": 5806,
    "range": [
      5803,
      5806
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5807,
    "end": 5819,
    "range": [
      5807,
      5819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5819,
    "end": 5820,
    "range": [
      5819,
      5820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5820,
    "end": 5821,
    "range": [
      5820,
      5821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5821,
    "end": 5822,
    "range": [
      5821,
      5822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5831,
    "end": 5832,
    "range": [
      5831,
      5832
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5842,
    "end": 5849,
    "range": [
      5842,
      5849
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 5850,
    "end": 5861,
    "range": [
      5850,
      5861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5861,
    "end": 5862,
    "range": [
      5861,
      5862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5862,
    "end": 5863,
    "range": [
      5862,
      5863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5863,
    "end": 5864,
    "range": [
      5863,
      5864
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5865,
    "end": 5878,
    "range": [
      5865,
      5878
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5879,
    "end": 5880,
    "range": [
      5879,
      5880
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5893,
    "end": 5899,
    "range": [
      5893,
      5899
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5900,
    "end": 5903,
    "range": [
      5900,
      5903
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5904,
    "end": 5917,
    "range": [
      5904,
      5917
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5917,
    "end": 5918,
    "range": [
      5917,
      5918
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5918,
    "end": 5919,
    "range": [
      5918,
      5919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5919,
    "end": 5920,
    "range": [
      5919,
      5920
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5929,
    "end": 5930,
    "range": [
      5929,
      5930
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5940,
    "end": 5946,
    "range": [
      5940,
      5946
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 5947,
    "end": 5957,
    "range": [
      5947,
      5957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5957,
    "end": 5958,
    "range": [
      5957,
      5958
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5958,
    "end": 5959,
    "range": [
      5958,
      5959
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5959,
    "end": 5960,
    "range": [
      5959,
      5960
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5961,
    "end": 5974,
    "range": [
      5961,
      5974
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5975,
    "end": 5976,
    "range": [
      5975,
      5976
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5989,
    "end": 5995,
    "range": [
      5989,
      5995
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5996,
    "end": 5999,
    "range": [
      5996,
      5999
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6000,
    "end": 6013,
    "range": [
      6000,
      6013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6013,
    "end": 6014,
    "range": [
      6013,
      6014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6014,
    "end": 6015,
    "range": [
      6014,
      6015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6015,
    "end": 6016,
    "range": [
      6015,
      6016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6025,
    "end": 6026,
    "range": [
      6025,
      6026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6031,
    "end": 6032,
    "range": [
      6031,
      6032
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6038,
    "end": 6044,
    "range": [
      6038,
      6044
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6045,
    "end": 6050,
    "range": [
      6045,
      6050
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C5_public",
    "start": 6051,
    "end": 6063,
    "range": [
      6051,
      6063
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6064,
    "end": 6065,
    "range": [
      6064,
      6065
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6074,
    "end": 6085,
    "range": [
      6074,
      6085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6086,
    "end": 6087,
    "range": [
      6086,
      6087
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c5_c",
    "start": 6087,
    "end": 6094,
    "range": [
      6087,
      6094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6094,
    "end": 6095,
    "range": [
      6094,
      6095
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6096,
    "end": 6108,
    "range": [
      6096,
      6108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6108,
    "end": 6109,
    "range": [
      6108,
      6109
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6110,
    "end": 6111,
    "range": [
      6110,
      6111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6120,
    "end": 6121,
    "range": [
      6120,
      6121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6126,
    "end": 6127,
    "range": [
      6126,
      6127
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6137,
    "end": 6142,
    "range": [
      6137,
      6142
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C6_private",
    "start": 6143,
    "end": 6156,
    "range": [
      6143,
      6156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6157,
    "end": 6158,
    "range": [
      6157,
      6158
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6167,
    "end": 6178,
    "range": [
      6167,
      6178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6179,
    "end": 6180,
    "range": [
      6179,
      6180
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c6_c",
    "start": 6180,
    "end": 6187,
    "range": [
      6180,
      6187
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6187,
    "end": 6188,
    "range": [
      6187,
      6188
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6189,
    "end": 6201,
    "range": [
      6189,
      6201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6201,
    "end": 6202,
    "range": [
      6201,
      6202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6203,
    "end": 6204,
    "range": [
      6203,
      6204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6213,
    "end": 6214,
    "range": [
      6213,
      6214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6219,
    "end": 6220,
    "range": [
      6219,
      6220
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6225,
    "end": 6231,
    "range": [
      6225,
      6231
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6232,
    "end": 6237,
    "range": [
      6232,
      6237
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C7_public",
    "start": 6238,
    "end": 6250,
    "range": [
      6238,
      6250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6251,
    "end": 6252,
    "range": [
      6251,
      6252
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6261,
    "end": 6272,
    "range": [
      6261,
      6272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6273,
    "end": 6274,
    "range": [
      6273,
      6274
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c7_c",
    "start": 6274,
    "end": 6281,
    "range": [
      6274,
      6281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6281,
    "end": 6282,
    "range": [
      6281,
      6282
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6283,
    "end": 6296,
    "range": [
      6283,
      6296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6296,
    "end": 6297,
    "range": [
      6296,
      6297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6298,
    "end": 6299,
    "range": [
      6298,
      6299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6309,
    "end": 6310,
    "range": [
      6309,
      6310
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6315,
    "end": 6316,
    "range": [
      6315,
      6316
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6326,
    "end": 6331,
    "range": [
      6326,
      6331
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C8_private",
    "start": 6332,
    "end": 6345,
    "range": [
      6332,
      6345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6346,
    "end": 6347,
    "range": [
      6346,
      6347
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6356,
    "end": 6367,
    "range": [
      6356,
      6367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6368,
    "end": 6369,
    "range": [
      6368,
      6369
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_c8_c",
    "start": 6369,
    "end": 6376,
    "range": [
      6369,
      6376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6376,
    "end": 6377,
    "range": [
      6376,
      6377
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6378,
    "end": 6391,
    "range": [
      6378,
      6391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6391,
    "end": 6392,
    "range": [
      6391,
      6392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6393,
    "end": 6394,
    "range": [
      6393,
      6394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6403,
    "end": 6404,
    "range": [
      6403,
      6404
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6409,
    "end": 6410,
    "range": [
      6409,
      6410
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6416,
    "end": 6424,
    "range": [
      6416,
      6424
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_public",
    "start": 6425,
    "end": 6434,
    "range": [
      6425,
      6434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6434,
    "end": 6435,
    "range": [
      6434,
      6435
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_f1_arg",
    "start": 6435,
    "end": 6444,
    "range": [
      6435,
      6444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6444,
    "end": 6445,
    "range": [
      6444,
      6445
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6446,
    "end": 6458,
    "range": [
      6446,
      6458
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6458,
    "end": 6459,
    "range": [
      6458,
      6459
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6460,
    "end": 6461,
    "range": [
      6460,
      6461
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6466,
    "end": 6467,
    "range": [
      6466,
      6467
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6473,
    "end": 6479,
    "range": [
      6473,
      6479
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6480,
    "end": 6488,
    "range": [
      6480,
      6488
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 6489,
    "end": 6498,
    "range": [
      6489,
      6498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6498,
    "end": 6499,
    "range": [
      6498,
      6499
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_f2_arg",
    "start": 6499,
    "end": 6508,
    "range": [
      6499,
      6508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6508,
    "end": 6509,
    "range": [
      6508,
      6509
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6510,
    "end": 6522,
    "range": [
      6510,
      6522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6522,
    "end": 6523,
    "range": [
      6522,
      6523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6524,
    "end": 6525,
    "range": [
      6524,
      6525
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6530,
    "end": 6531,
    "range": [
      6530,
      6531
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6537,
    "end": 6545,
    "range": [
      6537,
      6545
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_public",
    "start": 6546,
    "end": 6555,
    "range": [
      6546,
      6555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6555,
    "end": 6556,
    "range": [
      6555,
      6556
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_f3_arg",
    "start": 6556,
    "end": 6565,
    "range": [
      6556,
      6565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6565,
    "end": 6566,
    "range": [
      6565,
      6566
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6567,
    "end": 6580,
    "range": [
      6567,
      6580
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6580,
    "end": 6581,
    "range": [
      6580,
      6581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6582,
    "end": 6583,
    "range": [
      6582,
      6583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6588,
    "end": 6589,
    "range": [
      6588,
      6589
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6595,
    "end": 6601,
    "range": [
      6595,
      6601
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6602,
    "end": 6610,
    "range": [
      6602,
      6610
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 6611,
    "end": 6620,
    "range": [
      6611,
      6620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6620,
    "end": 6621,
    "range": [
      6620,
      6621
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_f4_arg",
    "start": 6621,
    "end": 6630,
    "range": [
      6621,
      6630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6630,
    "end": 6631,
    "range": [
      6630,
      6631
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6632,
    "end": 6645,
    "range": [
      6632,
      6645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6645,
    "end": 6646,
    "range": [
      6645,
      6646
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6647,
    "end": 6648,
    "range": [
      6647,
      6648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6653,
    "end": 6654,
    "range": [
      6653,
      6654
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6661,
    "end": 6669,
    "range": [
      6661,
      6669
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_public",
    "start": 6670,
    "end": 6679,
    "range": [
      6670,
      6679
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6679,
    "end": 6680,
    "range": [
      6679,
      6680
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6680,
    "end": 6681,
    "range": [
      6680,
      6681
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6682,
    "end": 6683,
    "range": [
      6682,
      6683
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6692,
    "end": 6698,
    "range": [
      6692,
      6698
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6699,
    "end": 6702,
    "range": [
      6699,
      6702
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6703,
    "end": 6715,
    "range": [
      6703,
      6715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6715,
    "end": 6716,
    "range": [
      6715,
      6716
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6716,
    "end": 6717,
    "range": [
      6716,
      6717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6717,
    "end": 6718,
    "range": [
      6717,
      6718
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6723,
    "end": 6724,
    "range": [
      6723,
      6724
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6730,
    "end": 6736,
    "range": [
      6730,
      6736
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6737,
    "end": 6745,
    "range": [
      6737,
      6745
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 6746,
    "end": 6755,
    "range": [
      6746,
      6755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6755,
    "end": 6756,
    "range": [
      6755,
      6756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6756,
    "end": 6757,
    "range": [
      6756,
      6757
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6758,
    "end": 6759,
    "range": [
      6758,
      6759
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6768,
    "end": 6774,
    "range": [
      6768,
      6774
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6775,
    "end": 6778,
    "range": [
      6775,
      6778
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6779,
    "end": 6791,
    "range": [
      6779,
      6791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6791,
    "end": 6792,
    "range": [
      6791,
      6792
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6792,
    "end": 6793,
    "range": [
      6792,
      6793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6793,
    "end": 6794,
    "range": [
      6793,
      6794
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6799,
    "end": 6800,
    "range": [
      6799,
      6800
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6806,
    "end": 6814,
    "range": [
      6806,
      6814
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_public",
    "start": 6815,
    "end": 6824,
    "range": [
      6815,
      6824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6824,
    "end": 6825,
    "range": [
      6824,
      6825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6825,
    "end": 6826,
    "range": [
      6825,
      6826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6827,
    "end": 6828,
    "range": [
      6827,
      6828
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6837,
    "end": 6843,
    "range": [
      6837,
      6843
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6844,
    "end": 6847,
    "range": [
      6844,
      6847
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6848,
    "end": 6861,
    "range": [
      6848,
      6861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6861,
    "end": 6862,
    "range": [
      6861,
      6862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6862,
    "end": 6863,
    "range": [
      6862,
      6863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6863,
    "end": 6864,
    "range": [
      6863,
      6864
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6869,
    "end": 6870,
    "range": [
      6869,
      6870
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6876,
    "end": 6882,
    "range": [
      6876,
      6882
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6883,
    "end": 6891,
    "range": [
      6883,
      6891
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 6892,
    "end": 6901,
    "range": [
      6892,
      6901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6901,
    "end": 6902,
    "range": [
      6901,
      6902
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6902,
    "end": 6903,
    "range": [
      6902,
      6903
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6904,
    "end": 6905,
    "range": [
      6904,
      6905
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6914,
    "end": 6920,
    "range": [
      6914,
      6920
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6921,
    "end": 6924,
    "range": [
      6921,
      6924
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6925,
    "end": 6938,
    "range": [
      6925,
      6938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6938,
    "end": 6939,
    "range": [
      6938,
      6939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6939,
    "end": 6940,
    "range": [
      6939,
      6940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6940,
    "end": 6941,
    "range": [
      6940,
      6941
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6946,
    "end": 6947,
    "range": [
      6946,
      6947
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6954,
    "end": 6962,
    "range": [
      6954,
      6962
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 6963,
    "end": 6973,
    "range": [
      6963,
      6973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6973,
    "end": 6974,
    "range": [
      6973,
      6974
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6974,
    "end": 6975,
    "range": [
      6974,
      6975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6975,
    "end": 6976,
    "range": [
      6975,
      6976
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6977,
    "end": 6989,
    "range": [
      6977,
      6989
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6990,
    "end": 6991,
    "range": [
      6990,
      6991
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7000,
    "end": 7006,
    "range": [
      7000,
      7006
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7007,
    "end": 7010,
    "range": [
      7007,
      7010
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 7011,
    "end": 7023,
    "range": [
      7011,
      7023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7023,
    "end": 7024,
    "range": [
      7023,
      7024
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7024,
    "end": 7025,
    "range": [
      7024,
      7025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7025,
    "end": 7026,
    "range": [
      7025,
      7026
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7031,
    "end": 7032,
    "range": [
      7031,
      7032
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7038,
    "end": 7044,
    "range": [
      7038,
      7044
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7045,
    "end": 7053,
    "range": [
      7045,
      7053
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 7054,
    "end": 7064,
    "range": [
      7054,
      7064
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7064,
    "end": 7065,
    "range": [
      7064,
      7065
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7065,
    "end": 7066,
    "range": [
      7065,
      7066
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7066,
    "end": 7067,
    "range": [
      7066,
      7067
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 7068,
    "end": 7080,
    "range": [
      7068,
      7080
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7081,
    "end": 7082,
    "range": [
      7081,
      7082
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7091,
    "end": 7097,
    "range": [
      7091,
      7097
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7098,
    "end": 7101,
    "range": [
      7098,
      7101
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 7102,
    "end": 7114,
    "range": [
      7102,
      7114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7114,
    "end": 7115,
    "range": [
      7114,
      7115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7115,
    "end": 7116,
    "range": [
      7115,
      7116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7116,
    "end": 7117,
    "range": [
      7116,
      7117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7122,
    "end": 7123,
    "range": [
      7122,
      7123
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7129,
    "end": 7137,
    "range": [
      7129,
      7137
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 7138,
    "end": 7149,
    "range": [
      7138,
      7149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7149,
    "end": 7150,
    "range": [
      7149,
      7150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7150,
    "end": 7151,
    "range": [
      7150,
      7151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7151,
    "end": 7152,
    "range": [
      7151,
      7152
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7153,
    "end": 7166,
    "range": [
      7153,
      7166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7167,
    "end": 7168,
    "range": [
      7167,
      7168
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7177,
    "end": 7183,
    "range": [
      7177,
      7183
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7184,
    "end": 7187,
    "range": [
      7184,
      7187
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7188,
    "end": 7201,
    "range": [
      7188,
      7201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7201,
    "end": 7202,
    "range": [
      7201,
      7202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7202,
    "end": 7203,
    "range": [
      7202,
      7203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7203,
    "end": 7204,
    "range": [
      7203,
      7204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7209,
    "end": 7210,
    "range": [
      7209,
      7210
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7216,
    "end": 7222,
    "range": [
      7216,
      7222
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7223,
    "end": 7231,
    "range": [
      7223,
      7231
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 7232,
    "end": 7242,
    "range": [
      7232,
      7242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7242,
    "end": 7243,
    "range": [
      7242,
      7243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7243,
    "end": 7244,
    "range": [
      7243,
      7244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7244,
    "end": 7245,
    "range": [
      7244,
      7245
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7246,
    "end": 7259,
    "range": [
      7246,
      7259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7260,
    "end": 7261,
    "range": [
      7260,
      7261
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7270,
    "end": 7276,
    "range": [
      7270,
      7276
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7277,
    "end": 7280,
    "range": [
      7277,
      7280
    ]
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7281,
    "end": 7294,
    "range": [
      7281,
      7294
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7294,
    "end": 7295,
    "range": [
      7294,
      7295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7295,
    "end": 7296,
    "range": [
      7295,
      7296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7296,
    "end": 7297,
    "range": [
      7296,
      7297
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7302,
    "end": 7303,
    "range": [
      7302,
      7303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7304,
    "end": 7305,
    "range": [
      7304,
      7305
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7307,
    "end": 7312,
    "range": [
      7307,
      7312
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7313,
    "end": 7323,
    "range": [
      7313,
      7323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7324,
    "end": 7325,
    "range": [
      7324,
      7325
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7330,
    "end": 7337,
    "range": [
      7330,
      7337
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7338,
    "end": 7339,
    "range": [
      7338,
      7339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7339,
    "end": 7340,
    "range": [
      7339,
      7340
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7340,
    "end": 7341,
    "range": [
      7340,
      7341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7342,
    "end": 7343,
    "range": [
      7342,
      7343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7348,
    "end": 7349,
    "range": [
      7348,
      7349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7350,
    "end": 7351,
    "range": [
      7350,
      7351
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7353,
    "end": 7359,
    "range": [
      7353,
      7359
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7360,
    "end": 7365,
    "range": [
      7360,
      7365
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7366,
    "end": 7375,
    "range": [
      7366,
      7375
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7376,
    "end": 7377,
    "range": [
      7376,
      7377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7378,
    "end": 7379,
    "range": [
      7378,
      7379
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7381,
    "end": 7387,
    "range": [
      7381,
      7387
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7388,
    "end": 7393,
    "range": [
      7388,
      7393
    ]
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 7394,
    "end": 7403,
    "range": [
      7394,
      7403
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7404,
    "end": 7405,
    "range": [
      7404,
      7405
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7410,
    "end": 7421,
    "range": [
      7410,
      7421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7422,
    "end": 7423,
    "range": [
      7422,
      7423
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_c1",
    "start": 7423,
    "end": 7428,
    "range": [
      7423,
      7428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7428,
    "end": 7429,
    "range": [
      7428,
      7429
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7430,
    "end": 7440,
    "range": [
      7430,
      7440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7440,
    "end": 7441,
    "range": [
      7440,
      7441
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7441,
    "end": 7442,
    "range": [
      7441,
      7442
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7456,
    "end": 7467,
    "range": [
      7456,
      7467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7468,
    "end": 7469,
    "range": [
      7468,
      7469
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_c2",
    "start": 7469,
    "end": 7474,
    "range": [
      7469,
      7474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7474,
    "end": 7475,
    "range": [
      7474,
      7475
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7476,
    "end": 7485,
    "range": [
      7476,
      7485
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7485,
    "end": 7486,
    "range": [
      7485,
      7486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7486,
    "end": 7487,
    "range": [
      7486,
      7487
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7492,
    "end": 7503,
    "range": [
      7492,
      7503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7504,
    "end": 7505,
    "range": [
      7504,
      7505
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_c1_2",
    "start": 7505,
    "end": 7512,
    "range": [
      7505,
      7512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7512,
    "end": 7513,
    "range": [
      7512,
      7513
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7514,
    "end": 7517,
    "range": [
      7514,
      7517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7517,
    "end": 7518,
    "range": [
      7517,
      7518
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7519,
    "end": 7520,
    "range": [
      7519,
      7520
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7525,
    "end": 7526,
    "range": [
      7525,
      7526
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7531,
    "end": 7538,
    "range": [
      7531,
      7538
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 7539,
    "end": 7549,
    "range": [
      7539,
      7549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7549,
    "end": 7550,
    "range": [
      7549,
      7550
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_f1_arg",
    "start": 7550,
    "end": 7559,
    "range": [
      7550,
      7559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7559,
    "end": 7560,
    "range": [
      7559,
      7560
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7561,
    "end": 7570,
    "range": [
      7561,
      7570
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7570,
    "end": 7571,
    "range": [
      7570,
      7571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7572,
    "end": 7573,
    "range": [
      7572,
      7573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7578,
    "end": 7579,
    "range": [
      7578,
      7579
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7585,
    "end": 7591,
    "range": [
      7585,
      7591
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 7592,
    "end": 7601,
    "range": [
      7592,
      7601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7601,
    "end": 7602,
    "range": [
      7601,
      7602
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_f2_arg",
    "start": 7602,
    "end": 7611,
    "range": [
      7602,
      7611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7611,
    "end": 7612,
    "range": [
      7611,
      7612
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7613,
    "end": 7622,
    "range": [
      7613,
      7622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7622,
    "end": 7623,
    "range": [
      7622,
      7623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7624,
    "end": 7625,
    "range": [
      7624,
      7625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7630,
    "end": 7631,
    "range": [
      7630,
      7631
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7637,
    "end": 7644,
    "range": [
      7637,
      7644
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 7645,
    "end": 7655,
    "range": [
      7645,
      7655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7655,
    "end": 7656,
    "range": [
      7655,
      7656
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_f3_arg",
    "start": 7656,
    "end": 7665,
    "range": [
      7656,
      7665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7665,
    "end": 7666,
    "range": [
      7665,
      7666
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7667,
    "end": 7677,
    "range": [
      7667,
      7677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7677,
    "end": 7678,
    "range": [
      7677,
      7678
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7679,
    "end": 7680,
    "range": [
      7679,
      7680
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7685,
    "end": 7686,
    "range": [
      7685,
      7686
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7692,
    "end": 7698,
    "range": [
      7692,
      7698
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 7699,
    "end": 7708,
    "range": [
      7699,
      7708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7708,
    "end": 7709,
    "range": [
      7708,
      7709
    ]
  },
  {
    "type": "Identifier",
    "value": "c7_f4_arg",
    "start": 7709,
    "end": 7718,
    "range": [
      7709,
      7718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7718,
    "end": 7719,
    "range": [
      7718,
      7719
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7720,
    "end": 7730,
    "range": [
      7720,
      7730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7730,
    "end": 7731,
    "range": [
      7730,
      7731
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7732,
    "end": 7733,
    "range": [
      7732,
      7733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7746,
    "end": 7747,
    "range": [
      7746,
      7747
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7753,
    "end": 7760,
    "range": [
      7753,
      7760
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 7761,
    "end": 7771,
    "range": [
      7761,
      7771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7771,
    "end": 7772,
    "range": [
      7771,
      7772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7772,
    "end": 7773,
    "range": [
      7772,
      7773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7774,
    "end": 7775,
    "range": [
      7774,
      7775
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7784,
    "end": 7790,
    "range": [
      7784,
      7790
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7791,
    "end": 7794,
    "range": [
      7791,
      7794
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7795,
    "end": 7804,
    "range": [
      7795,
      7804
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7804,
    "end": 7805,
    "range": [
      7804,
      7805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7805,
    "end": 7806,
    "range": [
      7805,
      7806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7806,
    "end": 7807,
    "range": [
      7806,
      7807
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7812,
    "end": 7813,
    "range": [
      7812,
      7813
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7819,
    "end": 7825,
    "range": [
      7819,
      7825
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 7826,
    "end": 7835,
    "range": [
      7826,
      7835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7835,
    "end": 7836,
    "range": [
      7835,
      7836
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7836,
    "end": 7837,
    "range": [
      7836,
      7837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7838,
    "end": 7839,
    "range": [
      7838,
      7839
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7848,
    "end": 7854,
    "range": [
      7848,
      7854
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7855,
    "end": 7858,
    "range": [
      7855,
      7858
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7859,
    "end": 7868,
    "range": [
      7859,
      7868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7868,
    "end": 7869,
    "range": [
      7868,
      7869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7869,
    "end": 7870,
    "range": [
      7869,
      7870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7870,
    "end": 7871,
    "range": [
      7870,
      7871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7876,
    "end": 7877,
    "range": [
      7876,
      7877
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7883,
    "end": 7890,
    "range": [
      7883,
      7890
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 7891,
    "end": 7901,
    "range": [
      7891,
      7901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7901,
    "end": 7902,
    "range": [
      7901,
      7902
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7902,
    "end": 7903,
    "range": [
      7902,
      7903
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7904,
    "end": 7905,
    "range": [
      7904,
      7905
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7914,
    "end": 7920,
    "range": [
      7914,
      7920
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7921,
    "end": 7924,
    "range": [
      7921,
      7924
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7925,
    "end": 7935,
    "range": [
      7925,
      7935
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7935,
    "end": 7936,
    "range": [
      7935,
      7936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7936,
    "end": 7937,
    "range": [
      7936,
      7937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7937,
    "end": 7938,
    "range": [
      7937,
      7938
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7943,
    "end": 7944,
    "range": [
      7943,
      7944
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7950,
    "end": 7956,
    "range": [
      7950,
      7956
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 7957,
    "end": 7966,
    "range": [
      7957,
      7966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7966,
    "end": 7967,
    "range": [
      7966,
      7967
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7967,
    "end": 7968,
    "range": [
      7967,
      7968
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7969,
    "end": 7970,
    "range": [
      7969,
      7970
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7979,
    "end": 7985,
    "range": [
      7979,
      7985
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7986,
    "end": 7989,
    "range": [
      7986,
      7989
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7990,
    "end": 8000,
    "range": [
      7990,
      8000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8000,
    "end": 8001,
    "range": [
      8000,
      8001
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8001,
    "end": 8002,
    "range": [
      8001,
      8002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8002,
    "end": 8003,
    "range": [
      8002,
      8003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8016,
    "end": 8017,
    "range": [
      8016,
      8017
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8023,
    "end": 8030,
    "range": [
      8023,
      8030
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 8031,
    "end": 8041,
    "range": [
      8031,
      8041
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8041,
    "end": 8042,
    "range": [
      8041,
      8042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8042,
    "end": 8043,
    "range": [
      8042,
      8043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8043,
    "end": 8044,
    "range": [
      8043,
      8044
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8045,
    "end": 8054,
    "range": [
      8045,
      8054
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8055,
    "end": 8056,
    "range": [
      8055,
      8056
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8065,
    "end": 8071,
    "range": [
      8065,
      8071
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8072,
    "end": 8075,
    "range": [
      8072,
      8075
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8076,
    "end": 8085,
    "range": [
      8076,
      8085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8085,
    "end": 8086,
    "range": [
      8085,
      8086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8086,
    "end": 8087,
    "range": [
      8086,
      8087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8087,
    "end": 8088,
    "range": [
      8087,
      8088
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8093,
    "end": 8094,
    "range": [
      8093,
      8094
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8100,
    "end": 8106,
    "range": [
      8100,
      8106
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 8107,
    "end": 8117,
    "range": [
      8107,
      8117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8117,
    "end": 8118,
    "range": [
      8117,
      8118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8118,
    "end": 8119,
    "range": [
      8118,
      8119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8119,
    "end": 8120,
    "range": [
      8119,
      8120
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8121,
    "end": 8130,
    "range": [
      8121,
      8130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8131,
    "end": 8132,
    "range": [
      8131,
      8132
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8141,
    "end": 8147,
    "range": [
      8141,
      8147
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8148,
    "end": 8151,
    "range": [
      8148,
      8151
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8152,
    "end": 8161,
    "range": [
      8152,
      8161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8161,
    "end": 8162,
    "range": [
      8161,
      8162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8162,
    "end": 8163,
    "range": [
      8162,
      8163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8163,
    "end": 8164,
    "range": [
      8163,
      8164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8169,
    "end": 8170,
    "range": [
      8169,
      8170
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8176,
    "end": 8183,
    "range": [
      8176,
      8183
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 8184,
    "end": 8195,
    "range": [
      8184,
      8195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8195,
    "end": 8196,
    "range": [
      8195,
      8196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8196,
    "end": 8197,
    "range": [
      8196,
      8197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8197,
    "end": 8198,
    "range": [
      8197,
      8198
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8199,
    "end": 8209,
    "range": [
      8199,
      8209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8210,
    "end": 8211,
    "range": [
      8210,
      8211
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8220,
    "end": 8226,
    "range": [
      8220,
      8226
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8227,
    "end": 8230,
    "range": [
      8227,
      8230
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8231,
    "end": 8241,
    "range": [
      8231,
      8241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8241,
    "end": 8242,
    "range": [
      8241,
      8242
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8242,
    "end": 8243,
    "range": [
      8242,
      8243
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8243,
    "end": 8244,
    "range": [
      8243,
      8244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8249,
    "end": 8250,
    "range": [
      8249,
      8250
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8256,
    "end": 8262,
    "range": [
      8256,
      8262
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 8263,
    "end": 8273,
    "range": [
      8263,
      8273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8273,
    "end": 8274,
    "range": [
      8273,
      8274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8274,
    "end": 8275,
    "range": [
      8274,
      8275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8275,
    "end": 8276,
    "range": [
      8275,
      8276
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8277,
    "end": 8287,
    "range": [
      8277,
      8287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8288,
    "end": 8289,
    "range": [
      8288,
      8289
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8306,
    "end": 8312,
    "range": [
      8306,
      8312
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8313,
    "end": 8316,
    "range": [
      8313,
      8316
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8317,
    "end": 8327,
    "range": [
      8317,
      8327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8327,
    "end": 8328,
    "range": [
      8327,
      8328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8328,
    "end": 8329,
    "range": [
      8328,
      8329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8329,
    "end": 8330,
    "range": [
      8329,
      8330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8343,
    "end": 8344,
    "range": [
      8343,
      8344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8345,
    "end": 8346,
    "range": [
      8345,
      8346
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8348,
    "end": 8353,
    "range": [
      8348,
      8353
    ]
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 8354,
    "end": 8364,
    "range": [
      8354,
      8364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8365,
    "end": 8366,
    "range": [
      8365,
      8366
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 8371,
    "end": 8382,
    "range": [
      8371,
      8382
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8383,
    "end": 8384,
    "range": [
      8383,
      8384
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_c1",
    "start": 8384,
    "end": 8389,
    "range": [
      8384,
      8389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8389,
    "end": 8390,
    "range": [
      8389,
      8390
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8391,
    "end": 8401,
    "range": [
      8391,
      8401
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8401,
    "end": 8402,
    "range": [
      8401,
      8402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8402,
    "end": 8403,
    "range": [
      8402,
      8403
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 8408,
    "end": 8419,
    "range": [
      8408,
      8419
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8420,
    "end": 8421,
    "range": [
      8420,
      8421
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_c2",
    "start": 8421,
    "end": 8426,
    "range": [
      8421,
      8426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8426,
    "end": 8427,
    "range": [
      8426,
      8427
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8428,
    "end": 8437,
    "range": [
      8428,
      8437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8437,
    "end": 8438,
    "range": [
      8437,
      8438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8438,
    "end": 8439,
    "range": [
      8438,
      8439
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 8444,
    "end": 8455,
    "range": [
      8444,
      8455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8456,
    "end": 8457,
    "range": [
      8456,
      8457
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_c1_2",
    "start": 8457,
    "end": 8464,
    "range": [
      8457,
      8464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8464,
    "end": 8465,
    "range": [
      8464,
      8465
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8466,
    "end": 8469,
    "range": [
      8466,
      8469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8469,
    "end": 8470,
    "range": [
      8469,
      8470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8471,
    "end": 8472,
    "range": [
      8471,
      8472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8477,
    "end": 8478,
    "range": [
      8477,
      8478
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8492,
    "end": 8499,
    "range": [
      8492,
      8499
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 8500,
    "end": 8510,
    "range": [
      8500,
      8510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8510,
    "end": 8511,
    "range": [
      8510,
      8511
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_f1_arg",
    "start": 8511,
    "end": 8520,
    "range": [
      8511,
      8520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8520,
    "end": 8521,
    "range": [
      8520,
      8521
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8522,
    "end": 8531,
    "range": [
      8522,
      8531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8531,
    "end": 8532,
    "range": [
      8531,
      8532
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8533,
    "end": 8534,
    "range": [
      8533,
      8534
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8539,
    "end": 8540,
    "range": [
      8539,
      8540
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8546,
    "end": 8552,
    "range": [
      8546,
      8552
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 8553,
    "end": 8562,
    "range": [
      8553,
      8562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8562,
    "end": 8563,
    "range": [
      8562,
      8563
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_f2_arg",
    "start": 8563,
    "end": 8572,
    "range": [
      8563,
      8572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8572,
    "end": 8573,
    "range": [
      8572,
      8573
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8574,
    "end": 8583,
    "range": [
      8574,
      8583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8583,
    "end": 8584,
    "range": [
      8583,
      8584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8585,
    "end": 8586,
    "range": [
      8585,
      8586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8591,
    "end": 8592,
    "range": [
      8591,
      8592
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8598,
    "end": 8605,
    "range": [
      8598,
      8605
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 8606,
    "end": 8616,
    "range": [
      8606,
      8616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8616,
    "end": 8617,
    "range": [
      8616,
      8617
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_f3_arg",
    "start": 8617,
    "end": 8626,
    "range": [
      8617,
      8626
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8626,
    "end": 8627,
    "range": [
      8626,
      8627
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8628,
    "end": 8638,
    "range": [
      8628,
      8638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8638,
    "end": 8639,
    "range": [
      8638,
      8639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8640,
    "end": 8641,
    "range": [
      8640,
      8641
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8646,
    "end": 8647,
    "range": [
      8646,
      8647
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8653,
    "end": 8659,
    "range": [
      8653,
      8659
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 8660,
    "end": 8669,
    "range": [
      8660,
      8669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8669,
    "end": 8670,
    "range": [
      8669,
      8670
    ]
  },
  {
    "type": "Identifier",
    "value": "c8_f4_arg",
    "start": 8670,
    "end": 8679,
    "range": [
      8670,
      8679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8679,
    "end": 8680,
    "range": [
      8679,
      8680
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8681,
    "end": 8691,
    "range": [
      8681,
      8691
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8691,
    "end": 8692,
    "range": [
      8691,
      8692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8693,
    "end": 8694,
    "range": [
      8693,
      8694
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8699,
    "end": 8700,
    "range": [
      8699,
      8700
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8706,
    "end": 8713,
    "range": [
      8706,
      8713
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 8714,
    "end": 8724,
    "range": [
      8714,
      8724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8724,
    "end": 8725,
    "range": [
      8724,
      8725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8725,
    "end": 8726,
    "range": [
      8725,
      8726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8727,
    "end": 8728,
    "range": [
      8727,
      8728
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8737,
    "end": 8743,
    "range": [
      8737,
      8743
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8744,
    "end": 8747,
    "range": [
      8744,
      8747
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8748,
    "end": 8757,
    "range": [
      8748,
      8757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8757,
    "end": 8758,
    "range": [
      8757,
      8758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8758,
    "end": 8759,
    "range": [
      8758,
      8759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8759,
    "end": 8760,
    "range": [
      8759,
      8760
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8765,
    "end": 8766,
    "range": [
      8765,
      8766
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8772,
    "end": 8778,
    "range": [
      8772,
      8778
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 8779,
    "end": 8788,
    "range": [
      8779,
      8788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8788,
    "end": 8789,
    "range": [
      8788,
      8789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8789,
    "end": 8790,
    "range": [
      8789,
      8790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8791,
    "end": 8792,
    "range": [
      8791,
      8792
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8801,
    "end": 8807,
    "range": [
      8801,
      8807
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8808,
    "end": 8811,
    "range": [
      8808,
      8811
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8812,
    "end": 8821,
    "range": [
      8812,
      8821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8821,
    "end": 8822,
    "range": [
      8821,
      8822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8822,
    "end": 8823,
    "range": [
      8822,
      8823
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8823,
    "end": 8824,
    "range": [
      8823,
      8824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8829,
    "end": 8830,
    "range": [
      8829,
      8830
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8836,
    "end": 8843,
    "range": [
      8836,
      8843
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 8844,
    "end": 8854,
    "range": [
      8844,
      8854
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8854,
    "end": 8855,
    "range": [
      8854,
      8855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8855,
    "end": 8856,
    "range": [
      8855,
      8856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8857,
    "end": 8858,
    "range": [
      8857,
      8858
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8867,
    "end": 8873,
    "range": [
      8867,
      8873
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8874,
    "end": 8877,
    "range": [
      8874,
      8877
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8878,
    "end": 8888,
    "range": [
      8878,
      8888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8888,
    "end": 8889,
    "range": [
      8888,
      8889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8889,
    "end": 8890,
    "range": [
      8889,
      8890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8890,
    "end": 8891,
    "range": [
      8890,
      8891
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8896,
    "end": 8897,
    "range": [
      8896,
      8897
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8903,
    "end": 8909,
    "range": [
      8903,
      8909
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 8910,
    "end": 8919,
    "range": [
      8910,
      8919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8919,
    "end": 8920,
    "range": [
      8919,
      8920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8920,
    "end": 8921,
    "range": [
      8920,
      8921
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8922,
    "end": 8923,
    "range": [
      8922,
      8923
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8932,
    "end": 8938,
    "range": [
      8932,
      8938
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8939,
    "end": 8942,
    "range": [
      8939,
      8942
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8943,
    "end": 8953,
    "range": [
      8943,
      8953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8953,
    "end": 8954,
    "range": [
      8953,
      8954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8954,
    "end": 8955,
    "range": [
      8954,
      8955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8955,
    "end": 8956,
    "range": [
      8955,
      8956
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8961,
    "end": 8962,
    "range": [
      8961,
      8962
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8968,
    "end": 8975,
    "range": [
      8968,
      8975
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 8976,
    "end": 8986,
    "range": [
      8976,
      8986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8986,
    "end": 8987,
    "range": [
      8986,
      8987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8987,
    "end": 8988,
    "range": [
      8987,
      8988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8988,
    "end": 8989,
    "range": [
      8988,
      8989
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8990,
    "end": 8999,
    "range": [
      8990,
      8999
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9000,
    "end": 9001,
    "range": [
      9000,
      9001
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9010,
    "end": 9016,
    "range": [
      9010,
      9016
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9017,
    "end": 9020,
    "range": [
      9017,
      9020
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9021,
    "end": 9030,
    "range": [
      9021,
      9030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9030,
    "end": 9031,
    "range": [
      9030,
      9031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9031,
    "end": 9032,
    "range": [
      9031,
      9032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9032,
    "end": 9033,
    "range": [
      9032,
      9033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9038,
    "end": 9039,
    "range": [
      9038,
      9039
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 9045,
    "end": 9051,
    "range": [
      9045,
      9051
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 9052,
    "end": 9062,
    "range": [
      9052,
      9062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9062,
    "end": 9063,
    "range": [
      9062,
      9063
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9063,
    "end": 9064,
    "range": [
      9063,
      9064
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9064,
    "end": 9065,
    "range": [
      9064,
      9065
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9066,
    "end": 9075,
    "range": [
      9066,
      9075
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9076,
    "end": 9077,
    "range": [
      9076,
      9077
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9086,
    "end": 9092,
    "range": [
      9086,
      9092
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9093,
    "end": 9096,
    "range": [
      9093,
      9096
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9097,
    "end": 9106,
    "range": [
      9097,
      9106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9106,
    "end": 9107,
    "range": [
      9106,
      9107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9107,
    "end": 9108,
    "range": [
      9107,
      9108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9108,
    "end": 9109,
    "range": [
      9108,
      9109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9114,
    "end": 9115,
    "range": [
      9114,
      9115
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 9121,
    "end": 9128,
    "range": [
      9121,
      9128
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 9129,
    "end": 9140,
    "range": [
      9129,
      9140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9140,
    "end": 9141,
    "range": [
      9140,
      9141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9141,
    "end": 9142,
    "range": [
      9141,
      9142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9142,
    "end": 9143,
    "range": [
      9142,
      9143
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9144,
    "end": 9154,
    "range": [
      9144,
      9154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9155,
    "end": 9156,
    "range": [
      9155,
      9156
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9165,
    "end": 9171,
    "range": [
      9165,
      9171
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9172,
    "end": 9175,
    "range": [
      9172,
      9175
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9176,
    "end": 9186,
    "range": [
      9176,
      9186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9186,
    "end": 9187,
    "range": [
      9186,
      9187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9187,
    "end": 9188,
    "range": [
      9187,
      9188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9188,
    "end": 9189,
    "range": [
      9188,
      9189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9194,
    "end": 9195,
    "range": [
      9194,
      9195
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 9201,
    "end": 9207,
    "range": [
      9201,
      9207
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 9208,
    "end": 9218,
    "range": [
      9208,
      9218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9218,
    "end": 9219,
    "range": [
      9218,
      9219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9219,
    "end": 9220,
    "range": [
      9219,
      9220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9220,
    "end": 9221,
    "range": [
      9220,
      9221
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9222,
    "end": 9232,
    "range": [
      9222,
      9232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9233,
    "end": 9234,
    "range": [
      9233,
      9234
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9243,
    "end": 9249,
    "range": [
      9243,
      9249
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9250,
    "end": 9253,
    "range": [
      9250,
      9253
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9254,
    "end": 9264,
    "range": [
      9254,
      9264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9264,
    "end": 9265,
    "range": [
      9264,
      9265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9265,
    "end": 9266,
    "range": [
      9265,
      9266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9266,
    "end": 9267,
    "range": [
      9266,
      9267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9272,
    "end": 9273,
    "range": [
      9272,
      9273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9274,
    "end": 9275,
    "range": [
      9274,
      9275
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9278,
    "end": 9284,
    "range": [
      9278,
      9284
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9285,
    "end": 9290,
    "range": [
      9285,
      9290
    ]
  },
  {
    "type": "Identifier",
    "value": "C9_public",
    "start": 9291,
    "end": 9300,
    "range": [
      9291,
      9300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9301,
    "end": 9302,
    "range": [
      9301,
      9302
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9307,
    "end": 9318,
    "range": [
      9307,
      9318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9319,
    "end": 9320,
    "range": [
      9319,
      9320
    ]
  },
  {
    "type": "Identifier",
    "value": "c9_c",
    "start": 9320,
    "end": 9324,
    "range": [
      9320,
      9324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9324,
    "end": 9325,
    "range": [
      9324,
      9325
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9326,
    "end": 9335,
    "range": [
      9326,
      9335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9335,
    "end": 9336,
    "range": [
      9335,
      9336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9337,
    "end": 9338,
    "range": [
      9337,
      9338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9343,
    "end": 9344,
    "range": [
      9343,
      9344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9345,
    "end": 9346,
    "range": [
      9345,
      9346
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9352,
    "end": 9357,
    "range": [
      9352,
      9357
    ]
  },
  {
    "type": "Identifier",
    "value": "C10_private",
    "start": 9358,
    "end": 9369,
    "range": [
      9358,
      9369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9370,
    "end": 9371,
    "range": [
      9370,
      9371
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9376,
    "end": 9387,
    "range": [
      9376,
      9387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9388,
    "end": 9389,
    "range": [
      9388,
      9389
    ]
  },
  {
    "type": "Identifier",
    "value": "c10_c",
    "start": 9389,
    "end": 9394,
    "range": [
      9389,
      9394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9394,
    "end": 9395,
    "range": [
      9394,
      9395
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9396,
    "end": 9405,
    "range": [
      9396,
      9405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9405,
    "end": 9406,
    "range": [
      9405,
      9406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9407,
    "end": 9408,
    "range": [
      9407,
      9408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9413,
    "end": 9414,
    "range": [
      9413,
      9414
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9415,
    "end": 9416,
    "range": [
      9415,
      9416
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9417,
    "end": 9423,
    "range": [
      9417,
      9423
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9424,
    "end": 9429,
    "range": [
      9424,
      9429
    ]
  },
  {
    "type": "Identifier",
    "value": "C11_public",
    "start": 9430,
    "end": 9440,
    "range": [
      9430,
      9440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9441,
    "end": 9442,
    "range": [
      9441,
      9442
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9447,
    "end": 9458,
    "range": [
      9447,
      9458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9459,
    "end": 9460,
    "range": [
      9459,
      9460
    ]
  },
  {
    "type": "Identifier",
    "value": "c11_c",
    "start": 9460,
    "end": 9465,
    "range": [
      9460,
      9465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9465,
    "end": 9466,
    "range": [
      9465,
      9466
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9467,
    "end": 9477,
    "range": [
      9467,
      9477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9477,
    "end": 9478,
    "range": [
      9477,
      9478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9479,
    "end": 9480,
    "range": [
      9479,
      9480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9494,
    "end": 9495,
    "range": [
      9494,
      9495
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9496,
    "end": 9497,
    "range": [
      9496,
      9497
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9503,
    "end": 9508,
    "range": [
      9503,
      9508
    ]
  },
  {
    "type": "Identifier",
    "value": "C12_private",
    "start": 9509,
    "end": 9520,
    "range": [
      9509,
      9520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9521,
    "end": 9522,
    "range": [
      9521,
      9522
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9527,
    "end": 9538,
    "range": [
      9527,
      9538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9539,
    "end": 9540,
    "range": [
      9539,
      9540
    ]
  },
  {
    "type": "Identifier",
    "value": "c12_c",
    "start": 9540,
    "end": 9545,
    "range": [
      9540,
      9545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9545,
    "end": 9546,
    "range": [
      9545,
      9546
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9547,
    "end": 9557,
    "range": [
      9547,
      9557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9557,
    "end": 9558,
    "range": [
      9557,
      9558
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9559,
    "end": 9560,
    "range": [
      9559,
      9560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9565,
    "end": 9566,
    "range": [
      9565,
      9566
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9567,
    "end": 9568,
    "range": [
      9567,
      9568
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9570,
    "end": 9578,
    "range": [
      9570,
      9578
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 9579,
    "end": 9589,
    "range": [
      9579,
      9589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9589,
    "end": 9590,
    "range": [
      9589,
      9590
    ]
  },
  {
    "type": "Identifier",
    "value": "f1_arg",
    "start": 9590,
    "end": 9596,
    "range": [
      9590,
      9596
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9596,
    "end": 9597,
    "range": [
      9596,
      9597
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9598,
    "end": 9608,
    "range": [
      9598,
      9608
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9608,
    "end": 9609,
    "range": [
      9608,
      9609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9610,
    "end": 9611,
    "range": [
      9610,
      9611
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9612,
    "end": 9613,
    "range": [
      9612,
      9613
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9615,
    "end": 9621,
    "range": [
      9615,
      9621
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9622,
    "end": 9630,
    "range": [
      9622,
      9630
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 9631,
    "end": 9640,
    "range": [
      9631,
      9640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9640,
    "end": 9641,
    "range": [
      9640,
      9641
    ]
  },
  {
    "type": "Identifier",
    "value": "f2_arg",
    "start": 9641,
    "end": 9647,
    "range": [
      9641,
      9647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9647,
    "end": 9648,
    "range": [
      9647,
      9648
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9649,
    "end": 9659,
    "range": [
      9649,
      9659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9659,
    "end": 9660,
    "range": [
      9659,
      9660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9661,
    "end": 9662,
    "range": [
      9661,
      9662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9672,
    "end": 9673,
    "range": [
      9672,
      9673
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9675,
    "end": 9683,
    "range": [
      9675,
      9683
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 9684,
    "end": 9694,
    "range": [
      9684,
      9694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9694,
    "end": 9695,
    "range": [
      9694,
      9695
    ]
  },
  {
    "type": "Identifier",
    "value": "f3_arg",
    "start": 9695,
    "end": 9701,
    "range": [
      9695,
      9701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9701,
    "end": 9702,
    "range": [
      9701,
      9702
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9703,
    "end": 9712,
    "range": [
      9703,
      9712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9712,
    "end": 9713,
    "range": [
      9712,
      9713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9714,
    "end": 9715,
    "range": [
      9714,
      9715
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9716,
    "end": 9717,
    "range": [
      9716,
      9717
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9719,
    "end": 9725,
    "range": [
      9719,
      9725
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9726,
    "end": 9734,
    "range": [
      9726,
      9734
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 9735,
    "end": 9744,
    "range": [
      9735,
      9744
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9744,
    "end": 9745,
    "range": [
      9744,
      9745
    ]
  },
  {
    "type": "Identifier",
    "value": "f4_arg",
    "start": 9745,
    "end": 9751,
    "range": [
      9745,
      9751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9751,
    "end": 9752,
    "range": [
      9751,
      9752
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9753,
    "end": 9762,
    "range": [
      9753,
      9762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9762,
    "end": 9763,
    "range": [
      9762,
      9763
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9764,
    "end": 9765,
    "range": [
      9764,
      9765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9766,
    "end": 9767,
    "range": [
      9766,
      9767
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9769,
    "end": 9777,
    "range": [
      9769,
      9777
    ]
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 9778,
    "end": 9788,
    "range": [
      9778,
      9788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9788,
    "end": 9789,
    "range": [
      9788,
      9789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9789,
    "end": 9790,
    "range": [
      9789,
      9790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9791,
    "end": 9792,
    "range": [
      9791,
      9792
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9797,
    "end": 9803,
    "range": [
      9797,
      9803
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9804,
    "end": 9807,
    "range": [
      9804,
      9807
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9808,
    "end": 9817,
    "range": [
      9808,
      9817
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9817,
    "end": 9818,
    "range": [
      9817,
      9818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9818,
    "end": 9819,
    "range": [
      9818,
      9819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9819,
    "end": 9820,
    "range": [
      9819,
      9820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9821,
    "end": 9822,
    "range": [
      9821,
      9822
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9824,
    "end": 9830,
    "range": [
      9824,
      9830
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9831,
    "end": 9839,
    "range": [
      9831,
      9839
    ]
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 9840,
    "end": 9849,
    "range": [
      9840,
      9849
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9849,
    "end": 9850,
    "range": [
      9849,
      9850
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9850,
    "end": 9851,
    "range": [
      9850,
      9851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9852,
    "end": 9853,
    "range": [
      9852,
      9853
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9858,
    "end": 9864,
    "range": [
      9858,
      9864
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9865,
    "end": 9868,
    "range": [
      9865,
      9868
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9869,
    "end": 9878,
    "range": [
      9869,
      9878
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9878,
    "end": 9879,
    "range": [
      9878,
      9879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9879,
    "end": 9880,
    "range": [
      9879,
      9880
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9880,
    "end": 9881,
    "range": [
      9880,
      9881
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9882,
    "end": 9883,
    "range": [
      9882,
      9883
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9885,
    "end": 9893,
    "range": [
      9885,
      9893
    ]
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 9894,
    "end": 9904,
    "range": [
      9894,
      9904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9904,
    "end": 9905,
    "range": [
      9904,
      9905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9905,
    "end": 9906,
    "range": [
      9905,
      9906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9907,
    "end": 9908,
    "range": [
      9907,
      9908
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9913,
    "end": 9919,
    "range": [
      9913,
      9919
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9920,
    "end": 9923,
    "range": [
      9920,
      9923
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9924,
    "end": 9934,
    "range": [
      9924,
      9934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9934,
    "end": 9935,
    "range": [
      9934,
      9935
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9935,
    "end": 9936,
    "range": [
      9935,
      9936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9936,
    "end": 9937,
    "range": [
      9936,
      9937
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9938,
    "end": 9939,
    "range": [
      9938,
      9939
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9941,
    "end": 9947,
    "range": [
      9941,
      9947
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9948,
    "end": 9956,
    "range": [
      9948,
      9956
    ]
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 9957,
    "end": 9966,
    "range": [
      9957,
      9966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9966,
    "end": 9967,
    "range": [
      9966,
      9967
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9967,
    "end": 9968,
    "range": [
      9967,
      9968
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9969,
    "end": 9970,
    "range": [
      9969,
      9970
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9975,
    "end": 9981,
    "range": [
      9975,
      9981
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9982,
    "end": 9985,
    "range": [
      9982,
      9985
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9986,
    "end": 9996,
    "range": [
      9986,
      9996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9996,
    "end": 9997,
    "range": [
      9996,
      9997
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9997,
    "end": 9998,
    "range": [
      9997,
      9998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9998,
    "end": 9999,
    "range": [
      9998,
      9999
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10008,
    "end": 10009,
    "range": [
      10008,
      10009
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10011,
    "end": 10019,
    "range": [
      10011,
      10019
    ]
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 10020,
    "end": 10030,
    "range": [
      10020,
      10030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10030,
    "end": 10031,
    "range": [
      10030,
      10031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10031,
    "end": 10032,
    "range": [
      10031,
      10032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10032,
    "end": 10033,
    "range": [
      10032,
      10033
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10034,
    "end": 10043,
    "range": [
      10034,
      10043
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10044,
    "end": 10045,
    "range": [
      10044,
      10045
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10050,
    "end": 10056,
    "range": [
      10050,
      10056
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10057,
    "end": 10060,
    "range": [
      10057,
      10060
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10061,
    "end": 10070,
    "range": [
      10061,
      10070
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10070,
    "end": 10071,
    "range": [
      10070,
      10071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10071,
    "end": 10072,
    "range": [
      10071,
      10072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10072,
    "end": 10073,
    "range": [
      10072,
      10073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10074,
    "end": 10075,
    "range": [
      10074,
      10075
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10077,
    "end": 10083,
    "range": [
      10077,
      10083
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10084,
    "end": 10092,
    "range": [
      10084,
      10092
    ]
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 10093,
    "end": 10103,
    "range": [
      10093,
      10103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10103,
    "end": 10104,
    "range": [
      10103,
      10104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10104,
    "end": 10105,
    "range": [
      10104,
      10105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10105,
    "end": 10106,
    "range": [
      10105,
      10106
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10107,
    "end": 10116,
    "range": [
      10107,
      10116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10117,
    "end": 10118,
    "range": [
      10117,
      10118
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10123,
    "end": 10129,
    "range": [
      10123,
      10129
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10130,
    "end": 10133,
    "range": [
      10130,
      10133
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10134,
    "end": 10143,
    "range": [
      10134,
      10143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10143,
    "end": 10144,
    "range": [
      10143,
      10144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10144,
    "end": 10145,
    "range": [
      10144,
      10145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10145,
    "end": 10146,
    "range": [
      10145,
      10146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10147,
    "end": 10148,
    "range": [
      10147,
      10148
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10150,
    "end": 10158,
    "range": [
      10150,
      10158
    ]
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 10159,
    "end": 10170,
    "range": [
      10159,
      10170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10170,
    "end": 10171,
    "range": [
      10170,
      10171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10171,
    "end": 10172,
    "range": [
      10171,
      10172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10172,
    "end": 10173,
    "range": [
      10172,
      10173
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10174,
    "end": 10184,
    "range": [
      10174,
      10184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10185,
    "end": 10186,
    "range": [
      10185,
      10186
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10191,
    "end": 10197,
    "range": [
      10191,
      10197
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10198,
    "end": 10201,
    "range": [
      10198,
      10201
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10202,
    "end": 10212,
    "range": [
      10202,
      10212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10212,
    "end": 10213,
    "range": [
      10212,
      10213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10213,
    "end": 10214,
    "range": [
      10213,
      10214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10214,
    "end": 10215,
    "range": [
      10214,
      10215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10216,
    "end": 10217,
    "range": [
      10216,
      10217
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10219,
    "end": 10225,
    "range": [
      10219,
      10225
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10226,
    "end": 10234,
    "range": [
      10226,
      10234
    ]
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 10235,
    "end": 10245,
    "range": [
      10235,
      10245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10245,
    "end": 10246,
    "range": [
      10245,
      10246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10246,
    "end": 10247,
    "range": [
      10246,
      10247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10247,
    "end": 10248,
    "range": [
      10247,
      10248
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10249,
    "end": 10259,
    "range": [
      10249,
      10259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10260,
    "end": 10261,
    "range": [
      10260,
      10261
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10275,
    "end": 10281,
    "range": [
      10275,
      10281
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10282,
    "end": 10285,
    "range": [
      10282,
      10285
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10286,
    "end": 10296,
    "range": [
      10286,
      10296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10296,
    "end": 10297,
    "range": [
      10296,
      10297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10297,
    "end": 10298,
    "range": [
      10297,
      10298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10298,
    "end": 10299,
    "range": [
      10298,
      10299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10308,
    "end": 10309,
    "range": [
      10308,
      10309
    ]
  }
]
```
