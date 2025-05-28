__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 2201,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 128,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 24,
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 128,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 54,
                  "end": 66,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 66,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 126,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 108,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 91,
                        "end": 107,
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 107,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 100,
                            "end": 107,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 102,
                              "end": 107,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 102,
                                "end": 105
                              }
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
      "start": 129,
      "end": 243,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "decorators": [],
        "name": "c12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 241,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 156,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 241,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 174,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 176,
                  "end": 183,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 183,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 241,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 204,
                    "end": 223,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 208,
                        "end": 222,
                        "id": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 217,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 220,
                          "end": 222,
                          "value": 10,
                          "raw": "10"
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
      "start": 244,
      "end": 358,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 259,
        "decorators": [],
        "name": "c1NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 260,
        "end": 358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 356,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 266,
              "end": 277,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 277,
              "end": 356,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 278,
                  "end": 295,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 289,
                      "end": 295
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 356,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 319,
                    "end": 338,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 323,
                        "end": 337,
                        "id": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 332,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 335,
                          "end": 337,
                          "value": 10,
                          "raw": "10"
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
      "start": 360,
      "end": 455,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 368,
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 455,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 375,
            "end": 453,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 375,
              "end": 386,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 453,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 387,
                  "end": 404,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 404,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 406,
                "end": 453,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 416,
                    "end": 435,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 420,
                        "end": 434,
                        "id": {
                          "type": "Identifier",
                          "start": 420,
                          "end": 429,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 432,
                          "end": 434,
                          "value": 10,
                          "raw": "10"
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
      "start": 456,
      "end": 541,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 471,
        "decorators": [],
        "name": "c2NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 472,
        "end": 541,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 478,
            "end": 539,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 489,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 489,
              "end": 539,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 492,
                "end": 539,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 502,
                    "end": 521,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 506,
                        "end": 520,
                        "id": {
                          "type": "Identifier",
                          "start": 506,
                          "end": 515,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 518,
                          "end": 520,
                          "value": 10,
                          "raw": "10"
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
      "start": 543,
      "end": 685,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 551,
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 552,
        "end": 685,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 558,
            "end": 683,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 569,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 569,
              "end": 683,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 570,
                  "end": 594,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 594,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 586,
                      "end": 594,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 588,
                        "end": 594
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "RestElement",
                  "start": 596,
                  "end": 613,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 599,
                    "end": 613,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 615,
                "end": 683,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 646,
                    "end": 665,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 650,
                        "end": 664,
                        "id": {
                          "type": "Identifier",
                          "start": 650,
                          "end": 659,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 662,
                          "end": 664,
                          "value": 10,
                          "raw": "10"
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
      "start": 686,
      "end": 807,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 701,
        "decorators": [],
        "name": "c3NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 702,
        "end": 807,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 708,
            "end": 805,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 719,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 719,
              "end": 805,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 720,
                  "end": 744,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 727,
                    "end": 744,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 736,
                      "end": 744,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 746,
                "end": 805,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 768,
                    "end": 787,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 772,
                        "end": 786,
                        "id": {
                          "type": "Identifier",
                          "start": 772,
                          "end": 781,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 784,
                          "end": 786,
                          "value": 10,
                          "raw": "10"
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
      "start": 809,
      "end": 897,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 823,
        "end": 825,
        "decorators": [],
        "name": "c4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 826,
        "end": 897,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 832,
            "end": 869,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 832,
              "end": 843,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 843,
              "end": 869,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 844,
                  "end": 853,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 845,
                    "end": 853,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 847,
                      "end": 853
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 855,
                  "end": 867,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 867,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 898,
      "end": 990,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 915,
        "decorators": [],
        "name": "c42",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 916,
        "end": 990,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 922,
            "end": 962,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 922,
              "end": 933,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 933,
              "end": 962,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 934,
                  "end": 951,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 943,
                    "end": 951,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 945,
                      "end": 951
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 953,
                  "end": 960,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 956,
                    "end": 960,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 991,
      "end": 1067,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1014,
        "decorators": [],
        "name": "c4NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1015,
        "end": 1067,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1021,
            "end": 1052,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1021,
              "end": 1032,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1032,
              "end": 1052,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1033,
                  "end": 1050,
                  "decorators": [],
                  "name": "arguments",
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
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 1069,
      "end": 1308,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1075,
        "end": 1077,
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1078,
        "end": 1308,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1084,
            "end": 1121,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1084,
              "end": 1095,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1095,
              "end": 1121,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1105,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1097,
                    "end": 1105,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1099,
                      "end": 1105
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1107,
                  "end": 1119,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1110,
                    "end": 1119,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
            "start": 1149,
            "end": 1186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1149,
              "end": 1160,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1160,
              "end": 1186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1161,
                  "end": 1170,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1162,
                    "end": 1170,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1164,
                      "end": 1170
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1172,
                  "end": 1184,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1175,
                    "end": 1184,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
            "start": 1214,
            "end": 1306,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1214,
              "end": 1225,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1225,
              "end": 1306,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1232,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1227,
                    "end": 1232,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1229,
                      "end": 1232
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1234,
                  "end": 1246,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1246,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1248,
                "end": 1306,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1267,
                    "end": 1288,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1271,
                        "end": 1287,
                        "id": {
                          "type": "Identifier",
                          "start": 1271,
                          "end": 1287,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1280,
                            "end": 1287,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1282,
                              "end": 1287,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 1282,
                                "end": 1285
                              }
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
      "start": 1310,
      "end": 1557,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1316,
        "end": 1319,
        "decorators": [],
        "name": "c52",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1320,
        "end": 1557,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1326,
            "end": 1366,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1326,
              "end": 1337,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1337,
              "end": 1366,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1338,
                  "end": 1355,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1347,
                    "end": 1355,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1349,
                      "end": 1355
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1357,
                  "end": 1364,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1360,
                    "end": 1364,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
            "start": 1394,
            "end": 1434,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1394,
              "end": 1405,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1405,
              "end": 1434,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1406,
                  "end": 1423,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1415,
                    "end": 1423,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1417,
                      "end": 1423
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1425,
                  "end": 1432,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1428,
                    "end": 1432,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
            "start": 1462,
            "end": 1555,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1462,
              "end": 1473,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1473,
              "end": 1555,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1474,
                  "end": 1488,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1483,
                    "end": 1488,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1485,
                      "end": 1488
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1490,
                  "end": 1497,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1493,
                    "end": 1497,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1499,
                "end": 1555,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1518,
                    "end": 1537,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1522,
                        "end": 1536,
                        "id": {
                          "type": "Identifier",
                          "start": 1522,
                          "end": 1536,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1531,
                            "end": 1536,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1533,
                              "end": 1536
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
      "start": 1559,
      "end": 1766,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1565,
        "end": 1574,
        "decorators": [],
        "name": "c5NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1575,
        "end": 1766,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1581,
            "end": 1612,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1581,
              "end": 1592,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1592,
              "end": 1612,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1593,
                  "end": 1610,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1602,
                    "end": 1610,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1604,
                      "end": 1610
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
            "start": 1629,
            "end": 1660,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1629,
              "end": 1640,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1640,
              "end": 1660,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1641,
                  "end": 1658,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1650,
                    "end": 1658,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1652,
                      "end": 1658
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
            "start": 1677,
            "end": 1764,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1677,
              "end": 1688,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1688,
              "end": 1764,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1689,
                  "end": 1703,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1698,
                    "end": 1703,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1700,
                      "end": 1703
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1705,
                "end": 1764,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1727,
                    "end": 1746,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1731,
                        "end": 1745,
                        "id": {
                          "type": "Identifier",
                          "start": 1731,
                          "end": 1745,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1740,
                            "end": 1745,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1742,
                              "end": 1745
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
      "start": 1768,
      "end": 1918,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1782,
        "end": 1784,
        "decorators": [],
        "name": "c6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1785,
        "end": 1918,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1791,
            "end": 1828,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1791,
              "end": 1802,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1802,
              "end": 1828,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1803,
                  "end": 1812,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1804,
                    "end": 1812,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1806,
                      "end": 1812
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1814,
                  "end": 1826,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1817,
                    "end": 1826,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
            "start": 1856,
            "end": 1893,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1856,
              "end": 1867,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1867,
              "end": 1893,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1868,
                  "end": 1877,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1869,
                    "end": 1877,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1871,
                      "end": 1877
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1879,
                  "end": 1891,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1882,
                    "end": 1891,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 1919,
      "end": 2076,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1933,
        "end": 1936,
        "decorators": [],
        "name": "c62",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1937,
        "end": 2076,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1943,
            "end": 1983,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1943,
              "end": 1954,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1954,
              "end": 1983,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1955,
                  "end": 1972,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1964,
                    "end": 1972,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1966,
                      "end": 1972
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1974,
                  "end": 1981,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 1977,
                    "end": 1981,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
            "start": 2011,
            "end": 2051,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2011,
              "end": 2022,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2022,
              "end": 2051,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2040,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2032,
                    "end": 2040,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2034,
                      "end": 2040
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 2042,
                  "end": 2049,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2045,
                    "end": 2049,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 2078,
      "end": 2201,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2092,
        "end": 2101,
        "decorators": [],
        "name": "c6NoError",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2102,
        "end": 2201,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2108,
            "end": 2139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2108,
              "end": 2119,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2119,
              "end": 2139,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2120,
                  "end": 2137,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2129,
                    "end": 2137,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2131,
                      "end": 2137
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
            "start": 2156,
            "end": 2187,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2156,
              "end": 2167,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 2167,
              "end": 2187,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2168,
                  "end": 2185,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2177,
                    "end": 2185,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2179,
                      "end": 2185
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
          }
        ]
      },
      "abstract": false,
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
