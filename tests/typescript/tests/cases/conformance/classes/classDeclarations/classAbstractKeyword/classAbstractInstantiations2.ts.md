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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 50
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 54,
                  "end": 60
                },
                "start": 52,
                "end": 60
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 70,
                          "end": 74
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 78
                        },
                        "optional": false,
                        "computed": false,
                        "start": 70,
                        "end": 78
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 70,
                      "end": 80
                    },
                    "start": 63,
                    "end": 81
                  }
                ],
                "start": 61,
                "end": 83
              },
              "expression": false,
              "start": 50,
              "end": 83
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 47,
            "end": 83
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 100
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
              },
              "body": null,
              "expression": false,
              "start": 100,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 88,
            "end": 112
          }
        ],
        "start": 41,
        "end": 114
      },
      "abstract": true,
      "declare": false,
      "start": 24,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "typeArguments": null,
        "arguments": [],
        "start": 116,
        "end": 121
      },
      "directive": null,
      "start": 116,
      "end": 122
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "typeArguments": null,
                "start": 141,
                "end": 149
              },
              "start": 139,
              "end": 149
            },
            "start": 137,
            "end": 149
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "definite": false,
          "start": 137,
          "end": 153
        }
      ],
      "declare": false,
      "start": 133,
      "end": 154
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 171
                },
                "typeArguments": null,
                "start": 163,
                "end": 171
              },
              "start": 161,
              "end": 171
            },
            "start": 159,
            "end": 171
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 176
          },
          "definite": false,
          "start": 159,
          "end": 176
        }
      ],
      "declare": false,
      "start": 155,
      "end": 177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 222
        },
        "typeArguments": null,
        "arguments": [],
        "start": 216,
        "end": 222
      },
      "directive": null,
      "start": 216,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "constructB",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Factory",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 263
              },
              "typeArguments": null,
              "start": 255,
              "end": 263
            },
            "start": 253,
            "end": 263
          },
          "start": 245,
          "end": 263
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Factory",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 282
              },
              "typeArguments": null,
              "arguments": [],
              "start": 271,
              "end": 282
            },
            "directive": null,
            "start": 271,
            "end": 283
          }
        ],
        "start": 265,
        "end": 326
      },
      "expression": false,
      "start": 225,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "definite": false,
          "start": 332,
          "end": 338
        }
      ],
      "declare": false,
      "start": 328,
      "end": 339
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 346
        },
        "typeArguments": null,
        "arguments": [],
        "start": 340,
        "end": 346
      },
      "directive": null,
      "start": 340,
      "end": 347
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 393,
                "end": 396
              },
              "start": 391,
              "end": 396
            },
            "start": 389,
            "end": 396
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 400
          },
          "definite": false,
          "start": 389,
          "end": 400
        }
      ],
      "declare": false,
      "start": 385,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 406,
          "end": 407
        },
        "typeArguments": null,
        "arguments": [],
        "start": 402,
        "end": 407
      },
      "directive": null,
      "start": 402,
      "end": 408
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 458
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 468
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 469,
        "end": 472
      },
      "abstract": false,
      "declare": false,
      "start": 451,
      "end": 472
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 523,
        "end": 524
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 534
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 535,
        "end": 538
      },
      "abstract": true,
      "declare": false,
      "start": 508,
      "end": 538
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 555
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 565
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 613
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 625,
                      "end": 626
                    },
                    "start": 618,
                    "end": 627
                  }
                ],
                "start": 616,
                "end": 629
              },
              "expression": false,
              "start": 613,
              "end": 629
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 610,
            "end": 629
          }
        ],
        "start": 566,
        "end": 631
      },
      "abstract": false,
      "declare": false,
      "start": 548,
      "end": 631
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 649
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 658,
        "end": 659
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 678
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 683,
                  "end": 689
                },
                "start": 681,
                "end": 689
              },
              "body": null,
              "expression": false,
              "start": 678,
              "end": 690
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 666,
            "end": 690
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 698
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 710,
                      "end": 711
                    },
                    "start": 703,
                    "end": 712
                  }
                ],
                "start": 701,
                "end": 714
              },
              "expression": false,
              "start": 698,
              "end": 714
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 695,
            "end": 714
          }
        ],
        "start": 660,
        "end": 716
      },
      "abstract": true,
      "declare": false,
      "start": 633,
      "end": 716
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 733,
        "end": 734
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 753
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 758,
                      "end": 764
                    },
                    "start": 756,
                    "end": 764
                  },
                  "start": 754,
                  "end": 764
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 768,
                  "end": 774
                },
                "start": 766,
                "end": 774
              },
              "body": null,
              "expression": false,
              "start": 753,
              "end": 775
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 741,
            "end": 775
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "qux",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 792
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 797,
                  "end": 803
                },
                "start": 795,
                "end": 803
              },
              "body": null,
              "expression": false,
              "start": 792,
              "end": 804
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 780,
            "end": 804
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
              "start": 809,
              "end": 810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 813,
                "end": 819
              },
              "start": 811,
              "end": 819
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
            "start": 809,
            "end": 820
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "quz",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 837
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 842,
                      "end": 848
                    },
                    "start": 840,
                    "end": 848
                  },
                  "start": 838,
                  "end": 848
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 854,
                      "end": 860
                    },
                    "start": 852,
                    "end": 860
                  },
                  "start": 850,
                  "end": 860
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 864,
                  "end": 871
                },
                "start": 862,
                "end": 871
              },
              "body": null,
              "expression": false,
              "start": 837,
              "end": 872
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 825,
            "end": 872
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nom",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 932
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 936,
                  "end": 943
                },
                "start": 934,
                "end": 943
              },
              "body": null,
              "expression": false,
              "start": 932,
              "end": 944
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 920,
            "end": 944
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nom",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 952
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 957,
                      "end": 963
                    },
                    "start": 955,
                    "end": 963
                  },
                  "start": 953,
                  "end": 963
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 966,
                  "end": 973
                },
                "start": 964,
                "end": 973
              },
              "body": null,
              "expression": false,
              "start": 952,
              "end": 974
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 949,
            "end": 974
          }
        ],
        "start": 735,
        "end": 1042
      },
      "abstract": true,
      "declare": false,
      "start": 718,
      "end": 1042
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 1050,
        "end": 1051
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 1101,
              "end": 1104
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1109,
                  "end": 1115
                },
                "start": 1107,
                "end": 1115
              },
              "body": null,
              "expression": false,
              "start": 1104,
              "end": 1116
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1092,
            "end": 1116
          }
        ],
        "start": 1052,
        "end": 1118
      },
      "abstract": false,
      "declare": false,
      "start": 1044,
      "end": 1118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1118
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 24,
    "end": 32,
    "range": [
      24,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 70,
    "end": 74,
    "range": [
      70,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 88,
    "end": 96,
    "range": [
      88,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 133,
    "end": 136,
    "range": [
      133,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 137,
    "end": 139,
    "range": [
      137,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158,
    "range": [
      155,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 159,
    "end": 161,
    "range": [
      159,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233,
    "range": [
      225,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "constructB",
    "start": 234,
    "end": 244,
    "range": [
      234,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 245,
    "end": 252,
    "range": [
      245,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 255,
    "end": 261,
    "range": [
      255,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 271,
    "end": 274,
    "range": [
      271,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "Factory",
    "start": 275,
    "end": 282,
    "range": [
      275,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 328,
    "end": 331,
    "range": [
      328,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 332,
    "end": 334,
    "range": [
      332,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343,
    "range": [
      340,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 344,
    "end": 346,
    "range": [
      344,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 393,
    "end": 396,
    "range": [
      393,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 402,
    "end": 405,
    "range": [
      402,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 451,
    "end": 456,
    "range": [
      451,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 459,
    "end": 466,
    "range": [
      459,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 508,
    "end": 516,
    "range": [
      508,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 517,
    "end": 522,
    "range": [
      517,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 525,
    "end": 532,
    "range": [
      525,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 548,
    "end": 553,
    "range": [
      548,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 556,
    "end": 563,
    "range": [
      556,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 610,
    "end": 613,
    "range": [
      610,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 618,
    "end": 624,
    "range": [
      618,
      624
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 633,
    "end": 641,
    "range": [
      633,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 642,
    "end": 647,
    "range": [
      642,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 650,
    "end": 657,
    "range": [
      650,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 666,
    "end": 674,
    "range": [
      666,
      674
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 675,
    "end": 678,
    "range": [
      675,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 683,
    "end": 689,
    "range": [
      683,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 695,
    "end": 698,
    "range": [
      695,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 703,
    "end": 709,
    "range": [
      703,
      709
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 718,
    "end": 726,
    "range": [
      718,
      726
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 727,
    "end": 732,
    "range": [
      727,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 741,
    "end": 749,
    "range": [
      741,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 750,
    "end": 753,
    "range": [
      750,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
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
    "value": "number",
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
    "value": ":",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 768,
    "end": 774,
    "range": [
      768,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 780,
    "end": 788,
    "range": [
      780,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 789,
    "end": 792,
    "range": [
      789,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 813,
    "end": 819,
    "range": [
      813,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 825,
    "end": 833,
    "range": [
      825,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "quz",
    "start": 834,
    "end": 837,
    "range": [
      834,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 842,
    "end": 848,
    "range": [
      842,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 854,
    "end": 860,
    "range": [
      854,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 864,
    "end": 871,
    "range": [
      864,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 920,
    "end": 928,
    "range": [
      920,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "nom",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 936,
    "end": 943,
    "range": [
      936,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "nom",
    "start": 949,
    "end": 952,
    "range": [
      949,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 957,
    "end": 963,
    "range": [
      957,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 966,
    "end": 973,
    "range": [
      966,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1044,
    "end": 1049,
    "range": [
      1044,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 1092,
    "end": 1100,
    "range": [
      1092,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1101,
    "end": 1104,
    "range": [
      1101,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1109,
    "end": 1115,
    "range": [
      1109,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  }
]
```
