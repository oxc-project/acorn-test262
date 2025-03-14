__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4135,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 1440,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 1440,
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 1440,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 86,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 30,
                "end": 86,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 46,
                  "end": 86,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 56,
                      "end": 80,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 66,
                        "decorators": [],
                        "name": "f1",
                        "optional": false
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 66,
                        "end": 80,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 69,
                          "end": 80,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "decorators": [],
                  "name": "C1_public",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 92,
              "end": 116,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 109,
                "end": 116,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 98,
                "end": 108,
                "decorators": [],
                "name": "C2_private",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 122,
              "end": 793,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 129,
                "end": 793,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 145,
                  "end": 793,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 155,
                      "end": 227,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 177,
                        "decorators": [],
                        "name": "p1_private",
                        "optional": false
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 177,
                        "end": 227,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 180,
                          "end": 227,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 194,
                              "end": 217,
                              "argument": {
                                "type": "NewExpression",
                                "start": 201,
                                "end": 216,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 205,
                                  "end": 214,
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 237,
                      "end": 296,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 259,
                        "decorators": [],
                        "name": "p1_private",
                        "optional": false
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 259,
                        "end": 296,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 285,
                          "end": 296,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 260,
                            "end": 283,
                            "decorators": [],
                            "name": "m1_c3_p1_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 272,
                              "end": 283,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 274,
                                "end": 283,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 274,
                                  "end": 283,
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 306,
                      "end": 378,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 328,
                        "decorators": [],
                        "name": "p2_private",
                        "optional": false
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 328,
                        "end": 378,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 331,
                          "end": 378,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 345,
                              "end": 368,
                              "argument": {
                                "type": "NewExpression",
                                "start": 352,
                                "end": 367,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 356,
                                  "end": 365,
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 388,
                      "end": 447,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 410,
                        "decorators": [],
                        "name": "p2_private",
                        "optional": false
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 410,
                        "end": 447,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 436,
                          "end": 447,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 411,
                            "end": 434,
                            "decorators": [],
                            "name": "m1_c3_p2_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 423,
                              "end": 434,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 425,
                                "end": 434,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 425,
                                  "end": 434,
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 457,
                      "end": 530,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 479,
                        "decorators": [],
                        "name": "p3_private",
                        "optional": false
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 479,
                        "end": 530,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 482,
                          "end": 530,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 496,
                              "end": 520,
                              "argument": {
                                "type": "NewExpression",
                                "start": 503,
                                "end": 519,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 507,
                                  "end": 517,
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 540,
                      "end": 600,
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 562,
                        "decorators": [],
                        "name": "p3_private",
                        "optional": false
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 562,
                        "end": 600,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 589,
                          "end": 600,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 563,
                            "end": 587,
                            "decorators": [],
                            "name": "m1_c3_p3_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 575,
                              "end": 587,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 577,
                                "end": 587,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 577,
                                  "end": 587,
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 610,
                      "end": 710,
                      "accessibility": "public",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 630,
                        "decorators": [],
                        "name": "p4_public",
                        "optional": false
                      },
                      "kind": "get",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 630,
                        "end": 710,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 645,
                          "end": 710,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 668,
                              "end": 692,
                              "argument": {
                                "type": "NewExpression",
                                "start": 675,
                                "end": 691,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 679,
                                  "end": 689,
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 632,
                          "end": 644,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 634,
                            "end": 644,
                            "typeName": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 644,
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 720,
                      "end": 787,
                      "accessibility": "public",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 740,
                        "decorators": [],
                        "name": "p4_public",
                        "optional": false
                      },
                      "kind": "set",
                      "optional": false,
                      "override": false,
                      "static": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 740,
                        "end": 787,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 767,
                          "end": 787,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 741,
                            "end": 765,
                            "decorators": [],
                            "name": "m1_c3_p4_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 753,
                              "end": 765,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 755,
                                "end": 765,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 755,
                                  "end": 765,
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "decorators": [],
                  "name": "C3_public",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 799,
              "end": 1438,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 816,
                "end": 1438,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 826,
                    "end": 898,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 838,
                      "end": 848,
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 848,
                      "end": 898,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 851,
                        "end": 898,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 865,
                            "end": 888,
                            "argument": {
                              "type": "NewExpression",
                              "start": 872,
                              "end": 887,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 876,
                                "end": 885,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 908,
                    "end": 967,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 920,
                      "end": 930,
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 930,
                      "end": 967,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 956,
                        "end": 967,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 931,
                          "end": 954,
                          "decorators": [],
                          "name": "m1_c3_p1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 943,
                            "end": 954,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 945,
                              "end": 954,
                              "typeName": {
                                "type": "Identifier",
                                "start": 945,
                                "end": 954,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 977,
                    "end": 1049,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 989,
                      "end": 999,
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 999,
                      "end": 1049,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1002,
                        "end": 1049,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1016,
                            "end": 1039,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1023,
                              "end": 1038,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 1027,
                                "end": 1036,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1059,
                    "end": 1118,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1081,
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1081,
                      "end": 1118,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1107,
                        "end": 1118,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1082,
                          "end": 1105,
                          "decorators": [],
                          "name": "m1_c3_p2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1094,
                            "end": 1105,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1096,
                              "end": 1105,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1096,
                                "end": 1105,
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1128,
                    "end": 1201,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1140,
                      "end": 1150,
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1150,
                      "end": 1201,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1153,
                        "end": 1201,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1167,
                            "end": 1191,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1174,
                              "end": 1190,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 1178,
                                "end": 1188,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1211,
                    "end": 1271,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1223,
                      "end": 1233,
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1233,
                      "end": 1271,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1260,
                        "end": 1271,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1234,
                          "end": 1258,
                          "decorators": [],
                          "name": "m1_c3_p3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1246,
                            "end": 1258,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1248,
                              "end": 1258,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1248,
                                "end": 1258,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1281,
                    "end": 1364,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1292,
                      "end": 1301,
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1301,
                      "end": 1364,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1316,
                        "end": 1364,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1330,
                            "end": 1354,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1337,
                              "end": 1353,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 1341,
                                "end": 1351,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1303,
                        "end": 1315,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1305,
                          "end": 1315,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1305,
                            "end": 1315,
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1374,
                    "end": 1432,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1385,
                      "end": 1394,
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1394,
                      "end": 1432,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1421,
                        "end": 1432,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1395,
                          "end": 1419,
                          "decorators": [],
                          "name": "m1_c3_p4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1407,
                            "end": 1419,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1409,
                              "end": 1419,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1409,
                                "end": 1419,
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 805,
                "end": 815,
                "decorators": [],
                "name": "C4_private",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "m1",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1442,
      "end": 2915,
      "body": {
        "type": "TSModuleBlock",
        "start": 1452,
        "end": 2915,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1458,
            "end": 1524,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1465,
              "end": 1524,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1484,
                "end": 1524,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1494,
                    "end": 1518,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1502,
                      "end": 1504,
                      "decorators": [],
                      "name": "f1",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1504,
                      "end": 1518,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1507,
                        "end": 1518,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1471,
                "end": 1483,
                "decorators": [],
                "name": "m2_C1_public",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 1530,
            "end": 1557,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1550,
              "end": 1557,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1536,
              "end": 1549,
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1563,
            "end": 2238,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1570,
              "end": 2238,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1589,
                "end": 2238,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1599,
                    "end": 1674,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1611,
                      "end": 1621,
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1621,
                      "end": 1674,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1624,
                        "end": 1674,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1638,
                            "end": 1664,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1645,
                              "end": 1663,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 1649,
                                "end": 1661,
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1684,
                    "end": 1746,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1696,
                      "end": 1706,
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1706,
                      "end": 1746,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1735,
                        "end": 1746,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1707,
                          "end": 1733,
                          "decorators": [],
                          "name": "m2_c3_p1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1719,
                            "end": 1733,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1721,
                              "end": 1733,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1721,
                                "end": 1733,
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1756,
                    "end": 1831,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1768,
                      "end": 1778,
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1778,
                      "end": 1831,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1781,
                        "end": 1831,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1795,
                            "end": 1821,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1802,
                              "end": 1820,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 1806,
                                "end": 1818,
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1841,
                    "end": 1903,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1853,
                      "end": 1863,
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1863,
                      "end": 1903,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1892,
                        "end": 1903,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1864,
                          "end": 1890,
                          "decorators": [],
                          "name": "m2_c3_p2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1876,
                            "end": 1890,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1878,
                              "end": 1890,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1878,
                                "end": 1890,
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1913,
                    "end": 1989,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1925,
                      "end": 1935,
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1935,
                      "end": 1989,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1938,
                        "end": 1989,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1952,
                            "end": 1979,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1959,
                              "end": 1978,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 1963,
                                "end": 1976,
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1999,
                    "end": 2062,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2011,
                      "end": 2021,
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2021,
                      "end": 2062,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2051,
                        "end": 2062,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2022,
                          "end": 2049,
                          "decorators": [],
                          "name": "m2_c3_p3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2034,
                            "end": 2049,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2036,
                              "end": 2049,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2036,
                                "end": 2049,
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2072,
                    "end": 2161,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2083,
                      "end": 2092,
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false
                    },
                    "kind": "get",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2092,
                      "end": 2161,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2110,
                        "end": 2161,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2124,
                            "end": 2151,
                            "argument": {
                              "type": "NewExpression",
                              "start": 2131,
                              "end": 2150,
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "start": 2135,
                                "end": 2148,
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2094,
                        "end": 2109,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2096,
                          "end": 2109,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2096,
                            "end": 2109,
                            "decorators": [],
                            "name": "m2_C2_private",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2171,
                    "end": 2232,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2182,
                      "end": 2191,
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false
                    },
                    "kind": "set",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2191,
                      "end": 2232,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2221,
                        "end": 2232,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2192,
                          "end": 2219,
                          "decorators": [],
                          "name": "m2_c3_p4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2204,
                            "end": 2219,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2206,
                              "end": 2219,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2206,
                                "end": 2219,
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1576,
                "end": 1588,
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 2244,
            "end": 2913,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2264,
              "end": 2913,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 2274,
                  "end": 2349,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2286,
                    "end": 2296,
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2296,
                    "end": 2349,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2299,
                      "end": 2349,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2313,
                          "end": 2339,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2320,
                            "end": 2338,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 2324,
                              "end": 2336,
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2359,
                  "end": 2421,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2371,
                    "end": 2381,
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2381,
                    "end": 2421,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2410,
                      "end": 2421,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2382,
                        "end": 2408,
                        "decorators": [],
                        "name": "m2_c3_p1_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2394,
                          "end": 2408,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2396,
                            "end": 2408,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2396,
                              "end": 2408,
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2431,
                  "end": 2506,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2443,
                    "end": 2453,
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2453,
                    "end": 2506,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2456,
                      "end": 2506,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2470,
                          "end": 2496,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2477,
                            "end": 2495,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 2481,
                              "end": 2493,
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2516,
                  "end": 2578,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2528,
                    "end": 2538,
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2538,
                    "end": 2578,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2567,
                      "end": 2578,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2539,
                        "end": 2565,
                        "decorators": [],
                        "name": "m2_c3_p2_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2551,
                          "end": 2565,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2553,
                            "end": 2565,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2553,
                              "end": 2565,
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2588,
                  "end": 2664,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2600,
                    "end": 2610,
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2610,
                    "end": 2664,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2613,
                      "end": 2664,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2627,
                          "end": 2654,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2634,
                            "end": 2653,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 2638,
                              "end": 2651,
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2674,
                  "end": 2737,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2686,
                    "end": 2696,
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2696,
                    "end": 2737,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2726,
                      "end": 2737,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2697,
                        "end": 2724,
                        "decorators": [],
                        "name": "m2_c3_p3_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2709,
                          "end": 2724,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2711,
                            "end": 2724,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2711,
                              "end": 2724,
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2747,
                  "end": 2836,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2758,
                    "end": 2767,
                    "decorators": [],
                    "name": "p4_public",
                    "optional": false
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2767,
                    "end": 2836,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2785,
                      "end": 2836,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2799,
                          "end": 2826,
                          "argument": {
                            "type": "NewExpression",
                            "start": 2806,
                            "end": 2825,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 2810,
                              "end": 2823,
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 2769,
                      "end": 2784,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2771,
                        "end": 2784,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2771,
                          "end": 2784,
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 2846,
                  "end": 2907,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 2857,
                    "end": 2866,
                    "decorators": [],
                    "name": "p4_public",
                    "optional": false
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 2866,
                    "end": 2907,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2896,
                      "end": 2907,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2867,
                        "end": 2894,
                        "decorators": [],
                        "name": "m2_c3_p4_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2879,
                          "end": 2894,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2881,
                            "end": 2894,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2881,
                              "end": 2894,
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2250,
              "end": 2263,
              "decorators": [],
              "name": "m2_C4_private",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1449,
        "end": 1451,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 2917,
      "end": 2961,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2934,
        "end": 2961,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2940,
            "end": 2959,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2948,
              "end": 2949,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2949,
              "end": 2959,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2952,
                "end": 2959,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2923,
        "end": 2933,
        "decorators": [],
        "name": "C5_private",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2963,
      "end": 2989,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2970,
        "end": 2989,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 2986,
          "end": 2989,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 2976,
          "end": 2985,
          "decorators": [],
          "name": "C6_public",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2991,
      "end": 3578,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 2998,
        "end": 3578,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 3014,
          "end": 3578,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 3020,
              "end": 3084,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3032,
                "end": 3042,
                "decorators": [],
                "name": "p1_private",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3042,
                "end": 3084,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3045,
                  "end": 3084,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3055,
                      "end": 3078,
                      "argument": {
                        "type": "NewExpression",
                        "start": 3062,
                        "end": 3077,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 3066,
                          "end": 3075,
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3090,
              "end": 3145,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3102,
                "end": 3112,
                "decorators": [],
                "name": "p1_private",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3112,
                "end": 3145,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3138,
                  "end": 3145,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3113,
                    "end": 3136,
                    "decorators": [],
                    "name": "m1_c3_p1_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3125,
                      "end": 3136,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3127,
                        "end": 3136,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3127,
                          "end": 3136,
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3151,
              "end": 3215,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3163,
                "end": 3173,
                "decorators": [],
                "name": "p2_private",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3173,
                "end": 3215,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3176,
                  "end": 3215,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3186,
                      "end": 3209,
                      "argument": {
                        "type": "NewExpression",
                        "start": 3193,
                        "end": 3208,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 3197,
                          "end": 3206,
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3221,
              "end": 3276,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3233,
                "end": 3243,
                "decorators": [],
                "name": "p2_private",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3243,
                "end": 3276,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3269,
                  "end": 3276,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3244,
                    "end": 3267,
                    "decorators": [],
                    "name": "m1_c3_p2_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3256,
                      "end": 3267,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3258,
                        "end": 3267,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3258,
                          "end": 3267,
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3282,
              "end": 3347,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3294,
                "end": 3304,
                "decorators": [],
                "name": "p3_private",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3304,
                "end": 3347,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3307,
                  "end": 3347,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3317,
                      "end": 3341,
                      "argument": {
                        "type": "NewExpression",
                        "start": 3324,
                        "end": 3340,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 3328,
                          "end": 3338,
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3353,
              "end": 3409,
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3365,
                "end": 3375,
                "decorators": [],
                "name": "p3_private",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3375,
                "end": 3409,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3402,
                  "end": 3409,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3376,
                    "end": 3400,
                    "decorators": [],
                    "name": "m1_c3_p3_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3388,
                      "end": 3400,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3390,
                        "end": 3400,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3390,
                          "end": 3400,
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3415,
              "end": 3507,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3426,
                "end": 3435,
                "decorators": [],
                "name": "p4_public",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3435,
                "end": 3507,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3450,
                  "end": 3507,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3469,
                      "end": 3493,
                      "argument": {
                        "type": "NewExpression",
                        "start": 3476,
                        "end": 3492,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 3480,
                          "end": 3490,
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3437,
                  "end": 3449,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3439,
                    "end": 3449,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3439,
                      "end": 3449,
                      "decorators": [],
                      "name": "C5_private",
                      "optional": false
                    }
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 3513,
              "end": 3576,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3524,
                "end": 3533,
                "decorators": [],
                "name": "p4_public",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 3533,
                "end": 3576,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3560,
                  "end": 3576,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3534,
                    "end": 3558,
                    "decorators": [],
                    "name": "m1_c3_p4_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3546,
                      "end": 3558,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3548,
                        "end": 3558,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3548,
                          "end": 3558,
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 3004,
          "end": 3013,
          "decorators": [],
          "name": "C7_public",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 3580,
      "end": 4135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3597,
        "end": 4135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3603,
            "end": 3667,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3615,
              "end": 3625,
              "decorators": [],
              "name": "p1_private",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3625,
              "end": 3667,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3628,
                "end": 3667,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3638,
                    "end": 3661,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3645,
                      "end": 3660,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 3649,
                        "end": 3658,
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3673,
            "end": 3728,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3685,
              "end": 3695,
              "decorators": [],
              "name": "p1_private",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3695,
              "end": 3728,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3721,
                "end": 3728,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3696,
                  "end": 3719,
                  "decorators": [],
                  "name": "m1_c3_p1_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3708,
                    "end": 3719,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3710,
                      "end": 3719,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3710,
                        "end": 3719,
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3734,
            "end": 3798,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3746,
              "end": 3756,
              "decorators": [],
              "name": "p2_private",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3756,
              "end": 3798,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3759,
                "end": 3798,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3769,
                    "end": 3792,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3776,
                      "end": 3791,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 3780,
                        "end": 3789,
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3804,
            "end": 3859,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3816,
              "end": 3826,
              "decorators": [],
              "name": "p2_private",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3826,
              "end": 3859,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3852,
                "end": 3859,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3827,
                  "end": 3850,
                  "decorators": [],
                  "name": "m1_c3_p2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3839,
                    "end": 3850,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3841,
                      "end": 3850,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3841,
                        "end": 3850,
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3865,
            "end": 3930,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3877,
              "end": 3887,
              "decorators": [],
              "name": "p3_private",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3887,
              "end": 3930,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3890,
                "end": 3930,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3900,
                    "end": 3924,
                    "argument": {
                      "type": "NewExpression",
                      "start": 3907,
                      "end": 3923,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 3911,
                        "end": 3921,
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3936,
            "end": 3992,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3948,
              "end": 3958,
              "decorators": [],
              "name": "p3_private",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3958,
              "end": 3992,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3985,
                "end": 3992,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3959,
                  "end": 3983,
                  "decorators": [],
                  "name": "m1_c3_p3_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3971,
                    "end": 3983,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3973,
                      "end": 3983,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3973,
                        "end": 3983,
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3998,
            "end": 4073,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4009,
              "end": 4018,
              "decorators": [],
              "name": "p4_public",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4018,
              "end": 4073,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4033,
                "end": 4073,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 4043,
                    "end": 4067,
                    "argument": {
                      "type": "NewExpression",
                      "start": 4050,
                      "end": 4066,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 4054,
                        "end": 4064,
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4020,
                "end": 4032,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4022,
                  "end": 4032,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4022,
                    "end": 4032,
                    "decorators": [],
                    "name": "C5_private",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4079,
            "end": 4133,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4090,
              "end": 4099,
              "decorators": [],
              "name": "p4_public",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4099,
              "end": 4133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4126,
                "end": 4133,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4100,
                  "end": 4124,
                  "decorators": [],
                  "name": "m1_c3_p4_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4112,
                    "end": 4124,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4114,
                      "end": 4124,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4114,
                        "end": 4124,
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3586,
        "end": 3596,
        "decorators": [],
        "name": "C8_private",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
