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
__ESTREE_TEST__:PASS:
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
