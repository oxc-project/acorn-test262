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
    "value": "m",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23,
    "range": [
      18,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 24,
    "end": 32,
    "range": [
      24,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58,
    "range": [
      53,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 80,
    "end": 89,
    "range": [
      80,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 90,
    "end": 92,
    "range": [
      90,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115,
    "range": [
      110,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159,
    "range": [
      154,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 210,
    "end": 214,
    "range": [
      210,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 218,
    "end": 226,
    "range": [
      218,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 241,
    "end": 247,
    "range": [
      241,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 305,
    "end": 308,
    "range": [
      305,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 309,
    "end": 313,
    "range": [
      309,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 330,
    "end": 336,
    "range": [
      330,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 337,
    "end": 340,
    "range": [
      337,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 341,
    "end": 349,
    "range": [
      341,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 410,
    "end": 414,
    "range": [
      410,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 415,
    "end": 420,
    "range": [
      415,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 422,
    "end": 430,
    "range": [
      422,
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
    "type": "Identifier",
    "value": "get",
    "start": 521,
    "end": 524,
    "range": [
      521,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 525,
    "end": 529,
    "range": [
      525,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 546,
    "end": 552,
    "range": [
      546,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 553,
    "end": 556,
    "range": [
      553,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 557,
    "end": 565,
    "range": [
      557,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 587,
    "end": 590,
    "range": [
      587,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 591,
    "end": 595,
    "range": [
      591,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 596,
    "end": 601,
    "range": [
      596,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 603,
    "end": 611,
    "range": [
      603,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 672,
    "end": 676,
    "range": [
      672,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 680,
    "end": 688,
    "range": [
      680,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 703,
    "end": 709,
    "range": [
      703,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 729,
    "end": 732,
    "range": [
      729,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 733,
    "end": 737,
    "range": [
      733,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 738,
    "end": 743,
    "range": [
      738,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 745,
    "end": 753,
    "range": [
      745,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 810,
    "end": 813,
    "range": [
      810,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 814,
    "end": 819,
    "range": [
      814,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 823,
    "end": 830,
    "range": [
      823,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 845,
    "end": 851,
    "range": [
      845,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 909,
    "end": 912,
    "range": [
      909,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 913,
    "end": 918,
    "range": [
      913,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 935,
    "end": 941,
    "range": [
      935,
      941
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 942,
    "end": 945,
    "range": [
      942,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 946,
    "end": 953,
    "range": [
      946,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1010,
    "end": 1013,
    "range": [
      1010,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1014,
    "end": 1019,
    "range": [
      1014,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1020,
    "end": 1025,
    "range": [
      1020,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1027,
    "end": 1034,
    "range": [
      1027,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1125,
    "end": 1128,
    "range": [
      1125,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1129,
    "end": 1134,
    "range": [
      1129,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1151,
    "end": 1157,
    "range": [
      1151,
      1157
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1158,
    "end": 1161,
    "range": [
      1158,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1162,
    "end": 1169,
    "range": [
      1162,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1191,
    "end": 1194,
    "range": [
      1191,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1195,
    "end": 1200,
    "range": [
      1195,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1201,
    "end": 1206,
    "range": [
      1201,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1208,
    "end": 1215,
    "range": [
      1208,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1272,
    "end": 1275,
    "range": [
      1272,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1276,
    "end": 1281,
    "range": [
      1276,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1285,
    "end": 1292,
    "range": [
      1285,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1307,
    "end": 1313,
    "range": [
      1307,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1333,
    "end": 1336,
    "range": [
      1333,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1337,
    "end": 1342,
    "range": [
      1337,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1343,
    "end": 1348,
    "range": [
      1343,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1350,
    "end": 1357,
    "range": [
      1350,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1414,
    "end": 1417,
    "range": [
      1414,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "foo111",
    "start": 1418,
    "end": 1424,
    "range": [
      1418,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1428,
    "end": 1430,
    "range": [
      1428,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1431,
    "end": 1438,
    "range": [
      1431,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1453,
    "end": 1459,
    "range": [
      1453,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1517,
    "end": 1520,
    "range": [
      1517,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "foo112",
    "start": 1521,
    "end": 1527,
    "range": [
      1521,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1544,
    "end": 1550,
    "range": [
      1544,
      1550
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1551,
    "end": 1554,
    "range": [
      1551,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1555,
    "end": 1557,
    "range": [
      1555,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1558,
    "end": 1565,
    "range": [
      1558,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1622,
    "end": 1625,
    "range": [
      1622,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "foo113",
    "start": 1626,
    "end": 1632,
    "range": [
      1626,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1633,
    "end": 1638,
    "range": [
      1633,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1640,
    "end": 1642,
    "range": [
      1640,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1643,
    "end": 1650,
    "range": [
      1643,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1741,
    "end": 1744,
    "range": [
      1741,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "foo114",
    "start": 1745,
    "end": 1751,
    "range": [
      1745,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1768,
    "end": 1774,
    "range": [
      1768,
      1774
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1775,
    "end": 1778,
    "range": [
      1775,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1779,
    "end": 1781,
    "range": [
      1779,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1782,
    "end": 1789,
    "range": [
      1782,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1811,
    "end": 1814,
    "range": [
      1811,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "foo114",
    "start": 1815,
    "end": 1821,
    "range": [
      1815,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1822,
    "end": 1827,
    "range": [
      1822,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1829,
    "end": 1831,
    "range": [
      1829,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1832,
    "end": 1839,
    "range": [
      1832,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1896,
    "end": 1899,
    "range": [
      1896,
      1899
    ]
  },
  {
    "type": "Identifier",
    "value": "foo115",
    "start": 1900,
    "end": 1906,
    "range": [
      1900,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1910,
    "end": 1912,
    "range": [
      1910,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1913,
    "end": 1920,
    "range": [
      1913,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1935,
    "end": 1941,
    "range": [
      1935,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1961,
    "end": 1964,
    "range": [
      1961,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "foo115",
    "start": 1965,
    "end": 1971,
    "range": [
      1965,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1972,
    "end": 1977,
    "range": [
      1972,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1979,
    "end": 1981,
    "range": [
      1979,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1982,
    "end": 1989,
    "range": [
      1982,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  }
]
```
