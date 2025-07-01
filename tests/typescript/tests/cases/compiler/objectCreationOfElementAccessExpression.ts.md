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
        "name": "Food",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "amount",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 17,
            "end": 40
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
              "start": 45,
              "end": 56
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 70,
                        "end": 76
                      },
                      "start": 68,
                      "end": 76
                    },
                    "start": 64,
                    "end": 76
                  },
                  "readonly": false,
                  "static": false,
                  "start": 57,
                  "end": 76
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
                          "start": 88,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 99
                        },
                        "optional": false,
                        "computed": false,
                        "start": 88,
                        "end": 99
                      },
                      "right": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 102,
                        "end": 105
                      },
                      "start": 88,
                      "end": 105
                    },
                    "directive": null,
                    "start": 88,
                    "end": 106
                  }
                ],
                "start": 78,
                "end": 112
              },
              "expression": false,
              "start": 56,
              "end": 112
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 112
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "eat",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
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
                  "name": "amountToEat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    },
                    "start": 139,
                    "end": 147
                  },
                  "start": 128,
                  "end": 147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 150,
                  "end": 157
                },
                "start": 148,
                "end": 157
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 179
                        },
                        "optional": false,
                        "computed": false,
                        "start": 168,
                        "end": 179
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "amountToEat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 194
                      },
                      "start": 168,
                      "end": 194
                    },
                    "directive": null,
                    "start": 168,
                    "end": 195
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 208,
                          "end": 212
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "amount",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 219
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 219
                      },
                      "operator": "<=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 223,
                        "end": 224
                      },
                      "start": 208,
                      "end": 224
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
                                "start": 240,
                                "end": 244
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "amount",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 251
                              },
                              "optional": false,
                              "computed": false,
                              "start": 240,
                              "end": 251
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 254,
                              "end": 255
                            },
                            "start": 240,
                            "end": 255
                          },
                          "directive": null,
                          "start": 240,
                          "end": 256
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 276,
                            "end": 281
                          },
                          "start": 269,
                          "end": 282
                        }
                      ],
                      "start": 226,
                      "end": 292
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 327,
                            "end": 331
                          },
                          "start": 320,
                          "end": 332
                        }
                      ],
                      "start": 306,
                      "end": 342
                    },
                    "start": 204,
                    "end": 342
                  }
                ],
                "start": 158,
                "end": 348
              },
              "expression": false,
              "start": 127,
              "end": 348
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 117,
            "end": 348
          }
        ],
        "start": 11,
        "end": 350
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 350
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 368
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 381
      },
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
              "start": 388,
              "end": 399
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 406,
                      "end": 412
                    },
                    "start": 404,
                    "end": 412
                  },
                  "start": 400,
                  "end": 412
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 429,
                        "end": 435
                      },
                      "start": 427,
                      "end": 435
                    },
                    "start": 421,
                    "end": 435
                  },
                  "readonly": false,
                  "static": false,
                  "start": 414,
                  "end": 435
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
                        "type": "Super",
                        "start": 447,
                        "end": 452
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 457
                        }
                      ],
                      "optional": false,
                      "start": 447,
                      "end": 458
                    },
                    "directive": null,
                    "start": 447,
                    "end": 459
                  }
                ],
                "start": 437,
                "end": 465
              },
              "expression": false,
              "start": 399,
              "end": 465
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 388,
            "end": 465
          }
        ],
        "start": 382,
        "end": 467
      },
      "abstract": false,
      "declare": false,
      "start": 351,
      "end": 467
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IceCream",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 482
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 502
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDairyFree",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 528
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 530,
                "end": 537
              },
              "start": 528,
              "end": 537
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 509,
            "end": 538
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
              "start": 543,
              "end": 554
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 570,
                        "end": 576
                      },
                      "start": 568,
                      "end": 576
                    },
                    "start": 562,
                    "end": 576
                  },
                  "readonly": false,
                  "static": false,
                  "start": 555,
                  "end": 576
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
                        "type": "Super",
                        "start": 588,
                        "end": 593
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Ice Cream",
                          "raw": "\"Ice Cream\"",
                          "start": 594,
                          "end": 605
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flavor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 607,
                          "end": 613
                        }
                      ],
                      "optional": false,
                      "start": 588,
                      "end": 614
                    },
                    "directive": null,
                    "start": 588,
                    "end": 615
                  }
                ],
                "start": 578,
                "end": 621
              },
              "expression": false,
              "start": 554,
              "end": 621
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 543,
            "end": 621
          }
        ],
        "start": 503,
        "end": 623
      },
      "abstract": false,
      "declare": false,
      "start": 468,
      "end": 623
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cookie",
        "optional": false,
        "typeAnnotation": null,
        "start": 630,
        "end": 636
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MonsterFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 656
      },
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
              "start": 663,
              "end": 674
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "flavor",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      },
                      "start": 688,
                      "end": 696
                    },
                    "start": 682,
                    "end": 696
                  },
                  "readonly": false,
                  "static": false,
                  "start": 675,
                  "end": 696
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isGlutenFree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 719,
                        "end": 726
                      },
                      "start": 717,
                      "end": 726
                    },
                    "start": 705,
                    "end": 726
                  },
                  "readonly": false,
                  "static": false,
                  "start": 698,
                  "end": 726
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
                        "type": "Super",
                        "start": 738,
                        "end": 743
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Cookie",
                          "raw": "\"Cookie\"",
                          "start": 744,
                          "end": 752
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flavor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 754,
                          "end": 760
                        }
                      ],
                      "optional": false,
                      "start": 738,
                      "end": 761
                    },
                    "directive": null,
                    "start": 738,
                    "end": 762
                  }
                ],
                "start": 728,
                "end": 768
              },
              "expression": false,
              "start": 674,
              "end": 768
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 663,
            "end": 768
          }
        ],
        "start": 657,
        "end": 770
      },
      "abstract": false,
      "declare": false,
      "start": 624,
      "end": 770
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 784
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Food",
        "optional": false,
        "typeAnnotation": null,
        "start": 793,
        "end": 797
      },
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
              "start": 804,
              "end": 815
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 822,
                      "end": 828
                    },
                    "start": 820,
                    "end": 828
                  },
                  "start": 816,
                  "end": 828
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 849,
                        "end": 855
                      },
                      "start": 847,
                      "end": 855
                    },
                    "start": 837,
                    "end": 855
                  },
                  "readonly": false,
                  "static": false,
                  "start": 830,
                  "end": 855
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
                        "type": "Super",
                        "start": 867,
                        "end": 872
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 873,
                          "end": 877
                        }
                      ],
                      "optional": false,
                      "start": 867,
                      "end": 878
                    },
                    "directive": null,
                    "start": 867,
                    "end": 879
                  }
                ],
                "start": 857,
                "end": 885
              },
              "expression": false,
              "start": 815,
              "end": 885
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 804,
            "end": 885
          }
        ],
        "start": 798,
        "end": 887
      },
      "abstract": false,
      "declare": false,
      "start": 771,
      "end": 887
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpensiveOrganicDogFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 894,
        "end": 917
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 926,
        "end": 933
      },
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
              "start": 940,
              "end": 951
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 971,
                        "end": 977
                      },
                      "start": 969,
                      "end": 977
                    },
                    "start": 959,
                    "end": 977
                  },
                  "readonly": false,
                  "static": false,
                  "start": 952,
                  "end": 977
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
                        "type": "Super",
                        "start": 989,
                        "end": 994
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Origen",
                          "raw": "\"Origen\"",
                          "start": 995,
                          "end": 1003
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1005,
                          "end": 1015
                        }
                      ],
                      "optional": false,
                      "start": 989,
                      "end": 1016
                    },
                    "directive": null,
                    "start": 989,
                    "end": 1017
                  }
                ],
                "start": 979,
                "end": 1023
              },
              "expression": false,
              "start": 951,
              "end": 1023
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 940,
            "end": 1023
          }
        ],
        "start": 934,
        "end": 1025
      },
      "abstract": false,
      "declare": false,
      "start": 888,
      "end": 1025
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpensiveOrganicCatFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1055
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "PetFood",
        "optional": false,
        "typeAnnotation": null,
        "start": 1064,
        "end": 1071
      },
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
              "start": 1078,
              "end": 1089
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "whereToBuy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1109,
                        "end": 1115
                      },
                      "start": 1107,
                      "end": 1115
                    },
                    "start": 1097,
                    "end": 1115
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1090,
                  "end": 1115
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "containsFish",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1138,
                        "end": 1145
                      },
                      "start": 1136,
                      "end": 1145
                    },
                    "start": 1124,
                    "end": 1145
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1117,
                  "end": 1145
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
                        "type": "Super",
                        "start": 1157,
                        "end": 1162
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Nature's Logic",
                          "raw": "\"Nature's Logic\"",
                          "start": 1163,
                          "end": 1179
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "whereToBuy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1181,
                          "end": 1191
                        }
                      ],
                      "optional": false,
                      "start": 1157,
                      "end": 1192
                    },
                    "directive": null,
                    "start": 1157,
                    "end": 1193
                  }
                ],
                "start": 1147,
                "end": 1199
              },
              "expression": false,
              "start": 1089,
              "end": 1199
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1078,
            "end": 1199
          }
        ],
        "start": 1072,
        "end": 1201
      },
      "abstract": false,
      "declare": false,
      "start": 1026,
      "end": 1201
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Slug",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1212
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1213,
        "end": 1245
      },
      "abstract": false,
      "declare": false,
      "start": 1202,
      "end": 1245
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
            "name": "foods",
            "optional": false,
            "typeAnnotation": null,
            "start": 1349,
            "end": 1354
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetFood",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1368
              },
              "property": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1381
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Mint chocolate chip",
                        "raw": "'Mint chocolate chip'",
                        "start": 1382,
                        "end": 1403
                      }
                    ],
                    "start": 1369,
                    "end": 1404
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1407,
                      "end": 1413
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Chocolate chip",
                        "raw": "'Chocolate chip'",
                        "start": 1414,
                        "end": 1430
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1432,
                        "end": 1437
                      }
                    ],
                    "optional": false,
                    "start": 1407,
                    "end": 1438
                  },
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1445,
                      "end": 1451
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Peanut butter",
                        "raw": "'Peanut butter'",
                        "start": 1452,
                        "end": 1467
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1469,
                        "end": 1473
                      }
                    ],
                    "start": 1441,
                    "end": 1474
                  }
                ],
                "start": 1369,
                "end": 1474
              },
              "optional": false,
              "computed": true,
              "start": 1361,
              "end": 1475
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1357,
            "end": 1475
          },
          "definite": false,
          "start": 1349,
          "end": 1475
        }
      ],
      "declare": false,
      "start": 1345,
      "end": 1476
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
            "name": "foods2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MonsterFood",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1489,
                    "end": 1500
                  },
                  "typeArguments": null,
                  "start": 1489,
                  "end": 1500
                },
                "start": 1489,
                "end": 1502
              },
              "start": 1487,
              "end": 1502
            },
            "start": 1481,
            "end": 1502
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "PetFood",
                "optional": false,
                "typeAnnotation": null,
                "start": 1509,
                "end": 1516
              },
              "property": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IceCream",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1529
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Mint chocolate chip",
                        "raw": "'Mint chocolate chip'",
                        "start": 1530,
                        "end": 1551
                      }
                    ],
                    "start": 1517,
                    "end": 1552
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1555,
                      "end": 1561
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Chocolate chip",
                        "raw": "'Chocolate chip'",
                        "start": 1562,
                        "end": 1578
                      },
                      {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1580,
                        "end": 1585
                      }
                    ],
                    "optional": false,
                    "start": 1555,
                    "end": 1586
                  },
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cookie",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1593,
                      "end": 1599
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Peanut butter",
                        "raw": "'Peanut butter'",
                        "start": 1600,
                        "end": 1615
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1617,
                        "end": 1621
                      }
                    ],
                    "start": 1589,
                    "end": 1622
                  }
                ],
                "start": 1517,
                "end": 1622
              },
              "optional": false,
              "computed": true,
              "start": 1509,
              "end": 1623
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1505,
            "end": 1623
          },
          "definite": false,
          "start": 1481,
          "end": 1623
        }
      ],
      "declare": false,
      "start": 1477,
      "end": 1624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1624
}
```
