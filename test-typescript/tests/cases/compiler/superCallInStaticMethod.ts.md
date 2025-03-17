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
        "end": 56,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 54,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 44,
              "name": "staticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 54,
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
      "start": 58,
      "end": 948,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "name": "Other",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 78,
        "end": 83,
        "name": "Doing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 948,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 180,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 140,
              "name": "staticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 180,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 153,
                    "end": 174,
                    "expression": {
                      "type": "CallExpression",
                      "start": 153,
                      "end": 173,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 153,
                        "end": 171,
                        "object": {
                          "type": "Super",
                          "start": 153,
                          "end": 158
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 171,
                          "name": "staticMethod",
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
            "start": 228,
            "end": 337,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 267,
              "name": "lambdaInsideAStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 337,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 280,
                    "end": 331,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 280,
                      "end": 331,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 286,
                        "end": 331,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 300,
                            "end": 321,
                            "expression": {
                              "type": "CallExpression",
                              "start": 300,
                              "end": 320,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 300,
                                "end": 318,
                                "object": {
                                  "type": "Super",
                                  "start": 300,
                                  "end": 305
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 306,
                                  "end": 318,
                                  "name": "staticMethod",
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
            "start": 394,
            "end": 590,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 440,
              "name": "objectLiteralInsideAStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 440,
              "end": 590,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 477,
                            "end": 536,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 483,
                              "end": 536,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 501,
                                  "end": 522,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 501,
                                    "end": 521,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 501,
                                      "end": 519,
                                      "object": {
                                        "type": "Super",
                                        "start": 501,
                                        "end": 506
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 507,
                                        "end": 519,
                                        "name": "staticMethod",
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
                          "start": 550,
                          "end": 573,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 550,
                            "end": 551,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "CallExpression",
                            "start": 553,
                            "end": 573,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 553,
                              "end": 571,
                              "object": {
                                "type": "Super",
                                "start": 553,
                                "end": 558
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 559,
                                "end": 571,
                                "name": "staticMethod",
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
            "start": 615,
            "end": 704,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 633,
              "end": 645,
              "name": "staticGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 645,
              "end": 704,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 648,
                "end": 704,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 658,
                    "end": 679,
                    "expression": {
                      "type": "CallExpression",
                      "start": 658,
                      "end": 678,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 658,
                        "end": 676,
                        "object": {
                          "type": "Super",
                          "start": 658,
                          "end": 663
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 676,
                          "name": "staticMethod",
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
                    "start": 689,
                    "end": 698,
                    "argument": {
                      "type": "Literal",
                      "start": 696,
                      "end": 697,
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
            "start": 729,
            "end": 812,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 747,
              "end": 759,
              "name": "staticGetter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 759,
              "end": 812,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 760,
                  "end": 773,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 765,
                    "end": 773,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 767,
                      "end": 773
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 775,
                "end": 812,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 785,
                    "end": 806,
                    "expression": {
                      "type": "CallExpression",
                      "start": 785,
                      "end": 805,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 785,
                        "end": 803,
                        "object": {
                          "type": "Super",
                          "start": 785,
                          "end": 790
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 791,
                          "end": 803,
                          "name": "staticMethod",
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
            "start": 842,
            "end": 946,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 856,
              "end": 882,
              "name": "initializerInAStaticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 882,
              "end": 946,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 883,
                  "end": 907,
                  "left": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 884,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 887,
                    "end": 907,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 887,
                      "end": 905,
                      "object": {
                        "type": "Super",
                        "start": 887,
                        "end": 892
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 893,
                        "end": 905,
                        "name": "staticMethod",
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
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 909,
                "end": 946,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 919,
                    "end": 940,
                    "expression": {
                      "type": "CallExpression",
                      "start": 919,
                      "end": 939,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 919,
                        "end": 937,
                        "object": {
                          "type": "Super",
                          "start": 919,
                          "end": 924
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 925,
                          "end": 937,
                          "name": "staticMethod",
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
