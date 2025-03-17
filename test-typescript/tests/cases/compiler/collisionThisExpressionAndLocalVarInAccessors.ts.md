__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 802,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 408,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 408,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 218,
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
              "end": 218,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 218,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 45,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 49,
                        "end": 192,
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
                          "end": 192,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 68,
                              "end": 182,
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
                                "end": 182,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 91,
                                  "end": 182,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 97,
                                    "end": 182,
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
                                        "end": 168,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 153,
                                          "end": 167,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 162,
                                              "end": 166
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
                    "start": 202,
                    "end": 212,
                    "argument": {
                      "type": "Literal",
                      "start": 209,
                      "end": 211,
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
            "start": 223,
            "end": 406,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
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
              "start": 228,
              "end": 406,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 406,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 252,
                    "end": 399,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 256,
                        "end": 399,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 258,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 261,
                          "end": 399,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 275,
                              "end": 389,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 275,
                                "end": 282,
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
                                "start": 284,
                                "end": 389,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 298,
                                  "end": 389,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 304,
                                    "end": 389,
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "start": 322,
                                        "end": 336,
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 326,
                                            "end": 335,
                                            "definite": false,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 326,
                                              "end": 331,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 334,
                                              "end": 335,
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
                                        "start": 353,
                                        "end": 375,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 360,
                                          "end": 374,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 369,
                                              "end": 373
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 360,
                                            "end": 368,
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
                                    "start": 285,
                                    "end": 293,
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
                  "start": 229,
                  "end": 240,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 234,
                      "end": 240
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
      "start": 410,
      "end": 802,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 423,
        "end": 802,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 429,
            "end": 620,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
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
              "start": 434,
              "end": 620,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 445,
                "end": 620,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 455,
                    "end": 469,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 459,
                        "end": 468,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 464,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 467,
                          "end": 468,
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
                    "start": 478,
                    "end": 594,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 482,
                        "end": 594,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 484,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 487,
                          "end": 594,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 501,
                              "end": 584,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 501,
                                "end": 508,
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
                                "start": 510,
                                "end": 584,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 524,
                                  "end": 584,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 530,
                                    "end": 584,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 548,
                                        "end": 570,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 555,
                                          "end": 569,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 564,
                                              "end": 568
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 555,
                                            "end": 563,
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
                                    "start": 511,
                                    "end": 519,
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
                    "start": 604,
                    "end": 614,
                    "argument": {
                      "type": "Literal",
                      "start": 611,
                      "end": 613,
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
                "start": 436,
                "end": 444,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 438,
                  "end": 444
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 625,
            "end": 800,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 629,
              "end": 630,
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
              "start": 630,
              "end": 800,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 644,
                "end": 800,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 654,
                    "end": 668,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 658,
                        "end": 667,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 663,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 666,
                          "end": 667,
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
                    "start": 677,
                    "end": 793,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 681,
                        "end": 793,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 681,
                          "end": 683,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 686,
                          "end": 793,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 700,
                              "end": 783,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 700,
                                "end": 707,
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
                                "start": 709,
                                "end": 783,
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 723,
                                  "end": 783,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 729,
                                    "end": 783,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 747,
                                        "end": 769,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 754,
                                          "end": 768,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 763,
                                              "end": 767
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 754,
                                            "end": 762,
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
                                    "start": 710,
                                    "end": 718,
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
                  "start": 631,
                  "end": 642,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 634,
                    "end": 642,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 636,
                      "end": 642
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
        "start": 416,
        "end": 422,
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
