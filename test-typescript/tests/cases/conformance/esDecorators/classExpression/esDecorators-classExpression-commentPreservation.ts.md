__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 832,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 831,
      "expression": {
        "type": "ClassExpression",
        "start": 37,
        "end": 828,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 67,
          "end": 828,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 83,
              "end": 132,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 127,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 127,
                "end": 132,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 130,
                  "end": 132,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 83,
                  "end": 87,
                  "expression": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 102,
                  "end": 106,
                  "expression": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 106,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 148,
              "end": 208,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 192,
                "end": 208,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 195,
                  "end": 208,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 197,
                      "end": 206,
                      "argument": {
                        "type": "Literal",
                        "start": 204,
                        "end": 205,
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
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 148,
                  "end": 152,
                  "expression": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 152,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 167,
                  "end": 171,
                  "expression": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 171,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 225,
              "end": 289,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 270,
                "end": 289,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 271,
                    "end": 284,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 286,
                  "end": 289,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 225,
                  "end": 229,
                  "expression": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 229,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 245,
                  "end": 249,
                  "expression": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 249,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 306,
              "end": 352,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 350,
                "end": 351,
                "value": 1,
                "raw": "1"
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 306,
                  "end": 310,
                  "expression": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 310,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 326,
                  "end": 330,
                  "expression": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 330,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "AccessorProperty",
              "start": 369,
              "end": 424,
              "key": {
                "type": "Identifier",
                "start": 418,
                "end": 419,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 369,
                  "end": 373,
                  "expression": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 373,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 389,
                  "end": 393,
                  "expression": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 393,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "typeAnnotation": null,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "override": false,
              "readonly": false
            },
            {
              "type": "MethodDefinition",
              "start": 441,
              "end": 500,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 488,
                "end": 495,
                "name": "method"
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 495,
                "end": 500,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 498,
                  "end": 500,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 441,
                  "end": 445,
                  "expression": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 445,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 461,
                  "end": 465,
                  "expression": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 465,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 517,
              "end": 586,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 568,
                "end": 570,
                "name": "x"
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 570,
                "end": 586,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 573,
                  "end": 586,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 575,
                      "end": 584,
                      "argument": {
                        "type": "Literal",
                        "start": 582,
                        "end": 583,
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
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 517,
                  "end": 521,
                  "expression": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 521,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 537,
                  "end": 541,
                  "expression": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 541,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 603,
              "end": 675,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 654,
                "end": 656,
                "name": "x"
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 656,
                "end": 675,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 657,
                    "end": 670,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 662,
                      "end": 670,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 664,
                        "end": 670
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 672,
                  "end": 675,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 603,
                  "end": 607,
                  "expression": {
                    "type": "Identifier",
                    "start": 604,
                    "end": 607,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 623,
                  "end": 627,
                  "expression": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 627,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 692,
              "end": 746,
              "static": true,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 739,
                "end": 741,
                "name": "y"
              },
              "value": {
                "type": "Literal",
                "start": 744,
                "end": 745,
                "value": 1,
                "raw": "1"
              },
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 692,
                  "end": 696,
                  "expression": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 696,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 712,
                  "end": 716,
                  "expression": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 716,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "AccessorProperty",
              "start": 763,
              "end": 826,
              "key": {
                "type": "PrivateIdentifier",
                "start": 819,
                "end": 821,
                "name": "z"
              },
              "value": {
                "type": "Literal",
                "start": 824,
                "end": 825,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": true,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 763,
                  "end": 767,
                  "expression": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 767,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "Decorator",
                  "start": 783,
                  "end": 787,
                  "expression": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 787,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "typeAnnotation": null,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "override": false,
              "readonly": false
            }
          ]
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 37,
            "end": 41,
            "expression": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Decorator",
            "start": 48,
            "end": 52,
            "expression": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
