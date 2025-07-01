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
        "name": "TestWithStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 21
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 28,
              "end": 33
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 36,
              "end": 37
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 28,
            "end": 37
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dd",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 51
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestWithStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 73
                },
                "typeArguments": null,
                "arguments": [],
                "start": 54,
                "end": 75
              },
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "start": 76,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 54,
              "end": 81
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 42,
            "end": 82
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "X_ z_ zz",
              "raw": "\"X_ z_ zz\"",
              "start": 101,
              "end": 111
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 126
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "foo",
                      "start": 137,
                      "end": 141
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 145,
                      "end": 147
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 137,
                    "end": 147
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 157
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TestWithStatics",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 193
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 174,
                                "end": 195
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "prop",
                                "start": 196,
                                "end": 201
                              },
                              "optional": false,
                              "computed": false,
                              "start": 174,
                              "end": 201
                            },
                            "directive": null,
                            "start": 174,
                            "end": 201
                          }
                        ],
                        "start": 160,
                        "end": 217
                      },
                      "expression": false,
                      "start": 157,
                      "end": 217
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 156,
                    "end": 217
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 234
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 243,
                        "end": 253
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
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 268,
                              "end": 269
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TestWithStatics",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 294,
                                          "end": 309
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 290,
                                        "end": 311
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "prop",
                                        "start": 312,
                                        "end": 317
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 290,
                                      "end": 317
                                    },
                                    "directive": null,
                                    "start": 290,
                                    "end": 317
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 344,
                                          "end": 349
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 340,
                                        "end": 351
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 352,
                                        "end": 356
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 340,
                                      "end": 356
                                    },
                                    "directive": null,
                                    "start": 340,
                                    "end": 357
                                  }
                                ],
                                "start": 272,
                                "end": 377
                              },
                              "expression": false,
                              "start": 269,
                              "end": 377
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 268,
                            "end": 377
                          }
                        ],
                        "start": 254,
                        "end": 387
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 237,
                      "end": 387
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 226,
                    "end": 387
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 405
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
                              "type": "ClassExpression",
                              "decorators": [],
                              "id": null,
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
                                      "name": "m",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 452,
                                      "end": 453
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
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestWithStatics",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 482,
                                                  "end": 497
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 478,
                                                "end": 499
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "prop",
                                                "start": 500,
                                                "end": 505
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 478,
                                              "end": 505
                                            },
                                            "directive": null,
                                            "start": 478,
                                            "end": 505
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 536,
                                                  "end": 541
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 532,
                                                "end": 543
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "foo",
                                                "start": 544,
                                                "end": 548
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 532,
                                              "end": 548
                                            },
                                            "directive": null,
                                            "start": 532,
                                            "end": 549
                                          }
                                        ],
                                        "start": 456,
                                        "end": 573
                                      },
                                      "expression": false,
                                      "start": 453,
                                      "end": 573
                                    },
                                    "kind": "method",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 452,
                                    "end": 573
                                  }
                                ],
                                "start": 434,
                                "end": 587
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 428,
                              "end": 587
                            },
                            "start": 421,
                            "end": 587
                          }
                        ],
                        "start": 407,
                        "end": 597
                      },
                      "expression": false,
                      "start": 405,
                      "end": 597
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 397,
                    "end": 597
                  }
                ],
                "start": 127,
                "end": 603
              },
              "abstract": false,
              "declare": false,
              "start": 115,
              "end": 603
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 93,
            "end": 603
          }
        ],
        "start": 22,
        "end": 605
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 605
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNonStatics",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 627
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 634,
              "end": 639
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 642,
              "end": 643
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 634,
            "end": 643
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dd",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNonStatics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 671
                },
                "typeArguments": null,
                "arguments": [],
                "start": 653,
                "end": 673
              },
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "start": 674,
                "end": 679
              },
              "optional": false,
              "computed": false,
              "start": 653,
              "end": 679
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 648,
            "end": 680
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "X_ z_ zz",
              "raw": "\"X_ z_ zz\"",
              "start": 692,
              "end": 702
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 717
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "PrivateIdentifier",
                      "name": "foo",
                      "start": 728,
                      "end": 732
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 736,
                      "end": 738
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 728,
                    "end": 738
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 748
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TestNonStatics",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 769,
                                  "end": 783
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 765,
                                "end": 785
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "prop",
                                "start": 786,
                                "end": 791
                              },
                              "optional": false,
                              "computed": false,
                              "start": 765,
                              "end": 791
                            },
                            "directive": null,
                            "start": 765,
                            "end": 791
                          }
                        ],
                        "start": 751,
                        "end": 807
                      },
                      "expression": false,
                      "start": 748,
                      "end": 807
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 747,
                    "end": 807
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 817
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InnerInner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 836
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
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 851,
                              "end": 852
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "TestNonStatics",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 877,
                                          "end": 891
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 873,
                                        "end": 893
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "prop",
                                        "start": 894,
                                        "end": 899
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 873,
                                      "end": 899
                                    },
                                    "directive": null,
                                    "start": 873,
                                    "end": 899
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Inner",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 926,
                                          "end": 931
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 922,
                                        "end": 933
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 934,
                                        "end": 938
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 922,
                                      "end": 938
                                    },
                                    "directive": null,
                                    "start": 922,
                                    "end": 939
                                  }
                                ],
                                "start": 855,
                                "end": 959
                              },
                              "expression": false,
                              "start": 852,
                              "end": 959
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 851,
                            "end": 959
                          }
                        ],
                        "start": 837,
                        "end": 969
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 820,
                      "end": 969
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 816,
                    "end": 969
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 987
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
                              "type": "ClassExpression",
                              "decorators": [],
                              "id": null,
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
                                      "name": "m",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1034,
                                      "end": 1035
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
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "TestNonStatics",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1064,
                                                  "end": 1078
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 1060,
                                                "end": 1080
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "prop",
                                                "start": 1081,
                                                "end": 1086
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1060,
                                              "end": 1086
                                            },
                                            "directive": null,
                                            "start": 1060,
                                            "end": 1086
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "NewExpression",
                                                "callee": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Inner",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1117,
                                                  "end": 1122
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 1113,
                                                "end": 1124
                                              },
                                              "property": {
                                                "type": "PrivateIdentifier",
                                                "name": "foo",
                                                "start": 1125,
                                                "end": 1129
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 1113,
                                              "end": 1129
                                            },
                                            "directive": null,
                                            "start": 1113,
                                            "end": 1130
                                          }
                                        ],
                                        "start": 1038,
                                        "end": 1154
                                      },
                                      "expression": false,
                                      "start": 1035,
                                      "end": 1154
                                    },
                                    "kind": "method",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 1034,
                                    "end": 1154
                                  }
                                ],
                                "start": 1016,
                                "end": 1168
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 1010,
                              "end": 1168
                            },
                            "start": 1003,
                            "end": 1168
                          }
                        ],
                        "start": 989,
                        "end": 1178
                      },
                      "expression": false,
                      "start": 987,
                      "end": 1178
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 979,
                    "end": 1178
                  }
                ],
                "start": 718,
                "end": 1184
              },
              "abstract": false,
              "declare": false,
              "start": 706,
              "end": 1184
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 691,
            "end": 1184
          }
        ],
        "start": 628,
        "end": 1186
      },
      "abstract": false,
      "declare": false,
      "start": 607,
      "end": 1186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1186
}
```
