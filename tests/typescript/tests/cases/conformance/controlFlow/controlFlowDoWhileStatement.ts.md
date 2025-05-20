__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1320,
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
      "start": 19,
      "end": 124,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 124,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 38,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 42,
                "end": 60,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 45,
                      "end": 60,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
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
            "start": 66,
            "end": 73,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 72,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 78,
            "end": 122,
            "body": {
              "type": "BlockStatement",
              "start": 81,
              "end": 109,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 91,
                  "end": 93,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
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
              "start": 117,
              "end": 121,
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
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 261,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 261,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 144,
            "end": 167,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 166,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 166,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 151,
                      "end": 166,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 151,
                          "end": 157
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 160,
                          "end": 166
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
            "start": 172,
            "end": 179,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 172,
              "end": 178,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 176,
                "end": 178,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 184,
            "end": 259,
            "body": {
              "type": "BlockStatement",
              "start": 187,
              "end": 246,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 197,
                  "end": 199,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 218,
                  "end": 225,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 218,
                    "end": 224,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 222,
                      "end": 224,
                      "raw": "42",
                      "value": 42
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 234,
                  "end": 240,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 254,
              "end": 258,
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
        "start": 134,
        "end": 135,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 262,
      "end": 450,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 275,
        "end": 450,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 281,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 285,
                "end": 303,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 303,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 286,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 288,
                      "end": 303,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 288,
                          "end": 294
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
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
            "start": 309,
            "end": 316,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 309,
              "end": 315,
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
                "end": 315,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 321,
            "end": 448,
            "body": {
              "type": "BlockStatement",
              "start": 324,
              "end": 435,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 334,
                  "end": 336,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 335,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 355,
                  "end": 369,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 355,
                    "end": 368,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 356,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 368,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 378,
                  "end": 414,
                  "alternate": null,
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 405,
                    "end": 414,
                    "label": null
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 382,
                    "end": 403,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 382,
                      "end": 390,
                      "argument": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
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
                      "start": 395,
                      "end": 403,
                      "raw": "\"string\"",
                      "value": "string"
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 423,
                  "end": 429,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 443,
              "end": 447,
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
        "start": 271,
        "end": 272,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 451,
      "end": 599,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 464,
        "end": 599,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 470,
            "end": 493,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 474,
                "end": 492,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 492,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 477,
                      "end": 492,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 477,
                          "end": 483
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 486,
                          "end": 492
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
            "start": 498,
            "end": 507,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 498,
              "end": 506,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 502,
                "end": 506,
                "raw": "1000",
                "value": 1000
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 512,
            "end": 580,
            "body": {
              "type": "BlockStatement",
              "start": 515,
              "end": 559,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 525,
                  "end": 527,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 546,
                  "end": 553,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 546,
                    "end": 552,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 550,
                      "end": 552,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "AssignmentExpression",
              "start": 567,
              "end": 579,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 567,
                "end": 568,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 571,
                "end": 579,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 579,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 587,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
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
        "start": 460,
        "end": 461,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 600,
      "end": 717,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 613,
        "end": 717,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 619,
            "end": 642,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 623,
                "end": 641,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 641,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 624,
                    "end": 641,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 626,
                      "end": 641,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 626,
                          "end": 632
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 635,
                          "end": 641
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
            "start": 647,
            "end": 654,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 647,
              "end": 653,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 651,
                "end": 653,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 659,
            "end": 698,
            "body": {
              "type": "BlockStatement",
              "start": 662,
              "end": 685,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 672,
                  "end": 679,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 672,
                    "end": 678,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 676,
                      "end": 678,
                      "raw": "42",
                      "value": 42
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 693,
              "end": 697,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 703,
            "end": 705,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 703,
              "end": 704,
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
        "start": 609,
        "end": 610,
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 1028,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 731,
        "end": 1028,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 737,
            "end": 790,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 741,
                "end": 789,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 789,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 742,
                    "end": 789,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 744,
                      "end": 789,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 744,
                          "end": 750
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 753,
                          "end": 759
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 762,
                          "end": 769
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 772,
                          "end": 778,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 778,
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 781,
                          "end": 789,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 781,
                            "end": 789,
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
            "start": 795,
            "end": 802,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 795,
              "end": 801,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 795,
                "end": 796,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 799,
                "end": 801,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 807,
            "end": 990,
            "body": {
              "type": "BlockStatement",
              "start": 810,
              "end": 977,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 820,
                  "end": 880,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 830,
                    "end": 880,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 844,
                        "end": 851,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 844,
                          "end": 850,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 844,
                            "end": 845,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 848,
                            "end": 850,
                            "raw": "42",
                            "value": 42
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "start": 864,
                        "end": 870,
                        "label": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 828,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 889,
                  "end": 954,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 899,
                    "end": 954,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 913,
                        "end": 922,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 913,
                          "end": 921,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 913,
                            "end": 914,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 917,
                            "end": 921,
                            "raw": "true",
                            "value": true
                          }
                        }
                      },
                      {
                        "type": "ContinueStatement",
                        "start": 935,
                        "end": 944,
                        "label": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 897,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 963,
                  "end": 971,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 963,
                    "end": 970,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 964,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 967,
                      "end": 970,
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      },
                      "value": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 985,
              "end": 989,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 995,
            "end": 997,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 995,
              "end": 996,
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
        "start": 727,
        "end": 728,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1029,
      "end": 1320,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1042,
        "end": 1320,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1048,
            "end": 1101,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1052,
                "end": 1100,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1052,
                  "end": 1100,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1053,
                    "end": 1100,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1055,
                      "end": 1100,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1055,
                          "end": 1061
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1064,
                          "end": 1070
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1073,
                          "end": 1080
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1083,
                          "end": 1089,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1083,
                            "end": 1089,
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1092,
                          "end": 1100,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1092,
                            "end": 1100,
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
            "start": 1106,
            "end": 1113,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1106,
              "end": 1112,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1106,
                "end": 1107,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1110,
                "end": 1112,
                "raw": "\"\"",
                "value": ""
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "start": 1118,
            "end": 1301,
            "body": {
              "type": "BlockStatement",
              "start": 1121,
              "end": 1288,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1131,
                  "end": 1191,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1141,
                    "end": 1191,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1155,
                        "end": 1162,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1155,
                          "end": 1161,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1155,
                            "end": 1156,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1159,
                            "end": 1161,
                            "raw": "42",
                            "value": 42
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "start": 1175,
                        "end": 1181,
                        "label": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1139,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1200,
                  "end": 1265,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1210,
                    "end": 1265,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1224,
                        "end": 1233,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1224,
                          "end": 1232,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1224,
                            "end": 1225,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1228,
                            "end": 1232,
                            "raw": "true",
                            "value": true
                          }
                        }
                      },
                      {
                        "type": "ContinueStatement",
                        "start": 1246,
                        "end": 1255,
                        "label": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1208,
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1274,
                  "end": 1282,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1274,
                    "end": 1281,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1274,
                      "end": 1275,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1278,
                      "end": 1281,
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      },
                      "value": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 1296,
              "end": 1300,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1306,
            "end": 1308,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1306,
              "end": 1307,
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
        "start": 1038,
        "end": 1039,
        "decorators": [],
        "name": "g",
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
