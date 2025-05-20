__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3144,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 32,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 25,
          "end": 32
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 167,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 167,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 63,
                  "end": 65,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 80,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 71,
              "end": 79,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 71,
                "end": 75,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "raw": "5",
                "value": 5
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 100,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 85,
              "end": 99,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 85,
                "end": 89,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 87,
                  "end": 88,
                  "raw": "1",
                  "value": 1
                }
              },
              "right": {
                "type": "Literal",
                "start": 92,
                "end": 99,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 117,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 105,
              "end": 116,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 105,
                "end": 109,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "raw": "2",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "start": 112,
                "end": 116,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 122,
            "end": 131,
            "argument": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
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
        "start": 44,
        "end": 46,
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
      "start": 169,
      "end": 304,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 304,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 189,
            "end": 200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 193,
                "end": 199,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 197,
                  "end": 199,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 215,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 205,
              "end": 214,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 212,
                  "end": 213,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 205,
                "end": 211,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 211,
                  "decorators": [],
                  "name": "push",
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
            "start": 220,
            "end": 236,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 220,
              "end": 235,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 227,
                  "end": 234,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 220,
                "end": 226,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 226,
                  "decorators": [],
                  "name": "push",
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
            "start": 241,
            "end": 254,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 241,
              "end": 253,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 248,
                  "end": 252,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 241,
                "end": 247,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 247,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 259,
            "end": 268,
            "argument": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
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
        "start": 178,
        "end": 180,
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
      "start": 306,
      "end": 408,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 408,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 326,
            "end": 332,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 330,
                "end": 331,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 337,
            "end": 344,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 337,
              "end": 343,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 341,
                "end": 343,
                "elements": []
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 349,
            "end": 368,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 349,
              "end": 367,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 356,
                  "end": 357,
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 359,
                  "end": 366,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 349,
                "end": 355,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 373,
            "end": 382,
            "argument": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
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
        "start": 315,
        "end": 317,
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
      "start": 410,
      "end": 566,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 424,
        "end": 566,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 430,
            "end": 441,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 434,
                "end": 440,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 435,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 438,
                  "end": 440,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 446,
            "end": 526,
            "alternate": {
              "type": "BlockStatement",
              "start": 494,
              "end": 526,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 504,
                  "end": 520,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 504,
                    "end": 519,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 511,
                        "end": 518,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 504,
                      "end": 510,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 505,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 510,
                        "decorators": [],
                        "name": "push",
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
            "consequent": {
              "type": "BlockStatement",
              "start": 458,
              "end": 484,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 468,
                  "end": 478,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 468,
                    "end": 477,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 475,
                        "end": 476,
                        "raw": "5",
                        "value": 5
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 468,
                      "end": 474,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 469,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 474,
                        "decorators": [],
                        "name": "push",
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
              "type": "CallExpression",
              "start": 450,
              "end": 456,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 450,
                "end": 454,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 531,
            "end": 540,
            "argument": {
              "type": "Identifier",
              "start": 538,
              "end": 539,
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
        "start": 419,
        "end": 421,
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
      "start": 568,
      "end": 751,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 582,
        "end": 751,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 588,
            "end": 594,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 592,
                "end": 593,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 593,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 599,
            "end": 711,
            "alternate": {
              "type": "BlockStatement",
              "start": 663,
              "end": 711,
              "body": [
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
                      "type": "ArrayExpression",
                      "start": 677,
                      "end": 679,
                      "elements": []
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 689,
                  "end": 705,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 689,
                    "end": 704,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 696,
                        "end": 703,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 689,
                      "end": 695,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 690,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 695,
                        "decorators": [],
                        "name": "push",
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
            "consequent": {
              "type": "BlockStatement",
              "start": 611,
              "end": 653,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 621,
                  "end": 628,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 621,
                    "end": 627,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 622,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 625,
                      "end": 627,
                      "elements": []
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 647,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 637,
                    "end": 646,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 644,
                        "end": 645,
                        "raw": "5",
                        "value": 5
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 637,
                      "end": 643,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 637,
                        "end": 638,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 643,
                        "decorators": [],
                        "name": "push",
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
              "type": "CallExpression",
              "start": 603,
              "end": 609,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 603,
                "end": 607,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 716,
            "end": 725,
            "argument": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
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
        "start": 577,
        "end": 579,
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
      "start": 753,
      "end": 914,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 767,
        "end": 914,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 773,
            "end": 779,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 777,
                "end": 778,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 778,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 784,
            "end": 876,
            "alternate": {
              "type": "BlockStatement",
              "start": 828,
              "end": 876,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 838,
                  "end": 845,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 838,
                    "end": 844,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 838,
                      "end": 839,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 842,
                      "end": 844,
                      "elements": []
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 854,
                  "end": 870,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 854,
                    "end": 869,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 861,
                        "end": 868,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 854,
                      "end": 860,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 854,
                        "end": 855,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 856,
                        "end": 860,
                        "decorators": [],
                        "name": "push",
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
            "consequent": {
              "type": "BlockStatement",
              "start": 796,
              "end": 818,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 806,
                  "end": 812,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 806,
                    "end": 811,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 806,
                      "end": 807,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 810,
                      "end": 811,
                      "raw": "5",
                      "value": 5
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 788,
              "end": 794,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 788,
                "end": 792,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 881,
            "end": 890,
            "argument": {
              "type": "Identifier",
              "start": 888,
              "end": 889,
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
        "start": 762,
        "end": 764,
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
      "start": 916,
      "end": 1089,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 930,
        "end": 1089,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 936,
            "end": 949,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 940,
                "end": 948,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 940,
                  "end": 941,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 944,
                  "end": 948,
                  "raw": "null",
                  "value": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 954,
            "end": 1053,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 966,
              "end": 1053,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 976,
                  "end": 983,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 976,
                    "end": 982,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 976,
                      "end": 977,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 980,
                      "end": 982,
                      "elements": []
                    }
                  }
                },
                {
                  "type": "WhileStatement",
                  "start": 992,
                  "end": 1047,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1007,
                    "end": 1047,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1021,
                        "end": 1037,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1021,
                          "end": 1036,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1028,
                              "end": 1035,
                              "raw": "\"hello\"",
                              "value": "hello"
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1021,
                            "end": 1027,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1021,
                              "end": 1022,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1023,
                              "end": 1027,
                              "decorators": [],
                              "name": "push",
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
                    "type": "CallExpression",
                    "start": 999,
                    "end": 1005,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1003,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 958,
              "end": 964,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 958,
                "end": 962,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1058,
            "end": 1067,
            "argument": {
              "type": "Identifier",
              "start": 1065,
              "end": 1066,
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
        "start": 925,
        "end": 927,
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
      "start": 1091,
      "end": 1315,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1105,
        "end": 1315,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1111,
            "end": 1122,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1115,
                "end": 1121,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1115,
                  "end": 1116,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1119,
                  "end": 1121,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1127,
            "end": 1137,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1136,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1134,
                  "end": 1135,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1127,
                "end": 1133,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1128,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1129,
                  "end": 1133,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1142,
            "end": 1163,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 1154,
              "end": 1163,
              "argument": {
                "type": "Identifier",
                "start": 1161,
                "end": 1162,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "CallExpression",
              "start": 1146,
              "end": 1152,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1146,
                "end": 1150,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1181,
            "end": 1197,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1181,
              "end": 1196,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1188,
                  "end": 1195,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1181,
                "end": 1187,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1181,
                  "end": 1182,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1183,
                  "end": 1187,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1202,
            "end": 1223,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 1214,
              "end": 1223,
              "argument": {
                "type": "Identifier",
                "start": 1221,
                "end": 1222,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "CallExpression",
              "start": 1206,
              "end": 1212,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1206,
                "end": 1210,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1252,
            "end": 1265,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1252,
              "end": 1264,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1259,
                  "end": 1263,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1252,
                "end": 1258,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1252,
                  "end": 1253,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1258,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1270,
            "end": 1279,
            "argument": {
              "type": "Identifier",
              "start": 1277,
              "end": 1278,
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
        "start": 1100,
        "end": 1102,
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
      "start": 1317,
      "end": 1497,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1331,
        "end": 1497,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1337,
            "end": 1348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1341,
                "end": 1347,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1342,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1345,
                  "end": 1347,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 1353,
            "end": 1495,
            "alternate": {
              "type": "BlockStatement",
              "start": 1432,
              "end": 1495,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1442,
                  "end": 1458,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1442,
                    "end": 1457,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1449,
                        "end": 1456,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1442,
                      "end": 1448,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1442,
                        "end": 1443,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1444,
                        "end": 1448,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1467,
                  "end": 1476,
                  "argument": {
                    "type": "Identifier",
                    "start": 1474,
                    "end": 1475,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1365,
              "end": 1422,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1375,
                  "end": 1385,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1375,
                    "end": 1384,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1382,
                        "end": 1383,
                        "raw": "5",
                        "value": 5
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1375,
                      "end": 1381,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1375,
                        "end": 1376,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1377,
                        "end": 1381,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1394,
                  "end": 1403,
                  "argument": {
                    "type": "Identifier",
                    "start": 1401,
                    "end": 1402,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1357,
              "end": 1363,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1357,
                "end": 1361,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 1326,
        "end": 1328,
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
      "start": 1499,
      "end": 1827,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1514,
        "end": 1827,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1520,
            "end": 1531,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1524,
                "end": 1530,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1524,
                  "end": 1525,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1528,
                  "end": 1530,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 1536,
            "end": 1761,
            "alternate": {
              "type": "BlockStatement",
              "start": 1612,
              "end": 1761,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1622,
                  "end": 1632,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1622,
                    "end": 1631,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1629,
                        "end": 1630,
                        "raw": "5",
                        "value": 5
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1622,
                      "end": 1628,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1622,
                        "end": 1623,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1624,
                        "end": 1628,
                        "decorators": [],
                        "name": "push",
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
                  "start": 1641,
                  "end": 1643,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1641,
                    "end": 1642,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "WhileStatement",
                  "start": 1665,
                  "end": 1720,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1680,
                    "end": 1720,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1694,
                        "end": 1710,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1694,
                          "end": 1709,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1701,
                              "end": 1708,
                              "raw": "\"hello\"",
                              "value": "hello"
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1694,
                            "end": 1700,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1694,
                              "end": 1695,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1696,
                              "end": 1700,
                              "decorators": [],
                              "name": "push",
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
                    "type": "CallExpression",
                    "start": 1672,
                    "end": 1678,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1672,
                      "end": 1676,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1729,
                  "end": 1731,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1729,
                    "end": 1730,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1548,
              "end": 1602,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1558,
                  "end": 1571,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1558,
                    "end": 1570,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1565,
                        "end": 1569,
                        "raw": "true",
                        "value": true
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1558,
                      "end": 1564,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1558,
                        "end": 1559,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1560,
                        "end": 1564,
                        "decorators": [],
                        "name": "push",
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
                  "start": 1580,
                  "end": 1582,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1580,
                    "end": 1581,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1540,
              "end": 1546,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1540,
                "end": 1544,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1766,
            "end": 1777,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1766,
              "end": 1776,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1773,
                  "end": 1775,
                  "raw": "99",
                  "value": 99
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1766,
                "end": 1772,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1766,
                  "end": 1767,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1768,
                  "end": 1772,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1782,
            "end": 1791,
            "argument": {
              "type": "Identifier",
              "start": 1789,
              "end": 1790,
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
        "start": 1508,
        "end": 1511,
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
      "start": 1829,
      "end": 1968,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1844,
        "end": 1968,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1850,
            "end": 1861,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1854,
                "end": 1860,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1854,
                  "end": 1855,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1858,
                  "end": 1860,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 1866,
            "end": 1952,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1886,
              "end": 1952,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1930,
                  "end": 1946,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1930,
                    "end": 1945,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1937,
                        "end": 1944,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1930,
                      "end": 1936,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1930,
                        "end": 1931,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1932,
                        "end": 1936,
                        "decorators": [],
                        "name": "push",
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
              "type": "BinaryExpression",
              "start": 1870,
              "end": 1884,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 1870,
                "end": 1878,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1870,
                  "end": 1871,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1872,
                  "end": 1878,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 1883,
                "end": 1884,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1957,
            "end": 1966,
            "argument": {
              "type": "Identifier",
              "start": 1964,
              "end": 1965,
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
        "start": 1838,
        "end": 1841,
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
      "start": 1970,
      "end": 2116,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1985,
        "end": 2116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1991,
            "end": 1997,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1995,
                "end": 1996,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1995,
                  "end": 1996,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2002,
            "end": 2009,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2002,
              "end": 2008,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2002,
                "end": 2003,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 2006,
                "end": 2008,
                "elements": []
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2014,
            "end": 2100,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2034,
              "end": 2100,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2078,
                  "end": 2094,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2078,
                    "end": 2093,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2085,
                        "end": 2092,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2078,
                      "end": 2084,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2078,
                        "end": 2079,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2080,
                        "end": 2084,
                        "decorators": [],
                        "name": "push",
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
              "type": "BinaryExpression",
              "start": 2018,
              "end": 2032,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 2018,
                "end": 2026,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2018,
                  "end": 2019,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2026,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 2031,
                "end": 2032,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2105,
            "end": 2114,
            "argument": {
              "type": "Identifier",
              "start": 2112,
              "end": 2113,
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
        "start": 1979,
        "end": 1982,
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
      "type": "FunctionDeclaration",
      "start": 2118,
      "end": 2254,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2133,
        "end": 2254,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2139,
            "end": 2150,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2143,
                "end": 2149,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2143,
                  "end": 2144,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2147,
                  "end": 2149,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 2155,
            "end": 2165,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2155,
              "end": 2164,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2162,
                  "end": 2163,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2155,
                "end": 2161,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2155,
                  "end": 2156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2161,
                  "decorators": [],
                  "name": "push",
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
            "start": 2170,
            "end": 2186,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2170,
              "end": 2185,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2177,
                  "end": 2184,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2170,
                "end": 2176,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2170,
                  "end": 2171,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2172,
                  "end": 2176,
                  "decorators": [],
                  "name": "push",
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
            "start": 2191,
            "end": 2204,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2191,
              "end": 2203,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2198,
                  "end": 2202,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2191,
                "end": 2197,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2191,
                  "end": 2192,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2193,
                  "end": 2197,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2209,
            "end": 2218,
            "argument": {
              "type": "Identifier",
              "start": 2216,
              "end": 2217,
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
        "start": 2127,
        "end": 2130,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2256,
      "end": 2394,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2271,
        "end": 2394,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2277,
            "end": 2290,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2283,
                "end": 2289,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2283,
                  "end": 2284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2287,
                  "end": 2289,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2295,
            "end": 2305,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2295,
              "end": 2304,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2302,
                  "end": 2303,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2295,
                "end": 2301,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2295,
                  "end": 2296,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2297,
                  "end": 2301,
                  "decorators": [],
                  "name": "push",
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
            "start": 2310,
            "end": 2326,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2310,
              "end": 2325,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2317,
                  "end": 2324,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2310,
                "end": 2316,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2310,
                  "end": 2311,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2312,
                  "end": 2316,
                  "decorators": [],
                  "name": "push",
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
            "start": 2331,
            "end": 2344,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2331,
              "end": 2343,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2338,
                  "end": 2342,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2331,
                "end": 2337,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2332,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2333,
                  "end": 2337,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2349,
            "end": 2358,
            "argument": {
              "type": "Identifier",
              "start": 2356,
              "end": 2357,
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
        "start": 2265,
        "end": 2268,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2396,
      "end": 2535,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2411,
        "end": 2535,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2417,
            "end": 2428,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2421,
                "end": 2427,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2421,
                  "end": 2422,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2425,
                  "end": 2427,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 2433,
            "end": 2506,
            "body": {
              "type": "BlockStatement",
              "start": 2448,
              "end": 2506,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 2458,
                  "end": 2475,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2473,
                    "end": 2475,
                    "body": []
                  },
                  "test": {
                    "type": "CallExpression",
                    "start": 2465,
                    "end": 2471,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2465,
                      "end": 2469,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2484,
                  "end": 2500,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2484,
                    "end": 2499,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2491,
                        "end": 2498,
                        "raw": "\"hello\"",
                        "value": "hello"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2484,
                      "end": 2490,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2484,
                        "end": 2485,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2486,
                        "end": 2490,
                        "decorators": [],
                        "name": "push",
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
              "type": "CallExpression",
              "start": 2440,
              "end": 2446,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2440,
                "end": 2444,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2511,
            "end": 2520,
            "argument": {
              "type": "Identifier",
              "start": 2518,
              "end": 2519,
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
        "start": 2405,
        "end": 2408,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2537,
      "end": 2728,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2552,
        "end": 2728,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2558,
            "end": 2564,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2562,
                "end": 2563,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2562,
                  "end": 2563,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 2569,
            "end": 2575,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2573,
                "end": 2574,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2573,
                  "end": 2574,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2580,
            "end": 2600,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2580,
              "end": 2599,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2597,
                  "end": 2598,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2580,
                "end": 2596,
                "computed": false,
                "object": {
                  "type": "SequenceExpression",
                  "start": 2581,
                  "end": 2590,
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "start": 2581,
                      "end": 2587,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2581,
                        "end": 2582,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 2585,
                        "end": 2587,
                        "elements": []
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 2589,
                      "end": 2590,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2592,
                  "end": 2596,
                  "decorators": [],
                  "name": "push",
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
            "start": 2605,
            "end": 2637,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2605,
              "end": 2636,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2631,
                  "end": 2635,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2605,
                "end": 2630,
                "computed": false,
                "object": {
                  "type": "SequenceExpression",
                  "start": 2606,
                  "end": 2624,
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "start": 2606,
                      "end": 2621,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2613,
                          "end": 2620,
                          "raw": "\"hello\"",
                          "value": "hello"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2606,
                        "end": 2612,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2606,
                          "end": 2607,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2608,
                          "end": 2612,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2623,
                      "end": 2624,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2626,
                  "end": 2630,
                  "decorators": [],
                  "name": "push",
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
            "start": 2642,
            "end": 2662,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2642,
              "end": 2661,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2642,
                "end": 2650,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 2644,
                  "end": 2645,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 2648,
                  "end": 2649,
                  "raw": "3",
                  "value": 3
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 2653,
                "end": 2661,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2655,
                    "end": 2659,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2655,
                      "end": 2656,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 2658,
                      "end": 2659,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2667,
            "end": 2676,
            "argument": {
              "type": "Identifier",
              "start": 2674,
              "end": 2675,
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
        "start": 2546,
        "end": 2549,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2730,
      "end": 2875,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2745,
        "end": 2875,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2751,
            "end": 2762,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2755,
                "end": 2761,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2755,
                  "end": 2756,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2759,
                  "end": 2761,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2767,
            "end": 2780,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2767,
              "end": 2779,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2777,
                  "end": 2778,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2767,
                "end": 2776,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2767,
                  "end": 2768,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2769,
                  "end": 2776,
                  "decorators": [],
                  "name": "unshift",
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
            "start": 2785,
            "end": 2804,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2785,
              "end": 2803,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2795,
                  "end": 2802,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2785,
                "end": 2794,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2785,
                  "end": 2786,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2787,
                  "end": 2794,
                  "decorators": [],
                  "name": "unshift",
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
            "start": 2809,
            "end": 2825,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2809,
              "end": 2824,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2819,
                  "end": 2823,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2809,
                "end": 2818,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2809,
                  "end": 2810,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2811,
                  "end": 2818,
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2830,
            "end": 2839,
            "argument": {
              "type": "Identifier",
              "start": 2837,
              "end": 2838,
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
        "start": 2739,
        "end": 2742,
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2877,
      "end": 3015,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2892,
        "end": 3015,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2898,
            "end": 2909,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2902,
                "end": 2908,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2902,
                  "end": 2903,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 2906,
                  "end": 2908,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 2914,
            "end": 2924,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2914,
              "end": 2923,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2921,
                  "end": 2922,
                  "raw": "5",
                  "value": 5
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2914,
                "end": 2920,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2914,
                  "end": 2915,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2916,
                  "end": 2920,
                  "decorators": [],
                  "name": "push",
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
            "start": 2929,
            "end": 2948,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2929,
              "end": 2947,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2939,
                  "end": 2946,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2929,
                "end": 2938,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2929,
                  "end": 2930,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2931,
                  "end": 2938,
                  "decorators": [],
                  "name": "unshift",
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
            "start": 2953,
            "end": 2965,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2953,
              "end": 2964,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2953,
                "end": 2957,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 2953,
                  "end": 2954,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 2955,
                  "end": 2956,
                  "raw": "2",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "start": 2960,
                "end": 2964,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2970,
            "end": 2979,
            "argument": {
              "type": "Identifier",
              "start": 2977,
              "end": 2978,
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
        "start": 2886,
        "end": 2889,
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3039,
      "end": 3090,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3056,
        "end": 3059,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3060,
          "end": 3082,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3063,
            "end": 3082,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 3065,
              "end": 3082,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 3065,
                "end": 3080,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3067,
                    "end": 3078,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3070,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3070,
                      "end": 3078,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3072,
                        "end": 3078
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3083,
        "end": 3089,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3085,
          "end": 3089
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3092,
      "end": 3104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3096,
          "end": 3104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3096,
            "end": 3099,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3102,
            "end": 3104,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 3105,
      "end": 3134,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3105,
        "end": 3133,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 3114,
            "end": 3132,
            "properties": [
              {
                "type": "Property",
                "start": 3116,
                "end": 3122,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3116,
                  "end": 3119,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 3121,
                  "end": 3122,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 3124,
                "end": 3130,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3124,
                  "end": 3127,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 3129,
                  "end": 3130,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 3105,
          "end": 3113,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 3105,
            "end": 3108,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3109,
            "end": 3113,
            "decorators": [],
            "name": "push",
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
      "start": 3135,
      "end": 3144,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3135,
        "end": 3143,
        "arguments": [
          {
            "type": "Identifier",
            "start": 3139,
            "end": 3142,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3135,
          "end": 3138,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
