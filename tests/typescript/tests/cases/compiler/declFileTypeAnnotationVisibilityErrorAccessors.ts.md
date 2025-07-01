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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 30,
              "end": 37
            },
            "abstract": false,
            "declare": false,
            "start": 15,
            "end": 37
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 63
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 64,
                "end": 71
              },
              "abstract": false,
              "declare": false,
              "start": 50,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 71
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 86
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
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 117
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 118,
                      "end": 129
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 104,
                    "end": 129
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 97,
                  "end": 129
                }
              ],
              "start": 87,
              "end": 135
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 77,
            "end": 135
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
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
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 208
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
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 220
                          },
                          "typeArguments": null,
                          "start": 212,
                          "end": 220
                        },
                        "start": 210,
                        "end": 220
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 235,
                            "end": 242
                          }
                        ],
                        "start": 221,
                        "end": 252
                      },
                      "expression": false,
                      "start": 208,
                      "end": 252
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 200,
                    "end": 252
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 307
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
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 335,
                                "end": 343
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 331,
                              "end": 345
                            },
                            "start": 324,
                            "end": 346
                          }
                        ],
                        "start": 310,
                        "end": 356
                      },
                      "expression": false,
                      "start": 307,
                      "end": 356
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 299,
                    "end": 356
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 408
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 416,
                                "end": 424
                              },
                              "typeArguments": null,
                              "start": 416,
                              "end": 424
                            },
                            "start": 414,
                            "end": 424
                          },
                          "start": 409,
                          "end": 424
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 426,
                        "end": 437
                      },
                      "expression": false,
                      "start": 408,
                      "end": 437
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 400,
                    "end": 437
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 519,
                      "end": 523
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
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 551,
                                "end": 559
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 547,
                              "end": 561
                            },
                            "start": 540,
                            "end": 562
                          }
                        ],
                        "start": 526,
                        "end": 572
                      },
                      "expression": false,
                      "start": 523,
                      "end": 572
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 515,
                    "end": 572
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 589
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 597,
                                "end": 605
                              },
                              "typeArguments": null,
                              "start": 597,
                              "end": 605
                            },
                            "start": 595,
                            "end": 605
                          },
                          "start": 590,
                          "end": 605
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 607,
                        "end": 618
                      },
                      "expression": false,
                      "start": 589,
                      "end": 618
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 581,
                    "end": 618
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 670
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
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 674,
                            "end": 682
                          },
                          "typeArguments": null,
                          "start": 674,
                          "end": 682
                        },
                        "start": 672,
                        "end": 682
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 697,
                            "end": 704
                          }
                        ],
                        "start": 683,
                        "end": 714
                      },
                      "expression": false,
                      "start": 670,
                      "end": 714
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 662,
                    "end": 714
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 727,
                      "end": 731
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 739,
                                "end": 747
                              },
                              "typeArguments": null,
                              "start": 739,
                              "end": 747
                            },
                            "start": 737,
                            "end": 747
                          },
                          "start": 732,
                          "end": 747
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 749,
                        "end": 760
                      },
                      "expression": false,
                      "start": 731,
                      "end": 760
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 723,
                    "end": 760
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 808,
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "public1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 817,
                            "end": 824
                          },
                          "typeArguments": null,
                          "start": 817,
                          "end": 824
                        },
                        "start": 815,
                        "end": 824
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 839,
                            "end": 846
                          }
                        ],
                        "start": 825,
                        "end": 856
                      },
                      "expression": false,
                      "start": 813,
                      "end": 856
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 804,
                    "end": 856
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 907,
                      "end": 912
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
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 940,
                                "end": 947
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 936,
                              "end": 949
                            },
                            "start": 929,
                            "end": 950
                          }
                        ],
                        "start": 915,
                        "end": 960
                      },
                      "expression": false,
                      "start": 912,
                      "end": 960
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 903,
                    "end": 960
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo13",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1013
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1021,
                                "end": 1028
                              },
                              "typeArguments": null,
                              "start": 1021,
                              "end": 1028
                            },
                            "start": 1019,
                            "end": 1028
                          },
                          "start": 1014,
                          "end": 1028
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1030,
                        "end": 1041
                      },
                      "expression": false,
                      "start": 1013,
                      "end": 1041
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1004,
                    "end": 1041
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1123,
                      "end": 1128
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
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1156,
                                "end": 1163
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1152,
                              "end": 1165
                            },
                            "start": 1145,
                            "end": 1166
                          }
                        ],
                        "start": 1131,
                        "end": 1176
                      },
                      "expression": false,
                      "start": 1128,
                      "end": 1176
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1119,
                    "end": 1176
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1189,
                      "end": 1194
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1202,
                                "end": 1209
                              },
                              "typeArguments": null,
                              "start": 1202,
                              "end": 1209
                            },
                            "start": 1200,
                            "end": 1209
                          },
                          "start": 1195,
                          "end": 1209
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1211,
                        "end": 1222
                      },
                      "expression": false,
                      "start": 1194,
                      "end": 1222
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1185,
                    "end": 1222
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1270,
                      "end": 1275
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
                            "name": "public1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1279,
                            "end": 1286
                          },
                          "typeArguments": null,
                          "start": 1279,
                          "end": 1286
                        },
                        "start": 1277,
                        "end": 1286
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1301,
                            "end": 1308
                          }
                        ],
                        "start": 1287,
                        "end": 1318
                      },
                      "expression": false,
                      "start": 1275,
                      "end": 1318
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1266,
                    "end": 1318
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1331,
                      "end": 1336
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1344,
                                "end": 1351
                              },
                              "typeArguments": null,
                              "start": 1344,
                              "end": 1351
                            },
                            "start": 1342,
                            "end": 1351
                          },
                          "start": 1337,
                          "end": 1351
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1353,
                        "end": 1364
                      },
                      "expression": false,
                      "start": 1336,
                      "end": 1364
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1327,
                    "end": 1364
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo111",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1412,
                      "end": 1418
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1422,
                              "end": 1424
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1425,
                              "end": 1432
                            },
                            "start": 1422,
                            "end": 1432
                          },
                          "typeArguments": null,
                          "start": 1422,
                          "end": 1432
                        },
                        "start": 1420,
                        "end": 1432
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1447,
                            "end": 1454
                          }
                        ],
                        "start": 1433,
                        "end": 1464
                      },
                      "expression": false,
                      "start": 1418,
                      "end": 1464
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1408,
                    "end": 1464
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo112",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1515,
                      "end": 1521
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1549,
                                  "end": 1551
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1552,
                                  "end": 1559
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1549,
                                "end": 1559
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1545,
                              "end": 1561
                            },
                            "start": 1538,
                            "end": 1562
                          }
                        ],
                        "start": 1524,
                        "end": 1572
                      },
                      "expression": false,
                      "start": 1521,
                      "end": 1572
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1511,
                    "end": 1572
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo113",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1620,
                      "end": 1626
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1634,
                                  "end": 1636
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1637,
                                  "end": 1644
                                },
                                "start": 1634,
                                "end": 1644
                              },
                              "typeArguments": null,
                              "start": 1634,
                              "end": 1644
                            },
                            "start": 1632,
                            "end": 1644
                          },
                          "start": 1627,
                          "end": 1644
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1646,
                        "end": 1657
                      },
                      "expression": false,
                      "start": 1626,
                      "end": 1657
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1616,
                    "end": 1657
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo114",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1745
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1773,
                                  "end": 1775
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1776,
                                  "end": 1783
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1773,
                                "end": 1783
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1769,
                              "end": 1785
                            },
                            "start": 1762,
                            "end": 1786
                          }
                        ],
                        "start": 1748,
                        "end": 1796
                      },
                      "expression": false,
                      "start": 1745,
                      "end": 1796
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1735,
                    "end": 1796
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo114",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1809,
                      "end": 1815
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1823,
                                  "end": 1825
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1826,
                                  "end": 1833
                                },
                                "start": 1823,
                                "end": 1833
                              },
                              "typeArguments": null,
                              "start": 1823,
                              "end": 1833
                            },
                            "start": 1821,
                            "end": 1833
                          },
                          "start": 1816,
                          "end": 1833
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1835,
                        "end": 1846
                      },
                      "expression": false,
                      "start": 1815,
                      "end": 1846
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1805,
                    "end": 1846
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo115",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1894,
                      "end": 1900
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1904,
                              "end": 1906
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1907,
                              "end": 1914
                            },
                            "start": 1904,
                            "end": 1914
                          },
                          "typeArguments": null,
                          "start": 1904,
                          "end": 1914
                        },
                        "start": 1902,
                        "end": 1914
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1929,
                            "end": 1936
                          }
                        ],
                        "start": 1915,
                        "end": 1946
                      },
                      "expression": false,
                      "start": 1900,
                      "end": 1946
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1890,
                    "end": 1946
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo115",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1959,
                      "end": 1965
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1973,
                                  "end": 1975
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1976,
                                  "end": 1983
                                },
                                "start": 1973,
                                "end": 1983
                              },
                              "typeArguments": null,
                              "start": 1973,
                              "end": 1983
                            },
                            "start": 1971,
                            "end": 1983
                          },
                          "start": 1966,
                          "end": 1983
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1985,
                        "end": 1996
                      },
                      "expression": false,
                      "start": 1965,
                      "end": 1996
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1955,
                    "end": 1996
                  }
                ],
                "start": 156,
                "end": 2002
              },
              "abstract": false,
              "declare": false,
              "start": 148,
              "end": 2002
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 141,
            "end": 2002
          }
        ],
        "start": 9,
        "end": 2004
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2004
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2004
}
```
