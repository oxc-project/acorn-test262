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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 62,
                  "name": "l1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 88,
                  "name": "l2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 121,
                "end": 127,
                "id": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 123,
                  "name": "l3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 152,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 148,
                  "name": "l4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 178,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "name": "l5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 221,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "var",
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 257,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 253,
                  "name": "l6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 271,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 271,
              "end": 273,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 291,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 293,
                  "name": "l7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
            "body": {
              "type": "VariableDeclaration",
              "start": 325,
              "end": 336,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 329,
                  "end": 335,
                  "id": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 331,
                    "name": "l8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            },
            "label": {
              "type": "Identifier",
              "start": 318,
              "end": 323,
              "name": "label",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "body": {
              "type": "LabeledStatement",
              "start": 368,
              "end": 395,
              "body": {
                "type": "LabeledStatement",
                "start": 376,
                "end": 395,
                "body": {
                  "type": "VariableDeclaration",
                  "start": 384,
                  "end": 395,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 388,
                      "end": 394,
                      "id": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 390,
                        "name": "l9",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "let",
                  "declare": false
                },
                "label": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 382,
                  "name": "label4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "label": {
                "type": "Identifier",
                "start": 368,
                "end": 374,
                "name": "label3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 360,
              "end": 366,
              "name": "label2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 434,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 437,
                  "name": "l10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 465,
                  "end": 472,
                  "id": {
                    "type": "Identifier",
                    "start": 465,
                    "end": 468,
                    "name": "l11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 494,
                "end": 501,
                "id": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 497,
                  "name": "l12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 549,
              "end": 561,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 553,
                  "end": 560,
                  "id": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 556,
                    "name": "l13",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 570,
              "end": 576,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 538,
            "end": 539,
            "value": 0,
            "raw": "0"
          }
        },
        {
          "type": "SwitchCase",
          "start": 581,
          "end": 625,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 598,
              "end": 610,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 602,
                  "end": 609,
                  "id": {
                    "type": "Identifier",
                    "start": 602,
                    "end": 605,
                    "name": "l14",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 619,
              "end": 625,
              "label": null
            }
          ],
          "test": null
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 649,
              "end": 656,
              "id": {
                "type": "Identifier",
                "start": 649,
                "end": 652,
                "name": "l15",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "kind": "let",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 676,
                  "end": 683,
                  "id": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 679,
                    "name": "l16",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            },
            {
              "type": "LabeledStatement",
              "start": 692,
              "end": 713,
              "body": {
                "type": "VariableDeclaration",
                "start": 701,
                "end": 713,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 705,
                    "end": 712,
                    "id": {
                      "type": "Identifier",
                      "start": 705,
                      "end": 708,
                      "name": "l17",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "kind": "let",
                "declare": false
              },
              "label": {
                "type": "Identifier",
                "start": 692,
                "end": 699,
                "name": "label17",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 737,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 740,
            "name": "l18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "let",
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
        "name": "F",
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
        "start": 773,
        "end": 793,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 779,
            "end": 791,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 783,
                "end": 790,
                "id": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 786,
                  "name": "l19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 795,
      "end": 831,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 799,
          "end": 830,
          "id": {
            "type": "Identifier",
            "start": 799,
            "end": 801,
            "name": "F2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 804,
            "end": 830,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 810,
              "end": 830,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 816,
                  "end": 828,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 820,
                      "end": 827,
                      "id": {
                        "type": "Identifier",
                        "start": 820,
                        "end": 823,
                        "name": "l20",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 875,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 874,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "name": "F3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 842,
            "end": 874,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 854,
              "end": 874,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 860,
                  "end": 872,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 864,
                      "end": 871,
                      "id": {
                        "type": "Identifier",
                        "start": 864,
                        "end": 867,
                        "name": "l21",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 907,
                "end": 914,
                "id": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 910,
                  "name": "l22",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 937,
                    "end": 944,
                    "id": {
                      "type": "Identifier",
                      "start": 937,
                      "end": 940,
                      "name": "l23",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "kind": "let",
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
      "id": {
        "type": "Identifier",
        "start": 972,
        "end": 973,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 974,
        "end": 1181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 980,
            "end": 1022,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 980,
              "end": 991,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 991,
              "end": 1022,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 994,
                "end": 1022,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1004,
                    "end": 1016,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1008,
                        "end": 1015,
                        "id": {
                          "type": "Identifier",
                          "start": 1008,
                          "end": 1011,
                          "name": "l24",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1028,
            "end": 1065,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1028,
              "end": 1034,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1034,
              "end": 1065,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1037,
                "end": 1065,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1047,
                    "end": 1059,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1051,
                        "end": 1058,
                        "id": {
                          "type": "Identifier",
                          "start": 1051,
                          "end": 1054,
                          "name": "l25",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1071,
            "end": 1128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1075,
              "end": 1076,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1076,
              "end": 1128,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1079,
                "end": 1128,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1089,
                    "end": 1101,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1093,
                        "end": 1100,
                        "id": {
                          "type": "Identifier",
                          "start": 1093,
                          "end": 1096,
                          "name": "l26",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "let",
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
                      "name": "l26",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1134,
            "end": 1179,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1139,
              "end": 1179,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1140,
                  "end": 1145,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1147,
                "end": 1179,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1157,
                    "end": 1173,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1161,
                        "end": 1172,
                        "id": {
                          "type": "Identifier",
                          "start": 1161,
                          "end": 1164,
                          "name": "l27",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1167,
                          "end": 1172,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1202,
      "end": 1294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1206,
          "end": 1294,
          "id": {
            "type": "Identifier",
            "start": 1206,
            "end": 1207,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1217,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1217,
                  "end": 1248,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1220,
                    "end": 1248,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1230,
                        "end": 1242,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1234,
                            "end": 1241,
                            "id": {
                              "type": "Identifier",
                              "start": 1234,
                              "end": 1237,
                              "name": "l28",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "let",
                        "declare": false
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1254,
                "end": 1292,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1256,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1258,
                  "end": 1292,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1264,
                    "end": 1292,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1274,
                        "end": 1286,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1278,
                            "end": 1285,
                            "id": {
                              "type": "Identifier",
                              "start": 1278,
                              "end": 1281,
                              "name": "l29",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "let",
                        "declare": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 1306,
      "end": 1325,
      "body": {
        "type": "VariableDeclaration",
        "start": 1313,
        "end": 1325,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1317,
            "end": 1324,
            "id": {
              "type": "Identifier",
              "start": 1317,
              "end": 1320,
              "name": "l30",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "let",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 1306,
        "end": 1311,
        "name": "label",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "body": {
            "type": "VariableDeclaration",
            "start": 1340,
            "end": 1352,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1344,
                "end": 1351,
                "id": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1347,
                  "name": "l31",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
            "declare": false
          },
          "label": {
            "type": "Identifier",
            "start": 1332,
            "end": 1338,
            "name": "label2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "start": 1370,
        "end": 1438,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1376,
            "end": 1395,
            "body": {
              "type": "VariableDeclaration",
              "start": 1383,
              "end": 1395,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1387,
                  "end": 1394,
                  "id": {
                    "type": "Identifier",
                    "start": 1387,
                    "end": 1390,
                    "name": "l32",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            },
            "label": {
              "type": "Identifier",
              "start": 1376,
              "end": 1381,
              "name": "label",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "body": {
                  "type": "VariableDeclaration",
                  "start": 1418,
                  "end": 1430,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1422,
                      "end": 1429,
                      "id": {
                        "type": "Identifier",
                        "start": 1422,
                        "end": 1425,
                        "name": "l33",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "let",
                  "declare": false
                },
                "label": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1416,
                  "name": "label2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1440,
      "end": 1518,
      "id": {
        "type": "Identifier",
        "start": 1447,
        "end": 1449,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "body": {
              "type": "VariableDeclaration",
              "start": 1463,
              "end": 1475,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1467,
                  "end": 1474,
                  "id": {
                    "type": "Identifier",
                    "start": 1467,
                    "end": 1470,
                    "name": "l34",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            },
            "label": {
              "type": "Identifier",
              "start": 1456,
              "end": 1461,
              "name": "label",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "body": {
                  "type": "VariableDeclaration",
                  "start": 1498,
                  "end": 1510,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1502,
                      "end": 1509,
                      "id": {
                        "type": "Identifier",
                        "start": 1502,
                        "end": 1505,
                        "name": "l35",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "let",
                  "declare": false
                },
                "label": {
                  "type": "Identifier",
                  "start": 1490,
                  "end": 1496,
                  "name": "label2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
