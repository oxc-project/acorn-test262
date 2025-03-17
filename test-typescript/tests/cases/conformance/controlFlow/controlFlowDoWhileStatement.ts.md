__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1321,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
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
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "a",
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
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 60,
                  "name": "x",
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
            "start": 66,
            "end": 73,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 72,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
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
                  "expression": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 125,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "name": "b",
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
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 166,
                  "name": "x",
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
            "start": 172,
            "end": 179,
            "expression": {
              "type": "AssignmentExpression",
              "start": 172,
              "end": 178,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 176,
                "end": 178,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
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
                  "expression": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 218,
                  "end": 225,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 218,
                    "end": 224,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 222,
                      "end": 224,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
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
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 262,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 272,
        "name": "c",
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
                "id": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 303,
                  "name": "x",
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
            "start": 309,
            "end": 316,
            "expression": {
              "type": "AssignmentExpression",
              "start": 309,
              "end": 315,
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
                "end": 315,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
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
                  "expression": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 335,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 355,
                  "end": 369,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 355,
                    "end": 368,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 356,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 368,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 378,
                  "end": 414,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 382,
                    "end": 403,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 382,
                      "end": 390,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 395,
                      "end": 403,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 405,
                    "end": 414,
                    "label": null
                  },
                  "alternate": null
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
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 451,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 461,
        "name": "d",
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
                "id": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 492,
                  "name": "x",
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
            "start": 498,
            "end": 507,
            "expression": {
              "type": "AssignmentExpression",
              "start": 498,
              "end": 506,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 502,
                "end": 506,
                "value": 1000,
                "raw": "1000"
              }
            },
            "directive": null
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
                  "expression": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 546,
                  "end": 553,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 546,
                    "end": 552,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 550,
                      "end": 552,
                      "value": "",
                      "raw": "\"\""
                    }
                  },
                  "directive": null
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 571,
                "end": 579,
                "object": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 572,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 579,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 585,
            "end": 587,
            "expression": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
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
      "start": 600,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 610,
        "name": "e",
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
                "id": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 641,
                  "name": "x",
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
            "start": 647,
            "end": 654,
            "expression": {
              "type": "AssignmentExpression",
              "start": 647,
              "end": 653,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 651,
                "end": 653,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
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
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 672,
                    "end": 678,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 676,
                      "end": 678,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 693,
              "end": 697,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 703,
            "end": 705,
            "expression": {
              "type": "Identifier",
              "start": 703,
              "end": 704,
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
      "start": 718,
      "end": 1028,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 728,
        "name": "f",
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
                "id": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 789,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 772,
                            "end": 778,
                            "name": "RegExp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 781,
                          "end": 789,
                          "typeName": {
                            "type": "Identifier",
                            "start": 781,
                            "end": 789,
                            "name": "Function",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
            "start": 795,
            "end": 802,
            "expression": {
              "type": "AssignmentExpression",
              "start": 795,
              "end": 801,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 795,
                "end": 796,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 799,
                "end": 801,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
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
                  "test": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 828,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 830,
                    "end": 880,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 844,
                        "end": 851,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 844,
                          "end": 850,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 844,
                            "end": 845,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 848,
                            "end": 850,
                            "value": 42,
                            "raw": "42"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 864,
                        "end": 870,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 889,
                  "end": 954,
                  "test": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 897,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 899,
                    "end": 954,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 913,
                        "end": 922,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 913,
                          "end": 921,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 913,
                            "end": 914,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 917,
                            "end": 921,
                            "value": true,
                            "raw": "true"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ContinueStatement",
                        "start": 935,
                        "end": 944,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 963,
                  "end": 971,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 963,
                    "end": 970,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 963,
                      "end": 964,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 967,
                      "end": 970,
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 985,
              "end": 989,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 995,
            "end": 997,
            "expression": {
              "type": "Identifier",
              "start": 995,
              "end": 996,
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
      "start": 1029,
      "end": 1320,
      "id": {
        "type": "Identifier",
        "start": 1038,
        "end": 1039,
        "name": "g",
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
                "id": {
                  "type": "Identifier",
                  "start": 1052,
                  "end": 1100,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 1083,
                            "end": 1089,
                            "name": "RegExp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1092,
                          "end": 1100,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1092,
                            "end": 1100,
                            "name": "Function",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
            "start": 1106,
            "end": 1113,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1106,
              "end": 1112,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1106,
                "end": 1107,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1110,
                "end": 1112,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
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
                  "test": {
                    "type": "Identifier",
                    "start": 1135,
                    "end": 1139,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1141,
                    "end": 1191,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1155,
                        "end": 1162,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1155,
                          "end": 1161,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1155,
                            "end": 1156,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1159,
                            "end": 1161,
                            "value": 42,
                            "raw": "42"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 1175,
                        "end": 1181,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1200,
                  "end": 1265,
                  "test": {
                    "type": "Identifier",
                    "start": 1204,
                    "end": 1208,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1210,
                    "end": 1265,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1224,
                        "end": 1233,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1224,
                          "end": 1232,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1224,
                            "end": 1225,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1228,
                            "end": 1232,
                            "value": true,
                            "raw": "true"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ContinueStatement",
                        "start": 1246,
                        "end": 1255,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1274,
                  "end": 1282,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1274,
                    "end": 1281,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1274,
                      "end": 1275,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1278,
                      "end": 1281,
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 1296,
              "end": 1300,
              "value": true,
              "raw": "true"
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1306,
            "end": 1308,
            "expression": {
              "type": "Identifier",
              "start": 1306,
              "end": 1307,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
