__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1003,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 49,
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
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 49,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 42,
                "end": 49,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 1003,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 1003,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 174,
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
            "value": {
              "type": "FunctionExpression",
              "start": 132,
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
                          "decorators": [],
                          "name": "instanceMethod",
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 331,
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
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 331,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "instanceMethod",
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
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 390,
            "end": 586,
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
            "value": {
              "type": "FunctionExpression",
              "start": 432,
              "end": 586,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 466,
                            "end": 467,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 469,
                            "end": 530,
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
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
                                        "decorators": [],
                                        "name": "instanceMethod",
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
                                  "directive": null
                                }
                              ]
                            },
                            "id": null,
                            "generator": false
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 544,
                          "end": 569,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 545,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
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
                                "decorators": [],
                                "name": "instanceMethod",
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 611,
            "end": 691,
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
            "value": {
              "type": "FunctionExpression",
              "start": 630,
              "end": 691,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "instanceMethod",
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 716,
            "end": 790,
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
            "value": {
              "type": "FunctionExpression",
              "start": 735,
              "end": 790,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "decorators": [],
                          "name": "instanceMethod",
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
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 800,
            "end": 870,
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
            "value": {
              "type": "FunctionExpression",
              "start": 811,
              "end": 870,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                          "decorators": [],
                          "name": "instanceMethod",
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
            "type": "PropertyDefinition",
            "start": 880,
            "end": 932,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 887,
              "end": 906,
              "decorators": [],
              "name": "propertyInitializer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "instanceMethod",
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
            "start": 942,
            "end": 1001,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 965,
              "decorators": [],
              "name": "functionProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 968,
              "end": 1000,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "instanceMethod",
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
                    "directive": null
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
            "accessibility": "public"
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
