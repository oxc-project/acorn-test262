__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1434,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 42,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 24,
          "end": 42,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 33,
              "end": 42
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 45,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
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
        "start": 59,
        "end": 171,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 65,
            "end": 79,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 69,
                "end": 78,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 78,
                  "callee": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 76,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 84,
            "end": 169,
            "test": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 91,
              "end": 119,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 101,
                  "end": 103,
                  "expression": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 129,
              "end": 169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 139,
                  "end": 141,
                  "expression": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 173,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
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
        "start": 187,
        "end": 326,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 193,
            "end": 219,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 197,
                "end": 218,
                "id": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 218,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 198,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 200,
                      "end": 218,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 200,
                          "end": 206
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 209,
                          "end": 218
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 224,
            "end": 234,
            "expression": {
              "type": "AssignmentExpression",
              "start": 224,
              "end": 233,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 228,
                "end": 233,
                "callee": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 239,
            "end": 324,
            "test": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 246,
              "end": 274,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 256,
                  "end": 258,
                  "expression": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 257,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 284,
              "end": 324,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 294,
                  "end": 296,
                  "expression": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 328,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 339,
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
        "start": 342,
        "end": 474,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 348,
            "end": 374,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 352,
                "end": 373,
                "id": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 373,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 355,
                      "end": 373,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 355,
                          "end": 361
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 364,
                          "end": 373
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 379,
            "end": 472,
            "test": {
              "type": "AssignmentExpression",
              "start": 383,
              "end": 392,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 387,
                "end": 392,
                "callee": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 390,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 394,
              "end": 422,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 404,
                  "end": 406,
                  "expression": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 405,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 432,
              "end": 472,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 442,
                  "end": 444,
                  "expression": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 476,
      "end": 625,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 487,
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
        "start": 490,
        "end": 625,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 496,
            "end": 522,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 500,
                "end": 521,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 521,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 521,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 503,
                      "end": 521,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 512,
                          "end": 521
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 527,
            "end": 623,
            "test": {
              "type": "UnaryExpression",
              "start": 531,
              "end": 543,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "AssignmentExpression",
                "start": 533,
                "end": 542,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 534,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 537,
                  "end": 542,
                  "callee": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 540,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 545,
              "end": 585,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 555,
                  "end": 557,
                  "expression": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 556,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 595,
              "end": 623,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 605,
                  "end": 607,
                  "expression": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 627,
      "end": 874,
      "id": {
        "type": "Identifier",
        "start": 636,
        "end": 638,
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
        "start": 641,
        "end": 874,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 647,
            "end": 673,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 651,
                "end": 672,
                "id": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 672,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 652,
                    "end": 672,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 654,
                      "end": 672,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 654,
                          "end": 660
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 663,
                          "end": 672
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 678,
            "end": 704,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 682,
                "end": 703,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 703,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 683,
                    "end": 703,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 685,
                      "end": 703,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 685,
                          "end": 691
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 694,
                          "end": 703
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 709,
            "end": 872,
            "test": {
              "type": "AssignmentExpression",
              "start": 713,
              "end": 726,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 717,
                "end": 726,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 718,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 721,
                  "end": 726,
                  "callee": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 724,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 728,
              "end": 789,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 738,
                  "end": 740,
                  "expression": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 739,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 759,
                  "end": 761,
                  "expression": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 760,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 799,
              "end": 872,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 809,
                  "end": 811,
                  "expression": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 842,
                  "end": 844,
                  "expression": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 843,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 876,
      "end": 1130,
      "id": {
        "type": "Identifier",
        "start": 885,
        "end": 887,
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
        "start": 890,
        "end": 1130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 896,
            "end": 922,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 900,
                "end": 921,
                "id": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 921,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 901,
                    "end": 921,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 903,
                      "end": 921,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 903,
                          "end": 909
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 912,
                          "end": 921
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 927,
            "end": 953,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 931,
                "end": 952,
                "id": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 952,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 932,
                    "end": 952,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 934,
                      "end": 952,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 934,
                          "end": 940
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 943,
                          "end": 952
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 958,
            "end": 1128,
            "test": {
              "type": "SequenceExpression",
              "start": 962,
              "end": 982,
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "start": 962,
                  "end": 971,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 962,
                    "end": 963,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 966,
                    "end": 971,
                    "callee": {
                      "type": "Identifier",
                      "start": 966,
                      "end": 969,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "AssignmentExpression",
                  "start": 973,
                  "end": 982,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 973,
                    "end": 974,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 977,
                    "end": 982,
                    "callee": {
                      "type": "Identifier",
                      "start": 977,
                      "end": 980,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 984,
              "end": 1045,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 994,
                  "end": 996,
                  "expression": {
                    "type": "Identifier",
                    "start": 994,
                    "end": 995,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1027,
                  "end": 1029,
                  "expression": {
                    "type": "Identifier",
                    "start": 1027,
                    "end": 1028,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1055,
              "end": 1128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1065,
                  "end": 1067,
                  "expression": {
                    "type": "Identifier",
                    "start": 1065,
                    "end": 1066,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1098,
                  "end": 1100,
                  "expression": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1099,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 1132,
      "end": 1224,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1143,
        "name": "f7",
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
          "start": 1144,
          "end": 1149,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1145,
            "end": 1149,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1147,
              "end": 1149,
              "members": []
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1151,
        "end": 1224,
        "body": [
          {
            "type": "IfStatement",
            "start": 1157,
            "end": 1222,
            "test": {
              "type": "Identifier",
              "start": 1161,
              "end": 1162,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1164,
              "end": 1188,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1174,
                  "end": 1176,
                  "expression": {
                    "type": "Identifier",
                    "start": 1174,
                    "end": 1175,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1198,
              "end": 1222,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1208,
                  "end": 1210,
                  "expression": {
                    "type": "Identifier",
                    "start": 1208,
                    "end": 1209,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
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
      "start": 1226,
      "end": 1320,
      "id": {
        "type": "Identifier",
        "start": 1235,
        "end": 1237,
        "name": "f8",
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
          "start": 1241,
          "end": 1245,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1242,
            "end": 1245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1244,
              "end": 1245,
              "typeName": {
                "type": "Identifier",
                "start": 1244,
                "end": 1245,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1247,
        "end": 1320,
        "body": [
          {
            "type": "IfStatement",
            "start": 1253,
            "end": 1318,
            "test": {
              "type": "Identifier",
              "start": 1257,
              "end": 1258,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1260,
              "end": 1284,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1270,
                  "end": 1272,
                  "expression": {
                    "type": "Identifier",
                    "start": 1270,
                    "end": 1271,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1294,
              "end": 1318,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1304,
                  "end": 1306,
                  "expression": {
                    "type": "Identifier",
                    "start": 1304,
                    "end": 1305,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1237,
        "end": 1240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1238,
            "end": 1239,
            "name": {
              "type": "Identifier",
              "start": 1238,
              "end": 1239,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1322,
      "end": 1434,
      "id": {
        "type": "Identifier",
        "start": 1331,
        "end": 1333,
        "name": "f9",
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
          "start": 1352,
          "end": 1356,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1353,
            "end": 1356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1355,
              "end": 1356,
              "typeName": {
                "type": "Identifier",
                "start": 1355,
                "end": 1356,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1358,
        "end": 1434,
        "body": [
          {
            "type": "IfStatement",
            "start": 1364,
            "end": 1432,
            "test": {
              "type": "Identifier",
              "start": 1368,
              "end": 1369,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1371,
              "end": 1395,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1381,
                  "end": 1383,
                  "expression": {
                    "type": "Identifier",
                    "start": 1381,
                    "end": 1382,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1405,
              "end": 1432,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1415,
                  "end": 1417,
                  "expression": {
                    "type": "Identifier",
                    "start": 1415,
                    "end": 1416,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1333,
        "end": 1351,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1334,
            "end": 1350,
            "name": {
              "type": "Identifier",
              "start": 1334,
              "end": 1335,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1344,
              "end": 1350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
