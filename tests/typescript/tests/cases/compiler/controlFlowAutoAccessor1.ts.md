__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 763,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 132,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 132,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 18,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 89,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 47,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 89,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 60,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 89,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 85,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 68,
                      "end": 84,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 77,
                        "object": {
                          "type": "ThisExpression",
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 77,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 84,
                        "decorators": [],
                        "name": "test",
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
          },
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 130,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 100,
              "decorators": [],
              "name": "getTest",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 130,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 130,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 109,
                    "end": 126,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 125,
                      "object": {
                        "type": "ThisExpression",
                        "start": 116,
                        "end": 120
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 125,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
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
      "start": 134,
      "end": 322,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 148,
        "decorators": [],
        "name": "Example2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 322,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 153,
            "end": 167,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 171,
            "end": 236,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 182,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 182,
              "end": 236,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 183,
                  "end": 207,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 189,
                      "end": 207,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 189,
                          "end": 195
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 198,
                          "end": 207
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 236,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 232,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 215,
                      "end": 231,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 215,
                        "end": 224,
                        "object": {
                          "type": "ThisExpression",
                          "start": 215,
                          "end": 219
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 224,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 231,
                        "decorators": [],
                        "name": "test",
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
          },
          {
            "type": "MethodDefinition",
            "start": 240,
            "end": 320,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 247,
              "decorators": [],
              "name": "getTest",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 320,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 320,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 256,
                    "end": 302,
                    "test": {
                      "type": "MemberExpression",
                      "start": 260,
                      "end": 269,
                      "object": {
                        "type": "ThisExpression",
                        "start": 260,
                        "end": 264
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 269,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 271,
                      "end": 302,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 279,
                          "end": 296,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 286,
                            "end": 295,
                            "object": {
                              "type": "ThisExpression",
                              "start": 286,
                              "end": 290
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 291,
                              "end": 295,
                              "decorators": [],
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 307,
                    "end": 316,
                    "argument": {
                      "type": "Literal",
                      "start": 314,
                      "end": 315,
                      "value": 0,
                      "raw": "0"
                    }
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
      "start": 381,
      "end": 518,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 395,
        "decorators": [],
        "name": "Example3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 396,
        "end": 518,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 400,
            "end": 415,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 414,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 419,
            "end": 516,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 430,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 516,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 431,
                  "end": 440,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 434,
                      "end": 440
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 442,
                "end": 516,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 448,
                    "end": 463,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 448,
                      "end": 462,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 448,
                        "end": 458,
                        "object": {
                          "type": "ThisExpression",
                          "start": 448,
                          "end": 452
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 453,
                          "end": 458,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 462,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 469,
                    "end": 512,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 473,
                      "end": 478,
                      "left": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 477,
                        "end": 478,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 480,
                      "end": 512,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 488,
                          "end": 506,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 488,
                            "end": 505,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 488,
                              "end": 498,
                              "object": {
                                "type": "ThisExpression",
                                "start": 488,
                                "end": 492
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 493,
                                "end": 498,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 501,
                              "end": 505,
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
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
      "start": 520,
      "end": 542,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 541,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 541,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 543,
      "end": 669,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 549,
        "end": 557,
        "decorators": [],
        "name": "Example4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 558,
        "end": 669,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 562,
            "end": 584,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 578,
              "end": 583,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "StaticBlock",
            "start": 587,
            "end": 667,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 600,
                "end": 615,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 600,
                  "end": 614,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 600,
                    "end": 610,
                    "object": {
                      "type": "ThisExpression",
                      "start": 600,
                      "end": 604
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 610,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 613,
                    "end": 614,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "directive": null
              },
              {
                "type": "IfStatement",
                "start": 620,
                "end": 663,
                "test": {
                  "type": "BinaryExpression",
                  "start": 624,
                  "end": 629,
                  "left": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 625,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 628,
                    "end": 629,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 631,
                  "end": 663,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 639,
                      "end": 657,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 639,
                        "end": 656,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 639,
                          "end": 649,
                          "object": {
                            "type": "ThisExpression",
                            "start": 639,
                            "end": 643
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 644,
                            "end": 649,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 652,
                          "end": 656,
                          "value": null,
                          "raw": "null"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "alternate": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 671,
      "end": 723,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 685,
        "decorators": [],
        "name": "Example5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 723,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 690,
            "end": 712,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 706,
              "end": 711,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 724,
      "end": 745,
      "expression": {
        "type": "AssignmentExpression",
        "start": 724,
        "end": 744,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 724,
          "end": 738,
          "object": {
            "type": "Identifier",
            "start": 724,
            "end": 732,
            "decorators": [],
            "name": "Example5",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 733,
            "end": 738,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 741,
          "end": 744,
          "value": 123,
          "raw": "123"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 763,
      "expression": {
        "type": "UpdateExpression",
        "start": 746,
        "end": 762,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 746,
          "end": 760,
          "object": {
            "type": "Identifier",
            "start": 746,
            "end": 754,
            "decorators": [],
            "name": "Example5",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 755,
            "end": 760,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
