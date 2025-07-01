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
              "name": "a",
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
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 39
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
                              "name": "_super",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 51,
                                  "end": 57
                                },
                                "start": 49,
                                "end": 57
                              },
                              "start": 43,
                              "end": 57
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
                                      "start": 96,
                                      "end": 97
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 101,
                                    "end": 105
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 96,
                                  "end": 105
                                },
                                "start": 89,
                                "end": 106
                              }
                            ],
                            "start": 62,
                            "end": 168
                          },
                          "id": null,
                          "generator": false,
                          "start": 42,
                          "end": 168
                        },
                        "definite": false,
                        "start": 34,
                        "end": 168
                      }
                    ],
                    "declare": false,
                    "start": 30,
                    "end": 168
                  }
                ],
                "start": 20,
                "end": 174
              },
              "expression": false,
              "start": 17,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 174
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 189,
                      "end": 195
                    },
                    "start": 187,
                    "end": 195
                  },
                  "start": 181,
                  "end": 195
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
                          "start": 224,
                          "end": 230
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
                                      "start": 260,
                                      "end": 261
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 265,
                                    "end": 269
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 260,
                                  "end": 269
                                },
                                "start": 253,
                                "end": 270
                              }
                            ],
                            "start": 239,
                            "end": 332
                          },
                          "id": null,
                          "generator": false,
                          "start": 233,
                          "end": 332
                        },
                        "definite": false,
                        "start": 224,
                        "end": 332
                      }
                    ],
                    "declare": false,
                    "start": 220,
                    "end": 332
                  }
                ],
                "start": 197,
                "end": 338
              },
              "expression": false,
              "start": 180,
              "end": 338
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 179,
            "end": 338
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 357,
                      "end": 363
                    },
                    "start": 355,
                    "end": 363
                  },
                  "start": 349,
                  "end": 363
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 365,
                "end": 384
              },
              "expression": false,
              "start": 348,
              "end": 384
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 343,
            "end": 384
          }
        ],
        "start": 10,
        "end": 386
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 386
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
        "start": 393,
        "end": 397
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 406,
        "end": 409
      },
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
              "start": 416,
              "end": 417
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
                          "start": 434,
                          "end": 439
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
                              "name": "_super",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 451,
                                  "end": 457
                                },
                                "start": 449,
                                "end": 457
                              },
                              "start": 443,
                              "end": 457
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
                                      "start": 493,
                                      "end": 494
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 498,
                                    "end": 502
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 493,
                                  "end": 502
                                },
                                "start": 486,
                                "end": 503
                              }
                            ],
                            "start": 462,
                            "end": 565
                          },
                          "id": null,
                          "generator": false,
                          "start": 442,
                          "end": 565
                        },
                        "definite": false,
                        "start": 434,
                        "end": 565
                      }
                    ],
                    "declare": false,
                    "start": 430,
                    "end": 565
                  }
                ],
                "start": 420,
                "end": 571
              },
              "expression": false,
              "start": 417,
              "end": 571
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 416,
            "end": 571
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
              "start": 576,
              "end": 577
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 586,
                      "end": 592
                    },
                    "start": 584,
                    "end": 592
                  },
                  "start": 578,
                  "end": 592
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
                          "start": 618,
                          "end": 624
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
                                      "start": 654,
                                      "end": 655
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 659,
                                    "end": 663
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 654,
                                  "end": 663
                                },
                                "start": 647,
                                "end": 664
                              }
                            ],
                            "start": 633,
                            "end": 726
                          },
                          "id": null,
                          "generator": false,
                          "start": 627,
                          "end": 726
                        },
                        "definite": false,
                        "start": 618,
                        "end": 726
                      }
                    ],
                    "declare": false,
                    "start": 614,
                    "end": 726
                  }
                ],
                "start": 594,
                "end": 732
              },
              "expression": false,
              "start": 577,
              "end": 732
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 576,
            "end": 732
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
              "start": 741,
              "end": 742
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 751,
                      "end": 757
                    },
                    "start": 749,
                    "end": 757
                  },
                  "start": 743,
                  "end": 757
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 759,
                "end": 775
              },
              "expression": false,
              "start": 742,
              "end": 775
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 737,
            "end": 775
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 792
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doStuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 811
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_super",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 822,
                                "end": 828
                              },
                              "start": 820,
                              "end": 828
                            },
                            "start": 814,
                            "end": 828
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 833,
                            "end": 837
                          },
                          "start": 830,
                          "end": 837
                        },
                        "start": 813,
                        "end": 837
                      },
                      "start": 811,
                      "end": 837
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 804,
                    "end": 838
                  }
                ],
                "start": 794,
                "end": 870
              },
              "start": 792,
              "end": 870
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 780,
            "end": 870
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 882,
              "end": 887
            },
            "typeAnnotation": null,
            "value": {
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
                    "start": 900,
                    "end": 907
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_super",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 918,
                            "end": 924
                          },
                          "start": 916,
                          "end": 924
                        },
                        "start": 910,
                        "end": 924
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 929,
                      "end": 959
                    },
                    "id": null,
                    "generator": false,
                    "start": 909,
                    "end": 959
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 900,
                  "end": 959
                }
              ],
              "start": 890,
              "end": 965
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 875,
            "end": 965
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
              "start": 970,
              "end": 981
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 990,
                      "end": 996
                    },
                    "start": 988,
                    "end": 996
                  },
                  "start": 982,
                  "end": 996
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
                        "type": "Super",
                        "start": 1027,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1027,
                      "end": 1034
                    },
                    "directive": null,
                    "start": 1027,
                    "end": 1035
                  }
                ],
                "start": 998,
                "end": 1041
              },
              "expression": false,
              "start": 981,
              "end": 1041
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 970,
            "end": 1041
          }
        ],
        "start": 410,
        "end": 1043
      },
      "abstract": false,
      "declare": false,
      "start": 387,
      "end": 1043
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
        "start": 1058,
        "end": 1062
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1071,
        "end": 1074
      },
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
              "start": 1081,
              "end": 1082
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1082,
              "end": 1085
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1081,
            "end": 1085
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
              "start": 1090,
              "end": 1091
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1100,
                      "end": 1106
                    },
                    "start": 1098,
                    "end": 1106
                  },
                  "start": 1092,
                  "end": 1106
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1091,
              "end": 1108
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1090,
            "end": 1108
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
              "start": 1139,
              "end": 1150
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1159,
                      "end": 1165
                    },
                    "start": 1157,
                    "end": 1165
                  },
                  "start": 1151,
                  "end": 1165
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1150,
              "end": 1167
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1139,
            "end": 1167
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doStuff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1222,
                      "end": 1229
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_super",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1240,
                                "end": 1246
                              },
                              "start": 1238,
                              "end": 1246
                            },
                            "start": 1232,
                            "end": 1246
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1251,
                            "end": 1255
                          },
                          "start": 1248,
                          "end": 1255
                        },
                        "start": 1231,
                        "end": 1255
                      },
                      "start": 1229,
                      "end": 1255
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1222,
                    "end": 1256
                  }
                ],
                "start": 1212,
                "end": 1288
              },
              "start": 1210,
              "end": 1288
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1198,
            "end": 1289
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_super",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1307
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1309,
                "end": 1315
              },
              "start": 1307,
              "end": 1315
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1294,
            "end": 1316
          }
        ],
        "start": 1075,
        "end": 1330
      },
      "abstract": false,
      "declare": true,
      "start": 1044,
      "end": 1330
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
        "start": 1338,
        "end": 1342
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1351,
        "end": 1354
      },
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
              "start": 1361,
              "end": 1372
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1381,
                      "end": 1387
                    },
                    "start": 1379,
                    "end": 1387
                  },
                  "start": 1373,
                  "end": 1387
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1372,
              "end": 1389
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1361,
            "end": 1389
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
              "start": 1420,
              "end": 1431
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1440,
                      "end": 1446
                    },
                    "start": 1438,
                    "end": 1446
                  },
                  "start": 1432,
                  "end": 1446
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1431,
              "end": 1448
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1420,
            "end": 1448
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
              "start": 1478,
              "end": 1489
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1498,
                      "end": 1501
                    },
                    "start": 1496,
                    "end": 1501
                  },
                  "start": 1490,
                  "end": 1501
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
                        "type": "Super",
                        "start": 1532,
                        "end": 1537
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1532,
                      "end": 1539
                    },
                    "directive": null,
                    "start": 1532,
                    "end": 1540
                  }
                ],
                "start": 1503,
                "end": 1546
              },
              "expression": false,
              "start": 1489,
              "end": 1546
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1478,
            "end": 1546
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
              "start": 1551,
              "end": 1552
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1561,
                      "end": 1567
                    },
                    "start": 1559,
                    "end": 1567
                  },
                  "start": 1553,
                  "end": 1567
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1552,
              "end": 1569
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1551,
            "end": 1569
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
              "start": 1600,
              "end": 1601
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1610,
                      "end": 1616
                    },
                    "start": 1608,
                    "end": 1616
                  },
                  "start": 1602,
                  "end": 1616
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1601,
              "end": 1618
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1600,
            "end": 1618
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
              "start": 1649,
              "end": 1650
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
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1659,
                      "end": 1662
                    },
                    "start": 1657,
                    "end": 1662
                  },
                  "start": 1651,
                  "end": 1662
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
                          "start": 1688,
                          "end": 1694
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
                                      "start": 1724,
                                      "end": 1725
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 1729,
                                    "end": 1733
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1724,
                                  "end": 1733
                                },
                                "start": 1717,
                                "end": 1734
                              }
                            ],
                            "start": 1703,
                            "end": 1796
                          },
                          "id": null,
                          "generator": false,
                          "start": 1697,
                          "end": 1796
                        },
                        "definite": false,
                        "start": 1688,
                        "end": 1796
                      }
                    ],
                    "declare": false,
                    "start": 1684,
                    "end": 1796
                  }
                ],
                "start": 1664,
                "end": 1802
              },
              "expression": false,
              "start": 1650,
              "end": 1802
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1649,
            "end": 1802
          }
        ],
        "start": 1355,
        "end": 1804
      },
      "abstract": false,
      "declare": false,
      "start": 1332,
      "end": 1804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1804
}
```
