__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 806,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 410,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 410,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 219,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 219,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 219,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 45,
                    "end": 193,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 49,
                        "end": 193,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 51,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 54,
                          "end": 193,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 68,
                              "end": 183,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 75,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 77,
                                "end": 183,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 91,
                                  "end": 183,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 97,
                                    "end": 183,
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "start": 115,
                                        "end": 129,
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 119,
                                            "end": 128,
                                            "definite": false,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 119,
                                              "end": 124,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 127,
                                              "end": 128,
                                              "raw": "2",
                                              "value": 2
                                            }
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var"
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "start": 146,
                                        "end": 169,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 153,
                                          "end": 168,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 162,
                                              "end": 167,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 153,
                                            "end": 161,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 78,
                                    "end": 86,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 203,
                    "end": 213,
                    "argument": {
                      "type": "Literal",
                      "start": 210,
                      "end": 212,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 408,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 229,
              "end": 408,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 243,
                "end": 408,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 253,
                    "end": 401,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 257,
                        "end": 401,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 259,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 262,
                          "end": 401,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 276,
                              "end": 391,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 276,
                                "end": 283,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 285,
                                "end": 391,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 299,
                                  "end": 391,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 305,
                                    "end": 391,
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "start": 323,
                                        "end": 337,
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 327,
                                            "end": 336,
                                            "definite": false,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 327,
                                              "end": 332,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 335,
                                              "end": 336,
                                              "raw": "2",
                                              "value": 2
                                            }
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var"
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "start": 354,
                                        "end": 377,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 361,
                                          "end": 376,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 370,
                                              "end": 375,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 361,
                                            "end": 369,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 294,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 230,
                  "end": 241,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 235,
                      "end": 241
                    }
                  }
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
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "class1",
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
      "start": 412,
      "end": 806,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 425,
        "end": 806,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 623,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 436,
              "end": 623,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 623,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 457,
                    "end": 471,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 461,
                        "end": 470,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 466,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 469,
                          "end": 470,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 480,
                    "end": 597,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 484,
                        "end": 597,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 486,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 489,
                          "end": 597,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 503,
                              "end": 587,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 503,
                                "end": 510,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 512,
                                "end": 587,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 526,
                                  "end": 587,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 532,
                                    "end": 587,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 550,
                                        "end": 573,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 557,
                                          "end": 572,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 566,
                                              "end": 571,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 557,
                                            "end": 565,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 513,
                                    "end": 521,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 607,
                    "end": 617,
                    "argument": {
                      "type": "Literal",
                      "start": 614,
                      "end": 616,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 438,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 440,
                  "end": 446
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 628,
            "end": 804,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 633,
              "end": 804,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 647,
                "end": 804,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 657,
                    "end": 671,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 661,
                        "end": 670,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 666,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 669,
                          "end": 670,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 680,
                    "end": 797,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 684,
                        "end": 797,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 684,
                          "end": 686,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 689,
                          "end": 797,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 703,
                              "end": 787,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 703,
                                "end": 710,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 712,
                                "end": 787,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 726,
                                  "end": 787,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 732,
                                    "end": 787,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 750,
                                        "end": 773,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 757,
                                          "end": 772,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 766,
                                              "end": 771,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 757,
                                            "end": 765,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
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
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 713,
                                    "end": 721,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 634,
                  "end": 645,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 637,
                    "end": 645,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 639,
                      "end": 645
                    }
                  }
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
        "start": 418,
        "end": 424,
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
