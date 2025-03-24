__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 79,
  "end": 1184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 89,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 103,
              "name": "data",
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
              "start": 103,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 105,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 132,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 116,
              "name": "next",
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
              "start": 116,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 122,
                  "name": "List",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 122,
                  "end": 131,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 123,
                      "end": 130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 127,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 127,
                        "end": 130,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 128,
                            "end": 129,
                            "typeName": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 129,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 136,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 148,
        "name": "MyList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 197,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 162,
              "name": "data",
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
              "start": 162,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 171,
            "end": 195,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 175,
              "name": "next",
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
              "start": 175,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 183,
                  "name": "MyList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 183,
                  "end": 194,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 184,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 190,
                        "name": "MyList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 190,
                        "end": 193,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 191,
                            "end": 192,
                            "typeName": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 192,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 148,
        "end": 151,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 150,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 208,
            "name": "list1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 211,
            "end": 229,
            "callee": {
              "type": "Identifier",
              "start": 215,
              "end": 219,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 219,
              "end": 227,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 220,
                  "end": 226
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 240,
            "name": "list2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 243,
            "end": 261,
            "callee": {
              "type": "Identifier",
              "start": 247,
              "end": 251,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 251,
              "end": 259,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 252,
                  "end": 258
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 275,
            "name": "myList1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 278,
            "end": 298,
            "callee": {
              "type": "Identifier",
              "start": 282,
              "end": 288,
              "name": "MyList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 288,
              "end": 296,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 289,
                  "end": 295
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 311,
            "name": "myList2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 314,
            "end": 334,
            "callee": {
              "type": "Identifier",
              "start": 318,
              "end": 324,
              "name": "MyList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 324,
              "end": 332,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 325,
                  "end": 331
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 353,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 352,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 337,
          "end": 342,
          "name": "list1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 345,
          "end": 352,
          "name": "myList1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 400,
      "expression": {
        "type": "AssignmentExpression",
        "start": 384,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 384,
          "end": 389,
          "name": "list1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 392,
          "end": 399,
          "name": "myList2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 426,
      "end": 442,
      "expression": {
        "type": "AssignmentExpression",
        "start": 426,
        "end": 441,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 426,
          "end": 431,
          "name": "list2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 434,
          "end": 441,
          "name": "myList1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 473,
      "end": 489,
      "expression": {
        "type": "AssignmentExpression",
        "start": 473,
        "end": 488,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 473,
          "end": 478,
          "name": "list2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 481,
          "end": 488,
          "name": "myList2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 515,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 525,
            "name": "rList1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 528,
            "end": 552,
            "callee": {
              "type": "Identifier",
              "start": 532,
              "end": 536,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 536,
              "end": 550,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 537,
                  "end": 549,
                  "typeName": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 541,
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 541,
                    "end": 549,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 542,
                        "end": 548
                      }
                    ]
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 596,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 595,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 566,
            "name": "rMyList1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 569,
            "end": 595,
            "callee": {
              "type": "Identifier",
              "start": 573,
              "end": 577,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 577,
              "end": 593,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 578,
                  "end": 592,
                  "typeName": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 584,
                    "name": "MyList",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 584,
                    "end": 592,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 585,
                        "end": 591
                      }
                    ]
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 597,
      "end": 615,
      "expression": {
        "type": "AssignmentExpression",
        "start": 597,
        "end": 614,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 597,
          "end": 603,
          "name": "rList1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 606,
          "end": 614,
          "name": "rMyList1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 647,
      "end": 892,
      "id": {
        "type": "Identifier",
        "start": 656,
        "end": 659,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 710,
          "end": 714,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 711,
            "end": 714,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 713,
              "end": 714,
              "typeName": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "name": "T",
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
          "start": 716,
          "end": 720,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 717,
            "end": 720,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 719,
              "end": 720,
              "typeName": {
                "type": "Identifier",
                "start": 719,
                "end": 720,
                "name": "U",
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
        "start": 722,
        "end": 892,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 728,
            "end": 734,
            "expression": {
              "type": "AssignmentExpression",
              "start": 728,
              "end": 733,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 748,
            "end": 754,
            "expression": {
              "type": "AssignmentExpression",
              "start": 748,
              "end": 753,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 752,
                "end": 753,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 769,
            "end": 789,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 773,
                "end": 788,
                "id": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 788,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 774,
                    "end": 788,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 776,
                      "end": 788,
                      "typeName": {
                        "type": "Identifier",
                        "start": 776,
                        "end": 780,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 780,
                        "end": 788,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 781,
                            "end": 787
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 794,
            "end": 816,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 798,
                "end": 815,
                "id": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 815,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 799,
                    "end": 815,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 801,
                      "end": 815,
                      "typeName": {
                        "type": "Identifier",
                        "start": 801,
                        "end": 807,
                        "name": "MyList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 807,
                        "end": 815,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 808,
                            "end": 814
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 821,
            "end": 827,
            "expression": {
              "type": "AssignmentExpression",
              "start": 821,
              "end": 826,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 821,
                "end": 822,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 825,
                "end": 826,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 838,
            "end": 844,
            "expression": {
              "type": "AssignmentExpression",
              "start": 838,
              "end": 843,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 838,
                "end": 839,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 858,
            "end": 864,
            "expression": {
              "type": "AssignmentExpression",
              "start": 858,
              "end": 863,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 878,
            "end": 884,
            "expression": {
              "type": "AssignmentExpression",
              "start": 878,
              "end": 883,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 878,
                "end": 879,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 882,
                "end": 883,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 659,
        "end": 709,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 660,
            "end": 682,
            "name": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 670,
              "end": 682,
              "typeName": {
                "type": "Identifier",
                "start": 670,
                "end": 674,
                "name": "List",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 674,
                "end": 682,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 675,
                    "end": 681
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 684,
            "end": 708,
            "name": {
              "type": "Identifier",
              "start": 684,
              "end": 685,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 694,
              "end": 708,
              "typeName": {
                "type": "Identifier",
                "start": 694,
                "end": 700,
                "name": "MyList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 700,
                "end": 708,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 701,
                    "end": 707
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 894,
      "end": 1184,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 907,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 947,
          "end": 951,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 948,
            "end": 951,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 950,
              "end": 951,
              "typeName": {
                "type": "Identifier",
                "start": 950,
                "end": 951,
                "name": "T",
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
          "start": 953,
          "end": 957,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 954,
            "end": 957,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 956,
              "end": 957,
              "typeName": {
                "type": "Identifier",
                "start": 956,
                "end": 957,
                "name": "U",
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
        "start": 959,
        "end": 1184,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 965,
            "end": 971,
            "expression": {
              "type": "AssignmentExpression",
              "start": 965,
              "end": 970,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 965,
                "end": 966,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 985,
            "end": 991,
            "expression": {
              "type": "AssignmentExpression",
              "start": 985,
              "end": 990,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 985,
                "end": 986,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 989,
                "end": 990,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1060,
            "end": 1080,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1064,
                "end": 1079,
                "id": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1079,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1065,
                    "end": 1079,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1067,
                      "end": 1079,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1067,
                        "end": 1071,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1071,
                        "end": 1079,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1072,
                            "end": 1078
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1107,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1106,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1106,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1090,
                    "end": 1106,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1092,
                      "end": 1106,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1092,
                        "end": 1098,
                        "name": "MyList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1098,
                        "end": 1106,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1099,
                            "end": 1105
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1113,
            "end": 1119,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1113,
              "end": 1118,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1113,
                "end": 1114,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1117,
                "end": 1118,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1133,
            "end": 1139,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1133,
              "end": 1138,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1133,
                "end": 1134,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1153,
            "end": 1159,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1153,
              "end": 1158,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1153,
                "end": 1154,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1157,
                "end": 1158,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1170,
            "end": 1176,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1170,
              "end": 1175,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1170,
                "end": 1171,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1174,
                "end": 1175,
                "name": "u",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 907,
        "end": 946,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 908,
            "end": 919,
            "name": {
              "type": "Identifier",
              "start": 908,
              "end": 909,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 918,
              "end": 919,
              "typeName": {
                "type": "Identifier",
                "start": 918,
                "end": 919,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 921,
            "end": 945,
            "name": {
              "type": "Identifier",
              "start": 921,
              "end": 922,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 931,
              "end": 945,
              "typeName": {
                "type": "Identifier",
                "start": 931,
                "end": 937,
                "name": "MyList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 937,
                "end": 945,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 938,
                    "end": 944
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
