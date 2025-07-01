__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 39
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 42,
                          "end": 44
                        },
                        "definite": false,
                        "start": 34,
                        "end": 44
                      }
                    ],
                    "declare": false,
                    "start": 30,
                    "end": 45
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 122
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 130,
                            "end": 136
                          },
                          "start": 128,
                          "end": 136
                        },
                        "start": 123,
                        "end": 136
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 169,
                                "end": 170
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ThisExpression",
                              "start": 174,
                              "end": 178
                            },
                            "id": null,
                            "generator": false,
                            "start": 169,
                            "end": 178
                          },
                          "start": 162,
                          "end": 179
                        }
                      ],
                      "start": 138,
                      "end": 261
                    },
                    "expression": false,
                    "start": 108,
                    "end": 261
                  }
                ],
                "start": 20,
                "end": 267
              },
              "expression": false,
              "start": 17,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 295
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 306,
                                  "end": 312
                                },
                                "start": 304,
                                "end": 312
                              },
                              "start": 299,
                              "end": 312
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 348,
                                      "end": 349
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 353,
                                    "end": 357
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 348,
                                  "end": 357
                                },
                                "start": 341,
                                "end": 358
                              }
                            ],
                            "start": 317,
                            "end": 420
                          },
                          "id": null,
                          "generator": false,
                          "start": 298,
                          "end": 420
                        },
                        "definite": false,
                        "start": 290,
                        "end": 420
                      }
                    ],
                    "declare": false,
                    "start": 286,
                    "end": 420
                  }
                ],
                "start": 276,
                "end": 426
              },
              "expression": false,
              "start": 273,
              "end": 426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 272,
            "end": 426
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 440,
                      "end": 446
                    },
                    "start": 438,
                    "end": 446
                  },
                  "start": 433,
                  "end": 446
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 478
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 508,
                                      "end": 509
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 513,
                                    "end": 517
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 508,
                                  "end": 517
                                },
                                "start": 501,
                                "end": 518
                              }
                            ],
                            "start": 487,
                            "end": 580
                          },
                          "id": null,
                          "generator": false,
                          "start": 481,
                          "end": 580
                        },
                        "definite": false,
                        "start": 472,
                        "end": 580
                      }
                    ],
                    "declare": false,
                    "start": 468,
                    "end": 580
                  }
                ],
                "start": 448,
                "end": 586
              },
              "expression": false,
              "start": 432,
              "end": 586
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 586
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 616
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 619,
                          "end": 621
                        },
                        "definite": false,
                        "start": 611,
                        "end": 621
                      }
                    ],
                    "declare": false,
                    "start": 607,
                    "end": 622
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 694,
                      "end": 699
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 707,
                            "end": 713
                          },
                          "start": 705,
                          "end": 713
                        },
                        "start": 700,
                        "end": 713
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 715,
                      "end": 739
                    },
                    "expression": false,
                    "start": 685,
                    "end": 739
                  }
                ],
                "start": 597,
                "end": 745
              },
              "expression": false,
              "start": 594,
              "end": 745
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 592,
            "end": 745
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 752
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 769,
                          "end": 774
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 785,
                                  "end": 791
                                },
                                "start": 783,
                                "end": 791
                              },
                              "start": 778,
                              "end": 791
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 796,
                            "end": 820
                          },
                          "id": null,
                          "generator": false,
                          "start": 777,
                          "end": 820
                        },
                        "definite": false,
                        "start": 769,
                        "end": 820
                      }
                    ],
                    "declare": false,
                    "start": 765,
                    "end": 820
                  }
                ],
                "start": 755,
                "end": 826
              },
              "expression": false,
              "start": 752,
              "end": 826
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 750,
            "end": 826
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 833
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 841,
                      "end": 847
                    },
                    "start": 839,
                    "end": 847
                  },
                  "start": 834,
                  "end": 847
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 876,
                          "end": 882
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 891,
                            "end": 902
                          },
                          "id": null,
                          "generator": false,
                          "start": 885,
                          "end": 902
                        },
                        "definite": false,
                        "start": 876,
                        "end": 902
                      }
                    ],
                    "declare": false,
                    "start": 872,
                    "end": 902
                  }
                ],
                "start": 849,
                "end": 908
              },
              "expression": false,
              "start": 833,
              "end": 908
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 831,
            "end": 908
          }
        ],
        "start": 10,
        "end": 910
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 910
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 921
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
              "start": 928,
              "end": 939
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    },
                    "start": 945,
                    "end": 953
                  },
                  "start": 940,
                  "end": 953
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 978,
                          "end": 980
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 997,
                                "end": 1004
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1007,
                                    "end": 1015
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1051,
                                            "end": 1059
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1060,
                                              "end": 1064
                                            }
                                          ],
                                          "optional": false,
                                          "start": 1051,
                                          "end": 1065
                                        },
                                        "start": 1044,
                                        "end": 1066
                                      }
                                    ],
                                    "start": 1026,
                                    "end": 1080
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1020,
                                  "end": 1080
                                },
                                "id": null,
                                "generator": false,
                                "start": 1006,
                                "end": 1080
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 997,
                              "end": 1080
                            }
                          ],
                          "start": 983,
                          "end": 1090
                        },
                        "definite": false,
                        "start": 978,
                        "end": 1090
                      }
                    ],
                    "declare": false,
                    "start": 974,
                    "end": 1090
                  }
                ],
                "start": 955,
                "end": 1096
              },
              "expression": false,
              "start": 939,
              "end": 1096
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 928,
            "end": 1096
          }
        ],
        "start": 922,
        "end": 1098
      },
      "abstract": false,
      "declare": false,
      "start": 911,
      "end": 1098
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1126,
                      "end": 1129
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          },
                          "start": 1133,
                          "end": 1138
                        },
                        "start": 1130,
                        "end": 1138
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1126,
                    "end": 1140
                  }
                ],
                "start": 1120,
                "end": 1142
              },
              "start": 1118,
              "end": 1142
            },
            "start": 1111,
            "end": 1142
          },
          "init": null,
          "definite": false,
          "start": 1111,
          "end": 1142
        }
      ],
      "declare": true,
      "start": 1099,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1163,
              "end": 1169
            },
            "start": 1161,
            "end": 1169
          },
          "start": 1156,
          "end": 1169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1177,
                  "end": 1178
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1184,
                          "end": 1191
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1192,
                          "end": 1195
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1184,
                        "end": 1195
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1196,
                            "end": 1200
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1202
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1196,
                          "end": 1202
                        }
                      ],
                      "optional": false,
                      "start": 1184,
                      "end": 1203
                    },
                    "directive": null,
                    "start": 1184,
                    "end": 1204
                  }
                ],
                "start": 1182,
                "end": 1206
              },
              "id": null,
              "generator": false,
              "start": 1177,
              "end": 1206
            },
            "directive": null,
            "start": 1177,
            "end": 1207
          }
        ],
        "start": 1171,
        "end": 1209
      },
      "expression": false,
      "start": 1144,
      "end": 1209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1225,
        "end": 1229
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
              "start": 1236,
              "end": 1247
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    },
                    "start": 1253,
                    "end": 1261
                  },
                  "start": 1248,
                  "end": 1261
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1247,
              "end": 1263
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1236,
            "end": 1263
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1295
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1303,
                      "end": 1309
                    },
                    "start": 1301,
                    "end": 1309
                  },
                  "start": 1296,
                  "end": 1309
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1295,
              "end": 1311
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1294,
            "end": 1311
          }
        ],
        "start": 1230,
        "end": 1339
      },
      "abstract": false,
      "declare": true,
      "start": 1211,
      "end": 1339
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1359
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1367,
              "end": 1373
            },
            "start": 1365,
            "end": 1373
          },
          "start": 1360,
          "end": 1373
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1340,
      "end": 1375
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1395,
        "end": 1399
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
              "start": 1406,
              "end": 1417
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1425,
                      "end": 1431
                    },
                    "start": 1423,
                    "end": 1431
                  },
                  "start": 1418,
                  "end": 1431
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1417,
              "end": 1433
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1406,
            "end": 1433
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
              "start": 1464,
              "end": 1475
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1483,
                      "end": 1489
                    },
                    "start": 1481,
                    "end": 1489
                  },
                  "start": 1476,
                  "end": 1489
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1475,
              "end": 1491
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1464,
            "end": 1491
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
              "start": 1522,
              "end": 1533
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1541,
                      "end": 1544
                    },
                    "start": 1539,
                    "end": 1544
                  },
                  "start": 1534,
                  "end": 1544
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1569,
                          "end": 1571
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1588,
                                "end": 1595
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1598,
                                    "end": 1606
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1642,
                                            "end": 1650
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1651,
                                              "end": 1655
                                            }
                                          ],
                                          "optional": false,
                                          "start": 1642,
                                          "end": 1656
                                        },
                                        "start": 1635,
                                        "end": 1657
                                      }
                                    ],
                                    "start": 1617,
                                    "end": 1671
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1611,
                                  "end": 1671
                                },
                                "id": null,
                                "generator": false,
                                "start": 1597,
                                "end": 1671
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1588,
                              "end": 1671
                            }
                          ],
                          "start": 1574,
                          "end": 1681
                        },
                        "definite": false,
                        "start": 1569,
                        "end": 1681
                      }
                    ],
                    "declare": false,
                    "start": 1565,
                    "end": 1681
                  }
                ],
                "start": 1546,
                "end": 1687
              },
              "expression": false,
              "start": 1533,
              "end": 1687
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1522,
            "end": 1687
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1694
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1702,
                      "end": 1708
                    },
                    "start": 1700,
                    "end": 1708
                  },
                  "start": 1695,
                  "end": 1708
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1694,
              "end": 1710
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1693,
            "end": 1710
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1742
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1750,
                      "end": 1756
                    },
                    "start": 1748,
                    "end": 1756
                  },
                  "start": 1743,
                  "end": 1756
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1742,
              "end": 1758
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1741,
            "end": 1758
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1789,
              "end": 1790
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1798,
                      "end": 1801
                    },
                    "start": 1796,
                    "end": 1801
                  },
                  "start": 1791,
                  "end": 1801
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1827,
                          "end": 1833
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1863,
                                      "end": 1864
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 1868,
                                    "end": 1872
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1863,
                                  "end": 1872
                                },
                                "start": 1856,
                                "end": 1873
                              }
                            ],
                            "start": 1842,
                            "end": 1935
                          },
                          "id": null,
                          "generator": false,
                          "start": 1836,
                          "end": 1935
                        },
                        "definite": false,
                        "start": 1827,
                        "end": 1935
                      }
                    ],
                    "declare": false,
                    "start": 1823,
                    "end": 1935
                  }
                ],
                "start": 1803,
                "end": 1941
              },
              "expression": false,
              "start": 1790,
              "end": 1941
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1789,
            "end": 1941
          }
        ],
        "start": 1400,
        "end": 1943
      },
      "abstract": false,
      "declare": false,
      "start": 1389,
      "end": 1943
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1971,
                      "end": 1974
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1980,
                            "end": 1983
                          },
                          "start": 1978,
                          "end": 1983
                        },
                        "start": 1975,
                        "end": 1983
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1971,
                    "end": 1985
                  }
                ],
                "start": 1965,
                "end": 1987
              },
              "start": 1963,
              "end": 1987
            },
            "start": 1956,
            "end": 1987
          },
          "init": null,
          "definite": false,
          "start": 1956,
          "end": 1987
        }
      ],
      "declare": true,
      "start": 1944,
      "end": 1987
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1998,
        "end": 2000
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2008,
              "end": 2014
            },
            "start": 2006,
            "end": 2014
          },
          "start": 2001,
          "end": 2014
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1989,
      "end": 2016
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2052,
        "end": 2054
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2062,
              "end": 2068
            },
            "start": 2060,
            "end": 2068
          },
          "start": 2055,
          "end": 2068
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2043,
      "end": 2070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2106,
        "end": 2108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2116,
              "end": 2119
            },
            "start": 2114,
            "end": 2119
          },
          "start": 2109,
          "end": 2119
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2127,
                  "end": 2128
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2134,
                          "end": 2141
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2142,
                          "end": 2145
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2134,
                        "end": 2145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2146,
                            "end": 2150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2151,
                            "end": 2152
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2146,
                          "end": 2152
                        }
                      ],
                      "optional": false,
                      "start": 2134,
                      "end": 2153
                    },
                    "directive": null,
                    "start": 2134,
                    "end": 2154
                  }
                ],
                "start": 2132,
                "end": 2156
              },
              "id": null,
              "generator": false,
              "start": 2127,
              "end": 2156
            },
            "directive": null,
            "start": 2127,
            "end": 2157
          }
        ],
        "start": 2121,
        "end": 2159
      },
      "expression": false,
      "start": 2097,
      "end": 2159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2175,
        "end": 2179
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
              "start": 2186,
              "end": 2197
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    },
                    "start": 2203,
                    "end": 2211
                  },
                  "start": 2198,
                  "end": 2211
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2197,
              "end": 2213
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2186,
            "end": 2213
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
              "start": 2244,
              "end": 2255
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2263,
                      "end": 2269
                    },
                    "start": 2261,
                    "end": 2269
                  },
                  "start": 2256,
                  "end": 2269
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2255,
              "end": 2271
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2244,
            "end": 2271
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2302,
              "end": 2303
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2311,
                      "end": 2317
                    },
                    "start": 2309,
                    "end": 2317
                  },
                  "start": 2304,
                  "end": 2317
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2303,
              "end": 2319
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2302,
            "end": 2319
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2350,
              "end": 2351
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2359,
                      "end": 2365
                    },
                    "start": 2357,
                    "end": 2365
                  },
                  "start": 2352,
                  "end": 2365
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2351,
              "end": 2367
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2350,
            "end": 2367
          }
        ],
        "start": 2180,
        "end": 2395
      },
      "abstract": false,
      "declare": true,
      "start": 2161,
      "end": 2395
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2414,
        "end": 2416
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2424,
              "end": 2430
            },
            "start": 2422,
            "end": 2430
          },
          "start": 2417,
          "end": 2430
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2397,
      "end": 2432
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2478
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2486,
              "end": 2492
            },
            "start": 2484,
            "end": 2492
          },
          "start": 2479,
          "end": 2492
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2459,
      "end": 2494
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2520
}
```
