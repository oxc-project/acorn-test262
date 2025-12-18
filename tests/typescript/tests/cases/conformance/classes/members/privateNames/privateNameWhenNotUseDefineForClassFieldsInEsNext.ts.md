__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 6,
    "end": 21,
    "range": [
      6,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 28,
    "end": 33,
    "range": [
      28,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 49,
    "end": 51,
    "range": [
      49,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 54,
    "end": 57,
    "range": [
      54,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 58,
    "end": 73,
    "range": [
      58,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 76,
    "end": 81,
    "range": [
      76,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "String",
    "value": "\"X_ z_ zz\"",
    "start": 101,
    "end": 111,
    "range": [
      101,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 115,
    "end": 120,
    "range": [
      115,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 137,
    "end": 141,
    "range": [
      137,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 145,
    "end": 147,
    "range": [
      145,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 178,
    "end": 193,
    "range": [
      178,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerInner",
    "start": 243,
    "end": 253,
    "range": [
      243,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 294,
    "end": 309,
    "range": [
      294,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 312,
    "end": 317,
    "range": [
      312,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343,
    "range": [
      340,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 344,
    "end": 349,
    "range": [
      344,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 352,
    "end": 356,
    "range": [
      352,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 397,
    "end": 403,
    "range": [
      397,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 421,
    "end": 427,
    "range": [
      421,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 428,
    "end": 433,
    "range": [
      428,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 478,
    "end": 481,
    "range": [
      478,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "TestWithStatics",
    "start": 482,
    "end": 497,
    "range": [
      482,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 500,
    "end": 505,
    "range": [
      500,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 532,
    "end": 535,
    "range": [
      532,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 536,
    "end": 541,
    "range": [
      536,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 607,
    "end": 612,
    "range": [
      607,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 613,
    "end": 627,
    "range": [
      613,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 634,
    "end": 639,
    "range": [
      634,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 657,
    "end": 671,
    "range": [
      657,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 674,
    "end": 679,
    "range": [
      674,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "String",
    "value": "\"X_ z_ zz\"",
    "start": 692,
    "end": 702,
    "range": [
      692,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 706,
    "end": 711,
    "range": [
      706,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 712,
    "end": 717,
    "range": [
      712,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 728,
    "end": 732,
    "range": [
      728,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 736,
    "end": 738,
    "range": [
      736,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 765,
    "end": 768,
    "range": [
      765,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 769,
    "end": 783,
    "range": [
      769,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 786,
    "end": 791,
    "range": [
      786,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 820,
    "end": 825,
    "range": [
      820,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerInner",
    "start": 826,
    "end": 836,
    "range": [
      826,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 877,
    "end": 891,
    "range": [
      877,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 894,
    "end": 899,
    "range": [
      894,
      899
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 922,
    "end": 925,
    "range": [
      922,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 926,
    "end": 931,
    "range": [
      926,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 934,
    "end": 938,
    "range": [
      934,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 979,
    "end": 985,
    "range": [
      979,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1010,
    "end": 1015,
    "range": [
      1010,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1060,
    "end": 1063,
    "range": [
      1060,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "TestNonStatics",
    "start": 1064,
    "end": 1078,
    "range": [
      1064,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 1081,
    "end": 1086,
    "range": [
      1081,
      1086
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1113,
    "end": 1116,
    "range": [
      1113,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 1117,
    "end": 1122,
    "range": [
      1117,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "foo",
    "start": 1125,
    "end": 1129,
    "range": [
      1125,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  }
]
```
