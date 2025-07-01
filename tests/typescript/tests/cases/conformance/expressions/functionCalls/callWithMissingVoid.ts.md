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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 36,
                        "end": 37
                      },
                      "typeArguments": null,
                      "start": 36,
                      "end": 37
                    },
                    "start": 34,
                    "end": 37
                  },
                  "start": 33,
                  "end": 37
                }
              ],
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
                            "start": 58,
                            "end": 59
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 61,
                            "end": 62
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 58,
                          "end": 62
                        }
                      ],
                      "start": 56,
                      "end": 64
                    },
                    "start": 49,
                    "end": 65
                  }
                ],
                "start": 39,
                "end": 71
              },
              "expression": false,
              "start": 32,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 71
          }
        ],
        "start": 25,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 94,
                      "end": 98
                    }
                  ],
                  "start": 93,
                  "end": 99
                },
                "start": 92,
                "end": 99
              },
              "start": 90,
              "end": 99
            },
            "start": 89,
            "end": 99
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 99
        }
      ],
      "declare": true,
      "start": 75,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 104
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 101,
        "end": 106
      },
      "directive": null,
      "start": 101,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 167,
                          "end": 171
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 174,
                          "end": 180
                        }
                      ],
                      "start": 167,
                      "end": 180
                    }
                  ],
                  "start": 166,
                  "end": 181
                },
                "start": 165,
                "end": 181
              },
              "start": 163,
              "end": 181
            },
            "start": 157,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 181
        }
      ],
      "declare": true,
      "start": 143,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "optional": false,
          "computed": false,
          "start": 183,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 192,
            "end": 194
          }
        ],
        "optional": false,
        "start": 183,
        "end": 195
      },
      "directive": null,
      "start": 183,
      "end": 195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 239
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 233,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 233,
        "end": 243
      },
      "directive": null,
      "start": 233,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 301
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 302,
                      "end": 305
                    }
                  ],
                  "start": 301,
                  "end": 306
                },
                "start": 300,
                "end": 306
              },
              "start": 298,
              "end": 306
            },
            "start": 294,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 294,
          "end": 306
        }
      ],
      "declare": true,
      "start": 280,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 314
          },
          "optional": false,
          "computed": false,
          "start": 308,
          "end": 314
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 308,
        "end": 316
      },
      "directive": null,
      "start": 308,
      "end": 316
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 383
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 384,
                      "end": 391
                    }
                  ],
                  "start": 383,
                  "end": 392
                },
                "start": 382,
                "end": 392
              },
              "start": 380,
              "end": 392
            },
            "start": 372,
            "end": 392
          },
          "init": null,
          "definite": false,
          "start": 372,
          "end": 392
        }
      ],
      "declare": true,
      "start": 358,
      "end": 393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 404
          },
          "optional": false,
          "computed": false,
          "start": 394,
          "end": 404
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 394,
        "end": 406
      },
      "directive": null,
      "start": 394,
      "end": 406
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "xNever",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 475
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 476,
                      "end": 481
                    }
                  ],
                  "start": 475,
                  "end": 482
                },
                "start": 474,
                "end": 482
              },
              "start": 472,
              "end": 482
            },
            "start": 466,
            "end": 482
          },
          "init": null,
          "definite": false,
          "start": 466,
          "end": 482
        }
      ],
      "declare": true,
      "start": 452,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "xNever",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 490
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 492
          },
          "optional": false,
          "computed": false,
          "start": 484,
          "end": 492
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 484,
        "end": 494
      },
      "directive": null,
      "start": 484,
      "end": 494
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 659
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 661
          }
        ],
        "start": 659,
        "end": 662
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 680
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
                  "name": "executor",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
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
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 709,
                                        "end": 710
                                      },
                                      "typeArguments": null,
                                      "start": 709,
                                      "end": 710
                                    },
                                    "start": 707,
                                    "end": 710
                                  },
                                  "start": 702,
                                  "end": 710
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 715,
                                  "end": 719
                                },
                                "start": 712,
                                "end": 719
                              },
                              "start": 701,
                              "end": 719
                            },
                            "start": 699,
                            "end": 719
                          },
                          "start": 692,
                          "end": 719
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 724,
                          "end": 728
                        },
                        "start": 721,
                        "end": 728
                      },
                      "start": 691,
                      "end": 728
                    },
                    "start": 689,
                    "end": 728
                  },
                  "start": 681,
                  "end": 728
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 730,
                "end": 738
              },
              "expression": false,
              "start": 680,
              "end": 738
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 669,
            "end": 738
          }
        ],
        "start": 663,
        "end": 740
      },
      "abstract": false,
      "declare": false,
      "start": 644,
      "end": 740
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 755
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSVoidKeyword",
              "start": 756,
              "end": 760
            }
          ],
          "start": 755,
          "end": 761
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 769
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 773,
                "end": 780
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 773,
              "end": 782
            },
            "id": null,
            "generator": false,
            "start": 762,
            "end": 782
          }
        ],
        "start": 742,
        "end": 783
      },
      "directive": null,
      "start": 742,
      "end": 784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 810
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 811,
                  "end": 815
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 818,
                  "end": 824
                }
              ],
              "start": 811,
              "end": 824
            }
          ],
          "start": 810,
          "end": 825
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 833
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 844
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 837,
              "end": 846
            },
            "id": null,
            "generator": false,
            "start": 826,
            "end": 846
          }
        ],
        "start": 797,
        "end": 847
      },
      "directive": null,
      "start": 797,
      "end": 848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 865,
          "end": 874
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 875,
              "end": 878
            }
          ],
          "start": 874,
          "end": 879
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 880,
                "end": 887
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 898
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 891,
              "end": 900
            },
            "id": null,
            "generator": false,
            "start": 880,
            "end": 900
          }
        ],
        "start": 861,
        "end": 901
      },
      "directive": null,
      "start": 861,
      "end": 902
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 961,
              "end": 968
            }
          ],
          "start": 960,
          "end": 969
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 970,
                "end": 977
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 981,
                "end": 988
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 981,
              "end": 990
            },
            "id": null,
            "generator": false,
            "start": 970,
            "end": 990
          }
        ],
        "start": 947,
        "end": 991
      },
      "directive": null,
      "start": 947,
      "end": 992
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1054
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1055,
              "end": 1060
            }
          ],
          "start": 1054,
          "end": 1061
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1069
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1080
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1073,
              "end": 1082
            },
            "id": null,
            "generator": false,
            "start": 1062,
            "end": 1082
          }
        ],
        "start": 1041,
        "end": 1083
      },
      "directive": null,
      "start": 1041,
      "end": 1084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1166,
        "end": 1167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1171,
              "end": 1177
            },
            "start": 1169,
            "end": 1177
          },
          "start": 1168,
          "end": 1177
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1182,
              "end": 1188
            },
            "start": 1180,
            "end": 1188
          },
          "start": 1179,
          "end": 1188
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1193,
              "end": 1197
            },
            "start": 1191,
            "end": 1197
          },
          "start": 1190,
          "end": 1197
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1200,
          "end": 1204
        },
        "start": 1198,
        "end": 1204
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1206,
        "end": 1214
      },
      "expression": false,
      "start": 1157,
      "end": 1214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1217
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1218,
            "end": 1219
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1221,
            "end": 1228
          }
        ],
        "optional": false,
        "start": 1216,
        "end": 1229
      },
      "directive": null,
      "start": 1216,
      "end": 1230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1237,
          "end": 1238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1239,
            "end": 1240
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1242,
            "end": 1249
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1256,
              "end": 1257
            },
            "prefix": true,
            "start": 1251,
            "end": 1257
          }
        ],
        "optional": false,
        "start": 1237,
        "end": 1258
      },
      "directive": null,
      "start": 1237,
      "end": 1259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1266,
          "end": 1267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1268,
            "end": 1269
          }
        ],
        "optional": false,
        "start": 1266,
        "end": 1270
      },
      "directive": null,
      "start": 1266,
      "end": 1271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1293
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1297,
              "end": 1303
            },
            "start": 1295,
            "end": 1303
          },
          "start": 1294,
          "end": 1303
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1308,
              "end": 1314
            },
            "start": 1306,
            "end": 1314
          },
          "start": 1305,
          "end": 1314
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1319,
              "end": 1323
            },
            "start": 1317,
            "end": 1323
          },
          "start": 1316,
          "end": 1323
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "what",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1331,
              "end": 1337
            },
            "start": 1329,
            "end": 1337
          },
          "start": 1325,
          "end": 1337
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1340,
          "end": 1344
        },
        "start": 1338,
        "end": 1344
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1346,
        "end": 1354
      },
      "expression": false,
      "start": 1283,
      "end": 1354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1357
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1358,
            "end": 1359
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1361,
            "end": 1368
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1375,
              "end": 1376
            },
            "prefix": true,
            "start": 1370,
            "end": 1376
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1378,
            "end": 1379
          }
        ],
        "optional": false,
        "start": 1356,
        "end": 1380
      },
      "directive": null,
      "start": 1356,
      "end": 1381
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1388,
          "end": 1389
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1390,
            "end": 1391
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1393,
            "end": 1400
          }
        ],
        "optional": false,
        "start": 1388,
        "end": 1401
      },
      "directive": null,
      "start": 1388,
      "end": 1402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1413,
          "end": 1414
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1415,
            "end": 1416
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1418,
            "end": 1425
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1432,
              "end": 1433
            },
            "prefix": true,
            "start": 1427,
            "end": 1433
          }
        ],
        "optional": false,
        "start": 1413,
        "end": 1434
      },
      "directive": null,
      "start": 1413,
      "end": 1435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1447
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1448,
            "end": 1449
          }
        ],
        "optional": false,
        "start": 1446,
        "end": 1450
      },
      "directive": null,
      "start": 1446,
      "end": 1451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1472,
        "end": 1473
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1477,
                  "end": 1483
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 1486,
                  "end": 1490
                }
              ],
              "start": 1477,
              "end": 1490
            },
            "start": 1475,
            "end": 1490
          },
          "start": 1474,
          "end": 1490
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1495,
              "end": 1499
            },
            "start": 1493,
            "end": 1499
          },
          "start": 1492,
          "end": 1499
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 1504,
                  "end": 1508
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1511,
                  "end": 1517
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1520,
                  "end": 1526
                }
              ],
              "start": 1504,
              "end": 1526
            },
            "start": 1502,
            "end": 1526
          },
          "start": 1501,
          "end": 1526
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1529,
          "end": 1533
        },
        "start": 1527,
        "end": 1533
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1535,
        "end": 1543
      },
      "expression": false,
      "start": 1463,
      "end": 1543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1545,
          "end": 1546
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1547,
            "end": 1548
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1555,
              "end": 1556
            },
            "prefix": true,
            "start": 1550,
            "end": 1556
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1563,
              "end": 1564
            },
            "prefix": true,
            "start": 1558,
            "end": 1564
          }
        ],
        "optional": false,
        "start": 1545,
        "end": 1565
      },
      "directive": null,
      "start": 1545,
      "end": 1566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1575,
            "end": 1576
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1583,
              "end": 1584
            },
            "prefix": true,
            "start": 1578,
            "end": 1584
          }
        ],
        "optional": false,
        "start": 1573,
        "end": 1585
      },
      "directive": null,
      "start": 1573,
      "end": 1586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1593,
          "end": 1594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1595,
            "end": 1596
          }
        ],
        "optional": false,
        "start": 1593,
        "end": 1597
      },
      "directive": null,
      "start": 1593,
      "end": 1598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1605,
          "end": 1606
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1605,
        "end": 1608
      },
      "directive": null,
      "start": 1605,
      "end": 1609
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1661
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TS",
              "optional": false,
              "typeAnnotation": null,
              "start": 1662,
              "end": 1664
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1673,
                "end": 1680
              },
              "start": 1673,
              "end": 1682
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1662,
            "end": 1682
          }
        ],
        "start": 1661,
        "end": 1683
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1702,
                    "end": 1706
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1708,
                        "end": 1710
                      },
                      "typeArguments": null,
                      "start": 1708,
                      "end": 1710
                    },
                    "start": 1706,
                    "end": 1710
                  },
                  "value": null,
                  "start": 1699,
                  "end": 1710
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 1715,
                  "end": 1722
                },
                "start": 1712,
                "end": 1722
              },
              "start": 1698,
              "end": 1722
            },
            "start": 1696,
            "end": 1722
          },
          "start": 1689,
          "end": 1722
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1731,
            "end": 1735
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TS",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1739
              },
              "typeArguments": null,
              "start": 1737,
              "end": 1739
            },
            "start": 1735,
            "end": 1739
          },
          "value": null,
          "start": 1728,
          "end": 1739
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1742,
          "end": 1746
        },
        "start": 1740,
        "end": 1746
      },
      "body": null,
      "expression": false,
      "start": 1640,
      "end": 1747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1753
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1758,
                    "end": 1764
                  },
                  "start": 1756,
                  "end": 1764
                },
                "start": 1755,
                "end": 1764
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1769,
                    "end": 1775
                  },
                  "start": 1767,
                  "end": 1775
                },
                "start": 1766,
                "end": 1775
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1781
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1784,
                "end": 1785
              },
              "start": 1780,
              "end": 1785
            },
            "id": null,
            "generator": false,
            "start": 1754,
            "end": 1785
          }
        ],
        "optional": false,
        "start": 1749,
        "end": 1786
      },
      "directive": null,
      "start": 1749,
      "end": 1786
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1796,
          "end": 1800
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1805,
                    "end": 1811
                  },
                  "start": 1803,
                  "end": 1811
                },
                "start": 1802,
                "end": 1811
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1816,
                    "end": 1822
                  },
                  "start": 1814,
                  "end": 1822
                },
                "start": 1813,
                "end": 1822
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1827,
                "end": 1828
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1831,
                "end": 1832
              },
              "start": 1827,
              "end": 1832
            },
            "id": null,
            "generator": false,
            "start": 1801,
            "end": 1832
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1834,
            "end": 1835
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1837,
            "end": 1838
          }
        ],
        "optional": false,
        "start": 1796,
        "end": 1839
      },
      "directive": null,
      "start": 1796,
      "end": 1839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1851
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1856,
                    "end": 1862
                  },
                  "start": 1854,
                  "end": 1862
                },
                "start": 1853,
                "end": 1862
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1867,
                    "end": 1871
                  },
                  "start": 1865,
                  "end": 1871
                },
                "start": 1864,
                "end": 1871
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1877
            },
            "id": null,
            "generator": false,
            "start": 1852,
            "end": 1877
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1879,
            "end": 1880
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1887,
              "end": 1888
            },
            "prefix": true,
            "start": 1882,
            "end": 1888
          }
        ],
        "optional": false,
        "start": 1847,
        "end": 1889
      },
      "directive": null,
      "start": 1847,
      "end": 1889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1896,
          "end": 1900
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1905,
                    "end": 1911
                  },
                  "start": 1903,
                  "end": 1911
                },
                "start": 1902,
                "end": 1911
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1916,
                    "end": 1920
                  },
                  "start": 1914,
                  "end": 1920
                },
                "start": 1913,
                "end": 1920
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1925,
              "end": 1926
            },
            "id": null,
            "generator": false,
            "start": 1901,
            "end": 1926
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1928,
            "end": 1929
          }
        ],
        "optional": false,
        "start": 1896,
        "end": 1930
      },
      "directive": null,
      "start": 1896,
      "end": 1930
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1937,
          "end": 1941
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1946,
                    "end": 1950
                  },
                  "start": 1944,
                  "end": 1950
                },
                "start": 1943,
                "end": 1950
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1955,
                    "end": 1959
                  },
                  "start": 1953,
                  "end": 1959
                },
                "start": 1952,
                "end": 1959
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 1964,
              "end": 1966
            },
            "id": null,
            "generator": false,
            "start": 1942,
            "end": 1966
          }
        ],
        "optional": false,
        "start": 1937,
        "end": 1967
      },
      "directive": null,
      "start": 1937,
      "end": 1967
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1974,
          "end": 1978
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1983,
                        "end": 1989
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 1992,
                        "end": 1996
                      }
                    ],
                    "start": 1983,
                    "end": 1996
                  },
                  "start": 1981,
                  "end": 1996
                },
                "start": 1980,
                "end": 1996
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2001,
                        "end": 2007
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2010,
                        "end": 2014
                      }
                    ],
                    "start": 2001,
                    "end": 2014
                  },
                  "start": 1999,
                  "end": 2014
                },
                "start": 1998,
                "end": 2014
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 2019,
              "end": 2021
            },
            "id": null,
            "generator": false,
            "start": 1979,
            "end": 2021
          }
        ],
        "optional": false,
        "start": 1974,
        "end": 2022
      },
      "directive": null,
      "start": 1974,
      "end": 2022
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 2029,
          "end": 2033
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2038,
                        "end": 2044
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2047,
                        "end": 2051
                      }
                    ],
                    "start": 2038,
                    "end": 2051
                  },
                  "start": 2036,
                  "end": 2051
                },
                "start": 2035,
                "end": 2051
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2056,
                        "end": 2062
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2065,
                        "end": 2069
                      }
                    ],
                    "start": 2056,
                    "end": 2069
                  },
                  "start": 2054,
                  "end": 2069
                },
                "start": 2053,
                "end": 2069
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 2074,
              "end": 2076
            },
            "id": null,
            "generator": false,
            "start": 2034,
            "end": 2076
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 2078,
            "end": 2079
          }
        ],
        "optional": false,
        "start": 2029,
        "end": 2080
      },
      "directive": null,
      "start": 2029,
      "end": 2080
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 2087,
          "end": 2091
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2096,
                        "end": 2102
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2105,
                        "end": 2109
                      }
                    ],
                    "start": 2096,
                    "end": 2109
                  },
                  "start": 2094,
                  "end": 2109
                },
                "start": 2093,
                "end": 2109
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2114,
                        "end": 2120
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2123,
                        "end": 2127
                      }
                    ],
                    "start": 2114,
                    "end": 2127
                  },
                  "start": 2112,
                  "end": 2127
                },
                "start": 2111,
                "end": 2127
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 2132,
              "end": 2134
            },
            "id": null,
            "generator": false,
            "start": 2092,
            "end": 2134
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 2136,
            "end": 2137
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2139,
            "end": 2140
          }
        ],
        "optional": false,
        "start": 2087,
        "end": 2141
      },
      "directive": null,
      "start": 2087,
      "end": 2141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 2147
}
```
