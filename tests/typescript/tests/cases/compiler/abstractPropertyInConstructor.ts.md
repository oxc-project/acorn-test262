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
