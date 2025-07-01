__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 27
              },
              "typeArguments": null,
              "start": 19,
              "end": 27
            },
            "start": 17,
            "end": 27
          },
          "start": 16,
          "end": 27
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 29,
        "end": 31
      },
      "expression": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 114
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
                  "type": "TSStringKeyword",
                  "start": 118,
                  "end": 124
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 127,
                  "end": 133
                }
              ],
              "start": 118,
              "end": 133
            },
            "start": 116,
            "end": 133
          },
          "start": 115,
          "end": 133
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 145,
                "end": 150
              },
              "start": 141,
              "end": 150
            },
            "directive": null,
            "start": 141,
            "end": 151
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 162
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 172
                        },
                        "directive": null,
                        "start": 171,
                        "end": 172
                      }
                    ],
                    "start": 169,
                    "end": 196
                  },
                  "id": null,
                  "generator": false,
                  "start": 163,
                  "end": 196
                }
              ],
              "optional": false,
              "start": 156,
              "end": 197
            },
            "directive": null,
            "start": 156,
            "end": 198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 207,
                "end": 209
              },
              "start": 203,
              "end": 209
            },
            "directive": null,
            "start": 203,
            "end": 210
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 221
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 230,
                          "end": 231
                        },
                        "directive": null,
                        "start": 230,
                        "end": 231
                      }
                    ],
                    "start": 228,
                    "end": 246
                  },
                  "id": null,
                  "generator": false,
                  "start": 222,
                  "end": 246
                }
              ],
              "optional": false,
              "start": 215,
              "end": 247
            },
            "directive": null,
            "start": 215,
            "end": 248
          }
        ],
        "start": 135,
        "end": 250
      },
      "expression": false,
      "start": 103,
      "end": 250
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 355
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
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
                      ],
                      "start": 371,
                      "end": 386
                    },
                    "start": 369,
                    "end": 386
                  },
                  "start": 368,
                  "end": 386
                },
                "init": null,
                "definite": false,
                "start": 368,
                "end": 386
              }
            ],
            "declare": false,
            "start": 364,
            "end": 387
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 393
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 396,
                "end": 398
              },
              "start": 392,
              "end": 398
            },
            "directive": null,
            "start": 392,
            "end": 399
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 409
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 421
                        },
                        "directive": null,
                        "start": 420,
                        "end": 421
                      }
                    ],
                    "start": 418,
                    "end": 436
                  },
                  "id": null,
                  "generator": false,
                  "start": 412,
                  "end": 436
                },
                "definite": false,
                "start": 408,
                "end": 436
              }
            ],
            "declare": false,
            "start": 404,
            "end": 437
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 463,
                          "end": 464
                        },
                        "directive": null,
                        "start": 463,
                        "end": 464
                      }
                    ],
                    "start": 461,
                    "end": 479
                  },
                  "expression": false,
                  "start": 450,
                  "end": 479
                },
                "definite": false,
                "start": 446,
                "end": 479
              }
            ],
            "declare": false,
            "start": 442,
            "end": 480
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 509,
                          "end": 512
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 517,
                                  "end": 518
                                },
                                "directive": null,
                                "start": 517,
                                "end": 518
                              }
                            ],
                            "start": 515,
                            "end": 533
                          },
                          "expression": false,
                          "start": 512,
                          "end": 533
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 509,
                        "end": 533
                      }
                    ],
                    "start": 499,
                    "end": 539
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 493,
                  "end": 539
                },
                "definite": false,
                "start": 489,
                "end": 539
              }
            ],
            "declare": false,
            "start": 485,
            "end": 540
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 566
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 571,
                                "end": 572
                              },
                              "directive": null,
                              "start": 571,
                              "end": 572
                            }
                          ],
                          "start": 569,
                          "end": 587
                        },
                        "expression": false,
                        "start": 566,
                        "end": 587
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 563,
                      "end": 587
                    }
                  ],
                  "start": 553,
                  "end": 593
                },
                "definite": false,
                "start": 549,
                "end": 593
              }
            ],
            "declare": false,
            "start": 545,
            "end": 594
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 608,
              "end": 609
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "directive": null,
                  "start": 614,
                  "end": 615
                }
              ],
              "start": 612,
              "end": 639
            },
            "expression": false,
            "start": 599,
            "end": 639
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 651
            },
            "typeParameters": null,
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 665
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 670,
                            "end": 671
                          },
                          "directive": null,
                          "start": 670,
                          "end": 671
                        }
                      ],
                      "start": 668,
                      "end": 695
                    },
                    "expression": false,
                    "start": 665,
                    "end": 695
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 662,
                  "end": 695
                }
              ],
              "start": 652,
              "end": 701
            },
            "abstract": false,
            "declare": false,
            "start": 644,
            "end": 701
          }
        ],
        "start": 358,
        "end": 703
      },
      "expression": false,
      "start": 344,
      "end": 703
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 791
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
                  "type": "TSStringKeyword",
                  "start": 795,
                  "end": 801
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 804,
                  "end": 810
                }
              ],
              "start": 795,
              "end": 810
            },
            "start": 793,
            "end": 810
          },
          "start": 792,
          "end": 810
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 824
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 833,
                            "end": 834
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 837,
                            "end": 842
                          },
                          "start": 833,
                          "end": 842
                        },
                        "directive": null,
                        "start": 833,
                        "end": 842
                      }
                    ],
                    "start": 831,
                    "end": 844
                  },
                  "id": null,
                  "generator": false,
                  "start": 825,
                  "end": 844
                }
              ],
              "optional": false,
              "start": 818,
              "end": 845
            },
            "directive": null,
            "start": 818,
            "end": 846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 855,
                "end": 857
              },
              "start": 851,
              "end": 857
            },
            "directive": null,
            "start": 851,
            "end": 858
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 869
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 878,
                          "end": 879
                        },
                        "directive": null,
                        "start": 878,
                        "end": 879
                      }
                    ],
                    "start": 876,
                    "end": 903
                  },
                  "id": null,
                  "generator": false,
                  "start": 870,
                  "end": 903
                }
              ],
              "optional": false,
              "start": 863,
              "end": 904
            },
            "directive": null,
            "start": 863,
            "end": 905
          }
        ],
        "start": 812,
        "end": 907
      },
      "expression": false,
      "start": 780,
      "end": 907
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 996
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1009,
                  "end": 1016
                },
                "start": 1006,
                "end": 1016
              },
              "start": 1003,
              "end": 1016
            },
            "start": 1001,
            "end": 1016
          },
          "start": 997,
          "end": 1016
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
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
                      "type": "TSUnionType",
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
                      ],
                      "start": 1031,
                      "end": 1046
                    },
                    "start": 1029,
                    "end": 1046
                  },
                  "start": 1028,
                  "end": 1046
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1049,
                  "end": 1050
                },
                "definite": false,
                "start": 1028,
                "end": 1050
              }
            ],
            "declare": false,
            "start": 1024,
            "end": 1051
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1067
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1063,
              "end": 1069
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1081,
                      "end": 1082
                    },
                    "right": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "\"abc\"",
                      "start": 1085,
                      "end": 1090
                    },
                    "start": 1081,
                    "end": 1090
                  },
                  "directive": null,
                  "start": 1081,
                  "end": 1091
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1106
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1115,
                                "end": 1116
                              },
                              "directive": null,
                              "start": 1115,
                              "end": 1116
                            }
                          ],
                          "start": 1113,
                          "end": 1140
                        },
                        "id": null,
                        "generator": false,
                        "start": 1107,
                        "end": 1140
                      }
                    ],
                    "optional": false,
                    "start": 1100,
                    "end": 1141
                  },
                  "directive": null,
                  "start": 1100,
                  "end": 1142
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1151,
                      "end": 1152
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 1155,
                      "end": 1157
                    },
                    "start": 1151,
                    "end": 1157
                  },
                  "directive": null,
                  "start": 1151,
                  "end": 1158
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1167,
                      "end": 1173
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1182,
                                "end": 1183
                              },
                              "directive": null,
                              "start": 1182,
                              "end": 1183
                            }
                          ],
                          "start": 1180,
                          "end": 1207
                        },
                        "id": null,
                        "generator": false,
                        "start": 1174,
                        "end": 1207
                      }
                    ],
                    "optional": false,
                    "start": 1167,
                    "end": 1208
                  },
                  "directive": null,
                  "start": 1167,
                  "end": 1209
                }
              ],
              "start": 1071,
              "end": 1215
            },
            "start": 1056,
            "end": 1215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 1220,
                "end": 1226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1235,
                          "end": 1236
                        },
                        "directive": null,
                        "start": 1235,
                        "end": 1236
                      }
                    ],
                    "start": 1233,
                    "end": 1251
                  },
                  "id": null,
                  "generator": false,
                  "start": 1227,
                  "end": 1251
                }
              ],
              "optional": false,
              "start": 1220,
              "end": 1252
            },
            "directive": null,
            "start": 1220,
            "end": 1253
          }
        ],
        "start": 1018,
        "end": 1255
      },
      "expression": false,
      "start": 985,
      "end": 1255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1268
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
                  "type": "TSStringKeyword",
                  "start": 1272,
                  "end": 1278
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1281,
                  "end": 1287
                }
              ],
              "start": 1272,
              "end": 1287
            },
            "start": 1270,
            "end": 1287
          },
          "start": 1269,
          "end": 1287
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1301,
                  "end": 1308
                },
                "start": 1298,
                "end": 1308
              },
              "start": 1295,
              "end": 1308
            },
            "start": 1293,
            "end": 1308
          },
          "start": 1289,
          "end": 1308
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1324
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1320,
              "end": 1326
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1338,
                      "end": 1339
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1342,
                      "end": 1343
                    },
                    "start": 1338,
                    "end": 1343
                  },
                  "directive": null,
                  "start": 1338,
                  "end": 1344
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1353,
                      "end": 1359
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1368,
                                "end": 1369
                              },
                              "directive": null,
                              "start": 1368,
                              "end": 1369
                            }
                          ],
                          "start": 1366,
                          "end": 1393
                        },
                        "id": null,
                        "generator": false,
                        "start": 1360,
                        "end": 1393
                      }
                    ],
                    "optional": false,
                    "start": 1353,
                    "end": 1394
                  },
                  "directive": null,
                  "start": 1353,
                  "end": 1395
                }
              ],
              "start": 1328,
              "end": 1401
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1421,
                      "end": 1422
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1425,
                      "end": 1426
                    },
                    "start": 1421,
                    "end": 1426
                  },
                  "directive": null,
                  "start": 1421,
                  "end": 1427
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1436,
                      "end": 1442
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1451,
                                "end": 1452
                              },
                              "directive": null,
                              "start": 1451,
                              "end": 1452
                            }
                          ],
                          "start": 1449,
                          "end": 1476
                        },
                        "id": null,
                        "generator": false,
                        "start": 1443,
                        "end": 1476
                      }
                    ],
                    "optional": false,
                    "start": 1436,
                    "end": 1477
                  },
                  "directive": null,
                  "start": 1436,
                  "end": 1478
                }
              ],
              "start": 1411,
              "end": 1484
            },
            "start": 1316,
            "end": 1484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1504,
                          "end": 1505
                        },
                        "directive": null,
                        "start": 1504,
                        "end": 1505
                      }
                    ],
                    "start": 1502,
                    "end": 1520
                  },
                  "id": null,
                  "generator": false,
                  "start": 1496,
                  "end": 1520
                }
              ],
              "optional": false,
              "start": 1489,
              "end": 1521
            },
            "directive": null,
            "start": 1489,
            "end": 1522
          }
        ],
        "start": 1310,
        "end": 1524
      },
      "expression": false,
      "start": 1257,
      "end": 1524
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1535,
        "end": 1538
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1545,
              "end": 1552
            },
            "start": 1543,
            "end": 1552
          },
          "start": 1539,
          "end": 1552
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1568
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                            "type": "TSUnionType",
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
                            ],
                            "start": 1587,
                            "end": 1605
                          },
                          "start": 1585,
                          "end": 1605
                        },
                        "start": 1584,
                        "end": 1605
                      },
                      "init": null,
                      "definite": false,
                      "start": 1584,
                      "end": 1605
                    }
                  ],
                  "declare": false,
                  "start": 1580,
                  "end": 1606
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1615,
                      "end": 1616
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1619,
                      "end": 1620
                    },
                    "start": 1615,
                    "end": 1620
                  },
                  "directive": null,
                  "start": 1615,
                  "end": 1621
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1630,
                      "end": 1636
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1645,
                                "end": 1646
                              },
                              "directive": null,
                              "start": 1645,
                              "end": 1646
                            }
                          ],
                          "start": 1643,
                          "end": 1661
                        },
                        "id": null,
                        "generator": false,
                        "start": 1637,
                        "end": 1661
                      }
                    ],
                    "optional": false,
                    "start": 1630,
                    "end": 1662
                  },
                  "directive": null,
                  "start": 1630,
                  "end": 1663
                }
              ],
              "start": 1570,
              "end": 1669
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                            "type": "TSUnionType",
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
                            ],
                            "start": 1696,
                            "end": 1714
                          },
                          "start": 1694,
                          "end": 1714
                        },
                        "start": 1693,
                        "end": 1714
                      },
                      "init": null,
                      "definite": false,
                      "start": 1693,
                      "end": 1714
                    }
                  ],
                  "declare": false,
                  "start": 1689,
                  "end": 1715
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1725
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1728,
                      "end": 1729
                    },
                    "start": 1724,
                    "end": 1729
                  },
                  "directive": null,
                  "start": 1724,
                  "end": 1730
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1745
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1754,
                                "end": 1755
                              },
                              "directive": null,
                              "start": 1754,
                              "end": 1755
                            }
                          ],
                          "start": 1752,
                          "end": 1770
                        },
                        "id": null,
                        "generator": false,
                        "start": 1746,
                        "end": 1770
                      }
                    ],
                    "optional": false,
                    "start": 1739,
                    "end": 1771
                  },
                  "directive": null,
                  "start": 1739,
                  "end": 1772
                }
              ],
              "start": 1679,
              "end": 1778
            },
            "start": 1560,
            "end": 1778
          }
        ],
        "start": 1554,
        "end": 1780
      },
      "expression": false,
      "start": 1526,
      "end": 1780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1791,
        "end": 1794
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1812,
                    "end": 1813
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1816,
                    "end": 1817
                  },
                  "definite": false,
                  "start": 1812,
                  "end": 1817
                }
              ],
              "declare": false,
              "start": 1808,
              "end": 1817
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1819,
                "end": 1820
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1823,
                "end": 1825
              },
              "start": 1819,
              "end": 1825
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1827,
                "end": 1828
              },
              "start": 1827,
              "end": 1830
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1846,
                        "end": 1847
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1852,
                        "end": 1853
                      },
                      "start": 1846,
                      "end": 1853
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1857,
                        "end": 1858
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1863,
                        "end": 1864
                      },
                      "start": 1857,
                      "end": 1864
                    },
                    "start": 1846,
                    "end": 1864
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1880,
                            "end": 1886
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1895,
                                      "end": 1896
                                    },
                                    "directive": null,
                                    "start": 1895,
                                    "end": 1896
                                  }
                                ],
                                "start": 1893,
                                "end": 1910
                              },
                              "id": null,
                              "generator": false,
                              "start": 1887,
                              "end": 1910
                            }
                          ],
                          "optional": false,
                          "start": 1880,
                          "end": 1911
                        },
                        "directive": null,
                        "start": 1880,
                        "end": 1911
                      }
                    ],
                    "start": 1866,
                    "end": 1921
                  },
                  "alternate": null,
                  "start": 1842,
                  "end": 1921
                }
              ],
              "start": 1832,
              "end": 1927
            },
            "start": 1803,
            "end": 1927
          }
        ],
        "start": 1797,
        "end": 1929
      },
      "expression": false,
      "start": 1782,
      "end": 1929
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2011,
        "end": 2013
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2026,
                  "end": 2027
                },
                "init": null,
                "definite": false,
                "start": 2026,
                "end": 2027
              }
            ],
            "declare": false,
            "start": 2022,
            "end": 2028
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2033,
                "end": 2034
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2037,
                "end": 2042
              },
              "start": 2033,
              "end": 2042
            },
            "directive": null,
            "start": 2033,
            "end": 2043
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2048,
                "end": 2054
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2063,
                          "end": 2064
                        },
                        "directive": null,
                        "start": 2063,
                        "end": 2064
                      }
                    ],
                    "start": 2061,
                    "end": 2066
                  },
                  "id": null,
                  "generator": false,
                  "start": 2055,
                  "end": 2066
                }
              ],
              "optional": false,
              "start": 2048,
              "end": 2067
            },
            "directive": null,
            "start": 2048,
            "end": 2068
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2083,
                "end": 2084
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2087,
                "end": 2089
              },
              "start": 2083,
              "end": 2089
            },
            "directive": null,
            "start": 2083,
            "end": 2090
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2095,
                "end": 2101
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2110,
                          "end": 2111
                        },
                        "directive": null,
                        "start": 2110,
                        "end": 2111
                      }
                    ],
                    "start": 2108,
                    "end": 2126
                  },
                  "id": null,
                  "generator": false,
                  "start": 2102,
                  "end": 2126
                }
              ],
              "optional": false,
              "start": 2095,
              "end": 2127
            },
            "directive": null,
            "start": 2095,
            "end": 2128
          }
        ],
        "start": 2016,
        "end": 2130
      },
      "expression": false,
      "start": 2002,
      "end": 2130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2210,
        "end": 2212
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 2225,
              "end": 2232
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2244,
                "end": 2245
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2261,
                        "end": 2262
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2274,
                        "end": 2279
                      },
                      "start": 2261,
                      "end": 2279
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2299,
                                "end": 2300
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2311,
                                        "end": 2312
                                      },
                                      "directive": null,
                                      "start": 2311,
                                      "end": 2312
                                    }
                                  ],
                                  "start": 2309,
                                  "end": 2326
                                },
                                "id": null,
                                "generator": false,
                                "start": 2303,
                                "end": 2326
                              },
                              "definite": false,
                              "start": 2299,
                              "end": 2326
                            }
                          ],
                          "declare": false,
                          "start": 2295,
                          "end": 2326
                        }
                      ],
                      "start": 2281,
                      "end": 2336
                    },
                    "alternate": null,
                    "start": 2257,
                    "end": 2336
                  }
                ],
                "start": 2247,
                "end": 2342
              },
              "start": 2237,
              "end": 2342
            },
            "finalizer": null,
            "start": 2221,
            "end": 2342
          }
        ],
        "start": 2215,
        "end": 2344
      },
      "expression": false,
      "start": 2201,
      "end": 2344
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 2407,
                "end": 2422
              },
              "start": 2405,
              "end": 2422
            },
            "start": 2404,
            "end": 2422
          },
          "init": null,
          "definite": false,
          "start": 2404,
          "end": 2422
        }
      ],
      "declare": false,
      "start": 2400,
      "end": 2423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 2424,
          "end": 2425
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 2428,
          "end": 2433
        },
        "start": 2424,
        "end": 2433
      },
      "directive": null,
      "start": 2424,
      "end": 2434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 2435,
          "end": 2441
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2450,
                    "end": 2451
                  },
                  "directive": null,
                  "start": 2450,
                  "end": 2451
                }
              ],
              "start": 2448,
              "end": 2475
            },
            "id": null,
            "generator": false,
            "start": 2442,
            "end": 2475
          }
        ],
        "optional": false,
        "start": 2435,
        "end": 2476
      },
      "directive": null,
      "start": 2435,
      "end": 2477
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2553,
        "end": 2556
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
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
                        "type": "TSUnionType",
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
                        ],
                        "start": 2577,
                        "end": 2592
                      },
                      "start": 2575,
                      "end": 2592
                    },
                    "start": 2574,
                    "end": 2592
                  },
                  "init": null,
                  "definite": false,
                  "start": 2574,
                  "end": 2592
                }
              ],
              "declare": false,
              "start": 2570,
              "end": 2593
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2563,
            "end": 2593
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2598,
                "end": 2599
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2602,
                "end": 2607
              },
              "start": 2598,
              "end": 2607
            },
            "directive": null,
            "start": 2598,
            "end": 2608
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2613,
                "end": 2619
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2628,
                          "end": 2629
                        },
                        "directive": null,
                        "start": 2628,
                        "end": 2629
                      }
                    ],
                    "start": 2626,
                    "end": 2653
                  },
                  "id": null,
                  "generator": false,
                  "start": 2620,
                  "end": 2653
                }
              ],
              "optional": false,
              "start": 2613,
              "end": 2654
            },
            "directive": null,
            "start": 2613,
            "end": 2655
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
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
                          "type": "TSStringKeyword",
                          "start": 2667,
                          "end": 2673
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2676,
                          "end": 2682
                        }
                      ],
                      "start": 2667,
                      "end": 2682
                    },
                    "start": 2665,
                    "end": 2682
                  },
                  "start": 2664,
                  "end": 2682
                },
                "init": null,
                "definite": false,
                "start": 2664,
                "end": 2682
              }
            ],
            "declare": false,
            "start": 2660,
            "end": 2683
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2688,
                "end": 2689
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2692,
                "end": 2697
              },
              "start": 2688,
              "end": 2697
            },
            "directive": null,
            "start": 2688,
            "end": 2698
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2703,
                "end": 2709
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2718,
                          "end": 2719
                        },
                        "directive": null,
                        "start": 2718,
                        "end": 2719
                      }
                    ],
                    "start": 2716,
                    "end": 2734
                  },
                  "id": null,
                  "generator": false,
                  "start": 2710,
                  "end": 2734
                }
              ],
              "optional": false,
              "start": 2703,
              "end": 2735
            },
            "directive": null,
            "start": 2703,
            "end": 2736
          }
        ],
        "start": 2557,
        "end": 2738
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2543,
      "end": 2738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2775
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 2791,
                      "end": 2809
                    },
                    "start": 2789,
                    "end": 2809
                  },
                  "start": 2788,
                  "end": 2809
                },
                "init": null,
                "definite": false,
                "start": 2788,
                "end": 2809
              }
            ],
            "declare": false,
            "start": 2784,
            "end": 2810
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2815,
                "end": 2816
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2819,
                "end": 2820
              },
              "start": 2815,
              "end": 2820
            },
            "directive": null,
            "start": 2815,
            "end": 2821
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2837,
                      "end": 2843
                    },
                    "start": 2835,
                    "end": 2843
                  },
                  "start": 2834,
                  "end": 2843
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2848,
                  "end": 2849
                },
                "operator": "===",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2854,
                    "end": 2855
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2858,
                    "end": 2859
                  },
                  "start": 2854,
                  "end": 2859
                },
                "start": 2848,
                "end": 2859
              },
              "id": null,
              "generator": false,
              "start": 2833,
              "end": 2859
            },
            "start": 2826,
            "end": 2860
          }
        ],
        "start": 2778,
        "end": 2862
      },
      "expression": false,
      "start": 2763,
      "end": 2862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeAdder",
        "optional": false,
        "typeAnnotation": null,
        "start": 2873,
        "end": 2882
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2887,
              "end": 2893
            },
            "start": 2885,
            "end": 2893
          },
          "start": 2883,
          "end": 2893
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2901,
                "end": 2902
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2907,
                "end": 2908
              },
              "start": 2901,
              "end": 2908
            },
            "directive": null,
            "start": 2901,
            "end": 2909
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2925,
                      "end": 2931
                    },
                    "start": 2923,
                    "end": 2931
                  },
                  "start": 2922,
                  "end": 2931
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2936,
                  "end": 2937
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2940,
                  "end": 2941
                },
                "start": 2936,
                "end": 2941
              },
              "id": null,
              "generator": false,
              "start": 2921,
              "end": 2941
            },
            "start": 2914,
            "end": 2942
          }
        ],
        "start": 2895,
        "end": 2944
      },
      "expression": false,
      "start": 2864,
      "end": 2944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2955,
        "end": 2958
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2971,
                  "end": 2972
                },
                "init": null,
                "definite": false,
                "start": 2971,
                "end": 2972
              }
            ],
            "declare": false,
            "start": 2967,
            "end": 2973
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 2978,
                "end": 2979
              },
              "right": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 2982,
                "end": 2985
              },
              "start": 2978,
              "end": 2985
            },
            "directive": null,
            "start": 2978,
            "end": 2986
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 2997,
                "end": 2998
              },
              "id": null,
              "generator": false,
              "start": 2991,
              "end": 2998
            },
            "directive": null,
            "start": 2991,
            "end": 2999
          }
        ],
        "start": 2961,
        "end": 3001
      },
      "expression": false,
      "start": 2946,
      "end": 3001
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3034,
        "end": 3037
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooMap",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3060,
                        "end": 3063
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 3064,
                            "end": 3070
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3071,
                              "end": 3076
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3077,
                                  "end": 3083
                                }
                              ],
                              "start": 3076,
                              "end": 3084
                            },
                            "start": 3071,
                            "end": 3084
                          }
                        ],
                        "start": 3063,
                        "end": 3085
                      },
                      "start": 3060,
                      "end": 3085
                    },
                    "start": 3058,
                    "end": 3085
                  },
                  "start": 3052,
                  "end": 3085
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3092,
                    "end": 3095
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3088,
                  "end": 3097
                },
                "definite": false,
                "start": 3052,
                "end": 3097
              }
            ],
            "declare": false,
            "start": 3046,
            "end": 3097
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3108,
                  "end": 3114
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3118,
                      "end": 3119
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3121,
                      "end": 3122
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 3124,
                      "end": 3125
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 3127,
                      "end": 3128
                    },
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 3130,
                      "end": 3131
                    }
                  ],
                  "start": 3117,
                  "end": 3132
                },
                "definite": false,
                "start": 3108,
                "end": 3132
              }
            ],
            "declare": false,
            "start": 3102,
            "end": 3133
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3142,
                  "end": 3145
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fooMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3148,
                      "end": 3154
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3155,
                      "end": 3158
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3148,
                    "end": 3158
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3159,
                      "end": 3162
                    }
                  ],
                  "optional": false,
                  "start": 3148,
                  "end": 3163
                },
                "definite": false,
                "start": 3142,
                "end": 3163
              }
            ],
            "declare": false,
            "start": 3138,
            "end": 3164
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3173,
                "end": 3176
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3180,
                "end": 3184
              },
              "start": 3173,
              "end": 3184
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3196,
                      "end": 3199
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 3202,
                      "end": 3204
                    },
                    "start": 3196,
                    "end": 3204
                  },
                  "directive": null,
                  "start": 3196,
                  "end": 3205
                }
              ],
              "start": 3186,
              "end": 3211
            },
            "alternate": null,
            "start": 3169,
            "end": 3211
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3216,
                  "end": 3222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3223,
                  "end": 3230
                },
                "optional": false,
                "computed": false,
                "start": 3216,
                "end": 3230
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3231,
                      "end": 3232
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3236,
                        "end": 3239
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3240,
                        "end": 3244
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3236,
                      "end": 3244
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3245,
                        "end": 3246
                      }
                    ],
                    "optional": false,
                    "start": 3236,
                    "end": 3247
                  },
                  "id": null,
                  "generator": false,
                  "start": 3231,
                  "end": 3247
                }
              ],
              "optional": false,
              "start": 3216,
              "end": 3248
            },
            "directive": null,
            "start": 3216,
            "end": 3249
          }
        ],
        "start": 3040,
        "end": 3251
      },
      "expression": false,
      "start": 3025,
      "end": 3251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3262,
        "end": 3265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 3366,
                      "end": 3384
                    },
                    "start": 3364,
                    "end": 3384
                  },
                  "start": 3361,
                  "end": 3384
                },
                "init": null,
                "definite": false,
                "start": 3361,
                "end": 3384
              }
            ],
            "declare": false,
            "start": 3357,
            "end": 3385
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3390,
                "end": 3393
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 3396,
                "end": 3398
              },
              "start": 3390,
              "end": 3398
            },
            "directive": null,
            "start": 3390,
            "end": 3399
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3428,
                          "end": 3431
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toLocaleLowerCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3432,
                          "end": 3449
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3428,
                        "end": 3449
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3428,
                      "end": 3451
                    },
                    "directive": null,
                    "start": 3428,
                    "end": 3452
                  }
                ],
                "start": 3418,
                "end": 3458
              },
              "id": null,
              "generator": false,
              "start": 3412,
              "end": 3458
            },
            "start": 3405,
            "end": 3458
          }
        ],
        "start": 3268,
        "end": 3460
      },
      "expression": false,
      "start": 3253,
      "end": 3460
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3460
}
```
