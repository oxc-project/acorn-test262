__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 140,
  "end": 1277,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 140,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "id1",
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
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 156,
        "end": 172,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 162,
            "end": 170,
            "argument": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 227,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 182,
            "end": 226,
            "callee": {
              "type": "Identifier",
              "start": 182,
              "end": 185,
              "decorators": [],
              "name": "id1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 186,
                "end": 225,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 196,
                    "end": 197,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 199,
                  "end": 225,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 201,
                      "end": 223,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 208,
                        "end": 223,
                        "left": {
                          "type": "MemberExpression",
                          "start": 208,
                          "end": 219,
                          "object": {
                            "type": "ThisExpression",
                            "start": 208,
                            "end": 212
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 219,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 223,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "expression": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 391,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 403,
        "decorators": [],
        "name": "id2",
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
          "start": 404,
          "end": 405,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 407,
        "end": 423,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 413,
            "end": 421,
            "argument": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 425,
      "end": 517,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 432,
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
        "start": 433,
        "end": 517,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 468,
            "end": 515,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 479,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 479,
              "end": 515,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 480,
                  "end": 481,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 483,
                "end": 515,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 493,
                    "end": 509,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 493,
                      "end": 508,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 493,
                        "end": 504,
                        "object": {
                          "type": "ThisExpression",
                          "start": 493,
                          "end": 497
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 498,
                          "end": 504,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 507,
                        "end": 508,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 534,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 533,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 524,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 527,
            "end": 533,
            "callee": {
              "type": "Identifier",
              "start": 527,
              "end": 530,
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 531,
                "end": 532,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 535,
      "end": 553,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 539,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 540,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 543,
            "end": 552,
            "callee": {
              "type": "Identifier",
              "start": 547,
              "end": 548,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 549,
                "end": 551,
                "value": 12,
                "raw": "12"
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
      "start": 554,
      "end": 563,
      "expression": {
        "type": "MemberExpression",
        "start": 554,
        "end": 562,
        "object": {
          "type": "Identifier",
          "start": 554,
          "end": 555,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 556,
          "end": 562,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 615,
      "end": 676,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 619,
          "end": 676,
          "id": {
            "type": "Identifier",
            "start": 619,
            "end": 620,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 623,
            "end": 676,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 635,
                "decorators": [],
                "name": "ab",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 637,
                "end": 643,
                "decorators": [],
                "name": "onetwo",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 645,
              "end": 676,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 647,
                  "end": 673,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 654,
                    "end": 672,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 654,
                      "end": 664,
                      "left": {
                        "type": "Identifier",
                        "start": 654,
                        "end": 656,
                        "decorators": [],
                        "name": "ab",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 661,
                        "end": 664,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 667,
                      "end": 668,
                      "value": 3,
                      "raw": "3"
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 671,
                      "end": 672,
                      "value": 4,
                      "raw": "4"
                    }
                  }
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
      "type": "FunctionDeclaration",
      "start": 725,
      "end": 761,
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 735,
        "decorators": [],
        "name": "D",
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
          "start": 736,
          "end": 737,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 739,
        "end": 761,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 743,
            "end": 759,
            "expression": {
              "type": "AssignmentExpression",
              "start": 743,
              "end": 758,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 743,
                "end": 754,
                "object": {
                  "type": "ThisExpression",
                  "start": 743,
                  "end": 747
                },
                "property": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 754,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 763,
      "end": 779,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 778,
          "id": {
            "type": "Identifier",
            "start": 767,
            "end": 769,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 772,
            "end": 778,
            "callee": {
              "type": "Identifier",
              "start": 772,
              "end": 775,
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 780,
      "end": 800,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 784,
          "end": 799,
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 786,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 789,
            "end": 799,
            "callee": {
              "type": "Identifier",
              "start": 793,
              "end": 795,
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 796,
                "end": 798,
                "value": 33,
                "raw": "33"
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
      "start": 801,
      "end": 811,
      "expression": {
        "type": "MemberExpression",
        "start": 801,
        "end": 810,
        "object": {
          "type": "Identifier",
          "start": 801,
          "end": 803,
          "decorators": [],
          "name": "z2",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 804,
          "end": 810,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 880,
      "end": 935,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 884,
          "end": 935,
          "id": {
            "type": "Identifier",
            "start": 884,
            "end": 893,
            "decorators": [],
            "name": "construct",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 896,
            "end": 935,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 905,
                "end": 909,
                "decorators": [],
                "name": "dref",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 911,
              "end": 935,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 913,
                  "end": 933,
                  "argument": {
                    "type": "NewExpression",
                    "start": 920,
                    "end": 932,
                    "callee": {
                      "type": "Identifier",
                      "start": 924,
                      "end": 928,
                      "decorators": [],
                      "name": "dref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 929,
                        "end": 931,
                        "value": 33,
                        "raw": "33"
                      }
                    ]
                  }
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
      "type": "VariableDeclaration",
      "start": 936,
      "end": 958,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 940,
          "end": 957,
          "id": {
            "type": "Identifier",
            "start": 940,
            "end": 942,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 945,
            "end": 957,
            "callee": {
              "type": "Identifier",
              "start": 945,
              "end": 954,
              "decorators": [],
              "name": "construct",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 955,
                "end": 956,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 959,
      "end": 969,
      "expression": {
        "type": "MemberExpression",
        "start": 959,
        "end": 968,
        "object": {
          "type": "Identifier",
          "start": 959,
          "end": 961,
          "decorators": [],
          "name": "z3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 962,
          "end": 968,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1018,
      "end": 1076,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1022,
          "end": 1075,
          "id": {
            "type": "Identifier",
            "start": 1022,
            "end": 1023,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1026,
            "end": 1075,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1035,
                "end": 1036,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1038,
              "end": 1075,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1042,
                  "end": 1073,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1042,
                    "end": 1072,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1042,
                      "end": 1068,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1042,
                        "end": 1046
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1047,
                        "end": 1068,
                        "decorators": [],
                        "name": "not_length_on_purpose",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1072,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
      "type": "VariableDeclaration",
      "start": 1079,
      "end": 1095,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1083,
          "end": 1094,
          "id": {
            "type": "Identifier",
            "start": 1083,
            "end": 1085,
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1088,
            "end": 1094,
            "callee": {
              "type": "Identifier",
              "start": 1088,
              "end": 1091,
              "decorators": [],
              "name": "id2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1201,
      "end": 1234,
      "id": {
        "type": "Identifier",
        "start": 1210,
        "end": 1213,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 1214,
          "end": 1221,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 1217,
            "end": 1221,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1223,
        "end": 1234,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1227,
            "end": 1232,
            "expression": {
              "type": "Identifier",
              "start": 1227,
              "end": 1231,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1236,
      "end": 1254,
      "expression": {
        "type": "CallExpression",
        "start": 1236,
        "end": 1253,
        "callee": {
          "type": "Identifier",
          "start": 1236,
          "end": 1239,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1240,
            "end": 1245,
            "value": "abc",
            "raw": "'abc'"
          },
          {
            "type": "Literal",
            "start": 1247,
            "end": 1252,
            "value": "def",
            "raw": "'def'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1255,
      "end": 1277,
      "expression": {
        "type": "CallExpression",
        "start": 1255,
        "end": 1276,
        "callee": {
          "type": "Identifier",
          "start": 1255,
          "end": 1258,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1259,
            "end": 1261,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 1263,
            "end": 1268,
            "value": "abc",
            "raw": "'abc'"
          },
          {
            "type": "Literal",
            "start": 1270,
            "end": 1275,
            "value": "def",
            "raw": "'def'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
