__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Vec",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 50
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 54
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
                    "start": 102,
                    "end": 106
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "storage",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 114
                  },
                  "optional": false,
                  "computed": false,
                  "start": 102,
                  "end": 114
                },
                "right": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 126
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 130
                    }
                  ],
                  "start": 117,
                  "end": 131
                },
                "start": 102,
                "end": 131
              },
              "directive": null,
              "start": 102,
              "end": 132
            }
          ],
          "start": 56,
          "end": 134
        },
        "expression": false,
        "start": 38,
        "end": 134
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Vec",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 149
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dot",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 203
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 209
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 225,
                              "end": 230
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 231,
                              "end": 238
                            },
                            "optional": false,
                            "computed": false,
                            "start": 225,
                            "end": 238
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 245
                          },
                          "optional": false,
                          "computed": false,
                          "start": 225,
                          "end": 245
                        },
                        "operator": "!==",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 250,
                              "end": 254
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 255,
                              "end": 262
                            },
                            "optional": false,
                            "computed": false,
                            "start": 250,
                            "end": 262
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 263,
                            "end": 269
                          },
                          "optional": false,
                          "computed": false,
                          "start": 250,
                          "end": 269
                        },
                        "start": 225,
                        "end": 269
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ThrowStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 295,
                                "end": 300
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TemplateLiteral",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "Dot product only applicable for vectors of equal length",
                                        "cooked": "Dot product only applicable for vectors of equal length"
                                      },
                                      "tail": true,
                                      "start": 301,
                                      "end": 358
                                    }
                                  ],
                                  "expressions": [],
                                  "start": 301,
                                  "end": 358
                                }
                              ],
                              "start": 291,
                              "end": 359
                            },
                            "start": 285,
                            "end": 360
                          }
                        ],
                        "start": 271,
                        "end": 370
                      },
                      "alternate": null,
                      "start": 221,
                      "end": 370
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
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 386
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 389,
                            "end": 390
                          },
                          "definite": false,
                          "start": 383,
                          "end": 390
                        }
                      ],
                      "declare": false,
                      "start": 379,
                      "end": 391
                    },
                    {
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 409,
                              "end": 410
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 413,
                              "end": 414
                            },
                            "definite": false,
                            "start": 409,
                            "end": 414
                          }
                        ],
                        "declare": false,
                        "start": 405,
                        "end": 414
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 416,
                          "end": 417
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 420,
                              "end": 424
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 425,
                              "end": 432
                            },
                            "optional": false,
                            "computed": false,
                            "start": 420,
                            "end": 432
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 433,
                            "end": 439
                          },
                          "optional": false,
                          "computed": false,
                          "start": 420,
                          "end": 439
                        },
                        "start": 416,
                        "end": 439
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 442
                        },
                        "start": 441,
                        "end": 444
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 460,
                                "end": 463
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 473,
                                      "end": 480
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 468,
                                    "end": 480
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 481,
                                    "end": 482
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 468,
                                  "end": 483
                                },
                                "operator": "*",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 486,
                                      "end": 491
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 492,
                                      "end": 499
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 486,
                                    "end": 499
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 500,
                                    "end": 501
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 486,
                                  "end": 502
                                },
                                "start": 468,
                                "end": 502
                              },
                              "start": 460,
                              "end": 503
                            },
                            "directive": null,
                            "start": 460,
                            "end": 504
                          }
                        ],
                        "start": 446,
                        "end": 514
                      },
                      "start": 400,
                      "end": 514
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sum",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 533
                      },
                      "start": 523,
                      "end": 534
                    }
                  ],
                  "start": 211,
                  "end": 540
                },
                "expression": false,
                "start": 203,
                "end": 540
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 200,
              "end": 540
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "magnitude",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
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
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 572,
                            "end": 575
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 578,
                            "end": 579
                          },
                          "definite": false,
                          "start": 572,
                          "end": 579
                        }
                      ],
                      "declare": false,
                      "start": 568,
                      "end": 580
                    },
                    {
                      "type": "ForStatement",
                      "init": {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 598,
                              "end": 599
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 602,
                              "end": 603
                            },
                            "definite": false,
                            "start": 598,
                            "end": 603
                          }
                        ],
                        "declare": false,
                        "start": 594,
                        "end": 603
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 605,
                          "end": 606
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 609,
                              "end": 613
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 614,
                              "end": 621
                            },
                            "optional": false,
                            "computed": false,
                            "start": 609,
                            "end": 621
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 622,
                            "end": 628
                          },
                          "optional": false,
                          "computed": false,
                          "start": 609,
                          "end": 628
                        },
                        "start": 605,
                        "end": 628
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 630,
                          "end": 631
                        },
                        "start": 630,
                        "end": 633
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sum",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 649,
                                "end": 652
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 657,
                                      "end": 661
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 662,
                                      "end": 669
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 657,
                                    "end": 669
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 670,
                                    "end": 671
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 657,
                                  "end": 672
                                },
                                "operator": "**",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 676,
                                  "end": 677
                                },
                                "start": 657,
                                "end": 677
                              },
                              "start": 649,
                              "end": 678
                            },
                            "directive": null,
                            "start": 649,
                            "end": 679
                          }
                        ],
                        "start": 635,
                        "end": 689
                      },
                      "start": 589,
                      "end": 689
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 709
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sqrt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 710,
                            "end": 714
                          },
                          "optional": false,
                          "computed": false,
                          "start": 705,
                          "end": 714
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 718
                          }
                        ],
                        "optional": false,
                        "start": 705,
                        "end": 719
                      },
                      "start": 698,
                      "end": 720
                    }
                  ],
                  "start": 558,
                  "end": 726
                },
                "expression": false,
                "start": 555,
                "end": 726
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 546,
              "end": 726
            }
          ],
          "start": 152,
          "end": 728
        },
        "start": 136,
        "end": 728
      },
      "directive": null,
      "start": 136,
      "end": 728
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Point2D",
          "optional": false,
          "typeAnnotation": null,
          "start": 796,
          "end": 803
        },
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
            "typeAnnotation": null,
            "start": 804,
            "end": 805
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 808
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "ThisExpression",
                    "start": 822,
                    "end": 826
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point2D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 845
                  },
                  "start": 822,
                  "end": 845
                },
                "prefix": true,
                "start": 820,
                "end": 846
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point2D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 876
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 878
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 880,
                          "end": 881
                        }
                      ],
                      "start": 865,
                      "end": 882
                    },
                    "start": 858,
                    "end": 883
                  }
                ],
                "start": 848,
                "end": 889
              },
              "alternate": null,
              "start": 816,
              "end": 889
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 897
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "call",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 902
                  },
                  "optional": false,
                  "computed": false,
                  "start": 894,
                  "end": 902
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ThisExpression",
                    "start": 903,
                    "end": 907
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 909,
                    "end": 910
                  }
                ],
                "optional": false,
                "start": 894,
                "end": 911
              },
              "directive": null,
              "start": 894,
              "end": 912
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 917,
                    "end": 921
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 923
                  },
                  "optional": false,
                  "computed": false,
                  "start": 917,
                  "end": 923
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 927
                },
                "start": 917,
                "end": 927
              },
              "directive": null,
              "start": 917,
              "end": 928
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 933,
                    "end": 937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 938,
                    "end": 939
                  },
                  "optional": false,
                  "computed": false,
                  "start": 933,
                  "end": 939
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 943
                },
                "start": 933,
                "end": 943
              },
              "directive": null,
              "start": 933,
              "end": 944
            }
          ],
          "start": 810,
          "end": 946
        },
        "expression": false,
        "start": 787,
        "end": 946
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 780,
      "end": 946
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 955
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 965
          },
          "optional": false,
          "computed": false,
          "start": 948,
          "end": 965
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "__proto__",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 983
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Vec",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 988
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 974,
              "end": 988
            },
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 998,
                "end": 999
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1019,
                            "end": 1023
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1024,
                            "end": 1031
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1019,
                          "end": 1031
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1032,
                          "end": 1033
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1019,
                        "end": 1034
                      },
                      "start": 1012,
                      "end": 1035
                    }
                  ],
                  "start": 1002,
                  "end": 1041
                },
                "expression": false,
                "start": 999,
                "end": 1041
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 994,
              "end": 1041
            },
            {
              "type": "Property",
              "kind": "set",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1092,
                "end": 1093
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1095
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1107,
                              "end": 1111
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1112,
                              "end": 1119
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1107,
                            "end": 1119
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1120,
                            "end": 1121
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1107,
                          "end": 1122
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1125,
                          "end": 1126
                        },
                        "start": 1107,
                        "end": 1126
                      },
                      "directive": null,
                      "start": 1107,
                      "end": 1127
                    }
                  ],
                  "start": 1097,
                  "end": 1133
                },
                "expression": false,
                "start": 1093,
                "end": 1133
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1088,
              "end": 1133
            },
            {
              "type": "Property",
              "kind": "get",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1143,
                "end": 1144
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1164,
                            "end": 1168
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1169,
                            "end": 1176
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1164,
                          "end": 1176
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1177,
                          "end": 1178
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1164,
                        "end": 1179
                      },
                      "start": 1157,
                      "end": 1180
                    }
                  ],
                  "start": 1147,
                  "end": 1186
                },
                "expression": false,
                "start": 1144,
                "end": 1186
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1139,
              "end": 1186
            },
            {
              "type": "Property",
              "kind": "set",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1237,
                "end": 1238
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1252,
                              "end": 1256
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1257,
                              "end": 1264
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1252,
                            "end": 1264
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1265,
                            "end": 1266
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1252,
                          "end": 1267
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1270,
                          "end": 1271
                        },
                        "start": 1252,
                        "end": 1271
                      },
                      "directive": null,
                      "start": 1252,
                      "end": 1272
                    }
                  ],
                  "start": 1242,
                  "end": 1278
                },
                "expression": false,
                "start": 1238,
                "end": 1278
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1233,
              "end": 1278
            }
          ],
          "start": 968,
          "end": 1280
        },
        "start": 948,
        "end": 1280
      },
      "directive": null,
      "start": 948,
      "end": 1281
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 1282
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "importKind": "value",
          "start": 8,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./source",
        "raw": "\"./source\"",
        "start": 22,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 54
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point2D",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 68
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 69,
                  "end": 70
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 72,
                  "end": 73
                }
              ],
              "start": 57,
              "end": 74
            },
            "definite": false,
            "start": 48,
            "end": 74
          }
        ],
        "declare": false,
        "start": 42,
        "end": 75
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
