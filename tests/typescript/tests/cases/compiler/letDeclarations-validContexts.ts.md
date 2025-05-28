__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 1518,
  "body": [
    {
      "type": "IfStatement",
      "start": 39,
      "end": 95,
      "test": {
        "type": "Literal",
        "start": 43,
        "end": 47,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 49,
        "end": 69,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 67,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 62,
                  "decorators": [],
                  "name": "l1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 65,
                  "end": 66,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 75,
        "end": 95,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 93,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 88,
                  "decorators": [],
                  "name": "l2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 97,
      "end": 130,
      "test": {
        "type": "Literal",
        "start": 104,
        "end": 108,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 117,
            "end": 128,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 121,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 123,
                  "decorators": [],
                  "name": "l3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 126,
                  "end": 127,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 132,
      "end": 169,
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 155,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 142,
            "end": 153,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 148,
                  "decorators": [],
                  "name": "l4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 151,
                  "end": 152,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 163,
        "end": 167,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 179,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 178,
            "decorators": [],
            "name": "obj",
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
      "type": "WithStatement",
      "start": 180,
      "end": 210,
      "object": {
        "type": "Identifier",
        "start": 186,
        "end": 189,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 210,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 208,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "decorators": [],
                  "name": "l5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 206,
                  "end": 207,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 212,
      "end": 260,
      "init": {
        "type": "VariableDeclaration",
        "start": 217,
        "end": 226,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 221,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 225,
              "end": 226,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 228,
        "end": 234,
        "left": {
          "type": "Identifier",
          "start": 228,
          "end": 229,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 232,
          "end": 234,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 236,
        "end": 239,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 260,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 247,
            "end": 258,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 257,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 253,
                  "decorators": [],
                  "name": "l6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 256,
                  "end": 257,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 262,
      "end": 300,
      "left": {
        "type": "VariableDeclaration",
        "start": 267,
        "end": 273,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 271,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 271,
              "end": 273,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ObjectExpression",
        "start": 277,
        "end": 279,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 281,
        "end": 300,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 287,
            "end": 298,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 291,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 293,
                  "decorators": [],
                  "name": "l7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 296,
                  "end": 297,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 302,
      "end": 338,
      "test": {
        "type": "Literal",
        "start": 306,
        "end": 310,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 312,
        "end": 338,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 318,
            "end": 336,
            "label": {
              "type": "Identifier",
              "start": 318,
              "end": 323,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 325,
              "end": 336,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 329,
                  "end": 335,
                  "id": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 331,
                    "decorators": [],
                    "name": "l8",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 334,
                    "end": 335,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 340,
      "end": 397,
      "test": {
        "type": "Literal",
        "start": 347,
        "end": 352,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 397,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 360,
            "end": 395,
            "label": {
              "type": "Identifier",
              "start": 360,
              "end": 366,
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "LabeledStatement",
              "start": 368,
              "end": 395,
              "label": {
                "type": "Identifier",
                "start": 368,
                "end": 374,
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "LabeledStatement",
                "start": 376,
                "end": 395,
                "label": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 382,
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "VariableDeclaration",
                  "start": 384,
                  "end": 395,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 388,
                      "end": 394,
                      "id": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 390,
                        "decorators": [],
                        "name": "l9",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 393,
                        "end": 394,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TryStatement",
      "start": 420,
      "end": 504,
      "block": {
        "type": "BlockStatement",
        "start": 424,
        "end": 444,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 430,
            "end": 442,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 434,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
                  "decorators": [],
                  "name": "l10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 440,
                  "end": 441,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 445,
        "end": 475,
        "param": {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 455,
          "end": 475,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 461,
              "end": 473,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 465,
                  "end": 472,
                  "id": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 468,
                    "decorators": [],
                    "name": "l11",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 471,
                    "end": 472,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 484,
        "end": 504,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 490,
            "end": 502,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 501,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 497,
                  "decorators": [],
                  "name": "l12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 500,
                  "end": 501,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "SwitchStatement",
      "start": 516,
      "end": 627,
      "discriminant": {
        "type": "Literal",
        "start": 524,
        "end": 525,
        "value": 0,
        "raw": "0"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 533,
          "end": 576,
          "test": {
            "type": "Literal",
            "start": 538,
            "end": 539,
            "value": 0,
            "raw": "0"
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 549,
              "end": 561,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 553,
                  "end": 560,
                  "id": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 556,
                    "decorators": [],
                    "name": "l13",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 559,
                    "end": 560,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 570,
              "end": 576,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 581,
          "end": 625,
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 598,
              "end": 610,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 602,
                  "end": 609,
                  "id": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 605,
                    "decorators": [],
                    "name": "l14",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 608,
                    "end": 609,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 619,
              "end": 625,
              "label": null
            }
          ]
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 639,
      "end": 721,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 645,
          "end": 657,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 649,
              "end": 656,
              "id": {
                "type": "Identifier",
                "start": 649,
                "end": 652,
                "decorators": [],
                "name": "l15",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 655,
                "end": 656,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "BlockStatement",
          "start": 662,
          "end": 719,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 672,
              "end": 683,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 676,
                  "end": 683,
                  "id": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 679,
                    "decorators": [],
                    "name": "l16",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 682,
                    "end": 683,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "LabeledStatement",
              "start": 692,
              "end": 713,
              "label": {
                "type": "Identifier",
                "start": 692,
                "end": 699,
                "decorators": [],
                "name": "label17",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "VariableDeclaration",
                "start": 701,
                "end": 713,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 705,
                    "end": 712,
                    "id": {
                      "type": "Identifier",
                      "start": 705,
                      "end": 708,
                      "decorators": [],
                      "name": "l17",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 711,
                      "end": 712,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            }
          ]
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 733,
      "end": 745,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 737,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 740,
            "decorators": [],
            "name": "l18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 743,
            "end": 744,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 760,
      "end": 793,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 770,
        "decorators": [],
        "name": "F",
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
        "start": 773,
        "end": 793,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 779,
            "end": 791,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 783,
                "end": 790,
                "id": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 786,
                  "decorators": [],
                  "name": "l19",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 789,
                  "end": 790,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 831,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 799,
          "end": 830,
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 801,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 804,
            "end": 830,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 810,
              "end": 830,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 816,
                  "end": 828,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 820,
                      "end": 827,
                      "id": {
                        "type": "Identifier",
                        "start": 820,
                        "end": 823,
                        "decorators": [],
                        "name": "l20",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 826,
                        "end": 827,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 875,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 874,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "decorators": [],
            "name": "F3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 842,
            "end": 874,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 854,
              "end": 874,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 860,
                  "end": 872,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 864,
                      "end": 871,
                      "id": {
                        "type": "Identifier",
                        "start": 864,
                        "end": 867,
                        "decorators": [],
                        "name": "l21",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 870,
                        "end": 871,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 888,
      "end": 953,
      "id": {
        "type": "Identifier",
        "start": 895,
        "end": 896,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 897,
        "end": 953,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 903,
            "end": 915,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 907,
                "end": 914,
                "id": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 910,
                  "decorators": [],
                  "name": "l22",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 913,
                  "end": 914,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "BlockStatement",
            "start": 921,
            "end": 951,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 933,
                "end": 945,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 937,
                    "end": 944,
                    "id": {
                      "type": "Identifier",
                      "start": 937,
                      "end": 940,
                      "decorators": [],
                      "name": "l23",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 943,
                      "end": 944,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 966,
      "end": 1181,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 972,
        "end": 973,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 974,
        "end": 1181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 980,
            "end": 1022,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 980,
              "end": 991,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 991,
              "end": 1022,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 994,
                "end": 1022,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1004,
                    "end": 1016,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1008,
                        "end": 1015,
                        "id": {
                          "type": "Identifier",
                          "start": 1008,
                          "end": 1011,
                          "decorators": [],
                          "name": "l24",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1014,
                          "end": 1015,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1028,
            "end": 1065,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1028,
              "end": 1034,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1034,
              "end": 1065,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1037,
                "end": 1065,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1047,
                    "end": 1059,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1051,
                        "end": 1058,
                        "id": {
                          "type": "Identifier",
                          "start": 1051,
                          "end": 1054,
                          "decorators": [],
                          "name": "l25",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1057,
                          "end": 1058,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1071,
            "end": 1128,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1075,
              "end": 1076,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1076,
              "end": 1128,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1079,
                "end": 1128,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1089,
                    "end": 1101,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1093,
                        "end": 1100,
                        "id": {
                          "type": "Identifier",
                          "start": 1093,
                          "end": 1096,
                          "decorators": [],
                          "name": "l26",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1099,
                          "end": 1100,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1110,
                    "end": 1121,
                    "argument": {
                      "type": "Identifier",
                      "start": 1117,
                      "end": 1120,
                      "decorators": [],
                      "name": "l26",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1134,
            "end": 1179,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1139,
              "end": 1179,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1145,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1147,
                "end": 1179,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1157,
                    "end": 1173,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1161,
                        "end": 1172,
                        "id": {
                          "type": "Identifier",
                          "start": 1161,
                          "end": 1164,
                          "decorators": [],
                          "name": "l27",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1167,
                          "end": 1172,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1202,
      "end": 1294,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1206,
          "end": 1294,
          "id": {
            "type": "Identifier",
            "start": 1206,
            "end": 1207,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1210,
            "end": 1294,
            "properties": [
              {
                "type": "Property",
                "start": 1216,
                "end": 1248,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1217,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1217,
                  "end": 1248,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1220,
                    "end": 1248,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1230,
                        "end": 1242,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1234,
                            "end": 1241,
                            "id": {
                              "type": "Identifier",
                              "start": 1234,
                              "end": 1237,
                              "decorators": [],
                              "name": "l28",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1240,
                              "end": 1241,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 1254,
                "end": 1292,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1256,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1258,
                  "end": 1292,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1264,
                    "end": 1292,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1274,
                        "end": 1286,
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1278,
                            "end": 1285,
                            "id": {
                              "type": "Identifier",
                              "start": 1278,
                              "end": 1281,
                              "decorators": [],
                              "name": "l29",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1284,
                              "end": 1285,
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 1306,
      "end": 1325,
      "label": {
        "type": "Identifier",
        "start": 1306,
        "end": 1311,
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 1313,
        "end": 1325,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1317,
            "end": 1324,
            "id": {
              "type": "Identifier",
              "start": 1317,
              "end": 1320,
              "decorators": [],
              "name": "l30",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1323,
              "end": 1324,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      }
    },
    {
      "type": "BlockStatement",
      "start": 1326,
      "end": 1354,
      "body": [
        {
          "type": "LabeledStatement",
          "start": 1332,
          "end": 1352,
          "label": {
            "type": "Identifier",
            "start": 1332,
            "end": 1338,
            "decorators": [],
            "name": "label2",
            "optional": false,
            "typeAnnotation": null
          },
          "body": {
            "type": "VariableDeclaration",
            "start": 1340,
            "end": 1352,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1344,
                "end": 1351,
                "id": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1347,
                  "decorators": [],
                  "name": "l31",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1350,
                  "end": 1351,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1356,
      "end": 1438,
      "id": {
        "type": "Identifier",
        "start": 1365,
        "end": 1367,
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
        "start": 1370,
        "end": 1438,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1376,
            "end": 1395,
            "label": {
              "type": "Identifier",
              "start": 1376,
              "end": 1381,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 1383,
              "end": 1395,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1387,
                  "end": 1394,
                  "id": {
                    "type": "Identifier",
                    "start": 1387,
                    "end": 1390,
                    "decorators": [],
                    "name": "l32",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1393,
                    "end": 1394,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          },
          {
            "type": "BlockStatement",
            "start": 1400,
            "end": 1436,
            "body": [
              {
                "type": "LabeledStatement",
                "start": 1410,
                "end": 1430,
                "label": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1416,
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "VariableDeclaration",
                  "start": 1418,
                  "end": 1430,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1422,
                      "end": 1429,
                      "id": {
                        "type": "Identifier",
                        "start": 1422,
                        "end": 1425,
                        "decorators": [],
                        "name": "l33",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1428,
                        "end": 1429,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1440,
      "end": 1518,
      "id": {
        "type": "Identifier",
        "start": 1447,
        "end": 1449,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1450,
        "end": 1518,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1456,
            "end": 1475,
            "label": {
              "type": "Identifier",
              "start": 1456,
              "end": 1461,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 1463,
              "end": 1475,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1467,
                  "end": 1474,
                  "id": {
                    "type": "Identifier",
                    "start": 1467,
                    "end": 1470,
                    "decorators": [],
                    "name": "l34",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1473,
                    "end": 1474,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          },
          {
            "type": "BlockStatement",
            "start": 1480,
            "end": 1516,
            "body": [
              {
                "type": "LabeledStatement",
                "start": 1490,
                "end": 1510,
                "label": {
                  "type": "Identifier",
                  "start": 1490,
                  "end": 1496,
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "VariableDeclaration",
                  "start": 1498,
                  "end": 1510,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1502,
                      "end": 1509,
                      "id": {
                        "type": "Identifier",
                        "start": 1502,
                        "end": 1505,
                        "decorators": [],
                        "name": "l35",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 1508,
                        "end": 1509,
                        "value": 0,
                        "raw": "0"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              }
            ]
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
