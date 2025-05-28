__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 1352,
  "body": [
    {
      "type": "IfStatement",
      "start": 39,
      "end": 99,
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
        "end": 71,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 69,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 64,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 67,
                  "end": 68,
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
        "start": 77,
        "end": 99,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 97,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 90,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 95,
                  "end": 96,
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
      "start": 101,
      "end": 136,
      "test": {
        "type": "Literal",
        "start": 108,
        "end": 112,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 136,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 134,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 127,
                "end": 133,
                "id": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 129,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 132,
                  "end": 133,
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
      "start": 138,
      "end": 177,
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 163,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 148,
            "end": 161,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 160,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 159,
                  "end": 160,
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
        "start": 171,
        "end": 175,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 187,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
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
      "start": 188,
      "end": 220,
      "object": {
        "type": "Identifier",
        "start": 194,
        "end": 197,
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 199,
        "end": 220,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 205,
            "end": 218,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 211,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 213,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 216,
                  "end": 217,
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
      "start": 222,
      "end": 272,
      "init": {
        "type": "VariableDeclaration",
        "start": 227,
        "end": 236,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 231,
            "end": 236,
            "id": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 235,
              "end": 236,
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
        "start": 238,
        "end": 244,
        "left": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 242,
          "end": 244,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 246,
        "end": 249,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 251,
        "end": 272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 257,
            "end": 270,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 263,
                "end": 269,
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 265,
                  "decorators": [],
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 268,
                  "end": 269,
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
      "start": 274,
      "end": 314,
      "left": {
        "type": "VariableDeclaration",
        "start": 279,
        "end": 285,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 283,
            "end": 285,
            "id": {
              "type": "Identifier",
              "start": 283,
              "end": 285,
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
        "start": 289,
        "end": 291,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 293,
        "end": 314,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 299,
            "end": 312,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 305,
                "end": 311,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 307,
                  "decorators": [],
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 310,
                  "end": 311,
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
      "start": 316,
      "end": 354,
      "test": {
        "type": "Literal",
        "start": 320,
        "end": 324,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 326,
        "end": 354,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 332,
            "end": 352,
            "label": {
              "type": "Identifier",
              "start": 332,
              "end": 337,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 339,
              "end": 352,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 345,
                  "end": 351,
                  "id": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 347,
                    "decorators": [],
                    "name": "c8",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 350,
                    "end": 351,
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
      "start": 356,
      "end": 415,
      "test": {
        "type": "Literal",
        "start": 363,
        "end": 368,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "BlockStatement",
        "start": 370,
        "end": 415,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 376,
            "end": 413,
            "label": {
              "type": "Identifier",
              "start": 376,
              "end": 382,
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "LabeledStatement",
              "start": 384,
              "end": 413,
              "label": {
                "type": "Identifier",
                "start": 384,
                "end": 390,
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "LabeledStatement",
                "start": 392,
                "end": 413,
                "label": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 398,
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "VariableDeclaration",
                  "start": 400,
                  "end": 413,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 406,
                      "end": 412,
                      "id": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 408,
                        "decorators": [],
                        "name": "c9",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 411,
                        "end": 412,
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
      "start": 438,
      "end": 528,
      "block": {
        "type": "BlockStatement",
        "start": 442,
        "end": 464,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 448,
            "end": 462,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 454,
                "end": 461,
                "id": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 457,
                  "decorators": [],
                  "name": "c10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 460,
                  "end": 461,
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
        "start": 465,
        "end": 497,
        "param": {
          "type": "Identifier",
          "start": 472,
          "end": 473,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 475,
          "end": 497,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 481,
              "end": 495,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 487,
                  "end": 494,
                  "id": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 490,
                    "decorators": [],
                    "name": "c11",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 493,
                    "end": 494,
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
        "start": 506,
        "end": 528,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 512,
            "end": 526,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 518,
                "end": 525,
                "id": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 521,
                  "decorators": [],
                  "name": "c12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 524,
                  "end": 525,
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
      "start": 540,
      "end": 655,
      "discriminant": {
        "type": "Literal",
        "start": 548,
        "end": 549,
        "value": 0,
        "raw": "0"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 557,
          "end": 602,
          "test": {
            "type": "Literal",
            "start": 562,
            "end": 563,
            "value": 0,
            "raw": "0"
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 573,
              "end": 587,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 579,
                  "end": 586,
                  "id": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 582,
                    "decorators": [],
                    "name": "c13",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 585,
                    "end": 586,
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
              "start": 596,
              "end": 602,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 607,
          "end": 653,
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 624,
              "end": 638,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 630,
                  "end": 637,
                  "id": {
                    "type": "Identifier",
                    "start": 630,
                    "end": 633,
                    "decorators": [],
                    "name": "c14",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 636,
                    "end": 637,
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
              "start": 647,
              "end": 653,
              "label": null
            }
          ]
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 667,
      "end": 755,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 673,
          "end": 687,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 679,
              "end": 686,
              "id": {
                "type": "Identifier",
                "start": 679,
                "end": 682,
                "decorators": [],
                "name": "c15",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 685,
                "end": 686,
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
          "start": 692,
          "end": 753,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 702,
              "end": 715,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 708,
                  "end": 715,
                  "id": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 711,
                    "decorators": [],
                    "name": "c16",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 714,
                    "end": 715,
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
              "start": 724,
              "end": 747,
              "label": {
                "type": "Identifier",
                "start": 724,
                "end": 731,
                "decorators": [],
                "name": "label17",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "VariableDeclaration",
                "start": 733,
                "end": 747,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 739,
                    "end": 746,
                    "id": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 742,
                      "decorators": [],
                      "name": "c17",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 745,
                      "end": 746,
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
      "start": 767,
      "end": 781,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 780,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 776,
            "decorators": [],
            "name": "c18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 779,
            "end": 780,
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
      "start": 796,
      "end": 831,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 806,
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
        "start": 809,
        "end": 831,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 815,
            "end": 829,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 821,
                "end": 828,
                "id": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 824,
                  "decorators": [],
                  "name": "c19",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 827,
                  "end": 828,
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
      "start": 833,
      "end": 871,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 870,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 842,
            "end": 870,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 848,
              "end": 870,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 854,
                  "end": 868,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 860,
                      "end": 867,
                      "id": {
                        "type": "Identifier",
                        "start": 860,
                        "end": 863,
                        "decorators": [],
                        "name": "c20",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 866,
                        "end": 867,
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
      "start": 873,
      "end": 917,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 877,
          "end": 916,
          "id": {
            "type": "Identifier",
            "start": 877,
            "end": 879,
            "decorators": [],
            "name": "F3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 882,
            "end": 916,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 894,
              "end": 916,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 900,
                  "end": 914,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 906,
                      "end": 913,
                      "id": {
                        "type": "Identifier",
                        "start": 906,
                        "end": 909,
                        "decorators": [],
                        "name": "c21",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 912,
                        "end": 913,
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
      "start": 930,
      "end": 999,
      "id": {
        "type": "Identifier",
        "start": 937,
        "end": 938,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 939,
        "end": 999,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 945,
            "end": 959,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 951,
                "end": 958,
                "id": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 954,
                  "decorators": [],
                  "name": "c22",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 957,
                  "end": 958,
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
            "start": 965,
            "end": 997,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 977,
                "end": 991,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 983,
                    "end": 990,
                    "id": {
                      "type": "Identifier",
                      "start": 983,
                      "end": 986,
                      "decorators": [],
                      "name": "c23",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 989,
                      "end": 990,
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
      "start": 1012,
      "end": 1235,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1019,
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
        "start": 1020,
        "end": 1235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1026,
            "end": 1070,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1026,
              "end": 1037,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1037,
              "end": 1070,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1040,
                "end": 1070,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1050,
                    "end": 1064,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1056,
                        "end": 1063,
                        "id": {
                          "type": "Identifier",
                          "start": 1056,
                          "end": 1059,
                          "decorators": [],
                          "name": "c24",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1062,
                          "end": 1063,
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
            "start": 1076,
            "end": 1115,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1076,
              "end": 1082,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1082,
              "end": 1115,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1085,
                "end": 1115,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1095,
                    "end": 1109,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1101,
                        "end": 1108,
                        "id": {
                          "type": "Identifier",
                          "start": 1101,
                          "end": 1104,
                          "decorators": [],
                          "name": "c25",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1107,
                          "end": 1108,
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
            "start": 1121,
            "end": 1180,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1125,
              "end": 1126,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1126,
              "end": 1180,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1129,
                "end": 1180,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1139,
                    "end": 1153,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1145,
                        "end": 1152,
                        "id": {
                          "type": "Identifier",
                          "start": 1145,
                          "end": 1148,
                          "decorators": [],
                          "name": "c26",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1151,
                          "end": 1152,
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
                    "start": 1162,
                    "end": 1173,
                    "argument": {
                      "type": "Identifier",
                      "start": 1169,
                      "end": 1172,
                      "decorators": [],
                      "name": "c26",
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
            "start": 1186,
            "end": 1233,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1190,
              "end": 1191,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1191,
              "end": 1233,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1192,
                  "end": 1197,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1199,
                "end": 1233,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1209,
                    "end": 1227,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1215,
                        "end": 1226,
                        "id": {
                          "type": "Identifier",
                          "start": 1215,
                          "end": 1218,
                          "decorators": [],
                          "name": "c27",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1221,
                          "end": 1226,
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
      "start": 1256,
      "end": 1352,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1260,
          "end": 1352,
          "id": {
            "type": "Identifier",
            "start": 1260,
            "end": 1261,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1264,
            "end": 1352,
            "properties": [
              {
                "type": "Property",
                "start": 1270,
                "end": 1304,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1270,
                  "end": 1271,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1271,
                  "end": 1304,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1274,
                    "end": 1304,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1284,
                        "end": 1298,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1290,
                            "end": 1297,
                            "id": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1293,
                              "decorators": [],
                              "name": "c28",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1296,
                              "end": 1297,
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
                "start": 1310,
                "end": 1350,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1310,
                  "end": 1312,
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1314,
                  "end": 1350,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1320,
                    "end": 1350,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1330,
                        "end": 1344,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1336,
                            "end": 1343,
                            "id": {
                              "type": "Identifier",
                              "start": 1336,
                              "end": 1339,
                              "decorators": [],
                              "name": "c29",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 1342,
                              "end": 1343,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
