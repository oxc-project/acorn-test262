controlFlowTruthiness.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 73,
                  "end": 78,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 76,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 84,
            "end": 169,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 326,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 218,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 228,
                "end": 233,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 231,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 239,
            "end": 324,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 328,
      "end": 474,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 373,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 379,
            "end": 472,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "AssignmentExpression",
              "start": 383,
              "end": 392,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 387,
                "end": 392,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 390,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
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
        "start": 337,
        "end": 339,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 625,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 521,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 527,
            "end": 623,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 531,
              "end": 543,
              "argument": {
                "type": "AssignmentExpression",
                "start": 533,
                "end": 542,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 534,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 537,
                  "end": 542,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 540,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
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
        "start": 485,
        "end": 487,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 627,
      "end": 874,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 672,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 703,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 709,
            "end": 872,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 842,
                  "end": 844,
                  "expression": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 843,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 759,
                  "end": 761,
                  "expression": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 760,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "AssignmentExpression",
              "start": 713,
              "end": 726,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "decorators": [],
                "name": "x",
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
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 721,
                  "end": 726,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 724,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                }
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
        "start": 636,
        "end": 638,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 876,
      "end": 1130,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 921,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 931,
                  "end": 952,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 958,
            "end": 1128,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1098,
                  "end": 1100,
                  "expression": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1099,
                    "decorators": [],
                    "name": "y",
                    "optional": false
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1027,
                  "end": 1029,
                  "expression": {
                    "type": "Identifier",
                    "start": 1027,
                    "end": 1028,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 966,
                    "end": 971,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 966,
                      "end": 969,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
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
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 977,
                    "end": 982,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 977,
                      "end": 980,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false
                  }
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
        "start": 885,
        "end": 887,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1132,
      "end": 1224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1151,
        "end": 1224,
        "body": [
          {
            "type": "IfStatement",
            "start": 1157,
            "end": 1222,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1161,
              "end": 1162,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1143,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1144,
          "end": 1149,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1226,
      "end": 1320,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1247,
        "end": 1320,
        "body": [
          {
            "type": "IfStatement",
            "start": 1253,
            "end": 1318,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1257,
              "end": 1258,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1235,
        "end": 1237,
        "decorators": [],
        "name": "f8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1241,
          "end": 1245,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1237,
        "end": 1240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1238,
            "end": 1239,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1238,
              "end": 1239,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1322,
      "end": 1434,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1358,
        "end": 1434,
        "body": [
          {
            "type": "IfStatement",
            "start": 1364,
            "end": 1432,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1368,
              "end": 1369,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1331,
        "end": 1333,
        "decorators": [],
        "name": "f9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1352,
          "end": 1356,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1333,
        "end": 1351,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1334,
            "end": 1350,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1344,
              "end": 1350
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1334,
              "end": 1335,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
