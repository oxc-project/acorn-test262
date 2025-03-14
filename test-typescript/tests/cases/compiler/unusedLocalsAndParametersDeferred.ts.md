__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 11,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 67,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 54,
            "end": 65,
            "argument": {
              "type": "CallExpression",
              "start": 61,
              "end": 64,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 29,
        "decorators": [],
        "name": "defered",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 33,
          "end": 43,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 43,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 36,
              "end": 43,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 47,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 47,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 158,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 156,
            "expression": {
              "type": "CallExpression",
              "start": 122,
              "end": 155,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 130,
                  "end": 154,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 136,
                    "end": 154,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 146,
                        "end": 148,
                        "expression": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 122,
                "end": 129,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 164,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 163,
        "arguments": [
          {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "fexp",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 209,
            "end": 264,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 222,
              "end": 264,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 228,
                  "end": 262,
                  "expression": {
                    "type": "CallExpression",
                    "start": 228,
                    "end": 261,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 236,
                        "end": 260,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 242,
                          "end": 260,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 252,
                              "end": 254,
                              "expression": {
                                "type": "Identifier",
                                "start": 252,
                                "end": 253,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 235,
                      "decorators": [],
                      "name": "defered",
                      "optional": false
                    },
                    "optional": false
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
                "start": 219,
                "end": 220,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 274,
      "expression": {
        "type": "CallExpression",
        "start": 266,
        "end": 273,
        "arguments": [
          {
            "type": "Literal",
            "start": 271,
            "end": 272,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 266,
          "end": 270,
          "decorators": [],
          "name": "fexp",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 313,
            "decorators": [],
            "name": "farrow",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 316,
            "end": 365,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 323,
              "end": 365,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 329,
                  "end": 363,
                  "expression": {
                    "type": "CallExpression",
                    "start": 329,
                    "end": 362,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 337,
                        "end": 361,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 343,
                          "end": 361,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 353,
                              "end": 355,
                              "expression": {
                                "type": "Identifier",
                                "start": 353,
                                "end": 354,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 336,
                      "decorators": [],
                      "name": "defered",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 377,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 376,
        "arguments": [
          {
            "type": "Literal",
            "start": 374,
            "end": 375,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 367,
          "end": 373,
          "decorators": [],
          "name": "farrow",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 388,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 388,
            "decorators": [],
            "name": "prop1",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 391,
      "end": 706,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 706,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 440,
            "end": 508,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 446,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 446,
              "end": 508,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 450,
                "end": 508,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 460,
                    "end": 502,
                    "expression": {
                      "type": "CallExpression",
                      "start": 460,
                      "end": 501,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 468,
                          "end": 500,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 474,
                            "end": 500,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 488,
                                "end": 490,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 489,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 467,
                        "decorators": [],
                        "name": "defered",
                        "optional": false
                      },
                      "optional": false
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
                  "start": 447,
                  "end": 448,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 550,
            "end": 625,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 555,
              "end": 625,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 567,
                "end": 625,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 577,
                    "end": 619,
                    "expression": {
                      "type": "CallExpression",
                      "start": 577,
                      "end": 618,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 585,
                          "end": 617,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 591,
                            "end": 617,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 605,
                                "end": 607,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 605,
                                  "end": 606,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 584,
                        "decorators": [],
                        "name": "defered",
                        "optional": false
                      },
                      "optional": false
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
                  "start": 556,
                  "end": 565,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 557,
                    "end": 565,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 559,
                      "end": 565
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 662,
            "end": 704,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 663,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 666,
              "end": 703,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 674,
                  "end": 702,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 680,
                    "end": 702,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 690,
                        "end": 696,
                        "expression": {
                          "type": "Identifier",
                          "start": 690,
                          "end": 695,
                          "decorators": [],
                          "name": "prop1",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 666,
                "end": 673,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 398,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 716,
      "expression": {
        "type": "NewExpression",
        "start": 708,
        "end": 715,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 712,
          "end": 713,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 727,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 727,
            "decorators": [],
            "name": "prop2",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 1051,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 1051,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 738,
            "end": 1051,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 744,
              "end": 1051,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 785,
                  "end": 853,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 785,
                    "end": 791,
                    "decorators": [],
                    "name": "method",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 791,
                    "end": 853,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 795,
                      "end": 853,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 805,
                          "end": 847,
                          "expression": {
                            "type": "CallExpression",
                            "start": 805,
                            "end": 846,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 813,
                                "end": 845,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 819,
                                  "end": 845,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 833,
                                      "end": 835,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 833,
                                        "end": 834,
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": []
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 812,
                              "decorators": [],
                              "name": "defered",
                              "optional": false
                            },
                            "optional": false
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
                        "start": 792,
                        "end": 793,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 895,
                  "end": 970,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 900,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 900,
                    "end": 970,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 912,
                      "end": 970,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 922,
                          "end": 964,
                          "expression": {
                            "type": "CallExpression",
                            "start": 922,
                            "end": 963,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 930,
                                "end": 962,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 936,
                                  "end": 962,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 950,
                                      "end": 952,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 950,
                                        "end": 951,
                                        "decorators": [],
                                        "name": "v",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": []
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 922,
                              "end": 929,
                              "decorators": [],
                              "name": "defered",
                              "optional": false
                            },
                            "optional": false
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
                        "start": 901,
                        "end": 910,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 902,
                          "end": 910,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 904,
                            "end": 910
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1007,
                  "end": 1049,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1007,
                    "end": 1008,
                    "decorators": [],
                    "name": "p",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "CallExpression",
                    "start": 1011,
                    "end": 1048,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1019,
                        "end": 1047,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1025,
                          "end": 1047,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1035,
                              "end": 1041,
                              "expression": {
                                "type": "Identifier",
                                "start": 1035,
                                "end": 1040,
                                "decorators": [],
                                "name": "prop2",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1018,
                      "decorators": [],
                      "name": "defered",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1053,
      "end": 1061,
      "expression": {
        "type": "NewExpression",
        "start": 1053,
        "end": 1060,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 1057,
          "end": 1058,
          "decorators": [],
          "name": "E",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1394,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1069,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1072,
            "end": 1394,
            "properties": [
              {
                "type": "Property",
                "start": 1128,
                "end": 1196,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1134,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1134,
                  "end": 1196,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1138,
                    "end": 1196,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1148,
                        "end": 1190,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1148,
                          "end": 1189,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1156,
                              "end": 1188,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1162,
                                "end": 1188,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1176,
                                    "end": 1178,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1176,
                                      "end": 1177,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1148,
                            "end": 1155,
                            "decorators": [],
                            "name": "defered",
                            "optional": false
                          },
                          "optional": false
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
                      "start": 1135,
                      "end": 1136,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1239,
                "end": 1314,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1243,
                  "end": 1244,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1244,
                  "end": 1314,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1256,
                    "end": 1314,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1266,
                        "end": 1308,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1266,
                          "end": 1307,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1274,
                              "end": 1306,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1280,
                                "end": 1306,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1294,
                                    "end": 1296,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1294,
                                      "end": 1295,
                                      "decorators": [],
                                      "name": "v",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1266,
                            "end": 1273,
                            "decorators": [],
                            "name": "defered",
                            "optional": false
                          },
                          "optional": false
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
                      "start": 1245,
                      "end": 1254,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1246,
                        "end": 1254,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1248,
                          "end": 1254
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 1352,
                "end": 1392,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1353,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 1355,
                  "end": 1392,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1363,
                      "end": 1391,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1369,
                        "end": 1391,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1379,
                            "end": 1385,
                            "expression": {
                              "type": "Identifier",
                              "start": 1379,
                              "end": 1384,
                              "decorators": [],
                              "name": "prop1",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1355,
                    "end": 1362,
                    "decorators": [],
                    "name": "defered",
                    "optional": false
                  },
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 1397,
      "end": 1399,
      "expression": {
        "type": "Identifier",
        "start": 1397,
        "end": 1398,
        "decorators": [],
        "name": "o",
        "optional": false
      }
    },
    {
      "type": "ForInStatement",
      "start": 1426,
      "end": 1485,
      "body": {
        "type": "BlockStatement",
        "start": 1443,
        "end": 1485,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1449,
            "end": 1483,
            "expression": {
              "type": "CallExpression",
              "start": 1449,
              "end": 1482,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1457,
                  "end": 1481,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1463,
                    "end": 1481,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1473,
                        "end": 1475,
                        "expression": {
                          "type": "Identifier",
                          "start": 1473,
                          "end": 1474,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1449,
                "end": 1456,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 1431,
        "end": 1436,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1435,
            "end": 1436,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1435,
              "end": 1436,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 1440,
        "end": 1441,
        "decorators": [],
        "name": "o",
        "optional": false
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1512,
      "end": 1577,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1535,
        "end": 1577,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1541,
            "end": 1575,
            "expression": {
              "type": "CallExpression",
              "start": 1541,
              "end": 1574,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1549,
                  "end": 1573,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1555,
                    "end": 1573,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1565,
                        "end": 1567,
                        "expression": {
                          "type": "Identifier",
                          "start": 1565,
                          "end": 1566,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1541,
                "end": 1548,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 1517,
        "end": 1522,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1521,
            "end": 1522,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1521,
              "end": 1522,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1526,
        "end": 1533,
        "elements": [
          {
            "type": "Literal",
            "start": 1527,
            "end": 1528,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 1529,
            "end": 1530,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 1531,
            "end": 1532,
            "raw": "3",
            "value": 3
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1601,
      "end": 1672,
      "body": {
        "type": "BlockStatement",
        "start": 1630,
        "end": 1672,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1636,
            "end": 1670,
            "expression": {
              "type": "CallExpression",
              "start": 1636,
              "end": 1669,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1644,
                  "end": 1668,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1650,
                    "end": 1668,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1660,
                        "end": 1662,
                        "expression": {
                          "type": "Identifier",
                          "start": 1660,
                          "end": 1661,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1636,
                "end": 1643,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1606,
        "end": 1615,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1610,
            "end": 1615,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1610,
              "end": 1611,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1614,
              "end": 1615,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1617,
        "end": 1623,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1617,
          "end": 1618,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1621,
          "end": 1623,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1625,
        "end": 1628,
        "argument": {
          "type": "Identifier",
          "start": 1625,
          "end": 1626,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1689,
      "end": 1713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1695,
          "end": 1712,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1704,
            "decorators": [],
            "name": "condition",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1707,
            "end": 1712,
            "raw": "false",
            "value": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 1714,
      "end": 1788,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 1729,
        "end": 1788,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1735,
            "end": 1747,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1741,
                "end": 1746,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1741,
                  "end": 1742,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1745,
                  "end": 1746,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1752,
            "end": 1786,
            "expression": {
              "type": "CallExpression",
              "start": 1752,
              "end": 1785,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1760,
                  "end": 1784,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1766,
                    "end": 1784,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1776,
                        "end": 1778,
                        "expression": {
                          "type": "Identifier",
                          "start": 1776,
                          "end": 1777,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1752,
                "end": 1759,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Identifier",
        "start": 1718,
        "end": 1727,
        "decorators": [],
        "name": "condition",
        "optional": false
      }
    },
    {
      "type": "TryStatement",
      "start": 1814,
      "end": 2015,
      "block": {
        "type": "BlockStatement",
        "start": 1818,
        "end": 1877,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1824,
            "end": 1836,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1830,
                "end": 1835,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1830,
                  "end": 1831,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1834,
                  "end": 1835,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1841,
            "end": 1875,
            "expression": {
              "type": "CallExpression",
              "start": 1841,
              "end": 1874,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1849,
                  "end": 1873,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1855,
                    "end": 1873,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1865,
                        "end": 1867,
                        "expression": {
                          "type": "Identifier",
                          "start": 1865,
                          "end": 1866,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1841,
                "end": 1848,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 1956,
        "end": 2015,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1962,
            "end": 1974,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1968,
                "end": 1973,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1968,
                  "end": 1969,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1972,
                  "end": 1973,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1979,
            "end": 2013,
            "expression": {
              "type": "CallExpression",
              "start": 1979,
              "end": 2012,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1987,
                  "end": 2011,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1993,
                    "end": 2011,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2003,
                        "end": 2005,
                        "expression": {
                          "type": "Identifier",
                          "start": 2003,
                          "end": 2004,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1979,
                "end": 1986,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 1878,
        "end": 1947,
        "body": {
          "type": "BlockStatement",
          "start": 1888,
          "end": 1947,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1894,
              "end": 1906,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1900,
                  "end": 1905,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1900,
                    "end": 1901,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1904,
                    "end": 1905,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 1911,
              "end": 1945,
              "expression": {
                "type": "CallExpression",
                "start": 1911,
                "end": 1944,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1919,
                    "end": 1943,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1925,
                      "end": 1943,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1935,
                          "end": 1937,
                          "expression": {
                            "type": "Identifier",
                            "start": 1935,
                            "end": 1936,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1911,
                  "end": 1918,
                  "decorators": [],
                  "name": "defered",
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "param": {
          "type": "Identifier",
          "start": 1885,
          "end": 1886,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2036,
      "end": 2101,
      "body": {
        "type": "TSModuleBlock",
        "start": 2048,
        "end": 2101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2054,
            "end": 2060,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2058,
                "end": 2059,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2058,
                  "end": 2059,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 2065,
            "end": 2099,
            "expression": {
              "type": "CallExpression",
              "start": 2065,
              "end": 2098,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2073,
                  "end": 2097,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2079,
                    "end": 2097,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2089,
                        "end": 2091,
                        "expression": {
                          "type": "Identifier",
                          "start": 2089,
                          "end": 2090,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2065,
                "end": 2072,
                "decorators": [],
                "name": "defered",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2046,
        "end": 2047,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExpressionStatement",
      "start": 2102,
      "end": 2104,
      "expression": {
        "type": "Identifier",
        "start": 2102,
        "end": 2103,
        "decorators": [],
        "name": "N",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
