__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1004,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 49,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 39,
              "decorators": [],
              "name": "instanceMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 49,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "end": 11,
        "decorators": [],
        "name": "Doing",
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
      "start": 53,
      "end": 1003,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 1003,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 174,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 132,
              "decorators": [],
              "name": "instanceMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 174,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 174,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 168,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 145,
                      "end": 167,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 145,
                        "end": 165,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 145,
                          "end": 150
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 165,
                          "decorators": [],
                          "name": "instanceMethod",
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
            "start": 224,
            "end": 331,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 259,
              "decorators": [],
              "name": "lambdaInsideAnInstanceMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 331,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 262,
                "end": 331,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 272,
                    "end": 325,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 272,
                      "end": 325,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 278,
                        "end": 325,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 292,
                            "end": 315,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 292,
                              "end": 314,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 292,
                                "end": 312,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 292,
                                  "end": 297
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 298,
                                  "end": 312,
                                  "decorators": [],
                                  "name": "instanceMethod",
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
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
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
            "start": 390,
            "end": 586,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 432,
              "decorators": [],
              "name": "objectLiteralInsideAnInstanceMethod",
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
                "start": 435,
                "end": 586,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 445,
                    "end": 580,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 452,
                      "end": 579,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 466,
                          "end": 530,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 466,
                            "end": 467,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 469,
                            "end": 530,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 475,
                              "end": 530,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 493,
                                  "end": 516,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 493,
                                    "end": 515,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 493,
                                      "end": 513,
                                      "computed": false,
                                      "object": {
                                        "type": "Super",
                                        "start": 493,
                                        "end": 498
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 499,
                                        "end": 513,
                                        "decorators": [],
                                        "name": "instanceMethod",
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
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 544,
                          "end": 569,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 545,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "CallExpression",
                            "start": 547,
                            "end": 569,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 547,
                              "end": 567,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 547,
                                "end": 552
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 553,
                                "end": 567,
                                "decorators": [],
                                "name": "instanceMethod",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    }
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
            "start": 611,
            "end": 691,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 630,
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 630,
              "end": 691,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 633,
                "end": 691,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 643,
                    "end": 666,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 643,
                      "end": 665,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 643,
                        "end": 663,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 643,
                          "end": 648
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 663,
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 676,
                    "end": 685,
                    "argument": {
                      "type": "Literal",
                      "start": 683,
                      "end": 684,
                      "raw": "0",
                      "value": 0
                    }
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
            "start": 716,
            "end": 790,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 727,
              "end": 735,
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 735,
              "end": 790,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 790,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 761,
                    "end": 784,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 761,
                      "end": 783,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 761,
                        "end": 781,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 761,
                          "end": 766
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 767,
                          "end": 781,
                          "decorators": [],
                          "name": "instanceMethod",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 736,
                  "end": 749,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 743,
                      "end": 749
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
            "start": 800,
            "end": 870,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 800,
              "end": 811,
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
              "start": 811,
              "end": 870,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 814,
                "end": 870,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 824,
                    "end": 832,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 824,
                      "end": 831,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 824,
                        "end": 829
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 841,
                    "end": 864,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 841,
                      "end": 863,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 841,
                        "end": 861,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 841,
                          "end": 846
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 847,
                          "end": 861,
                          "decorators": [],
                          "name": "instanceMethod",
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
            "type": "PropertyDefinition",
            "start": 880,
            "end": 932,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 887,
              "end": 906,
              "decorators": [],
              "name": "propertyInitializer",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 909,
              "end": 931,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 909,
                "end": 929,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 909,
                  "end": 914
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 915,
                  "end": 929,
                  "decorators": [],
                  "name": "instanceMethod",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 942,
            "end": 1001,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 965,
              "decorators": [],
              "name": "functionProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 968,
              "end": 1000,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 974,
                "end": 1000,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 975,
                    "end": 998,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 975,
                      "end": 997,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 975,
                        "end": 995,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 975,
                          "end": 980
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 981,
                          "end": 995,
                          "decorators": [],
                          "name": "instanceMethod",
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
              "params": [],
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
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "decorators": [],
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
