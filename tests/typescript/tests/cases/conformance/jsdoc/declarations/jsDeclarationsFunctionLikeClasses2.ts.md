__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 1282,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 134,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 134,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "Vec",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 51,
            "end": 54,
            "decorators": [],
            "name": "len",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 56,
          "end": 134,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 102,
              "end": 132,
              "expression": {
                "type": "AssignmentExpression",
                "start": 102,
                "end": 131,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 102,
                  "end": 114,
                  "object": {
                    "type": "ThisExpression",
                    "start": 102,
                    "end": 106
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 114,
                    "decorators": [],
                    "name": "storage",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "NewExpression",
                  "start": 117,
                  "end": 131,
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 126,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 127,
                      "end": 130,
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 728,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 728,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 136,
          "end": 149,
          "object": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "decorators": [],
            "name": "Vec",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 140,
            "end": 149,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 152,
          "end": 728,
          "properties": [
            {
              "type": "Property",
              "start": 200,
              "end": 540,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 200,
                "end": 203,
                "decorators": [],
                "name": "dot",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 203,
                "end": 540,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 209,
                    "decorators": [],
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 211,
                  "end": 540,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 221,
                      "end": 370,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 225,
                        "end": 269,
                        "left": {
                          "type": "MemberExpression",
                          "start": 225,
                          "end": 245,
                          "object": {
                            "type": "MemberExpression",
                            "start": 225,
                            "end": 238,
                            "object": {
                              "type": "Identifier",
                              "start": 225,
                              "end": 230,
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 231,
                              "end": 238,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 245,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "MemberExpression",
                          "start": 250,
                          "end": 269,
                          "object": {
                            "type": "MemberExpression",
                            "start": 250,
                            "end": 262,
                            "object": {
                              "type": "ThisExpression",
                              "start": 250,
                              "end": 254
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 255,
                              "end": 262,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 269,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 271,
                        "end": 370,
                        "body": [
                          {
                            "type": "ThrowStatement",
                            "start": 285,
                            "end": 360,
                            "argument": {
                              "type": "NewExpression",
                              "start": 291,
                              "end": 359,
                              "callee": {
                                "type": "Identifier",
                                "start": 295,
                                "end": 300,
                                "decorators": [],
                                "name": "Error",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TemplateLiteral",
                                  "start": 301,
                                  "end": 358,
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "start": 301,
                                      "end": 358,
                                      "value": {
                                        "cooked": "Dot product only applicable for vectors of equal length",
                                        "raw": "Dot product only applicable for vectors of equal length"
                                      },
                                      "tail": true
                                    }
                                  ],
                                  "expressions": []
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 379,
                      "end": 391,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 383,
                          "end": 390,
                          "id": {
                            "type": "Identifier",
                            "start": 383,
                            "end": 386,
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 389,
                            "end": 390,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ForStatement",
                      "start": 400,
                      "end": 514,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 405,
                        "end": 414,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 409,
                            "end": 414,
                            "id": {
                              "type": "Identifier",
                              "start": 409,
                              "end": 410,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 413,
                              "end": 414,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 416,
                        "end": 439,
                        "left": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 417,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "start": 420,
                          "end": 439,
                          "object": {
                            "type": "MemberExpression",
                            "start": 420,
                            "end": 432,
                            "object": {
                              "type": "ThisExpression",
                              "start": 420,
                              "end": 424
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 425,
                              "end": 432,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 433,
                            "end": 439,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 441,
                        "end": 444,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 442,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 446,
                        "end": 514,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 460,
                            "end": 504,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 460,
                              "end": 503,
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "start": 460,
                                "end": 463,
                                "decorators": [],
                                "name": "sum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 468,
                                "end": 502,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 468,
                                  "end": 483,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 468,
                                    "end": 480,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 480,
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 481,
                                    "end": 482,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
                                },
                                "operator": "*",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 486,
                                  "end": 502,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 486,
                                    "end": 499,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 486,
                                      "end": 491,
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 492,
                                      "end": 499,
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 500,
                                    "end": 501,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
                                }
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 523,
                      "end": 534,
                      "argument": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 533,
                        "decorators": [],
                        "name": "sum",
                        "optional": false,
                        "typeAnnotation": null
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
            },
            {
              "type": "Property",
              "start": 546,
              "end": 726,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 546,
                "end": 555,
                "decorators": [],
                "name": "magnitude",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 555,
                "end": 726,
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
                  "end": 726,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 568,
                      "end": 580,
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 572,
                          "end": 579,
                          "id": {
                            "type": "Identifier",
                            "start": 572,
                            "end": 575,
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 578,
                            "end": 579,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ForStatement",
                      "start": 589,
                      "end": 689,
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 594,
                        "end": 603,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 598,
                            "end": 603,
                            "id": {
                              "type": "Identifier",
                              "start": 598,
                              "end": 599,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 602,
                              "end": 603,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 605,
                        "end": 628,
                        "left": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 606,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "<",
                        "right": {
                          "type": "MemberExpression",
                          "start": 609,
                          "end": 628,
                          "object": {
                            "type": "MemberExpression",
                            "start": 609,
                            "end": 621,
                            "object": {
                              "type": "ThisExpression",
                              "start": 609,
                              "end": 613
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 614,
                              "end": 621,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 628,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 630,
                        "end": 633,
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 630,
                          "end": 631,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 635,
                        "end": 689,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 649,
                            "end": 679,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 649,
                              "end": 678,
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "start": 649,
                                "end": 652,
                                "decorators": [],
                                "name": "sum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 657,
                                "end": 677,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 657,
                                  "end": 672,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 657,
                                    "end": 669,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 657,
                                      "end": 661
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 662,
                                      "end": 669,
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 670,
                                    "end": 671,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
                                },
                                "operator": "**",
                                "right": {
                                  "type": "Literal",
                                  "start": 676,
                                  "end": 677,
                                  "value": 2,
                                  "raw": "2"
                                }
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 698,
                      "end": 720,
                      "argument": {
                        "type": "CallExpression",
                        "start": 705,
                        "end": 719,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 705,
                          "end": 714,
                          "object": {
                            "type": "Identifier",
                            "start": 705,
                            "end": 709,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 714,
                            "decorators": [],
                            "name": "sqrt",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 715,
                            "end": 718,
                            "decorators": [],
                            "name": "sum",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
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
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 780,
      "end": 946,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 787,
        "end": 946,
        "id": {
          "type": "Identifier",
          "start": 796,
          "end": 803,
          "decorators": [],
          "name": "Point2D",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 804,
            "end": 805,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 807,
            "end": 808,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 810,
          "end": 946,
          "body": [
            {
              "type": "IfStatement",
              "start": 816,
              "end": 889,
              "test": {
                "type": "UnaryExpression",
                "start": 820,
                "end": 846,
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 822,
                  "end": 845,
                  "left": {
                    "type": "ThisExpression",
                    "start": 822,
                    "end": 826
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 845,
                    "decorators": [],
                    "name": "Point2D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "prefix": true
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 848,
                "end": 889,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 858,
                    "end": 883,
                    "argument": {
                      "type": "NewExpression",
                      "start": 865,
                      "end": 882,
                      "callee": {
                        "type": "Identifier",
                        "start": 869,
                        "end": 876,
                        "decorators": [],
                        "name": "Point2D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 877,
                          "end": 878,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 880,
                          "end": 881,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "start": 894,
              "end": 912,
              "expression": {
                "type": "CallExpression",
                "start": 894,
                "end": 911,
                "callee": {
                  "type": "MemberExpression",
                  "start": 894,
                  "end": 902,
                  "object": {
                    "type": "Identifier",
                    "start": 894,
                    "end": 897,
                    "decorators": [],
                    "name": "Vec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 902,
                    "decorators": [],
                    "name": "call",
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
                    "start": 903,
                    "end": 907
                  },
                  {
                    "type": "Literal",
                    "start": 909,
                    "end": 910,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 917,
              "end": 928,
              "expression": {
                "type": "AssignmentExpression",
                "start": 917,
                "end": 927,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 917,
                  "end": 923,
                  "object": {
                    "type": "ThisExpression",
                    "start": 917,
                    "end": 921
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 923,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 927,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 933,
              "end": 944,
              "expression": {
                "type": "AssignmentExpression",
                "start": 933,
                "end": 943,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 933,
                  "end": 939,
                  "object": {
                    "type": "ThisExpression",
                    "start": 933,
                    "end": 937
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 938,
                    "end": 939,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 942,
                  "end": 943,
                  "decorators": [],
                  "name": "y",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 948,
      "end": 1281,
      "expression": {
        "type": "AssignmentExpression",
        "start": 948,
        "end": 1280,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 948,
          "end": 965,
          "object": {
            "type": "Identifier",
            "start": 948,
            "end": 955,
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 956,
            "end": 965,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 968,
          "end": 1280,
          "properties": [
            {
              "type": "Property",
              "start": 974,
              "end": 988,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 974,
                "end": 983,
                "decorators": [],
                "name": "__proto__",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 985,
                "end": 988,
                "decorators": [],
                "name": "Vec",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 994,
              "end": 1041,
              "kind": "get",
              "key": {
                "type": "Identifier",
                "start": 998,
                "end": 999,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 999,
                "end": 1041,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1002,
                  "end": 1041,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1012,
                      "end": 1035,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1019,
                        "end": 1034,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1019,
                          "end": 1031,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1019,
                            "end": 1023
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1024,
                            "end": 1031,
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1032,
                          "end": 1033,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
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
              "start": 1088,
              "end": 1133,
              "kind": "set",
              "key": {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1093,
                "end": 1133,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1094,
                    "end": 1095,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1097,
                  "end": 1133,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1107,
                      "end": 1127,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1107,
                        "end": 1126,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 1107,
                          "end": 1122,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1107,
                            "end": 1119,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1107,
                              "end": 1111
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1112,
                              "end": 1119,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1120,
                            "end": 1121,
                            "value": 0,
                            "raw": "0"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1125,
                          "end": 1126,
                          "decorators": [],
                          "name": "x",
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
            },
            {
              "type": "Property",
              "start": 1139,
              "end": 1186,
              "kind": "get",
              "key": {
                "type": "Identifier",
                "start": 1143,
                "end": 1144,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1144,
                "end": 1186,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1147,
                  "end": 1186,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1157,
                      "end": 1180,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1164,
                        "end": 1179,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1164,
                          "end": 1176,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1164,
                            "end": 1168
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1169,
                            "end": 1176,
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1177,
                          "end": 1178,
                          "value": 1,
                          "raw": "1"
                        },
                        "optional": false,
                        "computed": true
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
              "start": 1233,
              "end": 1278,
              "kind": "set",
              "key": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 1238,
                "end": 1278,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1242,
                  "end": 1278,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1252,
                      "end": 1272,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1252,
                        "end": 1271,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 1252,
                          "end": 1267,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1252,
                            "end": 1264,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1252,
                              "end": 1256
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1257,
                              "end": 1264,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Literal",
                            "start": 1265,
                            "end": 1266,
                            "value": 1,
                            "raw": "1"
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1270,
                          "end": 1271,
                          "decorators": [],
                          "name": "y",
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 32,
        "value": "./source",
        "raw": "\"./source\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 75,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 75,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 74,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 54,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 57,
              "end": 74,
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 68,
                "decorators": [],
                "name": "Point2D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
