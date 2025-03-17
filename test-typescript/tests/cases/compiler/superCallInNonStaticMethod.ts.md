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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Doing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 39,
              "name": "instanceMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 49,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 53,
      "end": 1003,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "Other",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "name": "Doing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 1003,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 174,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 132,
              "name": "instanceMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 132,
              "end": 174,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 174,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 168,
                    "expression": {
                      "type": "CallExpression",
                      "start": 145,
                      "end": 167,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 145,
                        "end": 165,
                        "object": {
                          "type": "Super",
                          "start": 145,
                          "end": 150
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 165,
                          "name": "instanceMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 331,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 259,
              "name": "lambdaInsideAnInstanceMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 331,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 262,
                "end": 331,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 272,
                    "end": 325,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 272,
                      "end": 325,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 278,
                        "end": 325,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 292,
                            "end": 315,
                            "expression": {
                              "type": "CallExpression",
                              "start": 292,
                              "end": 314,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 292,
                                "end": 312,
                                "object": {
                                  "type": "Super",
                                  "start": 292,
                                  "end": 297
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 298,
                                  "end": 312,
                                  "name": "instanceMethod",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 390,
            "end": 586,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 432,
              "name": "objectLiteralInsideAnInstanceMethod",
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
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 466,
                            "end": 467,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 469,
                            "end": 530,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 475,
                              "end": 530,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 493,
                                  "end": 516,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 493,
                                    "end": 515,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 493,
                                      "end": 513,
                                      "object": {
                                        "type": "Super",
                                        "start": 493,
                                        "end": 498
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 499,
                                        "end": 513,
                                        "name": "instanceMethod",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
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
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 544,
                          "end": 569,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 545,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 547,
                            "end": 569,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 547,
                              "end": 567,
                              "object": {
                                "type": "Super",
                                "start": 547,
                                "end": 552
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 553,
                                "end": 567,
                                "name": "instanceMethod",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 611,
            "end": 691,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 630,
              "name": "accessor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 630,
              "end": 691,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 633,
                "end": 691,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 643,
                    "end": 666,
                    "expression": {
                      "type": "CallExpression",
                      "start": 643,
                      "end": 665,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 643,
                        "end": 663,
                        "object": {
                          "type": "Super",
                          "start": 643,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 663,
                          "name": "instanceMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 676,
                    "end": 685,
                    "argument": {
                      "type": "Literal",
                      "start": 683,
                      "end": 684,
                      "value": 0,
                      "raw": "0"
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 716,
            "end": 790,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 727,
              "end": 735,
              "name": "accessor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 735,
              "end": 790,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 736,
                  "end": 749,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 743,
                      "end": 749
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 790,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 761,
                    "end": 784,
                    "expression": {
                      "type": "CallExpression",
                      "start": 761,
                      "end": 783,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 761,
                        "end": 781,
                        "object": {
                          "type": "Super",
                          "start": 761,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 767,
                          "end": 781,
                          "name": "instanceMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 800,
            "end": 870,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 800,
              "end": 811,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 811,
              "end": 870,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 814,
                "end": 870,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 824,
                    "end": 832,
                    "expression": {
                      "type": "CallExpression",
                      "start": 824,
                      "end": 831,
                      "callee": {
                        "type": "Super",
                        "start": 824,
                        "end": 829
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 841,
                    "end": 864,
                    "expression": {
                      "type": "CallExpression",
                      "start": 841,
                      "end": 863,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 841,
                        "end": 861,
                        "object": {
                          "type": "Super",
                          "start": 841,
                          "end": 846
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 847,
                          "end": 861,
                          "name": "instanceMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "type": "PropertyDefinition",
            "start": 880,
            "end": 932,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 887,
              "end": 906,
              "name": "propertyInitializer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 909,
              "end": 931,
              "callee": {
                "type": "MemberExpression",
                "start": 909,
                "end": 929,
                "object": {
                  "type": "Super",
                  "start": 909,
                  "end": 914
                },
                "property": {
                  "type": "Identifier",
                  "start": 915,
                  "end": 929,
                  "name": "instanceMethod",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 942,
            "end": 1001,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 965,
              "name": "functionProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 968,
              "end": 1000,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 974,
                "end": 1000,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 975,
                    "end": 998,
                    "expression": {
                      "type": "CallExpression",
                      "start": 975,
                      "end": 997,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 975,
                        "end": 995,
                        "object": {
                          "type": "Super",
                          "start": 975,
                          "end": 980
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 981,
                          "end": 995,
                          "name": "instanceMethod",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
