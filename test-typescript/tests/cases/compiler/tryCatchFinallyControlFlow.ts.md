__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 5294,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 243,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 69,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 62,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 62,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 49,
                      "end": 62,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 49,
                          "end": 55
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 58,
                          "end": 62
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 65,
                  "end": 69,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 75,
            "end": 241,
            "block": {
              "type": "BlockStatement",
              "start": 79,
              "end": 121,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 89,
                  "end": 97,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 89,
                    "end": 96,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 93,
                      "end": 96,
                      "raw": "123",
                      "value": 123
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 106,
                  "end": 115,
                  "argument": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 173,
              "end": 241,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 183,
                  "end": 235,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 223,
                    "end": 235,
                    "body": []
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "start": 187,
                    "end": 221,
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 187,
                      "end": 196,
                      "operator": "!=",
                      "left": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 192,
                        "end": 196,
                        "raw": "null",
                        "value": null
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 200,
                      "end": 221,
                      "operator": "==",
                      "left": {
                        "type": "CallExpression",
                        "start": 200,
                        "end": 212,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 210,
                            "end": 211,
                            "raw": "0",
                            "value": 0
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 200,
                          "end": 209,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 201,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 209,
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 216,
                        "end": 221,
                        "raw": "\"123\"",
                        "value": "123"
                      }
                    }
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 126,
              "end": 160,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 160,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 146,
                    "end": 154,
                    "argument": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "e",
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
        "start": 31,
        "end": 33,
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
      "start": 245,
      "end": 435,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 259,
        "end": 435,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 265,
            "end": 290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 269,
                "end": 289,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 285,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 285,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 272,
                      "end": 285,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 272,
                          "end": 273,
                          "literal": {
                            "type": "Literal",
                            "start": 272,
                            "end": 273,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 276,
                          "end": 277,
                          "literal": {
                            "type": "Literal",
                            "start": 276,
                            "end": 277,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 280,
                          "end": 281,
                          "literal": {
                            "type": "Literal",
                            "start": 280,
                            "end": 281,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 284,
                          "end": 285,
                          "literal": {
                            "type": "Literal",
                            "start": 284,
                            "end": 285,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 288,
                  "end": 289,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 295,
            "end": 420,
            "block": {
              "type": "BlockStatement",
              "start": 299,
              "end": 321,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 309,
                  "end": 315,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 309,
                    "end": 314,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 313,
                      "end": 314,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 388,
              "end": 420,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 398,
                  "end": 400,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 326,
              "end": 375,
              "body": {
                "type": "BlockStatement",
                "start": 336,
                "end": 375,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 346,
                    "end": 352,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 346,
                      "end": 351,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 347,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 350,
                        "end": 351,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "ThrowStatement",
                    "start": 361,
                    "end": 369,
                    "argument": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 333,
                "end": 334,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 425,
            "end": 427,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
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
        "start": 254,
        "end": 256,
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
      "type": "FunctionDeclaration",
      "start": 437,
      "end": 626,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 451,
        "end": 626,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 457,
            "end": 482,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 461,
                "end": 481,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 477,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 462,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 464,
                      "end": 477,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 464,
                          "end": 465,
                          "literal": {
                            "type": "Literal",
                            "start": 464,
                            "end": 465,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 468,
                          "end": 469,
                          "literal": {
                            "type": "Literal",
                            "start": 468,
                            "end": 469,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 472,
                          "end": 473,
                          "literal": {
                            "type": "Literal",
                            "start": 472,
                            "end": 473,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 476,
                          "end": 477,
                          "literal": {
                            "type": "Literal",
                            "start": 476,
                            "end": 477,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 480,
                  "end": 481,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 487,
            "end": 611,
            "block": {
              "type": "BlockStatement",
              "start": 491,
              "end": 513,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 501,
                  "end": 507,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 501,
                    "end": 506,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 502,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 505,
                      "end": 506,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 579,
              "end": 611,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 589,
                  "end": 591,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 518,
              "end": 566,
              "body": {
                "type": "BlockStatement",
                "start": 528,
                "end": 566,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 538,
                    "end": 544,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 538,
                      "end": 543,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 542,
                        "end": 543,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 553,
                    "end": 560,
                    "argument": null
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 618,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
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
        "start": 446,
        "end": 448,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 628,
      "end": 805,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 642,
        "end": 805,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 648,
            "end": 673,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 652,
                "end": 672,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 652,
                  "end": 668,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 668,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 655,
                      "end": 668,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 655,
                          "end": 656,
                          "literal": {
                            "type": "Literal",
                            "start": 655,
                            "end": 656,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 659,
                          "end": 660,
                          "literal": {
                            "type": "Literal",
                            "start": 659,
                            "end": 660,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 663,
                          "end": 664,
                          "literal": {
                            "type": "Literal",
                            "start": 663,
                            "end": 664,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 667,
                          "end": 668,
                          "literal": {
                            "type": "Literal",
                            "start": 667,
                            "end": 668,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 671,
                  "end": 672,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 678,
            "end": 786,
            "block": {
              "type": "BlockStatement",
              "start": 682,
              "end": 704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 692,
                  "end": 698,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 692,
                    "end": 697,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 692,
                      "end": 693,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 696,
                      "end": 697,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 754,
              "end": 786,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 764,
                  "end": 766,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 709,
              "end": 741,
              "body": {
                "type": "BlockStatement",
                "start": 719,
                "end": 741,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 729,
                    "end": 735,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 729,
                      "end": 734,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 730,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 733,
                        "end": 734,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 791,
            "end": 793,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
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
        "start": 637,
        "end": 639,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 807,
      "end": 996,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 821,
        "end": 996,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 827,
            "end": 852,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 831,
                "end": 851,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 847,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 832,
                    "end": 847,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 834,
                      "end": 847,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 834,
                          "end": 835,
                          "literal": {
                            "type": "Literal",
                            "start": 834,
                            "end": 835,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 838,
                          "end": 839,
                          "literal": {
                            "type": "Literal",
                            "start": 838,
                            "end": 839,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 842,
                          "end": 843,
                          "literal": {
                            "type": "Literal",
                            "start": 842,
                            "end": 843,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 846,
                          "end": 847,
                          "literal": {
                            "type": "Literal",
                            "start": 846,
                            "end": 847,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 850,
                  "end": 851,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 857,
            "end": 981,
            "block": {
              "type": "BlockStatement",
              "start": 861,
              "end": 899,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 871,
                  "end": 877,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 871,
                    "end": 876,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 871,
                      "end": 872,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 875,
                      "end": 876,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 886,
                  "end": 893,
                  "argument": null
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 949,
              "end": 981,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 959,
                  "end": 961,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 959,
                    "end": 960,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 904,
              "end": 936,
              "body": {
                "type": "BlockStatement",
                "start": 914,
                "end": 936,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 924,
                    "end": 930,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 924,
                      "end": 929,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 924,
                        "end": 925,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 928,
                        "end": 929,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 986,
            "end": 988,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 986,
              "end": 987,
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
        "start": 816,
        "end": 818,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 998,
      "end": 1187,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1012,
        "end": 1187,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1018,
            "end": 1043,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1022,
                "end": 1042,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1038,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1023,
                    "end": 1038,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1025,
                      "end": 1038,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1025,
                          "end": 1026,
                          "literal": {
                            "type": "Literal",
                            "start": 1025,
                            "end": 1026,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1029,
                          "end": 1030,
                          "literal": {
                            "type": "Literal",
                            "start": 1029,
                            "end": 1030,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1033,
                          "end": 1034,
                          "literal": {
                            "type": "Literal",
                            "start": 1033,
                            "end": 1034,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1037,
                          "end": 1038,
                          "literal": {
                            "type": "Literal",
                            "start": 1037,
                            "end": 1038,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1041,
                  "end": 1042,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 1048,
            "end": 1172,
            "block": {
              "type": "BlockStatement",
              "start": 1052,
              "end": 1074,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1062,
                  "end": 1068,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1062,
                    "end": 1067,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1062,
                      "end": 1063,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1066,
                      "end": 1067,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 1140,
              "end": 1172,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1150,
                  "end": 1152,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1079,
              "end": 1127,
              "body": {
                "type": "BlockStatement",
                "start": 1089,
                "end": 1127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1099,
                    "end": 1105,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1099,
                      "end": 1104,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1100,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1103,
                        "end": 1104,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1114,
                    "end": 1121,
                    "argument": null
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1086,
                "end": 1087,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1177,
            "end": 1179,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1177,
              "end": 1178,
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
        "start": 1007,
        "end": 1009,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1189,
      "end": 1404,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1203,
        "end": 1404,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1209,
            "end": 1234,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1213,
                "end": 1233,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1229,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1214,
                    "end": 1229,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1216,
                      "end": 1229,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1216,
                          "end": 1217,
                          "literal": {
                            "type": "Literal",
                            "start": 1216,
                            "end": 1217,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1220,
                          "end": 1221,
                          "literal": {
                            "type": "Literal",
                            "start": 1220,
                            "end": 1221,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1224,
                          "end": 1225,
                          "literal": {
                            "type": "Literal",
                            "start": 1224,
                            "end": 1225,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1228,
                          "end": 1229,
                          "literal": {
                            "type": "Literal",
                            "start": 1228,
                            "end": 1229,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1232,
                  "end": 1233,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 1239,
            "end": 1379,
            "block": {
              "type": "BlockStatement",
              "start": 1243,
              "end": 1281,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1253,
                  "end": 1259,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1253,
                    "end": 1258,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1253,
                      "end": 1254,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1257,
                      "end": 1258,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1268,
                  "end": 1275,
                  "argument": null
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 1347,
              "end": 1379,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1357,
                  "end": 1359,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1286,
              "end": 1334,
              "body": {
                "type": "BlockStatement",
                "start": 1296,
                "end": 1334,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1306,
                    "end": 1312,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1306,
                      "end": 1311,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1306,
                        "end": 1307,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1310,
                        "end": 1311,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1321,
                    "end": 1328,
                    "argument": null
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 1293,
                "end": 1294,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1384,
            "end": 1386,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1384,
              "end": 1385,
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
        "start": 1198,
        "end": 1200,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1406,
      "end": 1624,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1420,
        "end": 1624,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1426,
            "end": 1443,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1430,
                "end": 1442,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1438,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1431,
                    "end": 1438,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1433,
                      "end": 1438,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1433,
                          "end": 1434,
                          "literal": {
                            "type": "Literal",
                            "start": 1433,
                            "end": 1434,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1437,
                          "end": 1438,
                          "literal": {
                            "type": "Literal",
                            "start": 1437,
                            "end": 1438,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1441,
                  "end": 1442,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1448,
            "end": 1609,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1448,
              "end": 1608,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 1449,
                "end": 1605,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1455,
                  "end": 1605,
                  "body": [
                    {
                      "type": "TryStatement",
                      "start": 1465,
                      "end": 1572,
                      "block": {
                        "type": "BlockStatement",
                        "start": 1469,
                        "end": 1519,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1483,
                            "end": 1489,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1483,
                              "end": 1488,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1483,
                                "end": 1484,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1487,
                                "end": 1488,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 1502,
                            "end": 1509,
                            "argument": null
                          }
                        ]
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 1536,
                        "end": 1572,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1550,
                            "end": 1552,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 1550,
                              "end": 1551,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "handler": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1581,
                      "end": 1583,
                      "directive": null,
                      "expression": {
                        "type": "Identifier",
                        "start": 1581,
                        "end": 1582,
                        "decorators": [],
                        "name": "x",
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
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1614,
            "end": 1616,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1614,
              "end": 1615,
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
        "start": 1415,
        "end": 1417,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1626,
      "end": 1905,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1640,
        "end": 1905,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1646,
            "end": 1667,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1650,
                "end": 1666,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1650,
                  "end": 1662,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1651,
                    "end": 1662,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1653,
                      "end": 1662,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1653,
                          "end": 1654,
                          "literal": {
                            "type": "Literal",
                            "start": 1653,
                            "end": 1654,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1657,
                          "end": 1658,
                          "literal": {
                            "type": "Literal",
                            "start": 1657,
                            "end": 1658,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1661,
                          "end": 1662,
                          "literal": {
                            "type": "Literal",
                            "start": 1661,
                            "end": 1662,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1665,
                  "end": 1666,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1672,
            "end": 1886,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1672,
              "end": 1885,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 1673,
                "end": 1882,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1679,
                  "end": 1882,
                  "body": [
                    {
                      "type": "TryStatement",
                      "start": 1689,
                      "end": 1844,
                      "block": {
                        "type": "BlockStatement",
                        "start": 1693,
                        "end": 1791,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 1707,
                            "end": 1781,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1719,
                              "end": 1781,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1737,
                                  "end": 1743,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1737,
                                    "end": 1742,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1737,
                                      "end": 1738,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 1741,
                                      "end": 1742,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 1760,
                                  "end": 1767,
                                  "argument": null
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 1711,
                              "end": 1717,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 1712,
                                "end": 1717,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1713,
                                  "end": 1717,
                                  "raw": "true",
                                  "value": true
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
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 1808,
                        "end": 1844,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1822,
                            "end": 1824,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 1822,
                              "end": 1823,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "handler": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1853,
                      "end": 1855,
                      "directive": null,
                      "expression": {
                        "type": "Identifier",
                        "start": 1853,
                        "end": 1854,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1870,
                      "end": 1876,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1870,
                        "end": 1875,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 1870,
                          "end": 1871,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1874,
                          "end": 1875,
                          "raw": "2",
                          "value": 2
                        }
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
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1891,
            "end": 1893,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1891,
              "end": 1892,
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
        "start": 1635,
        "end": 1637,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1907,
      "end": 2196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1922,
        "end": 2196,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1928,
            "end": 1953,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1932,
                "end": 1952,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1932,
                  "end": 1948,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1933,
                    "end": 1948,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1935,
                      "end": 1948,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1935,
                          "end": 1936,
                          "literal": {
                            "type": "Literal",
                            "start": 1935,
                            "end": 1936,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1939,
                          "end": 1940,
                          "literal": {
                            "type": "Literal",
                            "start": 1939,
                            "end": 1940,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1943,
                          "end": 1944,
                          "literal": {
                            "type": "Literal",
                            "start": 1943,
                            "end": 1944,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1947,
                          "end": 1948,
                          "literal": {
                            "type": "Literal",
                            "start": 1947,
                            "end": 1948,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1951,
                  "end": 1952,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1958,
            "end": 2177,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1958,
              "end": 2176,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 1959,
                "end": 2173,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1965,
                  "end": 2173,
                  "body": [
                    {
                      "type": "TryStatement",
                      "start": 1975,
                      "end": 2135,
                      "block": {
                        "type": "BlockStatement",
                        "start": 1979,
                        "end": 2029,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1993,
                            "end": 1999,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1993,
                              "end": 1998,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1993,
                                "end": 1994,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1997,
                                "end": 1998,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2012,
                            "end": 2019,
                            "argument": null
                          }
                        ]
                      },
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 2095,
                        "end": 2135,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2109,
                            "end": 2111,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 2109,
                              "end": 2110,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "handler": {
                        "type": "CatchClause",
                        "start": 2038,
                        "end": 2078,
                        "body": {
                          "type": "BlockStatement",
                          "start": 2048,
                          "end": 2078,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2062,
                              "end": 2068,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 2062,
                                "end": 2067,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 2062,
                                  "end": 2063,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 2066,
                                  "end": 2067,
                                  "raw": "2",
                                  "value": 2
                                }
                              }
                            }
                          ]
                        },
                        "param": {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2046,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2144,
                      "end": 2146,
                      "directive": null,
                      "expression": {
                        "type": "Identifier",
                        "start": 2144,
                        "end": 2145,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2161,
                      "end": 2167,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 2161,
                        "end": 2166,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 2161,
                          "end": 2162,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2165,
                          "end": 2166,
                          "raw": "3",
                          "value": 3
                        }
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
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2182,
            "end": 2184,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2182,
              "end": 2183,
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
        "start": 1916,
        "end": 1919,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2198,
      "end": 2739,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2213,
        "end": 2739,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2219,
            "end": 2252,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2223,
                "end": 2251,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2247,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2224,
                    "end": 2247,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2226,
                      "end": 2247,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 2226,
                          "end": 2227,
                          "literal": {
                            "type": "Literal",
                            "start": 2226,
                            "end": 2227,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2230,
                          "end": 2231,
                          "literal": {
                            "type": "Literal",
                            "start": 2230,
                            "end": 2231,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2234,
                          "end": 2235,
                          "literal": {
                            "type": "Literal",
                            "start": 2234,
                            "end": 2235,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2238,
                          "end": 2239,
                          "literal": {
                            "type": "Literal",
                            "start": 2238,
                            "end": 2239,
                            "raw": "3",
                            "value": 3
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2242,
                          "end": 2243,
                          "literal": {
                            "type": "Literal",
                            "start": 2242,
                            "end": 2243,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2246,
                          "end": 2247,
                          "literal": {
                            "type": "Literal",
                            "start": 2246,
                            "end": 2247,
                            "raw": "5",
                            "value": 5
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 2250,
                  "end": 2251,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2257,
            "end": 2716,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2257,
              "end": 2715,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 2258,
                "end": 2712,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2264,
                  "end": 2712,
                  "body": [
                    {
                      "type": "TryStatement",
                      "start": 2274,
                      "end": 2666,
                      "block": {
                        "type": "BlockStatement",
                        "start": 2278,
                        "end": 2464,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 2292,
                            "end": 2366,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2304,
                              "end": 2366,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2322,
                                  "end": 2328,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2322,
                                    "end": 2327,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2322,
                                      "end": 2323,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2326,
                                      "end": 2327,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 2345,
                                  "end": 2352,
                                  "argument": null
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2296,
                              "end": 2302,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2297,
                                "end": 2302,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2298,
                                  "end": 2302,
                                  "raw": "true",
                                  "value": true
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
                            "start": 2379,
                            "end": 2454,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2391,
                              "end": 2454,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2409,
                                  "end": 2415,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2409,
                                    "end": 2414,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2409,
                                      "end": 2410,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2413,
                                      "end": 2414,
                                      "raw": "2",
                                      "value": 2
                                    }
                                  }
                                },
                                {
                                  "type": "ThrowStatement",
                                  "start": 2432,
                                  "end": 2440,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2438,
                                    "end": 2439,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2383,
                              "end": 2389,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2384,
                                "end": 2389,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2385,
                                  "end": 2389,
                                  "raw": "true",
                                  "value": true
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
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 2559,
                        "end": 2666,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2573,
                            "end": 2575,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 2573,
                              "end": 2574,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "IfStatement",
                            "start": 2606,
                            "end": 2656,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2618,
                              "end": 2656,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2636,
                                  "end": 2642,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2636,
                                    "end": 2641,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2636,
                                      "end": 2637,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2640,
                                      "end": 2641,
                                      "raw": "4",
                                      "value": 4
                                    }
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2610,
                              "end": 2616,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2611,
                                "end": 2616,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2612,
                                  "end": 2616,
                                  "raw": "true",
                                  "value": true
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
                      "handler": {
                        "type": "CatchClause",
                        "start": 2473,
                        "end": 2542,
                        "body": {
                          "type": "BlockStatement",
                          "start": 2483,
                          "end": 2542,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2497,
                              "end": 2499,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 2497,
                                "end": 2498,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 2526,
                              "end": 2532,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 2526,
                                "end": 2531,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 2526,
                                  "end": 2527,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 2530,
                                  "end": 2531,
                                  "raw": "3",
                                  "value": 3
                                }
                              }
                            }
                          ]
                        },
                        "param": {
                          "type": "Identifier",
                          "start": 2480,
                          "end": 2481,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2675,
                      "end": 2677,
                      "directive": null,
                      "expression": {
                        "type": "Identifier",
                        "start": 2675,
                        "end": 2676,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2700,
                      "end": 2706,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 2700,
                        "end": 2705,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 2700,
                          "end": 2701,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2704,
                          "end": 2705,
                          "raw": "5",
                          "value": 5
                        }
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
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2721,
            "end": 2723,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2721,
              "end": 2722,
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
        "start": 2207,
        "end": 2210,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2741,
      "end": 3484,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2756,
        "end": 3484,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2762,
            "end": 2803,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2766,
                "end": 2802,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2766,
                  "end": 2798,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2767,
                    "end": 2798,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2769,
                      "end": 2798,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 2769,
                          "end": 2770,
                          "literal": {
                            "type": "Literal",
                            "start": 2769,
                            "end": 2770,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2773,
                          "end": 2774,
                          "literal": {
                            "type": "Literal",
                            "start": 2773,
                            "end": 2774,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2777,
                          "end": 2778,
                          "literal": {
                            "type": "Literal",
                            "start": 2777,
                            "end": 2778,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2781,
                          "end": 2782,
                          "literal": {
                            "type": "Literal",
                            "start": 2781,
                            "end": 2782,
                            "raw": "3",
                            "value": 3
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2785,
                          "end": 2786,
                          "literal": {
                            "type": "Literal",
                            "start": 2785,
                            "end": 2786,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2789,
                          "end": 2790,
                          "literal": {
                            "type": "Literal",
                            "start": 2789,
                            "end": 2790,
                            "raw": "5",
                            "value": 5
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2793,
                          "end": 2794,
                          "literal": {
                            "type": "Literal",
                            "start": 2793,
                            "end": 2794,
                            "raw": "6",
                            "value": 6
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 2797,
                          "end": 2798,
                          "literal": {
                            "type": "Literal",
                            "start": 2797,
                            "end": 2798,
                            "raw": "7",
                            "value": 7
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 2801,
                  "end": 2802,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2808,
            "end": 3461,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2808,
              "end": 3460,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 2809,
                "end": 3457,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2815,
                  "end": 3457,
                  "body": [
                    {
                      "type": "TryStatement",
                      "start": 2825,
                      "end": 3397,
                      "block": {
                        "type": "BlockStatement",
                        "start": 2829,
                        "end": 3015,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 2843,
                            "end": 2917,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2855,
                              "end": 2917,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2873,
                                  "end": 2879,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2873,
                                    "end": 2878,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2873,
                                      "end": 2874,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2877,
                                      "end": 2878,
                                      "raw": "1",
                                      "value": 1
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 2896,
                                  "end": 2903,
                                  "argument": null
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2847,
                              "end": 2853,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2848,
                                "end": 2853,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2849,
                                  "end": 2853,
                                  "raw": "true",
                                  "value": true
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
                            "start": 2930,
                            "end": 3005,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2942,
                              "end": 3005,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2960,
                                  "end": 2966,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2960,
                                    "end": 2965,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2960,
                                      "end": 2961,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2964,
                                      "end": 2965,
                                      "raw": "2",
                                      "value": 2
                                    }
                                  }
                                },
                                {
                                  "type": "ThrowStatement",
                                  "start": 2983,
                                  "end": 2991,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2989,
                                    "end": 2990,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2934,
                              "end": 2940,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2935,
                                "end": 2940,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2936,
                                  "end": 2940,
                                  "raw": "true",
                                  "value": true
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
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 3110,
                        "end": 3397,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 3124,
                            "end": 3126,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 3124,
                              "end": 3125,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "IfStatement",
                            "start": 3157,
                            "end": 3231,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3169,
                              "end": 3231,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3187,
                                  "end": 3193,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3187,
                                    "end": 3192,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 3187,
                                      "end": 3188,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 3191,
                                      "end": 3192,
                                      "raw": "4",
                                      "value": 4
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 3210,
                                  "end": 3217,
                                  "argument": null
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 3161,
                              "end": 3167,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 3162,
                                "end": 3167,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3163,
                                  "end": 3167,
                                  "raw": "true",
                                  "value": true
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
                            "start": 3244,
                            "end": 3318,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3256,
                              "end": 3318,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3274,
                                  "end": 3280,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3274,
                                    "end": 3279,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 3274,
                                      "end": 3275,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 3278,
                                      "end": 3279,
                                      "raw": "5",
                                      "value": 5
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 3297,
                                  "end": 3304,
                                  "argument": null
                                }
                              ]
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 3248,
                              "end": 3254,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 3249,
                                "end": 3254,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3250,
                                  "end": 3254,
                                  "raw": "true",
                                  "value": true
                                },
                                "operator": "!",
                                "prefix": true
                              },
                              "operator": "!",
                              "prefix": true
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3331,
                            "end": 3337,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3331,
                              "end": 3336,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 3331,
                                "end": 3332,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 3335,
                                "end": 3336,
                                "raw": "6",
                                "value": 6
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3350,
                            "end": 3357,
                            "argument": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3370,
                            "end": 3372,
                            "directive": null,
                            "expression": {
                              "type": "Identifier",
                              "start": 3370,
                              "end": 3371,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "handler": {
                        "type": "CatchClause",
                        "start": 3024,
                        "end": 3093,
                        "body": {
                          "type": "BlockStatement",
                          "start": 3034,
                          "end": 3093,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 3048,
                              "end": 3050,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 3048,
                                "end": 3049,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 3077,
                              "end": 3083,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 3077,
                                "end": 3082,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 3077,
                                  "end": 3078,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 3081,
                                  "end": 3082,
                                  "raw": "3",
                                  "value": 3
                                }
                              }
                            }
                          ]
                        },
                        "param": {
                          "type": "Identifier",
                          "start": 3031,
                          "end": 3032,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 3406,
                      "end": 3408,
                      "directive": null,
                      "expression": {
                        "type": "Identifier",
                        "start": 3406,
                        "end": 3407,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 3432,
                      "end": 3438,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 3432,
                        "end": 3437,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 3432,
                          "end": 3433,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 3436,
                          "end": 3437,
                          "raw": "7",
                          "value": 7
                        }
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
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3466,
            "end": 3468,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 3466,
              "end": 3467,
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
        "start": 2750,
        "end": 2753,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3508,
      "end": 3757,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3514,
          "end": 3757,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3514,
            "end": 3518,
            "decorators": [],
            "name": "main",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3521,
            "end": 3757,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3527,
              "end": 3757,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3533,
                  "end": 3574,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3537,
                      "end": 3573,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 3537,
                        "end": 3561,
                        "decorators": [],
                        "name": "hoge",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3541,
                          "end": 3561,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 3543,
                            "end": 3561,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 3543,
                                "end": 3549
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3552,
                                "end": 3561
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3564,
                        "end": 3573,
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
                  "type": "TryStatement",
                  "start": 3579,
                  "end": 3755,
                  "block": {
                    "type": "BlockStatement",
                    "start": 3583,
                    "end": 3630,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3593,
                        "end": 3608,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 3593,
                          "end": 3607,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 3593,
                            "end": 3597,
                            "decorators": [],
                            "name": "hoge",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 3600,
                            "end": 3607,
                            "raw": "'hoge!'",
                            "value": "hoge!"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 3617,
                        "end": 3624,
                        "argument": null
                      }
                    ]
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 3677,
                    "end": 3755,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 3687,
                        "end": 3733,
                        "alternate": null,
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 3697,
                          "end": 3733,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 3711,
                              "end": 3723,
                              "directive": null,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 3711,
                                "end": 3722,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3711,
                                  "end": 3715,
                                  "decorators": [],
                                  "name": "hoge",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3716,
                                  "end": 3722,
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
                          "type": "Identifier",
                          "start": 3691,
                          "end": 3695,
                          "decorators": [],
                          "name": "hoge",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 3742,
                        "end": 3749,
                        "argument": null
                      }
                    ]
                  },
                  "handler": {
                    "type": "CatchClause",
                    "start": 3635,
                    "end": 3664,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3641,
                      "end": 3664,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3651,
                          "end": 3658,
                          "argument": null
                        }
                      ]
                    },
                    "param": null
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
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3781,
      "end": 3982,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3795,
        "end": 3982,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3801,
            "end": 3959,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3807,
                "end": 3958,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3807,
                  "end": 3808,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3811,
                  "end": 3958,
                  "arguments": [],
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 3812,
                    "end": 3955,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3818,
                      "end": 3955,
                      "body": [
                        {
                          "type": "TryStatement",
                          "start": 3828,
                          "end": 3922,
                          "block": {
                            "type": "BlockStatement",
                            "start": 3832,
                            "end": 3867,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 3846,
                                "end": 3857,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3853,
                                  "end": 3856,
                                  "raw": "'x'",
                                  "value": "x"
                                }
                              }
                            ]
                          },
                          "finalizer": null,
                          "handler": {
                            "type": "CatchClause",
                            "start": 3876,
                            "end": 3922,
                            "body": {
                              "type": "BlockStatement",
                              "start": 3886,
                              "end": 3922,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3900,
                                  "end": 3912,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 3907,
                                    "end": 3911,
                                    "raw": "null",
                                    "value": null
                                  }
                                }
                              ]
                            },
                            "param": {
                              "type": "Identifier",
                              "start": 3883,
                              "end": 3884,
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3931,
                          "end": 3933,
                          "directive": null,
                          "expression": {
                            "type": "Identifier",
                            "start": 3931,
                            "end": 3932,
                            "decorators": [],
                            "name": "x",
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
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 3964,
            "end": 3966,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 3964,
              "end": 3965,
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
        "start": 3790,
        "end": 3792,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4006,
      "end": 4070,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4011,
        "end": 4016,
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4019,
        "end": 4069,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 4019,
            "end": 4033,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4021,
                "end": 4031,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4021,
                  "end": 4024,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4024,
                  "end": 4031,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4026,
                    "end": 4031,
                    "literal": {
                      "type": "Literal",
                      "start": 4026,
                      "end": 4031,
                      "raw": "\"one\"",
                      "value": "one"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 4036,
            "end": 4050,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4038,
                "end": 4048,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4038,
                  "end": 4041,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4041,
                  "end": 4048,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4043,
                    "end": 4048,
                    "literal": {
                      "type": "Literal",
                      "start": 4043,
                      "end": 4048,
                      "raw": "\"two\"",
                      "value": "two"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 4053,
            "end": 4069,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4055,
                "end": 4067,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4055,
                  "end": 4058,
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4058,
                  "end": 4067,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4060,
                    "end": 4067,
                    "literal": {
                      "type": "Literal",
                      "start": 4060,
                      "end": 4067,
                      "raw": "\"three\"",
                      "value": "three"
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4072,
      "end": 4424,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4105,
        "end": 4424,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4111,
            "end": 4145,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4115,
                "end": 4144,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4115,
                  "end": 4127,
                  "decorators": [],
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4120,
                    "end": 4127,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4122,
                      "end": 4127,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4122,
                        "end": 4127,
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 4130,
                  "end": 4144,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4132,
                      "end": 4142,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4132,
                        "end": 4135,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 4137,
                        "end": 4142,
                        "raw": "\"one\"",
                        "value": "one"
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 4150,
            "end": 4422,
            "block": {
              "type": "BlockStatement",
              "start": 4154,
              "end": 4275,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4164,
                  "end": 4187,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4164,
                    "end": 4186,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 4164,
                      "end": 4169,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 4172,
                      "end": 4186,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4174,
                          "end": 4184,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4174,
                            "end": 4177,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 4179,
                            "end": 4184,
                            "raw": "\"two\"",
                            "value": "two"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "start": 4196,
                  "end": 4269,
                  "block": {
                    "type": "BlockStatement",
                    "start": 4200,
                    "end": 4249,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4214,
                        "end": 4239,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 4214,
                          "end": 4238,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 4214,
                            "end": 4219,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 4222,
                            "end": 4238,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4224,
                                "end": 4236,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4224,
                                  "end": 4227,
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 4229,
                                  "end": 4236,
                                  "raw": "\"three\"",
                                  "value": "three"
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 4266,
                    "end": 4269,
                    "body": []
                  },
                  "handler": null
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 4280,
              "end": 4422,
              "body": {
                "type": "BlockStatement",
                "start": 4292,
                "end": 4422,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4302,
                    "end": 4312,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4302,
                      "end": 4311,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4302,
                        "end": 4307,
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4308,
                        "end": 4311,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 4321,
                    "end": 4416,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 4369,
                      "end": 4416,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4383,
                          "end": 4406,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4383,
                            "end": 4405,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 4395,
                                "end": 4404,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4395,
                                  "end": 4400,
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4401,
                                  "end": 4404,
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4383,
                              "end": 4394,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 4383,
                                "end": 4390,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4391,
                                "end": 4394,
                                "decorators": [],
                                "name": "log",
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
                    "test": {
                      "type": "LogicalExpression",
                      "start": 4325,
                      "end": 4367,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 4325,
                        "end": 4344,
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4325,
                          "end": 4334,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 4325,
                            "end": 4330,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4331,
                            "end": 4334,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 4339,
                          "end": 4344,
                          "raw": "\"one\"",
                          "value": "one"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 4348,
                        "end": 4367,
                        "operator": "!==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 4348,
                          "end": 4357,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 4348,
                            "end": 4353,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4354,
                            "end": 4357,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 4362,
                          "end": 4367,
                          "raw": "\"two\"",
                          "value": "two"
                        }
                      }
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 4287,
                "end": 4290,
                "decorators": [],
                "name": "err",
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
        "start": 4081,
        "end": 4091,
        "decorators": [],
        "name": "notallowed",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4092,
          "end": 4103,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4095,
            "end": 4103,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4097,
              "end": 4103
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4426,
      "end": 4867,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4441,
        "end": 4867,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4447,
            "end": 4484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4451,
                "end": 4483,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4451,
                  "end": 4479,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4452,
                    "end": 4479,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 4454,
                      "end": 4479,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 4454,
                          "end": 4455,
                          "literal": {
                            "type": "Literal",
                            "start": 4454,
                            "end": 4455,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4458,
                          "end": 4459,
                          "literal": {
                            "type": "Literal",
                            "start": 4458,
                            "end": 4459,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4462,
                          "end": 4463,
                          "literal": {
                            "type": "Literal",
                            "start": 4462,
                            "end": 4463,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4466,
                          "end": 4467,
                          "literal": {
                            "type": "Literal",
                            "start": 4466,
                            "end": 4467,
                            "raw": "3",
                            "value": 3
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4470,
                          "end": 4471,
                          "literal": {
                            "type": "Literal",
                            "start": 4470,
                            "end": 4471,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4474,
                          "end": 4475,
                          "literal": {
                            "type": "Literal",
                            "start": 4474,
                            "end": 4475,
                            "raw": "5",
                            "value": 5
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4478,
                          "end": 4479,
                          "literal": {
                            "type": "Literal",
                            "start": 4478,
                            "end": 4479,
                            "raw": "6",
                            "value": 6
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 4482,
                  "end": 4483,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 4489,
            "end": 4840,
            "block": {
              "type": "BlockStatement",
              "start": 4493,
              "end": 4793,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4503,
                  "end": 4509,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4503,
                    "end": 4508,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 4503,
                      "end": 4504,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4507,
                      "end": 4508,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "start": 4518,
                  "end": 4762,
                  "block": {
                    "type": "BlockStatement",
                    "start": 4522,
                    "end": 4703,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4536,
                        "end": 4542,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 4536,
                          "end": 4541,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 4536,
                            "end": 4537,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 4540,
                            "end": 4541,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      },
                      {
                        "type": "TryStatement",
                        "start": 4555,
                        "end": 4668,
                        "block": {
                          "type": "BlockStatement",
                          "start": 4559,
                          "end": 4597,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 4577,
                              "end": 4583,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 4577,
                                "end": 4582,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 4577,
                                  "end": 4578,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 4581,
                                  "end": 4582,
                                  "raw": "3",
                                  "value": 3
                                }
                              }
                            }
                          ]
                        },
                        "finalizer": {
                          "type": "BlockStatement",
                          "start": 4618,
                          "end": 4668,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 4636,
                              "end": 4654,
                              "alternate": null,
                              "consequent": {
                                "type": "ExpressionStatement",
                                "start": 4648,
                                "end": 4654,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 4648,
                                  "end": 4653,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4648,
                                    "end": 4649,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 4652,
                                    "end": 4653,
                                    "raw": "4",
                                    "value": 4
                                  }
                                }
                              },
                              "test": {
                                "type": "UnaryExpression",
                                "start": 4640,
                                "end": 4646,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 4641,
                                  "end": 4646,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 4642,
                                    "end": 4646,
                                    "raw": "true",
                                    "value": true
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
                        "handler": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 4681,
                        "end": 4683,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 4681,
                          "end": 4682,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 4720,
                    "end": 4762,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 4734,
                        "end": 4752,
                        "alternate": null,
                        "consequent": {
                          "type": "ExpressionStatement",
                          "start": 4746,
                          "end": 4752,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4746,
                            "end": 4751,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 4746,
                              "end": 4747,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4750,
                              "end": 4751,
                              "raw": "5",
                              "value": 5
                            }
                          }
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "start": 4738,
                          "end": 4744,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 4739,
                            "end": 4744,
                            "argument": {
                              "type": "Literal",
                              "start": 4740,
                              "end": 4744,
                              "raw": "true",
                              "value": true
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
                  "handler": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4771,
                  "end": 4773,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4771,
                    "end": 4772,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 4806,
              "end": 4840,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 4816,
                  "end": 4834,
                  "alternate": null,
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 4828,
                    "end": 4834,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4828,
                      "end": 4833,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 4828,
                        "end": 4829,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4832,
                        "end": 4833,
                        "raw": "6",
                        "value": 6
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 4820,
                    "end": 4826,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 4821,
                      "end": 4826,
                      "argument": {
                        "type": "Literal",
                        "start": 4822,
                        "end": 4826,
                        "raw": "true",
                        "value": true
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
            "handler": null
          },
          {
            "type": "ExpressionStatement",
            "start": 4845,
            "end": 4847,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 4845,
              "end": 4846,
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
        "start": 4435,
        "end": 4438,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4869,
      "end": 5293,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4884,
        "end": 5293,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4890,
            "end": 4923,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4894,
                "end": 4922,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4894,
                  "end": 4918,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4895,
                    "end": 4918,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 4897,
                      "end": 4918,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 4897,
                          "end": 4898,
                          "literal": {
                            "type": "Literal",
                            "start": 4897,
                            "end": 4898,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4901,
                          "end": 4902,
                          "literal": {
                            "type": "Literal",
                            "start": 4901,
                            "end": 4902,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4905,
                          "end": 4906,
                          "literal": {
                            "type": "Literal",
                            "start": 4905,
                            "end": 4906,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4909,
                          "end": 4910,
                          "literal": {
                            "type": "Literal",
                            "start": 4909,
                            "end": 4910,
                            "raw": "3",
                            "value": 3
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4913,
                          "end": 4914,
                          "literal": {
                            "type": "Literal",
                            "start": 4913,
                            "end": 4914,
                            "raw": "4",
                            "value": 4
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 4917,
                          "end": 4918,
                          "literal": {
                            "type": "Literal",
                            "start": 4917,
                            "end": 4918,
                            "raw": "5",
                            "value": 5
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 4921,
                  "end": 4922,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "TryStatement",
            "start": 4928,
            "end": 5291,
            "block": {
              "type": "BlockStatement",
              "start": 4932,
              "end": 5232,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4942,
                  "end": 4948,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4942,
                    "end": 4947,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 4942,
                      "end": 4943,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4946,
                      "end": 4947,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "start": 4957,
                  "end": 5201,
                  "block": {
                    "type": "BlockStatement",
                    "start": 4961,
                    "end": 5142,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4975,
                        "end": 4981,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 4975,
                          "end": 4980,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 4975,
                            "end": 4976,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 4979,
                            "end": 4980,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      },
                      {
                        "type": "TryStatement",
                        "start": 4994,
                        "end": 5107,
                        "block": {
                          "type": "BlockStatement",
                          "start": 4998,
                          "end": 5036,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 5016,
                              "end": 5022,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 5016,
                                "end": 5021,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 5016,
                                  "end": 5017,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 5020,
                                  "end": 5021,
                                  "raw": "3",
                                  "value": 3
                                }
                              }
                            }
                          ]
                        },
                        "finalizer": {
                          "type": "BlockStatement",
                          "start": 5057,
                          "end": 5107,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 5075,
                              "end": 5093,
                              "alternate": null,
                              "consequent": {
                                "type": "ExpressionStatement",
                                "start": 5087,
                                "end": 5093,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 5087,
                                  "end": 5092,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5087,
                                    "end": 5088,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 5091,
                                    "end": 5092,
                                    "raw": "4",
                                    "value": 4
                                  }
                                }
                              },
                              "test": {
                                "type": "UnaryExpression",
                                "start": 5079,
                                "end": 5085,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 5080,
                                  "end": 5085,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 5081,
                                    "end": 5085,
                                    "raw": "true",
                                    "value": true
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
                        "handler": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 5120,
                        "end": 5122,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 5120,
                          "end": 5121,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 5159,
                    "end": 5201,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 5173,
                        "end": 5191,
                        "alternate": null,
                        "consequent": {
                          "type": "ExpressionStatement",
                          "start": 5185,
                          "end": 5191,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5185,
                            "end": 5190,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5185,
                              "end": 5186,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 5189,
                              "end": 5190,
                              "raw": "5",
                              "value": 5
                            }
                          }
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "start": 5177,
                          "end": 5183,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 5178,
                            "end": 5183,
                            "argument": {
                              "type": "Literal",
                              "start": 5179,
                              "end": 5183,
                              "raw": "true",
                              "value": true
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
                  "handler": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 5210,
                  "end": 5212,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5210,
                    "end": 5211,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 5237,
              "end": 5291,
              "body": {
                "type": "BlockStatement",
                "start": 5247,
                "end": 5291,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5257,
                    "end": 5259,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 5257,
                      "end": 5258,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 5244,
                "end": 5245,
                "decorators": [],
                "name": "e",
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
        "start": 4878,
        "end": 4881,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
