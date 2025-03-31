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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 68,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 64,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 90,
                "end": 96,
                "id": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "name": "c2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 127,
                "end": 133,
                "id": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 129,
                  "name": "c3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 160,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "name": "c4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 186,
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
      "start": 188,
      "end": 220,
      "object": {
        "type": "Identifier",
        "start": 194,
        "end": 197,
        "name": "obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 211,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 213,
                  "name": "c5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 231,
            "end": 236,
            "id": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "var",
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 263,
                "end": 269,
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 265,
                  "name": "c6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 283,
            "end": 285,
            "id": {
              "type": "Identifier",
              "start": 283,
              "end": 285,
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 305,
                "end": 311,
                "id": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 307,
                  "name": "c7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
            "body": {
              "type": "VariableDeclaration",
              "start": 339,
              "end": 352,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 345,
                  "end": 351,
                  "id": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 347,
                    "name": "c8",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "label": {
              "type": "Identifier",
              "start": 332,
              "end": 337,
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
            "body": {
              "type": "LabeledStatement",
              "start": 384,
              "end": 413,
              "body": {
                "type": "LabeledStatement",
                "start": 392,
                "end": 413,
                "body": {
                  "type": "VariableDeclaration",
                  "start": 400,
                  "end": 413,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 406,
                      "end": 412,
                      "id": {
                        "type": "Identifier",
                        "start": 406,
                        "end": 408,
                        "name": "c9",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "const",
                  "declare": false
                },
                "label": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 398,
                  "name": "label4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "label": {
                "type": "Identifier",
                "start": 384,
                "end": 390,
                "name": "label3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 376,
              "end": 382,
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 454,
                "end": 461,
                "id": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 457,
                  "name": "c10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 487,
                  "end": 494,
                  "id": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 490,
                    "name": "c11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 518,
                "end": 525,
                "id": {
                  "type": "Identifier",
                  "start": 518,
                  "end": 521,
                  "name": "c12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 573,
              "end": 587,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 579,
                  "end": 586,
                  "id": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 582,
                    "name": "c13",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 596,
              "end": 602,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 562,
            "end": 563,
            "value": 0,
            "raw": "0"
          }
        },
        {
          "type": "SwitchCase",
          "start": 607,
          "end": 653,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "start": 624,
              "end": 638,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 630,
                  "end": 637,
                  "id": {
                    "type": "Identifier",
                    "start": 630,
                    "end": 633,
                    "name": "c14",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            {
              "type": "BreakStatement",
              "start": 647,
              "end": 653,
              "label": null
            }
          ],
          "test": null
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 679,
              "end": 686,
              "id": {
                "type": "Identifier",
                "start": 679,
                "end": 682,
                "name": "c15",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "kind": "const",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 708,
                  "end": 715,
                  "id": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 711,
                    "name": "c16",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            {
              "type": "LabeledStatement",
              "start": 724,
              "end": 747,
              "body": {
                "type": "VariableDeclaration",
                "start": 733,
                "end": 747,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 739,
                    "end": 746,
                    "id": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 742,
                      "name": "c17",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "kind": "const",
                "declare": false
              },
              "label": {
                "type": "Identifier",
                "start": 724,
                "end": 731,
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
      "start": 767,
      "end": 781,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 780,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 776,
            "name": "c18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "start": 809,
        "end": 831,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 815,
            "end": 829,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 821,
                "end": 828,
                "id": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 824,
                  "name": "c19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
      "start": 833,
      "end": 871,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 870,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 839,
            "name": "F2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 842,
            "end": 870,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 848,
              "end": 870,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 854,
                  "end": 868,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 860,
                      "end": 867,
                      "id": {
                        "type": "Identifier",
                        "start": 860,
                        "end": 863,
                        "name": "c20",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "const",
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
      "start": 873,
      "end": 917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 877,
          "end": 916,
          "id": {
            "type": "Identifier",
            "start": 877,
            "end": 879,
            "name": "F3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 882,
            "end": 916,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 894,
              "end": 916,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 900,
                  "end": 914,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 906,
                      "end": 913,
                      "id": {
                        "type": "Identifier",
                        "start": 906,
                        "end": 909,
                        "name": "c21",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "kind": "const",
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
      "start": 930,
      "end": 999,
      "id": {
        "type": "Identifier",
        "start": 937,
        "end": 938,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 951,
                "end": 958,
                "id": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 954,
                  "name": "c22",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "const",
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 983,
                    "end": 990,
                    "id": {
                      "type": "Identifier",
                      "start": 983,
                      "end": 986,
                      "name": "c23",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "kind": "const",
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
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1019,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1020,
        "end": 1235,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1026,
            "end": 1070,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1026,
              "end": 1037,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1037,
              "end": 1070,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1040,
                "end": 1070,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1050,
                    "end": 1064,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1056,
                        "end": 1063,
                        "id": {
                          "type": "Identifier",
                          "start": 1056,
                          "end": 1059,
                          "name": "c24",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
            "start": 1076,
            "end": 1115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1076,
              "end": 1082,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1082,
              "end": 1115,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1085,
                "end": 1115,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1095,
                    "end": 1109,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1101,
                        "end": 1108,
                        "id": {
                          "type": "Identifier",
                          "start": 1101,
                          "end": 1104,
                          "name": "c25",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
            "start": 1121,
            "end": 1180,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1125,
              "end": 1126,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1126,
              "end": 1180,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1129,
                "end": 1180,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1139,
                    "end": 1153,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1145,
                        "end": 1152,
                        "id": {
                          "type": "Identifier",
                          "start": 1145,
                          "end": 1148,
                          "name": "c26",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
                      "name": "c26",
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
            "start": 1186,
            "end": 1233,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1190,
              "end": 1191,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1191,
              "end": 1233,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1192,
                  "end": 1197,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1199,
                "end": 1233,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1209,
                    "end": 1227,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1215,
                        "end": 1226,
                        "id": {
                          "type": "Identifier",
                          "start": 1215,
                          "end": 1218,
                          "name": "c27",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 1221,
                          "end": 1226,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
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
      "start": 1256,
      "end": 1352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1260,
          "end": 1352,
          "id": {
            "type": "Identifier",
            "start": 1260,
            "end": 1261,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1270,
                  "end": 1271,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1271,
                  "end": 1304,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1274,
                    "end": 1304,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1284,
                        "end": 1298,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1290,
                            "end": 1297,
                            "id": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1293,
                              "name": "c28",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "const",
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
                "start": 1310,
                "end": 1350,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1310,
                  "end": 1312,
                  "name": "f2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1314,
                  "end": 1350,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1320,
                    "end": 1350,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1330,
                        "end": 1344,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1336,
                            "end": 1343,
                            "id": {
                              "type": "Identifier",
                              "start": 1336,
                              "end": 1339,
                              "name": "c29",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "kind": "const",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
