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
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 44
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
                "start": 47,
                "end": 54
              },
              "expression": false,
              "start": 44,
              "end": 54
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 18,
            "end": 54
          }
        ],
        "start": 12,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 56
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
        "start": 64,
        "end": 69
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doing",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 83
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
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 140
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
                          "start": 153,
                          "end": 158
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 171
                        },
                        "optional": false,
                        "computed": false,
                        "start": 153,
                        "end": 171
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 153,
                      "end": 173
                    },
                    "directive": null,
                    "start": 153,
                    "end": 174
                  }
                ],
                "start": 143,
                "end": 180
              },
              "expression": false,
              "start": 140,
              "end": 180
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 114,
            "end": 180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lambdaInsideAStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 267
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
                                  "start": 300,
                                  "end": 305
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "staticMethod",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 306,
                                  "end": 318
                                },
                                "optional": false,
                                "computed": false,
                                "start": 300,
                                "end": 318
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 300,
                              "end": 320
                            },
                            "directive": null,
                            "start": 300,
                            "end": 321
                          }
                        ],
                        "start": 286,
                        "end": 331
                      },
                      "id": null,
                      "generator": false,
                      "start": 280,
                      "end": 331
                    },
                    "directive": null,
                    "start": 280,
                    "end": 331
                  }
                ],
                "start": 270,
                "end": 337
              },
              "expression": false,
              "start": 267,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 228,
            "end": 337
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "objectLiteralInsideAStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 440
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
                            "start": 474,
                            "end": 475
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
                                        "start": 501,
                                        "end": 506
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "staticMethod",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 507,
                                        "end": 519
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 501,
                                      "end": 519
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 501,
                                    "end": 521
                                  },
                                  "directive": null,
                                  "start": 501,
                                  "end": 522
                                }
                              ],
                              "start": 483,
                              "end": 536
                            },
                            "id": null,
                            "generator": false,
                            "start": 477,
                            "end": 536
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 474,
                          "end": 536
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
                            "start": 550,
                            "end": 551
                          },
                          "value": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 553,
                                "end": 558
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "staticMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 559,
                                "end": 571
                              },
                              "optional": false,
                              "computed": false,
                              "start": 553,
                              "end": 571
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 553,
                            "end": 573
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 550,
                          "end": 573
                        }
                      ],
                      "start": 460,
                      "end": 583
                    },
                    "start": 453,
                    "end": 584
                  }
                ],
                "start": 443,
                "end": 590
              },
              "expression": false,
              "start": 440,
              "end": 590
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 394,
            "end": 590
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 645
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
                          "start": 658,
                          "end": 663
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 676
                        },
                        "optional": false,
                        "computed": false,
                        "start": 658,
                        "end": 676
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 658,
                      "end": 678
                    },
                    "directive": null,
                    "start": 658,
                    "end": 679
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 696,
                      "end": 697
                    },
                    "start": 689,
                    "end": 698
                  }
                ],
                "start": 648,
                "end": 704
              },
              "expression": false,
              "start": 645,
              "end": 704
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 615,
            "end": 704
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 759
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
                      "start": 767,
                      "end": 773
                    },
                    "start": 765,
                    "end": 773
                  },
                  "start": 760,
                  "end": 773
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
                          "start": 785,
                          "end": 790
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 791,
                          "end": 803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 785,
                        "end": 803
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 785,
                      "end": 805
                    },
                    "directive": null,
                    "start": 785,
                    "end": 806
                  }
                ],
                "start": 775,
                "end": 812
              },
              "expression": false,
              "start": 759,
              "end": 812
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 729,
            "end": 812
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initializerInAStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 882
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 884
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 887,
                        "end": 892
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 893,
                        "end": 905
                      },
                      "optional": false,
                      "computed": false,
                      "start": 887,
                      "end": 905
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 887,
                    "end": 907
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 907
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
                          "start": 919,
                          "end": 924
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "staticMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 925,
                          "end": 937
                        },
                        "optional": false,
                        "computed": false,
                        "start": 919,
                        "end": 937
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 919,
                      "end": 939
                    },
                    "directive": null,
                    "start": 919,
                    "end": 940
                  }
                ],
                "start": 909,
                "end": 946
              },
              "expression": false,
              "start": 882,
              "end": 946
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 842,
            "end": 946
          }
        ],
        "start": 84,
        "end": 948
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 948
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 948
}
```
