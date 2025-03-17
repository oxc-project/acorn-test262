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
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 62,
                  "name": "a",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 65,
                  "end": 69,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 89,
                    "end": 96,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 93,
                      "end": 96,
                      "value": 123,
                      "raw": "123"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 106,
                  "end": 115,
                  "argument": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 126,
              "end": 160,
              "param": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
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
                  "test": {
                    "type": "LogicalExpression",
                    "start": 187,
                    "end": 221,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 187,
                      "end": 196,
                      "left": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "start": 192,
                        "end": 196,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 200,
                      "end": 221,
                      "left": {
                        "type": "CallExpression",
                        "start": 200,
                        "end": 212,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 200,
                          "end": 209,
                          "object": {
                            "type": "Identifier",
                            "start": 200,
                            "end": 201,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 209,
                            "name": "toFixed",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 210,
                            "end": 211,
                            "value": 0,
                            "raw": "0"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "start": 216,
                        "end": 221,
                        "value": "123",
                        "raw": "\"123\""
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 223,
                    "end": 235,
                    "body": []
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 245,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 256,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 285,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 288,
                  "end": 289,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 309,
                    "end": 314,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 313,
                      "end": 314,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 326,
              "end": 375,
              "param": {
                "type": "Identifier",
                "start": 333,
                "end": 334,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 336,
                "end": 375,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 346,
                    "end": 352,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 346,
                      "end": 351,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 347,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 350,
                        "end": 351,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ThrowStatement",
                    "start": 361,
                    "end": 369,
                    "argument": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "name": "e",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 399,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 425,
            "end": 427,
            "expression": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 437,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 448,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 477,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 480,
                  "end": 481,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 501,
                    "end": 506,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 501,
                      "end": 502,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 505,
                      "end": 506,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 518,
              "end": 566,
              "param": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 528,
                "end": 566,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 538,
                    "end": 544,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 538,
                      "end": 543,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 539,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 542,
                        "end": 543,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 553,
                    "end": 560,
                    "argument": null
                  }
                ]
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 618,
            "expression": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 628,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 637,
        "end": 639,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 652,
                  "end": 668,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 671,
                  "end": 672,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 692,
                    "end": 697,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 692,
                      "end": 693,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 696,
                      "end": 697,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 709,
              "end": 741,
              "param": {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 719,
                "end": 741,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 729,
                    "end": 735,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 729,
                      "end": 734,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 730,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 733,
                        "end": 734,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 791,
            "end": 793,
            "expression": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 807,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 818,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 847,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 850,
                  "end": 851,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 871,
                    "end": 876,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 871,
                      "end": 872,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 875,
                      "end": 876,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 886,
                  "end": 893,
                  "argument": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 904,
              "end": 936,
              "param": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 914,
                "end": 936,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 924,
                    "end": 930,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 924,
                      "end": 929,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 924,
                        "end": 925,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 928,
                        "end": 929,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 959,
                    "end": 960,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 986,
            "end": 988,
            "expression": {
              "type": "Identifier",
              "start": 986,
              "end": 987,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 998,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1009,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1038,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1041,
                  "end": 1042,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1062,
                    "end": 1067,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1062,
                      "end": 1063,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1066,
                      "end": 1067,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1079,
              "end": 1127,
              "param": {
                "type": "Identifier",
                "start": 1086,
                "end": 1087,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 1089,
                "end": 1127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1099,
                    "end": 1105,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1099,
                      "end": 1104,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1100,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1103,
                        "end": 1104,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1114,
                    "end": 1121,
                    "argument": null
                  }
                ]
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 1150,
                    "end": 1151,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1177,
            "end": 1179,
            "expression": {
              "type": "Identifier",
              "start": 1177,
              "end": 1178,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1189,
      "end": 1404,
      "id": {
        "type": "Identifier",
        "start": 1198,
        "end": 1200,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1229,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1232,
                  "end": 1233,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1253,
                    "end": 1258,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1253,
                      "end": 1254,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1257,
                      "end": 1258,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1268,
                  "end": 1275,
                  "argument": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1286,
              "end": 1334,
              "param": {
                "type": "Identifier",
                "start": 1293,
                "end": 1294,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 1296,
                "end": 1334,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1306,
                    "end": 1312,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1306,
                      "end": 1311,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1306,
                        "end": 1307,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1310,
                        "end": 1311,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1321,
                    "end": 1328,
                    "argument": null
                  }
                ]
              }
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
                  "expression": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1384,
            "end": 1386,
            "expression": {
              "type": "Identifier",
              "start": 1384,
              "end": 1385,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1406,
      "end": 1624,
      "id": {
        "type": "Identifier",
        "start": 1415,
        "end": 1417,
        "name": "f8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1438,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1441,
                  "end": 1442,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1448,
            "end": 1609,
            "expression": {
              "type": "CallExpression",
              "start": 1448,
              "end": 1608,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 1449,
                "end": 1605,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1483,
                              "end": 1488,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1483,
                                "end": 1484,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1487,
                                "end": 1488,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 1502,
                            "end": 1509,
                            "argument": null
                          }
                        ]
                      },
                      "handler": null,
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 1536,
                        "end": 1572,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1550,
                            "end": 1552,
                            "expression": {
                              "type": "Identifier",
                              "start": 1550,
                              "end": 1551,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1581,
                      "end": 1583,
                      "expression": {
                        "type": "Identifier",
                        "start": 1581,
                        "end": 1582,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1614,
            "end": 1616,
            "expression": {
              "type": "Identifier",
              "start": 1614,
              "end": 1615,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1626,
      "end": 1905,
      "id": {
        "type": "Identifier",
        "start": 1635,
        "end": 1637,
        "name": "f9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1650,
                  "end": 1662,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1665,
                  "end": 1666,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1672,
            "end": 1886,
            "expression": {
              "type": "CallExpression",
              "start": 1672,
              "end": 1885,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 1673,
                "end": 1882,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "test": {
                              "type": "UnaryExpression",
                              "start": 1711,
                              "end": 1717,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 1712,
                                "end": 1717,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 1713,
                                  "end": 1717,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 1719,
                              "end": 1781,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 1737,
                                  "end": 1743,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 1737,
                                    "end": 1742,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1737,
                                      "end": 1738,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 1741,
                                      "end": 1742,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 1760,
                                  "end": 1767,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "handler": null,
                      "finalizer": {
                        "type": "BlockStatement",
                        "start": 1808,
                        "end": 1844,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1822,
                            "end": 1824,
                            "expression": {
                              "type": "Identifier",
                              "start": 1822,
                              "end": 1823,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1853,
                      "end": 1855,
                      "expression": {
                        "type": "Identifier",
                        "start": 1853,
                        "end": 1854,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1870,
                      "end": 1876,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1870,
                        "end": 1875,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 1870,
                          "end": 1871,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1874,
                          "end": 1875,
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1891,
            "end": 1893,
            "expression": {
              "type": "Identifier",
              "start": 1891,
              "end": 1892,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1907,
      "end": 2196,
      "id": {
        "type": "Identifier",
        "start": 1916,
        "end": 1919,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 1932,
                  "end": 1948,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1951,
                  "end": 1952,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1958,
            "end": 2177,
            "expression": {
              "type": "CallExpression",
              "start": 1958,
              "end": 2176,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 1959,
                "end": 2173,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1993,
                              "end": 1998,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1993,
                                "end": 1994,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1997,
                                "end": 1998,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2012,
                            "end": 2019,
                            "argument": null
                          }
                        ]
                      },
                      "handler": {
                        "type": "CatchClause",
                        "start": 2038,
                        "end": 2078,
                        "param": {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2046,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 2048,
                          "end": 2078,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2062,
                              "end": 2068,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 2062,
                                "end": 2067,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 2062,
                                  "end": 2063,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 2066,
                                  "end": 2067,
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "directive": null
                            }
                          ]
                        }
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
                            "expression": {
                              "type": "Identifier",
                              "start": 2109,
                              "end": 2110,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2144,
                      "end": 2146,
                      "expression": {
                        "type": "Identifier",
                        "start": 2144,
                        "end": 2145,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2161,
                      "end": 2167,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 2161,
                        "end": 2166,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 2161,
                          "end": 2162,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2165,
                          "end": 2166,
                          "value": 3,
                          "raw": "3"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2182,
            "end": 2184,
            "expression": {
              "type": "Identifier",
              "start": 2182,
              "end": 2183,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2198,
      "end": 2739,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2210,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 2223,
                  "end": 2247,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
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
                            "value": 4,
                            "raw": "4"
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
                            "value": 5,
                            "raw": "5"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2250,
                  "end": 2251,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2257,
            "end": 2716,
            "expression": {
              "type": "CallExpression",
              "start": 2257,
              "end": 2715,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 2258,
                "end": 2712,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2296,
                              "end": 2302,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2297,
                                "end": 2302,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2298,
                                  "end": 2302,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2304,
                              "end": 2366,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2322,
                                  "end": 2328,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2322,
                                    "end": 2327,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2322,
                                      "end": 2323,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2326,
                                      "end": 2327,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 2345,
                                  "end": 2352,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2379,
                            "end": 2454,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2383,
                              "end": 2389,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2384,
                                "end": 2389,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2385,
                                  "end": 2389,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2391,
                              "end": 2454,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2409,
                                  "end": 2415,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2409,
                                    "end": 2414,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2409,
                                      "end": 2410,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2413,
                                      "end": 2414,
                                      "value": 2,
                                      "raw": "2"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ThrowStatement",
                                  "start": 2432,
                                  "end": 2440,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2438,
                                    "end": 2439,
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "handler": {
                        "type": "CatchClause",
                        "start": 2473,
                        "end": 2542,
                        "param": {
                          "type": "Identifier",
                          "start": 2480,
                          "end": 2481,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 2483,
                          "end": 2542,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2497,
                              "end": 2499,
                              "expression": {
                                "type": "Identifier",
                                "start": 2497,
                                "end": 2498,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 2526,
                              "end": 2532,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 2526,
                                "end": 2531,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 2526,
                                  "end": 2527,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 2530,
                                  "end": 2531,
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "directive": null
                            }
                          ]
                        }
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
                            "expression": {
                              "type": "Identifier",
                              "start": 2573,
                              "end": 2574,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2606,
                            "end": 2656,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2610,
                              "end": 2616,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2611,
                                "end": 2616,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2612,
                                  "end": 2616,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2618,
                              "end": 2656,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2636,
                                  "end": 2642,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2636,
                                    "end": 2641,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2636,
                                      "end": 2637,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2640,
                                      "end": 2641,
                                      "value": 4,
                                      "raw": "4"
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2675,
                      "end": 2677,
                      "expression": {
                        "type": "Identifier",
                        "start": 2675,
                        "end": 2676,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 2700,
                      "end": 2706,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 2700,
                        "end": 2705,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 2700,
                          "end": 2701,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 2704,
                          "end": 2705,
                          "value": 5,
                          "raw": "5"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2721,
            "end": 2723,
            "expression": {
              "type": "Identifier",
              "start": 2721,
              "end": 2722,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2741,
      "end": 3484,
      "id": {
        "type": "Identifier",
        "start": 2750,
        "end": 2753,
        "name": "f12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 2766,
                  "end": 2798,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
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
                            "value": 4,
                            "raw": "4"
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
                            "value": 5,
                            "raw": "5"
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
                            "value": 6,
                            "raw": "6"
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
                            "value": 7,
                            "raw": "7"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2801,
                  "end": 2802,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2808,
            "end": 3461,
            "expression": {
              "type": "CallExpression",
              "start": 2808,
              "end": 3460,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 2809,
                "end": 3457,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2847,
                              "end": 2853,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2848,
                                "end": 2853,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2849,
                                  "end": 2853,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2855,
                              "end": 2917,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2873,
                                  "end": 2879,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2873,
                                    "end": 2878,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2873,
                                      "end": 2874,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2877,
                                      "end": 2878,
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 2896,
                                  "end": 2903,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 2930,
                            "end": 3005,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 2934,
                              "end": 2940,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 2935,
                                "end": 2940,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 2936,
                                  "end": 2940,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2942,
                              "end": 3005,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2960,
                                  "end": 2966,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2960,
                                    "end": 2965,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 2960,
                                      "end": 2961,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 2964,
                                      "end": 2965,
                                      "value": 2,
                                      "raw": "2"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ThrowStatement",
                                  "start": 2983,
                                  "end": 2991,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 2989,
                                    "end": 2990,
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "handler": {
                        "type": "CatchClause",
                        "start": 3024,
                        "end": 3093,
                        "param": {
                          "type": "Identifier",
                          "start": 3031,
                          "end": 3032,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 3034,
                          "end": 3093,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 3048,
                              "end": 3050,
                              "expression": {
                                "type": "Identifier",
                                "start": 3048,
                                "end": 3049,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 3077,
                              "end": 3083,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 3077,
                                "end": 3082,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 3077,
                                  "end": 3078,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 3081,
                                  "end": 3082,
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "directive": null
                            }
                          ]
                        }
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
                            "expression": {
                              "type": "Identifier",
                              "start": 3124,
                              "end": 3125,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 3157,
                            "end": 3231,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 3161,
                              "end": 3167,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 3162,
                                "end": 3167,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3163,
                                  "end": 3167,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3169,
                              "end": 3231,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3187,
                                  "end": 3193,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3187,
                                    "end": 3192,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 3187,
                                      "end": 3188,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 3191,
                                      "end": 3192,
                                      "value": 4,
                                      "raw": "4"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 3210,
                                  "end": 3217,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "IfStatement",
                            "start": 3244,
                            "end": 3318,
                            "test": {
                              "type": "UnaryExpression",
                              "start": 3248,
                              "end": 3254,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "UnaryExpression",
                                "start": 3249,
                                "end": 3254,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "Literal",
                                  "start": 3250,
                                  "end": 3254,
                                  "value": true,
                                  "raw": "true"
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3256,
                              "end": 3318,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 3274,
                                  "end": 3280,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 3274,
                                    "end": 3279,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 3274,
                                      "end": 3275,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 3278,
                                      "end": 3279,
                                      "value": 5,
                                      "raw": "5"
                                    }
                                  },
                                  "directive": null
                                },
                                {
                                  "type": "ReturnStatement",
                                  "start": 3297,
                                  "end": 3304,
                                  "argument": null
                                }
                              ]
                            },
                            "alternate": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3331,
                            "end": 3337,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3331,
                              "end": 3336,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 3331,
                                "end": 3332,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 3335,
                                "end": 3336,
                                "value": 6,
                                "raw": "6"
                              }
                            },
                            "directive": null
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
                            "expression": {
                              "type": "Identifier",
                              "start": 3370,
                              "end": 3371,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 3406,
                      "end": 3408,
                      "expression": {
                        "type": "Identifier",
                        "start": 3406,
                        "end": 3407,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 3432,
                      "end": 3438,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 3432,
                        "end": 3437,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 3432,
                          "end": 3433,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 3436,
                          "end": 3437,
                          "value": 7,
                          "raw": "7"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3466,
            "end": 3468,
            "expression": {
              "type": "Identifier",
              "start": 3466,
              "end": 3467,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 3514,
            "end": 3518,
            "name": "main",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3521,
            "end": 3757,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 3537,
                        "end": 3561,
                        "name": "hoge",
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 3564,
                        "end": 3573,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
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
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 3593,
                          "end": 3607,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 3593,
                            "end": 3597,
                            "name": "hoge",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 3600,
                            "end": 3607,
                            "value": "hoge!",
                            "raw": "'hoge!'"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 3617,
                        "end": 3624,
                        "argument": null
                      }
                    ]
                  },
                  "handler": {
                    "type": "CatchClause",
                    "start": 3635,
                    "end": 3664,
                    "param": null,
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
                    }
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
                        "test": {
                          "type": "Identifier",
                          "start": 3691,
                          "end": 3695,
                          "name": "hoge",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 3697,
                          "end": 3733,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 3711,
                              "end": 3723,
                              "expression": {
                                "type": "MemberExpression",
                                "start": 3711,
                                "end": 3722,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3711,
                                  "end": 3715,
                                  "name": "hoge",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3716,
                                  "end": 3722,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 3742,
                        "end": 3749,
                        "argument": null
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3781,
      "end": 3982,
      "id": {
        "type": "Identifier",
        "start": 3790,
        "end": 3792,
        "name": "t1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 3807,
                  "end": 3808,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3811,
                  "end": 3958,
                  "callee": {
                    "type": "ArrowFunctionExpression",
                    "start": 3812,
                    "end": 3955,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                  "value": "x",
                                  "raw": "'x'"
                                }
                              }
                            ]
                          },
                          "handler": {
                            "type": "CatchClause",
                            "start": 3876,
                            "end": 3922,
                            "param": {
                              "type": "Identifier",
                              "start": 3883,
                              "end": 3884,
                              "name": "e",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "value": null,
                                    "raw": "null"
                                  }
                                }
                              ]
                            }
                          },
                          "finalizer": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 3931,
                          "end": 3933,
                          "expression": {
                            "type": "Identifier",
                            "start": 3931,
                            "end": 3932,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3964,
            "end": 3966,
            "expression": {
              "type": "Identifier",
              "start": 3964,
              "end": 3965,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4006,
      "end": 4070,
      "id": {
        "type": "Identifier",
        "start": 4011,
        "end": 4016,
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4021,
                  "end": 4024,
                  "name": "tag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "one",
                      "raw": "\"one\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4038,
                  "end": 4041,
                  "name": "tag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "two",
                      "raw": "\"two\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4055,
                  "end": 4058,
                  "name": "tag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": "three",
                      "raw": "\"three\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4072,
      "end": 4424,
      "id": {
        "type": "Identifier",
        "start": 4081,
        "end": 4091,
        "name": "notallowed",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4092,
          "end": 4103,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4095,
            "end": 4103,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4097,
              "end": 4103
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 4115,
                  "end": 4127,
                  "name": "state",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4120,
                    "end": 4127,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4122,
                      "end": 4127,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4122,
                        "end": 4127,
                        "name": "State",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4132,
                        "end": 4135,
                        "name": "tag",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4137,
                        "end": 4142,
                        "value": "one",
                        "raw": "\"one\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4164,
                    "end": 4186,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 4164,
                      "end": 4169,
                      "name": "state",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4174,
                            "end": 4177,
                            "name": "tag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4179,
                            "end": 4184,
                            "value": "two",
                            "raw": "\"two\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  },
                  "directive": null
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
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 4214,
                          "end": 4238,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 4214,
                            "end": 4219,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4224,
                                  "end": 4227,
                                  "name": "tag",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 4229,
                                  "end": 4236,
                                  "value": "three",
                                  "raw": "\"three\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 4266,
                    "end": 4269,
                    "body": []
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 4280,
              "end": 4422,
              "param": {
                "type": "Identifier",
                "start": 4287,
                "end": 4290,
                "name": "err",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 4292,
                "end": 4422,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4302,
                    "end": 4312,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4302,
                      "end": 4311,
                      "object": {
                        "type": "Identifier",
                        "start": 4302,
                        "end": 4307,
                        "name": "state",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4308,
                        "end": 4311,
                        "name": "tag",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 4321,
                    "end": 4416,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 4325,
                      "end": 4367,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 4325,
                        "end": 4344,
                        "left": {
                          "type": "MemberExpression",
                          "start": 4325,
                          "end": 4334,
                          "object": {
                            "type": "Identifier",
                            "start": 4325,
                            "end": 4330,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4331,
                            "end": 4334,
                            "name": "tag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "start": 4339,
                          "end": 4344,
                          "value": "one",
                          "raw": "\"one\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 4348,
                        "end": 4367,
                        "left": {
                          "type": "MemberExpression",
                          "start": 4348,
                          "end": 4357,
                          "object": {
                            "type": "Identifier",
                            "start": 4348,
                            "end": 4353,
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4354,
                            "end": 4357,
                            "name": "tag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "start": 4362,
                          "end": 4367,
                          "value": "two",
                          "raw": "\"two\""
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 4369,
                      "end": 4416,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4383,
                          "end": 4406,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4383,
                            "end": 4405,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4383,
                              "end": 4394,
                              "object": {
                                "type": "Identifier",
                                "start": 4383,
                                "end": 4390,
                                "name": "console",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 4391,
                                "end": 4394,
                                "name": "log",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 4395,
                                "end": 4404,
                                "object": {
                                  "type": "Identifier",
                                  "start": 4395,
                                  "end": 4400,
                                  "name": "state",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4401,
                                  "end": 4404,
                                  "name": "tag",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4426,
      "end": 4867,
      "id": {
        "type": "Identifier",
        "start": 4435,
        "end": 4438,
        "name": "f20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 4451,
                  "end": 4479,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
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
                            "value": 4,
                            "raw": "4"
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
                            "value": 5,
                            "raw": "5"
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
                            "value": 6,
                            "raw": "6"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 4482,
                  "end": 4483,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4503,
                    "end": 4508,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 4503,
                      "end": 4504,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4507,
                      "end": 4508,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
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
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 4536,
                          "end": 4541,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 4536,
                            "end": 4537,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 4540,
                            "end": 4541,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "directive": null
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
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 4577,
                                "end": 4582,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 4577,
                                  "end": 4578,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 4581,
                                  "end": 4582,
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "handler": null,
                        "finalizer": {
                          "type": "BlockStatement",
                          "start": 4618,
                          "end": 4668,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 4636,
                              "end": 4654,
                              "test": {
                                "type": "UnaryExpression",
                                "start": 4640,
                                "end": 4646,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 4641,
                                  "end": 4646,
                                  "operator": "!",
                                  "prefix": true,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 4642,
                                    "end": 4646,
                                    "value": true,
                                    "raw": "true"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "start": 4648,
                                "end": 4654,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 4648,
                                  "end": 4653,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 4648,
                                    "end": 4649,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 4652,
                                    "end": 4653,
                                    "value": 4,
                                    "raw": "4"
                                  }
                                },
                                "directive": null
                              },
                              "alternate": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 4681,
                        "end": 4683,
                        "expression": {
                          "type": "Identifier",
                          "start": 4681,
                          "end": 4682,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 4720,
                    "end": 4762,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 4734,
                        "end": 4752,
                        "test": {
                          "type": "UnaryExpression",
                          "start": 4738,
                          "end": 4744,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 4739,
                            "end": 4744,
                            "operator": "!",
                            "prefix": true,
                            "argument": {
                              "type": "Literal",
                              "start": 4740,
                              "end": 4744,
                              "value": true,
                              "raw": "true"
                            }
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "start": 4746,
                          "end": 4752,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 4746,
                            "end": 4751,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 4746,
                              "end": 4747,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4750,
                              "end": 4751,
                              "value": 5,
                              "raw": "5"
                            }
                          },
                          "directive": null
                        },
                        "alternate": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4771,
                  "end": 4773,
                  "expression": {
                    "type": "Identifier",
                    "start": 4771,
                    "end": 4772,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "start": 4806,
              "end": 4840,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 4816,
                  "end": 4834,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 4820,
                    "end": 4826,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 4821,
                      "end": 4826,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 4822,
                        "end": 4826,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 4828,
                    "end": 4834,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 4828,
                      "end": 4833,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 4828,
                        "end": 4829,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4832,
                        "end": 4833,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "directive": null
                  },
                  "alternate": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 4845,
            "end": 4847,
            "expression": {
              "type": "Identifier",
              "start": 4845,
              "end": 4846,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4869,
      "end": 5293,
      "id": {
        "type": "Identifier",
        "start": 4878,
        "end": 4881,
        "name": "f21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 4894,
                  "end": 4918,
                  "name": "x",
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
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
                            "value": 4,
                            "raw": "4"
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
                            "value": 5,
                            "raw": "5"
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 4921,
                  "end": 4922,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4942,
                    "end": 4947,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 4942,
                      "end": 4943,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4946,
                      "end": 4947,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
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
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 4975,
                          "end": 4980,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 4975,
                            "end": 4976,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 4979,
                            "end": 4980,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "directive": null
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
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 5016,
                                "end": 5021,
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "start": 5016,
                                  "end": 5017,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 5020,
                                  "end": 5021,
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "handler": null,
                        "finalizer": {
                          "type": "BlockStatement",
                          "start": 5057,
                          "end": 5107,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 5075,
                              "end": 5093,
                              "test": {
                                "type": "UnaryExpression",
                                "start": 5079,
                                "end": 5085,
                                "operator": "!",
                                "prefix": true,
                                "argument": {
                                  "type": "UnaryExpression",
                                  "start": 5080,
                                  "end": 5085,
                                  "operator": "!",
                                  "prefix": true,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 5081,
                                    "end": 5085,
                                    "value": true,
                                    "raw": "true"
                                  }
                                }
                              },
                              "consequent": {
                                "type": "ExpressionStatement",
                                "start": 5087,
                                "end": 5093,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 5087,
                                  "end": 5092,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 5087,
                                    "end": 5088,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 5091,
                                    "end": 5092,
                                    "value": 4,
                                    "raw": "4"
                                  }
                                },
                                "directive": null
                              },
                              "alternate": null
                            }
                          ]
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 5120,
                        "end": 5122,
                        "expression": {
                          "type": "Identifier",
                          "start": 5120,
                          "end": 5121,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "start": 5159,
                    "end": 5201,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 5173,
                        "end": 5191,
                        "test": {
                          "type": "UnaryExpression",
                          "start": 5177,
                          "end": 5183,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 5178,
                            "end": 5183,
                            "operator": "!",
                            "prefix": true,
                            "argument": {
                              "type": "Literal",
                              "start": 5179,
                              "end": 5183,
                              "value": true,
                              "raw": "true"
                            }
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "start": 5185,
                          "end": 5191,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5185,
                            "end": 5190,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5185,
                              "end": 5186,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 5189,
                              "end": 5190,
                              "value": 5,
                              "raw": "5"
                            }
                          },
                          "directive": null
                        },
                        "alternate": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 5210,
                  "end": 5212,
                  "expression": {
                    "type": "Identifier",
                    "start": 5210,
                    "end": 5211,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 5237,
              "end": 5291,
              "param": {
                "type": "Identifier",
                "start": 5244,
                "end": 5245,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 5247,
                "end": 5291,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5257,
                    "end": 5259,
                    "expression": {
                      "type": "Identifier",
                      "start": 5257,
                      "end": 5258,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
