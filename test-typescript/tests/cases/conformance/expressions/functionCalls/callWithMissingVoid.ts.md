__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 2148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 37,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 37,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 65,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 56,
                      "end": 64,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 58,
                          "end": 62,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
                            "name": "t",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 99,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 93,
                  "end": 99,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 94,
                      "end": 98
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 106,
        "callee": {
          "type": "MemberExpression",
          "start": 101,
          "end": 104,
          "object": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "f",
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
      "type": "VariableDeclaration",
      "start": 143,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 181,
            "name": "xUnion",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 166,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 167,
                      "end": 180,
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
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 183,
        "end": 195,
        "callee": {
          "type": "MemberExpression",
          "start": 183,
          "end": 191,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 189,
            "name": "xUnion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 192,
            "end": 194,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 243,
      "expression": {
        "type": "CallExpression",
        "start": 233,
        "end": 243,
        "callee": {
          "type": "MemberExpression",
          "start": 233,
          "end": 241,
          "object": {
            "type": "Identifier",
            "start": 233,
            "end": 239,
            "name": "xUnion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "name": "f",
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
      "type": "VariableDeclaration",
      "start": 280,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 306,
            "name": "xAny",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 300,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 301,
                  "end": 306,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 302,
                      "end": 305
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 316,
      "expression": {
        "type": "CallExpression",
        "start": 308,
        "end": 316,
        "callee": {
          "type": "MemberExpression",
          "start": 308,
          "end": 314,
          "object": {
            "type": "Identifier",
            "start": 308,
            "end": 312,
            "name": "xAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "name": "f",
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
      "type": "VariableDeclaration",
      "start": 358,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 392,
            "name": "xUnknown",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 392,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 383,
                  "end": 392,
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 384,
                      "end": 391
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 406,
      "expression": {
        "type": "CallExpression",
        "start": 394,
        "end": 406,
        "callee": {
          "type": "MemberExpression",
          "start": 394,
          "end": 404,
          "object": {
            "type": "Identifier",
            "start": 394,
            "end": 402,
            "name": "xUnknown",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
            "name": "f",
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
      "type": "VariableDeclaration",
      "start": 452,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 482,
            "name": "xNever",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 482,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 474,
                "end": 482,
                "typeName": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 475,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 475,
                  "end": 482,
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 476,
                      "end": 481
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 484,
      "end": 494,
      "expression": {
        "type": "CallExpression",
        "start": 484,
        "end": 494,
        "callee": {
          "type": "MemberExpression",
          "start": 484,
          "end": 492,
          "object": {
            "type": "Identifier",
            "start": 484,
            "end": 490,
            "name": "xNever",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 491,
            "end": 492,
            "name": "f",
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
      "type": "ClassDeclaration",
      "start": 644,
      "end": 740,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 659,
        "name": "MyPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 663,
        "end": 740,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 669,
            "end": 738,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 669,
              "end": 680,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 680,
              "end": 738,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 681,
                  "end": 728,
                  "name": "executor",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 689,
                    "end": 728,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 691,
                      "end": 728,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 692,
                          "end": 719,
                          "name": "resolve",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 699,
                            "end": 719,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 701,
                              "end": 719,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 702,
                                  "end": 710,
                                  "name": "value",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 707,
                                    "end": 710,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 709,
                                      "end": 710,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 709,
                                        "end": 710,
                                        "name": "X",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 712,
                                "end": 719,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 715,
                                  "end": 719
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 721,
                        "end": 728,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 724,
                          "end": 728
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 730,
                "end": 738,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 659,
        "end": 662,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 660,
            "end": 661,
            "name": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 742,
      "end": 784,
      "expression": {
        "type": "NewExpression",
        "start": 742,
        "end": 783,
        "callee": {
          "type": "Identifier",
          "start": 746,
          "end": 755,
          "name": "MyPromise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 762,
            "end": 782,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 762,
                "end": 769,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 773,
              "end": 782,
              "callee": {
                "type": "Identifier",
                "start": 773,
                "end": 780,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 755,
          "end": 761,
          "params": [
            {
              "type": "TSVoidKeyword",
              "start": 756,
              "end": 760
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 848,
      "expression": {
        "type": "NewExpression",
        "start": 797,
        "end": 847,
        "callee": {
          "type": "Identifier",
          "start": 801,
          "end": 810,
          "name": "MyPromise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 826,
            "end": 846,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 826,
                "end": 833,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 837,
              "end": 846,
              "callee": {
                "type": "Identifier",
                "start": 837,
                "end": 844,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 810,
          "end": 825,
          "params": [
            {
              "type": "TSUnionType",
              "start": 811,
              "end": 824,
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
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 861,
      "end": 902,
      "expression": {
        "type": "NewExpression",
        "start": 861,
        "end": 901,
        "callee": {
          "type": "Identifier",
          "start": 865,
          "end": 874,
          "name": "MyPromise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 880,
            "end": 900,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 880,
                "end": 887,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 891,
              "end": 900,
              "callee": {
                "type": "Identifier",
                "start": 891,
                "end": 898,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 874,
          "end": 879,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 875,
              "end": 878
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 947,
      "end": 992,
      "expression": {
        "type": "NewExpression",
        "start": 947,
        "end": 991,
        "callee": {
          "type": "Identifier",
          "start": 951,
          "end": 960,
          "name": "MyPromise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 970,
            "end": 990,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 970,
                "end": 977,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 981,
              "end": 990,
              "callee": {
                "type": "Identifier",
                "start": 981,
                "end": 988,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 960,
          "end": 969,
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 961,
              "end": 968
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1041,
      "end": 1084,
      "expression": {
        "type": "NewExpression",
        "start": 1041,
        "end": 1083,
        "callee": {
          "type": "Identifier",
          "start": 1045,
          "end": 1054,
          "name": "MyPromise",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1062,
            "end": 1082,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1062,
                "end": 1069,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 1073,
              "end": 1082,
              "callee": {
                "type": "Identifier",
                "start": 1073,
                "end": 1080,
                "name": "resolve",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1054,
          "end": 1061,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1055,
              "end": 1060
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1157,
      "end": 1214,
      "id": {
        "type": "Identifier",
        "start": 1166,
        "end": 1167,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1168,
          "end": 1177,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1169,
            "end": 1177,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1171,
              "end": 1177
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1179,
          "end": 1188,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1180,
            "end": 1188,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1182,
              "end": 1188
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1190,
          "end": 1197,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1191,
            "end": 1197,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1193,
              "end": 1197
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1206,
        "end": 1214,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1198,
        "end": 1204,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1200,
          "end": 1204
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1230,
      "expression": {
        "type": "CallExpression",
        "start": 1216,
        "end": 1229,
        "callee": {
          "type": "Identifier",
          "start": 1216,
          "end": 1217,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1218,
            "end": 1219,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 1221,
            "end": 1228,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1237,
      "end": 1259,
      "expression": {
        "type": "CallExpression",
        "start": 1237,
        "end": 1258,
        "callee": {
          "type": "Identifier",
          "start": 1237,
          "end": 1238,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1239,
            "end": 1240,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 1242,
            "end": 1249,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "UnaryExpression",
            "start": 1251,
            "end": 1257,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1256,
              "end": 1257,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1266,
      "end": 1271,
      "expression": {
        "type": "CallExpression",
        "start": 1266,
        "end": 1270,
        "callee": {
          "type": "Identifier",
          "start": 1266,
          "end": 1267,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1268,
            "end": 1269,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1283,
      "end": 1354,
      "id": {
        "type": "Identifier",
        "start": 1292,
        "end": 1293,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1294,
          "end": 1303,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1295,
            "end": 1303,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1297,
              "end": 1303
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1305,
          "end": 1314,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1306,
            "end": 1314,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1308,
              "end": 1314
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1316,
          "end": 1323,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1317,
            "end": 1323,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1319,
              "end": 1323
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1325,
          "end": 1337,
          "name": "what",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1329,
            "end": 1337,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1331,
              "end": 1337
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1346,
        "end": 1354,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1338,
        "end": 1344,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1340,
          "end": 1344
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1356,
      "end": 1381,
      "expression": {
        "type": "CallExpression",
        "start": 1356,
        "end": 1380,
        "callee": {
          "type": "Identifier",
          "start": 1356,
          "end": 1357,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1358,
            "end": 1359,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 1361,
            "end": 1368,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "UnaryExpression",
            "start": 1370,
            "end": 1376,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1375,
              "end": 1376,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "Literal",
            "start": 1378,
            "end": 1379,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1388,
      "end": 1402,
      "expression": {
        "type": "CallExpression",
        "start": 1388,
        "end": 1401,
        "callee": {
          "type": "Identifier",
          "start": 1388,
          "end": 1389,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1390,
            "end": 1391,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 1393,
            "end": 1400,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1413,
      "end": 1435,
      "expression": {
        "type": "CallExpression",
        "start": 1413,
        "end": 1434,
        "callee": {
          "type": "Identifier",
          "start": 1413,
          "end": 1414,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1415,
            "end": 1416,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 1418,
            "end": 1425,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "UnaryExpression",
            "start": 1427,
            "end": 1433,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1432,
              "end": 1433,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1446,
      "end": 1451,
      "expression": {
        "type": "CallExpression",
        "start": 1446,
        "end": 1450,
        "callee": {
          "type": "Identifier",
          "start": 1446,
          "end": 1447,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1448,
            "end": 1449,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1463,
      "end": 1543,
      "id": {
        "type": "Identifier",
        "start": 1472,
        "end": 1473,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1474,
          "end": 1490,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1475,
            "end": 1490,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1477,
              "end": 1490,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1492,
          "end": 1499,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1493,
            "end": 1499,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1495,
              "end": 1499
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1501,
          "end": 1526,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1502,
            "end": 1526,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1504,
              "end": 1526,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1535,
        "end": 1543,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1527,
        "end": 1533,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1529,
          "end": 1533
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1545,
      "end": 1566,
      "expression": {
        "type": "CallExpression",
        "start": 1545,
        "end": 1565,
        "callee": {
          "type": "Identifier",
          "start": 1545,
          "end": 1546,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1547,
            "end": 1548,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "UnaryExpression",
            "start": 1550,
            "end": 1556,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1555,
              "end": 1556,
              "value": 0,
              "raw": "0"
            }
          },
          {
            "type": "UnaryExpression",
            "start": 1558,
            "end": 1564,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1563,
              "end": 1564,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1573,
      "end": 1586,
      "expression": {
        "type": "CallExpression",
        "start": 1573,
        "end": 1585,
        "callee": {
          "type": "Identifier",
          "start": 1573,
          "end": 1574,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1575,
            "end": 1576,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "UnaryExpression",
            "start": 1578,
            "end": 1584,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1583,
              "end": 1584,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1593,
      "end": 1598,
      "expression": {
        "type": "CallExpression",
        "start": 1593,
        "end": 1597,
        "callee": {
          "type": "Identifier",
          "start": 1593,
          "end": 1594,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 1595,
            "end": 1596,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1605,
      "end": 1609,
      "expression": {
        "type": "CallExpression",
        "start": 1605,
        "end": 1608,
        "callee": {
          "type": "Identifier",
          "start": 1605,
          "end": 1606,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1640,
      "end": 1747,
      "id": {
        "type": "Identifier",
        "start": 1657,
        "end": 1661,
        "name": "call",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1689,
          "end": 1722,
          "name": "handler",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1696,
            "end": 1722,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1698,
              "end": 1722,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1699,
                  "end": 1710,
                  "argument": {
                    "type": "Identifier",
                    "start": 1702,
                    "end": 1706,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1706,
                    "end": 1710,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1708,
                      "end": 1710,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1708,
                        "end": 1710,
                        "name": "TS",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1712,
                "end": 1722,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 1715,
                  "end": 1722
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 1728,
          "end": 1739,
          "argument": {
            "type": "Identifier",
            "start": 1731,
            "end": 1735,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1735,
            "end": 1739,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1737,
              "end": 1739,
              "typeName": {
                "type": "Identifier",
                "start": 1737,
                "end": 1739,
                "name": "TS",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1661,
        "end": 1683,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1662,
            "end": 1682,
            "name": {
              "type": "Identifier",
              "start": 1662,
              "end": 1664,
              "name": "TS",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1673,
              "end": 1682,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1673,
                "end": 1680
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1740,
        "end": 1746,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1742,
          "end": 1746
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1749,
      "end": 1786,
      "expression": {
        "type": "CallExpression",
        "start": 1749,
        "end": 1786,
        "callee": {
          "type": "Identifier",
          "start": 1749,
          "end": 1753,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1754,
            "end": 1785,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1755,
                "end": 1764,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1756,
                  "end": 1764,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1758,
                    "end": 1764
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1766,
                "end": 1775,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1767,
                  "end": 1775,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1769,
                    "end": 1775
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 1780,
              "end": 1785,
              "left": {
                "type": "Identifier",
                "start": 1780,
                "end": 1781,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1784,
                "end": 1785,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1796,
      "end": 1839,
      "expression": {
        "type": "CallExpression",
        "start": 1796,
        "end": 1839,
        "callee": {
          "type": "Identifier",
          "start": 1796,
          "end": 1800,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1801,
            "end": 1832,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1802,
                "end": 1811,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1803,
                  "end": 1811,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1805,
                    "end": 1811
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1813,
                "end": 1822,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1814,
                  "end": 1822,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1816,
                    "end": 1822
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 1827,
              "end": 1832,
              "left": {
                "type": "Identifier",
                "start": 1827,
                "end": 1828,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 1831,
                "end": 1832,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 1834,
            "end": 1835,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 1837,
            "end": 1838,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1847,
      "end": 1889,
      "expression": {
        "type": "CallExpression",
        "start": 1847,
        "end": 1889,
        "callee": {
          "type": "Identifier",
          "start": 1847,
          "end": 1851,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1852,
            "end": 1877,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1853,
                "end": 1862,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1854,
                  "end": 1862,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1856,
                    "end": 1862
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1864,
                "end": 1871,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1865,
                  "end": 1871,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1867,
                    "end": 1871
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1876,
              "end": 1877,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 1879,
            "end": 1880,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "UnaryExpression",
            "start": 1882,
            "end": 1888,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 1887,
              "end": 1888,
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1896,
      "end": 1930,
      "expression": {
        "type": "CallExpression",
        "start": 1896,
        "end": 1930,
        "callee": {
          "type": "Identifier",
          "start": 1896,
          "end": 1900,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1901,
            "end": 1926,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1902,
                "end": 1911,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1903,
                  "end": 1911,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1905,
                    "end": 1911
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1913,
                "end": 1920,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1914,
                  "end": 1920,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1916,
                    "end": 1920
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 1925,
              "end": 1926,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 1928,
            "end": 1929,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1937,
      "end": 1967,
      "expression": {
        "type": "CallExpression",
        "start": 1937,
        "end": 1967,
        "callee": {
          "type": "Identifier",
          "start": 1937,
          "end": 1941,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1942,
            "end": 1966,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1943,
                "end": 1950,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1944,
                  "end": 1950,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1946,
                    "end": 1950
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1952,
                "end": 1959,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1953,
                  "end": 1959,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1955,
                    "end": 1959
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 1964,
              "end": 1966,
              "value": 42,
              "raw": "42"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1974,
      "end": 2022,
      "expression": {
        "type": "CallExpression",
        "start": 1974,
        "end": 2022,
        "callee": {
          "type": "Identifier",
          "start": 1974,
          "end": 1978,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1979,
            "end": 2021,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1980,
                "end": 1996,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1981,
                  "end": 1996,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1983,
                    "end": 1996,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1998,
                "end": 2014,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1999,
                  "end": 2014,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2001,
                    "end": 2014,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 2019,
              "end": 2021,
              "value": 42,
              "raw": "42"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2029,
      "end": 2080,
      "expression": {
        "type": "CallExpression",
        "start": 2029,
        "end": 2080,
        "callee": {
          "type": "Identifier",
          "start": 2029,
          "end": 2033,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2034,
            "end": 2076,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2035,
                "end": 2051,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2036,
                  "end": 2051,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2038,
                    "end": 2051,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2053,
                "end": 2069,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2054,
                  "end": 2069,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2056,
                    "end": 2069,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 2074,
              "end": 2076,
              "value": 42,
              "raw": "42"
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 2078,
            "end": 2079,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2087,
      "end": 2141,
      "expression": {
        "type": "CallExpression",
        "start": 2087,
        "end": 2141,
        "callee": {
          "type": "Identifier",
          "start": 2087,
          "end": 2091,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2092,
            "end": 2134,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2093,
                "end": 2109,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2094,
                  "end": 2109,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2096,
                    "end": 2109,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2111,
                "end": 2127,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2112,
                  "end": 2127,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 2114,
                    "end": 2127,
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
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 2132,
              "end": 2134,
              "value": 42,
              "raw": "42"
            },
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "Literal",
            "start": 2136,
            "end": 2137,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 2139,
            "end": 2140,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
