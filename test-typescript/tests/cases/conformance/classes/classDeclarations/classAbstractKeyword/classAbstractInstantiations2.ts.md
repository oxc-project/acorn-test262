__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1118,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 114,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 83,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 81,
                    "argument": {
                      "type": "CallExpression",
                      "start": 70,
                      "end": 80,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 70,
                        "end": 78,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 70,
                          "end": 74
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 78,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 54,
                  "end": 60
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 88,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 100,
              "end": 112,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 105,
                  "end": 111
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 116,
        "end": 121,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 149,
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 141,
                "end": 149,
                "exprName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 171,
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 163,
                "end": 171,
                "exprName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 216,
        "end": 222,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 220,
          "end": 222,
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 326,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 265,
        "end": 326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 271,
            "end": 283,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 271,
              "end": 282,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 275,
                "end": 282,
                "decorators": [],
                "name": "Factory",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 244,
        "decorators": [],
        "name": "constructB",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 245,
          "end": 263,
          "decorators": [],
          "name": "Factory",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 253,
            "end": 263,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 255,
              "end": 263,
              "exprName": {
                "type": "Identifier",
                "start": 262,
                "end": 263,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 347,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 340,
        "end": 346,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 344,
          "end": 346,
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 400,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 396,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 396,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 393,
                "end": 396
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 408,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 402,
        "end": 407,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 406,
          "end": 407,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 451,
      "end": 472,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 469,
        "end": 472,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 457,
        "end": 458,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 467,
        "end": 468,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 508,
      "end": 538,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 535,
        "end": 538,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 524,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 533,
        "end": 534,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 548,
      "end": 631,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 566,
        "end": 631,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 610,
            "end": 629,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 610,
              "end": 613,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 613,
              "end": 629,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 616,
                "end": 629,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 618,
                    "end": 627,
                    "argument": {
                      "type": "Literal",
                      "start": 625,
                      "end": 626,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 555,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 564,
        "end": 565,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 633,
      "end": 716,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 660,
        "end": 716,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 666,
            "end": 690,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 675,
              "end": 678,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 678,
              "end": 690,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 681,
                "end": 689,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 683,
                  "end": 689
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 695,
            "end": 714,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 695,
              "end": 698,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 698,
              "end": 714,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 701,
                "end": 714,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 703,
                    "end": 712,
                    "argument": {
                      "type": "Literal",
                      "start": 710,
                      "end": 711,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 649,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 658,
        "end": 659,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 718,
      "end": 1042,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 735,
        "end": 1042,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 741,
            "end": 775,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 750,
              "end": 753,
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 753,
              "end": 775,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 764,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 758,
                      "end": 764
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 766,
                "end": 774,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 768,
                  "end": 774
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 780,
            "end": 804,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 789,
              "end": 792,
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 792,
              "end": 804,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 795,
                "end": 803,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 797,
                  "end": 803
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 809,
            "end": 820,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 811,
              "end": 819,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 813,
                "end": 819
              }
            },
            "value": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 825,
            "end": 872,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 837,
              "decorators": [],
              "name": "quz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 837,
              "end": 872,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 838,
                  "end": 848,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 840,
                    "end": 848,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 842,
                      "end": 848
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 850,
                  "end": 860,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 852,
                    "end": 860,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 854,
                      "end": 860
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 862,
                "end": 871,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 864,
                  "end": 871
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 920,
            "end": 944,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 929,
              "end": 932,
              "decorators": [],
              "name": "nom",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 932,
              "end": 944,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 934,
                "end": 943,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 936,
                  "end": 943
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 949,
            "end": 974,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 952,
              "decorators": [],
              "name": "nom",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 952,
              "end": 974,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 953,
                  "end": 963,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 955,
                    "end": 963,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 957,
                      "end": 963
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 964,
                "end": 973,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 966,
                  "end": 973
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 733,
        "end": 734,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1044,
      "end": 1118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1052,
        "end": 1118,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 1092,
            "end": 1116,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1101,
              "end": 1104,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1104,
              "end": 1116,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1107,
                "end": 1115,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1109,
                  "end": 1115
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1050,
        "end": 1051,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
