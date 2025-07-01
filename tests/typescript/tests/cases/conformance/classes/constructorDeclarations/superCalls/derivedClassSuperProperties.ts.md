__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "decorate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              },
              "start": 22,
              "end": 27
            },
            "start": 14,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 27
        }
      ],
      "declare": true,
      "start": 0,
      "end": 28
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 58
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
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 61
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 63,
                "end": 66
              },
              "expression": false,
              "start": 58,
              "end": 66
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 47,
            "end": 66
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "receivesAnything",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 88
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
                  "name": "param",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 95
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 97,
                "end": 100
              },
              "expression": false,
              "start": 88,
              "end": 100
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 100
          }
        ],
        "start": 41,
        "end": 102
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 102
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 118
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 131
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
              "start": 138,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 145,
              "end": 149
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 138,
            "end": 150
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
              "start": 155,
              "end": 166
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 179,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 201
                        },
                        "optional": false,
                        "computed": false,
                        "start": 179,
                        "end": 201
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 179,
                      "end": 203
                    },
                    "directive": null,
                    "start": 179,
                    "end": 204
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 213,
                        "end": 218
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 213,
                      "end": 220
                    },
                    "directive": null,
                    "start": 213,
                    "end": 221
                  }
                ],
                "start": 169,
                "end": 227
              },
              "expression": false,
              "start": 166,
              "end": 227
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 227
          }
        ],
        "start": 132,
        "end": 229
      },
      "abstract": false,
      "declare": false,
      "start": 104,
      "end": 229
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 245
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 258
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
              "start": 265,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 272,
              "end": 276
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 265,
            "end": 277
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
              "start": 282,
              "end": 293
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 306,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 328
                        },
                        "optional": false,
                        "computed": false,
                        "start": 306,
                        "end": 328
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 329,
                          "end": 333
                        }
                      ],
                      "optional": false,
                      "start": 306,
                      "end": 334
                    },
                    "directive": null,
                    "start": 306,
                    "end": 335
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 344,
                        "end": 349
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 344,
                      "end": 351
                    },
                    "directive": null,
                    "start": 344,
                    "end": 352
                  }
                ],
                "start": 296,
                "end": 358
              },
              "expression": false,
              "start": 293,
              "end": 358
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 282,
            "end": 358
          }
        ],
        "start": 259,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 231,
      "end": 360
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 376
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
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
              "start": 396,
              "end": 400
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 403,
              "end": 407
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 396,
            "end": 408
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
              "start": 413,
              "end": 424
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 437,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 459
                        },
                        "optional": false,
                        "computed": false,
                        "start": 437,
                        "end": 459
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 437,
                      "end": 461
                    },
                    "directive": null,
                    "start": 437,
                    "end": 462
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 477,
                          "end": 481
                        }
                      ],
                      "optional": false,
                      "start": 471,
                      "end": 482
                    },
                    "directive": null,
                    "start": 471,
                    "end": 483
                  }
                ],
                "start": 427,
                "end": 489
              },
              "expression": false,
              "start": 424,
              "end": 489
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 413,
            "end": 489
          }
        ],
        "start": 390,
        "end": 491
      },
      "abstract": false,
      "declare": false,
      "start": 362,
      "end": 491
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 499,
        "end": 507
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
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
              "start": 527,
              "end": 531
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 534,
              "end": 538
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 527,
            "end": 539
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
              "start": 544,
              "end": 555
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 568,
                          "end": 573
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 590
                        },
                        "optional": false,
                        "computed": false,
                        "start": 568,
                        "end": 590
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 591,
                          "end": 595
                        }
                      ],
                      "optional": false,
                      "start": 568,
                      "end": 596
                    },
                    "directive": null,
                    "start": 568,
                    "end": 597
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 606,
                        "end": 611
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 612,
                          "end": 616
                        }
                      ],
                      "optional": false,
                      "start": 606,
                      "end": 617
                    },
                    "directive": null,
                    "start": 606,
                    "end": 618
                  }
                ],
                "start": 558,
                "end": 624
              },
              "expression": false,
              "start": 555,
              "end": 624
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 544,
            "end": 624
          }
        ],
        "start": 521,
        "end": 626
      },
      "abstract": false,
      "declare": false,
      "start": 493,
      "end": 626
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null,
        "start": 634,
        "end": 642
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 655
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
              "start": 662,
              "end": 666
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 669,
              "end": 673
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 662,
            "end": 674
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
              "start": 679,
              "end": 690
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 703,
                        "end": 708
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 703,
                      "end": 710
                    },
                    "directive": null,
                    "start": 703,
                    "end": 711
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 720,
                          "end": 725
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 742
                        },
                        "optional": false,
                        "computed": false,
                        "start": 720,
                        "end": 742
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 720,
                      "end": 744
                    },
                    "directive": null,
                    "start": 720,
                    "end": 745
                  }
                ],
                "start": 693,
                "end": 751
              },
              "expression": false,
              "start": 690,
              "end": 751
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 679,
            "end": 751
          }
        ],
        "start": 656,
        "end": 753
      },
      "abstract": false,
      "declare": false,
      "start": 628,
      "end": 753
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived6",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 769
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 782
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
              "start": 789,
              "end": 793
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 796,
              "end": 800
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 789,
            "end": 801
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
              "start": 806,
              "end": 817
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 830,
                        "end": 835
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 836,
                          "end": 840
                        }
                      ],
                      "optional": false,
                      "start": 830,
                      "end": 841
                    },
                    "directive": null,
                    "start": 830,
                    "end": 842
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 851,
                          "end": 856
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 873
                        },
                        "optional": false,
                        "computed": false,
                        "start": 851,
                        "end": 873
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 851,
                      "end": 875
                    },
                    "directive": null,
                    "start": 851,
                    "end": 876
                  }
                ],
                "start": 820,
                "end": 882
              },
              "expression": false,
              "start": 817,
              "end": 882
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 806,
            "end": 882
          }
        ],
        "start": 783,
        "end": 884
      },
      "abstract": false,
      "declare": false,
      "start": 755,
      "end": 884
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived7",
        "optional": false,
        "typeAnnotation": null,
        "start": 892,
        "end": 900
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 913
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
              "start": 920,
              "end": 924
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 927,
              "end": 931
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 920,
            "end": 932
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
              "start": 937,
              "end": 948
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 961,
                        "end": 966
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 961,
                      "end": 968
                    },
                    "directive": null,
                    "start": 961,
                    "end": 969
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 978,
                          "end": 983
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 1000
                        },
                        "optional": false,
                        "computed": false,
                        "start": 978,
                        "end": 1000
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1001,
                          "end": 1005
                        }
                      ],
                      "optional": false,
                      "start": 978,
                      "end": 1006
                    },
                    "directive": null,
                    "start": 978,
                    "end": 1007
                  }
                ],
                "start": 951,
                "end": 1013
              },
              "expression": false,
              "start": 948,
              "end": 1013
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 937,
            "end": 1013
          }
        ],
        "start": 914,
        "end": 1015
      },
      "abstract": false,
      "declare": false,
      "start": 886,
      "end": 1015
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1023,
        "end": 1031
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1044
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
              "start": 1051,
              "end": 1055
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1058,
              "end": 1062
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1051,
            "end": 1063
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
              "start": 1068,
              "end": 1079
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1092,
                        "end": 1097
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1098,
                          "end": 1102
                        }
                      ],
                      "optional": false,
                      "start": 1092,
                      "end": 1103
                    },
                    "directive": null,
                    "start": 1092,
                    "end": 1104
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1113,
                          "end": 1118
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1119,
                          "end": 1135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1113,
                        "end": 1135
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1136,
                          "end": 1140
                        }
                      ],
                      "optional": false,
                      "start": 1113,
                      "end": 1141
                    },
                    "directive": null,
                    "start": 1113,
                    "end": 1142
                  }
                ],
                "start": 1082,
                "end": 1148
              },
              "expression": false,
              "start": 1079,
              "end": 1148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1068,
            "end": 1148
          }
        ],
        "start": 1045,
        "end": 1150
      },
      "abstract": false,
      "declare": false,
      "start": 1017,
      "end": 1150
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithArrowFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1182
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1195
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
              "start": 1202,
              "end": 1206
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1209,
              "end": 1213
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1202,
            "end": 1214
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
              "start": 1219,
              "end": 1230
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "ThisExpression",
                          "start": 1250,
                          "end": 1254
                        },
                        "id": null,
                        "generator": false,
                        "start": 1244,
                        "end": 1254
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1243,
                      "end": 1257
                    },
                    "directive": null,
                    "start": 1243,
                    "end": 1258
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1267,
                        "end": 1272
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1267,
                      "end": 1274
                    },
                    "directive": null,
                    "start": 1267,
                    "end": 1275
                  }
                ],
                "start": 1233,
                "end": 1281
              },
              "expression": false,
              "start": 1230,
              "end": 1281
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1219,
            "end": 1281
          }
        ],
        "start": 1196,
        "end": 1283
      },
      "abstract": false,
      "declare": false,
      "start": 1152,
      "end": 1283
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithArrowFunctionParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1324
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1333,
        "end": 1337
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
              "start": 1344,
              "end": 1348
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1351,
              "end": 1355
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1344,
            "end": 1356
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
              "start": 1361,
              "end": 1372
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1391,
                          "end": 1397
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1401,
                                "end": 1406
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1409,
                                "end": 1413
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1401,
                              "end": 1413
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 1418,
                            "end": 1420
                          },
                          "id": null,
                          "generator": false,
                          "start": 1400,
                          "end": 1420
                        },
                        "definite": false,
                        "start": 1391,
                        "end": 1420
                      }
                    ],
                    "declare": false,
                    "start": 1385,
                    "end": 1421
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1430,
                        "end": 1435
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1430,
                      "end": 1437
                    },
                    "directive": null,
                    "start": 1430,
                    "end": 1438
                  }
                ],
                "start": 1375,
                "end": 1444
              },
              "expression": false,
              "start": 1372,
              "end": 1444
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1361,
            "end": 1444
          }
        ],
        "start": 1338,
        "end": 1446
      },
      "abstract": false,
      "declare": false,
      "start": 1285,
      "end": 1446
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDecoratorOnClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1454,
        "end": 1481
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1490,
        "end": 1494
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
              "start": 1501,
              "end": 1505
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1508,
              "end": 1512
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1501,
            "end": 1513
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
              "start": 1518,
              "end": 1529
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
                    "type": "ClassDeclaration",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "decorate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1543,
                            "end": 1551
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 1552,
                              "end": 1556
                            }
                          ],
                          "optional": false,
                          "start": 1543,
                          "end": 1557
                        },
                        "start": 1542,
                        "end": 1557
                      }
                    ],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1572,
                      "end": 1582
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1583,
                      "end": 1586
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1542,
                    "end": 1586
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1596,
                        "end": 1601
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1596,
                      "end": 1603
                    },
                    "directive": null,
                    "start": 1596,
                    "end": 1604
                  }
                ],
                "start": 1532,
                "end": 1610
              },
              "expression": false,
              "start": 1529,
              "end": 1610
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1518,
            "end": 1610
          }
        ],
        "start": 1495,
        "end": 1612
      },
      "abstract": false,
      "declare": false,
      "start": 1448,
      "end": 1612
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDecoratorOnClassMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 1620,
        "end": 1653
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1662,
        "end": 1666
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
              "start": 1673,
              "end": 1677
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1680,
              "end": 1684
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1673,
            "end": 1685
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
              "start": 1690,
              "end": 1701
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1720,
                      "end": 1730
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
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1746,
                                  "end": 1754
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 1755,
                                    "end": 1759
                                  }
                                ],
                                "optional": false,
                                "start": 1746,
                                "end": 1760
                              },
                              "start": 1745,
                              "end": 1760
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "innerMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1773,
                            "end": 1784
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
                              "body": [],
                              "start": 1787,
                              "end": 1790
                            },
                            "expression": false,
                            "start": 1784,
                            "end": 1790
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1745,
                          "end": 1790
                        }
                      ],
                      "start": 1731,
                      "end": 1800
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1714,
                    "end": 1800
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1810,
                        "end": 1815
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1810,
                      "end": 1817
                    },
                    "directive": null,
                    "start": 1810,
                    "end": 1818
                  }
                ],
                "start": 1704,
                "end": 1824
              },
              "expression": false,
              "start": 1701,
              "end": 1824
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1690,
            "end": 1824
          }
        ],
        "start": 1667,
        "end": 1826
      },
      "abstract": false,
      "declare": false,
      "start": 1614,
      "end": 1826
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDecoratorOnClassProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 1834,
        "end": 1869
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1878,
        "end": 1882
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
              "start": 1889,
              "end": 1893
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1896,
              "end": 1900
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1889,
            "end": 1901
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
              "start": 1906,
              "end": 1917
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1936,
                      "end": 1946
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
                          "decorators": [
                            {
                              "type": "Decorator",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1962,
                                  "end": 1970
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 1971,
                                    "end": 1975
                                  }
                                ],
                                "optional": false,
                                "start": 1962,
                                "end": 1976
                              },
                              "start": 1961,
                              "end": 1976
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "innerProp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1989,
                            "end": 1998
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2001,
                            "end": 2005
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1961,
                          "end": 2006
                        }
                      ],
                      "start": 1947,
                      "end": 2016
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1930,
                    "end": 2016
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2026,
                        "end": 2031
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2026,
                      "end": 2033
                    },
                    "directive": null,
                    "start": 2026,
                    "end": 2034
                  }
                ],
                "start": 1920,
                "end": 2040
              },
              "expression": false,
              "start": 1917,
              "end": 2040
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1906,
            "end": 2040
          }
        ],
        "start": 1883,
        "end": 2042
      },
      "abstract": false,
      "declare": false,
      "start": 1828,
      "end": 2042
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithFunctionDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 2050,
        "end": 2080
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2089,
        "end": 2093
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
              "start": 2100,
              "end": 2104
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2107,
              "end": 2111
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2100,
            "end": 2112
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
              "start": 2117,
              "end": 2128
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "declaration",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2150,
                      "end": 2161
                    },
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
                            "type": "ThisExpression",
                            "start": 2185,
                            "end": 2189
                          },
                          "start": 2178,
                          "end": 2190
                        }
                      ],
                      "start": 2164,
                      "end": 2200
                    },
                    "expression": false,
                    "start": 2141,
                    "end": 2200
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2209,
                        "end": 2214
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2209,
                      "end": 2216
                    },
                    "directive": null,
                    "start": 2209,
                    "end": 2217
                  }
                ],
                "start": 2131,
                "end": 2223
              },
              "expression": false,
              "start": 2128,
              "end": 2223
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2117,
            "end": 2223
          }
        ],
        "start": 2094,
        "end": 2225
      },
      "abstract": false,
      "declare": false,
      "start": 2044,
      "end": 2225
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithFunctionDeclarationAndThisParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 2233,
        "end": 2275
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2284,
        "end": 2288
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
              "start": 2295,
              "end": 2299
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2302,
              "end": 2306
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2295,
            "end": 2307
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
              "start": 2312,
              "end": 2323
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "declaration",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2345,
                      "end": 2356
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2357,
                          "end": 2362
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 2365,
                          "end": 2369
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2357,
                        "end": 2369
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2392,
                            "end": 2397
                          },
                          "start": 2385,
                          "end": 2398
                        }
                      ],
                      "start": 2371,
                      "end": 2408
                    },
                    "expression": false,
                    "start": 2336,
                    "end": 2408
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2417,
                        "end": 2422
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2417,
                      "end": 2424
                    },
                    "directive": null,
                    "start": 2417,
                    "end": 2425
                  }
                ],
                "start": 2326,
                "end": 2431
              },
              "expression": false,
              "start": 2323,
              "end": 2431
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2312,
            "end": 2431
          }
        ],
        "start": 2289,
        "end": 2433
      },
      "abstract": false,
      "declare": false,
      "start": 2227,
      "end": 2433
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithFunctionExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2441,
        "end": 2470
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2479,
        "end": 2483
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
              "start": 2490,
              "end": 2494
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2497,
              "end": 2501
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2490,
            "end": 2502
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
              "start": 2507,
              "end": 2518
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
                      "type": "CallExpression",
                      "callee": {
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
                                "type": "ThisExpression",
                                "start": 2565,
                                "end": 2569
                              },
                              "start": 2558,
                              "end": 2570
                            }
                          ],
                          "start": 2544,
                          "end": 2580
                        },
                        "expression": false,
                        "start": 2532,
                        "end": 2580
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2531,
                      "end": 2583
                    },
                    "directive": null,
                    "start": 2531,
                    "end": 2584
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2593,
                        "end": 2598
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2593,
                      "end": 2600
                    },
                    "directive": null,
                    "start": 2593,
                    "end": 2601
                  }
                ],
                "start": 2521,
                "end": 2607
              },
              "expression": false,
              "start": 2518,
              "end": 2607
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2507,
            "end": 2607
          }
        ],
        "start": 2484,
        "end": 2609
      },
      "abstract": false,
      "declare": false,
      "start": 2435,
      "end": 2609
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithParenthesis",
        "optional": false,
        "typeAnnotation": null,
        "start": 2617,
        "end": 2639
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2648,
        "end": 2652
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
              "start": 2659,
              "end": 2663
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2666,
              "end": 2670
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2659,
            "end": 2671
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
              "start": 2676,
              "end": 2687
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2701,
                        "end": 2706
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2701,
                      "end": 2708
                    },
                    "directive": null,
                    "start": 2700,
                    "end": 2710
                  }
                ],
                "start": 2690,
                "end": 2716
              },
              "expression": false,
              "start": 2687,
              "end": 2716
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2676,
            "end": 2716
          }
        ],
        "start": 2653,
        "end": 2718
      },
      "abstract": false,
      "declare": false,
      "start": 2611,
      "end": 2718
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithParenthesisAfterStatement",
        "optional": false,
        "typeAnnotation": null,
        "start": 2726,
        "end": 2762
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2771,
        "end": 2775
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
              "start": 2782,
              "end": 2786
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2789,
              "end": 2793
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2782,
            "end": 2794
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
              "start": 2799,
              "end": 2810
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2823,
                        "end": 2827
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2828,
                        "end": 2832
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2823,
                      "end": 2832
                    },
                    "directive": null,
                    "start": 2823,
                    "end": 2833
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2843,
                        "end": 2848
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2843,
                      "end": 2850
                    },
                    "directive": null,
                    "start": 2842,
                    "end": 2852
                  }
                ],
                "start": 2813,
                "end": 2858
              },
              "expression": false,
              "start": 2810,
              "end": 2858
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2799,
            "end": 2858
          }
        ],
        "start": 2776,
        "end": 2860
      },
      "abstract": false,
      "declare": false,
      "start": 2720,
      "end": 2860
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithParenthesisBeforeStatement",
        "optional": false,
        "typeAnnotation": null,
        "start": 2868,
        "end": 2905
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2914,
        "end": 2918
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
              "start": 2925,
              "end": 2929
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2932,
              "end": 2936
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2925,
            "end": 2937
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
              "start": 2942,
              "end": 2953
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 2967,
                        "end": 2972
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2967,
                      "end": 2974
                    },
                    "directive": null,
                    "start": 2966,
                    "end": 2976
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 2985,
                        "end": 2989
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2990,
                        "end": 2994
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2985,
                      "end": 2994
                    },
                    "directive": null,
                    "start": 2985,
                    "end": 2995
                  }
                ],
                "start": 2956,
                "end": 3001
              },
              "expression": false,
              "start": 2953,
              "end": 3001
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2942,
            "end": 3001
          }
        ],
        "start": 2919,
        "end": 3003
      },
      "abstract": false,
      "declare": false,
      "start": 2862,
      "end": 3003
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 3011,
        "end": 3038
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 3047,
        "end": 3051
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
              "start": 3058,
              "end": 3062
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 3065,
              "end": 3069
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3058,
            "end": 3070
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
              "start": 3075,
              "end": 3086
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3115
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
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3138,
                            "end": 3144
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
                                    "type": "ThisExpression",
                                    "start": 3172,
                                    "end": 3176
                                  },
                                  "start": 3165,
                                  "end": 3177
                                }
                              ],
                              "start": 3147,
                              "end": 3191
                            },
                            "expression": false,
                            "start": 3144,
                            "end": 3191
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 3130,
                          "end": 3191
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "property",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3212,
                            "end": 3220
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 3223,
                            "end": 3224
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 3204,
                          "end": 3225
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
                            "start": 3238,
                            "end": 3249
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
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3270,
                                      "end": 3274
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3275,
                                      "end": 3283
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3270,
                                    "end": 3283
                                  },
                                  "directive": null,
                                  "start": 3270,
                                  "end": 3284
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3301,
                                        "end": 3305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "method",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3306,
                                        "end": 3312
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3301,
                                      "end": 3312
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3301,
                                    "end": 3314
                                  },
                                  "directive": null,
                                  "start": 3301,
                                  "end": 3315
                                }
                              ],
                              "start": 3252,
                              "end": 3329
                            },
                            "expression": false,
                            "start": 3249,
                            "end": 3329
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 3238,
                          "end": 3329
                        }
                      ],
                      "start": 3116,
                      "end": 3339
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3099,
                    "end": 3339
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 3348,
                        "end": 3353
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3348,
                      "end": 3355
                    },
                    "directive": null,
                    "start": 3348,
                    "end": 3356
                  }
                ],
                "start": 3089,
                "end": 3362
              },
              "expression": false,
              "start": 3086,
              "end": 3362
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3075,
            "end": 3362
          }
        ],
        "start": 3052,
        "end": 3364
      },
      "abstract": false,
      "declare": false,
      "start": 3005,
      "end": 3364
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassDeclarationExtendingMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 3372,
        "end": 3414
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 3423,
        "end": 3427
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
              "name": "memberClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 3434,
              "end": 3445
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 3454,
                "end": 3457
              },
              "abstract": false,
              "declare": false,
              "start": 3448,
              "end": 3457
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3434,
            "end": 3458
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
              "start": 3463,
              "end": 3474
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3493,
                      "end": 3503
                    },
                    "typeParameters": null,
                    "superClass": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 3512,
                        "end": 3516
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "memberClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3517,
                        "end": 3528
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3512,
                      "end": 3528
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
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3551,
                            "end": 3557
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
                                    "type": "ThisExpression",
                                    "start": 3585,
                                    "end": 3589
                                  },
                                  "start": 3578,
                                  "end": 3590
                                }
                              ],
                              "start": 3560,
                              "end": 3604
                            },
                            "expression": false,
                            "start": 3557,
                            "end": 3604
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": "private",
                          "start": 3543,
                          "end": 3604
                        },
                        {
                          "type": "PropertyDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "property",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3625,
                            "end": 3633
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 3636,
                            "end": 3637
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private",
                          "start": 3617,
                          "end": 3638
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
                            "start": 3651,
                            "end": 3662
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Super",
                                      "start": 3683,
                                      "end": 3688
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3683,
                                    "end": 3690
                                  },
                                  "directive": null,
                                  "start": 3683,
                                  "end": 3691
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3708,
                                      "end": 3712
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3713,
                                      "end": 3721
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3708,
                                    "end": 3721
                                  },
                                  "directive": null,
                                  "start": 3708,
                                  "end": 3722
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3739,
                                        "end": 3743
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "method",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3744,
                                        "end": 3750
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3739,
                                      "end": 3750
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 3739,
                                    "end": 3752
                                  },
                                  "directive": null,
                                  "start": 3739,
                                  "end": 3753
                                }
                              ],
                              "start": 3665,
                              "end": 3767
                            },
                            "expression": false,
                            "start": 3662,
                            "end": 3767
                          },
                          "kind": "constructor",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 3651,
                          "end": 3767
                        }
                      ],
                      "start": 3529,
                      "end": 3777
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3487,
                    "end": 3777
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 3786,
                        "end": 3791
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3786,
                      "end": 3793
                    },
                    "directive": null,
                    "start": 3786,
                    "end": 3794
                  }
                ],
                "start": 3477,
                "end": 3800
              },
              "expression": false,
              "start": 3474,
              "end": 3800
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3463,
            "end": 3800
          }
        ],
        "start": 3428,
        "end": 3802
      },
      "abstract": false,
      "declare": false,
      "start": 3366,
      "end": 3802
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 3810,
        "end": 3836
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 3845,
        "end": 3849
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
              "start": 3856,
              "end": 3860
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 3863,
              "end": 3867
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3856,
            "end": 3868
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
              "start": 3873,
              "end": 3884
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3897,
                          "end": 3904
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3905,
                          "end": 3908
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3897,
                        "end": 3908
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
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
                                  "name": "method",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3937,
                                  "end": 3943
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
                                          "type": "ThisExpression",
                                          "start": 3971,
                                          "end": 3975
                                        },
                                        "start": 3964,
                                        "end": 3976
                                      }
                                    ],
                                    "start": 3946,
                                    "end": 3990
                                  },
                                  "expression": false,
                                  "start": 3943,
                                  "end": 3990
                                },
                                "kind": "method",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": "private",
                                "start": 3929,
                                "end": 3990
                              },
                              {
                                "type": "PropertyDefinition",
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "property",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4011,
                                  "end": 4019
                                },
                                "typeAnnotation": null,
                                "value": {
                                  "type": "Literal",
                                  "value": 7,
                                  "raw": "7",
                                  "start": 4022,
                                  "end": 4023
                                },
                                "computed": false,
                                "static": false,
                                "declare": false,
                                "override": false,
                                "optional": false,
                                "definite": false,
                                "readonly": false,
                                "accessibility": "private",
                                "start": 4003,
                                "end": 4024
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
                                  "start": 4037,
                                  "end": 4048
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
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 4069,
                                            "end": 4073
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "property",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4074,
                                            "end": 4082
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 4069,
                                          "end": 4082
                                        },
                                        "directive": null,
                                        "start": 4069,
                                        "end": 4083
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 4100,
                                              "end": 4104
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "method",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 4105,
                                              "end": 4111
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 4100,
                                            "end": 4111
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 4100,
                                          "end": 4113
                                        },
                                        "directive": null,
                                        "start": 4100,
                                        "end": 4114
                                      }
                                    ],
                                    "start": 4051,
                                    "end": 4128
                                  },
                                  "expression": false,
                                  "start": 4048,
                                  "end": 4128
                                },
                                "kind": "constructor",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": null,
                                "start": 4037,
                                "end": 4128
                              }
                            ],
                            "start": 3915,
                            "end": 4138
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 3909,
                          "end": 4138
                        }
                      ],
                      "optional": false,
                      "start": 3897,
                      "end": 4139
                    },
                    "directive": null,
                    "start": 3897,
                    "end": 4140
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4149,
                        "end": 4154
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4149,
                      "end": 4156
                    },
                    "directive": null,
                    "start": 4149,
                    "end": 4157
                  }
                ],
                "start": 3887,
                "end": 4163
              },
              "expression": false,
              "start": 3884,
              "end": 4163
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3873,
            "end": 4163
          }
        ],
        "start": 3850,
        "end": 4165
      },
      "abstract": false,
      "declare": false,
      "start": 3804,
      "end": 4165
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithClassExpressionExtendingMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 4173,
        "end": 4214
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4227
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
              "name": "memberClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 4234,
              "end": 4245
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4254,
                "end": 4257
              },
              "abstract": false,
              "declare": false,
              "start": 4248,
              "end": 4257
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4234,
            "end": 4258
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
              "start": 4263,
              "end": 4274
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4287,
                          "end": 4294
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4295,
                          "end": 4298
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4287,
                        "end": 4298
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 4313,
                              "end": 4317
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "memberClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4318,
                              "end": 4329
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4313,
                            "end": 4329
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 4330,
                            "end": 4333
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 4299,
                          "end": 4333
                        }
                      ],
                      "optional": false,
                      "start": 4287,
                      "end": 4334
                    },
                    "directive": null,
                    "start": 4287,
                    "end": 4335
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4344,
                        "end": 4349
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4344,
                      "end": 4351
                    },
                    "directive": null,
                    "start": 4344,
                    "end": 4352
                  }
                ],
                "start": 4277,
                "end": 4358
              },
              "expression": false,
              "start": 4274,
              "end": 4358
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4263,
            "end": 4358
          }
        ],
        "start": 4228,
        "end": 4360
      },
      "abstract": false,
      "declare": false,
      "start": 4167,
      "end": 4360
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithDerivedClassExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 4368,
        "end": 4401
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4410,
        "end": 4414
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
              "start": 4421,
              "end": 4425
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 4428,
              "end": 4432
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4421,
            "end": 4433
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
              "start": 4438,
              "end": 4449
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4462,
                          "end": 4469
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4470,
                          "end": 4473
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4462,
                        "end": 4473
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4488,
                            "end": 4492
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
                                  "name": "constructor",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4507,
                                  "end": 4518
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Super",
                                            "start": 4539,
                                            "end": 4544
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 4539,
                                          "end": 4546
                                        },
                                        "directive": null,
                                        "start": 4539,
                                        "end": 4547
                                      }
                                    ],
                                    "start": 4521,
                                    "end": 4561
                                  },
                                  "expression": false,
                                  "start": 4518,
                                  "end": 4561
                                },
                                "kind": "constructor",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": null,
                                "start": 4507,
                                "end": 4561
                              },
                              {
                                "type": "MethodDefinition",
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4581,
                                  "end": 4584
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
                                          "type": "ThisExpression",
                                          "start": 4612,
                                          "end": 4616
                                        },
                                        "start": 4605,
                                        "end": 4617
                                      }
                                    ],
                                    "start": 4587,
                                    "end": 4631
                                  },
                                  "expression": false,
                                  "start": 4584,
                                  "end": 4631
                                },
                                "kind": "method",
                                "computed": false,
                                "static": false,
                                "override": false,
                                "optional": false,
                                "accessibility": "public",
                                "start": 4574,
                                "end": 4631
                              },
                              {
                                "type": "PropertyDefinition",
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4651,
                                  "end": 4654
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
                                    "type": "ThisExpression",
                                    "start": 4663,
                                    "end": 4667
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 4657,
                                  "end": 4667
                                },
                                "computed": false,
                                "static": false,
                                "declare": false,
                                "override": false,
                                "optional": false,
                                "definite": false,
                                "readonly": false,
                                "accessibility": "public",
                                "start": 4644,
                                "end": 4668
                              }
                            ],
                            "start": 4493,
                            "end": 4678
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 4474,
                          "end": 4678
                        }
                      ],
                      "optional": false,
                      "start": 4462,
                      "end": 4679
                    },
                    "directive": null,
                    "start": 4462,
                    "end": 4680
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4689,
                        "end": 4694
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4689,
                      "end": 4696
                    },
                    "directive": null,
                    "start": 4689,
                    "end": 4697
                  }
                ],
                "start": 4452,
                "end": 4703
              },
              "expression": false,
              "start": 4449,
              "end": 4703
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4438,
            "end": 4703
          }
        ],
        "start": 4415,
        "end": 4705
      },
      "abstract": false,
      "declare": false,
      "start": 4362,
      "end": 4705
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithNewDerivedClassExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 4713,
        "end": 4749
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4758,
        "end": 4762
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
              "start": 4769,
              "end": 4773
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 4776,
              "end": 4780
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4769,
            "end": 4781
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
              "start": 4786,
              "end": 4797
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4810,
                          "end": 4817
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4818,
                          "end": 4821
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4810,
                        "end": 4821
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "callee": {
                            "type": "ClassExpression",
                            "decorators": [],
                            "id": null,
                            "typeParameters": null,
                            "superClass": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4840,
                              "end": 4844
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
                                    "name": "constructor",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4859,
                                    "end": 4870
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
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Super",
                                              "start": 4891,
                                              "end": 4896
                                            },
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false,
                                            "start": 4891,
                                            "end": 4898
                                          },
                                          "directive": null,
                                          "start": 4891,
                                          "end": 4899
                                        }
                                      ],
                                      "start": 4873,
                                      "end": 4913
                                    },
                                    "expression": false,
                                    "start": 4870,
                                    "end": 4913
                                  },
                                  "kind": "constructor",
                                  "computed": false,
                                  "static": false,
                                  "override": false,
                                  "optional": false,
                                  "accessibility": null,
                                  "start": 4859,
                                  "end": 4913
                                }
                              ],
                              "start": 4845,
                              "end": 4923
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 4826,
                            "end": 4923
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 4822,
                          "end": 4925
                        }
                      ],
                      "optional": false,
                      "start": 4810,
                      "end": 4926
                    },
                    "directive": null,
                    "start": 4810,
                    "end": 4927
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 4936,
                        "end": 4941
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4936,
                      "end": 4943
                    },
                    "directive": null,
                    "start": 4936,
                    "end": 4944
                  }
                ],
                "start": 4800,
                "end": 4950
              },
              "expression": false,
              "start": 4797,
              "end": 4950
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4786,
            "end": 4950
          }
        ],
        "start": 4763,
        "end": 4952
      },
      "abstract": false,
      "declare": false,
      "start": 4707,
      "end": 4952
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectAccessors",
        "optional": false,
        "typeAnnotation": null,
        "start": 4960,
        "end": 4986
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 4995,
        "end": 4999
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
              "start": 5006,
              "end": 5010
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 5013,
              "end": 5017
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5006,
            "end": 5018
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
              "start": 5023,
              "end": 5034
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5053,
                          "end": 5056
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5077,
                                "end": 5081
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
                                        "value": true,
                                        "raw": "true",
                                        "start": 5109,
                                        "end": 5113
                                      },
                                      "start": 5102,
                                      "end": 5114
                                    }
                                  ],
                                  "start": 5084,
                                  "end": 5128
                                },
                                "expression": false,
                                "start": 5081,
                                "end": 5128
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5073,
                              "end": 5128
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5146,
                                "end": 5150
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
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5151,
                                    "end": 5156
                                  }
                                ],
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
                                            "start": 5176,
                                            "end": 5180
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5181,
                                            "end": 5186
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 5176,
                                          "end": 5186
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "param",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5189,
                                          "end": 5194
                                        },
                                        "start": 5176,
                                        "end": 5194
                                      },
                                      "directive": null,
                                      "start": 5176,
                                      "end": 5195
                                    }
                                  ],
                                  "start": 5158,
                                  "end": 5209
                                },
                                "expression": false,
                                "start": 5150,
                                "end": 5209
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5142,
                              "end": 5209
                            }
                          ],
                          "start": 5059,
                          "end": 5219
                        },
                        "definite": false,
                        "start": 5053,
                        "end": 5219
                      }
                    ],
                    "declare": false,
                    "start": 5047,
                    "end": 5220
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 5229,
                        "end": 5234
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 5229,
                      "end": 5236
                    },
                    "directive": null,
                    "start": 5229,
                    "end": 5237
                  }
                ],
                "start": 5037,
                "end": 5243
              },
              "expression": false,
              "start": 5034,
              "end": 5243
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5023,
            "end": 5243
          }
        ],
        "start": 5000,
        "end": 5245
      },
      "abstract": false,
      "declare": false,
      "start": 4954,
      "end": 5245
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectAccessorsUsingThisInKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 5253,
        "end": 5294
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 5303,
        "end": 5307
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 5314,
              "end": 5322
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 5325,
              "end": 5331
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5314,
            "end": 5332
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
              "start": 5337,
              "end": 5348
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5367,
                          "end": 5370
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5387,
                                "end": 5392
                              },
                              "value": {
                                "type": "Literal",
                                "value": "prop",
                                "raw": "\"prop\"",
                                "start": 5394,
                                "end": 5400
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5387,
                              "end": 5400
                            },
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 5419,
                                  "end": 5423
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5424,
                                  "end": 5432
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5419,
                                "end": 5432
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
                                        "value": true,
                                        "raw": "true",
                                        "start": 5461,
                                        "end": 5465
                                      },
                                      "start": 5454,
                                      "end": 5466
                                    }
                                  ],
                                  "start": 5436,
                                  "end": 5480
                                },
                                "expression": false,
                                "start": 5433,
                                "end": 5480
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 5414,
                              "end": 5480
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 5499,
                                  "end": 5503
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5504,
                                  "end": 5512
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5499,
                                "end": 5512
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
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5514,
                                    "end": 5519
                                  }
                                ],
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
                                            "start": 5539,
                                            "end": 5543
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5544,
                                            "end": 5549
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 5539,
                                          "end": 5549
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "param",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5552,
                                          "end": 5557
                                        },
                                        "start": 5539,
                                        "end": 5557
                                      },
                                      "directive": null,
                                      "start": 5539,
                                      "end": 5558
                                    }
                                  ],
                                  "start": 5521,
                                  "end": 5572
                                },
                                "expression": false,
                                "start": 5513,
                                "end": 5572
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 5494,
                              "end": 5572
                            }
                          ],
                          "start": 5373,
                          "end": 5582
                        },
                        "definite": false,
                        "start": 5367,
                        "end": 5582
                      }
                    ],
                    "declare": false,
                    "start": 5361,
                    "end": 5583
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 5592,
                        "end": 5597
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 5592,
                      "end": 5599
                    },
                    "directive": null,
                    "start": 5592,
                    "end": 5600
                  }
                ],
                "start": 5351,
                "end": 5606
              },
              "expression": false,
              "start": 5348,
              "end": 5606
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5337,
            "end": 5606
          }
        ],
        "start": 5308,
        "end": 5608
      },
      "abstract": false,
      "declare": false,
      "start": 5247,
      "end": 5608
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectAccessorsUsingThisInBodies",
        "optional": false,
        "typeAnnotation": null,
        "start": 5616,
        "end": 5659
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 5668,
        "end": 5672
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 5679,
              "end": 5687
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 5690,
              "end": 5696
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5679,
            "end": 5697
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
              "start": 5702,
              "end": 5713
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5732,
                          "end": 5735
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5752,
                                "end": 5757
                              },
                              "value": {
                                "type": "Literal",
                                "value": "prop",
                                "raw": "\"prop\"",
                                "start": 5759,
                                "end": 5765
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5752,
                              "end": 5765
                            },
                            {
                              "type": "Property",
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5783,
                                "end": 5787
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
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 5815,
                                          "end": 5819
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_prop",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5820,
                                          "end": 5825
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 5815,
                                        "end": 5825
                                      },
                                      "start": 5808,
                                      "end": 5826
                                    }
                                  ],
                                  "start": 5790,
                                  "end": 5840
                                },
                                "expression": false,
                                "start": 5787,
                                "end": 5840
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5779,
                              "end": 5840
                            },
                            {
                              "type": "Property",
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5858,
                                "end": 5862
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
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5863,
                                    "end": 5868
                                  }
                                ],
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
                                            "start": 5888,
                                            "end": 5892
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5893,
                                            "end": 5898
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 5888,
                                          "end": 5898
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "param",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5901,
                                          "end": 5906
                                        },
                                        "start": 5888,
                                        "end": 5906
                                      },
                                      "directive": null,
                                      "start": 5888,
                                      "end": 5907
                                    }
                                  ],
                                  "start": 5870,
                                  "end": 5921
                                },
                                "expression": false,
                                "start": 5862,
                                "end": 5921
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 5854,
                              "end": 5921
                            }
                          ],
                          "start": 5738,
                          "end": 5931
                        },
                        "definite": false,
                        "start": 5732,
                        "end": 5931
                      }
                    ],
                    "declare": false,
                    "start": 5726,
                    "end": 5932
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 5941,
                        "end": 5946
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 5941,
                      "end": 5948
                    },
                    "directive": null,
                    "start": 5941,
                    "end": 5949
                  }
                ],
                "start": 5716,
                "end": 5955
              },
              "expression": false,
              "start": 5713,
              "end": 5955
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5702,
            "end": 5955
          }
        ],
        "start": 5673,
        "end": 5957
      },
      "abstract": false,
      "declare": false,
      "start": 5610,
      "end": 5957
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectComputedPropertyBody",
        "optional": false,
        "typeAnnotation": null,
        "start": 5965,
        "end": 6002
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6011,
        "end": 6015
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 6022,
              "end": 6030
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 6033,
              "end": 6039
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6022,
            "end": 6040
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
              "start": 6045,
              "end": 6056
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6075,
                          "end": 6078
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6095,
                                "end": 6099
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6101,
                                  "end": 6105
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6106,
                                  "end": 6114
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6101,
                                "end": 6114
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 6095,
                              "end": 6114
                            }
                          ],
                          "start": 6081,
                          "end": 6125
                        },
                        "definite": false,
                        "start": 6075,
                        "end": 6125
                      }
                    ],
                    "declare": false,
                    "start": 6069,
                    "end": 6126
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 6135,
                        "end": 6140
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6135,
                      "end": 6142
                    },
                    "directive": null,
                    "start": 6135,
                    "end": 6143
                  }
                ],
                "start": 6059,
                "end": 6149
              },
              "expression": false,
              "start": 6056,
              "end": 6149
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6045,
            "end": 6149
          }
        ],
        "start": 6016,
        "end": 6151
      },
      "abstract": false,
      "declare": false,
      "start": 5959,
      "end": 6151
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectComputedPropertyName",
        "optional": false,
        "typeAnnotation": null,
        "start": 6159,
        "end": 6196
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6205,
        "end": 6209
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
              "name": "propName",
              "optional": false,
              "typeAnnotation": null,
              "start": 6216,
              "end": 6224
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "prop",
              "raw": "\"prop\"",
              "start": 6227,
              "end": 6233
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6216,
            "end": 6234
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
              "start": 6239,
              "end": 6250
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6269,
                          "end": 6272
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6290,
                                  "end": 6294
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6295,
                                  "end": 6303
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6290,
                                "end": 6303
                              },
                              "value": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 6306,
                                "end": 6310
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 6289,
                              "end": 6310
                            }
                          ],
                          "start": 6275,
                          "end": 6321
                        },
                        "definite": false,
                        "start": 6269,
                        "end": 6321
                      }
                    ],
                    "declare": false,
                    "start": 6263,
                    "end": 6322
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 6331,
                        "end": 6336
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6331,
                      "end": 6338
                    },
                    "directive": null,
                    "start": 6331,
                    "end": 6339
                  }
                ],
                "start": 6253,
                "end": 6345
              },
              "expression": false,
              "start": 6250,
              "end": 6345
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6239,
            "end": 6345
          }
        ],
        "start": 6210,
        "end": 6347
      },
      "abstract": false,
      "declare": false,
      "start": 6153,
      "end": 6347
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedWithObjectMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 6355,
        "end": 6378
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6387,
        "end": 6391
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
              "start": 6398,
              "end": 6402
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 6405,
              "end": 6409
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 6398,
            "end": 6410
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
              "start": 6415,
              "end": 6426
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6445,
                          "end": 6448
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getProp",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6465,
                                "end": 6472
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
                                        "type": "ThisExpression",
                                        "start": 6500,
                                        "end": 6504
                                      },
                                      "start": 6493,
                                      "end": 6505
                                    }
                                  ],
                                  "start": 6475,
                                  "end": 6519
                                },
                                "expression": false,
                                "start": 6472,
                                "end": 6519
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 6465,
                              "end": 6519
                            }
                          ],
                          "start": 6451,
                          "end": 6530
                        },
                        "definite": false,
                        "start": 6445,
                        "end": 6530
                      }
                    ],
                    "declare": false,
                    "start": 6439,
                    "end": 6531
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 6540,
                        "end": 6545
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 6540,
                      "end": 6547
                    },
                    "directive": null,
                    "start": 6540,
                    "end": 6548
                  }
                ],
                "start": 6429,
                "end": 6554
              },
              "expression": false,
              "start": 6426,
              "end": 6554
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6415,
            "end": 6554
          }
        ],
        "start": 6392,
        "end": 6556
      },
      "abstract": false,
      "declare": false,
      "start": 6349,
      "end": 6556
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6562,
            "end": 6563
          },
          "init": null,
          "definite": false,
          "start": 6562,
          "end": 6563
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6565,
            "end": 6566
          },
          "init": null,
          "definite": false,
          "start": 6565,
          "end": 6566
        }
      ],
      "declare": false,
      "start": 6558,
      "end": 6567
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
            "name": "DerivedWithLoops",
            "optional": false,
            "typeAnnotation": null,
            "start": 6575,
            "end": 6591
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6614,
                  "end": 6618
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
                        "start": 6629,
                        "end": 6633
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6636,
                        "end": 6640
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6629,
                      "end": 6641
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
                        "start": 6650,
                        "end": 6661
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
                              "type": "ForStatement",
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 6682,
                                  "end": 6687
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 6682,
                                "end": 6689
                              },
                              "test": null,
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 6693,
                                "end": 6695
                              },
                              "start": 6678,
                              "end": 6695
                            }
                          ],
                          "start": 6664,
                          "end": 6705
                        },
                        "expression": false,
                        "start": 6661,
                        "end": 6705
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6650,
                      "end": 6705
                    }
                  ],
                  "start": 6619,
                  "end": 6711
                },
                "abstract": false,
                "declare": false,
                "start": 6600,
                "end": 6711
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6731,
                  "end": 6735
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
                        "start": 6746,
                        "end": 6750
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6753,
                        "end": 6757
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6746,
                      "end": 6758
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
                        "start": 6767,
                        "end": 6778
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
                              "type": "ForStatement",
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6799,
                                "end": 6800
                              },
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 6802,
                                  "end": 6807
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 6802,
                                "end": 6809
                              },
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 6812,
                                "end": 6814
                              },
                              "start": 6795,
                              "end": 6814
                            }
                          ],
                          "start": 6781,
                          "end": 6824
                        },
                        "expression": false,
                        "start": 6778,
                        "end": 6824
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6767,
                      "end": 6824
                    }
                  ],
                  "start": 6736,
                  "end": 6830
                },
                "abstract": false,
                "declare": false,
                "start": 6717,
                "end": 6830
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6850,
                  "end": 6854
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
                        "start": 6865,
                        "end": 6869
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6872,
                        "end": 6876
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6865,
                      "end": 6877
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
                        "start": 6886,
                        "end": 6897
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
                              "type": "ForStatement",
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6918,
                                "end": 6919
                              },
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6921,
                                "end": 6922
                              },
                              "update": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 6924,
                                  "end": 6929
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 6924,
                                "end": 6931
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 6933,
                                "end": 6935
                              },
                              "start": 6914,
                              "end": 6935
                            }
                          ],
                          "start": 6900,
                          "end": 6945
                        },
                        "expression": false,
                        "start": 6897,
                        "end": 6945
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6886,
                      "end": 6945
                    }
                  ],
                  "start": 6855,
                  "end": 6951
                },
                "abstract": false,
                "declare": false,
                "start": 6836,
                "end": 6951
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6971,
                  "end": 6975
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
                        "start": 6986,
                        "end": 6990
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 6993,
                        "end": 6997
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 6986,
                      "end": 6998
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
                        "start": 7007,
                        "end": 7018
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
                              "type": "ForStatement",
                              "init": null,
                              "test": null,
                              "update": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7043,
                                  "end": 7048
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7043,
                                "end": 7050
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 7054,
                                    "end": 7060
                                  }
                                ],
                                "start": 7052,
                                "end": 7062
                              },
                              "start": 7035,
                              "end": 7062
                            }
                          ],
                          "start": 7021,
                          "end": 7072
                        },
                        "expression": false,
                        "start": 7018,
                        "end": 7072
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7007,
                      "end": 7072
                    }
                  ],
                  "start": 6976,
                  "end": 7078
                },
                "abstract": false,
                "declare": false,
                "start": 6957,
                "end": 7078
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7098,
                  "end": 7102
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
                        "start": 7113,
                        "end": 7117
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7120,
                        "end": 7124
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7113,
                      "end": 7125
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
                        "start": 7134,
                        "end": 7145
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
                              "type": "ForOfStatement",
                              "await": false,
                              "left": {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 7173,
                                      "end": 7174
                                    },
                                    "init": null,
                                    "definite": false,
                                    "start": 7173,
                                    "end": 7174
                                  }
                                ],
                                "declare": false,
                                "start": 7167,
                                "end": 7174
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7178,
                                  "end": 7183
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7178,
                                "end": 7185
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7187,
                                "end": 7189
                              },
                              "start": 7162,
                              "end": 7189
                            }
                          ],
                          "start": 7148,
                          "end": 7199
                        },
                        "expression": false,
                        "start": 7145,
                        "end": 7199
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7134,
                      "end": 7199
                    }
                  ],
                  "start": 7103,
                  "end": 7205
                },
                "abstract": false,
                "declare": false,
                "start": 7084,
                "end": 7205
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7225,
                  "end": 7229
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
                        "start": 7240,
                        "end": 7244
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7247,
                        "end": 7251
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7240,
                      "end": 7252
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
                        "start": 7261,
                        "end": 7272
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
                              "type": "WhileStatement",
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7296,
                                  "end": 7301
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7296,
                                "end": 7303
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7305,
                                "end": 7307
                              },
                              "start": 7289,
                              "end": 7307
                            }
                          ],
                          "start": 7275,
                          "end": 7317
                        },
                        "expression": false,
                        "start": 7272,
                        "end": 7317
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7261,
                      "end": 7317
                    }
                  ],
                  "start": 7230,
                  "end": 7323
                },
                "abstract": false,
                "declare": false,
                "start": 7211,
                "end": 7323
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7343,
                  "end": 7347
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
                        "start": 7358,
                        "end": 7362
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7365,
                        "end": 7369
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7358,
                      "end": 7370
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
                        "start": 7379,
                        "end": 7390
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
                              "type": "DoWhileStatement",
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7410,
                                "end": 7412
                              },
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7420,
                                  "end": 7425
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7420,
                                "end": 7427
                              },
                              "start": 7407,
                              "end": 7429
                            }
                          ],
                          "start": 7393,
                          "end": 7439
                        },
                        "expression": false,
                        "start": 7390,
                        "end": 7439
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7379,
                      "end": 7439
                    }
                  ],
                  "start": 7348,
                  "end": 7445
                },
                "abstract": false,
                "declare": false,
                "start": 7329,
                "end": 7445
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7465,
                  "end": 7469
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
                        "start": 7480,
                        "end": 7484
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7487,
                        "end": 7491
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7480,
                      "end": 7492
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
                        "start": 7501,
                        "end": 7512
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
                              "type": "IfStatement",
                              "test": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7533,
                                  "end": 7538
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7533,
                                "end": 7540
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 7542,
                                "end": 7544
                              },
                              "alternate": null,
                              "start": 7529,
                              "end": 7544
                            }
                          ],
                          "start": 7515,
                          "end": 7554
                        },
                        "expression": false,
                        "start": 7512,
                        "end": 7554
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7501,
                      "end": 7554
                    }
                  ],
                  "start": 7470,
                  "end": 7560
                },
                "abstract": false,
                "declare": false,
                "start": 7451,
                "end": 7560
              },
              {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7580,
                  "end": 7584
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
                        "start": 7595,
                        "end": 7599
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7602,
                        "end": 7606
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 7595,
                      "end": 7607
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
                        "start": 7616,
                        "end": 7627
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
                              "type": "SwitchStatement",
                              "discriminant": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Super",
                                  "start": 7652,
                                  "end": 7657
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 7652,
                                "end": 7659
                              },
                              "cases": [],
                              "start": 7644,
                              "end": 7663
                            }
                          ],
                          "start": 7630,
                          "end": 7673
                        },
                        "expression": false,
                        "start": 7627,
                        "end": 7673
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7616,
                      "end": 7673
                    }
                  ],
                  "start": 7585,
                  "end": 7679
                },
                "abstract": false,
                "declare": false,
                "start": 7566,
                "end": 7679
              }
            ],
            "start": 6594,
            "end": 7682
          },
          "definite": false,
          "start": 6575,
          "end": 7682
        }
      ],
      "declare": false,
      "start": 6569,
      "end": 7682
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7682
}
```
