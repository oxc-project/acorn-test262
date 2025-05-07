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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 910,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 267,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 267,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 39,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 42,
                          "end": 44,
                          "raw": "10",
                          "value": 10,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 108,
                    "end": 261,
                    "async": false,
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
                            "async": false,
                            "body": {
                              "type": "ThisExpression",
                              "start": 174,
                              "end": 178
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 169,
                                "end": 170,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 122,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 136,
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 136,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 130,
                            "end": 136
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 272,
            "end": 426,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 426,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 295,
                          "decorators": [],
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 298,
                          "end": 420,
                          "async": false,
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
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 353,
                                    "end": 357
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 348,
                                      "end": 349,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 299,
                              "end": 312,
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 304,
                                "end": 312,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 306,
                                  "end": 312
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 586,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 432,
              "end": 586,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 472,
                          "end": 478,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 481,
                          "end": 580,
                          "async": false,
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
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 513,
                                    "end": 517
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 508,
                                      "end": 509,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 433,
                  "end": 446,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 438,
                    "end": 446,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 440,
                      "end": 446
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 592,
            "end": 745,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 592,
              "end": 594,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 594,
              "end": 745,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 616,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 619,
                          "end": 621,
                          "raw": "10",
                          "value": 10,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 685,
                    "end": 739,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 715,
                      "end": 739,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 694,
                      "end": 699,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 700,
                        "end": 713,
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 705,
                          "end": 713,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 707,
                            "end": 713
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 750,
            "end": 826,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 750,
              "end": 752,
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 752,
              "end": 826,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 769,
                          "end": 774,
                          "decorators": [],
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 777,
                          "end": 820,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 796,
                            "end": 820,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 778,
                              "end": 791,
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 783,
                                "end": 791,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 785,
                                  "end": 791
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 831,
            "end": 908,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 831,
              "end": 833,
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 833,
              "end": 908,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 876,
                          "end": 882,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 885,
                          "end": 902,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 891,
                            "end": 902,
                            "body": []
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 834,
                  "end": 847,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 839,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 841,
                      "end": 847
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 911,
      "end": 1098,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 922,
        "end": 1098,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 928,
            "end": 1096,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 928,
              "end": 939,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 939,
              "end": 1096,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 978,
                          "end": 980,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 997,
                                "end": 1004,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 1006,
                                "end": 1080,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1020,
                                  "end": 1080,
                                  "async": false,
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
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1060,
                                              "end": 1064
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1051,
                                            "end": 1059,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "returnType": null,
                                  "typeParameters": null
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1007,
                                    "end": 1015,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 940,
                  "end": 953,
                  "decorators": [],
                  "name": "_this",
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 917,
        "end": 921,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1111,
            "end": 1142,
            "decorators": [],
            "name": "console",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1126,
                      "end": 1129,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1130,
                        "end": 1138,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1133,
                          "end": 1138,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1144,
      "end": 1209,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1171,
        "end": 1209,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1177,
            "end": 1207,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1177,
              "end": 1206,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1182,
                "end": 1206,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1184,
                    "end": 1204,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1184,
                      "end": 1203,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1196,
                          "end": 1202,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1196,
                            "end": 1200
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1202,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1184,
                        "end": 1195,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1184,
                          "end": 1191,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1192,
                          "end": 1195,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1178,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1155,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1156,
          "end": 1169,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1161,
            "end": 1169,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1163,
              "end": 1169
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1211,
      "end": 1339,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1230,
        "end": 1339,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1236,
            "end": 1263,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1236,
              "end": 1247,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1247,
              "end": 1263,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1248,
                  "end": 1261,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1253,
                    "end": 1261,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1294,
            "end": 1311,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1294,
              "end": 1295,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1295,
              "end": 1311,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1296,
                  "end": 1309,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1301,
                    "end": 1309,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1303,
                      "end": 1309
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1225,
        "end": 1229,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1340,
      "end": 1375,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1357,
        "end": 1359,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1360,
          "end": 1373,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1365,
            "end": 1373,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1367,
              "end": 1373
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1389,
      "end": 1943,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1400,
        "end": 1943,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1406,
            "end": 1433,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1406,
              "end": 1417,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1417,
              "end": 1433,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1431,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1423,
                    "end": 1431,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1425,
                      "end": 1431
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1464,
            "end": 1491,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1464,
              "end": 1475,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1475,
              "end": 1491,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1489,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1481,
                    "end": 1489,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1483,
                      "end": 1489
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1522,
            "end": 1687,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1522,
              "end": 1533,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1533,
              "end": 1687,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1569,
                          "end": 1571,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1588,
                                "end": 1595,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 1597,
                                "end": 1671,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1611,
                                  "end": 1671,
                                  "async": false,
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
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1651,
                                              "end": 1655
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 1642,
                                            "end": 1650,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "returnType": null,
                                  "typeParameters": null
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1598,
                                    "end": 1606,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 1534,
                  "end": 1544,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1539,
                    "end": 1544,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1541,
                      "end": 1544
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1693,
            "end": 1710,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1693,
              "end": 1694,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1694,
              "end": 1710,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1695,
                  "end": 1708,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1700,
                    "end": 1708,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1702,
                      "end": 1708
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1741,
            "end": 1758,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1741,
              "end": 1742,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1742,
              "end": 1758,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1743,
                  "end": 1756,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1748,
                    "end": 1756,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1750,
                      "end": 1756
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1789,
            "end": 1941,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1789,
              "end": 1790,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1790,
              "end": 1941,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1827,
                          "end": 1833,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1836,
                          "end": 1935,
                          "async": false,
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
                                  "async": false,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 1868,
                                    "end": 1872
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 1863,
                                      "end": 1864,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 1791,
                  "end": 1801,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1796,
                    "end": 1801,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1798,
                      "end": 1801
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1395,
        "end": 1399,
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1956,
            "end": 1987,
            "decorators": [],
            "name": "console",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1971,
                      "end": 1974,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1975,
                        "end": 1983,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1978,
                          "end": 1983,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1980,
                            "end": 1983
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 1989,
      "end": 2016,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1998,
        "end": 2000,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2001,
          "end": 2014,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2006,
            "end": 2014,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2008,
              "end": 2014
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2043,
      "end": 2070,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2052,
        "end": 2054,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2055,
          "end": 2068,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2060,
            "end": 2068,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2062,
              "end": 2068
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2097,
      "end": 2159,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2121,
        "end": 2159,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2127,
            "end": 2157,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2127,
              "end": 2156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2132,
                "end": 2156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2134,
                    "end": 2154,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2134,
                      "end": 2153,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 2146,
                          "end": 2152,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 2146,
                            "end": 2150
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2151,
                            "end": 2152,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2134,
                        "end": 2145,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2134,
                          "end": 2141,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2142,
                          "end": 2145,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2127,
                  "end": 2128,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2106,
        "end": 2108,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2109,
          "end": 2119,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2114,
            "end": 2119,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2116,
              "end": 2119
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2161,
      "end": 2395,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2180,
        "end": 2395,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2186,
            "end": 2213,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2186,
              "end": 2197,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2197,
              "end": 2213,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2198,
                  "end": 2211,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2203,
                    "end": 2211,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2244,
            "end": 2271,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2244,
              "end": 2255,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2255,
              "end": 2271,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2256,
                  "end": 2269,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2261,
                    "end": 2269,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2263,
                      "end": 2269
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2302,
            "end": 2319,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2302,
              "end": 2303,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2303,
              "end": 2319,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2304,
                  "end": 2317,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2309,
                    "end": 2317,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2311,
                      "end": 2317
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2350,
            "end": 2367,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2350,
              "end": 2351,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2351,
              "end": 2367,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2352,
                  "end": 2365,
                  "decorators": [],
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2357,
                    "end": 2365,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2359,
                      "end": 2365
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2175,
        "end": 2179,
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2397,
      "end": 2432,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2414,
        "end": 2416,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2417,
          "end": 2430,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2422,
            "end": 2430,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2424,
              "end": 2430
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2459,
      "end": 2494,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2478,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2479,
          "end": 2492,
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2484,
            "end": 2492,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2486,
              "end": 2492
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
