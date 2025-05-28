__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2059,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 683,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 28,
        "decorators": [],
        "name": "AbstractClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 683,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 464,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 46,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 464,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 58,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 80,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 80,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 80,
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 464,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 92,
                    "end": 119,
                    "expression": {
                      "type": "CallExpression",
                      "start": 92,
                      "end": 118,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 92,
                        "end": 103,
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 104,
                          "end": 117,
                          "callee": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 112,
                            "decorators": [],
                            "name": "parseInt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 113,
                              "end": 116,
                              "decorators": [],
                              "name": "str",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 128,
                    "end": 162,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 132,
                        "end": 161,
                        "id": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 135,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 138,
                          "end": 161,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 138,
                            "end": 159,
                            "object": {
                              "type": "MemberExpression",
                              "start": 138,
                              "end": 147,
                              "object": {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 143,
                                "end": 147,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 159,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 172,
                    "end": 232,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 176,
                      "end": 180,
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 180,
                        "decorators": [],
                        "name": "str",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 182,
                      "end": 232,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 196,
                          "end": 222,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 196,
                            "end": 221,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 196,
                              "end": 205,
                              "object": {
                                "type": "ThisExpression",
                                "start": 196,
                                "end": 200
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 205,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 208,
                              "end": 221,
                              "value": "Hello World",
                              "raw": "\"Hello World\""
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 241,
                    "end": 254,
                    "expression": {
                      "type": "CallExpression",
                      "start": 241,
                      "end": 253,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 241,
                        "end": 248,
                        "object": {
                          "type": "ThisExpression",
                          "start": 241,
                          "end": 245
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 248,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 249,
                          "end": 252,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 308,
                    "end": 377,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 314,
                        "end": 377,
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 327,
                          "decorators": [],
                          "name": "innerFunction",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 330,
                          "end": 377,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 336,
                            "end": 377,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 350,
                                "end": 367,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 357,
                                  "end": 366,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 357,
                                    "end": 361
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 362,
                                    "end": 366,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 437,
                    "end": 458,
                    "expression": {
                      "type": "CallExpression",
                      "start": 437,
                      "end": 457,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 437,
                        "end": 445,
                        "object": {
                          "type": "Identifier",
                          "start": 437,
                          "end": 442,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 445,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 446,
                          "end": 456,
                          "object": {
                            "type": "Identifier",
                            "start": 446,
                            "end": 451,
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
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
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 470,
            "end": 492,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 483,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 491,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 485,
                "end": 491
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 497,
            "end": 530,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 508,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 529,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 510,
                "end": 529,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 511,
                    "end": 520,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 512,
                      "end": 520,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 514,
                        "end": 520
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 522,
                  "end": 529,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 525,
                    "end": 529
                  }
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 536,
            "end": 571,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 551,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 551,
              "end": 571,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 552,
                  "end": 563,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 555,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 557,
                      "end": 563
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 564,
                "end": 570,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 566,
                  "end": 570
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 577,
            "end": 595,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 582,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 585,
              "end": 594,
              "object": {
                "type": "ThisExpression",
                "start": 585,
                "end": 589
              },
              "property": {
                "type": "Identifier",
                "start": 590,
                "end": 594,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 600,
            "end": 621,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 602,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 605,
              "end": 620,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "start": 611,
                "end": 620,
                "object": {
                  "type": "ThisExpression",
                  "start": 611,
                  "end": 615
                },
                "property": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 620,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 627,
            "end": 681,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 634,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 634,
              "end": 681,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 637,
                "end": 681,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 647,
                    "end": 675,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 647,
                      "end": 674,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 647,
                        "end": 656,
                        "object": {
                          "type": "ThisExpression",
                          "start": 647,
                          "end": 651
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 652,
                          "end": 656,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 659,
                        "end": 674,
                        "left": {
                          "type": "MemberExpression",
                          "start": 659,
                          "end": 668,
                          "object": {
                            "type": "ThisExpression",
                            "start": 659,
                            "end": 663
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 664,
                            "end": 668,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 671,
                          "end": 674,
                          "value": "!",
                          "raw": "\"!\""
                        }
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 685,
      "end": 1149,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 700,
        "end": 720,
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 729,
        "end": 742,
        "decorators": [],
        "name": "AbstractClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 743,
        "end": 1149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 749,
            "end": 772,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 749,
              "end": 751,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 754,
              "end": 771,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 755,
                  "end": 764,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 758,
                      "end": 764
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 769,
                "end": 771,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 778,
            "end": 1147,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 778,
              "end": 789,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 789,
              "end": 1147,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 790,
                  "end": 801,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 793,
                    "end": 801,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 803,
                  "end": 823,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 808,
                    "end": 823,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 810,
                      "end": 823,
                      "typeName": {
                        "type": "Identifier",
                        "start": 810,
                        "end": 823,
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 825,
                  "end": 857,
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 835,
                    "end": 857,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 837,
                      "end": 857,
                      "typeName": {
                        "type": "Identifier",
                        "start": 837,
                        "end": 857,
                        "decorators": [],
                        "name": "DerivedAbstractClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 859,
                "end": 1147,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 869,
                    "end": 887,
                    "expression": {
                      "type": "CallExpression",
                      "start": 869,
                      "end": 886,
                      "callee": {
                        "type": "Super",
                        "start": 869,
                        "end": 874
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 875,
                          "end": 878,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 880,
                          "end": 885,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 962,
                    "end": 995,
                    "expression": {
                      "type": "CallExpression",
                      "start": 962,
                      "end": 994,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 962,
                        "end": 969,
                        "object": {
                          "type": "ThisExpression",
                          "start": 962,
                          "end": 966
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 967,
                          "end": 969,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 970,
                          "end": 993,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 970,
                            "end": 991,
                            "object": {
                              "type": "MemberExpression",
                              "start": 970,
                              "end": 979,
                              "object": {
                                "type": "ThisExpression",
                                "start": 970,
                                "end": 974
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 975,
                                "end": 979,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 980,
                              "end": 991,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1005,
                    "end": 1020,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1005,
                      "end": 1019,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1005,
                        "end": 1016,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1005,
                          "end": 1009
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1010,
                          "end": 1016,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1017,
                          "end": 1018,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1080,
                    "end": 1101,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1080,
                      "end": 1100,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1080,
                        "end": 1088,
                        "object": {
                          "type": "Identifier",
                          "start": 1080,
                          "end": 1085,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1086,
                          "end": 1088,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1089,
                          "end": 1099,
                          "object": {
                            "type": "Identifier",
                            "start": 1089,
                            "end": 1094,
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1099,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1110,
                    "end": 1141,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1110,
                      "end": 1140,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1110,
                        "end": 1123,
                        "object": {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1120,
                          "decorators": [],
                          "name": "yetAnother",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1121,
                          "end": 1123,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1124,
                          "end": 1139,
                          "object": {
                            "type": "Identifier",
                            "start": 1124,
                            "end": 1134,
                            "decorators": [],
                            "name": "yetAnother",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1135,
                            "end": 1139,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
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
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1151,
      "end": 1471,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1171,
        "decorators": [],
        "name": "Implementation",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1180,
        "end": 1200,
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1201,
        "end": 1471,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1207,
            "end": 1217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1207,
              "end": 1211,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1214,
              "end": 1216,
              "value": "",
              "raw": "\"\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1222,
            "end": 1245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1222,
              "end": 1224,
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 1227,
              "end": 1244,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1228,
                  "end": 1237,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1229,
                    "end": 1237,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1231,
                      "end": 1237
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1242,
                "end": 1244,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1251,
            "end": 1406,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1251,
              "end": 1262,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1262,
              "end": 1406,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1274,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1266,
                    "end": 1274,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1268,
                      "end": 1274
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1296,
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1281,
                    "end": 1296,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1283,
                      "end": 1296,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1283,
                        "end": 1296,
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1298,
                  "end": 1330,
                  "decorators": [],
                  "name": "yetAnother",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1308,
                    "end": 1330,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1310,
                      "end": 1330,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1310,
                        "end": 1330,
                        "decorators": [],
                        "name": "DerivedAbstractClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1332,
                "end": 1406,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1342,
                    "end": 1372,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1342,
                      "end": 1371,
                      "callee": {
                        "type": "Super",
                        "start": 1342,
                        "end": 1347
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1348,
                          "end": 1351,
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 1353,
                          "end": 1358,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1370,
                          "decorators": [],
                          "name": "yetAnother",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1381,
                    "end": 1400,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1381,
                      "end": 1399,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1381,
                        "end": 1388,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1381,
                          "end": 1385
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1386,
                          "end": 1388,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1389,
                          "end": 1398,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1389,
                            "end": 1393
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1394,
                            "end": 1398,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 1412,
            "end": 1469,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1412,
              "end": 1418,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1418,
              "end": 1469,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1419,
                  "end": 1428,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1420,
                    "end": 1428,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1422,
                      "end": 1428
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1430,
                "end": 1469,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1440,
                    "end": 1463,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1440,
                      "end": 1462,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1440,
                        "end": 1447,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1440,
                          "end": 1444
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1445,
                          "end": 1447,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 1448,
                          "end": 1461,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1448,
                            "end": 1457,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1448,
                              "end": 1452
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1453,
                              "end": 1457,
                              "decorators": [],
                              "name": "prop",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 1460,
                            "end": 1461,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "ClassDeclaration",
      "start": 1473,
      "end": 1608,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1479,
        "end": 1483,
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1484,
        "end": 1608,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1490,
            "end": 1606,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1490,
              "end": 1501,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1501,
              "end": 1606,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1502,
                  "end": 1518,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1503,
                    "end": 1518,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1505,
                      "end": 1518,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1505,
                        "end": 1518,
                        "decorators": [],
                        "name": "AbstractClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1520,
                "end": 1606,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1530,
                    "end": 1537,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1530,
                      "end": 1536,
                      "object": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1531,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1532,
                        "end": 1536,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1546,
                    "end": 1557,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1546,
                      "end": 1556,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1546,
                        "end": 1550,
                        "object": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1547,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1548,
                          "end": 1550,
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1551,
                          "end": 1555,
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1566,
                    "end": 1579,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1566,
                      "end": 1578,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1566,
                        "end": 1574,
                        "object": {
                          "type": "Identifier",
                          "start": 1566,
                          "end": 1567,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1568,
                          "end": 1574,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1575,
                          "end": 1577,
                          "value": 12,
                          "raw": "12"
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1588,
                    "end": 1600,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1588,
                      "end": 1599,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1588,
                        "end": 1597,
                        "object": {
                          "type": "Identifier",
                          "start": 1588,
                          "end": 1589,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1590,
                          "end": 1597,
                          "decorators": [],
                          "name": "method2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
      "type": "ClassDeclaration",
      "start": 1610,
      "end": 1850,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1625,
        "end": 1627,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1628,
        "end": 1850,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 1634,
            "end": 1653,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1643,
              "end": 1644,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1644,
              "end": 1652,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1646,
                "end": 1652
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 1658,
            "end": 1677,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1667,
              "end": 1668,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1668,
              "end": 1676,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1670,
                "end": 1676
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1683,
            "end": 1848,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1683,
              "end": 1694,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1694,
              "end": 1848,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1697,
                "end": 1848,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1707,
                    "end": 1723,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1711,
                        "end": 1722,
                        "id": {
                          "type": "Identifier",
                          "start": 1711,
                          "end": 1715,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1718,
                          "end": 1722
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1753,
                    "end": 1777,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1757,
                        "end": 1776,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 1757,
                          "end": 1769,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1759,
                              "end": 1760,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 1762,
                              "end": 1767,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1762,
                                "end": 1763,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1765,
                                "end": 1767,
                                "decorators": [],
                                "name": "y1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1772,
                          "end": 1776
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1802,
                    "end": 1833,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1803,
                      "end": 1831,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1803,
                        "end": 1824,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1805,
                            "end": 1806,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1808,
                            "end": 1813,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1808,
                              "end": 1809,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1811,
                              "end": 1813,
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1815,
                            "end": 1822,
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "start": 1815,
                              "end": 1818,
                              "value": "y",
                              "raw": "\"y\""
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1820,
                              "end": 1822,
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 1827,
                        "end": 1831
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
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1852,
      "end": 2059,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1858,
        "end": 1860,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1861,
        "end": 2059,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1867,
            "end": 1877,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1868,
              "end": 1876,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1870,
                "end": 1876
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1882,
            "end": 1892,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1882,
              "end": 1883,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1883,
              "end": 1891,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1885,
                "end": 1891
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1898,
            "end": 2057,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1898,
              "end": 1909,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1909,
              "end": 2057,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1912,
                "end": 2057,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1922,
                    "end": 1938,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1926,
                        "end": 1937,
                        "id": {
                          "type": "Identifier",
                          "start": 1926,
                          "end": 1930,
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1933,
                          "end": 1937
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1968,
                    "end": 1992,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1972,
                        "end": 1991,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 1972,
                          "end": 1984,
                          "decorators": [],
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1974,
                              "end": 1975,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1974,
                                "end": 1975,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1974,
                                "end": 1975,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 1977,
                              "end": 1982,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 1977,
                                "end": 1978,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1980,
                                "end": 1982,
                                "decorators": [],
                                "name": "y1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1987,
                          "end": 1991
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2014,
                    "end": 2045,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2015,
                      "end": 2043,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 2015,
                        "end": 2036,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2017,
                            "end": 2018,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2018,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2018,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2020,
                            "end": 2025,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 2020,
                              "end": 2021,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2023,
                              "end": 2025,
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2027,
                            "end": 2034,
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "start": 2027,
                              "end": 2030,
                              "value": "y",
                              "raw": "\"y\""
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2032,
                              "end": 2034,
                              "decorators": [],
                              "name": "y1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2039,
                        "end": 2043
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
