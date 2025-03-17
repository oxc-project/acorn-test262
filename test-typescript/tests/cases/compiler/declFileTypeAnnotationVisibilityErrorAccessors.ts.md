__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2005,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 2004,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "name": "private1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 37,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 71,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 50,
              "end": 71,
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "name": "public1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 64,
                "end": 71,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 77,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 86,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "id": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 117,
                      "name": "public2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 118,
                      "end": 129,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
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
              "id": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 156,
                "end": 2002,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 200,
                    "end": 252,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 208,
                      "name": "foo1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 252,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "private1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 299,
                    "end": 356,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 307,
                      "name": "foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 307,
                      "end": 356,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "name": "private1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 400,
                    "end": 437,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 408,
                      "name": "foo3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 408,
                      "end": 437,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 409,
                          "end": 424,
                          "name": "param",
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
                                "name": "private1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 426,
                        "end": 437,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 515,
                    "end": 572,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 523,
                      "name": "foo4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 523,
                      "end": 572,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "name": "private1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 581,
                    "end": 618,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 585,
                      "end": 589,
                      "name": "foo4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 589,
                      "end": 618,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 590,
                          "end": 605,
                          "name": "param",
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
                                "name": "private1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 607,
                        "end": 618,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 662,
                    "end": 714,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 670,
                      "name": "foo5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 670,
                      "end": 714,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "private1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 723,
                    "end": 760,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 731,
                      "name": "foo5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 731,
                      "end": 760,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 732,
                          "end": 747,
                          "name": "param",
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
                                "name": "private1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 749,
                        "end": 760,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 804,
                    "end": 856,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 813,
                      "name": "foo11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 813,
                      "end": 856,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "public1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 903,
                    "end": 960,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 907,
                      "end": 912,
                      "name": "foo12",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 912,
                      "end": 960,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1004,
                    "end": 1041,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1008,
                      "end": 1013,
                      "name": "foo13",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1013,
                      "end": 1041,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1014,
                          "end": 1028,
                          "name": "param",
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
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1030,
                        "end": 1041,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1119,
                    "end": 1176,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1128,
                      "name": "foo14",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1128,
                      "end": 1176,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1185,
                    "end": 1222,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1189,
                      "end": 1194,
                      "name": "foo14",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1194,
                      "end": 1222,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1195,
                          "end": 1209,
                          "name": "param",
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
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1211,
                        "end": 1222,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1266,
                    "end": 1318,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1270,
                      "end": 1275,
                      "name": "foo15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1275,
                      "end": 1318,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                            "name": "public1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1327,
                    "end": 1364,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1331,
                      "end": 1336,
                      "name": "foo15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1336,
                      "end": 1364,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1337,
                          "end": 1351,
                          "name": "param",
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
                                "name": "public1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1353,
                        "end": 1364,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1408,
                    "end": 1464,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1412,
                      "end": 1418,
                      "name": "foo111",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1418,
                      "end": 1464,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                              "name": "m2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1425,
                              "end": 1432,
                              "name": "public2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1511,
                    "end": 1572,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1515,
                      "end": 1521,
                      "name": "foo112",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1521,
                      "end": 1572,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "m2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1552,
                                  "end": 1559,
                                  "name": "public2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1616,
                    "end": 1657,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1620,
                      "end": 1626,
                      "name": "foo113",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1626,
                      "end": 1657,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1644,
                          "name": "param",
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
                                  "name": "m2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1637,
                                  "end": 1644,
                                  "name": "public2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1646,
                        "end": 1657,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1735,
                    "end": 1796,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1745,
                      "name": "foo114",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1745,
                      "end": 1796,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "m2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1776,
                                  "end": 1783,
                                  "name": "public2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1805,
                    "end": 1846,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1809,
                      "end": 1815,
                      "name": "foo114",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1815,
                      "end": 1846,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1816,
                          "end": 1833,
                          "name": "param",
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
                                  "name": "m2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1826,
                                  "end": 1833,
                                  "name": "public2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1835,
                        "end": 1846,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1890,
                    "end": 1946,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1894,
                      "end": 1900,
                      "name": "foo115",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "get",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1900,
                      "end": 1946,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                              "name": "m2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1907,
                              "end": 1914,
                              "name": "public2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1955,
                    "end": 1996,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1959,
                      "end": 1965,
                      "name": "foo115",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "set",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1965,
                      "end": 1996,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1966,
                          "end": 1983,
                          "name": "param",
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
                                  "name": "m2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 1976,
                                  "end": 1983,
                                  "name": "public2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1985,
                        "end": 1996,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
