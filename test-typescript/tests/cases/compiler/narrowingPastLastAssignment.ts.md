__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3460,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 31,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "action",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 27,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 27,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 250,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 250,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 151,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 141,
              "end": 150,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 145,
                "end": 150,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 156,
            "end": 198,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 156,
              "end": 197,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 163,
                  "end": 196,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 169,
                    "end": 196,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 171,
                        "end": 172,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 210,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 203,
              "end": 209,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 207,
                "end": 209,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 215,
            "end": 248,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 215,
              "end": 247,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 222,
                  "end": 246,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 228,
                    "end": 246,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 230,
                        "end": 231,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 231,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 215,
                "end": 221,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 133,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 133,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 118,
              "end": 133,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 118,
                  "end": 124
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 127,
                  "end": 133
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 344,
      "end": 703,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 703,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 364,
            "end": 387,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 368,
                "end": 386,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 386,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 369,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 371,
                      "end": 386,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 371,
                          "end": 377
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 380,
                          "end": 386
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 392,
            "end": 399,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 392,
              "end": 398,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 396,
                "end": 398,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 408,
                "end": 436,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 412,
                  "end": 436,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 418,
                    "end": 436,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 420,
                        "end": 421,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 420,
                          "end": 421,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 442,
            "end": 480,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 446,
                "end": 479,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 450,
                  "end": 479,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 461,
                    "end": 479,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 463,
                        "end": 464,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 464,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 485,
            "end": 540,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 489,
                "end": 539,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 493,
                  "end": 539,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 499,
                    "end": 539,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 509,
                        "end": 533,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 509,
                          "end": 512,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 512,
                          "end": 533,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 515,
                            "end": 533,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 517,
                                "end": 518,
                                "directive": null,
                                "expression": {
                                  "type": "Identifier",
                                  "start": 517,
                                  "end": 518,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
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
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": null,
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 545,
            "end": 594,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 549,
                "end": 593,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 553,
                  "end": 593,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 563,
                      "end": 587,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 566,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 566,
                        "end": 587,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 569,
                          "end": 587,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 571,
                              "end": 572,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 571,
                                "end": 572,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "FunctionDeclaration",
            "start": 599,
            "end": 639,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 612,
              "end": 639,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 614,
                  "end": 615,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 615,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 644,
            "end": 701,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 652,
              "end": 701,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 662,
                  "end": 695,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 662,
                    "end": 665,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 665,
                    "end": 695,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 668,
                      "end": 695,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 670,
                          "end": 671,
                          "directive": null,
                          "expression": {
                            "type": "Identifier",
                            "start": 670,
                            "end": 671,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
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
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 650,
              "end": 651,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 355,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 780,
      "end": 907,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 812,
        "end": 907,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 818,
            "end": 846,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 818,
              "end": 845,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 825,
                  "end": 844,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 831,
                    "end": 844,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 833,
                        "end": 842,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 833,
                          "end": 842,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 833,
                            "end": 834,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 837,
                            "end": 842,
                            "raw": "\"abc\"",
                            "value": "abc",
                            "regex": null,
                            "bigint": null
                          }
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 818,
                "end": 824,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 851,
            "end": 858,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 851,
              "end": 857,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 851,
                "end": 852,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 855,
                "end": 857,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 863,
            "end": 905,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 863,
              "end": 904,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 870,
                  "end": 903,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 876,
                    "end": 903,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 878,
                        "end": 879,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 878,
                          "end": 879,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 863,
                "end": 869,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 791,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 792,
          "end": 810,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 793,
            "end": 810,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 795,
              "end": 810,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 795,
                  "end": 801
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 804,
                  "end": 810
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 985,
      "end": 1255,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1018,
        "end": 1255,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1024,
            "end": 1051,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1028,
                "end": 1050,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1046,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1029,
                    "end": 1046,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1031,
                      "end": 1046,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1031,
                          "end": 1037
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1040,
                          "end": 1046
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1049,
                  "end": 1050,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 1056,
            "end": 1215,
            "body": {
              "type": "BlockStatement",
              "start": 1071,
              "end": 1215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1081,
                  "end": 1091,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1081,
                    "end": 1090,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1081,
                      "end": 1082,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1085,
                      "end": 1090,
                      "raw": "\"abc\"",
                      "value": "abc",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1100,
                  "end": 1142,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1100,
                    "end": 1141,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1107,
                        "end": 1140,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1113,
                          "end": 1140,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1115,
                              "end": 1116,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 1115,
                                "end": 1116,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1100,
                      "end": 1106,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1151,
                  "end": 1158,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1151,
                    "end": 1157,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1151,
                      "end": 1152,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1155,
                      "end": 1157,
                      "raw": "42",
                      "value": 42,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1167,
                  "end": 1209,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1167,
                    "end": 1208,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1174,
                        "end": 1207,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1180,
                          "end": 1207,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1182,
                              "end": 1183,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 1182,
                                "end": 1183,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1167,
                      "end": 1173,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1063,
              "end": 1069,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1063,
                "end": 1067,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1220,
            "end": 1253,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1220,
              "end": 1252,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1227,
                  "end": 1251,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1233,
                    "end": 1251,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1235,
                        "end": 1236,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 1235,
                          "end": 1236,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 1220,
                "end": 1226,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 996,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 997,
          "end": 1016,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1001,
            "end": 1016,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1003,
              "end": 1016,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1006,
                "end": 1016,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1009,
                  "end": 1016
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1257,
      "end": 1524,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1310,
        "end": 1524,
        "body": [
          {
            "type": "IfStatement",
            "start": 1316,
            "end": 1484,
            "alternate": {
              "type": "BlockStatement",
              "start": 1411,
              "end": 1484,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1421,
                  "end": 1427,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1421,
                    "end": 1426,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1421,
                      "end": 1422,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1425,
                      "end": 1426,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1436,
                  "end": 1478,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1436,
                    "end": 1477,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1443,
                        "end": 1476,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1449,
                          "end": 1476,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1451,
                              "end": 1452,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 1451,
                                "end": 1452,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1436,
                      "end": 1442,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1328,
              "end": 1401,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1338,
                  "end": 1344,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1338,
                    "end": 1343,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1338,
                      "end": 1339,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1342,
                      "end": 1343,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1353,
                  "end": 1395,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1353,
                    "end": 1394,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1360,
                        "end": 1393,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1366,
                          "end": 1393,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1368,
                              "end": 1369,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 1368,
                                "end": 1369,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1353,
                      "end": 1359,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1320,
              "end": 1326,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1320,
                "end": 1324,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1489,
            "end": 1522,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1489,
              "end": 1521,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1496,
                  "end": 1520,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1502,
                    "end": 1520,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1504,
                        "end": 1505,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 1504,
                          "end": 1505,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 1489,
                "end": 1495,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 1266,
        "end": 1268,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1269,
          "end": 1287,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1270,
            "end": 1287,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1272,
              "end": 1287,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1272,
                  "end": 1278
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1281,
                  "end": 1287
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1289,
          "end": 1308,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1293,
            "end": 1308,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1295,
              "end": 1308,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1298,
                "end": 1308,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1301,
                  "end": 1308
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1526,
      "end": 1780,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1554,
        "end": 1780,
        "body": [
          {
            "type": "IfStatement",
            "start": 1560,
            "end": 1778,
            "alternate": {
              "type": "BlockStatement",
              "start": 1679,
              "end": 1778,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1689,
                  "end": 1715,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1693,
                      "end": 1714,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1693,
                        "end": 1714,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1694,
                          "end": 1714,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 1696,
                            "end": 1714,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1696,
                                "end": 1702
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1705,
                                "end": 1714
                              }
                            ]
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1724,
                  "end": 1730,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1724,
                    "end": 1729,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1725,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1728,
                      "end": 1729,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1739,
                  "end": 1772,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1739,
                    "end": 1771,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1746,
                        "end": 1770,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1752,
                          "end": 1770,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1754,
                              "end": 1755,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 1754,
                                "end": 1755,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1745,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1570,
              "end": 1669,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1580,
                  "end": 1606,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1584,
                      "end": 1605,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1584,
                        "end": 1605,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1585,
                          "end": 1605,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 1587,
                            "end": 1605,
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1587,
                                "end": 1593
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1596,
                                "end": 1605
                              }
                            ]
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1615,
                  "end": 1621,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1615,
                    "end": 1620,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1615,
                      "end": 1616,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1619,
                      "end": 1620,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1630,
                  "end": 1663,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1630,
                    "end": 1662,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 1637,
                        "end": 1661,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1643,
                          "end": 1661,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 1645,
                              "end": 1646,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 1645,
                                "end": 1646,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1630,
                      "end": 1636,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1564,
              "end": 1568,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1535,
        "end": 1538,
        "decorators": [],
        "name": "f5a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1539,
          "end": 1552,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1543,
            "end": 1552,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1545,
              "end": 1552
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1782,
      "end": 1929,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1797,
        "end": 1929,
        "body": [
          {
            "type": "ForStatement",
            "start": 1803,
            "end": 1927,
            "body": {
              "type": "BlockStatement",
              "start": 1832,
              "end": 1927,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1842,
                  "end": 1921,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1866,
                    "end": 1921,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1880,
                        "end": 1911,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1880,
                          "end": 1911,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 1887,
                              "end": 1910,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1893,
                                "end": 1910,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1895,
                                    "end": 1896,
                                    "directive": null,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 1895,
                                      "end": 1896,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
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
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1880,
                            "end": 1886,
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "start": 1846,
                    "end": 1864,
                    "operator": "||",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 1846,
                      "end": 1853,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 1846,
                        "end": 1847,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1852,
                        "end": 1853,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1857,
                      "end": 1864,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 1857,
                        "end": 1858,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1863,
                        "end": 1864,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 1808,
              "end": 1817,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1812,
                  "end": 1817,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1812,
                    "end": 1813,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1816,
                    "end": 1817,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1819,
              "end": 1825,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 1819,
                "end": 1820,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1823,
                "end": 1825,
                "raw": "10",
                "value": 10,
                "regex": null,
                "bigint": null
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1827,
              "end": 1830,
              "argument": {
                "type": "Identifier",
                "start": 1827,
                "end": 1828,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1791,
        "end": 1794,
        "decorators": [],
        "name": "f5b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2002,
      "end": 2130,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2016,
        "end": 2130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2022,
            "end": 2028,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2026,
                "end": 2027,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2026,
                  "end": 2027,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2033,
            "end": 2043,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2033,
              "end": 2042,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2033,
                "end": 2034,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2037,
                "end": 2042,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2048,
            "end": 2068,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2048,
              "end": 2067,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2055,
                  "end": 2066,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2061,
                    "end": 2066,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2063,
                        "end": 2064,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2063,
                          "end": 2064,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 2048,
                "end": 2054,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2083,
            "end": 2090,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2083,
              "end": 2089,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2083,
                "end": 2084,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2087,
                "end": 2089,
                "raw": "42",
                "value": 42,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2095,
            "end": 2128,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2095,
              "end": 2127,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2102,
                  "end": 2126,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2108,
                    "end": 2126,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2110,
                        "end": 2111,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2110,
                          "end": 2111,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 2095,
                "end": 2101,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 2011,
        "end": 2013,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2201,
      "end": 2344,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2215,
        "end": 2344,
        "body": [
          {
            "type": "TryStatement",
            "start": 2221,
            "end": 2342,
            "block": {
              "type": "BlockStatement",
              "start": 2225,
              "end": 2232,
              "body": []
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 2237,
              "end": 2342,
              "body": {
                "type": "BlockStatement",
                "start": 2247,
                "end": 2342,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 2257,
                    "end": 2336,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2281,
                      "end": 2336,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 2295,
                          "end": 2326,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2299,
                              "end": 2326,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 2299,
                                "end": 2300,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 2303,
                                "end": 2326,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 2309,
                                  "end": 2326,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 2311,
                                      "end": 2312,
                                      "directive": null,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 2311,
                                        "end": 2312,
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null
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
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 2261,
                      "end": 2279,
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "start": 2261,
                        "end": 2262,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2274,
                        "end": 2279,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 2244,
                "end": 2245,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2210,
        "end": 2212,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2400,
      "end": 2423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2404,
          "end": 2422,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2404,
            "end": 2422,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2405,
              "end": 2422,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2407,
                "end": 2422,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2407,
                    "end": 2413
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2416,
                    "end": 2422
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 2424,
      "end": 2434,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2424,
        "end": 2433,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2424,
          "end": 2425,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 2428,
          "end": 2433,
          "raw": "\"abc\"",
          "value": "abc",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2435,
      "end": 2477,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2435,
        "end": 2476,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 2442,
            "end": 2475,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2448,
              "end": 2475,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2450,
                  "end": 2451,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2450,
                    "end": 2451,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
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
        ],
        "callee": {
          "type": "Identifier",
          "start": 2435,
          "end": 2441,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 2543,
      "end": 2738,
      "body": {
        "type": "TSModuleBlock",
        "start": 2557,
        "end": 2738,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 2563,
            "end": 2593,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 2570,
              "end": 2593,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2574,
                  "end": 2592,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2574,
                    "end": 2592,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2575,
                      "end": 2592,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2577,
                        "end": 2592,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2577,
                            "end": 2583
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2586,
                            "end": 2592
                          }
                        ]
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 2598,
            "end": 2608,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2598,
              "end": 2607,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2598,
                "end": 2599,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2602,
                "end": 2607,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2613,
            "end": 2655,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2613,
              "end": 2654,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2620,
                  "end": 2653,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2626,
                    "end": 2653,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2628,
                        "end": 2629,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2628,
                          "end": 2629,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 2613,
                "end": 2619,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 2660,
            "end": 2683,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2664,
                "end": 2682,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2664,
                  "end": 2682,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2665,
                    "end": 2682,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2667,
                      "end": 2682,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2667,
                          "end": 2673
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2676,
                          "end": 2682
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2688,
            "end": 2698,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2688,
              "end": 2697,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2688,
                "end": 2689,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2692,
                "end": 2697,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2703,
            "end": 2736,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2703,
              "end": 2735,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2710,
                  "end": 2734,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2716,
                    "end": 2734,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2718,
                        "end": 2719,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2718,
                          "end": 2719,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
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
              ],
              "callee": {
                "type": "Identifier",
                "start": 2703,
                "end": 2709,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 2553,
        "end": 2556,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2763,
      "end": 2862,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2778,
        "end": 2862,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2784,
            "end": 2810,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2788,
                "end": 2809,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2788,
                  "end": 2809,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2789,
                    "end": 2809,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2791,
                      "end": 2809,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2791,
                          "end": 2797
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2800,
                          "end": 2809
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2815,
            "end": 2821,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2815,
              "end": 2820,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2815,
                "end": 2816,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2819,
                "end": 2820,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2826,
            "end": 2860,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 2833,
              "end": 2859,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 2848,
                "end": 2859,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 2848,
                  "end": 2849,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 2854,
                  "end": 2859,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 2854,
                    "end": 2855,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2858,
                    "end": 2859,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2834,
                  "end": 2843,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2835,
                    "end": 2843,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2837,
                      "end": 2843
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2772,
        "end": 2775,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2864,
      "end": 2944,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2895,
        "end": 2944,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2901,
            "end": 2909,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2901,
              "end": 2908,
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "start": 2901,
                "end": 2902,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2907,
                "end": 2908,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2914,
            "end": 2942,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 2921,
              "end": 2941,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 2936,
                "end": 2941,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 2936,
                  "end": 2937,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2940,
                  "end": 2941,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2922,
                  "end": 2931,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2923,
                    "end": 2931,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2925,
                      "end": 2931
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2873,
        "end": 2882,
        "decorators": [],
        "name": "makeAdder",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2883,
          "end": 2893,
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2885,
            "end": 2893,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2887,
              "end": 2893
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2946,
      "end": 3001,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2961,
        "end": 3001,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2967,
            "end": 2973,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2971,
                "end": 2972,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2971,
                  "end": 2972,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2978,
            "end": 2986,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2978,
              "end": 2985,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2978,
                "end": 2979,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2982,
                "end": 2985,
                "raw": "\"b\"",
                "value": "b",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2991,
            "end": 2999,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2991,
              "end": 2998,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 2997,
                "end": 2998,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
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
      "id": {
        "type": "Identifier",
        "start": 2955,
        "end": 2958,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3025,
      "end": 3251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3040,
        "end": 3251,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3046,
            "end": 3097,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3052,
                "end": 3097,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3052,
                  "end": 3085,
                  "decorators": [],
                  "name": "fooMap",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3058,
                    "end": 3085,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3060,
                      "end": 3085,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3063,
                        "end": 3085,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 3064,
                            "end": 3070
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 3071,
                            "end": 3084,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 3076,
                              "end": 3084,
                              "params": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3077,
                                  "end": 3083
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 3071,
                              "end": 3076,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 3060,
                        "end": 3063,
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "NewExpression",
                  "start": 3088,
                  "end": 3097,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 3092,
                    "end": 3095,
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 3102,
            "end": 3133,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3108,
                "end": 3132,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3108,
                  "end": 3114,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3117,
                  "end": 3132,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 3118,
                      "end": 3119,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 3121,
                      "end": 3122,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 3124,
                      "end": 3125,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 3127,
                      "end": 3128,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 3130,
                      "end": 3131,
                      "raw": "5",
                      "value": 5,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 3138,
            "end": 3164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3142,
                "end": 3163,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3142,
                  "end": 3145,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3148,
                  "end": 3163,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 3159,
                      "end": 3162,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 3148,
                    "end": 3158,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3148,
                      "end": 3154,
                      "decorators": [],
                      "name": "fooMap",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3155,
                      "end": 3158,
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 3169,
            "end": 3211,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3186,
              "end": 3211,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3196,
                  "end": 3205,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3196,
                    "end": 3204,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3196,
                      "end": 3199,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 3202,
                      "end": 3204,
                      "elements": []
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3173,
              "end": 3184,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 3173,
                "end": 3176,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3180,
                "end": 3184,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3216,
            "end": 3249,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 3216,
              "end": 3248,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 3231,
                  "end": 3247,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 3236,
                    "end": 3247,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3245,
                        "end": 3246,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3236,
                      "end": 3244,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3236,
                        "end": 3239,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3240,
                        "end": 3244,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 3231,
                      "end": 3232,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 3216,
                "end": 3230,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 3216,
                  "end": 3222,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 3223,
                  "end": 3230,
                  "decorators": [],
                  "name": "forEach",
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
      "id": {
        "type": "Identifier",
        "start": 3034,
        "end": 3037,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3253,
      "end": 3460,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3268,
        "end": 3460,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3357,
            "end": 3385,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3361,
                "end": 3384,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3361,
                  "end": 3384,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3364,
                    "end": 3384,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3366,
                      "end": 3384,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3366,
                          "end": 3372
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 3375,
                          "end": 3384
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 3390,
            "end": 3399,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3390,
              "end": 3398,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3390,
                "end": 3393,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3396,
                "end": 3398,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 3405,
            "end": 3458,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 3412,
              "end": 3458,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3418,
                "end": 3458,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3428,
                    "end": 3452,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3428,
                      "end": 3451,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3428,
                        "end": 3449,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3428,
                          "end": 3431,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3432,
                          "end": 3449,
                          "decorators": [],
                          "name": "toLocaleLowerCase",
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
      "id": {
        "type": "Identifier",
        "start": 3262,
        "end": 3265,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
