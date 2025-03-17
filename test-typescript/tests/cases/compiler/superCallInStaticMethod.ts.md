__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 949,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 54,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 44,
              "decorators": [],
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 54,
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
      "start": 58,
      "end": 948,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 948,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 180,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 140,
              "decorators": [],
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 180,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 180,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 153,
                    "end": 174,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 153,
                      "end": 173,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 153,
                        "end": 171,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 153,
                          "end": 158
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 171,
                          "decorators": [],
                          "name": "staticMethod",
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
            "start": 228,
            "end": 337,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 267,
              "decorators": [],
              "name": "lambdaInsideAStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 337,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 337,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 280,
                    "end": 331,
                    "directive": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 280,
                      "end": 331,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 286,
                        "end": 331,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 300,
                            "end": 321,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 300,
                              "end": 320,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 300,
                                "end": 318,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 300,
                                  "end": 305
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 306,
                                  "end": 318,
                                  "decorators": [],
                                  "name": "staticMethod",
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
            "start": 394,
            "end": 590,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 440,
              "decorators": [],
              "name": "objectLiteralInsideAStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 440,
              "end": 590,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 443,
                "end": 590,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 453,
                    "end": 584,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 460,
                      "end": 583,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 474,
                          "end": 536,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
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
                            "start": 477,
                            "end": 536,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 483,
                              "end": 536,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 501,
                                  "end": 522,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 501,
                                    "end": 521,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 501,
                                      "end": 519,
                                      "computed": false,
                                      "object": {
                                        "type": "Super",
                                        "start": 501,
                                        "end": 506
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 507,
                                        "end": 519,
                                        "decorators": [],
                                        "name": "staticMethod",
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
                          "start": 550,
                          "end": 573,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 551,
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
                            "start": 553,
                            "end": 573,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 553,
                              "end": 571,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 553,
                                "end": 558
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 559,
                                "end": 571,
                                "decorators": [],
                                "name": "staticMethod",
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
            "start": 615,
            "end": 704,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 633,
              "end": 645,
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 645,
              "end": 704,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 648,
                "end": 704,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 658,
                    "end": 679,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 658,
                      "end": 678,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 658,
                        "end": 676,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 658,
                          "end": 663
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 676,
                          "decorators": [],
                          "name": "staticMethod",
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
                    "start": 689,
                    "end": 698,
                    "argument": {
                      "type": "Literal",
                      "start": 696,
                      "end": 697,
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
            "start": 729,
            "end": 812,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 759,
              "decorators": [],
              "name": "staticGetter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 759,
              "end": 812,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 775,
                "end": 812,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 785,
                    "end": 806,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 785,
                      "end": 805,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 785,
                        "end": 803,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 785,
                          "end": 790
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 791,
                          "end": 803,
                          "decorators": [],
                          "name": "staticMethod",
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
                  "start": 760,
                  "end": 773,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 765,
                    "end": 773,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 767,
                      "end": 773
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
            "start": 842,
            "end": 946,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 882,
              "decorators": [],
              "name": "initializerInAStaticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 882,
              "end": 946,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 909,
                "end": 946,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 919,
                    "end": 940,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 919,
                      "end": 939,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 919,
                        "end": 937,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 919,
                          "end": 924
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 925,
                          "end": 937,
                          "decorators": [],
                          "name": "staticMethod",
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
                  "type": "AssignmentPattern",
                  "start": 883,
                  "end": 907,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 884,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "start": 887,
                    "end": 907,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 887,
                      "end": 905,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 887,
                        "end": 892
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 893,
                        "end": 905,
                        "decorators": [],
                        "name": "staticMethod",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeAnnotation": null
                }
              ],
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
        "start": 64,
        "end": 69,
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 78,
        "end": 83,
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
