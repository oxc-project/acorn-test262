__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 1578,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 38,
            "decorators": [],
            "name": "myVariable",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 41,
            "end": 43,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 120,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 120,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 115,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 107,
            "end": 115,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 186,
            "decorators": [],
            "name": "fooVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 186,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 176,
                "end": 186,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 186,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 182,
                    "end": 186
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 188,
        "end": 195,
        "arguments": [
          {
            "type": "Literal",
            "start": 192,
            "end": 194,
            "raw": "50",
            "value": 50
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 188,
          "end": 191,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 197,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 197,
        "end": 205,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 197,
          "end": 203,
          "decorators": [],
          "name": "fooVar",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 831,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 831,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 271,
            "end": 292,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 271,
              "end": 282,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 292,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 292,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 340,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 334,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 337,
              "end": 339,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 419,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 386,
              "decorators": [],
              "name": "myFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 419,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 389,
                "end": 419,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 399,
                    "end": 413,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 406,
                      "end": 412,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 406,
                        "end": 410
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 412,
                        "decorators": [],
                        "name": "b",
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
            "start": 450,
            "end": 499,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 461,
              "end": 466,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 466,
              "end": 499,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 469,
                "end": 499,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 479,
                    "end": 493,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 486,
                      "end": 492,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 486,
                        "end": 490
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "b",
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
            "start": 530,
            "end": 589,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 546,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 546,
              "end": 589,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 560,
                "end": 589,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 570,
                    "end": 583,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 570,
                      "end": 582,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 570,
                        "end": 576,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 570,
                          "end": 574
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 576,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 579,
                        "end": 582,
                        "decorators": [],
                        "name": "val",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 547,
                  "end": 558,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 550,
                    "end": 558,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 552,
                      "end": 558
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 625,
            "end": 656,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 636,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 636,
              "end": 656,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 637,
                  "end": 646,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 638,
                    "end": 646,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 640,
                      "end": 646
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 647,
                "end": 655,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 649,
                  "end": 655
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 692,
            "end": 723,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 703,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 703,
              "end": 723,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 704,
                  "end": 713,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 705,
                    "end": 713,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 714,
                "end": 722,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 716,
                  "end": 722
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 772,
            "end": 829,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 779,
              "end": 783,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 783,
              "end": 829,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 790,
                "end": 829,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 800,
                    "end": 823,
                    "argument": {
                      "type": "CallExpression",
                      "start": 807,
                      "end": 822,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 820,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 807,
                          "end": 811,
                          "decorators": [],
                          "name": "aOrb",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 820,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 784,
                  "end": 788,
                  "decorators": [],
                  "name": "aOrb",
                  "optional": false
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
        "start": 233,
        "end": 234,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 871,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 870,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 860,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 863,
            "end": 870,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 898,
      "end": 1170,
      "body": {
        "type": "TSInterfaceBody",
        "start": 911,
        "end": 1170,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 943,
            "end": 963,
            "params": [
              {
                "type": "Identifier",
                "start": 944,
                "end": 953,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 945,
                  "end": 953,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 947,
                    "end": 953
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 954,
              "end": 962,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 956,
                "end": 962
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 992,
            "end": 1008,
            "params": [
              {
                "type": "Identifier",
                "start": 997,
                "end": 1006,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 998,
                  "end": 1006,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1000,
                    "end": 1006
                  }
                }
              }
            ]
          },
          {
            "type": "TSIndexSignature",
            "start": 1040,
            "end": 1060,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1041,
                "end": 1050,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1042,
                  "end": 1050,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1044,
                    "end": 1050
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1051,
              "end": 1059,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1053,
                "end": 1059
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1095,
            "end": 1134,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1095,
              "end": 1100,
              "decorators": [],
              "name": "myFoo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1115,
                "end": 1124,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1116,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1118,
                    "end": 1124
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1125,
              "end": 1133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1127,
                "end": 1133
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1155,
            "end": 1168,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1155,
              "end": 1159,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1159,
              "end": 1167,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1161,
                "end": 1167
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 910,
        "decorators": [],
        "name": "i1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1205,
      "end": 1218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1209,
          "end": 1217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1209,
            "end": 1217,
            "decorators": [],
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1215,
                "end": 1217,
                "typeName": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1217,
                  "decorators": [],
                  "name": "i1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1249,
      "end": 1418,
      "body": {
        "type": "TSModuleBlock",
        "start": 1259,
        "end": 1418,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1284,
            "end": 1368,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1291,
              "end": 1368,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1299,
                "end": 1368,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1309,
                    "end": 1362,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1309,
                      "end": 1320,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1320,
                      "end": 1362,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1339,
                        "end": 1362,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1321,
                          "end": 1337,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1328,
                            "end": 1337,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1329,
                              "end": 1337,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1331,
                                "end": 1337
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
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
                "start": 1297,
                "end": 1298,
                "decorators": [],
                "name": "b",
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
            "start": 1392,
            "end": 1416,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 1399,
              "end": 1416,
              "body": {
                "type": "TSModuleBlock",
                "start": 1409,
                "end": 1416,
                "body": []
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 1406,
                "end": 1408,
                "decorators": [],
                "name": "m2",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1256,
        "end": 1258,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 1434,
      "end": 1448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1446,
          "end": 1447,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1446,
            "end": 1447,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 1508,
      "end": 1545,
      "body": {
        "type": "TSEnumBody",
        "start": 1525,
        "end": 1545,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 1527,
            "end": 1530,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1527,
              "end": 1530,
              "decorators": [],
              "name": "red",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1532,
            "end": 1537,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1532,
              "end": 1537,
              "decorators": [],
              "name": "green",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 1539,
            "end": 1543,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 1539,
              "end": 1543,
              "decorators": [],
              "name": "blue",
              "optional": false
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1519,
        "end": 1524,
        "decorators": [],
        "name": "color",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1546,
      "end": 1577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1550,
          "end": 1576,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1550,
            "end": 1562,
            "decorators": [],
            "name": "shade",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1555,
              "end": 1562,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1557,
                "end": 1562,
                "typeName": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1562,
                  "decorators": [],
                  "name": "color",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1565,
            "end": 1576,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1565,
              "end": 1570,
              "decorators": [],
              "name": "color",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1571,
              "end": 1576,
              "decorators": [],
              "name": "green",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
