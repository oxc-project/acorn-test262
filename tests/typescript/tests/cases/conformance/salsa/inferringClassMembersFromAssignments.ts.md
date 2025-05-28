__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2256,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 2255,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 2255,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 206,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 206,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 206,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 38,
                    "end": 171,
                    "test": {
                      "type": "CallExpression",
                      "start": 42,
                      "end": 55,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 42,
                        "end": 53,
                        "object": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 46,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 53,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 104,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 71,
                          "end": 94,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 71,
                            "end": 93,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 71,
                              "end": 89,
                              "object": {
                                "type": "ThisExpression",
                                "start": 71,
                                "end": 75
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 76,
                                "end": 89,
                                "decorators": [],
                                "name": "inConstructor",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 92,
                              "end": 93,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 118,
                      "end": 171,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 132,
                          "end": 161,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 132,
                            "end": 161,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 132,
                              "end": 150,
                              "object": {
                                "type": "ThisExpression",
                                "start": 132,
                                "end": 136
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 137,
                                "end": 150,
                                "decorators": [],
                                "name": "inConstructor",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 153,
                              "end": 161,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 180,
                    "end": 200,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 180,
                      "end": 199,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 180,
                        "end": 195,
                        "object": {
                          "type": "ThisExpression",
                          "start": 180,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 195,
                          "decorators": [],
                          "name": "inMultiple",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 198,
                        "end": 199,
                        "value": 0,
                        "raw": "0"
                      }
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
            "start": 211,
            "end": 750,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 211,
              "end": 217,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 217,
              "end": 750,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 220,
                "end": 750,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 230,
                    "end": 442,
                    "test": {
                      "type": "CallExpression",
                      "start": 234,
                      "end": 247,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 234,
                        "end": 245,
                        "object": {
                          "type": "Identifier",
                          "start": 234,
                          "end": 238,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 245,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 249,
                      "end": 333,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 263,
                          "end": 281,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 263,
                            "end": 280,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 263,
                              "end": 276,
                              "object": {
                                "type": "ThisExpression",
                                "start": 263,
                                "end": 267
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 268,
                                "end": 276,
                                "decorators": [],
                                "name": "inMethod",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 279,
                              "end": 280,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 294,
                          "end": 323,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 294,
                            "end": 322,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 294,
                              "end": 315,
                              "object": {
                                "type": "ThisExpression",
                                "start": 294,
                                "end": 298
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 299,
                                "end": 315,
                                "decorators": [],
                                "name": "inMethodNullable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 318,
                              "end": 322,
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 347,
                      "end": 442,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 361,
                          "end": 385,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 361,
                            "end": 385,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 361,
                              "end": 374,
                              "object": {
                                "type": "ThisExpression",
                                "start": 361,
                                "end": 365
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 366,
                                "end": 374,
                                "decorators": [],
                                "name": "inMethod",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 377,
                              "end": 385,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 398,
                          "end": 432,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 398,
                            "end": 431,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 398,
                              "end": 419,
                              "object": {
                                "type": "ThisExpression",
                                "start": 398,
                                "end": 402
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 403,
                                "end": 419,
                                "decorators": [],
                                "name": "inMethodNullable",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 422,
                              "end": 431,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 451,
                    "end": 478,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 451,
                      "end": 477,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 451,
                        "end": 466,
                        "object": {
                          "type": "ThisExpression",
                          "start": 451,
                          "end": 455
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 466,
                          "decorators": [],
                          "name": "inMultiple",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 469,
                        "end": 477,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 487,
                    "end": 521,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 487,
                      "end": 520,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 487,
                        "end": 509,
                        "object": {
                          "type": "ThisExpression",
                          "start": 487,
                          "end": 491
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 492,
                          "end": 509,
                          "decorators": [],
                          "name": "inMultipleMethods",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 512,
                        "end": 520,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 531,
                    "end": 744,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 535,
                        "end": 743,
                        "id": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 541,
                          "decorators": [],
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 544,
                          "end": 743,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 550,
                            "end": 743,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 564,
                                "end": 733,
                                "test": {
                                  "type": "CallExpression",
                                  "start": 568,
                                  "end": 581,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 568,
                                    "end": 579,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 568,
                                      "end": 572,
                                      "decorators": [],
                                      "name": "Math",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 573,
                                      "end": 579,
                                      "decorators": [],
                                      "name": "random",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 583,
                                  "end": 646,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 601,
                                      "end": 632,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 601,
                                        "end": 631,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 601,
                                          "end": 627,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 601,
                                            "end": 605
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 606,
                                            "end": 627,
                                            "decorators": [],
                                            "name": "inNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 630,
                                          "end": 631,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 664,
                                  "end": 733,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 682,
                                      "end": 719,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 682,
                                        "end": 719,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 682,
                                          "end": 708,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 682,
                                            "end": 686
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 687,
                                            "end": 708,
                                            "decorators": [],
                                            "name": "inNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 711,
                                          "end": 719,
                                          "value": "string",
                                          "raw": "\"string\""
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
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
            "start": 755,
            "end": 973,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 755,
              "end": 758,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 758,
              "end": 973,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 761,
                "end": 973,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 771,
                    "end": 894,
                    "test": {
                      "type": "CallExpression",
                      "start": 775,
                      "end": 788,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 775,
                        "end": 786,
                        "object": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 779,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 780,
                          "end": 786,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 790,
                      "end": 832,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 804,
                          "end": 822,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 804,
                            "end": 821,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 804,
                              "end": 817,
                              "object": {
                                "type": "ThisExpression",
                                "start": 804,
                                "end": 808
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 809,
                                "end": 817,
                                "decorators": [],
                                "name": "inGetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 820,
                              "end": 821,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 846,
                      "end": 894,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 860,
                          "end": 884,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 860,
                            "end": 884,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 860,
                              "end": 873,
                              "object": {
                                "type": "ThisExpression",
                                "start": 860,
                                "end": 864
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 865,
                                "end": 873,
                                "decorators": [],
                                "name": "inGetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 876,
                              "end": 884,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 903,
                    "end": 927,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 903,
                      "end": 926,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 903,
                        "end": 918,
                        "object": {
                          "type": "ThisExpression",
                          "start": 903,
                          "end": 907
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 908,
                          "end": 918,
                          "decorators": [],
                          "name": "inMultiple",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 921,
                        "end": 926,
                        "value": false,
                        "raw": "false"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 936,
                    "end": 967,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 936,
                      "end": 966,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 936,
                        "end": 958,
                        "object": {
                          "type": "ThisExpression",
                          "start": 936,
                          "end": 940
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 941,
                          "end": 958,
                          "decorators": [],
                          "name": "inMultipleMethods",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 961,
                        "end": 966,
                        "value": false,
                        "raw": "false"
                      }
                    },
                    "directive": null
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
            "start": 978,
            "end": 1123,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 981,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 981,
              "end": 1123,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 984,
                "end": 1123,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 994,
                    "end": 1117,
                    "test": {
                      "type": "CallExpression",
                      "start": 998,
                      "end": 1011,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 998,
                        "end": 1009,
                        "object": {
                          "type": "Identifier",
                          "start": 998,
                          "end": 1002,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1003,
                          "end": 1009,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1013,
                      "end": 1055,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1027,
                          "end": 1045,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1027,
                            "end": 1044,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1027,
                              "end": 1040,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1027,
                                "end": 1031
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1032,
                                "end": 1040,
                                "decorators": [],
                                "name": "inSetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1043,
                              "end": 1044,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1069,
                      "end": 1117,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1083,
                          "end": 1107,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1083,
                            "end": 1107,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1083,
                              "end": 1096,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1083,
                                "end": 1087
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1088,
                                "end": 1096,
                                "decorators": [],
                                "name": "inSetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1099,
                              "end": 1107,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
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
            "type": "PropertyDefinition",
            "start": 1128,
            "end": 1306,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1128,
              "end": 1132,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 1135,
              "end": 1306,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1141,
                "end": 1306,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1151,
                    "end": 1300,
                    "test": {
                      "type": "CallExpression",
                      "start": 1155,
                      "end": 1168,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1155,
                        "end": 1166,
                        "object": {
                          "type": "Identifier",
                          "start": 1155,
                          "end": 1159,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1160,
                          "end": 1166,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1170,
                      "end": 1225,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1184,
                          "end": 1215,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1184,
                            "end": 1214,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1184,
                              "end": 1210,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1184,
                                "end": 1188
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1189,
                                "end": 1210,
                                "decorators": [],
                                "name": "inPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1213,
                              "end": 1214,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1239,
                      "end": 1300,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1253,
                          "end": 1290,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1253,
                            "end": 1290,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1253,
                              "end": 1279,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1253,
                                "end": 1257
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1258,
                                "end": 1279,
                                "decorators": [],
                                "name": "inPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1282,
                              "end": 1290,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1311,
            "end": 1713,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1318,
              "end": 1324,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1324,
              "end": 1713,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1327,
                "end": 1713,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1337,
                    "end": 1472,
                    "test": {
                      "type": "CallExpression",
                      "start": 1341,
                      "end": 1354,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1341,
                        "end": 1352,
                        "object": {
                          "type": "Identifier",
                          "start": 1341,
                          "end": 1345,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1346,
                          "end": 1352,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1356,
                      "end": 1404,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1370,
                          "end": 1394,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1370,
                            "end": 1393,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1370,
                              "end": 1389,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1370,
                                "end": 1374
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1375,
                                "end": 1389,
                                "decorators": [],
                                "name": "inStaticMethod",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1392,
                              "end": 1393,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1418,
                      "end": 1472,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1432,
                          "end": 1462,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1432,
                            "end": 1462,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1432,
                              "end": 1451,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1432,
                                "end": 1436
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1437,
                                "end": 1451,
                                "decorators": [],
                                "name": "inStaticMethod",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1454,
                              "end": 1462,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1482,
                    "end": 1707,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1486,
                        "end": 1706,
                        "id": {
                          "type": "Identifier",
                          "start": 1486,
                          "end": 1492,
                          "decorators": [],
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1495,
                          "end": 1706,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1501,
                            "end": 1706,
                            "body": [
                              {
                                "type": "IfStatement",
                                "start": 1515,
                                "end": 1696,
                                "test": {
                                  "type": "CallExpression",
                                  "start": 1519,
                                  "end": 1532,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1519,
                                    "end": 1530,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1519,
                                      "end": 1523,
                                      "decorators": [],
                                      "name": "Math",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1524,
                                      "end": 1530,
                                      "decorators": [],
                                      "name": "random",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 1534,
                                  "end": 1603,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 1552,
                                      "end": 1589,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 1552,
                                        "end": 1588,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 1552,
                                          "end": 1584,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1552,
                                            "end": 1556
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1557,
                                            "end": 1584,
                                            "decorators": [],
                                            "name": "inStaticNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 1587,
                                          "end": 1588,
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 1621,
                                  "end": 1696,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 1639,
                                      "end": 1682,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 1639,
                                        "end": 1682,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 1639,
                                          "end": 1671,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1639,
                                            "end": 1643
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1644,
                                            "end": 1671,
                                            "decorators": [],
                                            "name": "inStaticNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "start": 1674,
                                          "end": 1682,
                                          "value": "string",
                                          "raw": "\"string\""
                                        }
                                      },
                                      "directive": null
                                    }
                                  ]
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
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1718,
            "end": 1882,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1725,
              "end": 1728,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1728,
              "end": 1882,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1731,
                "end": 1882,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1741,
                    "end": 1876,
                    "test": {
                      "type": "CallExpression",
                      "start": 1745,
                      "end": 1758,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1745,
                        "end": 1756,
                        "object": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1749,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1750,
                          "end": 1756,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1760,
                      "end": 1808,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1774,
                          "end": 1798,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1774,
                            "end": 1797,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1774,
                              "end": 1793,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1774,
                                "end": 1778
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1779,
                                "end": 1793,
                                "decorators": [],
                                "name": "inStaticGetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1796,
                              "end": 1797,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1822,
                      "end": 1876,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1836,
                          "end": 1866,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1836,
                            "end": 1866,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1836,
                              "end": 1855,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1836,
                                "end": 1840
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1841,
                                "end": 1855,
                                "decorators": [],
                                "name": "inStaticGetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1858,
                              "end": 1866,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1887,
            "end": 2051,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1894,
              "end": 1897,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1897,
              "end": 2051,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1900,
                "end": 2051,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1910,
                    "end": 2045,
                    "test": {
                      "type": "CallExpression",
                      "start": 1914,
                      "end": 1927,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1914,
                        "end": 1925,
                        "object": {
                          "type": "Identifier",
                          "start": 1914,
                          "end": 1918,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1919,
                          "end": 1925,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1929,
                      "end": 1977,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1943,
                          "end": 1967,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 1943,
                            "end": 1966,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 1943,
                              "end": 1962,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1943,
                                "end": 1947
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1948,
                                "end": 1962,
                                "decorators": [],
                                "name": "inStaticSetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1965,
                              "end": 1966,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1991,
                      "end": 2045,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2005,
                          "end": 2035,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2005,
                            "end": 2035,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2005,
                              "end": 2024,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2005,
                                "end": 2009
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2010,
                                "end": 2024,
                                "decorators": [],
                                "name": "inStaticSetter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2027,
                              "end": 2035,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2056,
            "end": 2253,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2063,
              "end": 2067,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 2070,
              "end": 2253,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2076,
                "end": 2253,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 2086,
                    "end": 2247,
                    "test": {
                      "type": "CallExpression",
                      "start": 2090,
                      "end": 2103,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2090,
                        "end": 2101,
                        "object": {
                          "type": "Identifier",
                          "start": 2090,
                          "end": 2094,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2095,
                          "end": 2101,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2105,
                      "end": 2166,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2119,
                          "end": 2156,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2119,
                            "end": 2155,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2119,
                              "end": 2151,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2119,
                                "end": 2123
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2124,
                                "end": 2151,
                                "decorators": [],
                                "name": "inStaticPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2154,
                              "end": 2155,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 2180,
                      "end": 2247,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2194,
                          "end": 2237,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2194,
                            "end": 2237,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2194,
                              "end": 2226,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2194,
                                "end": 2198
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2199,
                                "end": 2226,
                                "decorators": [],
                                "name": "inStaticPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2229,
                              "end": 2237,
                              "value": "string",
                              "raw": "\"string\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 943,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 8,
            "end": 15,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 54,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 53,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 53,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 38,
                "end": 53,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 92,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 76,
            "end": 91,
            "object": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 91,
              "decorators": [],
              "name": "inConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 153,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 152,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 152,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 125,
                "end": 152,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 125,
                    "end": 131
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 143,
                    "end": 152
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 184,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 197,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 189,
              "end": 197,
              "decorators": [],
              "name": "inMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 242,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 228,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 231,
            "end": 241,
            "object": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 241,
              "decorators": [],
              "name": "inGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 286,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 272,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 275,
            "end": 285,
            "object": {
              "type": "Identifier",
              "start": 275,
              "end": 276,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 277,
              "end": 285,
              "decorators": [],
              "name": "inSetter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 316,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 342,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 342,
              "decorators": [],
              "name": "inPropertyDeclaration",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 399,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 373,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 376,
            "end": 399,
            "object": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 378,
              "end": 399,
              "decorators": [],
              "name": "inNestedArrowFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 456,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 455,
            "decorators": [],
            "name": "stringOrNumberOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 455,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 430,
                "end": 455,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 439,
                    "end": 445
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 448,
                    "end": 455
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 477,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 476,
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 476,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 470,
                "end": 476
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 504,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 488,
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 491,
            "end": 503,
            "object": {
              "type": "Identifier",
              "start": 491,
              "end": 492,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 493,
              "end": 503,
              "decorators": [],
              "name": "inMultiple",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 567,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 566,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 566,
            "decorators": [],
            "name": "stringOrBooleanOrUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 536,
              "end": 566,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 538,
                "end": 566,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 547,
                    "end": 554
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 557,
                    "end": 566
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 621,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 598,
            "decorators": [],
            "name": "stringOrBooleanOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 601,
            "end": 620,
            "object": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 603,
              "end": 620,
              "decorators": [],
              "name": "inMultipleMethods",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 635,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 634,
            "decorators": [],
            "name": "any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 634,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 665,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "decorators": [],
            "name": "any",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 646,
            "end": 664,
            "object": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 648,
              "end": 664,
              "decorators": [],
              "name": "inMethodNullable",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 717,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 716,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 697,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 700,
            "end": 716,
            "object": {
              "type": "Identifier",
              "start": 700,
              "end": 701,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 702,
              "end": 716,
              "decorators": [],
              "name": "inStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 767,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 747,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 750,
            "end": 766,
            "object": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 752,
              "end": 766,
              "decorators": [],
              "name": "inStaticGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 817,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 816,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 797,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 800,
            "end": 816,
            "object": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 802,
              "end": 816,
              "decorators": [],
              "name": "inStaticSetter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 880,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 879,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 847,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 850,
            "end": 879,
            "object": {
              "type": "Identifier",
              "start": 850,
              "end": 851,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 852,
              "end": 879,
              "decorators": [],
              "name": "inStaticPropertyDeclaration",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 881,
      "end": 943,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 885,
          "end": 942,
          "id": {
            "type": "Identifier",
            "start": 885,
            "end": 910,
            "decorators": [],
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 913,
            "end": 942,
            "object": {
              "type": "Identifier",
              "start": 913,
              "end": 914,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 915,
              "end": 942,
              "decorators": [],
              "name": "inStaticNestedArrowFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
