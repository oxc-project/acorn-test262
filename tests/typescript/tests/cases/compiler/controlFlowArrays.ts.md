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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "cond",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 167,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 66,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 65,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 80,
            "expression": {
              "type": "AssignmentExpression",
              "start": 71,
              "end": 79,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 71,
                "end": 75,
                "object": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 73,
                  "end": 74,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "value": 5,
                "raw": "5"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 100,
            "expression": {
              "type": "AssignmentExpression",
              "start": 85,
              "end": 99,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 85,
                "end": 89,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 87,
                  "end": 88,
                  "value": 1,
                  "raw": "1"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 92,
                "end": 99,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 117,
            "expression": {
              "type": "AssignmentExpression",
              "start": 105,
              "end": 116,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 105,
                "end": 109,
                "object": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "value": 2,
                  "raw": "2"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 112,
                "end": 116,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 180,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 304,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 189,
            "end": 200,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 193,
                "end": 199,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 215,
            "expression": {
              "type": "CallExpression",
              "start": 205,
              "end": 214,
              "callee": {
                "type": "MemberExpression",
                "start": 205,
                "end": 211,
                "object": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 211,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 212,
                  "end": 213,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 220,
            "end": 236,
            "expression": {
              "type": "CallExpression",
              "start": 220,
              "end": 235,
              "callee": {
                "type": "MemberExpression",
                "start": 220,
                "end": 226,
                "object": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 226,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 227,
                  "end": 234,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 254,
            "expression": {
              "type": "CallExpression",
              "start": 241,
              "end": 253,
              "callee": {
                "type": "MemberExpression",
                "start": 241,
                "end": 247,
                "object": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 242,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 247,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 248,
                  "end": 252,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 306,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 317,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 408,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 326,
            "end": 332,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 330,
                "end": 331,
                "id": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 337,
            "end": 344,
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
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 349,
            "end": 368,
            "expression": {
              "type": "CallExpression",
              "start": 349,
              "end": 367,
              "callee": {
                "type": "MemberExpression",
                "start": 349,
                "end": 355,
                "object": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 356,
                  "end": 357,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 359,
                  "end": 366,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 410,
      "end": 566,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 421,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 424,
        "end": 566,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 430,
            "end": 441,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 434,
                "end": 440,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 446,
            "end": 526,
            "test": {
              "type": "CallExpression",
              "start": 450,
              "end": 456,
              "callee": {
                "type": "Identifier",
                "start": 450,
                "end": 454,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 468,
                    "end": 477,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 468,
                      "end": 474,
                      "object": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 469,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 474,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 475,
                        "end": 476,
                        "value": 5,
                        "raw": "5"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 494,
              "end": 526,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 504,
                  "end": 520,
                  "expression": {
                    "type": "CallExpression",
                    "start": 504,
                    "end": 519,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 504,
                      "end": 510,
                      "object": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 505,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 510,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 511,
                        "end": 518,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 568,
      "end": 751,
      "id": {
        "type": "Identifier",
        "start": 577,
        "end": 579,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 582,
        "end": 751,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 588,
            "end": 594,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 592,
                "end": 593,
                "id": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 593,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 599,
            "end": 711,
            "test": {
              "type": "CallExpression",
              "start": 603,
              "end": 609,
              "callee": {
                "type": "Identifier",
                "start": 603,
                "end": 607,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 647,
                  "expression": {
                    "type": "CallExpression",
                    "start": 637,
                    "end": 646,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 637,
                      "end": 643,
                      "object": {
                        "type": "Identifier",
                        "start": 637,
                        "end": 638,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 643,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 644,
                        "end": 645,
                        "value": 5,
                        "raw": "5"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 663,
              "end": 711,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 673,
                  "end": 680,
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
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 689,
                  "end": 705,
                  "expression": {
                    "type": "CallExpression",
                    "start": 689,
                    "end": 704,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 689,
                      "end": 695,
                      "object": {
                        "type": "Identifier",
                        "start": 689,
                        "end": 690,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 695,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 696,
                        "end": 703,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 753,
      "end": 914,
      "id": {
        "type": "Identifier",
        "start": 762,
        "end": 764,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 767,
        "end": 914,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 773,
            "end": 779,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 777,
                "end": 778,
                "id": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 778,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 784,
            "end": 876,
            "test": {
              "type": "CallExpression",
              "start": 788,
              "end": 794,
              "callee": {
                "type": "Identifier",
                "start": 788,
                "end": 792,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                      "value": 5,
                      "raw": "5"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 828,
              "end": 876,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 838,
                  "end": 845,
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
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 854,
                  "end": 870,
                  "expression": {
                    "type": "CallExpression",
                    "start": 854,
                    "end": 869,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 854,
                      "end": 860,
                      "object": {
                        "type": "Identifier",
                        "start": 854,
                        "end": 855,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 856,
                        "end": 860,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 861,
                        "end": 868,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 916,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 925,
        "end": 927,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 930,
        "end": 1089,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 936,
            "end": 949,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 940,
                "end": 948,
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
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 954,
            "end": 1053,
            "test": {
              "type": "CallExpression",
              "start": 958,
              "end": 964,
              "callee": {
                "type": "Identifier",
                "start": 958,
                "end": 962,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 966,
              "end": 1053,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 976,
                  "end": 983,
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
                  },
                  "directive": null
                },
                {
                  "type": "WhileStatement",
                  "start": 992,
                  "end": 1047,
                  "test": {
                    "type": "CallExpression",
                    "start": 999,
                    "end": 1005,
                    "callee": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1003,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1007,
                    "end": 1047,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1021,
                        "end": 1037,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1021,
                          "end": 1036,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1021,
                            "end": 1027,
                            "object": {
                              "type": "Identifier",
                              "start": 1021,
                              "end": 1022,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1023,
                              "end": 1027,
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1028,
                              "end": 1035,
                              "value": "hello",
                              "raw": "\"hello\""
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1091,
      "end": 1315,
      "id": {
        "type": "Identifier",
        "start": 1100,
        "end": 1102,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1105,
        "end": 1315,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1111,
            "end": 1122,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1115,
                "end": 1121,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1127,
            "end": 1137,
            "expression": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1136,
              "callee": {
                "type": "MemberExpression",
                "start": 1127,
                "end": 1133,
                "object": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1128,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1129,
                  "end": 1133,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1134,
                  "end": 1135,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1142,
            "end": 1163,
            "test": {
              "type": "CallExpression",
              "start": 1146,
              "end": 1152,
              "callee": {
                "type": "Identifier",
                "start": 1146,
                "end": 1150,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
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
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1181,
            "end": 1197,
            "expression": {
              "type": "CallExpression",
              "start": 1181,
              "end": 1196,
              "callee": {
                "type": "MemberExpression",
                "start": 1181,
                "end": 1187,
                "object": {
                  "type": "Identifier",
                  "start": 1181,
                  "end": 1182,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1183,
                  "end": 1187,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1188,
                  "end": 1195,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1202,
            "end": 1223,
            "test": {
              "type": "CallExpression",
              "start": 1206,
              "end": 1212,
              "callee": {
                "type": "Identifier",
                "start": 1206,
                "end": 1210,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
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
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1252,
            "end": 1265,
            "expression": {
              "type": "CallExpression",
              "start": 1252,
              "end": 1264,
              "callee": {
                "type": "MemberExpression",
                "start": 1252,
                "end": 1258,
                "object": {
                  "type": "Identifier",
                  "start": 1252,
                  "end": 1253,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1258,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1259,
                  "end": 1263,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1317,
      "end": 1497,
      "id": {
        "type": "Identifier",
        "start": 1326,
        "end": 1328,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1331,
        "end": 1497,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1337,
            "end": 1348,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1341,
                "end": 1347,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1353,
            "end": 1495,
            "test": {
              "type": "CallExpression",
              "start": 1357,
              "end": 1363,
              "callee": {
                "type": "Identifier",
                "start": 1357,
                "end": 1361,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 1375,
                    "end": 1384,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1375,
                      "end": 1381,
                      "object": {
                        "type": "Identifier",
                        "start": 1375,
                        "end": 1376,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1377,
                        "end": 1381,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1382,
                        "end": 1383,
                        "value": 5,
                        "raw": "5"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
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
            "alternate": {
              "type": "BlockStatement",
              "start": 1432,
              "end": 1495,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1442,
                  "end": 1458,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1442,
                    "end": 1457,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1442,
                      "end": 1448,
                      "object": {
                        "type": "Identifier",
                        "start": 1442,
                        "end": 1443,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1444,
                        "end": 1448,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1449,
                        "end": 1456,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
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
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1499,
      "end": 1827,
      "id": {
        "type": "Identifier",
        "start": 1508,
        "end": 1511,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1514,
        "end": 1827,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1520,
            "end": 1531,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1524,
                "end": 1530,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1536,
            "end": 1761,
            "test": {
              "type": "CallExpression",
              "start": 1540,
              "end": 1546,
              "callee": {
                "type": "Identifier",
                "start": 1540,
                "end": 1544,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 1558,
                    "end": 1570,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1558,
                      "end": 1564,
                      "object": {
                        "type": "Identifier",
                        "start": 1558,
                        "end": 1559,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1560,
                        "end": 1564,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1565,
                        "end": 1569,
                        "value": true,
                        "raw": "true"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1580,
                  "end": 1582,
                  "expression": {
                    "type": "Identifier",
                    "start": 1580,
                    "end": 1581,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1612,
              "end": 1761,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1622,
                  "end": 1632,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1622,
                    "end": 1631,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1622,
                      "end": 1628,
                      "object": {
                        "type": "Identifier",
                        "start": 1622,
                        "end": 1623,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1624,
                        "end": 1628,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1629,
                        "end": 1630,
                        "value": 5,
                        "raw": "5"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1641,
                  "end": 1643,
                  "expression": {
                    "type": "Identifier",
                    "start": 1641,
                    "end": 1642,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "WhileStatement",
                  "start": 1665,
                  "end": 1720,
                  "test": {
                    "type": "CallExpression",
                    "start": 1672,
                    "end": 1678,
                    "callee": {
                      "type": "Identifier",
                      "start": 1672,
                      "end": 1676,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1680,
                    "end": 1720,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1694,
                        "end": 1710,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1694,
                          "end": 1709,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1694,
                            "end": 1700,
                            "object": {
                              "type": "Identifier",
                              "start": 1694,
                              "end": 1695,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1696,
                              "end": 1700,
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 1701,
                              "end": 1708,
                              "value": "hello",
                              "raw": "\"hello\""
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1729,
                  "end": 1731,
                  "expression": {
                    "type": "Identifier",
                    "start": 1729,
                    "end": 1730,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1766,
            "end": 1777,
            "expression": {
              "type": "CallExpression",
              "start": 1766,
              "end": 1776,
              "callee": {
                "type": "MemberExpression",
                "start": 1766,
                "end": 1772,
                "object": {
                  "type": "Identifier",
                  "start": 1766,
                  "end": 1767,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1768,
                  "end": 1772,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1773,
                  "end": 1775,
                  "value": 99,
                  "raw": "99"
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1829,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1838,
        "end": 1841,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1844,
        "end": 1968,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1850,
            "end": 1861,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1854,
                "end": 1860,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1866,
            "end": 1952,
            "test": {
              "type": "BinaryExpression",
              "start": 1870,
              "end": 1884,
              "left": {
                "type": "MemberExpression",
                "start": 1870,
                "end": 1878,
                "object": {
                  "type": "Identifier",
                  "start": 1870,
                  "end": 1871,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1872,
                  "end": 1878,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1883,
                "end": 1884,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1886,
              "end": 1952,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1930,
                  "end": 1946,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1930,
                    "end": 1945,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1930,
                      "end": 1936,
                      "object": {
                        "type": "Identifier",
                        "start": 1930,
                        "end": 1931,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1932,
                        "end": 1936,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1937,
                        "end": 1944,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1970,
      "end": 2116,
      "id": {
        "type": "Identifier",
        "start": 1979,
        "end": 1982,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1985,
        "end": 2116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1991,
            "end": 1997,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1995,
                "end": 1996,
                "id": {
                  "type": "Identifier",
                  "start": 1995,
                  "end": 1996,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2002,
            "end": 2009,
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
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2014,
            "end": 2100,
            "test": {
              "type": "BinaryExpression",
              "start": 2018,
              "end": 2032,
              "left": {
                "type": "MemberExpression",
                "start": 2018,
                "end": 2026,
                "object": {
                  "type": "Identifier",
                  "start": 2018,
                  "end": 2019,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2026,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2031,
                "end": 2032,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2034,
              "end": 2100,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2078,
                  "end": 2094,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2078,
                    "end": 2093,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2078,
                      "end": 2084,
                      "object": {
                        "type": "Identifier",
                        "start": 2078,
                        "end": 2079,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2080,
                        "end": 2084,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2085,
                        "end": 2092,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2118,
      "end": 2254,
      "id": {
        "type": "Identifier",
        "start": 2127,
        "end": 2130,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2133,
        "end": 2254,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2139,
            "end": 2150,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2143,
                "end": 2149,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2155,
            "end": 2165,
            "expression": {
              "type": "CallExpression",
              "start": 2155,
              "end": 2164,
              "callee": {
                "type": "MemberExpression",
                "start": 2155,
                "end": 2161,
                "object": {
                  "type": "Identifier",
                  "start": 2155,
                  "end": 2156,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2161,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2162,
                  "end": 2163,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2170,
            "end": 2186,
            "expression": {
              "type": "CallExpression",
              "start": 2170,
              "end": 2185,
              "callee": {
                "type": "MemberExpression",
                "start": 2170,
                "end": 2176,
                "object": {
                  "type": "Identifier",
                  "start": 2170,
                  "end": 2171,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2172,
                  "end": 2176,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2177,
                  "end": 2184,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2191,
            "end": 2204,
            "expression": {
              "type": "CallExpression",
              "start": 2191,
              "end": 2203,
              "callee": {
                "type": "MemberExpression",
                "start": 2191,
                "end": 2197,
                "object": {
                  "type": "Identifier",
                  "start": 2191,
                  "end": 2192,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2193,
                  "end": 2197,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2198,
                  "end": 2202,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2256,
      "end": 2394,
      "id": {
        "type": "Identifier",
        "start": 2265,
        "end": 2268,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2271,
        "end": 2394,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2277,
            "end": 2290,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2283,
                "end": 2289,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2295,
            "end": 2305,
            "expression": {
              "type": "CallExpression",
              "start": 2295,
              "end": 2304,
              "callee": {
                "type": "MemberExpression",
                "start": 2295,
                "end": 2301,
                "object": {
                  "type": "Identifier",
                  "start": 2295,
                  "end": 2296,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2297,
                  "end": 2301,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2302,
                  "end": 2303,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2310,
            "end": 2326,
            "expression": {
              "type": "CallExpression",
              "start": 2310,
              "end": 2325,
              "callee": {
                "type": "MemberExpression",
                "start": 2310,
                "end": 2316,
                "object": {
                  "type": "Identifier",
                  "start": 2310,
                  "end": 2311,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2312,
                  "end": 2316,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2317,
                  "end": 2324,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2331,
            "end": 2344,
            "expression": {
              "type": "CallExpression",
              "start": 2331,
              "end": 2343,
              "callee": {
                "type": "MemberExpression",
                "start": 2331,
                "end": 2337,
                "object": {
                  "type": "Identifier",
                  "start": 2331,
                  "end": 2332,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2333,
                  "end": 2337,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2338,
                  "end": 2342,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2396,
      "end": 2535,
      "id": {
        "type": "Identifier",
        "start": 2405,
        "end": 2408,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2411,
        "end": 2535,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2417,
            "end": 2428,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2421,
                "end": 2427,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 2433,
            "end": 2506,
            "test": {
              "type": "CallExpression",
              "start": 2440,
              "end": 2446,
              "callee": {
                "type": "Identifier",
                "start": 2440,
                "end": 2444,
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 2448,
              "end": 2506,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 2458,
                  "end": 2475,
                  "test": {
                    "type": "CallExpression",
                    "start": 2465,
                    "end": 2471,
                    "callee": {
                      "type": "Identifier",
                      "start": 2465,
                      "end": 2469,
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 2473,
                    "end": 2475,
                    "body": []
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2484,
                  "end": 2500,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2484,
                    "end": 2499,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2484,
                      "end": 2490,
                      "object": {
                        "type": "Identifier",
                        "start": 2484,
                        "end": 2485,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2486,
                        "end": 2490,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 2491,
                        "end": 2498,
                        "value": "hello",
                        "raw": "\"hello\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2537,
      "end": 2728,
      "id": {
        "type": "Identifier",
        "start": 2546,
        "end": 2549,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2552,
        "end": 2728,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2558,
            "end": 2564,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2562,
                "end": 2563,
                "id": {
                  "type": "Identifier",
                  "start": 2562,
                  "end": 2563,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2569,
            "end": 2575,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2573,
                "end": 2574,
                "id": {
                  "type": "Identifier",
                  "start": 2573,
                  "end": 2574,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2580,
            "end": 2600,
            "expression": {
              "type": "CallExpression",
              "start": 2580,
              "end": 2599,
              "callee": {
                "type": "MemberExpression",
                "start": 2580,
                "end": 2596,
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
                "property": {
                  "type": "Identifier",
                  "start": 2592,
                  "end": 2596,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2597,
                  "end": 2598,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2605,
            "end": 2637,
            "expression": {
              "type": "CallExpression",
              "start": 2605,
              "end": 2636,
              "callee": {
                "type": "MemberExpression",
                "start": 2605,
                "end": 2630,
                "object": {
                  "type": "SequenceExpression",
                  "start": 2606,
                  "end": 2624,
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "start": 2606,
                      "end": 2621,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2606,
                        "end": 2612,
                        "object": {
                          "type": "Identifier",
                          "start": 2606,
                          "end": 2607,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2608,
                          "end": 2612,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 2613,
                          "end": 2620,
                          "value": "hello",
                          "raw": "\"hello\""
                        }
                      ],
                      "optional": false
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
                "property": {
                  "type": "Identifier",
                  "start": 2626,
                  "end": 2630,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2631,
                  "end": 2635,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2642,
            "end": 2662,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2642,
              "end": 2661,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2642,
                "end": 2650,
                "object": {
                  "type": "Identifier",
                  "start": 2644,
                  "end": 2645,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 2648,
                  "end": 2649,
                  "value": 3,
                  "raw": "3"
                },
                "optional": false,
                "computed": true
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2655,
                      "end": 2656,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2658,
                      "end": 2659,
                      "value": 1,
                      "raw": "1"
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2730,
      "end": 2875,
      "id": {
        "type": "Identifier",
        "start": 2739,
        "end": 2742,
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2745,
        "end": 2875,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2751,
            "end": 2762,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2755,
                "end": 2761,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2767,
            "end": 2780,
            "expression": {
              "type": "CallExpression",
              "start": 2767,
              "end": 2779,
              "callee": {
                "type": "MemberExpression",
                "start": 2767,
                "end": 2776,
                "object": {
                  "type": "Identifier",
                  "start": 2767,
                  "end": 2768,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2769,
                  "end": 2776,
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2777,
                  "end": 2778,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2785,
            "end": 2804,
            "expression": {
              "type": "CallExpression",
              "start": 2785,
              "end": 2803,
              "callee": {
                "type": "MemberExpression",
                "start": 2785,
                "end": 2794,
                "object": {
                  "type": "Identifier",
                  "start": 2785,
                  "end": 2786,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2787,
                  "end": 2794,
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2795,
                  "end": 2802,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2809,
            "end": 2825,
            "expression": {
              "type": "CallExpression",
              "start": 2809,
              "end": 2824,
              "callee": {
                "type": "MemberExpression",
                "start": 2809,
                "end": 2818,
                "object": {
                  "type": "Identifier",
                  "start": 2809,
                  "end": 2810,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2811,
                  "end": 2818,
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2819,
                  "end": 2823,
                  "value": true,
                  "raw": "true"
                }
              ],
              "optional": false
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2877,
      "end": 3015,
      "id": {
        "type": "Identifier",
        "start": 2886,
        "end": 2889,
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2892,
        "end": 3015,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2898,
            "end": 2909,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2902,
                "end": 2908,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2914,
            "end": 2924,
            "expression": {
              "type": "CallExpression",
              "start": 2914,
              "end": 2923,
              "callee": {
                "type": "MemberExpression",
                "start": 2914,
                "end": 2920,
                "object": {
                  "type": "Identifier",
                  "start": 2914,
                  "end": 2915,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2916,
                  "end": 2920,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2921,
                  "end": 2922,
                  "value": 5,
                  "raw": "5"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2929,
            "end": 2948,
            "expression": {
              "type": "CallExpression",
              "start": 2929,
              "end": 2947,
              "callee": {
                "type": "MemberExpression",
                "start": 2929,
                "end": 2938,
                "object": {
                  "type": "Identifier",
                  "start": 2929,
                  "end": 2930,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2931,
                  "end": 2938,
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 2939,
                  "end": 2946,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2953,
            "end": 2965,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2953,
              "end": 2964,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2953,
                "end": 2957,
                "object": {
                  "type": "Identifier",
                  "start": 2953,
                  "end": 2954,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 2955,
                  "end": 2956,
                  "value": 2,
                  "raw": "2"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 2960,
                "end": 2964,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
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
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3039,
      "end": 3090,
      "id": {
        "type": "Identifier",
        "start": 3056,
        "end": 3059,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3070,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3070,
                      "end": 3078,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3072,
                        "end": 3078
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3092,
      "end": 3104,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3096,
          "end": 3104,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3105,
      "end": 3134,
      "expression": {
        "type": "CallExpression",
        "start": 3105,
        "end": 3133,
        "callee": {
          "type": "MemberExpression",
          "start": 3105,
          "end": 3113,
          "object": {
            "type": "Identifier",
            "start": 3105,
            "end": 3108,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 3109,
            "end": 3113,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3116,
                  "end": 3119,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3121,
                  "end": 3122,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 3124,
                "end": 3130,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3124,
                  "end": 3127,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3129,
                  "end": 3130,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3135,
      "end": 3144,
      "expression": {
        "type": "CallExpression",
        "start": 3135,
        "end": 3143,
        "callee": {
          "type": "Identifier",
          "start": 3135,
          "end": 3138,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
