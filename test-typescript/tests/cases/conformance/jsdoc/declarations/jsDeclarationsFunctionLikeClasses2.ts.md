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
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 134,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 56,
          "end": 134,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 102,
              "end": 132,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 102,
                "end": 131,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 102,
                  "end": 114,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 102,
                    "end": 106
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 114,
                    "decorators": [],
                    "name": "storage",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "NewExpression",
                  "start": 117,
                  "end": 131,
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
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 126,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "Vec",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 728,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 728,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 136,
          "end": 149,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "decorators": [],
            "name": "Vec",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 140,
            "end": 149,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 200,
                "end": 203,
                "decorators": [],
                "name": "dot",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 203,
                "end": 540,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 211,
                  "end": 540,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 221,
                      "end": 370,
                      "alternate": null,
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
                              "arguments": [
                                {
                                  "type": "TemplateLiteral",
                                  "start": 301,
                                  "end": 358,
                                  "expressions": [],
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "start": 301,
                                      "end": 358,
                                      "tail": true,
                                      "value": {
                                        "cooked": "Dot product only applicable for vectors of equal length",
                                        "raw": "Dot product only applicable for vectors of equal length"
                                      }
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 295,
                                "end": 300,
                                "decorators": [],
                                "name": "Error",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 225,
                        "end": 269,
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 225,
                          "end": 245,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 225,
                            "end": 238,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 225,
                              "end": 230,
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 231,
                              "end": 238,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 239,
                            "end": 245,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 250,
                          "end": 269,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 250,
                            "end": 262,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 250,
                              "end": 254
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 255,
                              "end": 262,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 269,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 379,
                      "end": 391,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 383,
                          "end": 390,
                          "definite": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    {
                      "type": "ForStatement",
                      "start": 400,
                      "end": 514,
                      "body": {
                        "type": "BlockStatement",
                        "start": 446,
                        "end": 514,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 460,
                            "end": 504,
                            "directive": null,
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
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 468,
                                  "end": 483,
                                  "computed": true,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 468,
                                    "end": 480,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 468,
                                      "end": 472
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 480,
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 481,
                                    "end": 482,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 486,
                                  "end": 502,
                                  "computed": true,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 486,
                                    "end": 499,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 486,
                                      "end": 491,
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 492,
                                      "end": 499,
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 500,
                                    "end": 501,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 405,
                        "end": 414,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 409,
                            "end": 414,
                            "definite": false,
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
                              "raw": "0",
                              "value": 0
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 416,
                        "end": 439,
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 417,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 420,
                          "end": 439,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 420,
                            "end": 432,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 420,
                              "end": 424
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 425,
                              "end": 432,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 433,
                            "end": 439,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 441,
                        "end": 444,
                        "argument": {
                          "type": "Identifier",
                          "start": 441,
                          "end": 442,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": false
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
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            },
            {
              "type": "Property",
              "start": 546,
              "end": 726,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 546,
                "end": 555,
                "decorators": [],
                "name": "magnitude",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": true,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 555,
                "end": 726,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 558,
                  "end": 726,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 568,
                      "end": 580,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 572,
                          "end": 579,
                          "definite": false,
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
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let"
                    },
                    {
                      "type": "ForStatement",
                      "start": 589,
                      "end": 689,
                      "body": {
                        "type": "BlockStatement",
                        "start": 635,
                        "end": 689,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 649,
                            "end": 679,
                            "directive": null,
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
                                "operator": "**",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 657,
                                  "end": 672,
                                  "computed": true,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 657,
                                    "end": 669,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 657,
                                      "end": 661
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 662,
                                      "end": 669,
                                      "decorators": [],
                                      "name": "storage",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 670,
                                    "end": 671,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 676,
                                  "end": 677,
                                  "raw": "2",
                                  "value": 2
                                }
                              }
                            }
                          }
                        ]
                      },
                      "init": {
                        "type": "VariableDeclaration",
                        "start": 594,
                        "end": 603,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 598,
                            "end": 603,
                            "definite": false,
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
                              "raw": "0",
                              "value": 0
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 605,
                        "end": 628,
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 606,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 609,
                          "end": 628,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 609,
                            "end": 621,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 609,
                              "end": 613
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 614,
                              "end": 621,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 622,
                            "end": 628,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "start": 630,
                        "end": 633,
                        "argument": {
                          "type": "Identifier",
                          "start": 630,
                          "end": 631,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "++",
                        "prefix": false
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 705,
                          "end": 714,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 705,
                            "end": 709,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 714,
                            "decorators": [],
                            "name": "sqrt",
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
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 780,
      "end": 946,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 787,
        "end": 946,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 810,
          "end": 946,
          "body": [
            {
              "type": "IfStatement",
              "start": 816,
              "end": 889,
              "alternate": null,
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
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 869,
                        "end": 876,
                        "decorators": [],
                        "name": "Point2D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "UnaryExpression",
                "start": 820,
                "end": 846,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 822,
                  "end": 845,
                  "operator": "instanceof",
                  "left": {
                    "type": "ThisExpression",
                    "start": 822,
                    "end": 826
                  },
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
                "operator": "!",
                "prefix": true
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 894,
              "end": 912,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 894,
                "end": 911,
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
                    "raw": "2",
                    "value": 2
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 894,
                  "end": 902,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 894,
                    "end": 897,
                    "decorators": [],
                    "name": "Vec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 902,
                    "decorators": [],
                    "name": "call",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 917,
              "end": 928,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 917,
                "end": 927,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 917,
                  "end": 923,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 917,
                    "end": 921
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 923,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 933,
              "end": 944,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 933,
                "end": 943,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 933,
                  "end": 939,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 933,
                    "end": 937
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 938,
                    "end": 939,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 796,
          "end": 803,
          "decorators": [],
          "name": "Point2D",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 948,
      "end": 1281,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 948,
        "end": 1280,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 948,
          "end": 965,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 948,
            "end": 955,
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 956,
            "end": 965,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 974,
                "end": 983,
                "decorators": [],
                "name": "__proto__",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 985,
                "end": 988,
                "decorators": [],
                "name": "Vec",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 994,
              "end": 1041,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 998,
                "end": 999,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 999,
                "end": 1041,
                "async": false,
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
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1019,
                          "end": 1031,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1019,
                            "end": 1023
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1024,
                            "end": 1031,
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1032,
                          "end": 1033,
                          "raw": "0",
                          "value": 0
                        }
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
            },
            {
              "type": "Property",
              "start": 1088,
              "end": 1133,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1092,
                "end": 1093,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1093,
                "end": 1133,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1097,
                  "end": 1133,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1107,
                      "end": 1127,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1107,
                        "end": 1126,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 1107,
                          "end": 1122,
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1107,
                            "end": 1119,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1107,
                              "end": 1111
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1112,
                              "end": 1119,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 1120,
                            "end": 1121,
                            "raw": "0",
                            "value": 0
                          }
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
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            },
            {
              "type": "Property",
              "start": 1139,
              "end": 1186,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1143,
                "end": 1144,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "get",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1144,
                "end": 1186,
                "async": false,
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
                        "computed": true,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1164,
                          "end": 1176,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1164,
                            "end": 1168
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1169,
                            "end": 1176,
                            "decorators": [],
                            "name": "storage",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1177,
                          "end": 1178,
                          "raw": "1",
                          "value": 1
                        }
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
            },
            {
              "type": "Property",
              "start": 1233,
              "end": 1278,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1238,
                "end": 1278,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1242,
                  "end": 1278,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1252,
                      "end": 1272,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1252,
                        "end": 1271,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 1252,
                          "end": 1267,
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1252,
                            "end": 1264,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1252,
                              "end": 1256
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1257,
                              "end": 1264,
                              "decorators": [],
                              "name": "storage",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 1265,
                            "end": 1266,
                            "raw": "1",
                            "value": 1
                          }
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
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            }
          ]
        }
      }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 32,
        "raw": "\"./source\"",
        "value": "./source"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "Point2D",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 75,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 75,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 74,
            "definite": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "raw": "0",
                  "value": 0
                },
                {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 68,
                "decorators": [],
                "name": "Point2D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
