__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2004,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 2004,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 2004,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 37,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 37,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 71,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 50,
              "end": 71,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 64,
                "end": 71,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 77,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 86,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 87,
              "end": 135,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 97,
                  "end": 129,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 104,
                    "end": 129,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 117,
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 118,
                      "end": 129,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 141,
            "end": 2002,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 148,
              "end": 2002,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 156,
                "end": 2002,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 200,
                    "end": 252,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 208,
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 252,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 210,
                        "end": 220,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 212,
                          "end": 220,
                          "typeName": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 220,
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 221,
                        "end": 252,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 235,
                            "end": 242,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 299,
                    "end": 356,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 307,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 307,
                      "end": 356,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 310,
                        "end": 356,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 324,
                            "end": 346,
                            "argument": {
                              "type": "NewExpression",
                              "start": 331,
                              "end": 345,
                              "callee": {
                                "type": "Identifier",
                                "start": 335,
                                "end": 343,
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 400,
                    "end": 437,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 408,
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 408,
                      "end": 437,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 409,
                          "end": 424,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 414,
                            "end": 424,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 416,
                              "end": 424,
                              "typeName": {
                                "type": "Identifier",
                                "start": 416,
                                "end": 424,
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 426,
                        "end": 437,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 515,
                    "end": 572,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 523,
                      "decorators": [],
                      "name": "foo4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 523,
                      "end": 572,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 526,
                        "end": 572,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 540,
                            "end": 562,
                            "argument": {
                              "type": "NewExpression",
                              "start": 547,
                              "end": 561,
                              "callee": {
                                "type": "Identifier",
                                "start": 551,
                                "end": 559,
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 581,
                    "end": 618,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 585,
                      "end": 589,
                      "decorators": [],
                      "name": "foo4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 589,
                      "end": 618,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 590,
                          "end": 605,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 595,
                            "end": 605,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 597,
                              "end": 605,
                              "typeName": {
                                "type": "Identifier",
                                "start": 597,
                                "end": 605,
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 607,
                        "end": 618,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 662,
                    "end": 714,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 670,
                      "decorators": [],
                      "name": "foo5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 670,
                      "end": 714,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 672,
                        "end": 682,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 674,
                          "end": 682,
                          "typeName": {
                            "type": "Identifier",
                            "start": 674,
                            "end": 682,
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 683,
                        "end": 714,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 697,
                            "end": 704,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 723,
                    "end": 760,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 731,
                      "decorators": [],
                      "name": "foo5",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 731,
                      "end": 760,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 732,
                          "end": 747,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 737,
                            "end": 747,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 739,
                              "end": 747,
                              "typeName": {
                                "type": "Identifier",
                                "start": 739,
                                "end": 747,
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 749,
                        "end": 760,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 804,
                    "end": 856,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 813,
                      "decorators": [],
                      "name": "foo11",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 813,
                      "end": 856,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 815,
                        "end": 824,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 817,
                          "end": 824,
                          "typeName": {
                            "type": "Identifier",
                            "start": 817,
                            "end": 824,
                            "decorators": [],
                            "name": "public1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 825,
                        "end": 856,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 839,
                            "end": 846,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 903,
                    "end": 960,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 907,
                      "end": 912,
                      "decorators": [],
                      "name": "foo12",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 912,
                      "end": 960,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 915,
                        "end": 960,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 929,
                            "end": 950,
                            "argument": {
                              "type": "NewExpression",
                              "start": 936,
                              "end": 949,
                              "callee": {
                                "type": "Identifier",
                                "start": 940,
                                "end": 947,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1004,
                    "end": 1041,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1013,
                      "decorators": [],
                      "name": "foo13",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1013,
                      "end": 1041,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1014,
                          "end": 1028,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1019,
                            "end": 1028,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1021,
                              "end": 1028,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1021,
                                "end": 1028,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1030,
                        "end": 1041,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1119,
                    "end": 1176,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1128,
                      "decorators": [],
                      "name": "foo14",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1128,
                      "end": 1176,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1131,
                        "end": 1176,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1145,
                            "end": 1166,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1152,
                              "end": 1165,
                              "callee": {
                                "type": "Identifier",
                                "start": 1156,
                                "end": 1163,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1185,
                    "end": 1222,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1189,
                      "end": 1194,
                      "decorators": [],
                      "name": "foo14",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1194,
                      "end": 1222,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1195,
                          "end": 1209,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1200,
                            "end": 1209,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1202,
                              "end": 1209,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1202,
                                "end": 1209,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1211,
                        "end": 1222,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1266,
                    "end": 1318,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1275,
                      "decorators": [],
                      "name": "foo15",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1275,
                      "end": 1318,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1277,
                        "end": 1286,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1279,
                          "end": 1286,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1279,
                            "end": 1286,
                            "decorators": [],
                            "name": "public1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1287,
                        "end": 1318,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1301,
                            "end": 1308,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1327,
                    "end": 1364,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1331,
                      "end": 1336,
                      "decorators": [],
                      "name": "foo15",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1336,
                      "end": 1364,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1337,
                          "end": 1351,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1342,
                            "end": 1351,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1344,
                              "end": 1351,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1344,
                                "end": 1351,
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1353,
                        "end": 1364,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1408,
                    "end": 1464,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1412,
                      "end": 1418,
                      "decorators": [],
                      "name": "foo111",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1418,
                      "end": 1464,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1420,
                        "end": 1432,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1422,
                          "end": 1432,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 1422,
                            "end": 1432,
                            "left": {
                              "type": "Identifier",
                              "start": 1422,
                              "end": 1424,
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1425,
                              "end": 1432,
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1433,
                        "end": 1464,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1447,
                            "end": 1454,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1511,
                    "end": 1572,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1521,
                      "decorators": [],
                      "name": "foo112",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1521,
                      "end": 1572,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1524,
                        "end": 1572,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1538,
                            "end": 1562,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1545,
                              "end": 1561,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1549,
                                "end": 1559,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1549,
                                  "end": 1551,
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1552,
                                  "end": 1559,
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1616,
                    "end": 1657,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1620,
                      "end": 1626,
                      "decorators": [],
                      "name": "foo113",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1626,
                      "end": 1657,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1644,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1632,
                            "end": 1644,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1634,
                              "end": 1644,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 1634,
                                "end": 1644,
                                "left": {
                                  "type": "Identifier",
                                  "start": 1634,
                                  "end": 1636,
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1637,
                                  "end": 1644,
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1646,
                        "end": 1657,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1735,
                    "end": 1796,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1745,
                      "decorators": [],
                      "name": "foo114",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1745,
                      "end": 1796,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1748,
                        "end": 1796,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1762,
                            "end": 1786,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1769,
                              "end": 1785,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1773,
                                "end": 1783,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1773,
                                  "end": 1775,
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1776,
                                  "end": 1783,
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": []
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1805,
                    "end": 1846,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1809,
                      "end": 1815,
                      "decorators": [],
                      "name": "foo114",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1815,
                      "end": 1846,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1816,
                          "end": 1833,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1821,
                            "end": 1833,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1823,
                              "end": 1833,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 1823,
                                "end": 1833,
                                "left": {
                                  "type": "Identifier",
                                  "start": 1823,
                                  "end": 1825,
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1826,
                                  "end": 1833,
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1835,
                        "end": 1846,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1890,
                    "end": 1946,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1894,
                      "end": 1900,
                      "decorators": [],
                      "name": "foo115",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1900,
                      "end": 1946,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1902,
                        "end": 1914,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1904,
                          "end": 1914,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 1904,
                            "end": 1914,
                            "left": {
                              "type": "Identifier",
                              "start": 1904,
                              "end": 1906,
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1907,
                              "end": 1914,
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1915,
                        "end": 1946,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1929,
                            "end": 1936,
                            "argument": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1955,
                    "end": 1996,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1959,
                      "end": 1965,
                      "decorators": [],
                      "name": "foo115",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1965,
                      "end": 1996,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1966,
                          "end": 1983,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1971,
                            "end": 1983,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1973,
                              "end": 1983,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 1973,
                                "end": 1983,
                                "left": {
                                  "type": "Identifier",
                                  "start": 1973,
                                  "end": 1975,
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1976,
                                  "end": 1983,
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1985,
                        "end": 1996,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
