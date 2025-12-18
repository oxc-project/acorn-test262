__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id1",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "start": 162,
            "end": 170
          }
        ],
        "start": 156,
        "end": 172
      },
      "expression": false,
      "start": 140,
      "end": 172
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 185
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 197
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
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
                            "name": "length",
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
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 222,
                          "end": 223
                        },
                        "start": 208,
                        "end": 223
                      },
                      "start": 201,
                      "end": 223
                    }
                  ],
                  "start": 199,
                  "end": 225
                },
                "expression": false,
                "start": 186,
                "end": 225
              }
            ],
            "optional": false,
            "start": 182,
            "end": 226
          },
          "definite": false,
          "start": 178,
          "end": 226
        }
      ],
      "declare": false,
      "start": 174,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id2",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 403
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "start": 413,
            "end": 421
          }
        ],
        "start": 407,
        "end": 423
      },
      "expression": false,
      "start": 391,
      "end": 423
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 432
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 479
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
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
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
                          "start": 493,
                          "end": 497
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 498,
                          "end": 504
                        },
                        "optional": false,
                        "computed": false,
                        "start": 493,
                        "end": 504
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 507,
                        "end": 508
                      },
                      "start": 493,
                      "end": 508
                    },
                    "directive": null,
                    "start": 493,
                    "end": 509
                  }
                ],
                "start": 483,
                "end": 515
              },
              "expression": false,
              "start": 479,
              "end": 515
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 468,
            "end": 515
          }
        ],
        "start": 433,
        "end": 517
      },
      "abstract": false,
      "declare": false,
      "start": 425,
      "end": 517
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 524
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 530
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 531,
                "end": 532
              }
            ],
            "optional": false,
            "start": 527,
            "end": 533
          },
          "definite": false,
          "start": 523,
          "end": 533
        }
      ],
      "declare": false,
      "start": 519,
      "end": 534
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 540
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 548
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 549,
                "end": 551
              }
            ],
            "start": 543,
            "end": 552
          },
          "definite": false,
          "start": 539,
          "end": 552
        }
      ],
      "declare": false,
      "start": 535,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 555
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 556,
          "end": 562
        },
        "optional": false,
        "computed": false,
        "start": 554,
        "end": 562
      },
      "directive": null,
      "start": 554,
      "end": 563
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "init": {
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
                "name": "ab",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 635
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onetwo",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 643
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ab",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 656
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 661,
                        "end": 664
                      },
                      "start": 654,
                      "end": 664
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 667,
                      "end": 668
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 671,
                      "end": 672
                    },
                    "start": 654,
                    "end": 672
                  },
                  "start": 647,
                  "end": 673
                }
              ],
              "start": 645,
              "end": 676
            },
            "expression": false,
            "start": 623,
            "end": 676
          },
          "definite": false,
          "start": 619,
          "end": 676
        }
      ],
      "declare": false,
      "start": 615,
      "end": 676
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 735
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
          "optional": false,
          "typeAnnotation": null,
          "start": 736,
          "end": 737
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
                  "start": 743,
                  "end": 747
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 754
                },
                "optional": false,
                "computed": false,
                "start": 743,
                "end": 754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "start": 743,
              "end": 758
            },
            "directive": null,
            "start": 743,
            "end": 759
          }
        ],
        "start": 739,
        "end": 761
      },
      "expression": false,
      "start": 725,
      "end": 761
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 769
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 772,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 777
              }
            ],
            "optional": false,
            "start": 772,
            "end": 778
          },
          "definite": false,
          "start": 767,
          "end": 778
        }
      ],
      "declare": false,
      "start": 763,
      "end": 779
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 784,
            "end": 786
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 33,
                "raw": "33",
                "start": 796,
                "end": 798
              }
            ],
            "start": 789,
            "end": 799
          },
          "definite": false,
          "start": 784,
          "end": 799
        }
      ],
      "declare": false,
      "start": 780,
      "end": 800
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z2",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 803
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 804,
          "end": 810
        },
        "optional": false,
        "computed": false,
        "start": 801,
        "end": 810
      },
      "directive": null,
      "start": 801,
      "end": 811
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
            "name": "construct",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 893
          },
          "init": {
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
                "name": "dref",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 909
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dref",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 928
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 33,
                        "raw": "33",
                        "start": 929,
                        "end": 931
                      }
                    ],
                    "start": 920,
                    "end": 932
                  },
                  "start": 913,
                  "end": 933
                }
              ],
              "start": 911,
              "end": 935
            },
            "expression": false,
            "start": 896,
            "end": 935
          },
          "definite": false,
          "start": 884,
          "end": 935
        }
      ],
      "declare": false,
      "start": 880,
      "end": 935
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
            "name": "z3",
            "optional": false,
            "typeAnnotation": null,
            "start": 940,
            "end": 942
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "construct",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 954
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 956
              }
            ],
            "optional": false,
            "start": 945,
            "end": 957
          },
          "definite": false,
          "start": 940,
          "end": 957
        }
      ],
      "declare": false,
      "start": 936,
      "end": 958
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z3",
          "optional": false,
          "typeAnnotation": null,
          "start": 959,
          "end": 961
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 962,
          "end": 968
        },
        "optional": false,
        "computed": false,
        "start": 959,
        "end": 968
      },
      "directive": null,
      "start": 959,
      "end": 969
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1023
          },
          "init": {
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
                "typeAnnotation": null,
                "start": 1035,
                "end": 1036
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
                        "start": 1042,
                        "end": 1046
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "not_length_on_purpose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1047,
                        "end": 1068
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1042,
                      "end": 1068
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1071,
                      "end": 1072
                    },
                    "start": 1042,
                    "end": 1072
                  },
                  "directive": null,
                  "start": 1042,
                  "end": 1073
                }
              ],
              "start": 1038,
              "end": 1075
            },
            "expression": false,
            "start": 1026,
            "end": 1075
          },
          "definite": false,
          "start": 1022,
          "end": 1075
        }
      ],
      "declare": false,
      "start": 1018,
      "end": 1076
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
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1085
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1091
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
              }
            ],
            "optional": false,
            "start": 1088,
            "end": 1094
          },
          "definite": false,
          "start": 1083,
          "end": 1094
        }
      ],
      "declare": false,
      "start": 1079,
      "end": 1095
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1213
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1221
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 1214,
          "end": 1221
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1231
            },
            "directive": null,
            "start": 1227,
            "end": 1232
          }
        ],
        "start": 1223,
        "end": 1234
      },
      "expression": false,
      "start": 1201,
      "end": 1234
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1239
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abc",
            "raw": "'abc'",
            "start": 1240,
            "end": 1245
          },
          {
            "type": "Literal",
            "value": "def",
            "raw": "'def'",
            "start": 1247,
            "end": 1252
          }
        ],
        "optional": false,
        "start": 1236,
        "end": 1253
      },
      "directive": null,
      "start": 1236,
      "end": 1254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1255,
          "end": 1258
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1259,
            "end": 1261
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "'abc'",
            "start": 1263,
            "end": 1268
          },
          {
            "type": "Literal",
            "value": "def",
            "raw": "'def'",
            "start": 1270,
            "end": 1275
          }
        ],
        "optional": false,
        "start": 1255,
        "end": 1276
      },
      "directive": null,
      "start": 1255,
      "end": 1277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 140,
  "end": 1277
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148,
    "range": [
      140,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 174,
    "end": 177,
    "range": [
      174,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 182,
    "end": 185,
    "range": [
      182,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194,
    "range": [
      186,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 208,
    "end": 212,
    "range": [
      208,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 213,
    "end": 219,
    "range": [
      213,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 391,
    "end": 399,
    "range": [
      391,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 413,
    "end": 419,
    "range": [
      413,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 425,
    "end": 430,
    "range": [
      425,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 468,
    "end": 479,
    "range": [
      468,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 493,
    "end": 497,
    "range": [
      493,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 498,
    "end": 504,
    "range": [
      498,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 527,
    "end": 530,
    "range": [
      527,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 535,
    "end": 538,
    "range": [
      535,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 543,
    "end": 546,
    "range": [
      543,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 549,
    "end": 551,
    "range": [
      549,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 556,
    "end": 562,
    "range": [
      556,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631,
    "range": [
      623,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 633,
    "end": 635,
    "range": [
      633,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "onetwo",
    "start": 637,
    "end": 643,
    "range": [
      637,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 647,
    "end": 653,
    "range": [
      647,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 654,
    "end": 656,
    "range": [
      654,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 725,
    "end": 733,
    "range": [
      725,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 743,
    "end": 747,
    "range": [
      743,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 748,
    "end": 754,
    "range": [
      748,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 763,
    "end": 766,
    "range": [
      763,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 767,
    "end": 769,
    "range": [
      767,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 772,
    "end": 775,
    "range": [
      772,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 780,
    "end": 783,
    "range": [
      780,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 784,
    "end": 786,
    "range": [
      784,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 789,
    "end": 792,
    "range": [
      789,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 793,
    "end": 795,
    "range": [
      793,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Numeric",
    "value": "33",
    "start": 796,
    "end": 798,
    "range": [
      796,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 801,
    "end": 803,
    "range": [
      801,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 804,
    "end": 810,
    "range": [
      804,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 880,
    "end": 883,
    "range": [
      880,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "construct",
    "start": 884,
    "end": 893,
    "range": [
      884,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 896,
    "end": 904,
    "range": [
      896,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "dref",
    "start": 905,
    "end": 909,
    "range": [
      905,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 913,
    "end": 919,
    "range": [
      913,
      919
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 920,
    "end": 923,
    "range": [
      920,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "dref",
    "start": 924,
    "end": 928,
    "range": [
      924,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Numeric",
    "value": "33",
    "start": 929,
    "end": 931,
    "range": [
      929,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 936,
    "end": 939,
    "range": [
      936,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 940,
    "end": 942,
    "range": [
      940,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "construct",
    "start": 945,
    "end": 954,
    "range": [
      945,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 959,
    "end": 961,
    "range": [
      959,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 962,
    "end": 968,
    "range": [
      962,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1018,
    "end": 1021,
    "range": [
      1018,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1026,
    "end": 1034,
    "range": [
      1026,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1042,
    "end": 1046,
    "range": [
      1042,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "not_length_on_purpose",
    "start": 1047,
    "end": 1068,
    "range": [
      1047,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1079,
    "end": 1082,
    "range": [
      1079,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 1083,
    "end": 1085,
    "range": [
      1083,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 1088,
    "end": 1091,
    "range": [
      1088,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1201,
    "end": 1209,
    "range": [
      1201,
      1209
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1210,
    "end": 1213,
    "range": [
      1210,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1214,
    "end": 1217,
    "range": [
      1214,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1217,
    "end": 1221,
    "range": [
      1217,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1227,
    "end": 1231,
    "range": [
      1227,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1236,
    "end": 1239,
    "range": [
      1236,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1240,
    "end": 1245,
    "range": [
      1240,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 1247,
    "end": 1252,
    "range": [
      1247,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1255,
    "end": 1258,
    "range": [
      1255,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1259,
    "end": 1261,
    "range": [
      1259,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1263,
    "end": 1268,
    "range": [
      1263,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "String",
    "value": "'def'",
    "start": 1270,
    "end": 1275,
    "range": [
      1270,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  }
]
```
