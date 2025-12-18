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
        "name": "AbstractClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 28
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
              "start": 35,
              "end": 46
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    },
                    "start": 50,
                    "end": 58
                  },
                  "start": 47,
                  "end": 58
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 80
                      },
                      "typeArguments": null,
                      "start": 67,
                      "end": 80
                    },
                    "start": 65,
                    "end": 80
                  },
                  "start": 60,
                  "end": 80
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 103
                        },
                        "optional": false,
                        "computed": false,
                        "start": 92,
                        "end": 103
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parseInt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 104,
                            "end": 112
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "str",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 113,
                              "end": 116
                            }
                          ],
                          "optional": false,
                          "start": 104,
                          "end": 117
                        }
                      ],
                      "optional": false,
                      "start": 92,
                      "end": 118
                    },
                    "directive": null,
                    "start": 92,
                    "end": 119
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
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 135
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 143,
                                "end": 147
                              },
                              "optional": false,
                              "computed": false,
                              "start": 138,
                              "end": 147
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 148,
                              "end": 159
                            },
                            "optional": false,
                            "computed": false,
                            "start": 138,
                            "end": 159
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 138,
                          "end": 161
                        },
                        "definite": false,
                        "start": 132,
                        "end": 161
                      }
                    ],
                    "declare": false,
                    "start": 128,
                    "end": 162
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 180
                      },
                      "prefix": true,
                      "start": 176,
                      "end": 180
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
                                "start": 196,
                                "end": 200
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 205
                              },
                              "optional": false,
                              "computed": false,
                              "start": 196,
                              "end": 205
                            },
                            "right": {
                              "type": "Literal",
                              "value": "Hello World",
                              "raw": "\"Hello World\"",
                              "start": 208,
                              "end": 221
                            },
                            "start": 196,
                            "end": 221
                          },
                          "directive": null,
                          "start": 196,
                          "end": 222
                        }
                      ],
                      "start": 182,
                      "end": 232
                    },
                    "alternate": null,
                    "start": 172,
                    "end": 232
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 241,
                          "end": 245
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 248
                        },
                        "optional": false,
                        "computed": false,
                        "start": 241,
                        "end": 248
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 252
                        }
                      ],
                      "optional": false,
                      "start": 241,
                      "end": 253
                    },
                    "directive": null,
                    "start": 241,
                    "end": 254
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
                          "name": "innerFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 327
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
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 357,
                                    "end": 361
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 362,
                                    "end": 366
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 357,
                                  "end": 366
                                },
                                "start": 350,
                                "end": 367
                              }
                            ],
                            "start": 336,
                            "end": 377
                          },
                          "id": null,
                          "generator": false,
                          "start": 330,
                          "end": 377
                        },
                        "definite": false,
                        "start": 314,
                        "end": 377
                      }
                    ],
                    "declare": false,
                    "start": 308,
                    "end": 377
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
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 437,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 445
                        },
                        "optional": false,
                        "computed": false,
                        "start": 437,
                        "end": 445
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 446,
                            "end": 451
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 452,
                            "end": 456
                          },
                          "optional": false,
                          "computed": false,
                          "start": 446,
                          "end": 456
                        }
                      ],
                      "optional": false,
                      "start": 437,
                      "end": 457
                    },
                    "directive": null,
                    "start": 437,
                    "end": 458
                  }
                ],
                "start": 82,
                "end": 464
              },
              "expression": false,
              "start": 46,
              "end": 464
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 35,
            "end": 464
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 485,
                "end": 491
              },
              "start": 483,
              "end": 491
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 470,
            "end": 492
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 514,
                        "end": 520
                      },
                      "start": 512,
                      "end": 520
                    },
                    "start": 511,
                    "end": 520
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 525,
                    "end": 529
                  },
                  "start": 522,
                  "end": 529
                },
                "start": 510,
                "end": 529
              },
              "start": 508,
              "end": 529
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 497,
            "end": 530
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 551
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 557,
                      "end": 563
                    },
                    "start": 555,
                    "end": 563
                  },
                  "start": 552,
                  "end": 563
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 566,
                  "end": 570
                },
                "start": 564,
                "end": 570
              },
              "body": null,
              "expression": false,
              "start": 551,
              "end": 571
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 536,
            "end": 571
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 582
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 585,
                "end": 589
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 594
              },
              "optional": false,
              "computed": false,
              "start": 585,
              "end": 594
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 577,
            "end": 595
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 602
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 611,
                  "end": 615
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 620
                },
                "optional": false,
                "computed": false,
                "start": 611,
                "end": 620
              },
              "id": null,
              "generator": false,
              "start": 605,
              "end": 620
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 600,
            "end": 621
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 634
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 647,
                          "end": 651
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 652,
                          "end": 656
                        },
                        "optional": false,
                        "computed": false,
                        "start": 647,
                        "end": 656
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 659,
                            "end": 663
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 664,
                            "end": 668
                          },
                          "optional": false,
                          "computed": false,
                          "start": 659,
                          "end": 668
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "!",
                          "raw": "\"!\"",
                          "start": 671,
                          "end": 674
                        },
                        "start": 659,
                        "end": 674
                      },
                      "start": 647,
                      "end": 674
                    },
                    "directive": null,
                    "start": 647,
                    "end": 675
                  }
                ],
                "start": 637,
                "end": 681
              },
              "expression": false,
              "start": 634,
              "end": 681
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 627,
            "end": 681
          }
        ],
        "start": 29,
        "end": 683
      },
      "abstract": true,
      "declare": false,
      "start": 0,
      "end": 683
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 700,
        "end": 720
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 742
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
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 751
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 758,
                      "end": 764
                    },
                    "start": 756,
                    "end": 764
                  },
                  "start": 755,
                  "end": 764
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 769,
                "end": 771
              },
              "id": null,
              "generator": false,
              "start": 754,
              "end": 771
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 749,
            "end": 772
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
              "start": 778,
              "end": 789
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    },
                    "start": 793,
                    "end": 801
                  },
                  "start": 790,
                  "end": 801
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 823
                      },
                      "typeArguments": null,
                      "start": 810,
                      "end": 823
                    },
                    "start": 808,
                    "end": 823
                  },
                  "start": 803,
                  "end": 823
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedAbstractClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 837,
                        "end": 857
                      },
                      "typeArguments": null,
                      "start": 837,
                      "end": 857
                    },
                    "start": 835,
                    "end": 857
                  },
                  "start": 825,
                  "end": 857
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
                        "start": 869,
                        "end": 874
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 878
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 880,
                          "end": 885
                        }
                      ],
                      "optional": false,
                      "start": 869,
                      "end": 886
                    },
                    "directive": null,
                    "start": 869,
                    "end": 887
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 962,
                          "end": 966
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 967,
                          "end": 969
                        },
                        "optional": false,
                        "computed": false,
                        "start": 962,
                        "end": 969
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 970,
                                "end": 974
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 975,
                                "end": 979
                              },
                              "optional": false,
                              "computed": false,
                              "start": 970,
                              "end": 979
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 980,
                              "end": 991
                            },
                            "optional": false,
                            "computed": false,
                            "start": 970,
                            "end": 991
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 970,
                          "end": 993
                        }
                      ],
                      "optional": false,
                      "start": 962,
                      "end": 994
                    },
                    "directive": null,
                    "start": 962,
                    "end": 995
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1005,
                          "end": 1009
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1010,
                          "end": 1016
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1005,
                        "end": 1016
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1017,
                          "end": 1018
                        }
                      ],
                      "optional": false,
                      "start": 1005,
                      "end": 1019
                    },
                    "directive": null,
                    "start": 1005,
                    "end": 1020
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
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1080,
                          "end": 1085
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1086,
                          "end": 1088
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1080,
                        "end": 1088
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1089,
                            "end": 1094
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1099
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1089,
                          "end": 1099
                        }
                      ],
                      "optional": false,
                      "start": 1080,
                      "end": 1100
                    },
                    "directive": null,
                    "start": 1080,
                    "end": 1101
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
                          "name": "yetAnother",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1121,
                          "end": 1123
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1110,
                        "end": 1123
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "yetAnother",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1124,
                            "end": 1134
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1135,
                            "end": 1139
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1124,
                          "end": 1139
                        }
                      ],
                      "optional": false,
                      "start": 1110,
                      "end": 1140
                    },
                    "directive": null,
                    "start": 1110,
                    "end": 1141
                  }
                ],
                "start": 859,
                "end": 1147
              },
              "expression": false,
              "start": 789,
              "end": 1147
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 778,
            "end": 1147
          }
        ],
        "start": 743,
        "end": 1149
      },
      "abstract": true,
      "declare": false,
      "start": 685,
      "end": 1149
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Implementation",
        "optional": false,
        "typeAnnotation": null,
        "start": 1157,
        "end": 1171
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1200
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1211
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 1214,
              "end": 1216
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1207,
            "end": 1217
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 1222,
              "end": 1224
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1231,
                      "end": 1237
                    },
                    "start": 1229,
                    "end": 1237
                  },
                  "start": 1228,
                  "end": 1237
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1242,
                "end": 1244
              },
              "id": null,
              "generator": false,
              "start": 1227,
              "end": 1244
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1222,
            "end": 1245
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
              "start": 1251,
              "end": 1262
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1268,
                      "end": 1274
                    },
                    "start": 1266,
                    "end": 1274
                  },
                  "start": 1263,
                  "end": 1274
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1283,
                        "end": 1296
                      },
                      "typeArguments": null,
                      "start": 1283,
                      "end": 1296
                    },
                    "start": 1281,
                    "end": 1296
                  },
                  "start": 1276,
                  "end": 1296
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DerivedAbstractClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1310,
                        "end": 1330
                      },
                      "typeArguments": null,
                      "start": 1310,
                      "end": 1330
                    },
                    "start": 1308,
                    "end": 1330
                  },
                  "start": 1298,
                  "end": 1330
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
                        "start": 1342,
                        "end": 1347
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1348,
                          "end": 1351
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1353,
                          "end": 1358
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "yetAnother",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1360,
                          "end": 1370
                        }
                      ],
                      "optional": false,
                      "start": 1342,
                      "end": 1371
                    },
                    "directive": null,
                    "start": 1342,
                    "end": 1372
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1381,
                          "end": 1385
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1386,
                          "end": 1388
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1381,
                        "end": 1388
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1389,
                            "end": 1393
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1394,
                            "end": 1398
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1389,
                          "end": 1398
                        }
                      ],
                      "optional": false,
                      "start": 1381,
                      "end": 1399
                    },
                    "directive": null,
                    "start": 1381,
                    "end": 1400
                  }
                ],
                "start": 1332,
                "end": 1406
              },
              "expression": false,
              "start": 1262,
              "end": 1406
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1251,
            "end": 1406
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
              "start": 1412,
              "end": 1418
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
                      "start": 1422,
                      "end": 1428
                    },
                    "start": 1420,
                    "end": 1428
                  },
                  "start": 1419,
                  "end": 1428
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1440,
                          "end": 1444
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1445,
                          "end": 1447
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1440,
                        "end": 1447
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1448,
                              "end": 1452
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1453,
                              "end": 1457
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1448,
                            "end": 1457
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1460,
                            "end": 1461
                          },
                          "start": 1448,
                          "end": 1461
                        }
                      ],
                      "optional": false,
                      "start": 1440,
                      "end": 1462
                    },
                    "directive": null,
                    "start": 1440,
                    "end": 1463
                  }
                ],
                "start": 1430,
                "end": 1469
              },
              "expression": false,
              "start": 1418,
              "end": 1469
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1412,
            "end": 1469
          }
        ],
        "start": 1201,
        "end": 1471
      },
      "abstract": false,
      "declare": false,
      "start": 1151,
      "end": 1471
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 1479,
        "end": 1483
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
              "start": 1490,
              "end": 1501
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1505,
                        "end": 1518
                      },
                      "typeArguments": null,
                      "start": 1505,
                      "end": 1518
                    },
                    "start": 1503,
                    "end": 1518
                  },
                  "start": 1502,
                  "end": 1518
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1530,
                        "end": 1531
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1536
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1530,
                      "end": 1536
                    },
                    "directive": null,
                    "start": 1530,
                    "end": 1537
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1546,
                          "end": 1547
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1548,
                          "end": 1550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1546,
                        "end": 1550
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 1551,
                          "end": 1555
                        }
                      ],
                      "optional": false,
                      "start": 1546,
                      "end": 1556
                    },
                    "directive": null,
                    "start": 1546,
                    "end": 1557
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1566,
                          "end": 1567
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1568,
                          "end": 1574
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1566,
                        "end": 1574
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 1575,
                          "end": 1577
                        }
                      ],
                      "optional": false,
                      "start": 1566,
                      "end": 1578
                    },
                    "directive": null,
                    "start": 1566,
                    "end": 1579
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1588,
                          "end": 1589
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1590,
                          "end": 1597
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1588,
                        "end": 1597
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1588,
                      "end": 1599
                    },
                    "directive": null,
                    "start": 1588,
                    "end": 1600
                  }
                ],
                "start": 1520,
                "end": 1606
              },
              "expression": false,
              "start": 1501,
              "end": 1606
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1490,
            "end": 1606
          }
        ],
        "start": 1484,
        "end": 1608
      },
      "abstract": false,
      "declare": false,
      "start": 1473,
      "end": 1608
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1625,
        "end": 1627
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1643,
              "end": 1644
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1646,
                "end": 1652
              },
              "start": 1644,
              "end": 1652
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1634,
            "end": 1653
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1667,
              "end": 1668
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1670,
                "end": 1676
              },
              "start": 1668,
              "end": 1676
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1658,
            "end": 1677
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
              "start": 1683,
              "end": 1694
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1711,
                          "end": 1715
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1718,
                          "end": 1722
                        },
                        "definite": false,
                        "start": 1711,
                        "end": 1722
                      }
                    ],
                    "declare": false,
                    "start": 1707,
                    "end": 1723
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1759,
                                "end": 1760
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1759,
                                "end": 1760
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 1759,
                              "end": 1760
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1762,
                                "end": 1763
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1765,
                                "end": 1767
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1762,
                              "end": 1767
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1757,
                          "end": 1769
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1772,
                          "end": 1776
                        },
                        "definite": false,
                        "start": 1757,
                        "end": 1776
                      }
                    ],
                    "declare": false,
                    "start": 1753,
                    "end": 1777
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1805,
                              "end": 1806
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1805,
                              "end": 1806
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1805,
                            "end": 1806
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1808,
                              "end": 1809
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1811,
                              "end": 1813
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1808,
                            "end": 1813
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "value": "y",
                              "raw": "\"y\"",
                              "start": 1815,
                              "end": 1818
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1820,
                              "end": 1822
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1815,
                            "end": 1822
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1803,
                        "end": 1824
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 1827,
                        "end": 1831
                      },
                      "start": 1803,
                      "end": 1831
                    },
                    "directive": null,
                    "start": 1802,
                    "end": 1833
                  }
                ],
                "start": 1697,
                "end": 1848
              },
              "expression": false,
              "start": 1694,
              "end": 1848
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1683,
            "end": 1848
          }
        ],
        "start": 1628,
        "end": 1850
      },
      "abstract": true,
      "declare": false,
      "start": 1610,
      "end": 1850
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1858,
        "end": 1860
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1867,
              "end": 1868
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1870,
                "end": 1876
              },
              "start": 1868,
              "end": 1876
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1867,
            "end": 1877
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1882,
              "end": 1883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1885,
                "end": 1891
              },
              "start": 1883,
              "end": 1891
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1882,
            "end": 1892
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
              "start": 1898,
              "end": 1909
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1926,
                          "end": 1930
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1933,
                          "end": 1937
                        },
                        "definite": false,
                        "start": 1926,
                        "end": 1937
                      }
                    ],
                    "declare": false,
                    "start": 1922,
                    "end": 1938
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1974,
                                "end": 1975
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1974,
                                "end": 1975
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 1974,
                              "end": 1975
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1977,
                                "end": 1978
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1980,
                                "end": 1982
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1977,
                              "end": 1982
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1972,
                          "end": 1984
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1987,
                          "end": 1991
                        },
                        "definite": false,
                        "start": 1972,
                        "end": 1991
                      }
                    ],
                    "declare": false,
                    "start": 1968,
                    "end": 1992
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2017,
                              "end": 2018
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2017,
                              "end": 2018
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 2017,
                            "end": 2018
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2020,
                              "end": 2021
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2023,
                              "end": 2025
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2020,
                            "end": 2025
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "value": "y",
                              "raw": "\"y\"",
                              "start": 2027,
                              "end": 2030
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2032,
                              "end": 2034
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 2027,
                            "end": 2034
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2015,
                        "end": 2036
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2039,
                        "end": 2043
                      },
                      "start": 2015,
                      "end": 2043
                    },
                    "directive": null,
                    "start": 2014,
                    "end": 2045
                  }
                ],
                "start": 1912,
                "end": 2057
              },
              "expression": false,
              "start": 1909,
              "end": 2057
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1898,
            "end": 2057
          }
        ],
        "start": 1861,
        "end": 2059
      },
      "abstract": false,
      "declare": false,
      "start": 1852,
      "end": 2059
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2059
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9,
    "end": 14,
    "range": [
      9,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractClass",
    "start": 15,
    "end": 28,
    "range": [
      15,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 35,
    "end": 46,
    "range": [
      35,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58,
    "range": [
      52,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 60,
    "end": 65,
    "range": [
      60,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractClass",
    "start": 67,
    "end": 80,
    "range": [
      67,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 92,
    "end": 96,
    "range": [
      92,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "parseInt",
    "start": 104,
    "end": 112,
    "range": [
      104,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 138,
    "end": 142,
    "range": [
      138,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 143,
    "end": 147,
    "range": [
      143,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 148,
    "end": 159,
    "range": [
      148,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 196,
    "end": 200,
    "range": [
      196,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 201,
    "end": 205,
    "range": [
      201,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "String",
    "value": "\"Hello World\"",
    "start": 208,
    "end": 221,
    "range": [
      208,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 241,
    "end": 245,
    "range": [
      241,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 246,
    "end": 248,
    "range": [
      246,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 249,
    "end": 252,
    "range": [
      249,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "innerFunction",
    "start": 314,
    "end": 327,
    "range": [
      314,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 333,
    "end": 335,
    "range": [
      333,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 350,
    "end": 356,
    "range": [
      350,
      356
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 357,
    "end": 361,
    "range": [
      357,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 362,
    "end": 366,
    "range": [
      362,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 437,
    "end": 442,
    "range": [
      437,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 443,
    "end": 445,
    "range": [
      443,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 446,
    "end": 451,
    "range": [
      446,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 452,
    "end": 456,
    "range": [
      452,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 470,
    "end": 478,
    "range": [
      470,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 479,
    "end": 483,
    "range": [
      479,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 497,
    "end": 505,
    "range": [
      497,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 506,
    "end": 508,
    "range": [
      506,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524,
    "range": [
      522,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 525,
    "end": 529,
    "range": [
      525,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 536,
    "end": 544,
    "range": [
      536,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 545,
    "end": 551,
    "range": [
      545,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 552,
    "end": 555,
    "range": [
      552,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 566,
    "end": 570,
    "range": [
      566,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 577,
    "end": 582,
    "range": [
      577,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "start": 585,
    "end": 589,
    "range": [
      585,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 590,
    "end": 594,
    "range": [
      590,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 600,
    "end": 602,
    "range": [
      600,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 611,
    "end": 615,
    "range": [
      611,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 616,
    "end": 620,
    "range": [
      616,
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
    "type": "Identifier",
    "value": "method2",
    "start": 627,
    "end": 634,
    "range": [
      627,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 647,
    "end": 651,
    "range": [
      647,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 652,
    "end": 656,
    "range": [
      652,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 659,
    "end": 663,
    "range": [
      659,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 664,
    "end": 668,
    "range": [
      664,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 685,
    "end": 693,
    "range": [
      685,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 694,
    "end": 699,
    "range": [
      694,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedAbstractClass",
    "start": 700,
    "end": 720,
    "range": [
      700,
      720
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 721,
    "end": 728,
    "range": [
      721,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractClass",
    "start": 729,
    "end": 742,
    "range": [
      729,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 749,
    "end": 751,
    "range": [
      749,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 758,
    "end": 764,
    "range": [
      758,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 778,
    "end": 789,
    "range": [
      778,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 790,
    "end": 793,
    "range": [
      790,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 795,
    "end": 801,
    "range": [
      795,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 803,
    "end": 808,
    "range": [
      803,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractClass",
    "start": 810,
    "end": 823,
    "range": [
      810,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "yetAnother",
    "start": 825,
    "end": 835,
    "range": [
      825,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedAbstractClass",
    "start": 837,
    "end": 857,
    "range": [
      837,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 869,
    "end": 874,
    "range": [
      869,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 875,
    "end": 878,
    "range": [
      875,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 880,
    "end": 885,
    "range": [
      880,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 962,
    "end": 966,
    "range": [
      962,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 967,
    "end": 969,
    "range": [
      967,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 970,
    "end": 974,
    "range": [
      970,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 975,
    "end": 979,
    "range": [
      975,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 980,
    "end": 991,
    "range": [
      980,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1005,
    "end": 1009,
    "range": [
      1005,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1010,
    "end": 1016,
    "range": [
      1010,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1080,
    "end": 1085,
    "range": [
      1080,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1086,
    "end": 1088,
    "range": [
      1086,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1089,
    "end": 1094,
    "range": [
      1089,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1095,
    "end": 1099,
    "range": [
      1095,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "yetAnother",
    "start": 1110,
    "end": 1120,
    "range": [
      1110,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1121,
    "end": 1123,
    "range": [
      1121,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "yetAnother",
    "start": 1124,
    "end": 1134,
    "range": [
      1124,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1135,
    "end": 1139,
    "range": [
      1135,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1151,
    "end": 1156,
    "range": [
      1151,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "Implementation",
    "start": 1157,
    "end": 1171,
    "range": [
      1157,
      1171
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1172,
    "end": 1179,
    "range": [
      1172,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedAbstractClass",
    "start": 1180,
    "end": 1200,
    "range": [
      1180,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1207,
    "end": 1211,
    "range": [
      1207,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1214,
    "end": 1216,
    "range": [
      1214,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1222,
    "end": 1224,
    "range": [
      1222,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1231,
    "end": 1237,
    "range": [
      1231,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1239,
    "end": 1241,
    "range": [
      1239,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1251,
    "end": 1262,
    "range": [
      1251,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1263,
    "end": 1266,
    "range": [
      1263,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1268,
    "end": 1274,
    "range": [
      1268,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1276,
    "end": 1281,
    "range": [
      1276,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractClass",
    "start": 1283,
    "end": 1296,
    "range": [
      1283,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "yetAnother",
    "start": 1298,
    "end": 1308,
    "range": [
      1298,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedAbstractClass",
    "start": 1310,
    "end": 1330,
    "range": [
      1310,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1342,
    "end": 1347,
    "range": [
      1342,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1348,
    "end": 1351,
    "range": [
      1348,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1353,
    "end": 1358,
    "range": [
      1353,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "yetAnother",
    "start": 1360,
    "end": 1370,
    "range": [
      1360,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1381,
    "end": 1385,
    "range": [
      1381,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1386,
    "end": 1388,
    "range": [
      1386,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1389,
    "end": 1393,
    "range": [
      1389,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1394,
    "end": 1398,
    "range": [
      1394,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1412,
    "end": 1418,
    "range": [
      1412,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1422,
    "end": 1428,
    "range": [
      1422,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1440,
    "end": 1444,
    "range": [
      1440,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1445,
    "end": 1447,
    "range": [
      1445,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1448,
    "end": 1452,
    "range": [
      1448,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1453,
    "end": 1457,
    "range": [
      1453,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1473,
    "end": 1478,
    "range": [
      1473,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "User",
    "start": 1479,
    "end": 1483,
    "range": [
      1479,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1490,
    "end": 1501,
    "range": [
      1490,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractClass",
    "start": 1505,
    "end": 1518,
    "range": [
      1505,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1532,
    "end": 1536,
    "range": [
      1532,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1548,
    "end": 1550,
    "range": [
      1548,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1551,
    "end": 1555,
    "range": [
      1551,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1568,
    "end": 1574,
    "range": [
      1568,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1575,
    "end": 1577,
    "range": [
      1575,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1590,
    "end": 1597,
    "range": [
      1590,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1610,
    "end": 1618,
    "range": [
      1610,
      1618
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1619,
    "end": 1624,
    "range": [
      1619,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1625,
    "end": 1627,
    "range": [
      1625,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1634,
    "end": 1642,
    "range": [
      1634,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1646,
    "end": 1652,
    "range": [
      1646,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1658,
    "end": 1666,
    "range": [
      1658,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1670,
    "end": 1676,
    "range": [
      1670,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1683,
    "end": 1694,
    "range": [
      1683,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1707,
    "end": 1710,
    "range": [
      1707,
      1710
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1711,
    "end": 1715,
    "range": [
      1711,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1718,
    "end": 1722,
    "range": [
      1718,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1753,
    "end": 1756,
    "range": [
      1753,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1772,
    "end": 1776,
    "range": [
      1772,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1811,
    "end": 1813,
    "range": [
      1811,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 1815,
    "end": 1818,
    "range": [
      1815,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1820,
    "end": 1822,
    "range": [
      1820,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1827,
    "end": 1831,
    "range": [
      1827,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1852,
    "end": 1857,
    "range": [
      1852,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1858,
    "end": 1860,
    "range": [
      1858,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1870,
    "end": 1876,
    "range": [
      1870,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1885,
    "end": 1891,
    "range": [
      1885,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1898,
    "end": 1909,
    "range": [
      1898,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1922,
    "end": 1925,
    "range": [
      1922,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1926,
    "end": 1930,
    "range": [
      1926,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1933,
    "end": 1937,
    "range": [
      1933,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1968,
    "end": 1971,
    "range": [
      1968,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1980,
    "end": 1982,
    "range": [
      1980,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1987,
    "end": 1991,
    "range": [
      1987,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 2023,
    "end": 2025,
    "range": [
      2023,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 2027,
    "end": 2030,
    "range": [
      2027,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 2032,
    "end": 2034,
    "range": [
      2032,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2039,
    "end": 2043,
    "range": [
      2039,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  }
]
```
