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
        "start": 10,
        "end": 11
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
              "start": 24,
              "end": 32
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 33,
              "end": 40
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 40
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
                "start": 59,
                "end": 66
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 67,
                "end": 74
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 74
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 92
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
                      "start": 116,
                      "end": 123
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 124,
                      "end": 135
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 110,
                    "end": 135
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 103,
                  "end": 135
                }
              ],
              "start": 93,
              "end": 141
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 80,
            "end": 141
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
                "start": 160,
                "end": 161
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
                      "start": 210,
                      "end": 214
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
                            "start": 218,
                            "end": 226
                          },
                          "typeArguments": null,
                          "start": 218,
                          "end": 226
                        },
                        "start": 216,
                        "end": 226
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 241,
                            "end": 248
                          }
                        ],
                        "start": 227,
                        "end": 258
                      },
                      "expression": false,
                      "start": 214,
                      "end": 258
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 206,
                    "end": 258
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
                      "start": 309,
                      "end": 313
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
                                "start": 341,
                                "end": 349
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 337,
                              "end": 351
                            },
                            "start": 330,
                            "end": 352
                          }
                        ],
                        "start": 316,
                        "end": 362
                      },
                      "expression": false,
                      "start": 313,
                      "end": 362
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 305,
                    "end": 362
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
                      "start": 410,
                      "end": 414
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
                                "start": 422,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 422,
                              "end": 430
                            },
                            "start": 420,
                            "end": 430
                          },
                          "start": 415,
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
                      "start": 414,
                      "end": 443
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 406,
                    "end": 443
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
                      "start": 525,
                      "end": 529
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
                                "start": 557,
                                "end": 565
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 553,
                              "end": 567
                            },
                            "start": 546,
                            "end": 568
                          }
                        ],
                        "start": 532,
                        "end": 578
                      },
                      "expression": false,
                      "start": 529,
                      "end": 578
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 521,
                    "end": 578
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
                      "start": 591,
                      "end": 595
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
                                "start": 603,
                                "end": 611
                              },
                              "typeArguments": null,
                              "start": 603,
                              "end": 611
                            },
                            "start": 601,
                            "end": 611
                          },
                          "start": 596,
                          "end": 611
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 613,
                        "end": 624
                      },
                      "expression": false,
                      "start": 595,
                      "end": 624
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 587,
                    "end": 624
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
                      "start": 672,
                      "end": 676
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
                            "start": 680,
                            "end": 688
                          },
                          "typeArguments": null,
                          "start": 680,
                          "end": 688
                        },
                        "start": 678,
                        "end": 688
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 703,
                            "end": 710
                          }
                        ],
                        "start": 689,
                        "end": 720
                      },
                      "expression": false,
                      "start": 676,
                      "end": 720
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 668,
                    "end": 720
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
                      "start": 733,
                      "end": 737
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
                                "start": 745,
                                "end": 753
                              },
                              "typeArguments": null,
                              "start": 745,
                              "end": 753
                            },
                            "start": 743,
                            "end": 753
                          },
                          "start": 738,
                          "end": 753
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 755,
                        "end": 766
                      },
                      "expression": false,
                      "start": 737,
                      "end": 766
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 729,
                    "end": 766
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
                      "start": 814,
                      "end": 819
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
                            "start": 823,
                            "end": 830
                          },
                          "typeArguments": null,
                          "start": 823,
                          "end": 830
                        },
                        "start": 821,
                        "end": 830
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 845,
                            "end": 852
                          }
                        ],
                        "start": 831,
                        "end": 862
                      },
                      "expression": false,
                      "start": 819,
                      "end": 862
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 810,
                    "end": 862
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
                      "start": 913,
                      "end": 918
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
                                "start": 946,
                                "end": 953
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 942,
                              "end": 955
                            },
                            "start": 935,
                            "end": 956
                          }
                        ],
                        "start": 921,
                        "end": 966
                      },
                      "expression": false,
                      "start": 918,
                      "end": 966
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 909,
                    "end": 966
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
                      "start": 1014,
                      "end": 1019
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
                                "start": 1027,
                                "end": 1034
                              },
                              "typeArguments": null,
                              "start": 1027,
                              "end": 1034
                            },
                            "start": 1025,
                            "end": 1034
                          },
                          "start": 1020,
                          "end": 1034
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1036,
                        "end": 1047
                      },
                      "expression": false,
                      "start": 1019,
                      "end": 1047
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1010,
                    "end": 1047
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
                      "start": 1129,
                      "end": 1134
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
                                "start": 1162,
                                "end": 1169
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1158,
                              "end": 1171
                            },
                            "start": 1151,
                            "end": 1172
                          }
                        ],
                        "start": 1137,
                        "end": 1182
                      },
                      "expression": false,
                      "start": 1134,
                      "end": 1182
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1125,
                    "end": 1182
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
                      "start": 1195,
                      "end": 1200
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
                                "start": 1208,
                                "end": 1215
                              },
                              "typeArguments": null,
                              "start": 1208,
                              "end": 1215
                            },
                            "start": 1206,
                            "end": 1215
                          },
                          "start": 1201,
                          "end": 1215
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1217,
                        "end": 1228
                      },
                      "expression": false,
                      "start": 1200,
                      "end": 1228
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1191,
                    "end": 1228
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
                      "start": 1276,
                      "end": 1281
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
                            "start": 1285,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1285,
                          "end": 1292
                        },
                        "start": 1283,
                        "end": 1292
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1307,
                            "end": 1314
                          }
                        ],
                        "start": 1293,
                        "end": 1324
                      },
                      "expression": false,
                      "start": 1281,
                      "end": 1324
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1272,
                    "end": 1324
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
                      "start": 1337,
                      "end": 1342
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
                                "start": 1350,
                                "end": 1357
                              },
                              "typeArguments": null,
                              "start": 1350,
                              "end": 1357
                            },
                            "start": 1348,
                            "end": 1357
                          },
                          "start": 1343,
                          "end": 1357
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1359,
                        "end": 1370
                      },
                      "expression": false,
                      "start": 1342,
                      "end": 1370
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1333,
                    "end": 1370
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
                      "start": 1418,
                      "end": 1424
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
                              "start": 1428,
                              "end": 1430
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1431,
                              "end": 1438
                            },
                            "start": 1428,
                            "end": 1438
                          },
                          "typeArguments": null,
                          "start": 1428,
                          "end": 1438
                        },
                        "start": 1426,
                        "end": 1438
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1453,
                            "end": 1460
                          }
                        ],
                        "start": 1439,
                        "end": 1470
                      },
                      "expression": false,
                      "start": 1424,
                      "end": 1470
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1414,
                    "end": 1470
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
                      "start": 1521,
                      "end": 1527
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
                                  "start": 1555,
                                  "end": 1557
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1558,
                                  "end": 1565
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1555,
                                "end": 1565
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1551,
                              "end": 1567
                            },
                            "start": 1544,
                            "end": 1568
                          }
                        ],
                        "start": 1530,
                        "end": 1578
                      },
                      "expression": false,
                      "start": 1527,
                      "end": 1578
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1517,
                    "end": 1578
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
                      "start": 1626,
                      "end": 1632
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
                                  "start": 1640,
                                  "end": 1642
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1643,
                                  "end": 1650
                                },
                                "start": 1640,
                                "end": 1650
                              },
                              "typeArguments": null,
                              "start": 1640,
                              "end": 1650
                            },
                            "start": 1638,
                            "end": 1650
                          },
                          "start": 1633,
                          "end": 1650
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1652,
                        "end": 1663
                      },
                      "expression": false,
                      "start": 1632,
                      "end": 1663
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1622,
                    "end": 1663
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
                      "start": 1745,
                      "end": 1751
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
                                  "start": 1779,
                                  "end": 1781
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1782,
                                  "end": 1789
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1779,
                                "end": 1789
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1775,
                              "end": 1791
                            },
                            "start": 1768,
                            "end": 1792
                          }
                        ],
                        "start": 1754,
                        "end": 1802
                      },
                      "expression": false,
                      "start": 1751,
                      "end": 1802
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1741,
                    "end": 1802
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
                      "start": 1815,
                      "end": 1821
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
                                  "start": 1829,
                                  "end": 1831
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1832,
                                  "end": 1839
                                },
                                "start": 1829,
                                "end": 1839
                              },
                              "typeArguments": null,
                              "start": 1829,
                              "end": 1839
                            },
                            "start": 1827,
                            "end": 1839
                          },
                          "start": 1822,
                          "end": 1839
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1841,
                        "end": 1852
                      },
                      "expression": false,
                      "start": 1821,
                      "end": 1852
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1811,
                    "end": 1852
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
                      "start": 1900,
                      "end": 1906
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
                              "start": 1910,
                              "end": 1912
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1913,
                              "end": 1920
                            },
                            "start": 1910,
                            "end": 1920
                          },
                          "typeArguments": null,
                          "start": 1910,
                          "end": 1920
                        },
                        "start": 1908,
                        "end": 1920
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1935,
                            "end": 1942
                          }
                        ],
                        "start": 1921,
                        "end": 1952
                      },
                      "expression": false,
                      "start": 1906,
                      "end": 1952
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1896,
                    "end": 1952
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
                      "start": 1965,
                      "end": 1971
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
                                  "start": 1979,
                                  "end": 1981
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1982,
                                  "end": 1989
                                },
                                "start": 1979,
                                "end": 1989
                              },
                              "typeArguments": null,
                              "start": 1979,
                              "end": 1989
                            },
                            "start": 1977,
                            "end": 1989
                          },
                          "start": 1972,
                          "end": 1989
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1991,
                        "end": 2002
                      },
                      "expression": false,
                      "start": 1971,
                      "end": 2002
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1961,
                    "end": 2002
                  }
                ],
                "start": 162,
                "end": 2008
              },
              "abstract": false,
              "declare": false,
              "start": 154,
              "end": 2008
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 2008
          }
        ],
        "start": 12,
        "end": 2010
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2010
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2010
}
```
