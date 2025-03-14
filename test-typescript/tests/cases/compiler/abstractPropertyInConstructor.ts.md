abstractPropertyInConstructor.ts
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
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 683,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 35,
            "end": 464,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 46,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 464,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 104,
                          "end": 117,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 113,
                              "end": 116,
                              "decorators": [],
                              "name": "str",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 112,
                            "decorators": [],
                            "name": "parseInt",
                            "optional": false
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 92,
                        "end": 103,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 92,
                          "end": 96
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "decorators": [],
                          "name": "method",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 135,
                          "decorators": [],
                          "name": "val",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 138,
                          "end": 161,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 138,
                            "end": 159,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 138,
                              "end": 147,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 143,
                                "end": 147,
                                "decorators": [],
                                "name": "prop",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 159,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "IfStatement",
                    "start": 172,
                    "end": 232,
                    "alternate": null,
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
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 196,
                                "end": 200
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 201,
                                "end": 205,
                                "decorators": [],
                                "name": "prop",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 208,
                              "end": 221,
                              "raw": "\"Hello World\"",
                              "value": "Hello World"
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 176,
                      "end": 180,
                      "argument": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 180,
                        "decorators": [],
                        "name": "str",
                        "optional": false
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 241,
                    "end": 254,
                    "expression": {
                      "type": "CallExpression",
                      "start": 241,
                      "end": 253,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 249,
                          "end": 252,
                          "decorators": [],
                          "name": "str",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 241,
                        "end": 248,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 241,
                          "end": 245
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 248,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 327,
                          "decorators": [],
                          "name": "innerFunction",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 330,
                          "end": 377,
                          "async": false,
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
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 357,
                                    "end": 361
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 362,
                                    "end": 366,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 437,
                    "end": 458,
                    "expression": {
                      "type": "CallExpression",
                      "start": 437,
                      "end": 457,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 446,
                          "end": 456,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 446,
                            "end": 451,
                            "decorators": [],
                            "name": "other",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 456,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 437,
                        "end": 445,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 437,
                          "end": 442,
                          "decorators": [],
                          "name": "other",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 445,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 470,
            "end": 492,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 483,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 497,
            "end": 530,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 506,
              "end": 508,
              "decorators": [],
              "name": "cb",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 508,
              "end": 529,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 510,
                "end": 529,
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
            "value": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 536,
            "end": 571,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 545,
              "end": 551,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 551,
              "end": 571,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 577,
            "end": 595,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 577,
              "end": 582,
              "decorators": [],
              "name": "other",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 585,
              "end": 594,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 585,
                "end": 589
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 590,
                "end": 594,
                "decorators": [],
                "name": "prop",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 600,
            "end": 621,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 600,
              "end": 602,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 605,
              "end": 620,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 611,
                "end": 620,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 611,
                  "end": 615
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 620,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 627,
            "end": 681,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 634,
              "decorators": [],
              "name": "method2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 634,
              "end": 681,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 647,
                          "end": 651
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 652,
                          "end": 656,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 659,
                        "end": 674,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 659,
                          "end": 668,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 659,
                            "end": 663
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 664,
                            "end": 668,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 671,
                          "end": 674,
                          "raw": "\"!\"",
                          "value": "!"
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 28,
        "decorators": [],
        "name": "AbstractClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 685,
      "end": 1149,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 743,
        "end": 1149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 749,
            "end": 772,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 749,
              "end": 751,
              "decorators": [],
              "name": "cb",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 754,
              "end": 771,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 769,
                "end": 771,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 778,
            "end": 1147,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 778,
              "end": 789,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 789,
              "end": 1147,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 875,
                          "end": 878,
                          "decorators": [],
                          "name": "str",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 880,
                          "end": 885,
                          "decorators": [],
                          "name": "other",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 869,
                        "end": 874
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 962,
                    "end": 995,
                    "expression": {
                      "type": "CallExpression",
                      "start": 962,
                      "end": 994,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 970,
                          "end": 993,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 970,
                            "end": 991,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 970,
                              "end": 979,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 970,
                                "end": 974
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 975,
                                "end": 979,
                                "decorators": [],
                                "name": "prop",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 980,
                              "end": 991,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 962,
                        "end": 969,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 962,
                          "end": 966
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 967,
                          "end": 969,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1005,
                    "end": 1020,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1005,
                      "end": 1019,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1017,
                          "end": 1018,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1005,
                        "end": 1016,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1005,
                          "end": 1009
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1010,
                          "end": 1016,
                          "decorators": [],
                          "name": "method",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1080,
                    "end": 1101,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1080,
                      "end": 1100,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1089,
                          "end": 1099,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1089,
                            "end": 1094,
                            "decorators": [],
                            "name": "other",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1099,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1080,
                        "end": 1088,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1080,
                          "end": 1085,
                          "decorators": [],
                          "name": "other",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1086,
                          "end": 1088,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1110,
                    "end": 1141,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1110,
                      "end": 1140,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1124,
                          "end": 1139,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1124,
                            "end": 1134,
                            "decorators": [],
                            "name": "yetAnother",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1135,
                            "end": 1139,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1110,
                        "end": 1123,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1110,
                          "end": 1120,
                          "decorators": [],
                          "name": "yetAnother",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1121,
                          "end": 1123,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "optional": false
                      }
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 700,
        "end": 720,
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 729,
        "end": 742,
        "decorators": [],
        "name": "AbstractClass",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1151,
      "end": 1471,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1201,
        "end": 1471,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1207,
            "end": 1217,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1207,
              "end": 1211,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1214,
              "end": 1216,
              "raw": "\"\"",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1222,
            "end": 1245,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1222,
              "end": 1224,
              "decorators": [],
              "name": "cb",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 1227,
              "end": 1244,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1242,
                "end": 1244,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1251,
            "end": 1406,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1251,
              "end": 1262,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1262,
              "end": 1406,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1348,
                          "end": 1351,
                          "decorators": [],
                          "name": "str",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1353,
                          "end": 1358,
                          "decorators": [],
                          "name": "other",
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1370,
                          "decorators": [],
                          "name": "yetAnother",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 1342,
                        "end": 1347
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1381,
                    "end": 1400,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1381,
                      "end": 1399,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 1389,
                          "end": 1398,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1389,
                            "end": 1393
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1394,
                            "end": 1398,
                            "decorators": [],
                            "name": "prop",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1381,
                        "end": 1388,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1381,
                          "end": 1385
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1386,
                          "end": 1388,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "optional": false
                      }
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1412,
            "end": 1469,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1412,
              "end": 1418,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1418,
              "end": 1469,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 1448,
                          "end": 1461,
                          "operator": "+",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1448,
                            "end": 1457,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1448,
                              "end": 1452
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1453,
                              "end": 1457,
                              "decorators": [],
                              "name": "prop",
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1460,
                            "end": 1461,
                            "decorators": [],
                            "name": "n",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1440,
                        "end": 1447,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1440,
                          "end": 1444
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1445,
                          "end": 1447,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1157,
        "end": 1171,
        "decorators": [],
        "name": "Implementation",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1180,
        "end": 1200,
        "decorators": [],
        "name": "DerivedAbstractClass",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1473,
      "end": 1608,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1484,
        "end": 1608,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1490,
            "end": 1606,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1490,
              "end": 1501,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1501,
              "end": 1606,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1531,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1532,
                        "end": 1536,
                        "decorators": [],
                        "name": "prop",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1546,
                    "end": 1557,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1546,
                      "end": 1556,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1551,
                          "end": 1555,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1546,
                        "end": 1550,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1547,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1548,
                          "end": 1550,
                          "decorators": [],
                          "name": "cb",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1566,
                    "end": 1579,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1566,
                      "end": 1578,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1575,
                          "end": 1577,
                          "raw": "12",
                          "value": 12
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1566,
                        "end": 1574,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1566,
                          "end": 1567,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1568,
                          "end": 1574,
                          "decorators": [],
                          "name": "method",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1588,
                    "end": 1600,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1588,
                      "end": 1599,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1588,
                        "end": 1597,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1588,
                          "end": 1589,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1590,
                          "end": 1597,
                          "decorators": [],
                          "name": "method2",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1479,
        "end": 1483,
        "decorators": [],
        "name": "User",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1610,
      "end": 1850,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 1628,
        "end": 1850,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 1634,
            "end": 1653,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1643,
              "end": 1644,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 1658,
            "end": 1677,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1667,
              "end": 1668,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1683,
            "end": 1848,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1683,
              "end": 1694,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1694,
              "end": 1848,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1711,
                          "end": 1715,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1718,
                          "end": 1722
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
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
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 1757,
                          "end": 1769,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1759,
                              "end": 1760,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 1759,
                                "end": 1760,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 1762,
                              "end": 1767,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1762,
                                "end": 1763,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 1765,
                                "end": 1767,
                                "decorators": [],
                                "name": "y1",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1772,
                          "end": 1776
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
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
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1805,
                            "end": 1806,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1808,
                            "end": 1813,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1808,
                              "end": 1809,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 1811,
                              "end": 1813,
                              "decorators": [],
                              "name": "y1",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1815,
                            "end": 1822,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 1815,
                              "end": 1818,
                              "raw": "\"y\"",
                              "value": "y"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 1820,
                              "end": 1822,
                              "decorators": [],
                              "name": "y1",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 1827,
                        "end": 1831
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1625,
        "end": 1627,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1852,
      "end": 2059,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1861,
        "end": 2059,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1867,
            "end": 1877,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1882,
            "end": 1892,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1882,
              "end": 1883,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1898,
            "end": 2057,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1898,
              "end": 1909,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1909,
              "end": 2057,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1926,
                          "end": 1930,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1933,
                          "end": 1937
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
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
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 1972,
                          "end": 1984,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 1974,
                              "end": 1975,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1974,
                                "end": 1975,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 1974,
                                "end": 1975,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            },
                            {
                              "type": "Property",
                              "start": 1977,
                              "end": 1982,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1977,
                                "end": 1978,
                                "decorators": [],
                                "name": "y",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 1980,
                                "end": 1982,
                                "decorators": [],
                                "name": "y1",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1987,
                          "end": 1991
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
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
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2017,
                            "end": 2018,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2018,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2018,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 2020,
                            "end": 2025,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2020,
                              "end": 2021,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 2023,
                              "end": 2025,
                              "decorators": [],
                              "name": "y1",
                              "optional": false
                            }
                          },
                          {
                            "type": "Property",
                            "start": 2027,
                            "end": 2034,
                            "computed": false,
                            "key": {
                              "type": "Literal",
                              "start": 2027,
                              "end": 2030,
                              "raw": "\"y\"",
                              "value": "y"
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 2032,
                              "end": 2034,
                              "decorators": [],
                              "name": "y1",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2039,
                        "end": 2043
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1858,
        "end": 1860,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
