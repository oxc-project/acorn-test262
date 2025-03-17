__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2520,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 910,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 910,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 267,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 267,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 45,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 44,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 39,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 42,
                          "end": 44,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 108,
                    "end": 261,
                    "id": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 122,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 136,
                        "name": "_this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 136,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 130,
                            "end": 136
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 138,
                      "end": 261,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 162,
                          "end": 179,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 169,
                            "end": 178,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 169,
                                "end": 170,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ThisExpression",
                              "start": 174,
                              "end": 178
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
            "start": 272,
            "end": 426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 426,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 276,
                "end": 426,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 420,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 290,
                        "end": 420,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 295,
                          "name": "lamda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 298,
                          "end": 420,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 299,
                              "end": 312,
                              "name": "_this",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 304,
                                "end": 312,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 306,
                                  "end": 312
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 317,
                            "end": 420,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 341,
                                "end": 358,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 348,
                                  "end": 357,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 348,
                                      "end": 349,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 353,
                                    "end": 357
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 431,
            "end": 586,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 432,
              "end": 586,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 433,
                  "end": 446,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 438,
                    "end": 446,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 440,
                      "end": 446
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 448,
                "end": 586,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 468,
                    "end": 580,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 472,
                        "end": 580,
                        "id": {
                          "type": "Identifier",
                          "start": 472,
                          "end": 478,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 481,
                          "end": 580,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 487,
                            "end": 580,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 501,
                                "end": 518,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 508,
                                  "end": 517,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 508,
                                      "end": 509,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 513,
                                    "end": 517
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 592,
            "end": 745,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 594,
              "end": 745,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 597,
                "end": 745,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 607,
                    "end": 622,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 611,
                        "end": 621,
                        "id": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 616,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 619,
                          "end": 621,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 685,
                    "end": 739,
                    "id": {
                      "type": "Identifier",
                      "start": 694,
                      "end": 699,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 700,
                        "end": 713,
                        "name": "_this",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 705,
                          "end": 713,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 707,
                            "end": 713
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 715,
                      "end": 739,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
            "start": 750,
            "end": 826,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 750,
              "end": 752,
              "name": "y1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 752,
              "end": 826,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 755,
                "end": 826,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 765,
                    "end": 820,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 769,
                        "end": 820,
                        "id": {
                          "type": "Identifier",
                          "start": 769,
                          "end": 774,
                          "name": "lamda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 777,
                          "end": 820,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 778,
                              "end": 791,
                              "name": "_this",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 783,
                                "end": 791,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 785,
                                  "end": 791
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 796,
                            "end": 820,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 831,
            "end": 908,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 831,
              "end": 833,
              "name": "z1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 833,
              "end": 908,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 834,
                  "end": 847,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 839,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 841,
                      "end": 847
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 849,
                "end": 908,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 872,
                    "end": 902,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 876,
                        "end": 902,
                        "id": {
                          "type": "Identifier",
                          "start": 876,
                          "end": 882,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 885,
                          "end": 902,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 891,
                            "end": 902,
                            "body": []
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    {
      "type": "ClassDeclaration",
      "start": 911,
      "end": 1098,
      "id": {
        "type": "Identifier",
        "start": 917,
        "end": 921,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 922,
        "end": 1098,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 928,
            "end": 1096,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 928,
              "end": 939,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 939,
              "end": 1096,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 940,
                  "end": 953,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 945,
                    "end": 953,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 955,
                "end": 1096,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 974,
                    "end": 1090,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 978,
                        "end": 1090,
                        "id": {
                          "type": "Identifier",
                          "start": 978,
                          "end": 980,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 983,
                          "end": 1090,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 997,
                              "end": 1080,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 997,
                                "end": 1004,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 1006,
                                "end": 1080,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1007,
                                    "end": 1015,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1020,
                                  "end": 1080,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 1026,
                                    "end": 1080,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 1044,
                                        "end": 1066,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 1051,
                                          "end": 1065,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1051,
                                            "end": 1059,
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1060,
                                              "end": 1064
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    {
      "type": "VariableDeclaration",
      "start": 1099,
      "end": 1142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1111,
          "end": 1142,
          "id": {
            "type": "Identifier",
            "start": 1111,
            "end": 1142,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1118,
              "end": 1142,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1120,
                "end": 1142,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1126,
                    "end": 1140,
                    "key": {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1129,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1130,
                        "end": 1138,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1133,
                          "end": 1138,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 1144,
      "end": 1209,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1155,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1156,
          "end": 1169,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1161,
            "end": 1169,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1163,
              "end": 1169
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1171,
        "end": 1209,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1177,
            "end": 1207,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1177,
              "end": 1206,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1178,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1182,
                "end": 1206,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1184,
                    "end": 1204,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1184,
                      "end": 1203,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1184,
                        "end": 1195,
                        "object": {
                          "type": "Identifier",
                          "start": 1184,
                          "end": 1191,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1192,
                          "end": 1195,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1196,
                          "end": 1202,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1196,
                            "end": 1200
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1202,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1211,
      "end": 1339,
      "id": {
        "type": "Identifier",
        "start": 1225,
        "end": 1229,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1230,
        "end": 1339,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1236,
            "end": 1263,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1236,
              "end": 1247,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1247,
              "end": 1263,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1248,
                  "end": 1261,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1253,
                    "end": 1261,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1294,
            "end": 1311,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1295,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1295,
              "end": 1311,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1309,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1301,
                    "end": 1309,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1303,
                      "end": 1309
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1340,
      "end": 1375,
      "id": {
        "type": "Identifier",
        "start": 1357,
        "end": 1359,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1360,
          "end": 1373,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1365,
            "end": 1373,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1367,
              "end": 1373
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1389,
      "end": 1943,
      "id": {
        "type": "Identifier",
        "start": 1395,
        "end": 1399,
        "name": "Foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1400,
        "end": 1943,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1406,
            "end": 1433,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1406,
              "end": 1417,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1417,
              "end": 1433,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1431,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1423,
                    "end": 1431,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1425,
                      "end": 1431
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1464,
            "end": 1491,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1464,
              "end": 1475,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1475,
              "end": 1491,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1489,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1481,
                    "end": 1489,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1483,
                      "end": 1489
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1522,
            "end": 1687,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1522,
              "end": 1533,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1533,
              "end": 1687,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1534,
                  "end": 1544,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1539,
                    "end": 1544,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1541,
                      "end": 1544
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1546,
                "end": 1687,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1565,
                    "end": 1681,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1569,
                        "end": 1681,
                        "id": {
                          "type": "Identifier",
                          "start": 1569,
                          "end": 1571,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 1574,
                          "end": 1681,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1588,
                              "end": 1671,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1588,
                                "end": 1595,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 1597,
                                "end": 1671,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1598,
                                    "end": 1606,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1611,
                                  "end": 1671,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 1617,
                                    "end": 1671,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 1635,
                                        "end": 1657,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 1642,
                                          "end": 1656,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1642,
                                            "end": 1650,
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1651,
                                              "end": 1655
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 1693,
            "end": 1710,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1693,
              "end": 1694,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1694,
              "end": 1710,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1695,
                  "end": 1708,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1700,
                    "end": 1708,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1702,
                      "end": 1708
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1741,
            "end": 1758,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1741,
              "end": 1742,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1742,
              "end": 1758,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1743,
                  "end": 1756,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1748,
                    "end": 1756,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1750,
                      "end": 1756
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 1789,
            "end": 1941,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1789,
              "end": 1790,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1790,
              "end": 1941,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1791,
                  "end": 1801,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1796,
                    "end": 1801,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1798,
                      "end": 1801
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1803,
                "end": 1941,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1823,
                    "end": 1935,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1827,
                        "end": 1935,
                        "id": {
                          "type": "Identifier",
                          "start": 1827,
                          "end": 1833,
                          "name": "lambda",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1836,
                          "end": 1935,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1842,
                            "end": 1935,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 1856,
                                "end": 1873,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1863,
                                  "end": 1872,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 1863,
                                      "end": 1864,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 1868,
                                    "end": 1872
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
    {
      "type": "VariableDeclaration",
      "start": 1944,
      "end": 1987,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1956,
          "end": 1987,
          "id": {
            "type": "Identifier",
            "start": 1956,
            "end": 1987,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1963,
              "end": 1987,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1965,
                "end": 1987,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 1971,
                    "end": 1985,
                    "key": {
                      "type": "Identifier",
                      "start": 1971,
                      "end": 1974,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1975,
                        "end": 1983,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1978,
                          "end": 1983,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1980,
                            "end": 1983
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 1989,
      "end": 2016,
      "id": {
        "type": "Identifier",
        "start": 1998,
        "end": 2000,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2001,
          "end": 2014,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2006,
            "end": 2014,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2008,
              "end": 2014
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2043,
      "end": 2070,
      "id": {
        "type": "Identifier",
        "start": 2052,
        "end": 2054,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2055,
          "end": 2068,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2060,
            "end": 2068,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2062,
              "end": 2068
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2097,
      "end": 2159,
      "id": {
        "type": "Identifier",
        "start": 2106,
        "end": 2108,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2109,
          "end": 2119,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2114,
            "end": 2119,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2116,
              "end": 2119
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2121,
        "end": 2159,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2127,
            "end": 2157,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2127,
              "end": 2156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2127,
                  "end": 2128,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2132,
                "end": 2156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2134,
                    "end": 2154,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2134,
                      "end": 2153,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2134,
                        "end": 2145,
                        "object": {
                          "type": "Identifier",
                          "start": 2134,
                          "end": 2141,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2142,
                          "end": 2145,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 2146,
                          "end": 2152,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2146,
                            "end": 2150
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2151,
                            "end": 2152,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2161,
      "end": 2395,
      "id": {
        "type": "Identifier",
        "start": 2175,
        "end": 2179,
        "name": "Foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2180,
        "end": 2395,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2186,
            "end": 2213,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2186,
              "end": 2197,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2197,
              "end": 2213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2198,
                  "end": 2211,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2203,
                    "end": 2211,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 2244,
            "end": 2271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2244,
              "end": 2255,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2255,
              "end": 2271,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2256,
                  "end": 2269,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2261,
                    "end": 2269,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2263,
                      "end": 2269
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 2302,
            "end": 2319,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2302,
              "end": 2303,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2303,
              "end": 2319,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2304,
                  "end": 2317,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2309,
                    "end": 2317,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2311,
                      "end": 2317
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 2350,
            "end": 2367,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2350,
              "end": 2351,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2351,
              "end": 2367,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2365,
                  "name": "_this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2357,
                    "end": 2365,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2359,
                      "end": 2365
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2397,
      "end": 2432,
      "id": {
        "type": "Identifier",
        "start": 2414,
        "end": 2416,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2417,
          "end": 2430,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2422,
            "end": 2430,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2424,
              "end": 2430
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2459,
      "end": 2494,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2478,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2479,
          "end": 2492,
          "name": "_this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2484,
            "end": 2492,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2486,
              "end": 2492
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
