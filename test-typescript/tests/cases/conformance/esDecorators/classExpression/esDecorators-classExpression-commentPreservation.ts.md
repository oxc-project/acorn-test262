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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 831,
      "expression": {
        "type": "ClassExpression",
        "start": 37,
        "end": 828,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 67,
          "end": 828,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 83,
              "end": 132,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 83,
                  "end": 87,
                  "expression": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 127,
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
                "start": 127,
                "end": 132,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 130,
                  "end": 132,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 148,
              "end": 208,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 148,
                  "end": 152,
                  "expression": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 152,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 192,
                "end": 208,
                "async": false,
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
                        "raw": "1",
                        "value": 1
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
            },
            {
              "type": "MethodDefinition",
              "start": 225,
              "end": 289,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 225,
                  "end": 229,
                  "expression": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 229,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 269,
                "end": 270,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 270,
                "end": 289,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 286,
                  "end": 289,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 271,
                    "end": 284,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 306,
              "end": 352,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 306,
                  "end": 310,
                  "expression": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 310,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 350,
                "end": 351,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "AccessorProperty",
              "start": 369,
              "end": 424,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 369,
                  "end": 373,
                  "expression": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 373,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 418,
                "end": 419,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 422,
                "end": 423,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "MethodDefinition",
              "start": 441,
              "end": 500,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 441,
                  "end": 445,
                  "expression": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 445,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "start": 488,
                "end": 495,
                "name": "method"
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 495,
                "end": 500,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 498,
                  "end": 500,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "MethodDefinition",
              "start": 517,
              "end": 586,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 517,
                  "end": 521,
                  "expression": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 521,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "start": 568,
                "end": 570,
                "name": "x"
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 570,
                "end": 586,
                "async": false,
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
                        "raw": "1",
                        "value": 1
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
            },
            {
              "type": "MethodDefinition",
              "start": 603,
              "end": 675,
              "computed": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 603,
                  "end": 607,
                  "expression": {
                    "type": "Identifier",
                    "start": 604,
                    "end": 607,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "PrivateIdentifier",
                "start": 654,
                "end": 656,
                "name": "x"
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 656,
                "end": 675,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 672,
                  "end": 675,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 657,
                    "end": 670,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 662,
                      "end": 670,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 664,
                        "end": 670
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 692,
              "end": 746,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 692,
                  "end": 696,
                  "expression": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 696,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 739,
                "end": 741,
                "name": "y"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "start": 744,
                "end": 745,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "AccessorProperty",
              "start": 763,
              "end": 826,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 763,
                  "end": 767,
                  "expression": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 767,
                    "decorators": [],
                    "name": "dec",
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
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 819,
                "end": 821,
                "name": "z"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "start": 824,
                "end": 825,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 37,
            "end": 41,
            "expression": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "dec",
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
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
