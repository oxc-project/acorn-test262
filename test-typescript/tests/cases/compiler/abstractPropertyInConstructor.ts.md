__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2060,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 683,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 28,
        "name": "AbstractClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 683,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 464,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 46,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 464,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 58,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 58,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 52,
                      "end": 58
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 80,
                  "name": "other",
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
                        "name": "AbstractClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 104,
                          "end": 117,
                          "callee": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 112,
                            "name": "parseInt",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 113,
                              "end": 116,
                              "name": "str",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 128,
                    "end": 162,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 132,
                        "end": 161,
                        "id": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 135,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 159,
                              "name": "toLowerCase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
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
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 180,
                        "name": "str",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 249,
                          "end": 252,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 308,
                    "end": 377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 314,
                        "end": 377,
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 327,
                          "name": "innerFunction",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 330,
                          "end": 377,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                    "name": "prop",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
                          "name": "other",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 445,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 446,
                          "end": 456,
                          "object": {
                            "type": "Identifier",
                            "start": 446,
                            "end": 451,
                            "name": "other",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 470,
            "end": 492,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 483,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 497,
            "end": 530,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 508,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 512,
                      "end": 520,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 514,
                        "end": 520
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 536,
            "end": 571,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 551,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 551,
              "end": 571,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 552,
                  "end": 563,
                  "name": "num",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 555,
                    "end": 563,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 557,
                      "end": 563
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 564,
                "end": 570,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 566,
                  "end": 570
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 577,
            "end": 595,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 582,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 600,
            "end": 621,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 602,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 605,
              "end": 620,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
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
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 627,
            "end": 681,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 634,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 634,
              "end": 681,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 685,
      "end": 1149,
      "id": {
        "type": "Identifier",
        "start": 700,
        "end": 720,
        "name": "DerivedAbstractClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 729,
        "end": 742,
        "name": "AbstractClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 743,
        "end": 1149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 749,
            "end": 772,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 749,
              "end": 751,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 754,
              "end": 771,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 755,
                  "end": 764,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 758,
                      "end": 764
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 769,
                "end": 771,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 778,
            "end": 1147,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 778,
              "end": 789,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 789,
              "end": 1147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 790,
                  "end": 801,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 793,
                    "end": 801,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 803,
                  "end": 823,
                  "name": "other",
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
                        "name": "AbstractClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 825,
                  "end": 857,
                  "name": "yetAnother",
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
                        "name": "DerivedAbstractClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 875,
                          "end": 878,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 880,
                          "end": 885,
                          "name": "other",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                                "name": "prop",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 980,
                              "end": 991,
                              "name": "toLowerCase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1017,
                          "end": 1018,
                          "value": 1,
                          "raw": "1"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "other",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1086,
                          "end": 1088,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1089,
                          "end": 1099,
                          "object": {
                            "type": "Identifier",
                            "start": 1089,
                            "end": 1094,
                            "name": "other",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1099,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "yetAnother",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1121,
                          "end": 1123,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1124,
                          "end": 1139,
                          "object": {
                            "type": "Identifier",
                            "start": 1124,
                            "end": 1134,
                            "name": "yetAnother",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1135,
                            "end": 1139,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1151,
      "end": 1471,
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1171,
        "name": "Implementation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 1180,
        "end": 1200,
        "name": "DerivedAbstractClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 1201,
        "end": 1471,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1207,
            "end": 1217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1207,
              "end": 1211,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1214,
              "end": 1216,
              "value": "",
              "raw": "\"\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1222,
            "end": 1245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1222,
              "end": 1224,
              "name": "cb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 1227,
              "end": 1244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1228,
                  "end": 1237,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1229,
                    "end": 1237,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1231,
                      "end": 1237
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1242,
                "end": 1244,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1251,
            "end": 1406,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1251,
              "end": 1262,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1262,
              "end": 1406,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1263,
                  "end": 1274,
                  "name": "str",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1266,
                    "end": 1274,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1268,
                      "end": 1274
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1276,
                  "end": 1296,
                  "name": "other",
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
                        "name": "AbstractClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1298,
                  "end": 1330,
                  "name": "yetAnother",
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
                        "name": "DerivedAbstractClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1348,
                          "end": 1351,
                          "name": "str",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1353,
                          "end": 1358,
                          "name": "other",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1370,
                          "name": "yetAnother",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1412,
            "end": 1469,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1412,
              "end": 1418,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1418,
              "end": 1469,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1419,
                  "end": 1428,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1420,
                    "end": 1428,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1422,
                      "end": 1428
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                              "name": "prop",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 1460,
                            "end": 1461,
                            "name": "n",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1473,
      "end": 1608,
      "id": {
        "type": "Identifier",
        "start": 1479,
        "end": 1483,
        "name": "User",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1484,
        "end": 1608,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1490,
            "end": 1606,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1490,
              "end": 1501,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1501,
              "end": 1606,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1502,
                  "end": 1518,
                  "name": "a",
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
                        "name": "AbstractClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1532,
                        "end": 1536,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1548,
                          "end": 1550,
                          "name": "cb",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1551,
                          "end": 1555,
                          "value": "hi",
                          "raw": "\"hi\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1568,
                          "end": 1574,
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1575,
                          "end": 1577,
                          "value": 12,
                          "raw": "12"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1590,
                          "end": 1597,
                          "name": "method2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1610,
      "end": 1850,
      "id": {
        "type": "Identifier",
        "start": 1625,
        "end": 1627,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1628,
        "end": 1850,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 1634,
            "end": 1653,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1643,
              "end": 1644,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 1658,
            "end": 1677,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1667,
              "end": 1668,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1683,
            "end": 1848,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1683,
              "end": 1694,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1694,
              "end": 1848,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1697,
                "end": 1848,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1707,
                    "end": 1723,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1711,
                        "end": 1722,
                        "id": {
                          "type": "Identifier",
                          "start": 1711,
                          "end": 1715,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1718,
                          "end": 1722
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1753,
                    "end": 1777,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1757,
                        "end": 1776,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 1757,
                          "end": 1769,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1759,
                              "end": 1760,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 1762,
                              "end": 1767,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1762,
                                "end": 1763,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1765,
                                "end": 1767,
                                "name": "y1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
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
                    "kind": "let",
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1805,
                            "end": 1806,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1808,
                            "end": 1813,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1808,
                              "end": 1809,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1811,
                              "end": 1813,
                              "name": "y1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1815,
                            "end": 1822,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
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
                              "name": "y1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1852,
      "end": 2059,
      "id": {
        "type": "Identifier",
        "start": 1858,
        "end": 1860,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1861,
        "end": 2059,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1867,
            "end": 1877,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1882,
            "end": 1892,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1882,
              "end": 1883,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1898,
            "end": 2057,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1898,
              "end": 1909,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1909,
              "end": 2057,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1912,
                "end": 2057,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1922,
                    "end": 1938,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1926,
                        "end": 1937,
                        "id": {
                          "type": "Identifier",
                          "start": 1926,
                          "end": 1930,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1933,
                          "end": 1937
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1968,
                    "end": 1992,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1972,
                        "end": 1991,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 1972,
                          "end": 1984,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1974,
                              "end": 1975,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1974,
                                "end": 1975,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1974,
                                "end": 1975,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 1977,
                              "end": 1982,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1977,
                                "end": 1978,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 1980,
                                "end": 1982,
                                "name": "y1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
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
                    "kind": "let",
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2017,
                            "end": 2018,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2018,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2018,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2020,
                            "end": 2025,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2020,
                              "end": 2021,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 2023,
                              "end": 2025,
                              "name": "y1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 2027,
                            "end": 2034,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
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
                              "name": "y1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
