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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "class1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 410,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 219,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 51,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 68,
                                "end": 75,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 77,
                                "end": 183,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 78,
                                    "end": 86,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 91,
                                  "end": 183,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                            "id": {
                                              "type": "Identifier",
                                              "start": 119,
                                              "end": 124,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 127,
                                              "end": 128,
                                              "value": 2,
                                              "raw": "2"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "kind": "var",
                                        "declare": false
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "start": 146,
                                        "end": 169,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 153,
                                          "end": 168,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 153,
                                            "end": 161,
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 162,
                                              "end": 167,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 203,
                    "end": 213,
                    "argument": {
                      "type": "Literal",
                      "start": 210,
                      "end": 212,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 34,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 28,
                  "end": 34
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 224,
            "end": 408,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 229,
              "end": 408,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 230,
                  "end": 241,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 235,
                      "end": 241
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 259,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 276,
                                "end": 283,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 285,
                                "end": 391,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 286,
                                    "end": 294,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 299,
                                  "end": 391,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                            "id": {
                                              "type": "Identifier",
                                              "start": 327,
                                              "end": 332,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 335,
                                              "end": 336,
                                              "value": 2,
                                              "raw": "2"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "kind": "var",
                                        "declare": false
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "start": 354,
                                        "end": 377,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 361,
                                          "end": 376,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 361,
                                            "end": 369,
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 370,
                                              "end": 375,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 412,
      "end": 806,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 424,
        "name": "class2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 425,
        "end": 806,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 623,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 436,
              "end": 623,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 461,
                          "end": 466,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 469,
                          "end": 470,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 486,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 503,
                                "end": 510,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 512,
                                "end": 587,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 513,
                                    "end": 521,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 526,
                                  "end": 587,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 557,
                                            "end": 565,
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 566,
                                              "end": 571,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 607,
                    "end": 617,
                    "argument": {
                      "type": "Literal",
                      "start": 614,
                      "end": 616,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 438,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 440,
                  "end": 446
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 628,
            "end": 804,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 633,
              "end": 804,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 634,
                  "end": 645,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 637,
                    "end": 645,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 639,
                      "end": 645
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 666,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 669,
                          "end": 670,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 684,
                          "end": 686,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 703,
                                "end": 710,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 712,
                                "end": 787,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 713,
                                    "end": 721,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 726,
                                  "end": 787,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 757,
                                            "end": 765,
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 766,
                                              "end": 771,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
