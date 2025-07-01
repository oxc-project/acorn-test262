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
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "instanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 39
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
                "body": [],
                "start": 42,
                "end": 49
              },
              "expression": false,
              "start": 39,
              "end": 49
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 18,
            "end": 49
          }
        ],
        "start": 12,
        "end": 51
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 64
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
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
              "name": "instanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 132
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 145,
                          "end": 150
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 165
                        },
                        "optional": false,
                        "computed": false,
                        "start": 145,
                        "end": 165
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 145,
                      "end": 167
                    },
                    "directive": null,
                    "start": 145,
                    "end": 168
                  }
                ],
                "start": 135,
                "end": 174
              },
              "expression": false,
              "start": 132,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 111,
            "end": 174
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambdaInsideAnInstanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 259
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
                    "type": "ExpressionStatement",
                    "expression": {
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 292,
                                  "end": 297
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "instanceMethod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 298,
                                  "end": 312
                                },
                                "optional": false,
                                "computed": false,
                                "start": 292,
                                "end": 312
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 292,
                              "end": 314
                            },
                            "directive": null,
                            "start": 292,
                            "end": 315
                          }
                        ],
                        "start": 278,
                        "end": 325
                      },
                      "id": null,
                      "generator": false,
                      "start": 272,
                      "end": 325
                    },
                    "directive": null,
                    "start": 272,
                    "end": 325
                  }
                ],
                "start": 262,
                "end": 331
              },
              "expression": false,
              "start": 259,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 224,
            "end": 331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "objectLiteralInsideAnInstanceMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 432
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 466,
                            "end": 467
                          },
                          "value": {
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Super",
                                        "start": 493,
                                        "end": 498
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "instanceMethod",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 499,
                                        "end": 513
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 493,
                                      "end": 513
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 493,
                                    "end": 515
                                  },
                                  "directive": null,
                                  "start": 493,
                                  "end": 516
                                }
                              ],
                              "start": 475,
                              "end": 530
                            },
                            "id": null,
                            "generator": false,
                            "start": 469,
                            "end": 530
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 466,
                          "end": 530
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 545
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 547,
                                "end": 552
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "instanceMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 553,
                                "end": 567
                              },
                              "optional": false,
                              "computed": false,
                              "start": 547,
                              "end": 567
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 547,
                            "end": 569
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 544,
                          "end": 569
                        }
                      ],
                      "start": 452,
                      "end": 579
                    },
                    "start": 445,
                    "end": 580
                  }
                ],
                "start": 435,
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
            "accessibility": "public",
            "start": 390,
            "end": 586
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 630
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 643,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 663
                        },
                        "optional": false,
                        "computed": false,
                        "start": 643,
                        "end": 663
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 643,
                      "end": 665
                    },
                    "directive": null,
                    "start": 643,
                    "end": 666
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 683,
                      "end": 684
                    },
                    "start": 676,
                    "end": 685
                  }
                ],
                "start": 633,
                "end": 691
              },
              "expression": false,
              "start": 630,
              "end": 691
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 611,
            "end": 691
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessor",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 735
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 743,
                      "end": 749
                    },
                    "start": 741,
                    "end": 749
                  },
                  "start": 736,
                  "end": 749
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
                          "type": "Super",
                          "start": 761,
                          "end": 766
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 781
                        },
                        "optional": false,
                        "computed": false,
                        "start": 761,
                        "end": 781
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 761,
                      "end": 783
                    },
                    "directive": null,
                    "start": 761,
                    "end": 784
                  }
                ],
                "start": 751,
                "end": 790
              },
              "expression": false,
              "start": 735,
              "end": 790
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 716,
            "end": 790
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
              "start": 800,
              "end": 811
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 824,
                        "end": 829
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 824,
                      "end": 831
                    },
                    "directive": null,
                    "start": 824,
                    "end": 832
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 841,
                          "end": 846
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 847,
                          "end": 861
                        },
                        "optional": false,
                        "computed": false,
                        "start": 841,
                        "end": 861
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 841,
                      "end": 863
                    },
                    "directive": null,
                    "start": 841,
                    "end": 864
                  }
                ],
                "start": 814,
                "end": 870
              },
              "expression": false,
              "start": 811,
              "end": 870
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 800,
            "end": 870
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyInitializer",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 906
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 909,
                  "end": 914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "instanceMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 915,
                  "end": 929
                },
                "optional": false,
                "computed": false,
                "start": 909,
                "end": 929
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 909,
              "end": 931
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 880,
            "end": 932
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 965
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 975,
                          "end": 980
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "instanceMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 981,
                          "end": 995
                        },
                        "optional": false,
                        "computed": false,
                        "start": 975,
                        "end": 995
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 975,
                      "end": 997
                    },
                    "directive": null,
                    "start": 975,
                    "end": 998
                  }
                ],
                "start": 974,
                "end": 1000
              },
              "id": null,
              "generator": false,
              "start": 968,
              "end": 1000
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 942,
            "end": 1001
          }
        ],
        "start": 79,
        "end": 1003
      },
      "abstract": false,
      "declare": false,
      "start": 53,
      "end": 1003
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1003
}
```
