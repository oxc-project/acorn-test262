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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 89,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 107,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 103,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "start": 112,
            "end": 132,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 116,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "List",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 136,
      "end": 197,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 148,
        "decorators": [],
        "name": "MyList",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 197,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 162,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "start": 171,
            "end": 195,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 175,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "MyList",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 230,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 208,
            "decorators": [],
            "name": "list1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 211,
            "end": 229,
            "callee": {
              "type": "Identifier",
              "start": 215,
              "end": 219,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 262,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 240,
            "decorators": [],
            "name": "list2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 243,
            "end": 261,
            "callee": {
              "type": "Identifier",
              "start": 247,
              "end": 251,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 299,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 275,
            "decorators": [],
            "name": "myList1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 278,
            "end": 298,
            "callee": {
              "type": "Identifier",
              "start": 282,
              "end": 288,
              "decorators": [],
              "name": "MyList",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 335,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 311,
            "decorators": [],
            "name": "myList2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 314,
            "end": 334,
            "callee": {
              "type": "Identifier",
              "start": 318,
              "end": 324,
              "decorators": [],
              "name": "MyList",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "list1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 345,
          "end": 352,
          "decorators": [],
          "name": "myList1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "list1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 392,
          "end": 399,
          "decorators": [],
          "name": "myList2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "list2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 434,
          "end": 441,
          "decorators": [],
          "name": "myList1",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "list2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 481,
          "end": 488,
          "decorators": [],
          "name": "myList2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 515,
      "end": 553,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 552,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 525,
            "decorators": [],
            "name": "rList1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 528,
            "end": 552,
            "callee": {
              "type": "Identifier",
              "start": 532,
              "end": 536,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "typeAnnotation": null
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 554,
      "end": 596,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 595,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 566,
            "decorators": [],
            "name": "rMyList1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 569,
            "end": 595,
            "callee": {
              "type": "Identifier",
              "start": 573,
              "end": 577,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "MyList",
                    "optional": false,
                    "typeAnnotation": null
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "rList1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 606,
          "end": 614,
          "decorators": [],
          "name": "rMyList1",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 670,
              "end": 682,
              "typeName": {
                "type": "Identifier",
                "start": 670,
                "end": 674,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 694,
              "end": 708,
              "typeName": {
                "type": "Identifier",
                "start": 694,
                "end": 700,
                "decorators": [],
                "name": "MyList",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 710,
          "end": 714,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 716,
          "end": 720,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
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
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 752,
                "end": 753,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 769,
            "end": 789,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 773,
                "end": 788,
                "id": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 788,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 794,
            "end": 816,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 798,
                "end": 815,
                "id": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 815,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 825,
                "end": 826,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 862,
                "end": 863,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 882,
                "end": 883,
                "decorators": [],
                "name": "u",
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
      "type": "FunctionDeclaration",
      "start": 894,
      "end": 1184,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 907,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 918,
              "end": 919,
              "typeName": {
                "type": "Identifier",
                "start": 918,
                "end": 919,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 931,
              "end": 945,
              "typeName": {
                "type": "Identifier",
                "start": 931,
                "end": 937,
                "decorators": [],
                "name": "MyList",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 947,
          "end": 951,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 953,
          "end": 957,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
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
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 989,
                "end": 990,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1060,
            "end": 1080,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1064,
                "end": 1079,
                "id": {
                  "type": "Identifier",
                  "start": 1064,
                  "end": 1079,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1107,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1106,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1106,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "MyList",
                        "optional": false,
                        "typeAnnotation": null
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
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1117,
                "end": 1118,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1157,
                "end": 1158,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1174,
                "end": 1175,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
