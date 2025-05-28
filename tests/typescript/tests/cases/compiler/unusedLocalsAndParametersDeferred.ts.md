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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 29,
        "decorators": [],
        "name": "defered",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
              "typeParameters": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
              "callee": {
                "type": "Identifier",
                "start": 122,
                "end": 129,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 130,
                  "end": 154,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 164,
      "expression": {
        "type": "CallExpression",
        "start": 159,
        "end": 163,
        "callee": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 265,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 206,
            "decorators": [],
            "name": "fexp",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 209,
            "end": 264,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 235,
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 236,
                        "end": 260,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 274,
      "expression": {
        "type": "CallExpression",
        "start": 266,
        "end": 273,
        "callee": {
          "type": "Identifier",
          "start": 266,
          "end": 270,
          "decorators": [],
          "name": "fexp",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 271,
            "end": 272,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 366,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 313,
            "decorators": [],
            "name": "farrow",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 316,
            "end": 365,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 329,
                      "end": 336,
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 337,
                        "end": 361,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 377,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 376,
        "callee": {
          "type": "Identifier",
          "start": 367,
          "end": 373,
          "decorators": [],
          "name": "farrow",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 374,
            "end": 375,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 389,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 383,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 388,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 391,
      "end": 706,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 398,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 706,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 440,
            "end": 508,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 440,
              "end": 446,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 446,
              "end": 508,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 467,
                        "decorators": [],
                        "name": "defered",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 468,
                          "end": 500,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 550,
            "end": 625,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 555,
              "end": 625,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
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
                      "callee": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 584,
                        "decorators": [],
                        "name": "defered",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 585,
                          "end": 617,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 662,
            "end": 704,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 663,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 666,
              "end": 703,
              "callee": {
                "type": "Identifier",
                "start": 666,
                "end": 673,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 674,
                  "end": 702,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 708,
      "end": 716,
      "expression": {
        "type": "NewExpression",
        "start": 708,
        "end": 715,
        "callee": {
          "type": "Identifier",
          "start": 712,
          "end": 713,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 728,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 727,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 727,
            "decorators": [],
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 1051,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 1051,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 735,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 738,
            "end": 1051,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 744,
              "end": 1051,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 785,
                  "end": 853,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 785,
                    "end": 791,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 791,
                    "end": 853,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 792,
                        "end": 793,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
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
                            "callee": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 812,
                              "decorators": [],
                              "name": "defered",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 813,
                                "end": 845,
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
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
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "id": null,
                                "generator": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 895,
                  "end": 970,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 900,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 900,
                    "end": 970,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    ],
                    "returnType": null,
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
                            "callee": {
                              "type": "Identifier",
                              "start": 922,
                              "end": 929,
                              "decorators": [],
                              "name": "defered",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "start": 930,
                                "end": 962,
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
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
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "id": null,
                                "generator": false
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1007,
                  "end": 1049,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1007,
                    "end": 1008,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "start": 1011,
                    "end": 1048,
                    "callee": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1018,
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1019,
                        "end": 1047,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1053,
      "end": 1061,
      "expression": {
        "type": "NewExpression",
        "start": 1053,
        "end": 1060,
        "callee": {
          "type": "Identifier",
          "start": 1057,
          "end": 1058,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1064,
      "end": 1395,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1394,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1069,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1134,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1134,
                  "end": 1196,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1136,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 1148,
                            "end": 1155,
                            "decorators": [],
                            "name": "defered",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1156,
                              "end": 1188,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1239,
                "end": 1314,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 1243,
                  "end": 1244,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1244,
                  "end": 1314,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                  ],
                  "returnType": null,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 1266,
                            "end": 1273,
                            "decorators": [],
                            "name": "defered",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1274,
                              "end": 1306,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1352,
                "end": 1392,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1353,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "CallExpression",
                  "start": 1355,
                  "end": 1392,
                  "callee": {
                    "type": "Identifier",
                    "start": 1355,
                    "end": 1362,
                    "decorators": [],
                    "name": "defered",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1363,
                      "end": 1391,
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
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
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ForInStatement",
      "start": 1426,
      "end": 1485,
      "left": {
        "type": "VariableDeclaration",
        "start": 1431,
        "end": 1436,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1435,
            "end": 1436,
            "id": {
              "type": "Identifier",
              "start": 1435,
              "end": 1436,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1440,
        "end": 1441,
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null
      },
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
              "callee": {
                "type": "Identifier",
                "start": 1449,
                "end": 1456,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1457,
                  "end": 1481,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1512,
      "end": 1577,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1517,
        "end": 1522,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1521,
            "end": 1522,
            "id": {
              "type": "Identifier",
              "start": 1521,
              "end": 1522,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1529,
            "end": 1530,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 1531,
            "end": 1532,
            "value": 3,
            "raw": "3"
          }
        ]
      },
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
              "callee": {
                "type": "Identifier",
                "start": 1541,
                "end": 1548,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1549,
                  "end": 1573,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1601,
      "end": 1672,
      "init": {
        "type": "VariableDeclaration",
        "start": 1606,
        "end": 1615,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1610,
            "end": 1615,
            "id": {
              "type": "Identifier",
              "start": 1610,
              "end": 1611,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1614,
              "end": 1615,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1617,
        "end": 1623,
        "left": {
          "type": "Identifier",
          "start": 1617,
          "end": 1618,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1621,
          "end": 1623,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1625,
        "end": 1628,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1625,
          "end": 1626,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
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
              "callee": {
                "type": "Identifier",
                "start": 1636,
                "end": 1643,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1644,
                  "end": 1668,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1689,
      "end": 1713,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1695,
          "end": 1712,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1704,
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1707,
            "end": 1712,
            "value": false,
            "raw": "false"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1714,
      "end": 1788,
      "test": {
        "type": "Identifier",
        "start": 1718,
        "end": 1727,
        "decorators": [],
        "name": "condition",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1729,
        "end": 1788,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1735,
            "end": 1747,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1741,
                "end": 1746,
                "id": {
                  "type": "Identifier",
                  "start": 1741,
                  "end": 1742,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1745,
                  "end": 1746,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1752,
            "end": 1786,
            "expression": {
              "type": "CallExpression",
              "start": 1752,
              "end": 1785,
              "callee": {
                "type": "Identifier",
                "start": 1752,
                "end": 1759,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1760,
                  "end": 1784,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1830,
                "end": 1835,
                "id": {
                  "type": "Identifier",
                  "start": 1830,
                  "end": 1831,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1834,
                  "end": 1835,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1841,
            "end": 1875,
            "expression": {
              "type": "CallExpression",
              "start": 1841,
              "end": 1874,
              "callee": {
                "type": "Identifier",
                "start": 1841,
                "end": 1848,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1849,
                  "end": 1873,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 1878,
        "end": 1947,
        "param": {
          "type": "Identifier",
          "start": 1885,
          "end": 1886,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 1888,
          "end": 1947,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1894,
              "end": 1906,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1900,
                  "end": 1905,
                  "id": {
                    "type": "Identifier",
                    "start": 1900,
                    "end": 1901,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1904,
                    "end": 1905,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 1911,
              "end": 1945,
              "expression": {
                "type": "CallExpression",
                "start": 1911,
                "end": 1944,
                "callee": {
                  "type": "Identifier",
                  "start": 1911,
                  "end": 1918,
                  "decorators": [],
                  "name": "defered",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 1919,
                    "end": 1943,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "directive": null
            }
          ]
        }
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1968,
                "end": 1973,
                "id": {
                  "type": "Identifier",
                  "start": 1968,
                  "end": 1969,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1972,
                  "end": 1973,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1979,
            "end": 2013,
            "expression": {
              "type": "CallExpression",
              "start": 1979,
              "end": 2012,
              "callee": {
                "type": "Identifier",
                "start": 1979,
                "end": 1986,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1987,
                  "end": 2011,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2036,
      "end": 2101,
      "id": {
        "type": "Identifier",
        "start": 2046,
        "end": 2047,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 2048,
        "end": 2101,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2054,
            "end": 2060,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2058,
                "end": 2059,
                "id": {
                  "type": "Identifier",
                  "start": 2058,
                  "end": 2059,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2065,
            "end": 2099,
            "expression": {
              "type": "CallExpression",
              "start": 2065,
              "end": 2098,
              "callee": {
                "type": "Identifier",
                "start": 2065,
                "end": 2072,
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2073,
                  "end": 2097,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
