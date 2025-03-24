__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2332,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 74,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 74,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 56,
            "end": 72,
            "argument": {
              "type": "MemberExpression",
              "start": 63,
              "end": 71,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 71,
                "decorators": [],
                "name": "length",
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
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "len",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 48,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 218,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 218,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 102,
            "end": 135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 106,
                "end": 134,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 134,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 109,
                      "end": 134,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 109,
                          "end": 115
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 127,
                          "end": 134
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 140,
            "end": 147,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 146,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 144,
                "end": 146,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 152,
            "end": 209,
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 209,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 175,
                  "end": 192,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 175,
                    "end": 191,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 176,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 179,
                      "end": 191,
                      "argument": {
                        "type": "CallExpression",
                        "start": 185,
                        "end": 191,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 188,
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 201,
                  "end": 203,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 159,
              "end": 163,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 216,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "x",
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
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 362,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 362,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 246,
            "end": 279,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 250,
                "end": 278,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 278,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 253,
                      "end": 278,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 253,
                          "end": 259
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 262,
                          "end": 268
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 271,
                          "end": 278
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 284,
            "end": 291,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 284,
              "end": 290,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 288,
                "end": 290,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 296,
            "end": 353,
            "body": {
              "type": "BlockStatement",
              "start": 309,
              "end": 353,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 319,
                  "end": 321,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 320,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 330,
                  "end": 347,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 330,
                    "end": 346,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 334,
                      "end": 346,
                      "argument": {
                        "type": "CallExpression",
                        "start": 340,
                        "end": 346,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 344,
                            "end": 345,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 340,
                          "end": 343,
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 303,
              "end": 307,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 358,
            "end": 360,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "decorators": [],
              "name": "x",
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
        "start": 235,
        "end": 237,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 364,
      "end": 413,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 384,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 385,
          "end": 394,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 386,
            "end": 394,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 395,
        "end": 412,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 397,
          "end": 412,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 404,
            "end": 412,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 405,
                "end": 411
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 397,
            "end": 404,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 414,
      "end": 463,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 434,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 435,
          "end": 444,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 436,
            "end": 444,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 438,
              "end": 444
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 445,
        "end": 462,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 447,
          "end": 462,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 454,
            "end": 462,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 455,
                "end": 461
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 447,
            "end": 454,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 465,
      "end": 607,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 485,
        "end": 607,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 491,
            "end": 524,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 495,
                "end": 523,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 495,
                  "end": 523,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 496,
                    "end": 523,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 498,
                      "end": 523,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 498,
                          "end": 504
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 507,
                          "end": 513
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 516,
                          "end": 523
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 529,
            "end": 536,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 529,
              "end": 535,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 533,
                "end": 535,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 541,
            "end": 598,
            "body": {
              "type": "BlockStatement",
              "start": 554,
              "end": 598,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 564,
                  "end": 581,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 564,
                    "end": 580,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 565,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 568,
                      "end": 580,
                      "argument": {
                        "type": "CallExpression",
                        "start": 574,
                        "end": 580,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 578,
                            "end": 579,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 577,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 590,
                  "end": 592,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 590,
                    "end": 591,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 548,
              "end": 552,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 603,
            "end": 605,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "x",
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
        "start": 480,
        "end": 482,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 609,
      "end": 751,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 751,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 635,
            "end": 668,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 667,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 667,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 640,
                    "end": 667,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 642,
                      "end": 667,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 642,
                          "end": 648
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 651,
                          "end": 657
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 660,
                          "end": 667
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 673,
            "end": 680,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 673,
              "end": 679,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 673,
                "end": 674,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 677,
                "end": 679,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 685,
            "end": 742,
            "body": {
              "type": "BlockStatement",
              "start": 698,
              "end": 742,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 708,
                  "end": 710,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 709,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 719,
                  "end": 736,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 719,
                    "end": 735,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 720,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "start": 723,
                      "end": 735,
                      "argument": {
                        "type": "CallExpression",
                        "start": 729,
                        "end": 735,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 733,
                            "end": 734,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 729,
                          "end": 732,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 692,
              "end": 696,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 747,
            "end": 749,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 747,
              "end": 748,
              "decorators": [],
              "name": "x",
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
        "start": 624,
        "end": 626,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 753,
      "end": 832,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 814,
        "end": 832,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 820,
            "end": 830,
            "argument": {
              "type": "UnaryExpression",
              "start": 827,
              "end": 829,
              "argument": {
                "type": "Identifier",
                "start": 828,
                "end": 829,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
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
        "start": 768,
        "end": 776,
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 777,
          "end": 795,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 778,
            "end": 795,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 780,
              "end": 795,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 780,
                  "end": 786
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 789,
                  "end": 795
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 796,
        "end": 813,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 798,
          "end": 813,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 805,
            "end": 813,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 806,
                "end": 812
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 798,
            "end": 805,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 834,
      "end": 964,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 854,
        "end": 964,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 860,
            "end": 893,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 864,
                "end": 892,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 864,
                  "end": 892,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 865,
                    "end": 892,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 867,
                      "end": 892,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 867,
                          "end": 873
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 876,
                          "end": 882
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 885,
                          "end": 892
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 898,
            "end": 906,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 898,
              "end": 905,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 902,
                "end": 905,
                "raw": "\"0\"",
                "value": "0"
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 911,
            "end": 962,
            "body": {
              "type": "BlockStatement",
              "start": 924,
              "end": 962,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 934,
                  "end": 945,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 934,
                    "end": 944,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 934,
                      "end": 935,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 938,
                      "end": 944,
                      "operator": "+",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 938,
                        "end": 940,
                        "argument": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 940,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 943,
                        "end": 944,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 954,
                  "end": 956,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 954,
                    "end": 955,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 918,
              "end": 922,
              "decorators": [],
              "name": "cond",
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
        "start": 849,
        "end": 851,
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 966,
      "end": 1111,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 986,
        "end": 1111,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 992,
            "end": 1025,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 996,
                "end": 1024,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 996,
                  "end": 1024,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 997,
                    "end": 1024,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 999,
                      "end": 1024,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 999,
                          "end": 1005
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1008,
                          "end": 1014
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1017,
                          "end": 1024
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1030,
            "end": 1038,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1030,
              "end": 1037,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1030,
                "end": 1031,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1034,
                "end": 1037,
                "raw": "\"0\"",
                "value": "0"
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 1043,
            "end": 1109,
            "body": {
              "type": "BlockStatement",
              "start": 1056,
              "end": 1109,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1066,
                  "end": 1092,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1066,
                    "end": 1091,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1067,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1070,
                      "end": 1091,
                      "operator": "+",
                      "left": {
                        "type": "AwaitExpression",
                        "start": 1070,
                        "end": 1087,
                        "argument": {
                          "type": "CallExpression",
                          "start": 1076,
                          "end": 1087,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1085,
                              "end": 1086,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1076,
                            "end": 1084,
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1090,
                        "end": 1091,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1101,
                  "end": 1103,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1101,
                    "end": 1102,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1050,
              "end": 1054,
              "decorators": [],
              "name": "cond",
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
        "start": 981,
        "end": 983,
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1113,
      "end": 1277,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1133,
        "end": 1277,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1139,
            "end": 1172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1143,
                "end": 1171,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1143,
                  "end": 1171,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1144,
                    "end": 1171,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1146,
                      "end": 1171,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1146,
                          "end": 1152
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1155,
                          "end": 1161
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1164,
                          "end": 1171
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1177,
            "end": 1185,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1177,
              "end": 1184,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1177,
                "end": 1178,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1181,
                "end": 1184,
                "raw": "\"0\"",
                "value": "0"
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 1190,
            "end": 1275,
            "body": {
              "type": "BlockStatement",
              "start": 1203,
              "end": 1275,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1213,
                  "end": 1239,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1217,
                      "end": 1238,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1217,
                        "end": 1218,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 1221,
                        "end": 1238,
                        "argument": {
                          "type": "CallExpression",
                          "start": 1227,
                          "end": 1238,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1236,
                              "end": 1237,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1227,
                            "end": 1235,
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1248,
                  "end": 1258,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1248,
                    "end": 1257,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1248,
                      "end": 1249,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1252,
                      "end": 1257,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1252,
                        "end": 1253,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1256,
                        "end": 1257,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1267,
                  "end": 1269,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1267,
                    "end": 1268,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1197,
              "end": 1201,
              "decorators": [],
              "name": "cond",
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
        "start": 1128,
        "end": 1130,
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1279,
      "end": 1454,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1299,
        "end": 1454,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1305,
            "end": 1338,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1309,
                "end": 1337,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1309,
                  "end": 1337,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1310,
                    "end": 1337,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1312,
                      "end": 1337,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1312,
                          "end": 1318
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1321,
                          "end": 1327
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1330,
                          "end": 1337
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1343,
            "end": 1351,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1343,
              "end": 1350,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1343,
                "end": 1344,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1347,
                "end": 1350,
                "raw": "\"0\"",
                "value": "0"
              }
            }
          },
          {
            "type": "WhileStatement",
            "start": 1356,
            "end": 1452,
            "body": {
              "type": "BlockStatement",
              "start": 1369,
              "end": 1452,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1379,
                  "end": 1381,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1379,
                    "end": 1380,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1390,
                  "end": 1416,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1394,
                      "end": 1415,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1394,
                        "end": 1395,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 1398,
                        "end": 1415,
                        "argument": {
                          "type": "CallExpression",
                          "start": 1404,
                          "end": 1415,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1413,
                              "end": 1414,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1404,
                            "end": 1412,
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1425,
                  "end": 1435,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1425,
                    "end": 1434,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1425,
                      "end": 1426,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1429,
                      "end": 1434,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1429,
                        "end": 1430,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1433,
                        "end": 1434,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1444,
                  "end": 1446,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1444,
                    "end": 1445,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1363,
              "end": 1367,
              "decorators": [],
              "name": "cond",
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
        "start": 1294,
        "end": 1296,
        "decorators": [],
        "name": "h4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1473,
      "end": 1541,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1522,
        "end": 1541,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1528,
            "end": 1539,
            "argument": {
              "type": "ArrayExpression",
              "start": 1535,
              "end": 1538,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1536,
                  "end": 1537,
                  "raw": "0",
                  "value": 0
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1488,
        "end": 1498,
        "decorators": [],
        "name": "get_things",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1499,
          "end": 1520,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1500,
            "end": 1520,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1502,
              "end": 1520,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1502,
                  "end": 1508
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1511,
                  "end": 1520
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1543,
      "end": 1737,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1567,
        "end": 1737,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1573,
            "end": 1616,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1577,
                "end": 1615,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1577,
                  "end": 1603,
                  "decorators": [],
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1583,
                    "end": 1603,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1585,
                      "end": 1603,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1585,
                          "end": 1591
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1594,
                          "end": 1603
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1606,
                  "end": 1615,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForStatement",
            "start": 1621,
            "end": 1735,
            "body": {
              "type": "BlockStatement",
              "start": 1649,
              "end": 1735,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1659,
                  "end": 1700,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1665,
                      "end": 1699,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1665,
                        "end": 1672,
                        "decorators": [],
                        "name": "results",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 1675,
                        "end": 1699,
                        "argument": {
                          "type": "CallExpression",
                          "start": 1681,
                          "end": 1699,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1692,
                              "end": 1698,
                              "decorators": [],
                              "name": "before",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1681,
                            "end": 1691,
                            "decorators": [],
                            "name": "get_things",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1709,
                  "end": 1729,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1709,
                    "end": 1728,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1709,
                      "end": 1715,
                      "decorators": [],
                      "name": "before",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 1718,
                      "end": 1728,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 1718,
                        "end": 1725,
                        "decorators": [],
                        "name": "results",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 1726,
                        "end": 1727,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 1626,
              "end": 1635,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1630,
                  "end": 1635,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1630,
                    "end": 1631,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1634,
                    "end": 1635,
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
              "start": 1637,
              "end": 1642,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 1637,
                "end": 1638,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1641,
                "end": 1642,
                "raw": "2",
                "value": 2
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1644,
              "end": 1647,
              "argument": {
                "type": "Identifier",
                "start": 1644,
                "end": 1645,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1558,
        "end": 1564,
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1779,
      "end": 1840,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1796,
        "end": 1800,
        "decorators": [],
        "name": "foox",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1801,
          "end": 1822,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1802,
            "end": 1822,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1804,
              "end": 1822,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1804,
                  "end": 1810
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1813,
                  "end": 1822
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1823,
        "end": 1840,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1825,
          "end": 1840,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1832,
            "end": 1840,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1833,
                "end": 1839
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1825,
            "end": 1832,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1842,
      "end": 1970,
      "directive": null,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 1842,
        "end": 1970,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 1854,
          "end": 1970,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1858,
              "end": 1898,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1862,
                  "end": 1897,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1862,
                    "end": 1885,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1865,
                      "end": 1885,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1867,
                        "end": 1885,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1867,
                            "end": 1873
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1876,
                            "end": 1885
                          }
                        ]
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 1888,
                    "end": 1897,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "DoWhileStatement",
              "start": 1901,
              "end": 1968,
              "body": {
                "type": "BlockStatement",
                "start": 1904,
                "end": 1956,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1910,
                    "end": 1938,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1916,
                        "end": 1937,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1916,
                          "end": 1919,
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "start": 1922,
                          "end": 1937,
                          "argument": {
                            "type": "CallExpression",
                            "start": 1928,
                            "end": 1937,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1933,
                                "end": 1936,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 1928,
                              "end": 1932,
                              "decorators": [],
                              "name": "foox",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1943,
                    "end": 1952,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1943,
                      "end": 1952,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1943,
                        "end": 1946,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1949,
                        "end": 1952,
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1964,
                "end": 1967,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2012,
      "end": 2109,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2029,
        "end": 2036,
        "decorators": [],
        "name": "myQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2037,
          "end": 2074,
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2042,
            "end": 2074,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2044,
              "end": 2074,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2046,
                  "end": 2072,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2046,
                    "end": 2052,
                    "decorators": [],
                    "name": "lastId",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2052,
                    "end": 2072,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2054,
                      "end": 2072,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2054,
                          "end": 2060
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2063,
                          "end": 2072
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2075,
        "end": 2108,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2077,
          "end": 2108,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2084,
            "end": 2108,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 2085,
                "end": 2107,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2087,
                    "end": 2105,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2087,
                      "end": 2095,
                      "decorators": [],
                      "name": "entities",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2095,
                      "end": 2105,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 2097,
                        "end": 2105,
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2097,
                          "end": 2103
                        }
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2077,
            "end": 2084,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2111,
      "end": 2332,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 2150,
        "end": 2332,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2154,
            "end": 2197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2158,
                "end": 2196,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2158,
                  "end": 2184,
                  "decorators": [],
                  "name": "lastId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2164,
                    "end": 2184,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2166,
                      "end": 2184,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2166,
                          "end": 2172
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2175,
                          "end": 2184
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2187,
                  "end": 2196,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 2201,
            "end": 2329,
            "body": {
              "type": "BlockStatement",
              "start": 2214,
              "end": 2329,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2220,
                  "end": 2280,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2226,
                      "end": 2279,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 2226,
                        "end": 2238,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 2228,
                            "end": 2236,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2228,
                              "end": 2236,
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 2228,
                              "end": 2236,
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 2241,
                        "end": 2279,
                        "argument": {
                          "type": "CallExpression",
                          "start": 2247,
                          "end": 2279,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 2255,
                              "end": 2278,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2265,
                                  "end": 2271,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2265,
                                    "end": 2271,
                                    "decorators": [],
                                    "name": "lastId",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2265,
                                    "end": 2271,
                                    "decorators": [],
                                    "name": "lastId",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 2247,
                            "end": 2254,
                            "decorators": [],
                            "name": "myQuery",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2286,
                  "end": 2325,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2286,
                    "end": 2324,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2286,
                      "end": 2292,
                      "decorators": [],
                      "name": "lastId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2295,
                      "end": 2324,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 2295,
                        "end": 2303,
                        "decorators": [],
                        "name": "entities",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "BinaryExpression",
                        "start": 2304,
                        "end": 2323,
                        "operator": "-",
                        "left": {
                          "type": "MemberExpression",
                          "start": 2304,
                          "end": 2319,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2304,
                            "end": 2312,
                            "decorators": [],
                            "name": "entities",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2313,
                            "end": 2319,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2322,
                          "end": 2323,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 2208,
              "end": 2212,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2126,
        "end": 2132,
        "decorators": [],
        "name": "myFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2134,
        "end": 2149,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2136,
          "end": 2149,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2143,
            "end": 2149,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 2144,
                "end": 2148
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2136,
            "end": 2143,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
