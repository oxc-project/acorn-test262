__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 90,
  "end": 986,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "assert",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 105,
            "end": 152,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 114,
              "end": 152,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 120,
                  "end": 150,
                  "alternate": null,
                  "consequent": {
                    "type": "ThrowStatement",
                    "start": 132,
                    "end": 150,
                    "argument": {
                      "type": "NewExpression",
                      "start": 138,
                      "end": 149,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 147,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 124,
                    "end": 130,
                    "argument": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 130,
                      "decorators": [],
                      "name": "check",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "!",
                    "prefix": true
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 105,
                "end": 110,
                "decorators": [],
                "name": "check",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 289,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 233,
        "end": 289,
        "body": [
          {
            "type": "IfStatement",
            "start": 239,
            "end": 287,
            "alternate": null,
            "consequent": {
              "type": "ThrowStatement",
              "start": 269,
              "end": 287,
              "argument": {
                "type": "NewExpression",
                "start": 275,
                "end": 286,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 284,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 243,
              "end": 267,
              "argument": {
                "type": "BinaryExpression",
                "start": 245,
                "end": 266,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 245,
                  "end": 253,
                  "argument": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 258,
                  "end": 266,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 229,
        "decorators": [],
        "name": "assertIsString",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 414,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 376,
        "end": 414,
        "body": [
          {
            "type": "IfStatement",
            "start": 382,
            "end": 412,
            "alternate": null,
            "consequent": {
              "type": "ThrowStatement",
              "start": 394,
              "end": 412,
              "argument": {
                "type": "NewExpression",
                "start": 400,
                "end": 411,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 409,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "test": {
              "type": "UnaryExpression",
              "start": 386,
              "end": 392,
              "argument": {
                "type": "Identifier",
                "start": 387,
                "end": 392,
                "decorators": [],
                "name": "check",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 368,
        "decorators": [],
        "name": "assert2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 369,
          "end": 374,
          "decorators": [],
          "name": "check",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 444,
      "end": 486,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 460,
        "end": 486,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 466,
            "end": 484,
            "argument": {
              "type": "NewExpression",
              "start": 472,
              "end": 483,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 476,
                "end": 481,
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 453,
        "end": 457,
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 513,
      "end": 830,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 528,
        "end": 830,
        "body": [
          {
            "type": "IfStatement",
            "start": 534,
            "end": 610,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 546,
              "end": 610,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 556,
                  "end": 586,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 556,
                    "end": 585,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 563,
                        "end": 584,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 563,
                          "end": 571,
                          "argument": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 571,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 576,
                          "end": 584,
                          "raw": "\"string\"",
                          "value": "string",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 556,
                      "end": 562,
                      "decorators": [],
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 595,
                  "end": 604,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 595,
                    "end": 603,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 596,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 597,
                      "end": 603,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 538,
              "end": 544,
              "argument": {
                "type": "UnaryExpression",
                "start": 539,
                "end": 544,
                "argument": {
                  "type": "Literal",
                  "start": 540,
                  "end": 544,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 615,
            "end": 692,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 627,
              "end": 692,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 668,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 637,
                    "end": 667,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 645,
                        "end": 666,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 645,
                          "end": 653,
                          "argument": {
                            "type": "Identifier",
                            "start": 652,
                            "end": 653,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 658,
                          "end": 666,
                          "raw": "\"string\"",
                          "value": "string",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 637,
                      "end": 644,
                      "decorators": [],
                      "name": "assert2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 677,
                  "end": 686,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 677,
                    "end": 685,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 678,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 685,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 619,
              "end": 625,
              "argument": {
                "type": "UnaryExpression",
                "start": 620,
                "end": 625,
                "argument": {
                  "type": "Literal",
                  "start": 621,
                  "end": 625,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 697,
            "end": 761,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 709,
              "end": 761,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 719,
                  "end": 737,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 719,
                    "end": 736,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 734,
                        "end": 735,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 733,
                      "decorators": [],
                      "name": "assertIsString",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 746,
                  "end": 755,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 746,
                    "end": 754,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 746,
                      "end": 747,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 748,
                      "end": 754,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 701,
              "end": 707,
              "argument": {
                "type": "UnaryExpression",
                "start": 702,
                "end": 707,
                "argument": {
                  "type": "Literal",
                  "start": 703,
                  "end": 707,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "IfStatement",
            "start": 766,
            "end": 828,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 778,
              "end": 828,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 788,
                  "end": 795,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 788,
                    "end": 794,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 788,
                      "end": 792,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 804,
                  "end": 806,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 805,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 770,
              "end": 776,
              "argument": {
                "type": "UnaryExpression",
                "start": 771,
                "end": 776,
                "argument": {
                  "type": "Literal",
                  "start": 772,
                  "end": 776,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                },
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 524,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 525,
          "end": 526,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 863,
      "end": 986,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 878,
        "end": 986,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 884,
            "end": 961,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 905,
                "end": 925,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 916,
                    "end": 925,
                    "argument": {
                      "type": "Literal",
                      "start": 923,
                      "end": 924,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 910,
                  "end": 914,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 934,
                "end": 955,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 946,
                    "end": 955,
                    "argument": {
                      "type": "Literal",
                      "start": 953,
                      "end": 954,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 939,
                  "end": 944,
                  "raw": "false",
                  "value": false,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 892,
              "end": 893,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 966,
            "end": 968,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 872,
        "end": 874,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 875,
          "end": 876,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
