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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": []
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
      "start": 24,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 114,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 70,
                        "end": 78,
                        "object": {
                          "type": "ThisExpression",
                          "start": 70,
                          "end": 74
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 78,
                          "name": "bar",
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
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 54,
                  "end": 60
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 88,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 100,
              "end": 112,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 103,
                "end": 111,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 105,
                  "end": 111
                }
              }
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
      "type": "ExpressionStatement",
      "start": 116,
      "end": 122,
      "expression": {
        "type": "NewExpression",
        "start": 116,
        "end": 121,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 149,
            "name": "BB",
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
                  "name": "B",
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
          "init": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 171,
            "name": "AA",
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
                  "name": "A",
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
          "init": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "name": "BB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 223,
      "expression": {
        "type": "NewExpression",
        "start": 216,
        "end": 222,
        "callee": {
          "type": "Identifier",
          "start": 220,
          "end": 222,
          "name": "AA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 244,
        "name": "constructB",
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
          "start": 245,
          "end": 263,
          "name": "Factory",
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
                "name": "B",
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
        "start": 265,
        "end": 326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 271,
            "end": 283,
            "expression": {
              "type": "NewExpression",
              "start": 271,
              "end": 282,
              "callee": {
                "type": "Identifier",
                "start": 275,
                "end": 282,
                "name": "Factory",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "name": "BB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 340,
      "end": 347,
      "expression": {
        "type": "NewExpression",
        "start": 340,
        "end": 346,
        "callee": {
          "type": "Identifier",
          "start": 344,
          "end": 346,
          "name": "BB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 396,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 396,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 393,
                "end": 396
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 408,
      "expression": {
        "type": "NewExpression",
        "start": 402,
        "end": 407,
        "callee": {
          "type": "Identifier",
          "start": 406,
          "end": 407,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 451,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 457,
        "end": 458,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 467,
        "end": 468,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 469,
        "end": 472,
        "body": []
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
      "start": 508,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 524,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 533,
        "end": 534,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 535,
        "end": 538,
        "body": []
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
      "start": 548,
      "end": 631,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 555,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 564,
        "end": 565,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 566,
        "end": 631,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 610,
            "end": 629,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 610,
              "end": 613,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 613,
              "end": 629,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
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
      "start": 633,
      "end": 716,
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 649,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 658,
        "end": 659,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 660,
        "end": 716,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 666,
            "end": 690,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 675,
              "end": 678,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 678,
              "end": 690,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 681,
                "end": 689,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 683,
                  "end": 689
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 695,
            "end": 714,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 695,
              "end": 698,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 698,
              "end": 714,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 2,
                      "raw": "2"
                    }
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
      "start": 718,
      "end": 1042,
      "id": {
        "type": "Identifier",
        "start": 733,
        "end": 734,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 735,
        "end": 1042,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 741,
            "end": 775,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 750,
              "end": 753,
              "name": "qux",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 753,
              "end": 775,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 764,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 758,
                      "end": 764
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
                "start": 766,
                "end": 774,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 768,
                  "end": 774
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 780,
            "end": 804,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 789,
              "end": 792,
              "name": "qux",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 792,
              "end": 804,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 795,
                "end": 803,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 797,
                  "end": 803
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
            "start": 809,
            "end": 820,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 809,
              "end": 810,
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
              "start": 811,
              "end": 819,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 813,
                "end": 819
              }
            },
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 825,
            "end": 872,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 834,
              "end": 837,
              "name": "quz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 837,
              "end": 872,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 838,
                  "end": 848,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 840,
                    "end": 848,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 842,
                      "end": 848
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 850,
                  "end": 860,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 852,
                    "end": 860,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 854,
                      "end": 860
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
                "start": 862,
                "end": 871,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 864,
                  "end": 871
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 920,
            "end": 944,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 929,
              "end": 932,
              "name": "nom",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 932,
              "end": 944,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 934,
                "end": 943,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 936,
                  "end": 943
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 949,
            "end": 974,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 949,
              "end": 952,
              "name": "nom",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 952,
              "end": 974,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 953,
                  "end": 963,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 955,
                    "end": 963,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 957,
                      "end": 963
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
                "start": 964,
                "end": 973,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 966,
                  "end": 973
                }
              }
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
      "start": 1044,
      "end": 1118,
      "id": {
        "type": "Identifier",
        "start": 1050,
        "end": 1051,
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1052,
        "end": 1118,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 1092,
            "end": 1116,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1101,
              "end": 1104,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1104,
              "end": 1116,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1107,
                "end": 1115,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1109,
                  "end": 1115
                }
              }
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
