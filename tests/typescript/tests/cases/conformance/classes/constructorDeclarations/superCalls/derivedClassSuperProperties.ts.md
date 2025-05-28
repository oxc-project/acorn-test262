__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 7682,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 27,
            "decorators": [],
            "name": "decorate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
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
      "start": 30,
      "end": 102,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 40,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 102,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 66,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 58,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 66,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 61,
                  "decorators": [],
                  "name": "a",
                  "optional": true,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 66,
                "body": []
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
            "start": 72,
            "end": 100,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 88,
              "decorators": [],
              "name": "receivesAnything",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 100,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 95,
                  "decorators": [],
                  "name": "param",
                  "optional": true,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 100,
                "body": []
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
      "start": 104,
      "end": 229,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 118,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 127,
        "end": 131,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 132,
        "end": 229,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 150,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 149,
              "value": true,
              "raw": "true"
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
            "start": 155,
            "end": 227,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 166,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 227,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 227,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 179,
                    "end": 204,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 203,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 201,
                        "object": {
                          "type": "Super",
                          "start": 179,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 201,
                          "decorators": [],
                          "name": "receivesAnything",
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 213,
                    "end": 221,
                    "expression": {
                      "type": "CallExpression",
                      "start": 213,
                      "end": 220,
                      "callee": {
                        "type": "Super",
                        "start": 213,
                        "end": 218
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
      "start": 231,
      "end": 360,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 245,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 254,
        "end": 258,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 265,
            "end": 277,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 265,
              "end": 269,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 272,
              "end": 276,
              "value": true,
              "raw": "true"
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
            "start": 282,
            "end": 358,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 293,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 293,
              "end": 358,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 296,
                "end": 358,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 306,
                    "end": 335,
                    "expression": {
                      "type": "CallExpression",
                      "start": 306,
                      "end": 334,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 306,
                        "end": 328,
                        "object": {
                          "type": "Super",
                          "start": 306,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 328,
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 329,
                          "end": 333
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 344,
                    "end": 352,
                    "expression": {
                      "type": "CallExpression",
                      "start": 344,
                      "end": 351,
                      "callee": {
                        "type": "Super",
                        "start": 344,
                        "end": 349
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
      "start": 362,
      "end": 491,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 376,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 385,
        "end": 389,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 390,
        "end": 491,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 408,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 396,
              "end": 400,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 403,
              "end": 407,
              "value": true,
              "raw": "true"
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
            "start": 413,
            "end": 489,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 413,
              "end": 424,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 424,
              "end": 489,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 427,
                "end": 489,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 437,
                    "end": 462,
                    "expression": {
                      "type": "CallExpression",
                      "start": 437,
                      "end": 461,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 437,
                        "end": 459,
                        "object": {
                          "type": "Super",
                          "start": 437,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 459,
                          "decorators": [],
                          "name": "receivesAnything",
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 471,
                    "end": 483,
                    "expression": {
                      "type": "CallExpression",
                      "start": 471,
                      "end": 482,
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
      "start": 493,
      "end": 626,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 507,
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 516,
        "end": 520,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 521,
        "end": 626,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 527,
            "end": 539,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 531,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 534,
              "end": 538,
              "value": true,
              "raw": "true"
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
            "start": 544,
            "end": 624,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 544,
              "end": 555,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 555,
              "end": 624,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 558,
                "end": 624,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 568,
                    "end": 597,
                    "expression": {
                      "type": "CallExpression",
                      "start": 568,
                      "end": 596,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 568,
                        "end": 590,
                        "object": {
                          "type": "Super",
                          "start": 568,
                          "end": 573
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 590,
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 591,
                          "end": 595
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 606,
                    "end": 618,
                    "expression": {
                      "type": "CallExpression",
                      "start": 606,
                      "end": 617,
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
      "start": 628,
      "end": 753,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 634,
        "end": 642,
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 651,
        "end": 655,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 656,
        "end": 753,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 662,
            "end": 674,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 666,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 669,
              "end": 673,
              "value": true,
              "raw": "true"
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
            "start": 679,
            "end": 751,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 679,
              "end": 690,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 690,
              "end": 751,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 693,
                "end": 751,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 703,
                    "end": 711,
                    "expression": {
                      "type": "CallExpression",
                      "start": 703,
                      "end": 710,
                      "callee": {
                        "type": "Super",
                        "start": 703,
                        "end": 708
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 720,
                    "end": 745,
                    "expression": {
                      "type": "CallExpression",
                      "start": 720,
                      "end": 744,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 720,
                        "end": 742,
                        "object": {
                          "type": "Super",
                          "start": 720,
                          "end": 725
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 742,
                          "decorators": [],
                          "name": "receivesAnything",
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
      "start": 755,
      "end": 884,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 761,
        "end": 769,
        "decorators": [],
        "name": "Derived6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 778,
        "end": 782,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 783,
        "end": 884,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 789,
            "end": 801,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 789,
              "end": 793,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 796,
              "end": 800,
              "value": true,
              "raw": "true"
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
            "start": 806,
            "end": 882,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 817,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 817,
              "end": 882,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 820,
                "end": 882,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 830,
                    "end": 842,
                    "expression": {
                      "type": "CallExpression",
                      "start": 830,
                      "end": 841,
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
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 851,
                    "end": 876,
                    "expression": {
                      "type": "CallExpression",
                      "start": 851,
                      "end": 875,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 851,
                        "end": 873,
                        "object": {
                          "type": "Super",
                          "start": 851,
                          "end": 856
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 873,
                          "decorators": [],
                          "name": "receivesAnything",
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
      "start": 886,
      "end": 1015,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 892,
        "end": 900,
        "decorators": [],
        "name": "Derived7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 909,
        "end": 913,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 914,
        "end": 1015,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 920,
            "end": 932,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 920,
              "end": 924,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 927,
              "end": 931,
              "value": true,
              "raw": "true"
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
            "start": 937,
            "end": 1013,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 937,
              "end": 948,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 948,
              "end": 1013,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 951,
                "end": 1013,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 961,
                    "end": 969,
                    "expression": {
                      "type": "CallExpression",
                      "start": 961,
                      "end": 968,
                      "callee": {
                        "type": "Super",
                        "start": 961,
                        "end": 966
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 978,
                    "end": 1007,
                    "expression": {
                      "type": "CallExpression",
                      "start": 978,
                      "end": 1006,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 978,
                        "end": 1000,
                        "object": {
                          "type": "Super",
                          "start": 978,
                          "end": 983
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 984,
                          "end": 1000,
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1001,
                          "end": 1005
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1017,
      "end": 1150,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1023,
        "end": 1031,
        "decorators": [],
        "name": "Derived8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1040,
        "end": 1044,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1045,
        "end": 1150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1051,
            "end": 1063,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1051,
              "end": 1055,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1058,
              "end": 1062,
              "value": true,
              "raw": "true"
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
            "start": 1068,
            "end": 1148,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1068,
              "end": 1079,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1079,
              "end": 1148,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1082,
                "end": 1148,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1092,
                    "end": 1104,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1092,
                      "end": 1103,
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
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1113,
                    "end": 1142,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1113,
                      "end": 1141,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1113,
                        "end": 1135,
                        "object": {
                          "type": "Super",
                          "start": 1113,
                          "end": 1118
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1119,
                          "end": 1135,
                          "decorators": [],
                          "name": "receivesAnything",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 1136,
                          "end": 1140
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1152,
      "end": 1283,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1158,
        "end": 1182,
        "decorators": [],
        "name": "DerivedWithArrowFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1191,
        "end": 1195,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1196,
        "end": 1283,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1202,
            "end": 1214,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1202,
              "end": 1206,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1209,
              "end": 1213,
              "value": true,
              "raw": "true"
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
            "start": 1219,
            "end": 1281,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1219,
              "end": 1230,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1230,
              "end": 1281,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1233,
                "end": 1281,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1243,
                    "end": 1258,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1243,
                      "end": 1257,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1244,
                        "end": 1254,
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
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1267,
                    "end": 1275,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1267,
                      "end": 1274,
                      "callee": {
                        "type": "Super",
                        "start": 1267,
                        "end": 1272
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
      "start": 1285,
      "end": 1446,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1291,
        "end": 1324,
        "decorators": [],
        "name": "DerivedWithArrowFunctionParameter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1333,
        "end": 1337,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1338,
        "end": 1446,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1344,
            "end": 1356,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1344,
              "end": 1348,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1351,
              "end": 1355,
              "value": true,
              "raw": "true"
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
            "start": 1361,
            "end": 1444,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1361,
              "end": 1372,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1372,
              "end": 1444,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1375,
                "end": 1444,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1385,
                    "end": 1421,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1391,
                        "end": 1420,
                        "id": {
                          "type": "Identifier",
                          "start": 1391,
                          "end": 1397,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 1400,
                          "end": 1420,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "AssignmentPattern",
                              "start": 1401,
                              "end": 1413,
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "start": 1401,
                                "end": 1406,
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1409,
                                "end": 1413
                              },
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1418,
                            "end": 1420,
                            "body": []
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
                    "start": 1430,
                    "end": 1438,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1430,
                      "end": 1437,
                      "callee": {
                        "type": "Super",
                        "start": 1430,
                        "end": 1435
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
      "start": 1448,
      "end": 1612,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1454,
        "end": 1481,
        "decorators": [],
        "name": "DerivedWithDecoratorOnClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1490,
        "end": 1494,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1495,
        "end": 1612,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1501,
            "end": 1513,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1501,
              "end": 1505,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1508,
              "end": 1512,
              "value": true,
              "raw": "true"
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
            "start": 1518,
            "end": 1610,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1518,
              "end": 1529,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1529,
              "end": 1610,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1532,
                "end": 1610,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 1542,
                    "end": 1586,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 1542,
                        "end": 1557,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1543,
                          "end": 1557,
                          "callee": {
                            "type": "Identifier",
                            "start": 1543,
                            "end": 1551,
                            "decorators": [],
                            "name": "decorate",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 1552,
                              "end": 1556
                            }
                          ],
                          "optional": false
                        }
                      }
                    ],
                    "id": {
                      "type": "Identifier",
                      "start": 1572,
                      "end": 1582,
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 1583,
                      "end": 1586,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1596,
                    "end": 1604,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1596,
                      "end": 1603,
                      "callee": {
                        "type": "Super",
                        "start": 1596,
                        "end": 1601
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
      "start": 1614,
      "end": 1826,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1620,
        "end": 1653,
        "decorators": [],
        "name": "DerivedWithDecoratorOnClassMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1662,
        "end": 1666,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1667,
        "end": 1826,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1673,
            "end": 1685,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1673,
              "end": 1677,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1680,
              "end": 1684,
              "value": true,
              "raw": "true"
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
            "start": 1690,
            "end": 1824,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1690,
              "end": 1701,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1701,
              "end": 1824,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1704,
                "end": 1824,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 1714,
                    "end": 1800,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 1720,
                      "end": 1730,
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 1731,
                      "end": 1800,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 1745,
                          "end": 1790,
                          "decorators": [
                            {
                              "type": "Decorator",
                              "start": 1745,
                              "end": 1760,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1746,
                                "end": 1760,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1746,
                                  "end": 1754,
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 1755,
                                    "end": 1759
                                  }
                                ],
                                "optional": false
                              }
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "start": 1773,
                            "end": 1784,
                            "decorators": [],
                            "name": "innerMethod",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 1784,
                            "end": 1790,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 1787,
                              "end": 1790,
                              "body": []
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
                    "type": "ExpressionStatement",
                    "start": 1810,
                    "end": 1818,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1810,
                      "end": 1817,
                      "callee": {
                        "type": "Super",
                        "start": 1810,
                        "end": 1815
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
      "start": 1828,
      "end": 2042,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1834,
        "end": 1869,
        "decorators": [],
        "name": "DerivedWithDecoratorOnClassProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 1878,
        "end": 1882,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1883,
        "end": 2042,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1889,
            "end": 1901,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1889,
              "end": 1893,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 1896,
              "end": 1900,
              "value": true,
              "raw": "true"
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
            "start": 1906,
            "end": 2040,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1906,
              "end": 1917,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1917,
              "end": 2040,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1920,
                "end": 2040,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 1930,
                    "end": 2016,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 1936,
                      "end": 1946,
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 1947,
                      "end": 2016,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 1961,
                          "end": 2006,
                          "decorators": [
                            {
                              "type": "Decorator",
                              "start": 1961,
                              "end": 1976,
                              "expression": {
                                "type": "CallExpression",
                                "start": 1962,
                                "end": 1976,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 1962,
                                  "end": 1970,
                                  "decorators": [],
                                  "name": "decorate",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ThisExpression",
                                    "start": 1971,
                                    "end": 1975
                                  }
                                ],
                                "optional": false
                              }
                            }
                          ],
                          "key": {
                            "type": "Identifier",
                            "start": 1989,
                            "end": 1998,
                            "decorators": [],
                            "name": "innerProp",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "start": 2001,
                            "end": 2005,
                            "value": true,
                            "raw": "true"
                          },
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
                    "type": "ExpressionStatement",
                    "start": 2026,
                    "end": 2034,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2026,
                      "end": 2033,
                      "callee": {
                        "type": "Super",
                        "start": 2026,
                        "end": 2031
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
      "start": 2044,
      "end": 2225,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2050,
        "end": 2080,
        "decorators": [],
        "name": "DerivedWithFunctionDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2089,
        "end": 2093,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2094,
        "end": 2225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2100,
            "end": 2112,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2100,
              "end": 2104,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2107,
              "end": 2111,
              "value": true,
              "raw": "true"
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
            "start": 2117,
            "end": 2223,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2117,
              "end": 2128,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2128,
              "end": 2223,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2131,
                "end": 2223,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 2141,
                    "end": 2200,
                    "id": {
                      "type": "Identifier",
                      "start": 2150,
                      "end": 2161,
                      "decorators": [],
                      "name": "declaration",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2164,
                      "end": 2200,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2178,
                          "end": 2190,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 2185,
                            "end": 2189
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2209,
                    "end": 2217,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2209,
                      "end": 2216,
                      "callee": {
                        "type": "Super",
                        "start": 2209,
                        "end": 2214
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
      "start": 2227,
      "end": 2433,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2233,
        "end": 2275,
        "decorators": [],
        "name": "DerivedWithFunctionDeclarationAndThisParam",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2284,
        "end": 2288,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2289,
        "end": 2433,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2295,
            "end": 2307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2295,
              "end": 2299,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2302,
              "end": 2306,
              "value": true,
              "raw": "true"
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
            "start": 2312,
            "end": 2431,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2312,
              "end": 2323,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2323,
              "end": 2431,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2326,
                "end": 2431,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 2336,
                    "end": 2408,
                    "id": {
                      "type": "Identifier",
                      "start": 2345,
                      "end": 2356,
                      "decorators": [],
                      "name": "declaration",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 2357,
                        "end": 2369,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 2357,
                          "end": 2362,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 2365,
                          "end": 2369
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2371,
                      "end": 2408,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2385,
                          "end": 2398,
                          "argument": {
                            "type": "Identifier",
                            "start": 2392,
                            "end": 2397,
                            "decorators": [],
                            "name": "param",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2417,
                    "end": 2425,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2417,
                      "end": 2424,
                      "callee": {
                        "type": "Super",
                        "start": 2417,
                        "end": 2422
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
      "start": 2435,
      "end": 2609,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2441,
        "end": 2470,
        "decorators": [],
        "name": "DerivedWithFunctionExpression",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2479,
        "end": 2483,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2484,
        "end": 2609,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2490,
            "end": 2502,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2490,
              "end": 2494,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2497,
              "end": 2501,
              "value": true,
              "raw": "true"
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
            "start": 2507,
            "end": 2607,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2507,
              "end": 2518,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2518,
              "end": 2607,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2521,
                "end": 2607,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2531,
                    "end": 2584,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2531,
                      "end": 2583,
                      "callee": {
                        "type": "FunctionExpression",
                        "start": 2532,
                        "end": 2580,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 2544,
                          "end": 2580,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 2558,
                              "end": 2570,
                              "argument": {
                                "type": "ThisExpression",
                                "start": 2565,
                                "end": 2569
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2593,
                    "end": 2601,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2593,
                      "end": 2600,
                      "callee": {
                        "type": "Super",
                        "start": 2593,
                        "end": 2598
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
      "start": 2611,
      "end": 2718,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2617,
        "end": 2639,
        "decorators": [],
        "name": "DerivedWithParenthesis",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2648,
        "end": 2652,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2653,
        "end": 2718,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2659,
            "end": 2671,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2659,
              "end": 2663,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2666,
              "end": 2670,
              "value": true,
              "raw": "true"
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
            "start": 2676,
            "end": 2716,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2676,
              "end": 2687,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2687,
              "end": 2716,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2690,
                "end": 2716,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2700,
                    "end": 2710,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2701,
                      "end": 2708,
                      "callee": {
                        "type": "Super",
                        "start": 2701,
                        "end": 2706
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
      "start": 2720,
      "end": 2860,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2726,
        "end": 2762,
        "decorators": [],
        "name": "DerivedWithParenthesisAfterStatement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2771,
        "end": 2775,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2776,
        "end": 2860,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2782,
            "end": 2794,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2782,
              "end": 2786,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2789,
              "end": 2793,
              "value": true,
              "raw": "true"
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
            "start": 2799,
            "end": 2858,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2799,
              "end": 2810,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2810,
              "end": 2858,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2813,
                "end": 2858,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2823,
                    "end": 2833,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2823,
                      "end": 2832,
                      "object": {
                        "type": "ThisExpression",
                        "start": 2823,
                        "end": 2827
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2828,
                        "end": 2832,
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
                    "start": 2842,
                    "end": 2852,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2843,
                      "end": 2850,
                      "callee": {
                        "type": "Super",
                        "start": 2843,
                        "end": 2848
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
      "start": 2862,
      "end": 3003,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2868,
        "end": 2905,
        "decorators": [],
        "name": "DerivedWithParenthesisBeforeStatement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 2914,
        "end": 2918,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2919,
        "end": 3003,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2925,
            "end": 2937,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2925,
              "end": 2929,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 2932,
              "end": 2936,
              "value": true,
              "raw": "true"
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
            "start": 2942,
            "end": 3001,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2942,
              "end": 2953,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2953,
              "end": 3001,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2956,
                "end": 3001,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2966,
                    "end": 2976,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2967,
                      "end": 2974,
                      "callee": {
                        "type": "Super",
                        "start": 2967,
                        "end": 2972
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2985,
                    "end": 2995,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2985,
                      "end": 2994,
                      "object": {
                        "type": "ThisExpression",
                        "start": 2985,
                        "end": 2989
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2990,
                        "end": 2994,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
      "start": 3005,
      "end": 3364,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3011,
        "end": 3038,
        "decorators": [],
        "name": "DerivedWithClassDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3047,
        "end": 3051,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3052,
        "end": 3364,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3058,
            "end": 3070,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3058,
              "end": 3062,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 3065,
              "end": 3069,
              "value": true,
              "raw": "true"
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
            "start": 3075,
            "end": 3362,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3075,
              "end": 3086,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3086,
              "end": 3362,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3089,
                "end": 3362,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 3099,
                    "end": 3339,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 3105,
                      "end": 3115,
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 3116,
                      "end": 3339,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 3130,
                          "end": 3191,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3138,
                            "end": 3144,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3144,
                            "end": 3191,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3147,
                              "end": 3191,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3165,
                                  "end": 3177,
                                  "argument": {
                                    "type": "ThisExpression",
                                    "start": 3172,
                                    "end": 3176
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
                          "accessibility": "private"
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 3204,
                          "end": 3225,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3212,
                            "end": 3220,
                            "decorators": [],
                            "name": "property",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "start": 3223,
                            "end": 3224,
                            "value": 7,
                            "raw": "7"
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 3238,
                          "end": 3329,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3238,
                            "end": 3249,
                            "decorators": [],
                            "name": "constructor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3249,
                            "end": 3329,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3252,
                              "end": 3329,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3270,
                                  "end": 3284,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 3270,
                                    "end": 3283,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3270,
                                      "end": 3274
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3275,
                                      "end": 3283,
                                      "decorators": [],
                                      "name": "property",
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
                                  "start": 3301,
                                  "end": 3315,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 3301,
                                    "end": 3314,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3301,
                                      "end": 3312,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3301,
                                        "end": 3305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3306,
                                        "end": 3312,
                                        "decorators": [],
                                        "name": "method",
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
                    "type": "ExpressionStatement",
                    "start": 3348,
                    "end": 3356,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3348,
                      "end": 3355,
                      "callee": {
                        "type": "Super",
                        "start": 3348,
                        "end": 3353
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
      "start": 3366,
      "end": 3802,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3372,
        "end": 3414,
        "decorators": [],
        "name": "DerivedWithClassDeclarationExtendingMember",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3423,
        "end": 3427,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3428,
        "end": 3802,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3434,
            "end": 3458,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3434,
              "end": 3445,
              "decorators": [],
              "name": "memberClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 3448,
              "end": 3457,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 3454,
                "end": 3457,
                "body": []
              },
              "abstract": false,
              "declare": false
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
            "start": 3463,
            "end": 3800,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3463,
              "end": 3474,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3474,
              "end": 3800,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3477,
                "end": 3800,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 3487,
                    "end": 3777,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 3493,
                      "end": 3503,
                      "decorators": [],
                      "name": "InnerClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": {
                      "type": "MemberExpression",
                      "start": 3512,
                      "end": 3528,
                      "object": {
                        "type": "ThisExpression",
                        "start": 3512,
                        "end": 3516
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3517,
                        "end": 3528,
                        "decorators": [],
                        "name": "memberClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 3529,
                      "end": 3777,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 3543,
                          "end": 3604,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3551,
                            "end": 3557,
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3557,
                            "end": 3604,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3560,
                              "end": 3604,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3578,
                                  "end": 3590,
                                  "argument": {
                                    "type": "ThisExpression",
                                    "start": 3585,
                                    "end": 3589
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
                          "accessibility": "private"
                        },
                        {
                          "type": "PropertyDefinition",
                          "start": 3617,
                          "end": 3638,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3625,
                            "end": 3633,
                            "decorators": [],
                            "name": "property",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "start": 3636,
                            "end": 3637,
                            "value": 7,
                            "raw": "7"
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": "private"
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 3651,
                          "end": 3767,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 3651,
                            "end": 3662,
                            "decorators": [],
                            "name": "constructor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 3662,
                            "end": 3767,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3665,
                              "end": 3767,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3683,
                                  "end": 3691,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 3683,
                                    "end": 3690,
                                    "callee": {
                                      "type": "Super",
                                      "start": 3683,
                                      "end": 3688
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3708,
                                  "end": 3722,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 3708,
                                    "end": 3721,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3708,
                                      "end": 3712
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3713,
                                      "end": 3721,
                                      "decorators": [],
                                      "name": "property",
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
                                  "start": 3739,
                                  "end": 3753,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 3739,
                                    "end": 3752,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3739,
                                      "end": 3750,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 3739,
                                        "end": 3743
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3744,
                                        "end": 3750,
                                        "decorators": [],
                                        "name": "method",
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
                    "type": "ExpressionStatement",
                    "start": 3786,
                    "end": 3794,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3786,
                      "end": 3793,
                      "callee": {
                        "type": "Super",
                        "start": 3786,
                        "end": 3791
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
      "start": 3804,
      "end": 4165,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3810,
        "end": 3836,
        "decorators": [],
        "name": "DerivedWithClassExpression",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 3845,
        "end": 3849,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3850,
        "end": 4165,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3856,
            "end": 3868,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3856,
              "end": 3860,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 3863,
              "end": 3867,
              "value": true,
              "raw": "true"
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
            "start": 3873,
            "end": 4163,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3873,
              "end": 3884,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3884,
              "end": 4163,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3887,
                "end": 4163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3897,
                    "end": 4140,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3897,
                      "end": 4139,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3897,
                        "end": 3908,
                        "object": {
                          "type": "Identifier",
                          "start": 3897,
                          "end": 3904,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3905,
                          "end": 3908,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "start": 3909,
                          "end": 4138,
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 3915,
                            "end": 4138,
                            "body": [
                              {
                                "type": "MethodDefinition",
                                "start": 3929,
                                "end": 3990,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 3937,
                                  "end": 3943,
                                  "decorators": [],
                                  "name": "method",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 3943,
                                  "end": 3990,
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 3946,
                                    "end": 3990,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 3964,
                                        "end": 3976,
                                        "argument": {
                                          "type": "ThisExpression",
                                          "start": 3971,
                                          "end": 3975
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
                                "accessibility": "private"
                              },
                              {
                                "type": "PropertyDefinition",
                                "start": 4003,
                                "end": 4024,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 4011,
                                  "end": 4019,
                                  "decorators": [],
                                  "name": "property",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": null,
                                "value": {
                                  "type": "Literal",
                                  "start": 4022,
                                  "end": 4023,
                                  "value": 7,
                                  "raw": "7"
                                },
                                "computed": false,
                                "static": false,
                                "declare": false,
                                "override": false,
                                "optional": false,
                                "definite": false,
                                "readonly": false,
                                "accessibility": "private"
                              },
                              {
                                "type": "MethodDefinition",
                                "start": 4037,
                                "end": 4128,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 4037,
                                  "end": 4048,
                                  "decorators": [],
                                  "name": "constructor",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4048,
                                  "end": 4128,
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4051,
                                    "end": 4128,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 4069,
                                        "end": 4083,
                                        "expression": {
                                          "type": "MemberExpression",
                                          "start": 4069,
                                          "end": 4082,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 4069,
                                            "end": 4073
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 4074,
                                            "end": 4082,
                                            "decorators": [],
                                            "name": "property",
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
                                        "start": 4100,
                                        "end": 4114,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 4100,
                                          "end": 4113,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 4100,
                                            "end": 4111,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 4100,
                                              "end": 4104
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 4105,
                                              "end": 4111,
                                              "decorators": [],
                                              "name": "method",
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
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4149,
                    "end": 4157,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4149,
                      "end": 4156,
                      "callee": {
                        "type": "Super",
                        "start": 4149,
                        "end": 4154
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
      "start": 4167,
      "end": 4360,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4173,
        "end": 4214,
        "decorators": [],
        "name": "DerivedWithClassExpressionExtendingMember",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 4223,
        "end": 4227,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4228,
        "end": 4360,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4234,
            "end": 4258,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4234,
              "end": 4245,
              "decorators": [],
              "name": "memberClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 4248,
              "end": 4257,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 4254,
                "end": 4257,
                "body": []
              },
              "abstract": false,
              "declare": false
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
            "start": 4263,
            "end": 4358,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4263,
              "end": 4274,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4274,
              "end": 4358,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4277,
                "end": 4358,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4287,
                    "end": 4335,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4287,
                      "end": 4334,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4287,
                        "end": 4298,
                        "object": {
                          "type": "Identifier",
                          "start": 4287,
                          "end": 4294,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4295,
                          "end": 4298,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "start": 4299,
                          "end": 4333,
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "MemberExpression",
                            "start": 4313,
                            "end": 4329,
                            "object": {
                              "type": "ThisExpression",
                              "start": 4313,
                              "end": 4317
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 4318,
                              "end": 4329,
                              "decorators": [],
                              "name": "memberClass",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 4330,
                            "end": 4333,
                            "body": []
                          },
                          "abstract": false,
                          "declare": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4344,
                    "end": 4352,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4344,
                      "end": 4351,
                      "callee": {
                        "type": "Super",
                        "start": 4344,
                        "end": 4349
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
      "start": 4362,
      "end": 4705,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4368,
        "end": 4401,
        "decorators": [],
        "name": "DerivedWithDerivedClassExpression",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 4410,
        "end": 4414,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4415,
        "end": 4705,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4421,
            "end": 4433,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4421,
              "end": 4425,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 4428,
              "end": 4432,
              "value": true,
              "raw": "true"
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
            "start": 4438,
            "end": 4703,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4438,
              "end": 4449,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4449,
              "end": 4703,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4452,
                "end": 4703,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4462,
                    "end": 4680,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4462,
                      "end": 4679,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4462,
                        "end": 4473,
                        "object": {
                          "type": "Identifier",
                          "start": 4462,
                          "end": 4469,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4470,
                          "end": 4473,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ClassExpression",
                          "start": 4474,
                          "end": 4678,
                          "decorators": [],
                          "id": null,
                          "typeParameters": null,
                          "superClass": {
                            "type": "Identifier",
                            "start": 4488,
                            "end": 4492,
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "start": 4493,
                            "end": 4678,
                            "body": [
                              {
                                "type": "MethodDefinition",
                                "start": 4507,
                                "end": 4561,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 4507,
                                  "end": 4518,
                                  "decorators": [],
                                  "name": "constructor",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4518,
                                  "end": 4561,
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4521,
                                    "end": 4561,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 4539,
                                        "end": 4547,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 4539,
                                          "end": 4546,
                                          "callee": {
                                            "type": "Super",
                                            "start": 4539,
                                            "end": 4544
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
                              },
                              {
                                "type": "MethodDefinition",
                                "start": 4574,
                                "end": 4631,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 4581,
                                  "end": 4584,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4584,
                                  "end": 4631,
                                  "id": null,
                                  "generator": false,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4587,
                                    "end": 4631,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 4605,
                                        "end": 4617,
                                        "argument": {
                                          "type": "ThisExpression",
                                          "start": 4612,
                                          "end": 4616
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
                                "accessibility": "public"
                              },
                              {
                                "type": "PropertyDefinition",
                                "start": 4644,
                                "end": 4668,
                                "decorators": [],
                                "key": {
                                  "type": "Identifier",
                                  "start": 4651,
                                  "end": 4654,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": null,
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 4657,
                                  "end": 4667,
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
                                  "generator": false
                                },
                                "computed": false,
                                "static": false,
                                "declare": false,
                                "override": false,
                                "optional": false,
                                "definite": false,
                                "readonly": false,
                                "accessibility": "public"
                              }
                            ]
                          },
                          "abstract": false,
                          "declare": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4689,
                    "end": 4697,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4689,
                      "end": 4696,
                      "callee": {
                        "type": "Super",
                        "start": 4689,
                        "end": 4694
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
      "start": 4707,
      "end": 4952,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4713,
        "end": 4749,
        "decorators": [],
        "name": "DerivedWithNewDerivedClassExpression",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 4758,
        "end": 4762,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4763,
        "end": 4952,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 4769,
            "end": 4781,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4769,
              "end": 4773,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 4776,
              "end": 4780,
              "value": true,
              "raw": "true"
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
            "start": 4786,
            "end": 4950,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4786,
              "end": 4797,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4797,
              "end": 4950,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4800,
                "end": 4950,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4810,
                    "end": 4927,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4810,
                      "end": 4926,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4810,
                        "end": 4821,
                        "object": {
                          "type": "Identifier",
                          "start": 4810,
                          "end": 4817,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4818,
                          "end": 4821,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "NewExpression",
                          "start": 4822,
                          "end": 4925,
                          "callee": {
                            "type": "ClassExpression",
                            "start": 4826,
                            "end": 4923,
                            "decorators": [],
                            "id": null,
                            "typeParameters": null,
                            "superClass": {
                              "type": "Identifier",
                              "start": 4840,
                              "end": 4844,
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "superTypeArguments": null,
                            "implements": [],
                            "body": {
                              "type": "ClassBody",
                              "start": 4845,
                              "end": 4923,
                              "body": [
                                {
                                  "type": "MethodDefinition",
                                  "start": 4859,
                                  "end": 4913,
                                  "decorators": [],
                                  "key": {
                                    "type": "Identifier",
                                    "start": 4859,
                                    "end": 4870,
                                    "decorators": [],
                                    "name": "constructor",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "FunctionExpression",
                                    "start": 4870,
                                    "end": 4913,
                                    "id": null,
                                    "generator": false,
                                    "async": false,
                                    "declare": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "start": 4873,
                                      "end": 4913,
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "start": 4891,
                                          "end": 4899,
                                          "expression": {
                                            "type": "CallExpression",
                                            "start": 4891,
                                            "end": 4898,
                                            "callee": {
                                              "type": "Super",
                                              "start": 4891,
                                              "end": 4896
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
                          "typeArguments": null,
                          "arguments": []
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 4936,
                    "end": 4944,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4936,
                      "end": 4943,
                      "callee": {
                        "type": "Super",
                        "start": 4936,
                        "end": 4941
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
      "start": 4954,
      "end": 5245,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4960,
        "end": 4986,
        "decorators": [],
        "name": "DerivedWithObjectAccessors",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 4995,
        "end": 4999,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5000,
        "end": 5245,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5006,
            "end": 5018,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5006,
              "end": 5010,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 5013,
              "end": 5017,
              "value": true,
              "raw": "true"
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
            "start": 5023,
            "end": 5243,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5023,
              "end": 5034,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5034,
              "end": 5243,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5037,
                "end": 5243,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5047,
                    "end": 5220,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5053,
                        "end": 5219,
                        "id": {
                          "type": "Identifier",
                          "start": 5053,
                          "end": 5056,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 5059,
                          "end": 5219,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 5073,
                              "end": 5128,
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "start": 5077,
                                "end": 5081,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 5081,
                                "end": 5128,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5084,
                                  "end": 5128,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5102,
                                      "end": 5114,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 5109,
                                        "end": 5113,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 5142,
                              "end": 5209,
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "start": 5146,
                                "end": 5150,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 5150,
                                "end": 5209,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 5151,
                                    "end": 5156,
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5158,
                                  "end": 5209,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 5176,
                                      "end": 5195,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 5176,
                                        "end": 5194,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 5176,
                                          "end": 5186,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 5176,
                                            "end": 5180
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 5181,
                                            "end": 5186,
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 5189,
                                          "end": 5194,
                                          "decorators": [],
                                          "name": "param",
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5229,
                    "end": 5237,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5229,
                      "end": 5236,
                      "callee": {
                        "type": "Super",
                        "start": 5229,
                        "end": 5234
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
      "start": 5247,
      "end": 5608,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5253,
        "end": 5294,
        "decorators": [],
        "name": "DerivedWithObjectAccessorsUsingThisInKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 5303,
        "end": 5307,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5308,
        "end": 5608,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5314,
            "end": 5332,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5314,
              "end": 5322,
              "decorators": [],
              "name": "propName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 5325,
              "end": 5331,
              "value": "prop",
              "raw": "\"prop\""
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
            "start": 5337,
            "end": 5606,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5337,
              "end": 5348,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5348,
              "end": 5606,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5351,
                "end": 5606,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5361,
                    "end": 5583,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5367,
                        "end": 5582,
                        "id": {
                          "type": "Identifier",
                          "start": 5367,
                          "end": 5370,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 5373,
                          "end": 5582,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 5387,
                              "end": 5400,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 5387,
                                "end": 5392,
                                "decorators": [],
                                "name": "_prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 5394,
                                "end": 5400,
                                "value": "prop",
                                "raw": "\"prop\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 5414,
                              "end": 5480,
                              "kind": "get",
                              "key": {
                                "type": "MemberExpression",
                                "start": 5419,
                                "end": 5432,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 5419,
                                  "end": 5423
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 5424,
                                  "end": 5432,
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 5433,
                                "end": 5480,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5436,
                                  "end": 5480,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5454,
                                      "end": 5466,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 5461,
                                        "end": 5465,
                                        "value": true,
                                        "raw": "true"
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 5494,
                              "end": 5572,
                              "kind": "set",
                              "key": {
                                "type": "MemberExpression",
                                "start": 5499,
                                "end": 5512,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 5499,
                                  "end": 5503
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 5504,
                                  "end": 5512,
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 5513,
                                "end": 5572,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 5514,
                                    "end": 5519,
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5521,
                                  "end": 5572,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 5539,
                                      "end": 5558,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 5539,
                                        "end": 5557,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 5539,
                                          "end": 5549,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 5539,
                                            "end": 5543
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 5544,
                                            "end": 5549,
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 5552,
                                          "end": 5557,
                                          "decorators": [],
                                          "name": "param",
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
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5592,
                    "end": 5600,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5592,
                      "end": 5599,
                      "callee": {
                        "type": "Super",
                        "start": 5592,
                        "end": 5597
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
      "start": 5610,
      "end": 5957,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5616,
        "end": 5659,
        "decorators": [],
        "name": "DerivedWithObjectAccessorsUsingThisInBodies",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 5668,
        "end": 5672,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5673,
        "end": 5957,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 5679,
            "end": 5697,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5679,
              "end": 5687,
              "decorators": [],
              "name": "propName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 5690,
              "end": 5696,
              "value": "prop",
              "raw": "\"prop\""
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
            "start": 5702,
            "end": 5955,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5702,
              "end": 5713,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5713,
              "end": 5955,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5716,
                "end": 5955,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5726,
                    "end": 5932,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5732,
                        "end": 5931,
                        "id": {
                          "type": "Identifier",
                          "start": 5732,
                          "end": 5735,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 5738,
                          "end": 5931,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 5752,
                              "end": 5765,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 5752,
                                "end": 5757,
                                "decorators": [],
                                "name": "_prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 5759,
                                "end": 5765,
                                "value": "prop",
                                "raw": "\"prop\""
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 5779,
                              "end": 5840,
                              "kind": "get",
                              "key": {
                                "type": "Identifier",
                                "start": 5783,
                                "end": 5787,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 5787,
                                "end": 5840,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5790,
                                  "end": 5840,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 5808,
                                      "end": 5826,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "start": 5815,
                                        "end": 5825,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 5815,
                                          "end": 5819
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 5820,
                                          "end": 5825,
                                          "decorators": [],
                                          "name": "_prop",
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 5854,
                              "end": 5921,
                              "kind": "set",
                              "key": {
                                "type": "Identifier",
                                "start": 5858,
                                "end": 5862,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 5862,
                                "end": 5921,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 5863,
                                    "end": 5868,
                                    "decorators": [],
                                    "name": "param",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 5870,
                                  "end": 5921,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 5888,
                                      "end": 5907,
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "start": 5888,
                                        "end": 5906,
                                        "operator": "=",
                                        "left": {
                                          "type": "MemberExpression",
                                          "start": 5888,
                                          "end": 5898,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 5888,
                                            "end": 5892
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 5893,
                                            "end": 5898,
                                            "decorators": [],
                                            "name": "_prop",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 5901,
                                          "end": 5906,
                                          "decorators": [],
                                          "name": "param",
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 5941,
                    "end": 5949,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5941,
                      "end": 5948,
                      "callee": {
                        "type": "Super",
                        "start": 5941,
                        "end": 5946
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
      "start": 5959,
      "end": 6151,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5965,
        "end": 6002,
        "decorators": [],
        "name": "DerivedWithObjectComputedPropertyBody",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 6011,
        "end": 6015,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 6016,
        "end": 6151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6022,
            "end": 6040,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6022,
              "end": 6030,
              "decorators": [],
              "name": "propName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 6033,
              "end": 6039,
              "value": "prop",
              "raw": "\"prop\""
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
            "start": 6045,
            "end": 6149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6045,
              "end": 6056,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 6056,
              "end": 6149,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 6059,
                "end": 6149,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6069,
                    "end": 6126,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6075,
                        "end": 6125,
                        "id": {
                          "type": "Identifier",
                          "start": 6075,
                          "end": 6078,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 6081,
                          "end": 6125,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 6095,
                              "end": 6114,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 6095,
                                "end": 6099,
                                "decorators": [],
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 6101,
                                "end": 6114,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6101,
                                  "end": 6105
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6106,
                                  "end": 6114,
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6135,
                    "end": 6143,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6135,
                      "end": 6142,
                      "callee": {
                        "type": "Super",
                        "start": 6135,
                        "end": 6140
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
      "start": 6153,
      "end": 6347,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6159,
        "end": 6196,
        "decorators": [],
        "name": "DerivedWithObjectComputedPropertyName",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 6205,
        "end": 6209,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 6210,
        "end": 6347,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6216,
            "end": 6234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6216,
              "end": 6224,
              "decorators": [],
              "name": "propName",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 6227,
              "end": 6233,
              "value": "prop",
              "raw": "\"prop\""
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
            "start": 6239,
            "end": 6345,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6239,
              "end": 6250,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 6250,
              "end": 6345,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 6253,
                "end": 6345,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6263,
                    "end": 6322,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6269,
                        "end": 6321,
                        "id": {
                          "type": "Identifier",
                          "start": 6269,
                          "end": 6272,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 6275,
                          "end": 6321,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 6289,
                              "end": 6310,
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "start": 6290,
                                "end": 6303,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6290,
                                  "end": 6294
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6295,
                                  "end": 6303,
                                  "decorators": [],
                                  "name": "propName",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 6306,
                                "end": 6310,
                                "value": true,
                                "raw": "true"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6331,
                    "end": 6339,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6331,
                      "end": 6338,
                      "callee": {
                        "type": "Super",
                        "start": 6331,
                        "end": 6336
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
      "start": 6349,
      "end": 6556,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6355,
        "end": 6378,
        "decorators": [],
        "name": "DerivedWithObjectMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 6387,
        "end": 6391,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 6392,
        "end": 6556,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6398,
            "end": 6410,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6398,
              "end": 6402,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 6405,
              "end": 6409,
              "value": true,
              "raw": "true"
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
            "start": 6415,
            "end": 6554,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6415,
              "end": 6426,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 6426,
              "end": 6554,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 6429,
                "end": 6554,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6439,
                    "end": 6531,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6445,
                        "end": 6530,
                        "id": {
                          "type": "Identifier",
                          "start": 6445,
                          "end": 6448,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 6451,
                          "end": 6530,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 6465,
                              "end": 6519,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 6465,
                                "end": 6472,
                                "decorators": [],
                                "name": "getProp",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 6472,
                                "end": 6519,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 6475,
                                  "end": 6519,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 6493,
                                      "end": 6505,
                                      "argument": {
                                        "type": "ThisExpression",
                                        "start": 6500,
                                        "end": 6504
                                      }
                                    }
                                  ]
                                },
                                "expression": false
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6540,
                    "end": 6548,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6540,
                      "end": 6547,
                      "callee": {
                        "type": "Super",
                        "start": 6540,
                        "end": 6545
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
      "type": "VariableDeclaration",
      "start": 6558,
      "end": 6567,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6562,
          "end": 6563,
          "id": {
            "type": "Identifier",
            "start": 6562,
            "end": 6563,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 6565,
          "end": 6566,
          "id": {
            "type": "Identifier",
            "start": 6565,
            "end": 6566,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6569,
      "end": 7682,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6575,
          "end": 7682,
          "id": {
            "type": "Identifier",
            "start": 6575,
            "end": 6591,
            "decorators": [],
            "name": "DerivedWithLoops",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 6594,
            "end": 7682,
            "elements": [
              {
                "type": "ClassExpression",
                "start": 6600,
                "end": 6711,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 6614,
                  "end": 6618,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6619,
                  "end": 6711,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 6629,
                      "end": 6641,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6629,
                        "end": 6633,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 6636,
                        "end": 6640,
                        "value": true,
                        "raw": "true"
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
                      "start": 6650,
                      "end": 6705,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6650,
                        "end": 6661,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6661,
                        "end": 6705,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6664,
                          "end": 6705,
                          "body": [
                            {
                              "type": "ForStatement",
                              "start": 6678,
                              "end": 6695,
                              "init": {
                                "type": "CallExpression",
                                "start": 6682,
                                "end": 6689,
                                "callee": {
                                  "type": "Super",
                                  "start": 6682,
                                  "end": 6687
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "test": null,
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 6693,
                                "end": 6695,
                                "body": []
                              }
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
                "type": "ClassExpression",
                "start": 6717,
                "end": 6830,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 6731,
                  "end": 6735,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6736,
                  "end": 6830,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 6746,
                      "end": 6758,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6746,
                        "end": 6750,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 6753,
                        "end": 6757,
                        "value": true,
                        "raw": "true"
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
                      "start": 6767,
                      "end": 6824,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6767,
                        "end": 6778,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6778,
                        "end": 6824,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6781,
                          "end": 6824,
                          "body": [
                            {
                              "type": "ForStatement",
                              "start": 6795,
                              "end": 6814,
                              "init": {
                                "type": "Identifier",
                                "start": 6799,
                                "end": 6800,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "test": {
                                "type": "CallExpression",
                                "start": 6802,
                                "end": 6809,
                                "callee": {
                                  "type": "Super",
                                  "start": 6802,
                                  "end": 6807
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "update": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 6812,
                                "end": 6814,
                                "body": []
                              }
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
                "type": "ClassExpression",
                "start": 6836,
                "end": 6951,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 6850,
                  "end": 6854,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6855,
                  "end": 6951,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 6865,
                      "end": 6877,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6865,
                        "end": 6869,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 6872,
                        "end": 6876,
                        "value": true,
                        "raw": "true"
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
                      "start": 6886,
                      "end": 6945,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6886,
                        "end": 6897,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 6897,
                        "end": 6945,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 6900,
                          "end": 6945,
                          "body": [
                            {
                              "type": "ForStatement",
                              "start": 6914,
                              "end": 6935,
                              "init": {
                                "type": "Identifier",
                                "start": 6918,
                                "end": 6919,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "test": {
                                "type": "Identifier",
                                "start": 6921,
                                "end": 6922,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "update": {
                                "type": "CallExpression",
                                "start": 6924,
                                "end": 6931,
                                "callee": {
                                  "type": "Super",
                                  "start": 6924,
                                  "end": 6929
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 6933,
                                "end": 6935,
                                "body": []
                              }
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
                "type": "ClassExpression",
                "start": 6957,
                "end": 7078,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 6971,
                  "end": 6975,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 6976,
                  "end": 7078,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 6986,
                      "end": 6998,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 6986,
                        "end": 6990,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 6993,
                        "end": 6997,
                        "value": true,
                        "raw": "true"
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
                      "start": 7007,
                      "end": 7072,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7007,
                        "end": 7018,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7018,
                        "end": 7072,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7021,
                          "end": 7072,
                          "body": [
                            {
                              "type": "ForStatement",
                              "start": 7035,
                              "end": 7062,
                              "init": null,
                              "test": null,
                              "update": {
                                "type": "CallExpression",
                                "start": 7043,
                                "end": 7050,
                                "callee": {
                                  "type": "Super",
                                  "start": 7043,
                                  "end": 7048
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 7052,
                                "end": 7062,
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 7054,
                                    "end": 7060,
                                    "label": null
                                  }
                                ]
                              }
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
                "type": "ClassExpression",
                "start": 7084,
                "end": 7205,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 7098,
                  "end": 7102,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 7103,
                  "end": 7205,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 7113,
                      "end": 7125,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7113,
                        "end": 7117,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 7120,
                        "end": 7124,
                        "value": true,
                        "raw": "true"
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
                      "start": 7134,
                      "end": 7199,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7134,
                        "end": 7145,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7145,
                        "end": 7199,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7148,
                          "end": 7199,
                          "body": [
                            {
                              "type": "ForOfStatement",
                              "start": 7162,
                              "end": 7189,
                              "await": false,
                              "left": {
                                "type": "VariableDeclaration",
                                "start": 7167,
                                "end": 7174,
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 7173,
                                    "end": 7174,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 7173,
                                      "end": 7174,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": null,
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              "right": {
                                "type": "CallExpression",
                                "start": 7178,
                                "end": 7185,
                                "callee": {
                                  "type": "Super",
                                  "start": 7178,
                                  "end": 7183
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 7187,
                                "end": 7189,
                                "body": []
                              }
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
                "type": "ClassExpression",
                "start": 7211,
                "end": 7323,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 7225,
                  "end": 7229,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 7230,
                  "end": 7323,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 7240,
                      "end": 7252,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7240,
                        "end": 7244,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 7247,
                        "end": 7251,
                        "value": true,
                        "raw": "true"
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
                      "start": 7261,
                      "end": 7317,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7261,
                        "end": 7272,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7272,
                        "end": 7317,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7275,
                          "end": 7317,
                          "body": [
                            {
                              "type": "WhileStatement",
                              "start": 7289,
                              "end": 7307,
                              "test": {
                                "type": "CallExpression",
                                "start": 7296,
                                "end": 7303,
                                "callee": {
                                  "type": "Super",
                                  "start": 7296,
                                  "end": 7301
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "body": {
                                "type": "BlockStatement",
                                "start": 7305,
                                "end": 7307,
                                "body": []
                              }
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
                "type": "ClassExpression",
                "start": 7329,
                "end": 7445,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 7343,
                  "end": 7347,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 7348,
                  "end": 7445,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 7358,
                      "end": 7370,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7358,
                        "end": 7362,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 7365,
                        "end": 7369,
                        "value": true,
                        "raw": "true"
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
                      "start": 7379,
                      "end": 7439,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7379,
                        "end": 7390,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7390,
                        "end": 7439,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7393,
                          "end": 7439,
                          "body": [
                            {
                              "type": "DoWhileStatement",
                              "start": 7407,
                              "end": 7429,
                              "body": {
                                "type": "BlockStatement",
                                "start": 7410,
                                "end": 7412,
                                "body": []
                              },
                              "test": {
                                "type": "CallExpression",
                                "start": 7420,
                                "end": 7427,
                                "callee": {
                                  "type": "Super",
                                  "start": 7420,
                                  "end": 7425
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              }
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
                "type": "ClassExpression",
                "start": 7451,
                "end": 7560,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 7465,
                  "end": 7469,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 7470,
                  "end": 7560,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 7480,
                      "end": 7492,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7480,
                        "end": 7484,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 7487,
                        "end": 7491,
                        "value": true,
                        "raw": "true"
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
                      "start": 7501,
                      "end": 7554,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7501,
                        "end": 7512,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7512,
                        "end": 7554,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7515,
                          "end": 7554,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 7529,
                              "end": 7544,
                              "test": {
                                "type": "CallExpression",
                                "start": 7533,
                                "end": 7540,
                                "callee": {
                                  "type": "Super",
                                  "start": 7533,
                                  "end": 7538
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 7542,
                                "end": 7544,
                                "body": []
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
                "type": "ClassExpression",
                "start": 7566,
                "end": 7679,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 7580,
                  "end": 7584,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 7585,
                  "end": 7679,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 7595,
                      "end": 7607,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7595,
                        "end": 7599,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 7602,
                        "end": 7606,
                        "value": true,
                        "raw": "true"
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
                      "start": 7616,
                      "end": 7673,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 7616,
                        "end": 7627,
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 7627,
                        "end": 7673,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7630,
                          "end": 7673,
                          "body": [
                            {
                              "type": "SwitchStatement",
                              "start": 7644,
                              "end": 7663,
                              "discriminant": {
                                "type": "CallExpression",
                                "start": 7652,
                                "end": 7659,
                                "callee": {
                                  "type": "Super",
                                  "start": 7652,
                                  "end": 7657
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "cases": []
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
