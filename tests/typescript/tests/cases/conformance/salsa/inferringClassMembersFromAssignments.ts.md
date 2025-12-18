__ESTREE_TEST__:AST:
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 14,
              "end": 25
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 46
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 47,
                          "end": 53
                        },
                        "optional": false,
                        "computed": false,
                        "start": 42,
                        "end": 53
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 42,
                      "end": 55
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
                                "start": 71,
                                "end": 75
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inConstructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 76,
                                "end": 89
                              },
                              "optional": false,
                              "computed": false,
                              "start": 71,
                              "end": 89
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 92,
                              "end": 93
                            },
                            "start": 71,
                            "end": 93
                          },
                          "directive": null,
                          "start": 71,
                          "end": 94
                        }
                      ],
                      "start": 57,
                      "end": 104
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 132,
                                "end": 136
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inConstructor",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 137,
                                "end": 150
                              },
                              "optional": false,
                              "computed": false,
                              "start": 132,
                              "end": 150
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 153,
                              "end": 161
                            },
                            "start": 132,
                            "end": 161
                          },
                          "directive": null,
                          "start": 132,
                          "end": 161
                        }
                      ],
                      "start": 118,
                      "end": 171
                    },
                    "start": 38,
                    "end": 171
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 180,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inMultiple",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 195
                        },
                        "optional": false,
                        "computed": false,
                        "start": 180,
                        "end": 195
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 198,
                        "end": 199
                      },
                      "start": 180,
                      "end": 199
                    },
                    "directive": null,
                    "start": 180,
                    "end": 200
                  }
                ],
                "start": 28,
                "end": 206
              },
              "expression": false,
              "start": 25,
              "end": 206
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 206
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 217
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 238
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 245
                        },
                        "optional": false,
                        "computed": false,
                        "start": 234,
                        "end": 245
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 234,
                      "end": 247
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
                                "start": 263,
                                "end": 267
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 268,
                                "end": 276
                              },
                              "optional": false,
                              "computed": false,
                              "start": 263,
                              "end": 276
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 279,
                              "end": 280
                            },
                            "start": 263,
                            "end": 280
                          },
                          "directive": null,
                          "start": 263,
                          "end": 281
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 294,
                                "end": 298
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inMethodNullable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 299,
                                "end": 315
                              },
                              "optional": false,
                              "computed": false,
                              "start": 294,
                              "end": 315
                            },
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 318,
                              "end": 322
                            },
                            "start": 294,
                            "end": 322
                          },
                          "directive": null,
                          "start": 294,
                          "end": 323
                        }
                      ],
                      "start": 249,
                      "end": 333
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 361,
                                "end": 365
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 366,
                                "end": 374
                              },
                              "optional": false,
                              "computed": false,
                              "start": 361,
                              "end": 374
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 377,
                              "end": 385
                            },
                            "start": 361,
                            "end": 385
                          },
                          "directive": null,
                          "start": 361,
                          "end": 385
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 398,
                                "end": 402
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inMethodNullable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 403,
                                "end": 419
                              },
                              "optional": false,
                              "computed": false,
                              "start": 398,
                              "end": 419
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 422,
                              "end": 431
                            },
                            "start": 398,
                            "end": 431
                          },
                          "directive": null,
                          "start": 398,
                          "end": 432
                        }
                      ],
                      "start": 347,
                      "end": 442
                    },
                    "start": 230,
                    "end": 442
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 451,
                          "end": 455
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inMultiple",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 456,
                          "end": 466
                        },
                        "optional": false,
                        "computed": false,
                        "start": 451,
                        "end": 466
                      },
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 469,
                        "end": 477
                      },
                      "start": 451,
                      "end": 477
                    },
                    "directive": null,
                    "start": 451,
                    "end": 478
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 487,
                          "end": 491
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inMultipleMethods",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 492,
                          "end": 509
                        },
                        "optional": false,
                        "computed": false,
                        "start": 487,
                        "end": 509
                      },
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "\"string\"",
                        "start": 512,
                        "end": 520
                      },
                      "start": 487,
                      "end": 520
                    },
                    "directive": null,
                    "start": 487,
                    "end": 521
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
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 541
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
                                "type": "IfStatement",
                                "test": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Math",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 568,
                                      "end": 572
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "random",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 573,
                                      "end": 579
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 568,
                                    "end": 579
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 568,
                                  "end": 581
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
                                            "start": 601,
                                            "end": 605
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "inNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 606,
                                            "end": 627
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 601,
                                          "end": 627
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 630,
                                          "end": 631
                                        },
                                        "start": 601,
                                        "end": 631
                                      },
                                      "directive": null,
                                      "start": 601,
                                      "end": 632
                                    }
                                  ],
                                  "start": 583,
                                  "end": 646
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
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 682,
                                            "end": 686
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "inNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 687,
                                            "end": 708
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 682,
                                          "end": 708
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "string",
                                          "raw": "\"string\"",
                                          "start": 711,
                                          "end": 719
                                        },
                                        "start": 682,
                                        "end": 719
                                      },
                                      "directive": null,
                                      "start": 682,
                                      "end": 719
                                    }
                                  ],
                                  "start": 664,
                                  "end": 733
                                },
                                "start": 564,
                                "end": 733
                              }
                            ],
                            "start": 550,
                            "end": 743
                          },
                          "id": null,
                          "generator": false,
                          "start": 544,
                          "end": 743
                        },
                        "definite": false,
                        "start": 535,
                        "end": 743
                      }
                    ],
                    "declare": false,
                    "start": 531,
                    "end": 744
                  }
                ],
                "start": 220,
                "end": 750
              },
              "expression": false,
              "start": 217,
              "end": 750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 211,
            "end": 750
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 758
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 779
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 780,
                          "end": 786
                        },
                        "optional": false,
                        "computed": false,
                        "start": 775,
                        "end": 786
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 775,
                      "end": 788
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
                                "start": 804,
                                "end": 808
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inGetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 809,
                                "end": 817
                              },
                              "optional": false,
                              "computed": false,
                              "start": 804,
                              "end": 817
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 820,
                              "end": 821
                            },
                            "start": 804,
                            "end": 821
                          },
                          "directive": null,
                          "start": 804,
                          "end": 822
                        }
                      ],
                      "start": 790,
                      "end": 832
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 860,
                                "end": 864
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inGetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 865,
                                "end": 873
                              },
                              "optional": false,
                              "computed": false,
                              "start": 860,
                              "end": 873
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 876,
                              "end": 884
                            },
                            "start": 860,
                            "end": 884
                          },
                          "directive": null,
                          "start": 860,
                          "end": 884
                        }
                      ],
                      "start": 846,
                      "end": 894
                    },
                    "start": 771,
                    "end": 894
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 903,
                          "end": 907
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inMultiple",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 908,
                          "end": 918
                        },
                        "optional": false,
                        "computed": false,
                        "start": 903,
                        "end": 918
                      },
                      "right": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 921,
                        "end": 926
                      },
                      "start": 903,
                      "end": 926
                    },
                    "directive": null,
                    "start": 903,
                    "end": 927
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 936,
                          "end": 940
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inMultipleMethods",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 941,
                          "end": 958
                        },
                        "optional": false,
                        "computed": false,
                        "start": 936,
                        "end": 958
                      },
                      "right": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 961,
                        "end": 966
                      },
                      "start": 936,
                      "end": 966
                    },
                    "directive": null,
                    "start": 936,
                    "end": 967
                  }
                ],
                "start": 761,
                "end": 973
              },
              "expression": false,
              "start": 758,
              "end": 973
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 755,
            "end": 973
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 981
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 998,
                          "end": 1002
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1003,
                          "end": 1009
                        },
                        "optional": false,
                        "computed": false,
                        "start": 998,
                        "end": 1009
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 998,
                      "end": 1011
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
                                "start": 1027,
                                "end": 1031
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inSetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1032,
                                "end": 1040
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1027,
                              "end": 1040
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1043,
                              "end": 1044
                            },
                            "start": 1027,
                            "end": 1044
                          },
                          "directive": null,
                          "start": 1027,
                          "end": 1045
                        }
                      ],
                      "start": 1013,
                      "end": 1055
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1083,
                                "end": 1087
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inSetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1088,
                                "end": 1096
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1083,
                              "end": 1096
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 1099,
                              "end": 1107
                            },
                            "start": 1083,
                            "end": 1107
                          },
                          "directive": null,
                          "start": 1083,
                          "end": 1107
                        }
                      ],
                      "start": 1069,
                      "end": 1117
                    },
                    "start": 994,
                    "end": 1117
                  }
                ],
                "start": 984,
                "end": 1123
              },
              "expression": false,
              "start": 981,
              "end": 1123
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 978,
            "end": 1123
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1132
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1155,
                          "end": 1159
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1160,
                          "end": 1166
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1155,
                        "end": 1166
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1155,
                      "end": 1168
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
                                "start": 1184,
                                "end": 1188
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1189,
                                "end": 1210
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1184,
                              "end": 1210
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1213,
                              "end": 1214
                            },
                            "start": 1184,
                            "end": 1214
                          },
                          "directive": null,
                          "start": 1184,
                          "end": 1215
                        }
                      ],
                      "start": 1170,
                      "end": 1225
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1253,
                                "end": 1257
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1258,
                                "end": 1279
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1253,
                              "end": 1279
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 1282,
                              "end": 1290
                            },
                            "start": 1253,
                            "end": 1290
                          },
                          "directive": null,
                          "start": 1253,
                          "end": 1290
                        }
                      ],
                      "start": 1239,
                      "end": 1300
                    },
                    "start": 1151,
                    "end": 1300
                  }
                ],
                "start": 1141,
                "end": 1306
              },
              "id": null,
              "generator": false,
              "start": 1135,
              "end": 1306
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1128,
            "end": 1306
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1318,
              "end": 1324
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1341,
                          "end": 1345
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1346,
                          "end": 1352
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1341,
                        "end": 1352
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1341,
                      "end": 1354
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
                                "start": 1370,
                                "end": 1374
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1375,
                                "end": 1389
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1370,
                              "end": 1389
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1392,
                              "end": 1393
                            },
                            "start": 1370,
                            "end": 1393
                          },
                          "directive": null,
                          "start": 1370,
                          "end": 1394
                        }
                      ],
                      "start": 1356,
                      "end": 1404
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1432,
                                "end": 1436
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticMethod",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1437,
                                "end": 1451
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1432,
                              "end": 1451
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 1454,
                              "end": 1462
                            },
                            "start": 1432,
                            "end": 1462
                          },
                          "directive": null,
                          "start": 1432,
                          "end": 1462
                        }
                      ],
                      "start": 1418,
                      "end": 1472
                    },
                    "start": 1337,
                    "end": 1472
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
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1486,
                          "end": 1492
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
                                "type": "IfStatement",
                                "test": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Math",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1519,
                                      "end": 1523
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "random",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1524,
                                      "end": 1530
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1519,
                                    "end": 1530
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 1519,
                                  "end": 1532
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
                                            "start": 1552,
                                            "end": 1556
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "inStaticNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1557,
                                            "end": 1584
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1552,
                                          "end": 1584
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 1587,
                                          "end": 1588
                                        },
                                        "start": 1552,
                                        "end": 1588
                                      },
                                      "directive": null,
                                      "start": 1552,
                                      "end": 1589
                                    }
                                  ],
                                  "start": 1534,
                                  "end": 1603
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
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 1639,
                                            "end": 1643
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "inStaticNestedArrowFunction",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1644,
                                            "end": 1671
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1639,
                                          "end": 1671
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": "string",
                                          "raw": "\"string\"",
                                          "start": 1674,
                                          "end": 1682
                                        },
                                        "start": 1639,
                                        "end": 1682
                                      },
                                      "directive": null,
                                      "start": 1639,
                                      "end": 1682
                                    }
                                  ],
                                  "start": 1621,
                                  "end": 1696
                                },
                                "start": 1515,
                                "end": 1696
                              }
                            ],
                            "start": 1501,
                            "end": 1706
                          },
                          "id": null,
                          "generator": false,
                          "start": 1495,
                          "end": 1706
                        },
                        "definite": false,
                        "start": 1486,
                        "end": 1706
                      }
                    ],
                    "declare": false,
                    "start": 1482,
                    "end": 1707
                  }
                ],
                "start": 1327,
                "end": 1713
              },
              "expression": false,
              "start": 1324,
              "end": 1713
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1311,
            "end": 1713
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1725,
              "end": 1728
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1745,
                          "end": 1749
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1750,
                          "end": 1756
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1745,
                        "end": 1756
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1745,
                      "end": 1758
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
                                "start": 1774,
                                "end": 1778
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticGetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1779,
                                "end": 1793
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1774,
                              "end": 1793
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1796,
                              "end": 1797
                            },
                            "start": 1774,
                            "end": 1797
                          },
                          "directive": null,
                          "start": 1774,
                          "end": 1798
                        }
                      ],
                      "start": 1760,
                      "end": 1808
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1836,
                                "end": 1840
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticGetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1841,
                                "end": 1855
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1836,
                              "end": 1855
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 1858,
                              "end": 1866
                            },
                            "start": 1836,
                            "end": 1866
                          },
                          "directive": null,
                          "start": 1836,
                          "end": 1866
                        }
                      ],
                      "start": 1822,
                      "end": 1876
                    },
                    "start": 1741,
                    "end": 1876
                  }
                ],
                "start": 1731,
                "end": 1882
              },
              "expression": false,
              "start": 1728,
              "end": 1882
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1718,
            "end": 1882
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1894,
              "end": 1897
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1914,
                          "end": 1918
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1919,
                          "end": 1925
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1914,
                        "end": 1925
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1914,
                      "end": 1927
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
                                "start": 1943,
                                "end": 1947
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticSetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1948,
                                "end": 1962
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1943,
                              "end": 1962
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1965,
                              "end": 1966
                            },
                            "start": 1943,
                            "end": 1966
                          },
                          "directive": null,
                          "start": 1943,
                          "end": 1967
                        }
                      ],
                      "start": 1929,
                      "end": 1977
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2005,
                                "end": 2009
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticSetter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2010,
                                "end": 2024
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2005,
                              "end": 2024
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 2027,
                              "end": 2035
                            },
                            "start": 2005,
                            "end": 2035
                          },
                          "directive": null,
                          "start": 2005,
                          "end": 2035
                        }
                      ],
                      "start": 1991,
                      "end": 2045
                    },
                    "start": 1910,
                    "end": 2045
                  }
                ],
                "start": 1900,
                "end": 2051
              },
              "expression": false,
              "start": 1897,
              "end": 2051
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1887,
            "end": 2051
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2063,
              "end": 2067
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2090,
                          "end": 2094
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2095,
                          "end": 2101
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2090,
                        "end": 2101
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2090,
                      "end": 2103
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
                                "start": 2119,
                                "end": 2123
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2124,
                                "end": 2151
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2119,
                              "end": 2151
                            },
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 2154,
                              "end": 2155
                            },
                            "start": 2119,
                            "end": 2155
                          },
                          "directive": null,
                          "start": 2119,
                          "end": 2156
                        }
                      ],
                      "start": 2105,
                      "end": 2166
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2194,
                                "end": 2198
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inStaticPropertyDeclaration",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2199,
                                "end": 2226
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2194,
                              "end": 2226
                            },
                            "right": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 2229,
                              "end": 2237
                            },
                            "start": 2194,
                            "end": 2237
                          },
                          "directive": null,
                          "start": 2194,
                          "end": 2237
                        }
                      ],
                      "start": 2180,
                      "end": 2247
                    },
                    "start": 2086,
                    "end": 2247
                  }
                ],
                "start": 2076,
                "end": 2253
              },
              "id": null,
              "generator": false,
              "start": 2070,
              "end": 2253
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2056,
            "end": 2253
          }
        ],
        "start": 8,
        "end": 2255
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 2255
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2256
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 14,
    "end": 25,
    "range": [
      14,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 38,
    "end": 40,
    "range": [
      38,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 71,
    "end": 75,
    "range": [
      71,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "inConstructor",
    "start": 76,
    "end": 89,
    "range": [
      76,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 113,
    "end": 117,
    "range": [
      113,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "inConstructor",
    "start": 137,
    "end": 150,
    "range": [
      137,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 153,
    "end": 161,
    "range": [
      153,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 180,
    "end": 184,
    "range": [
      180,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultiple",
    "start": 185,
    "end": 195,
    "range": [
      185,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 230,
    "end": 232,
    "range": [
      230,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 234,
    "end": 238,
    "range": [
      234,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 239,
    "end": 245,
    "range": [
      239,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 263,
    "end": 267,
    "range": [
      263,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "inMethod",
    "start": 268,
    "end": 276,
    "range": [
      268,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 294,
    "end": 298,
    "range": [
      294,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "inMethodNullable",
    "start": 299,
    "end": 315,
    "range": [
      299,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 318,
    "end": 322,
    "range": [
      318,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 342,
    "end": 346,
    "range": [
      342,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 361,
    "end": 365,
    "range": [
      361,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "inMethod",
    "start": 366,
    "end": 374,
    "range": [
      366,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 377,
    "end": 385,
    "range": [
      377,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 398,
    "end": 402,
    "range": [
      398,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "inMethodNullable",
    "start": 403,
    "end": 419,
    "range": [
      403,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 422,
    "end": 431,
    "range": [
      422,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 451,
    "end": 455,
    "range": [
      451,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultiple",
    "start": 456,
    "end": 466,
    "range": [
      456,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 469,
    "end": 477,
    "range": [
      469,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 487,
    "end": 491,
    "range": [
      487,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultipleMethods",
    "start": 492,
    "end": 509,
    "range": [
      492,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 512,
    "end": 520,
    "range": [
      512,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 531,
    "end": 534,
    "range": [
      531,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 547,
    "end": 549,
    "range": [
      547,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 564,
    "end": 566,
    "range": [
      564,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 568,
    "end": 572,
    "range": [
      568,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 573,
    "end": 579,
    "range": [
      573,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 601,
    "end": 605,
    "range": [
      601,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "inNestedArrowFunction",
    "start": 606,
    "end": 627,
    "range": [
      606,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 659,
    "end": 663,
    "range": [
      659,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 682,
    "end": 686,
    "range": [
      682,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "inNestedArrowFunction",
    "start": 687,
    "end": 708,
    "range": [
      687,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 711,
    "end": 719,
    "range": [
      711,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 755,
    "end": 758,
    "range": [
      755,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 775,
    "end": 779,
    "range": [
      775,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 780,
    "end": 786,
    "range": [
      780,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 804,
    "end": 808,
    "range": [
      804,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "inGetter",
    "start": 809,
    "end": 817,
    "range": [
      809,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 841,
    "end": 845,
    "range": [
      841,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 860,
    "end": 864,
    "range": [
      860,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "inGetter",
    "start": 865,
    "end": 873,
    "range": [
      865,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 876,
    "end": 884,
    "range": [
      876,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 903,
    "end": 907,
    "range": [
      903,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultiple",
    "start": 908,
    "end": 918,
    "range": [
      908,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 921,
    "end": 926,
    "range": [
      921,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 936,
    "end": 940,
    "range": [
      936,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultipleMethods",
    "start": 941,
    "end": 958,
    "range": [
      941,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 961,
    "end": 966,
    "range": [
      961,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 978,
    "end": 981,
    "range": [
      978,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 994,
    "end": 996,
    "range": [
      994,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 998,
    "end": 1002,
    "range": [
      998,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1027,
    "end": 1031,
    "range": [
      1027,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "inSetter",
    "start": 1032,
    "end": 1040,
    "range": [
      1032,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1064,
    "end": 1068,
    "range": [
      1064,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1083,
    "end": 1087,
    "range": [
      1083,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "inSetter",
    "start": 1088,
    "end": 1096,
    "range": [
      1088,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1099,
    "end": 1107,
    "range": [
      1099,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1128,
    "end": 1132,
    "range": [
      1128,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1138,
    "end": 1140,
    "range": [
      1138,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1151,
    "end": 1153,
    "range": [
      1151,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1155,
    "end": 1159,
    "range": [
      1155,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1160,
    "end": 1166,
    "range": [
      1160,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1184,
    "end": 1188,
    "range": [
      1184,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "inPropertyDeclaration",
    "start": 1189,
    "end": 1210,
    "range": [
      1189,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1234,
    "end": 1238,
    "range": [
      1234,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1253,
    "end": 1257,
    "range": [
      1253,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "inPropertyDeclaration",
    "start": 1258,
    "end": 1279,
    "range": [
      1258,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1282,
    "end": 1290,
    "range": [
      1282,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1311,
    "end": 1317,
    "range": [
      1311,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1318,
    "end": 1324,
    "range": [
      1318,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1337,
    "end": 1339,
    "range": [
      1337,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1341,
    "end": 1345,
    "range": [
      1341,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1346,
    "end": 1352,
    "range": [
      1346,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1370,
    "end": 1374,
    "range": [
      1370,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticMethod",
    "start": 1375,
    "end": 1389,
    "range": [
      1375,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1413,
    "end": 1417,
    "range": [
      1413,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1432,
    "end": 1436,
    "range": [
      1432,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticMethod",
    "start": 1437,
    "end": 1451,
    "range": [
      1437,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1454,
    "end": 1462,
    "range": [
      1454,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1482,
    "end": 1485,
    "range": [
      1482,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1486,
    "end": 1492,
    "range": [
      1486,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1498,
    "end": 1500,
    "range": [
      1498,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1515,
    "end": 1517,
    "range": [
      1515,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1519,
    "end": 1523,
    "range": [
      1519,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1524,
    "end": 1530,
    "range": [
      1524,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1552,
    "end": 1556,
    "range": [
      1552,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticNestedArrowFunction",
    "start": 1557,
    "end": 1584,
    "range": [
      1557,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1616,
    "end": 1620,
    "range": [
      1616,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1639,
    "end": 1643,
    "range": [
      1639,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticNestedArrowFunction",
    "start": 1644,
    "end": 1671,
    "range": [
      1644,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1674,
    "end": 1682,
    "range": [
      1674,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1718,
    "end": 1724,
    "range": [
      1718,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1725,
    "end": 1728,
    "range": [
      1725,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1741,
    "end": 1743,
    "range": [
      1741,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1745,
    "end": 1749,
    "range": [
      1745,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1750,
    "end": 1756,
    "range": [
      1750,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1774,
    "end": 1778,
    "range": [
      1774,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticGetter",
    "start": 1779,
    "end": 1793,
    "range": [
      1779,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1817,
    "end": 1821,
    "range": [
      1817,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1836,
    "end": 1840,
    "range": [
      1836,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticGetter",
    "start": 1841,
    "end": 1855,
    "range": [
      1841,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1858,
    "end": 1866,
    "range": [
      1858,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1887,
    "end": 1893,
    "range": [
      1887,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1894,
    "end": 1897,
    "range": [
      1894,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1910,
    "end": 1912,
    "range": [
      1910,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1914,
    "end": 1918,
    "range": [
      1914,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1919,
    "end": 1925,
    "range": [
      1919,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1943,
    "end": 1947,
    "range": [
      1943,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticSetter",
    "start": 1948,
    "end": 1962,
    "range": [
      1948,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1986,
    "end": 1990,
    "range": [
      1986,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2005,
    "end": 2009,
    "range": [
      2005,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticSetter",
    "start": 2010,
    "end": 2024,
    "range": [
      2010,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2027,
    "end": 2035,
    "range": [
      2027,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2056,
    "end": 2062,
    "range": [
      2056,
      2062
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2063,
    "end": 2067,
    "range": [
      2063,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2073,
    "end": 2075,
    "range": [
      2073,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2086,
    "end": 2088,
    "range": [
      2086,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2090,
    "end": 2094,
    "range": [
      2090,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 2095,
    "end": 2101,
    "range": [
      2095,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2119,
    "end": 2123,
    "range": [
      2119,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticPropertyDeclaration",
    "start": 2124,
    "end": 2151,
    "range": [
      2124,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2175,
    "end": 2179,
    "range": [
      2175,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2194,
    "end": 2198,
    "range": [
      2194,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticPropertyDeclaration",
    "start": 2199,
    "end": 2226,
    "range": [
      2199,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2229,
    "end": 2237,
    "range": [
      2229,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  }
                ],
                "start": 38,
                "end": 53
              },
              "start": 36,
              "end": 53
            },
            "start": 22,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 22,
          "end": 53
        }
      ],
      "declare": false,
      "start": 18,
      "end": 54
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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 73
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 91
            },
            "optional": false,
            "computed": false,
            "start": 76,
            "end": 91
          },
          "definite": false,
          "start": 59,
          "end": 91
        }
      ],
      "declare": false,
      "start": 55,
      "end": 92
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 125,
                    "end": 131
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 134,
                    "end": 140
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 143,
                    "end": 152
                  }
                ],
                "start": 125,
                "end": 152
              },
              "start": 123,
              "end": 152
            },
            "start": 98,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 152
        }
      ],
      "declare": false,
      "start": 94,
      "end": 153
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 197
            },
            "optional": false,
            "computed": false,
            "start": 187,
            "end": 197
          },
          "definite": false,
          "start": 159,
          "end": 197
        }
      ],
      "declare": false,
      "start": 155,
      "end": 198
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 228
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 241
            },
            "optional": false,
            "computed": false,
            "start": 231,
            "end": 241
          },
          "definite": false,
          "start": 203,
          "end": 241
        }
      ],
      "declare": false,
      "start": 199,
      "end": 242
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 272
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 285
            },
            "optional": false,
            "computed": false,
            "start": 275,
            "end": 285
          },
          "definite": false,
          "start": 247,
          "end": 285
        }
      ],
      "declare": false,
      "start": 243,
      "end": 286
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 316
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inPropertyDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 342
            },
            "optional": false,
            "computed": false,
            "start": 319,
            "end": 342
          },
          "definite": false,
          "start": 291,
          "end": 342
        }
      ],
      "declare": false,
      "start": 287,
      "end": 343
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 373
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 377
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inNestedArrowFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 399
            },
            "optional": false,
            "computed": false,
            "start": 376,
            "end": 399
          },
          "definite": false,
          "start": 348,
          "end": 399
        }
      ],
      "declare": false,
      "start": 344,
      "end": 399
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
            "name": "stringOrNumberOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 439,
                    "end": 445
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 448,
                    "end": 455
                  }
                ],
                "start": 430,
                "end": 455
              },
              "start": 428,
              "end": 455
            },
            "start": 405,
            "end": 455
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 455
        }
      ],
      "declare": false,
      "start": 401,
      "end": 456
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
            "name": "number",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 470,
                "end": 476
              },
              "start": 468,
              "end": 476
            },
            "start": 462,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 462,
          "end": 476
        }
      ],
      "declare": false,
      "start": 458,
      "end": 477
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
            "name": "number",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 488
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inMultiple",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 503
            },
            "optional": false,
            "computed": false,
            "start": 491,
            "end": 503
          },
          "definite": false,
          "start": 482,
          "end": 503
        }
      ],
      "declare": false,
      "start": 478,
      "end": 504
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
            "name": "stringOrBooleanOrUndefined",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 547,
                    "end": 554
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 557,
                    "end": 566
                  }
                ],
                "start": 538,
                "end": 566
              },
              "start": 536,
              "end": 566
            },
            "start": 509,
            "end": 566
          },
          "init": null,
          "definite": false,
          "start": 509,
          "end": 566
        }
      ],
      "declare": false,
      "start": 505,
      "end": 567
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
            "name": "stringOrBooleanOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 598
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 602
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inMultipleMethods",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 620
            },
            "optional": false,
            "computed": false,
            "start": 601,
            "end": 620
          },
          "definite": false,
          "start": 572,
          "end": 620
        }
      ],
      "declare": false,
      "start": 568,
      "end": 621
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
            "name": "any",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
              },
              "start": 629,
              "end": 634
            },
            "start": 626,
            "end": 634
          },
          "init": null,
          "definite": false,
          "start": 626,
          "end": 634
        }
      ],
      "declare": false,
      "start": 622,
      "end": 635
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
            "name": "any",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 643
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 647
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inMethodNullable",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 664
            },
            "optional": false,
            "computed": false,
            "start": 646,
            "end": 664
          },
          "definite": false,
          "start": 640,
          "end": 664
        }
      ],
      "declare": false,
      "start": 636,
      "end": 665
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 697
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 700,
              "end": 701
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 716
            },
            "optional": false,
            "computed": false,
            "start": 700,
            "end": 716
          },
          "definite": false,
          "start": 672,
          "end": 716
        }
      ],
      "declare": false,
      "start": 668,
      "end": 717
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 747
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 751
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inStaticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 766
            },
            "optional": false,
            "computed": false,
            "start": 750,
            "end": 766
          },
          "definite": false,
          "start": 722,
          "end": 766
        }
      ],
      "declare": false,
      "start": 718,
      "end": 767
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 772,
            "end": 797
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inStaticSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 816
            },
            "optional": false,
            "computed": false,
            "start": 800,
            "end": 816
          },
          "definite": false,
          "start": 772,
          "end": 816
        }
      ],
      "declare": false,
      "start": 768,
      "end": 817
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 847
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inStaticPropertyDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 852,
              "end": 879
            },
            "optional": false,
            "computed": false,
            "start": 850,
            "end": 879
          },
          "definite": false,
          "start": 822,
          "end": 879
        }
      ],
      "declare": false,
      "start": 818,
      "end": 880
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
            "name": "stringOrNumberOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 885,
            "end": 910
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 914
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inStaticNestedArrowFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 942
            },
            "optional": false,
            "computed": false,
            "start": 913,
            "end": 942
          },
          "definite": false,
          "start": 885,
          "end": 942
        }
      ],
      "declare": false,
      "start": 881,
      "end": 943
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 943
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 22,
    "end": 36,
    "range": [
      22,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 59,
    "end": 73,
    "range": [
      59,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "inConstructor",
    "start": 78,
    "end": 91,
    "range": [
      78,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 98,
    "end": 123,
    "range": [
      98,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 143,
    "end": 152,
    "range": [
      143,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158,
    "range": [
      155,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 159,
    "end": 184,
    "range": [
      159,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "inMethod",
    "start": 189,
    "end": 197,
    "range": [
      189,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202,
    "range": [
      199,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 203,
    "end": 228,
    "range": [
      203,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "inGetter",
    "start": 233,
    "end": 241,
    "range": [
      233,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 247,
    "end": 272,
    "range": [
      247,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "inSetter",
    "start": 277,
    "end": 285,
    "range": [
      277,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290,
    "range": [
      287,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 291,
    "end": 316,
    "range": [
      291,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "inPropertyDeclaration",
    "start": 321,
    "end": 342,
    "range": [
      321,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 348,
    "end": 373,
    "range": [
      348,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "inNestedArrowFunction",
    "start": 378,
    "end": 399,
    "range": [
      378,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404,
    "range": [
      401,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrBoolean",
    "start": 405,
    "end": 428,
    "range": [
      405,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 439,
    "end": 445,
    "range": [
      439,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 448,
    "end": 455,
    "range": [
      448,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461,
    "range": [
      458,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 462,
    "end": 468,
    "range": [
      462,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 470,
    "end": 476,
    "range": [
      470,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 478,
    "end": 481,
    "range": [
      478,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultiple",
    "start": 493,
    "end": 503,
    "range": [
      493,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrBooleanOrUndefined",
    "start": 509,
    "end": 535,
    "range": [
      509,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 538,
    "end": 544,
    "range": [
      538,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 547,
    "end": 554,
    "range": [
      547,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 557,
    "end": 566,
    "range": [
      557,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrBooleanOrUndefined",
    "start": 572,
    "end": 598,
    "range": [
      572,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "inMultipleMethods",
    "start": 603,
    "end": 620,
    "range": [
      603,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 622,
    "end": 625,
    "range": [
      622,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 626,
    "end": 629,
    "range": [
      626,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 636,
    "end": 639,
    "range": [
      636,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 640,
    "end": 643,
    "range": [
      640,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "inMethodNullable",
    "start": 648,
    "end": 664,
    "range": [
      648,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 672,
    "end": 697,
    "range": [
      672,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticMethod",
    "start": 702,
    "end": 716,
    "range": [
      702,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 718,
    "end": 721,
    "range": [
      718,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 722,
    "end": 747,
    "range": [
      722,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticGetter",
    "start": 752,
    "end": 766,
    "range": [
      752,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 768,
    "end": 771,
    "range": [
      768,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 772,
    "end": 797,
    "range": [
      772,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticSetter",
    "start": 802,
    "end": 816,
    "range": [
      802,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 818,
    "end": 821,
    "range": [
      818,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 822,
    "end": 847,
    "range": [
      822,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticPropertyDeclaration",
    "start": 852,
    "end": 879,
    "range": [
      852,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 881,
    "end": 884,
    "range": [
      881,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "stringOrNumberOrUndefined",
    "start": 885,
    "end": 910,
    "range": [
      885,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "inStaticNestedArrowFunction",
    "start": 915,
    "end": 942,
    "range": [
      915,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  }
]
```
