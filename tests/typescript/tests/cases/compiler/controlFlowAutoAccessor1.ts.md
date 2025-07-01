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
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 18,
            "end": 32
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 47
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
                    },
                    "start": 52,
                    "end": 60
                  },
                  "start": 48,
                  "end": 60
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 77
                        },
                        "optional": false,
                        "computed": false,
                        "start": 68,
                        "end": 77
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 84
                      },
                      "start": 68,
                      "end": 84
                    },
                    "directive": null,
                    "start": 68,
                    "end": 85
                  }
                ],
                "start": 62,
                "end": 89
              },
              "expression": false,
              "start": 47,
              "end": 89
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 36,
            "end": 89
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getTest",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 100
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 116,
                        "end": 120
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 125
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 125
                    },
                    "start": 109,
                    "end": 126
                  }
                ],
                "start": 103,
                "end": 130
              },
              "expression": false,
              "start": 100,
              "end": 130
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 93,
            "end": 130
          }
        ],
        "start": 14,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 132
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 148
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 166
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 153,
            "end": 167
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 182
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 189,
                          "end": 195
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 198,
                          "end": 207
                        }
                      ],
                      "start": 189,
                      "end": 207
                    },
                    "start": 187,
                    "end": 207
                  },
                  "start": 183,
                  "end": 207
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 215,
                          "end": 219
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 224
                        },
                        "optional": false,
                        "computed": false,
                        "start": 215,
                        "end": 224
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 231
                      },
                      "start": 215,
                      "end": 231
                    },
                    "directive": null,
                    "start": 215,
                    "end": 232
                  }
                ],
                "start": 209,
                "end": 236
              },
              "expression": false,
              "start": 182,
              "end": 236
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 171,
            "end": 236
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getTest",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 247
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
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 260,
                        "end": 264
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 269
                      },
                      "optional": false,
                      "computed": false,
                      "start": 260,
                      "end": 269
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 286,
                              "end": 290
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 291,
                              "end": 295
                            },
                            "optional": false,
                            "computed": false,
                            "start": 286,
                            "end": 295
                          },
                          "start": 279,
                          "end": 296
                        }
                      ],
                      "start": 271,
                      "end": 302
                    },
                    "alternate": null,
                    "start": 256,
                    "end": 302
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 314,
                      "end": 315
                    },
                    "start": 307,
                    "end": 316
                  }
                ],
                "start": 250,
                "end": 320
              },
              "expression": false,
              "start": 247,
              "end": 320
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 240,
            "end": 320
          }
        ],
        "start": 149,
        "end": 322
      },
      "abstract": false,
      "declare": false,
      "start": 134,
      "end": 322
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example3",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 395
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 414
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 400,
            "end": 415
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 430
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    },
                    "start": 432,
                    "end": 440
                  },
                  "start": 431,
                  "end": 440
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 448,
                          "end": 452
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 458
                        },
                        "optional": false,
                        "computed": false,
                        "start": 448,
                        "end": 458
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 462
                      },
                      "start": 448,
                      "end": 462
                    },
                    "directive": null,
                    "start": 448,
                    "end": 463
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 474
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 477,
                        "end": 478
                      },
                      "start": 473,
                      "end": 478
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 488,
                                "end": 492
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 493,
                                "end": 498
                              },
                              "optional": false,
                              "computed": false,
                              "start": 488,
                              "end": 498
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 501,
                              "end": 505
                            },
                            "start": 488,
                            "end": 505
                          },
                          "directive": null,
                          "start": 488,
                          "end": 506
                        }
                      ],
                      "start": 480,
                      "end": 512
                    },
                    "alternate": null,
                    "start": 469,
                    "end": 512
                  }
                ],
                "start": 442,
                "end": 516
              },
              "expression": false,
              "start": 430,
              "end": 516
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 419,
            "end": 516
          }
        ],
        "start": 396,
        "end": 518
      },
      "abstract": false,
      "declare": false,
      "start": 381,
      "end": 518
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              },
              "start": 533,
              "end": 541
            },
            "start": 532,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 532,
          "end": 541
        }
      ],
      "declare": true,
      "start": 520,
      "end": 542
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example4",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 557
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 583
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 562,
            "end": 584
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 600,
                      "end": 604
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 610
                    },
                    "optional": false,
                    "computed": false,
                    "start": 600,
                    "end": 610
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 613,
                    "end": 614
                  },
                  "start": 600,
                  "end": 614
                },
                "directive": null,
                "start": 600,
                "end": 615
              },
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 624,
                    "end": 625
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 628,
                    "end": 629
                  },
                  "start": 624,
                  "end": 629
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 639,
                            "end": 643
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 644,
                            "end": 649
                          },
                          "optional": false,
                          "computed": false,
                          "start": 639,
                          "end": 649
                        },
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 652,
                          "end": 656
                        },
                        "start": 639,
                        "end": 656
                      },
                      "directive": null,
                      "start": 639,
                      "end": 657
                    }
                  ],
                  "start": 631,
                  "end": 663
                },
                "alternate": null,
                "start": 620,
                "end": 663
              }
            ],
            "start": 587,
            "end": 667
          }
        ],
        "start": 558,
        "end": 669
      },
      "abstract": false,
      "declare": false,
      "start": 543,
      "end": 669
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example5",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 685
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 690,
            "end": 712
          }
        ],
        "start": 686,
        "end": 723
      },
      "abstract": false,
      "declare": false,
      "start": 671,
      "end": 723
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Example5",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 732
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 738
          },
          "optional": false,
          "computed": false,
          "start": 724,
          "end": 738
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 741,
          "end": 744
        },
        "start": 724,
        "end": 744
      },
      "directive": null,
      "start": 724,
      "end": 745
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Example5",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 754
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 760
          },
          "optional": false,
          "computed": false,
          "start": 746,
          "end": 760
        },
        "start": 746,
        "end": 762
      },
      "directive": null,
      "start": 746,
      "end": 763
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 763
}
```
