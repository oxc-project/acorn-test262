__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1804,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 386,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 386,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 174,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 174,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 174,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 168,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 168,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 39,
                          "decorators": [],
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 42,
                          "end": 168,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 43,
                              "end": 57,
                              "decorators": [],
                              "name": "_super",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 49,
                                "end": 57,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 51,
                                  "end": 57
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 62,
                            "end": 168,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 89,
                                "end": 106,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 96,
                                  "end": 105,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 96,
                                      "end": 97,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 101,
                                    "end": 105
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 338,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 180,
              "end": 338,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 181,
                  "end": 195,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 189,
                      "end": 195
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 197,
                "end": 338,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 220,
                    "end": 332,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 224,
                        "end": 332,
                        "id": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 230,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 233,
                          "end": 332,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 239,
                            "end": 332,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 253,
                                "end": 270,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 260,
                                  "end": 269,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 260,
                                      "end": 261,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 265,
                                    "end": 269
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 384,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 348,
              "end": 384,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 349,
                  "end": 363,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 355,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 357,
                      "end": 363
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 384,
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
    {
      "type": "ClassDeclaration",
      "start": 387,
      "end": 1043,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 397,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 406,
        "end": 409,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 410,
        "end": 1043,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 416,
            "end": 571,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 571,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 571,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 430,
                    "end": 565,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 434,
                        "end": 565,
                        "id": {
                          "type": "Identifier",
                          "start": 434,
                          "end": 439,
                          "decorators": [],
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 442,
                          "end": 565,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 443,
                              "end": 457,
                              "decorators": [],
                              "name": "_super",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 449,
                                "end": 457,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 451,
                                  "end": 457
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 462,
                            "end": 565,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 486,
                                "end": 503,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 493,
                                  "end": 502,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 493,
                                      "end": 494,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 498,
                                    "end": 502
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 576,
            "end": 732,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 576,
              "end": 577,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 577,
              "end": 732,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 592,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 584,
                    "end": 592,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 586,
                      "end": 592
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 594,
                "end": 732,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 614,
                    "end": 726,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 618,
                        "end": 726,
                        "id": {
                          "type": "Identifier",
                          "start": 618,
                          "end": 624,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 627,
                          "end": 726,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 633,
                            "end": 726,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 647,
                                "end": 664,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 654,
                                  "end": 663,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 654,
                                      "end": 655,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 659,
                                    "end": 663
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 737,
            "end": 775,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 742,
              "end": 775,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 743,
                  "end": 757,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 749,
                    "end": 757,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 751,
                      "end": 757
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 759,
                "end": 775,
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
            "type": "PropertyDefinition",
            "start": 780,
            "end": 870,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 787,
              "end": 792,
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 870,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 794,
                "end": 870,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 804,
                    "end": 838,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 804,
                      "end": 811,
                      "decorators": [],
                      "name": "doStuff",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 811,
                      "end": 837,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 813,
                        "end": 837,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 814,
                            "end": 828,
                            "decorators": [],
                            "name": "_super",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 820,
                              "end": 828,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 822,
                                "end": 828
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 830,
                          "end": 837,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 833,
                            "end": 837
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 875,
            "end": 965,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 882,
              "end": 887,
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 890,
              "end": 965,
              "properties": [
                {
                  "type": "Property",
                  "start": 900,
                  "end": 959,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 900,
                    "end": 907,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 909,
                    "end": 959,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 910,
                        "end": 924,
                        "decorators": [],
                        "name": "_super",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 916,
                          "end": 924,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 918,
                            "end": 924
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 929,
                      "end": 959,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 970,
            "end": 1041,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 970,
              "end": 981,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 981,
              "end": 1041,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 982,
                  "end": 996,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 988,
                    "end": 996,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 990,
                      "end": 996
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 998,
                "end": 1041,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1027,
                    "end": 1035,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1027,
                      "end": 1034,
                      "callee": {
                        "type": "Super",
                        "start": 1027,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    {
      "type": "ClassDeclaration",
      "start": 1044,
      "end": 1330,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1062,
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1071,
        "end": 1074,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1075,
        "end": 1330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1081,
            "end": 1085,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1082,
              "end": 1085,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1090,
            "end": 1108,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1090,
              "end": 1091,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1091,
              "end": 1108,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1092,
                  "end": 1106,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1098,
                    "end": 1106,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1100,
                      "end": 1106
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1139,
            "end": 1167,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1139,
              "end": 1150,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1150,
              "end": 1167,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1151,
                  "end": 1165,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1157,
                    "end": 1165,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1159,
                      "end": 1165
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1198,
            "end": 1289,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1205,
              "end": 1210,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1210,
              "end": 1288,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1212,
                "end": 1288,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1222,
                    "end": 1256,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1222,
                      "end": 1229,
                      "decorators": [],
                      "name": "doStuff",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1229,
                      "end": 1255,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1231,
                        "end": 1255,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1232,
                            "end": 1246,
                            "decorators": [],
                            "name": "_super",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1238,
                              "end": 1246,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1240,
                                "end": 1246
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1248,
                          "end": 1255,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 1251,
                            "end": 1255
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 1294,
            "end": 1316,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1301,
              "end": 1307,
              "decorators": [],
              "name": "_super",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1307,
              "end": 1315,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1309,
                "end": 1315
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 1332,
      "end": 1804,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1338,
        "end": 1342,
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1351,
        "end": 1354,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1355,
        "end": 1804,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1361,
            "end": 1389,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1361,
              "end": 1372,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1372,
              "end": 1389,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1373,
                  "end": 1387,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1379,
                    "end": 1387,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1381,
                      "end": 1387
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1420,
            "end": 1448,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1420,
              "end": 1431,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1431,
              "end": 1448,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1432,
                  "end": 1446,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1438,
                    "end": 1446,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1440,
                      "end": 1446
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1478,
            "end": 1546,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1478,
              "end": 1489,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1489,
              "end": 1546,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1490,
                  "end": 1501,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1496,
                    "end": 1501,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1498,
                      "end": 1501
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1503,
                "end": 1546,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1532,
                    "end": 1540,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1532,
                      "end": 1539,
                      "callee": {
                        "type": "Super",
                        "start": 1532,
                        "end": 1537
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1551,
            "end": 1569,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1551,
              "end": 1552,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1552,
              "end": 1569,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1553,
                  "end": 1567,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1559,
                    "end": 1567,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1561,
                      "end": 1567
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1600,
            "end": 1618,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1600,
              "end": 1601,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1601,
              "end": 1618,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1602,
                  "end": 1616,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1608,
                    "end": 1616,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1610,
                      "end": 1616
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1649,
            "end": 1802,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1649,
              "end": 1650,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1650,
              "end": 1802,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1651,
                  "end": 1662,
                  "decorators": [],
                  "name": "_super",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1657,
                    "end": 1662,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1659,
                      "end": 1662
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1664,
                "end": 1802,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1684,
                    "end": 1796,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1688,
                        "end": 1796,
                        "id": {
                          "type": "Identifier",
                          "start": 1688,
                          "end": 1694,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1697,
                          "end": 1796,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1703,
                            "end": 1796,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 1717,
                                "end": 1734,
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 1724,
                                  "end": 1733,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 1724,
                                      "end": 1725,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 1729,
                                    "end": 1733
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
